const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Put all API endpoints under '/api'
app.get('/api/example', (req, res) => {
  res.json({ "success" : true })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back 404 response
app.get('*', (req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 5050;
app.listen(port);

console.log(`Server listening on ${port}`);