//3 Models Mongo Application Project:
// import modules:
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors'); // CORS Middleware for security 
const bodyParser = require('body-parser');   // Body Parser Middleware used to parse request body
const dbConnection = require('./config/dbConnection'); // import dbConnection function

const fruitsController = require('./controllers/fruitsController'); // import fruitsController
const Fruit = require('./models/fruit');
const { createFruit, getFruits, getFruit, updateFruit, deleteFruit } = require('./controllers/fruitsController');

const animalsController = require('./controllers/animalsController'); // import animalsController
const Animal = require('./models/animal');
const { createAnimal, getAnimals, getAnimal, updateAnimal, deleteAnimal } = require('./controllers/animalsController');

const vegitablesController = require('./controllers/vegitablesController'); // import vegitablesController
const Vegitable = require('./models/vegitable');
const { createVegitable, getVegitables, getVegitable, updateVegitable, deleteVegitable } = require('./controllers/vegitablesController');


 
// initialize app and port number: 
const app = express();
const port = process.env.PORT || 3000;



// Middlewares for Project: 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());



//Animals Routes Handlers:
app.post('/api/animals', createAnimal); // route handler for creating an animal
app.get('/api/animals', getAnimals); // route handler for getting all animals
app.get('/api/animals/:id', getAnimal); // route handler for getting a single animal
app.put('/api/animals/:id', updateAnimal); // route handler for updating an animal
app.delete('/api/animals/:id', deleteAnimal); // route handler for deleting an animal



//Fruits Routes Handlers:
app.post('/api/fruits', createFruit); // route handler for creating a fruit
app.get('/api/fruits', getFruits); // route handler for getting all fruits
app.get('/api/fruits/:id', getFruit); // route handler for getting a single fruit
app.put('/api/fruits/:id', updateFruit); // route handler for updating a fruit
app.delete('/api/fruits/:id', deleteFruit); // route handler for deleting a fruit


//Vegitables Routes Handlers:
app.post('/api/vegitables', createVegitable); // route handler for creating a vegitable
app.get('/api/vegitables', getVegitables); // route handler for getting all vegitables
app.get('/api/vegitables/:id', getVegitable); // route handler for getting a single vegitable
app.put('/api/vegitables/:id', updateVegitable); // route handler for updating a vegitable
app.delete('/api/vegitables/:id', deleteVegitable); // route handler for deleting a vegitable








// connect to MongoDB database:
dbConnection(); 








// start server:
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})