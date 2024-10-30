const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Creating a Service model schema
const labourSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    mobileNumber: String,
    date: {
        type: Date,
        default: Date.now
    },
    skills: String
});


// Creating a Service model
const Labourers = mongoose.model('Labour', labourSchema);

// Exporting the Service model
module.exports = Labourers;