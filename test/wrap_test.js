/**
 * Test case for wrap.
 * Runs with mocha.
 */
'use strict'

const wrap = require('../lib/wrap.js')
const assert = require('assert')
const React = require('react')
const co = require('co')

describe('wrap', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Wrap', () => co(function * () {
    let Base = React.createClass({
      propTypes: {
        hoge: React.PropTypes.string
      },
      render () {
        return React.createElement('div')
      },
      statics: {
        foo () {
          return 'This is foo!'
        }
      }
    })
    let Wrapped = wrap(Base, {
      statics: {
        bar () {
          return 'This is bar'
        }
      },
      render () {
        return React.createElement(Base)
      }
    })
    let elm = React.createElement(Wrapped, {})
    assert.ok(elm)
    assert.ok(Wrapped.foo())
    assert.ok(Wrapped.propTypes.hoge)
  }))
})

/* global describe, before, after, it */
