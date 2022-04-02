const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const { spawn } = require('child_process');

const users = require('./routes/api/users');
const app = express();

const obj = { name: 'Alfred', age: 18, programming: 10, finance: 12, math: 7 };
const child = spawn('python', ['./python/process.py', JSON.stringify(obj)]);

// app.get('/', (req, res) => {
//   const userObj = { name: 'Alfred', age: 18, programming: 10, finance: 12, math: 7 };
//   res.json(userObj);
// });

child.stdout.on('data', (data) => {
  const str = data.toString().replace(/'/g, `"`);
  const obj = JSON.parse(str);

  console.log(str);

  app.get('/', (req, res) => {
    res.json(obj)
  });
});

child.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
})

child.on('close', (code) => {
  if (code !== 0) console.log('An error has occurred.');
  console.log(`child process exited with code ${code}`);
});

// child.stdin.write('/');

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`));