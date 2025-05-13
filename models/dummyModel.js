const mongoose = require('mongoose');

const dummySchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const Dummy = mongoose.model('Dummy', dummySchema);
module.exports = Dummy;