'use strict'

const tap = require('tap')
const generateDocx = require('../../index')

tap.test('returns buffer with template', (test) => {
  const options = {
    template: {
      filePath: 'test/data/testdoc.docx',
      data: {
        'title': 'This is the title',
        'description': 'Description is good',
        'body': 'My body is my temple'
      }
    }
  }

  generateDocx(options)
    .then(buf => {
      tap.type(buf, 'Buffer', 'buffer returned ok')
      test.done()
    })
    .catch(error => {
      throw error
    })
})
