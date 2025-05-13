const mongoose = require('mongoose');
const Dummy = require('../models/dummyModel');

const mongoURI = 'mongodb+srv://amit1397singh:money123@moneyfinal.dgefed3.mongodb.net/test';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const saveDummyData = async (req, res) => {
    try {
        const dummy = new Dummy({
            name: req.body.name || 'John Doe',
            age: req.body.age || 30,
            email: req.body.email || 'johndoe@example.com'
        });

        const result = await dummy.save();
        res.status(201).json({ message: 'Dummy data saved successfully!', data: result });
    } catch (err) {
        res.status(500).json({ message: 'Error saving dummy data', error: err.message });
    }
};

const getDummyData = async (req, res) => {
    try {
        const data = await Dummy.find();
        res.status(200).json({ message: 'Dummy data fetched successfully!', data });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching dummy data', error: err.message });
    }
};

module.exports = { saveDummyData, getDummyData };