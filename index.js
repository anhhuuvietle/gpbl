const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Put all API endpoints under '/api'
app.get('/api/example', (req, res) => {
  res.json({ "success" : true })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back 404 response
app.get('*', (req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);