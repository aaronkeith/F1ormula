const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  app.use(express.static('public'))
  app.use(bodyParser.json())

  app.post('http://ergast.com/api/f1/2010/drivers.json', (req, res) => {
    const driversCollection = db.collection('drivers')
    driversCollection.insertOne(req.body, (err, r) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        console.log('driver found')
        res.sendStatus(200)
      }
    })
  })
})

app.listen(3000)
