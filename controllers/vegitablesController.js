// Routes for vegitables to perform CRUD operations on vegitables:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Vegitable = require('../models/vegitable');


// const vegitablesController = (app) => {   // function to create routes for vegitables (we can use this function in server.js or index.js)

//     app.use('/api/vegitables', router);
// }


router.post('/', async (req, res) => {      // create/post a new vegitable in MongoDB database 
    const { name, color, taste, rootVegitable } = req.body;
    const newVegitable = new Vegitable({
        name,
        color,
        taste,
        rootVegitable
    });
    await newVegitable.save();
    res.send(newVegitable);
})


router.get('/', async (req, res) => {   // get all vegitables from the database
    const vegitables = await Vegitable.find();
    res.send(vegitables);
})


router.get('/:id', async (req, res) => {      // get a specific vegitable from the database
    const vegitable = await Vegitable.findById(req.params.id);
    res.send(vegitable);
})


router.put('/:id', async (req, res) => {      // update an existing vegitable in the database
    const { name, color, taste, rootVegitable } = req.body;
    const updatedVegitable = await Vegitable.findByIdAndUpdate(req.params.id, {
        name,
        color,
        taste,
        rootVegitable
    }, { new: true });
    res.send(updatedVegitable);
})



router.delete('/:id', async (req, res) => {      // delete a specific vegitable from the MongoDB database
    const deletedVegitable = await Vegitable.findByIdAndDelete(req.params.id);
    res.send(deletedVegitable);
})




module.exports = router