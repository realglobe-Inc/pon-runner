/**
 * Mixin functions
 * @module mixins
 */

'use strict'


const contextMix = require('./context_mix')
const taskMix = require('./task_mix')

exports.contextMix = contextMix
exports.taskMix = taskMix

module.exports = {
  contextMix,
  taskMix
}
