const express = require('express');
const path = require('path');
const data = require('./data/data');

const app = express()
const port = 3000

app.use('/static-page',express.static('public'));

app.get('/', (req, res) => {
  res.json(data);
})

app.get('/class/:id', (req, res) => {
  const studentId = Number(req.params.id);

  const student = data.filter((student) => student.id === studentId);

  res.send(student);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})