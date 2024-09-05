const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const farmOwnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pin: { type: String, required: true },
    aadharNumber: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    farmType: { type: String, required: true },
    preferredLabor: { type: String, required: true },
    contactInfo: { type: String, required: true },
});

async function hashValue(value) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
}

// Pre-save hook to hash the PIN and Aadhar number
farmOwnerSchema.pre('save', async function (next) {
    if (this.isModified('pin')) {
        this.pin = await hashValue(this.pin);
    }
    if (this.isModified('aadharNumber')) {
        this.aadharNumber = await hashValue(this.aadharNumber);
    }
    next();
});

// Method to compare PIN
farmOwnerSchema.methods.comparePin = async function (candidatePin) {
    return bcrypt.compare(candidatePin, this.pin);
};

// Method to compare Aadhar number
farmOwnerSchema.methods.compareAadharNumber = async function (candidateAadhar) {
    return bcrypt.compare(candidateAadhar, this.aadharNumber);
};

module.exports = mongoose.model('FarmOwner', farmOwnerSchema);