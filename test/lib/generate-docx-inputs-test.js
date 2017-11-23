const test = require('ava')
const generateDocx = require('../../index')

test('requires an options object', async t => {
  const options = false
  try {
    await generateDocx(options)
  } catch (e) {
    t.is(e.message, 'Missing required input: options')
  }
})

test('requires options.template too exist', async t => {
  const options = {
    template: false
  }
  try {
    await generateDocx(options)
  } catch (e) {
    t.is(e.message, 'Missing required input: options.template')
  }
})

test('requires options.template.filePath too exist', async t => {
  const options = {
    template: {
      filePath: false
    }
  }
  try {
    await generateDocx(options)
  } catch (e) {
    t.is(e.message, 'Missing required input: options.template.filePath')
  }
})

test('requires options.template.data too exist', async t => {
  const options = {
    template: {
      filePath: 'yup',
      data: false
    }
  }
  try {
    await generateDocx(options)
  } catch (e) {
    t.is(e.message, 'Missing required input: options.template.data')
  }
})

test('requires options.save.filePath too exist if save', async t => {
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
  try {
    await generateDocx(options)
  } catch (e) {
    t.is(e.message, 'Missing required input: options.save.filePath')
  }
})
