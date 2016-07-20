/**
 * Browser react utility
 * @module breact
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get create () { return d(require('./create')) },
  get mount () { return d(require('./mount')) },
  get once () { return d(require('./once')) }
}