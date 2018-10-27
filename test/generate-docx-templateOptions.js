const test = require('ava')
const generateDocx = require('../index')

test('it can configure docxtemplater with an options object ', async t => {
  const options = {
    template: {
      filePath: 'test/data/testdoc.docx',
      data: {
        title: 'hello \n world'
      }
    },
    templateOptions: {
      linebreaks: true,
      paragraphLoop: true
    }
  }
  const buf = await generateDocx(options)
  t.true(buf instanceof Buffer)
})
