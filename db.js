const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'
db = mongoose.connection;


// checK code is run

mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  ////////////////////////////////////////////////

// event listener to data base connection

  db.on('connected',()=>{
    console.log('Connected to MongoDB WITH FUNCTION');
  })
  db.on('disconnected',()=>{
    console.log('disconnect to MongoDB WITH FUNCTION');
  })
  db.on('error',(err)=>{
    console.log('error to MongoDB WITH FUNCTION',err);
  })

/////////////////////////////////////////////////////////////////////
module.exports = db