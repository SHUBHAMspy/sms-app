const express = require('express');
const twilio = require('twilio');
const Message = require('../models/Message');
const router = express.Router();

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.get('/',async(req,res) => {
  // Welcome Message
  res.send('Welcome to the Network');

  // Get Variables
  const { recipient, textmessage } = req.query;

  const otp = Math.floor(100000 + Math.random() * 900000) 
  const message = new Message({
    text : textmessage + otp,
  })

  await message.save()

  // Send Text
  client.messages.create({
    body: message,
    to: recipient, //text this number
    from: process.env.TWILIO_PHONE_NUMBER
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
})