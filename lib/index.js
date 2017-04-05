/**
 * Runner for pon
 * @module pon-runner
 */

'use strict'

const create = require('./create')
const PonRunner = require('./pon_runner')
const isRunner = require('./is_runner')

let lib = create.bind(this)

Object.assign(lib, PonRunner, {
  create,
  PonRunner,
  isRunner
})

module.exports = lib