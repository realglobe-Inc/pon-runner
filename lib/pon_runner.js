/**
 * Simple task runner
 * @class PonRunner
 * @param {Object<string, function>} tasks
 */
'use strict'

const co = require('co')
const { EventEmitter } = require('events')
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

  constructor (tasks) {
    super()
    const s = this
    s.registerTasks(tasks)
  }

  /**
   * Run a function
   * @param {...string} patterns - Name patten(s) to run
   * @returns {Promise}
   */
  run (...patterns) {
    const s = this
    if (patterns.length === 0) {
      patterns = [ '*' ]
    }
    return co(function * () {
      let results = {}
      for (let pattern of patterns) {
        let tasks = s.tasksWithPatterns(...pattern.split(','))
        // Run parallel
        yield Promise.all(
          Object.keys(tasks).map((taskName) => co(function * () {
            let ctx = s.newContext({
              task: taskName
            })
            let { timer, logger } = ctx
            logger.PREFIX = `[${taskName}] `
            let taskArray = [].concat(tasks[ taskName ]).reduce((taskArray, task) => {
              if (typeof task === 'object') {
                return taskArray.concat(task.default || `${taskName}/*`)
              }
              return taskArray.concat(task)
            }, [])
            for (let task of taskArray) {
              if (typeof task === 'string') {
                let subResults = yield s.run(task)
                for (let name of Object.keys(subResults)) {
                  results[ name ] = [ ...(results[ name ] || []), ...subResults[ name ] ]
                }
                continue
              }
              timer.tick(TICK_TASK)
              logger.info(`Task started...`)
              let result = yield Promise.resolve(task(ctx))
              results[ taskName ] = [ ...(results[ taskName ] || []), result ]
              let took = timer.tick(TICK_TASK)
              logger.info(`...done! (${took}ms)\n`)
            }
          }))
        )
      }
      return results
    })
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
    for (let alias of Object.keys(pointers)) {
      let taskName = pointers[ alias ]
      let unknownTaskName = [].concat(taskName).find((taskName) => !s.hasTask(taskName))
      if (unknownTaskName) {
        console.warn(`Unknown task "${unknownTaskName}" for alias "${alias}`)
      }
      s.registerTask(alias, { default: taskName, isAlias: true })
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
