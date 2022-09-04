//const config = require('../config')
const mongoose = require('mongoose');
const config = require('../config');


const connectDb = async() => {
    
  const db = config.mongoURI
  console.log(db);
  try {
    await mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true,})
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
      
}

module.exports = connectDb;