// import modules:
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors'); // CORS Middleware for security 
const bodyParser = require('body-parser');   // Body Parser Middleware used to parse request body
const Fruit = require('./models/fruit'); // import Fruit model
const dbConnection = require('./config/dbConnection'); // import dbConnection function
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const fs = require('fs');
// const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
 
// initialize app
const app = express();
const port = process.env.PORT || 3000; // process.env.PORT is for Heroku deployment and 3000 is for local development 
  

// connect to MongoDB:
dbConnection(); // call dbConnection function to connect to MongoDB database


// Middleware: 
app.use(cors());
app.use(bodyParser.json());


// define routes:
app.get('/api/items', (req, res) => {
    res.send('Hello World!')
})







app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})