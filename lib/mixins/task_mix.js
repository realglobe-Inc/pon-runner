/**
 * Mix task feature
 * @function taskMix
 * @param {function} BaseClass
 * @returns {function} Mixed class
 */
'use strict'

const minimatch = require('minimatch')

/** @lends taskMix */
function taskMix (BaseClass) {
  /** @class */
  class TaskMixed extends BaseClass {
    get $$taskMixed () {
      return true
    }

    constructor () {
      super(...arguments)
      this.tasks = {}
    }

    getTask (name) {
      return this.tasks[name]
    }

    hasTask (name) {
      return !!this.getTask(name)
    }

    registerTasks (tasks) {
      const taskNames = Object.keys(tasks)
        .filter((name) => !/^[$_]/.test(name))
      for (const name of taskNames) {
        const task = tasks[name]
        this.registerTask(name, task)
      }
    }

    registerTask (name, task) {
      if (this.tasks[name]) {
        throw new Error(`[PonRunner] task "${name}" is already registered`)
      }
      this.tasks[name] = task
      if (Array.isArray(task)) {
        for (const [i, subTask] of task.entries()) {
          this.registerTask(`${name}/${i}`, subTask)
        }
      } else {
        const subNames = Object.keys(task)
          .filter((subName) => typeof task[subName] === 'function')
        for (const subName of subNames) {
          this.registerTask([name, subName].join('/'), task[subName])
        }
      }
    }

    removeTask (name) {
      this.getTask(name)
      return this
    }

    tasksWithPatterns (...patterns) {
      patterns = patterns.map((pattern) => String(pattern).trim())
      const {tasks} = this
      return Object.keys(tasks)
        .filter((name) => patterns.some((pattern) => minimatch(name, pattern)))
        .reduce((resolved, name) => Object.assign(resolved, {
          [name]: tasks[name]
        }), {})
    }

  }

  return TaskMixed
}

module.exports = taskMix
