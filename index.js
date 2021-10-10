require('appoptics-apm')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  setTimeout(() => res.send('Hello World!'), 5000)
})

app.get('/reference', function (req, res) {
  res.send(message)
})

app.get('/range', function (req, res) {
  const arr = [90,88]
  arr.length=90**99
  res.send('Did It Work?')
})

app.get('/type', function (req, res) {
  const num = 123
  num.toUpperCase()
  res.send('Did It Work?')
})

app.get('/uri', function (req, res) {
  decodeURI("%")
  res.send('Did It Work?')
})

app.get('/custom', function (req, res) {
  throw new Error('Something went wrong')
})

app.get('/not-found', function (req, res) {
  res.status(404).send({
    status: 404,
    error: 'Not found'
  })
})

app.listen(3000, () => console.log('App listening on port 3000!'))