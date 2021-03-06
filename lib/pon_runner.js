/**
 * Simple task runner
 * @class PonRunner
 * @param {Object<string, function>} tasks
 * @param {Object} [options={}] - Optional settings
 * @param {function} [options.prefixer] - Prefix resolver
 */
'use strict'

const {EventEmitter} = require('events')
const {
  taskMix,
  contextMix
} = require('./mixins')
const argx = require('argx')

const TICK_TASK = 'pon:task'

const PonBase = [
  taskMix,
  contextMix
].reduce((Mixed, mix) => mix(Mixed), EventEmitter)

/** @lends PonRunner */
class PonRunner extends PonBase {
  get $$runner () {
    return true
  }

  constructor (tasks, options = {}) {
    super()
    const {
      prefixer = ({taskName}) => `[${taskName}] `
    } = options
    this.registerTasks(tasks)
    this.prefixer = prefixer
    this.doc = options.doc || tasks.$doc || {}
    this.cwd = tasks.$cwd
    this.dev = tasks.$dev || false
  }

  /**
   * Run a function
   * @param {...string} patterns - Name patten(s) to run
   * @param {Object} [options] - optional setting
   * @returns {Promise}
   */
  async run (patterns, options) {
    const args = argx(arguments)
    options = args.pop('object') || {}
    const {
      disableLogging: disableLoggingForRun = false,
      throwIfEmpty = false,
    } = options
    patterns = args.remain()
    if (patterns.length === 0) {
      patterns = ['*']
    }
    patterns = patterns.reduce(([], pattern) => [...pattern.split(',')], [])
    const results = {}
    for (const pattern of patterns) {
      const tasks = this.tasksWithPatterns(...pattern.split('&'))
      // Run parallel
      await Promise.all(
        Object.keys(tasks).map(async (taskName) => {
          const ctx = this.newContext({
            task: taskName,
            runner: this
          })
          const {timer, logger} = ctx
          logger.PREFIX = this.prefixer && this.prefixer({taskName})
          const taskArray = [].concat(tasks[taskName]).reduce((taskArray, task) => {
            if (typeof task === 'object') {
              return taskArray.concat(task.default || `${taskName}/*`)
            }
            return taskArray.concat(task)
          }, [])
          for (const task of taskArray) {
            if (typeof task === 'string') {
              const subResults = await this.run(task, options)
              for (const name of Object.keys(subResults)) {
                results[name] = [...(results[name] || []), ...subResults[name]]
              }
              continue
            }
            const disableLogging = disableLoggingForRun || task.$disableLogging
            const loggerDisabled = logger.disabled
            timer.tick(TICK_TASK)
            if (disableLogging) {
              logger.disabled = true
            }
            logger.info(`Task started...`)
            const result = await Promise.resolve(task(ctx))
            results[taskName] = [...(results[taskName] || []), result]
            const took = timer.tick(TICK_TASK)
            logger.info(`...done! (${took}ms)\n`)
            if (disableLogging) {
              logger.disabled = loggerDisabled
            }
          }
        })
      )
    }
    const isEmpty = Object.keys(results).length === 0
    if (isEmpty && throwIfEmpty) {
      throw new Error(`[pon] No task found: ${JSON.stringify(patterns)}`)
    }
    return results
  }

  /**
   * Returns runner function bound to the instance
   * @returns {ponBound} Bound function
   */
  bind () {
    const run = this.run.bind(this)
    return Object.assign(run, {
      $$runner: true,
      bind: () => this.bind(),
      run,
      tasks: this.tasks,
      doc: this.doc,
      cwd: this.cwd,
      dev: this.dev,
    })
  }

  /**
   * Set tasks
   * @param {Object.<string, function>} tasks - Tasks to register
   */
  set (tasks) {
    this.registerTasks(tasks)
    return this
  }

  /**
   * Set task aliases
   * @param {Object.<string, string>} pointers
   */
  alias (pointers) {
    for (const alias of Object.keys(pointers)) {
      const taskName = pointers[alias]
      const unknownTaskName = [].concat(taskName).find((taskName) => !this.hasTask(taskName))
      if (unknownTaskName) {
        console.warn(`Unknown task "${unknownTaskName}" for alias "${alias}`)
      }
      this.registerTask(alias, {default: taskName, isAlias: true})
    }
    return this
  }

}

module.exports = PonRunner

/**
 * @typedef {Object<string, function|tasks>} tasks
 */

/**
 * @typedef {function} ponBound
 */
