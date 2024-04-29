// const mongoose = require('mongoose');
// const dbConnection = require('../config/dbConnection');
// const { vegitableSchema, Vegitable } = require('../models/vegitable');


// // Define your Mongoose schema
// // const yourSchema = new mongoose.Schema({
// //     fieldName: String,
// //     anotherField: Number,
// //     yetAnotherField: String
// // });

// // Define indexes on your schema
// vegitableSchema.index({ name: 1 }); // 1 for ascending index, -1 for descending
// vegitableSchema.index({ color: 1, rootVegitable: -1 });

// // Compile the schema into a model
// // const YourModel = mongoose.model('YourModel', yourSchema);

// // Connect to MongoDB
// mongoose.connect('MONGO_URI', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');

//         // Create indexes (if any) when connected
//         return Vegitable.init();
//     })
//     .then(() => {
//         console.log('Indexes created successfully');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });


// module.exports = { Vegitable, vegitableSchema }


  























//     /*Another way to create indexes:
//     // Create indexes for the collections: 

// // Fruit.createIndexes({
// //     name: -1
// // });

// // Vegitable.createIndexes({
// //     name: 1
// // });
// const createIndexes = async () => {
//     // await dbConnection();
//     const Fruit = mongoose.model('Fruit');
//     const Vegitable = mongoose.model('Vegitable');

//     await Fruit.createIndexes({
//         name: -1
//     });
//     await Vegitable.createIndexes({
//         name: 1
//     });
// }
// */




    