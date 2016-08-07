/**
 * Wrap a element with higher order component
 * @function wrap
 * @param {Object} Base - Base react class
 * @param {Object} spec - Additional spec to wrap
 */
'use strict'

const React = require('react')

const reservedNames = [
  'displayName',
  'mixins',
  'childContextTypes',
  'contextTypes',
  'getDefaultProps',
  'propTypes',
  'statics',
  'autobind'
]

/** @lends wrap */
function wrap (Base, spec) {
  let propTypes = Object.assign({},
    Base.propTypes,
    spec.propTypes
  )
  let statics = Object.assign({},
    Object.keys(Base)
      .filter((key) => !~reservedNames.indexOf(key))
      .reduce((statics, key) => Object.assign(statics, {
        [key]: Base[ key ]
      }), {}),
    spec.statics
  )
  return React.createClass(
    Object.assign({}, spec, {
      propTypes,
      statics
    })
  )
}

module.exports = wrap
