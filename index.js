'use strict'

const fs = require('fs')
const Docxtemplater = require('docxtemplater')
const JSZip = require('jszip')

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input: options'))
  }
  if (!options.template) {
    return callback(new Error('Missing required input: options.template'))
  }
  if (!options.template.filePath) {
    return callback(new Error('Missing required input: options.template.filePath'))
  }
  if (!options.template.data) {
    return callback(new Error('Missing required input: options.template.data'))
  }
  if (options.save && !options.save.filePath) {
    return callback(new Error('Missing required input: options.save.filePath'))
  }

  const template = fs.readFileSync(options.template.filePath, 'binary')
  const zip = new JSZip(template)
  let document = new Docxtemplater().loadZip(zip)

  document.setData(options.template.data)

  document.render()

  const buf = document.getZip().generate({type: 'nodebuffer'})

  if (options.save) {
    fs.writeFileSync(options.save.filePath, buf)
    return callback(null, {status: 'File written'})
  } else {
    return callback(null, buf)
  }
}
