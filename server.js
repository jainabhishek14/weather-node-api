"use strict"

require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const compression = require("compression")
const helmet = require("helmet")

const app = express()

app.use(compression())
app.use(helmet())

const port = process.env.PORT || 6666

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

require("./app/routes")(app)

app.listen(port, () => {
  console.log("We are live on " + port)
})
