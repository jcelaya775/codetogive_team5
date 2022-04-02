const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const spawn = require('child_process').spawn;

// const users = require('./routes/users');
const app = express();

const child = spawn('python', ['script.py']);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// child.stdout.on('data', (data) => {
//   const parsedData = JSON.parse(data.toString())
//   console.log(parsedData)
// });

// child.on('close', (code) => {
//   if (code !== 0) console.log('An error has occurred.')
// });

// obj = { name: 'Alfred', age: 18, programming: 10, finance: 12, math: 7 };

// child.stdin.write(obj);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`));