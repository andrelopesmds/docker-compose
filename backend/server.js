'use strict';
 
const express = require('express');

const cors = require('cors');

 
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.send('Hello World from backend');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
