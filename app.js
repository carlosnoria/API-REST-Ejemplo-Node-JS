'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//No se incluye el nombre del archivo (index.js) por que no hace falta
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app