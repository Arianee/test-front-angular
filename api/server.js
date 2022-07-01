const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

const books = require('./books');

app.get('/', (req,res) => {
  res.send('Hello .arianee')
})

app.get('/books', (req,res) => {
  res.json(books)
})

app.listen(3000,() => {
  console.log("Server up and running")
})
