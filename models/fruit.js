// Schema definition for Fruit model in MongoDB database:
const mongoose = require('mongoose');  // import mongoose module for schema creation

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: Number,
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema);  // create a model based on the schema 




module.exports = Fruit  // export the model 