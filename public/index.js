/* eslint-disable no-unused-vars */
const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  app.use(express.static('public'))
  app.use(bodyParser.json())

  app.get('http://ergast.com/api/f1/2017/1/qualifying', (req, res) => {
    const f1data = db.collection('f1data')
    f1data.find({}, (err, result) => {
      result.toArray().then(data => {
        res.json(data)
      })
    })
  })
})

app.listen(3000)
