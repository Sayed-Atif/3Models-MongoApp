// Routes for fruits to perform CRUD operations on fruits:
const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Fruit = require('../models/fruit');


const createAnimal = async (req, res) => {   // create/post a new animal in MongoDB database
    try {
        const { name, color, age, readyToAdopt } = req.body;
        const newAnimal = new Animal({
            name,
            color,
            age,
            readyToAdopt
        });
        await newAnimal.save();
        res.json(newAnimal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };


  const createFruit = async (req, res) => {   // create/post a new fruit in the database
    try {
        const { name, color,price, readyToEat } = req.body;
        const newFruit = new Fruit({
            name,
            color,
            price,
            readyToEat
        });
        await newFruit.save();
        res.send(newFruit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };


  const getFruits = async (req, res) => {   // get all fruits from the database
    try {
        const fruits = await Fruit.find();
        res.json(fruits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }



    const getFruit = async (req, res) => {   // get a single fruit from the database
        try {
            const fruit = await Fruit.findById(req.params.id);
            res.send(fruit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        }


    const updateFruit = async (req, res) => {   // update an existing fruit in the database
        try {
            const { name, color,price, readyToEat } = req.body;
            const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, {
                name,
                color,
                price,
                readyToEat
            }, { new: true });
            res.send(updatedFruit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        }


    const deleteFruit = async (req, res) => {   // delete a specific fruit from the MongoDB database
        try {
            const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
            res.send(deletedFruit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        }



module.exports = { createFruit, getFruits, getFruit, updateFruit, deleteFruit }
















// router.post('/', async (req, res) => {      // create/post a new fruit in the database  
//     const { name, color,price, readyToEat } = req.body;
//     const newFruit = new Fruit({
//         name,
//         color,
//         price,
//         readyToEat
//     });
//     await newFruit.save();
//     res.send(newFruit);
// })




// router.get('/', async (req, res) => {   // get all fruits from the database 
//     const fruits = await Fruit.find();
//     res.send(fruits);
//     // res.json(fruits);
// })


// router.get('/:id', async (req, res) => {   // fetch a specific fruit from the database
//     const fruit = await Fruit.findById(req.params.id);
//     res.send(fruit);
//     // res.json(fruit);
// })


// router.put('/:id', async (req, res) => {    // update an existing fruit in the database 
//     const { name, color,price, readyToEat } = req.body;
//     const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, {
//         name,
//         color,
//         price,
//         readyToEat
//     }, { new: true });
//     res.send(updatedFruit);
// })


// router.delete('/:id', async (req, res) => {      // delete a fruit from the database 
//     const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
//     res.send(deletedFruit);
// })


// module.exports = router