// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcrypt');



// router.post('/register', async (req, res) => {
//     try {
//         const { name, mobileNumber, aadharNumber, pin } = req.body;

//         // Validate user input data
//         if (!name || !mobileNumber || !aadharNumber || !pin) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Check if user already exists
//         const existingUser = await User.findOne({ $or: [{ mobileNumber }, { aadharNumber }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User with this mobile number or Aadhaar number already exists' });
//         }

//         // Validate PIN
//         if (pin.length !== 6 || !/^\d+$/.test(pin)) {
//             return res.status(400).json({ message: 'PIN must be 6 digits' });
//         }

//         // Hash PIN
//         const hashedPin = await bcrypt.hash(pin, 10);

//         // Create new user
//         const newUser = new User({
//             name,
//             mobileNumber,
//             aadharNumber,
//             pin: hashedPin,
//         });

//         // Save new user to database
//         await newUser.save();

//         res.json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error registering user' });
//     }
// });

// // Login route
// router.post('/login', async (req, res) => {
//     try {
//         const { mobileNumber, pin } = req.body;
//         const user = await User.findOne({ mobileNumber });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
//         const isMatch = await bcrypt.compare(pin, user.pin);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
//         res.status(200).json({ message: 'Login successful', userId: user._id });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Error logging in', error: error.message });
//     }
// });

// module.exports = router;

// userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const { name, mobileNumber, aadharNumber, pin } = req.body;

        // Validate user input data
        if (!name || !mobileNumber || !aadharNumber || !pin) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ mobileNumber }, { aadharNumber }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this mobile number or Aadhaar number already exists' });
        }

        // Validate PIN
        if (pin.length !== 6 || !/^\d+$/.test(pin)) {
            return res.status(400).json({ message: 'PIN must be 6 digits' });
        }

        // Hash PIN
        const hashedPin = await bcrypt.hash(pin, 10);

        // Create new user
        const newUser = new User({
            name,
            mobileNumber,
            aadharNumber,
            pin: hashedPin,
        });

        // Save new user to database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { mobileNumber, pin } = req.body;
        const user = await User.findOne({ mobileNumber });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(pin, user.pin);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

module.exports = router;