const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.get('/messages',async(req,res) => {
  try {
    const messages = await Message.find().sort({date: -1});
    res.json(messages)
    
  } catch (error) {
    console.log(error);
    res.status(500).json({err: {msg: 'server error'}});
  }
})