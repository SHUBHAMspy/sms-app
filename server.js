require('dotenv').config()
const express = require('express');
const { default: helmet } = require('helmet');
const connectDb = require('./db');

const app = express();

//Connect Database
connectDb();

// Init Middlewares
app.use(helmet());
app.use(express.json({ extended: false }));

// Define Routes


//Start listening on server
const port = process.env.PORT || 5000;
const server = app.listen(port,() => {console.log(`Listening on port ${port}...`);})

module.exports = server
