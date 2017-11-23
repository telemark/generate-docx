const test = require('ava')
const generateDocx = require('../../index')

test('returns buffer with template', async t => {
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

  const buf = await generateDocx(options)
  t.true(buf instanceof Buffer)
})
