const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  text:{
    type:String,
    minLength:1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Messages',messageSchema);

module.exports = Message;
