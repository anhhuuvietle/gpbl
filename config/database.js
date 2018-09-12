const mongoose = require('mongoose');
mongoose.connect('mongodb://gpbl:gpbl2018@ds046677.mlab.com:46677/gpbl',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connect successfully")
});

// Create schema
// Add object to schema when user send info, check if it is too near
// When user only send location, get data from db, consider what is out of date
// Check the distance and send back an array
