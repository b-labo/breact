/**
 * Create static markup
 * @function markup
 * @param {Object} Component - Component class
 * @param {Object} props - Properties
 * @param {Object[]} children - Child elements
 * @returns {string} - Static markup
 */
'use strict'

const React = require('react')
const ReactDomServer = require('react-dom/server')

/** @lends markup */
function markup (Component, props, children) {
  let elm = React.createElement(Component, props, ...children)
  return ReactDomServer.renderToStaticMarkup(elm)
}

module.exports = markup
