// Schema definition for Animal model in MongoDB database:

const mongoose = require('mongoose');  // import mongoose module for schema creation

const animalSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToAdopt: Boolean
})

const Animal = mongoose.model('Animal', animalSchema);  // create a model based on the schema


module.exports = Animal  // export the model