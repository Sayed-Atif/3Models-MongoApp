// Routes for fruits to perform CRUD operations on fruits:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Fruit = require('../models/fruit');


// const fruitsController = (app) => {   // function to create routes for fruits (we can use this function in server.js )

//     app.use('/api/fruits', router);
// }


router.post('/', async (req, res) => {      // create/post a new fruit in the database  
    const { name, color, readyToEat } = req.body;
    const newFruit = new Fruit({
        name,
        color,
        readyToEat
    });
    await newFruit.save();
    res.send(newFruit);
})


router.get('/', async (req, res) => {   // get all fruits from the database 
    const fruits = await Fruit.find();
    res.send(fruits);
    // res.json(fruits);
})


router.get('/:id', async (req, res) => {   // get/fetch/read/pull/select a specific fruit from the database
    const fruit = await Fruit.findById(req.params.id);
    res.send(fruit);
    // res.json(fruit);
})


router.put('/:id', async (req, res) => {    // update an existing fruit in the database 
    const { name, color, readyToEat } = req.body;
    const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, {
        name,
        color,
        readyToEat
    }, { new: true });
    res.send(updatedFruit);
})


router.delete('/:id', async (req, res) => {      // delete a fruit from the database 
    const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
    res.send(deletedFruit);
})


module.exports = router