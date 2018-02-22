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
      c: ['a', 'b', () => {}, {hoge: () => {}}, [() => {}]],
      d: {
        'e': () => {}
      }
    })
    deepEqual(
      Object.keys(mixed.tasks),
      [
        'a',
        'b',
        'c',
        'c/0',
        'c/1',
        'c/2',
        'c/3',
        'c/3/hoge',
        'c/4',
        'c/4/0',
        'd',
        'd/e'
      ]
    )

    mixed.delTask('a')
    mixed.registerTask('a', () => null)
  })
})

/* global describe, before, after, it */
