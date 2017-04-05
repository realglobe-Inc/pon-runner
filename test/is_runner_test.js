/**
 * Test case for isRunner.
 * Runs with mocha.
 */
'use strict'

const isRunner = require('../lib/is_runner.js')
const PonRunner = require('../lib/pon_runner')
const { ok } = require('assert')
const co = require('co')

describe('is-runner', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is runner', () => co(function * () {
    ok(isRunner(new PonRunner({})))
    ok(!isRunner(null))
    ok(!isRunner(''))
    ok(!isRunner(false))
    ok(!isRunner({ foo: 'bar' }))
  }))
})

/* global describe, before, after, it */
