const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
})