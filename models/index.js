const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  

module.exports.Place = require('./places')
