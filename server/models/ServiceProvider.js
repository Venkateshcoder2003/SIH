const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const serviceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    aadharNumber: { type: String, required: true, unique: true },
    pin: { type: String, required: true },
    serviceType: { type: String, required: true },
    serviceArea: { type: String, required: true },
    charges: { type: Number, required: true },
    contactInfo: { type: String, required: true },
});

async function hashValue(value) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
}

// Pre-save hook to hash the PIN and Aadhaar number
serviceProviderSchema.pre('save', async function (next) {
    if (this.isModified('pin')) {
        this.pin = await hashValue(this.pin);
    }
    if (this.isModified('aadharNumber')) {
        this.aadharNumber = await hashValue(this.aadharNumber);
    }
    next();
});

// Method to compare PIN
serviceProviderSchema.methods.comparePin = async function (candidatePin) {
    return bcrypt.compare(candidatePin, this.pin);
};

// Method to compare Aadhaar number
serviceProviderSchema.methods.compareAadharNumber = async function (candidateAadhar) {
    return bcrypt.compare(candidateAadhar, this.aadharNumber);
};

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);