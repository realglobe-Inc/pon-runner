/**
 * Test case for ponRunner.
 * Runs with mocha.
 */
'use strict'

const PonRunner = require('../lib/pon_runner.js')
const asleep = require('asleep')
const { deepEqual } = require('assert')
const co = require('co')

describe('pon-runner', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon', () => co(function * () {
    let run = new PonRunner({
      foo: () => co(function * () {
        yield asleep(100)
        return 'foo finished!'
      })
    }).bind()
    let results = yield run('foo')
    deepEqual(results, { foo: [ 'foo finished!' ] })
  }))

  it('pattern', () => co(function * () {
    let run = new PonRunner({
      foo: (ctx) => co(function * () {
        yield asleep(100)
        ctx.logger.debug('Log of foo')
        return 'foo finished!'
      }),
      bar: (ctx) => co(function * () {
        yield asleep(100)
        ctx.logger.debug('Log of bar')
        return 'bar finished!'
      })
    }).bind()
    let results = yield run('*')
    deepEqual(results, {
      foo: [ 'foo finished!' ],
      bar: [ 'bar finished!' ]
    })
  }))

  it('Nested', () => co(function * () {
    let run = new PonRunner({
      foo: {
        bar: () => 'This is baz!'
      },
      quz: {
        default: [
          () => 'd1',
          () => 'd2'
        ]
      }
    }).bind()
    let results = yield run('foo/bar')
    deepEqual(results, { 'foo/bar': [ 'This is baz!' ] })

    deepEqual(yield run('quz'), { quz: [ 'd1', 'd2' ] })
  }))

  it('Alias', () => co(function * () {
    let run = new PonRunner({
      foo: {
        bar: () => 'This is baz!'
      },
      baz: [ 'foo/bar' ]
    }).alias({
      f: 'baz',
      f2: [ 'baz' ]
    }).bind()
    let results = yield run('f')
    deepEqual(results, { 'foo/bar': [ 'This is baz!' ] })
  }))
})

/* global describe, before, after, it */
