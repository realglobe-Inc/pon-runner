/**
 * Mixin functions
 * @module mixins
 */

'use strict'

const d = (module) => module && module.default || module

const contextMix = d(require('./context_mix'))
const taskMix = d(require('./task_mix'))

module.exports = {
  contextMix,
  taskMix
}


exports.contextMix = contextMix
exports.taskMix = taskMix
