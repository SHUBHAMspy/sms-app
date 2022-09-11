require('dotenv').config()
const express = require('express');
const cors = require('cors')
const { default: helmet } = require('helmet');
const connectDb = require('./db');

const app = express();

//Connect Database
connectDb();

// Init Middlewares
app.use(helmet());
app.use(express.json({ extended: false }));
app.use(cors({
  origin:'http://localhost:3000', 
        credentials:true,  //access-control-allow-credentials:true
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type','x-auth-token']
}))

// Define Routes
//POST user registration
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
//GET POST UPDATE DELETE contact, authentication required
app.use('/api/contacts', require('./routes/contacts'));
// Send Message 
app.use('/api/send-text', require('./routes/sendText'))
// GET Sent messages
app.use('/api/messages',require('./routes/messages'))



//Start listening on server
const port = process.env.PORT || 5000;
const server = app.listen(port,() => {console.log(`Listening on port ${port}...`);})

module.exports = server
