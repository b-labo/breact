/**
 * Create an element
 * @function create
 * @param {Object} Component
 * @param {Object} props
 * @returns {Object}
 */
'use strict'

const React = require('react')

/** @lends create */
function create (Component, props) {
  props = Object.assign({}, props) // Copy props to cut prototype chain
  return React.createElement(Component, props)
}

module.exports = create
