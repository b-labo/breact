/**
 * Test case for mount.
 * Runs with mocha.
 */
'use strict'

const mount = require('../lib/mount.js')
const assert = require('assert')
const co = require('co')

describe('mount', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Mount', () => co(function * () {
    let caught
    try {
      yield mount(null)
    } catch (err) {
      caught = err
    }
    assert.ok(!!caught)
  }))
})

/* global describe, before, after, it */
