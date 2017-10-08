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
    const s = this
    const {
      prefixer = ({taskName}) => `[${taskName}] `
    } = options
    s.registerTasks(tasks)
    s.prefixer = prefixer
  }

  /**
   * Run a function
   * @param {...string} patterns - Name patten(s) to run
   * @returns {Promise}
   */
  async run (...patterns) {
    const s = this
    if (patterns.length === 0) {
      patterns = ['*']
    }
    patterns = patterns.reduce(([], pattern) => [...pattern.split(',')], [])
    const results = {}
    for (const pattern of patterns) {
      const tasks = s.tasksWithPatterns(...pattern.split('&'))
      // Run parallel
      await Promise.all(
        Object.keys(tasks).map(async (taskName) => {
          const ctx = s.newContext({
            task: taskName
          })
          const {timer, logger} = ctx
          logger.PREFIX = s.prefixer && s.prefixer({taskName})
          const taskArray = [].concat(tasks[taskName]).reduce((taskArray, task) => {
            if (typeof task === 'object') {
              return taskArray.concat(task.default || `${taskName}/*`)
            }
            return taskArray.concat(task)
          }, [])
          for (const task of taskArray) {
            if (typeof task === 'string') {
              const subResults = await s.run(task)
              for (const name of Object.keys(subResults)) {
                results[name] = [...(results[name] || []), ...subResults[name]]
              }
              continue
            }
            timer.tick(TICK_TASK)
            logger.info(`Task started...`)
            const result = await Promise.resolve(task(ctx))
            results[taskName] = [...(results[taskName] || []), result]
            const took = timer.tick(TICK_TASK)
            logger.info(`...done! (${took}ms)\n`)
          }
        })
      )
    }
    return results
  }

  /**
   * Returns runner function bound to the instance
   * @returns {ponBound} Bound function
   */
  bind () {
    const s = this
    const run = s.run.bind(s)
    return Object.assign(run, {
      $$runner: true,
      bind: () => s.bind(),
      run,
      tasks: s.tasks
    })
  }

  /**
   * Set tasks
   * @param {Object.<string, function>} tasks - Tasks to register
   */
  set (tasks) {
    const s = this
    s.registerTasks(tasks)
    return s
  }

  /**
   * Set task aliases
   * @param {Object.<string, string>} pointers
   */
  alias (pointers) {
    const s = this
    for (const alias of Object.keys(pointers)) {
      const taskName = pointers[alias]
      const unknownTaskName = [].concat(taskName).find((taskName) => !s.hasTask(taskName))
      if (unknownTaskName) {
        console.warn(`Unknown task "${unknownTaskName}" for alias "${alias}`)
      }
      s.registerTask(alias, {default: taskName, isAlias: true})
    }
    return s
  }

}

module.exports = PonRunner

/**
 * @typedef {Object<string, function|tasks>} tasks
 */

/**
 * @typedef {function} ponBound
 */
