/**
 * Browser react utility
 * @module breact
 */

'use strict';

var d = function d(module) {
  return module.default || module;
};

module.exports = {
  get create() {
    return d(require('./create'));
  },
  get mount() {
    return d(require('./mount'));
  },
  get once() {
    return d(require('./once'));
  }
};
//# sourceMappingURL=data:application/json;base64,bnVsbA==