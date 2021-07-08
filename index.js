const { promisify } = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const Docxtemplater = require('docxtemplater')
const JSzip = require('jszip')

const generateDocx = async options => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.template) {
    throw Error('Missing required input: options.template')
  }
  if (!options.template.filePath) {
    throw Error('Missing required input: options.template.filePath')
  }
  if (!options.template.data) {
    throw Error('Missing required input: options.template.data')
  }
  if (options.save && !options.save.filePath) {
    throw Error('Missing required input: options.save.filePath')
  }

  const template = await readFile(options.template.filePath, 'binary')
  const zip = new JSzip(template)
  const templateOptions = options.templateOptions || {}

  const document = new Docxtemplater()
    .loadZip(zip)
    .setData(options.template.data)
    .setOptions(templateOptions)
    .render()

  const buf = document
    .getZip()
    .generate({
      type: 'nodebuffer',
      compression: 'DEFLATE',
    })

  if (options.save) {
    await writeFile(options.save.filePath, buf)
    return { status: 'File written' }
  } else {
    return buf
  }
}

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    generateDocx(options)
      .then(data => callback ? callback(null, data) : resolve(data))
      .catch(error => callback ? callback(error, null) : reject(error))
  })
}
