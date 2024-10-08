const express = require('express');
const router = express.Router();
const FarmOwner = require('../models/FarmerOwner');
const Laborer = require('../models/Laborer');
const ServiceProvider = require('../models/ServiceProvider');




function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Aadhaar verification route
router.post('/verify-aadhar', async (req, res) => {
    const { aadharNumber } = req.body;

    if (!aadharNumber || aadharNumber.length !== 12) {
        return res.status(400).json({ message: 'Invalid Aadhaar number' });
    }

    try {
        // Check if the Aadhaar number already exists
        let user = await User.findOne({ aadharNumber });

        if (user && user.isAadhaarVerified) {
            return res.status(400).json({ message: 'Aadhaar number already registered and verified' });
        }

        // Generate OTP
        const otp = generateOTP();

        if (user) {
            // Update existing user with new OTP
            user.otp = otp;
            user.otpExpires = Date.now() + 600000; // OTP expires in 10 minutes
        } else {
            // Create a new user with Aadhaar number and OTP
            user = new User({
                aadharNumber,
                otp,
                otpExpires: Date.now() + 600000 // OTP expires in 10 minutes
            });
        }

        await user.save();

        // In a real-world scenario, you would send the OTP to the user's registered mobile number here
        // For development purposes, we're sending it in the response
        res.status(200).json({ message: 'OTP sent to registered mobile number', otp });
    } catch (error) {
        console.error('Error in Aadhaar verification:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// OTP verification route
router.post('/verify-otp', async (req, res) => {
    const { aadharNumber, otp } = req.body;

    if (!aadharNumber || !otp) {
        return res.status(400).json({ message: 'Aadhaar number and OTP are required' });
    }

    try {
        const user = await User.findOne({ aadharNumber });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.otp !== otp || Date.now() > user.otpExpires) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        user.isAadhaarVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Aadhaar verification successful' });
    } catch (error) {
        console.error('Error in OTP verification:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/farmowner', async (req, res) => {
    try {
        const { name, pin, adharNumber, location, farmType, preferredLabor, contactInfo } = req.body;

        const farmOwner = new FarmOwner({
            name,
            pin,
            aadharNumber: adharNumber, // Note the change from adharNumber to aadharNumber
            location,
            farmType,
            preferredLabor,
            contactInfo
        });

        await farmOwner.save();
        res.status(201).json({ message: 'Farm Owner registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering Farm Owner', error: error.message });
    }
});
router.post('/laborer', async (req, res) => {
    try {
        const { name, aadharNumber, pin, skills, preferredWage, preferredWork, preferredLocation, availability, contactInfo } = req.body;

        const laborer = new Laborer({
            name,
            aadharNumber,
            pin,
            skills,
            preferredWage,
            preferredWork,
            preferredLocation,
            availability,
            contactInfo
        });

        await laborer.save();
        res.status(201).json({ message: 'Laborer registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering Laborer', error: error.message });
    }
});
router.post('/serviceprovider', async (req, res) => {
    try {
        const { name, aadharNumber, pin, serviceType, serviceArea, charges, contactInfo } = req.body;

        const serviceProvider = new ServiceProvider({
            name,
            aadharNumber,
            pin,
            serviceType,
            serviceArea,
            charges,
            contactInfo
        });

        await serviceProvider.save();
        res.status(201).json({ message: 'Service Provider registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering Service Provider', error: error.message });
    }
});


module.exports = router;