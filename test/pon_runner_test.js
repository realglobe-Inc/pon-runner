/**
 * Test case for ponRunner.
 * Runs with mocha.
 */
'use strict'

const PonRunner = require('../lib/pon_runner.js')
const asleep = require('asleep')
const {deepEqual, ok} = require('assert')

describe('pon-runner', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Pon', async () => {
    const runner = new PonRunner({
      $doc: {},
      $cwd: __dirname,
      foo: async () => {
        await asleep(100)
        return 'foo finished!'
      }
    })
    deepEqual(Object.keys(runner.tasks), [
      'foo'
    ])
    const run = runner.bind()
    let results = await run('foo')
    deepEqual(results, {foo: ['foo finished!']})

    ok(runner.cwd)
  })

  it('pattern', async () => {
    const run = new PonRunner({
      foo: async (ctx) => {
        await asleep(100)
        ctx.logger.debug('Log of foo')
        return 'foo finished!'
      },
      bar: async (ctx) => {
        await asleep(100)
        ctx.logger.debug('Log of bar')
        return 'bar finished!'
      }
    }).bind()
    const results = await run('*')
    deepEqual(results, {
      foo: ['foo finished!'],
      bar: ['bar finished!']
    })
  })

  it('Nested', async () => {
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
    let results = await run('foo/bar')
    deepEqual(results, {'foo/bar': ['This is baz!']})

    deepEqual(await run('quz'), {quz: ['d1', 'd2']})
  })

  it('Alias', async () => {
    let run = new PonRunner({
      foo: {
        bar: () => 'This is baz!'
      },
      baz: ['foo/bar']
    }).alias({
      f: 'baz',
      f2: ['baz']
    }).bind()
    let results = await run('f')
    deepEqual(results, {'foo/bar': ['This is baz!']})

    ok(run.tasks.f.isAlias)
  })
})

/* global describe, before, after, it */
