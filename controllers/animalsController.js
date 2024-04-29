// Routes for animals to perform CRUD operations on animals:
const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Animal = require('../models/animal');


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


const getAnimals = async (req, res) => {   // get all animals from the database
  try {
      const animals = await Animal.find();
      res.send(animals);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const getAnimal = async (req, res) => {   // get a single animal from the database
  try {
      const animal = await Animal.findById(req.params.id);
      res.send(animal);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const updateAnimal = async (req, res) => {   // update an existing animal in the database
  try {
      const { name, color, age, readyToAdopt } = req.body;
      const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, {
          name,
          color,
          age,
          readyToAdopt
      }, { new: true });
      res.json(updatedAnimal);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
  }


  const deleteAnimal = async (req, res) => {   // delete a specific animal from the MongoDB database
    try {
        const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
        res.send(deletedAnimal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }





module.exports = { createAnimal, getAnimals, getAnimal, updateAnimal, deleteAnimal }