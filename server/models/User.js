const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    pin: { type: String, required: true },
    aadharNumber: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
