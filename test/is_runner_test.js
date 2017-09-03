/**
 * Test case for isRunner.
 * Runs with mocha.
 */
'use strict'

const isRunner = require('../lib/is_runner.js')
const PonRunner = require('../lib/pon_runner')
const { ok } = require('assert')


describe('is-runner', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Is runner', async () => {
    ok(isRunner(new PonRunner({})))
    ok(!isRunner(null))
    ok(!isRunner(''))
    ok(!isRunner(false))
    ok(!isRunner({ foo: 'bar' }))
  })
})

/* global describe, before, after, it */
