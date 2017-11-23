const test = require('ava')
const generateDocx = require('../../index')

test('saves file if passed save', async t => {
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

  const res = await generateDocx(options)
  t.is(res.status, 'File written')
})
