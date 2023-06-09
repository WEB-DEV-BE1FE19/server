const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

app.use(cors())

app.use(express.static('public'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(routes)
app.listen(port, "0.0.0.0", () => {
    console.log(`app connected on localhost:${port}`)
})