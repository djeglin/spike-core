/**
 * @module Errors
 */

/**
 * @class SpikeError
 * @classdesc A spike-specific error class
 * @param {Object} args - error arguments object
 * @param {Number} args.id - error id
 * @param {String} args.message - the error message
 */
class SpikeError extends Error {
  constructor (id, err) {
    super(err)
    this.id = id
    this.name = 'SpikeError'
    console.log(err)
    // this logic merges the original error with the trace to here
    this.message = err.message.replace(/^Error: /, '')
    Error.captureStackTrace(this, this.constructor)
    this.stack += err.stack.replace(`Error: ${err.message}`, '')
  }
}
exports.Error = SpikeError

/**
 * @class SpikeWarning
 * @classdesc A spike-specific warning class
 * @param {Object} args - error arguments object
 * @param {Number} args.id - error id
 * @param {String} args.message - the error message
 */
class SpikeWarning extends SpikeError {
  constructor (id, err) {
    super(id, err)
    this.name = 'SpikeWarning'
  }
}
exports.Warning = SpikeWarning
