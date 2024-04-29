// Routes for vegitables to perform CRUD operations on vegitables:
const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Vegitable = require('../models/vegitable');


const createVegitable = async (req, res) => {  // create a new vegitable in the database
    try {
        const { name, color, taste, rootVegitable } = req.body;
        const newVegitable = new Vegitable({
            name,
            color,
            taste,
            rootVegitable
        });
        await newVegitable.save();
        res.send(newVegitable);
    } catch (error) {
        res.status(500).send(error);
    }
}


const getVegitables = async (req, res) => {  // get all vegitables from the database
    try {
        const vegitables = await Vegitable.find();
        res.send(vegitables);
    } catch (error) {
        res.status(500).send(error);
    }
}


const getVegitable = async (req, res) => {  // get a specific vegitable from the database
    try {
        const vegitable = await Vegitable.findById(req.params.id);
        res.send(vegitable);
    } catch (error) {
        res.status(500).send(error);
    }
}


const updateVegitable = async (req, res) => {   // update an existing vegitable in the database
    try {
        const { name, color, taste, rootVegitable } = req.body;
        const updatedVegitable = await Vegitable.findByIdAndUpdate(req.params.id, {
            name,
            color,
            taste,
            rootVegitable
        }, { new: true });
        res.send(updatedVegitable);
    } catch (error) {
        res.status(500).send(error);
    }
}


const deleteVegitable = async (req, res) => {   // delete a specific vegitable from the MongoDB database
    try {
        const deletedVegitable = await Vegitable.findByIdAndDelete(req.params.id);
        res.send(deletedVegitable);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { createVegitable, getVegitables, getVegitable, updateVegitable, deleteVegitable }