const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  app.use(express.static('public'))
  app.use(bodyParser.json())
})

app.listen(3000)
