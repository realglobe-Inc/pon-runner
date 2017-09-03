/**
 * Test case for taskMix.
 * Runs with mocha.
 */
'use strict'

const taskMix = require('../lib/mixins/task_mix.js')
const {deepEqual} = require('assert')

describe('task-mix', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Task mix', async () => {
    const TaskMixed = taskMix(
      class {}
    )
    const mixed = new TaskMixed({})
    mixed.registerTasks({
      a: () => {},
      b: () => {},
      c: ['a', 'b', () => {}],
      d: {
        'e': () => {}
      }
    })
    deepEqual(
      Object.keys(mixed.tasks),
      ['a', 'b', 'c', 'd', 'd/e']
    )
  })
})

/* global describe, before, after, it */
