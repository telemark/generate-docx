// const { writeFileSync } = require('fs')
const generateDocx = require('./index')

const options = {
  template: {
    filePath: 'test/data/testdoc.docx',
    data: {
      title: 'This is the title',
      description: 'Description is good',
      body: 'My body is my temple'
    }
  },
  save: {
    filePath: 'test/data/savedfilenew.docx'
  }
}

/*
const options = {
  template: {
    filePath: 'test/data/testdoc.docx',
    data: {
      title: 'This is the title',
      description: 'Description is good',
      body: 'My body is my temple'
    }
  }
}
*/

generateDocx(options)
  .then(console.log)
  .catch(console.error)

/*
generateDocx(options, (error, message) => {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
*/

/*
generateDocx(options, (error, buf) => {
  if (error) {
    console.error(error)
  } else {
    writeFileSync('test/data/frombuffer.docx', buf)
    console.log('File written')
  }
})
*/
