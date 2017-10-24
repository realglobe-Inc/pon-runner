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
      const s = this
      s.tasks = {}
    }

    getTask (name) {
      const s = this
      return s.tasks[name]
    }

    hasTask (name) {
      const s = this
      return !!s.getTask(name)
    }

    registerTasks (tasks) {
      const s = this
      for (const name of Object.keys(tasks)) {
        const task = tasks[name]
        s.registerTask(name, task)
      }
    }

    registerTask (name, task) {
      const s = this
      s.tasks[name] = task
      if (Array.isArray(task)) {
        for (const [i, subTask] of task.entries()) {
          s.registerTask(`${name}/${i}`, subTask)
        }
      } else {
        const subNames = Object.keys(task)
          .filter((subName) => typeof task[subName] === 'function')
        for (const subName of subNames) {
          s.registerTask([name, subName].join('/'), task[subName])
        }
      }
    }

    removeTask (name) {
      const s = this
      s.getTask(name)
      return s
    }

    tasksWithPatterns (...patterns) {
      patterns = patterns.map((pattern) => String(pattern).trim())
      const s = this
      const {tasks} = s
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
