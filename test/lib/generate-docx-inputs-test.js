'use strict'

const tap = require('tap')
const generateDocx = require('../../index')

tap.test('requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  generateDocx(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.template too exist', function (test) {
  var options = {
    template: false
  }
  var expectedErrorMessage = 'Missing required input: options.template'
  generateDocx(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.template.filePath too exist', function (test) {
  var options = {
    template: {
      filePath: false
    }
  }
  var expectedErrorMessage = 'Missing required input: options.template.filePath'
  generateDocx(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.template.data too exist', function (test) {
  var options = {
    template: {
      filePath: 'yup',
      data: false
    }
  }
  var expectedErrorMessage = 'Missing required input: options.template.data'
  generateDocx(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.save.filePath too exist if save', function (test) {
  var options = {
    template: {
      filePath: 'yup',
      data: {
        title: 'data'
      }
    },
    save: {
      filePath: false
    }
  }
  var expectedErrorMessage = 'Missing required input: options.save.filePath'
  generateDocx(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
