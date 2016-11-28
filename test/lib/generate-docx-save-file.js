'use strict'

const tap = require('tap')
const generateDocx = require('../../index')

tap.test('saves file if passed save', (test) => {
  const options = {
    template: {
      filePath: 'test/data/testdoc.docx',
      data: {
        'title': 'This is the title',
        'description': 'Description is good',
        'body': 'My body is my temple'
      }
    },
    save: {
      filePath: 'test/data/savedfile.docx'
    }
  }

  generateDocx(options, function (error, message) {
    if (error) {
      throw error
    }

    tap.equal(message.status, 'File written', 'file written ok')

    test.done()
  })
})
