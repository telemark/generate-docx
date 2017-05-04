'use strict'

const fs = require('fs')
const Docxtemplater = require('docxtemplater')
const JSZip = require('jszip')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options')
      return callback ? callback(error, null) : reject(error)
    }
    if (!options.template) {
      const error = new Error('Missing required input: options.template')
      return callback ? callback(error, null) : reject(error)
    }
    if (!options.template.filePath) {
      const error = new Error('Missing required input: options.template.filePath')
      return callback ? callback(error, null) : reject(error)
    }
    if (!options.template.data) {
      const error = new Error('Missing required input: options.template.data')
      return callback ? callback(error, null) : reject(error)
    }
    if (options.save && !options.save.filePath) {
      const error = new Error('Missing required input: options.save.filePath')
      return callback ? callback(error, null) : reject(error)
    }

    const template = fs.readFileSync(options.template.filePath, 'binary')
    const zip = new JSZip(template)
    let document = new Docxtemplater().loadZip(zip)

    document.setData(options.template.data)

    document.render()

    const buf = document.getZip().generate({type: 'nodebuffer'})

    if (options.save) {
      fs.writeFileSync(options.save.filePath, buf)
      const status = {status: 'File written'}
      return callback ? callback(null, status) : resolve(status)
    } else {
      return callback ? callback(null, buf) : resolve(buf)
    }
  })
}
