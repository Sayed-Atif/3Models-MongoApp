// import modules:
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors'); // CORS Middleware for security 
const bodyParser = require('body-parser');   // Body Parser Middleware used to parse request body
const Fruit = require('./models/fruit'); // import Fruit model
const dbConnection = require('./config/dbConnection'); // import dbConnection function
const fruitsController = require('./controllers/fruitsController'); // import fruitsController
const vegitablesController = require('./controllers/vegitablesController'); // import vegitablesController
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/fruits', fruitsController);  // call fruitsController to perform CRUD operations on fruits 
app.use('/', fruitsController); 
app.use('/api/vegitables', vegitablesController);  // call vegitablesController to perform CRUD operations on vegitables
app.use('/', vegitablesController);




//To populate the database with fruits:(for testing purposes)
// app.post('/api/populate-fruits', async (req, res) => {   // create/post multiple fruits in the database
//     const fruits = [
//         {
//             name: 'Apple',
//             color: 'Red',
//             readyToEat: true
//         }
//     ]
//     await Fruit.insertMany(fruits);
//     res.send(fruits);
// })









// what is means on the command line:
// On branch master
// Changes to be committed:
//   (use "git restore --staged <file>..." to unstage)
//         modified:   server.js




app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})