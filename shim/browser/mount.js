/**
 * Mount an element into dom
 * @function mount
 * @param {string|Object} container - Container element or it's id
 * @param {Object} element - React element to mount.
 * @returns {Promise}
 */
'use strict';

var _require = require('bwindow');

var get = _require.get;

var ReactDOM = require('react-dom');

function mount(container, element) {
  if (!container) {
    return Promise.reject(new Error('Container not found'));
  }
  if (typeof container === 'string') {
    var document = get('document', { strict: true });
    var found = document.getElementById(container);
    if (!container) {
      return Promise.reject(new Error('Container not found: ' + container));
    }
    container = found;
  }

  return new Promise(function (resolve, reject) {
    return ReactDOM.render(element, container, function () {
      return resolve();
    });
  });
}
module.exports = mount;
//# sourceMappingURL=data:application/json;base64,bnVsbA==