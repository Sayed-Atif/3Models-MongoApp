// MongoDB Connection File for Database Application:
const mongoose = require('mongoose');  // import mongoose module for MongoDB connection
const dotenv = require('dotenv').config();  // import dotenv module for environment variables

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to MongoDB Cluster: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}




module.exports = dbConnection  // export the function dbConnection