const express = require('express')
const req = require('express/lib/request')

const app = express()
app.use(express.json())

require('./routes/routes')(app)



module.exports = app