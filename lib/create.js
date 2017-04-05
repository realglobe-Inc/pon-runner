/**
 * Create a PonRunner instance
 * @function create
 * @param {...*} args
 * @returns {PonRunner}
 */
'use strict'

const PonRunner = require('./pon_runner')

/** @lends create */
function create (...args) {
  return new PonRunner(...args)
}

module.exports = create
