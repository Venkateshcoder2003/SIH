const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Creating a Service model schema
const serviceSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    mobileNumber: String
});

// Creating a Service model
const Service = mongoose.model('Service', serviceSchema);

// Exporting the Service model
module.exports = Service;
