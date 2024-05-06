// Schema definition for Vegitable model:
const mongoose = require('mongoose');  // import mongoose module for schema creation

const vegitableSchema = new mongoose.Schema({    
    name: String,
    color: String,
    taste: String,
    rootVegitable: Boolean
})

const Vegitable = mongoose.model('Vegitable', vegitableSchema);  // create a model based on the schema for Vegitable

module.exports = Vegitable