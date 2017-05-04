'use strict'

const tap = require('tap')
const generateDocx = require('../../index')

tap.test('requires an options object', test => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  generateDocx(options)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('requires options.template too exist', test => {
  const options = {
    template: false
  }
  const expectedErrorMessage = 'Missing required input: options.template'
  generateDocx(options)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('requires options.template.filePath too exist', test => {
  const options = {
    template: {
      filePath: false
    }
  }
  const expectedErrorMessage = 'Missing required input: options.template.filePath'
  generateDocx(options)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('requires options.template.data too exist', test => {
  const options = {
    template: {
      filePath: 'yup',
      data: false
    }
  }
  const expectedErrorMessage = 'Missing required input: options.template.data'
  generateDocx(options)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('requires options.save.filePath too exist if save', test => {
  const options = {
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
  const expectedErrorMessage = 'Missing required input: options.save.filePath'
  generateDocx(options)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})
