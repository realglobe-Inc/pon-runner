/**
 * Detect pon runner instance or not
 * @function isRunner
 * @param {*} obj
 * @returns {boolean}
 */
'use strict'

const PonRunner = require('./pon_runner')

/** @lends isRunner */
function isRunner (obj) {
  if (!obj) {
    return false
  }
  return (obj instanceof PonRunner) || obj.$$runner
}

module.exports = isRunner
