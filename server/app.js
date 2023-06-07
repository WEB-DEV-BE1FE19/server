const express = require('express')
const app = express()
const routes = require('../server/routes/index')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(routes)
app.listen(port, "0.0.0.0", () => {
    console.log(`app connected on localhost:${port}`)
})