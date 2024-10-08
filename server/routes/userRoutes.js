const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const twilio = require('twilio');

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// In-memory storage for PINs (replace with database in production)
const pins = new Map();

function formatIndianPhoneNumber(number) {
    // Remove any non-digit characters
    const cleaned = number.replace(/\D/g, '');

    // Check if the number already has the country code
    if (cleaned.startsWith('91') && cleaned.length === 12) {
        return '+' + cleaned;
    }

    // If it's a 10-digit number, add the country code
    if (cleaned.length === 10) {
        return '+91' + cleaned;
    }

    // If it doesn't match expected formats, return as is (Twilio will validate)
    return number;
}

router.post('/send-pin', async (req, res) => {
    const { mobileNumber } = req.body;

    try {
        // Generate a random 6-digit PIN
        const pin = Math.floor(100000 + Math.random() * 900000).toString();

        // Store the PIN (use a database in production)
        pins.set(mobileNumber, pin);

        // Format the phone number
        const formattedNumber = formatIndianPhoneNumber(mobileNumber);
        console.log('Formatted number:', formattedNumber);  // Log the formatted number

        // Send SMS using Twilio
        const message = await client.messages.create({
            body: `Your Farm Unity PIN is: ${pin}`,
            from: twilioPhoneNumber,
            to: formattedNumber
        });

        console.log('Twilio message SID:', message.sid);  // Log the message SID
        res.status(200).json({ message: 'PIN sent successfully' });
    } catch (error) {
        console.error('Error sending PIN:', error);
        if (error.code === 21659) {
            res.status(400).json({
                message: 'Failed to send PIN: Invalid phone number format or permissions issue',
                error: error.message,
                code: error.code,
                moreInfo: error.moreInfo
            });
        } else {
            res.status(500).json({
                message: 'Failed to send PIN',
                error: error.message,
                code: error.code,
                moreInfo: error.moreInfo
            });
        }
    }
});

// Verify user route
router.post('/verify-user', async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        const user = await User.findOne({ mobileNumber });

        if (user) {
            // User exists, send PIN
            const pin = generatePIN();

            await twilioClient.messages.create({
                body: `Your Farm Unity login PIN is: ${pin}`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: mobileNumber
            });

            res.status(200).json({ userExists: true, message: 'User verified and PIN sent' });
        } else {
            res.status(404).json({ userExists: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).json({ message: 'Failed to verify user' });
    }
});
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




// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const twilio = require('twilio');

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// const client = twilio(accountSid, authToken);

// function formatIndianPhoneNumber(number) {
//     const cleaned = number.replace(/\D/g, '');
//     if (cleaned.startsWith('91') && cleaned.length === 12) {
//         return '+' + cleaned;
//     }
//     if (cleaned.length === 10) {
//         return '+91' + cleaned;
//     }
//     return number;
// }

// async function sendPIN(mobileNumber, pin) {
//     const formattedNumber = formatIndianPhoneNumber(mobileNumber);
//     await client.messages.create({
//         body: `Your Farm Unity PIN is: ${pin}. Please use this PIN for login.`,
//         from: twilioPhoneNumber,
//         to: formattedNumber
//     });
// }

// router.post('/register', async (req, res) => {
//     try {
//         const { name, mobileNumber, aadharNumber, pin } = req.body;

//         if (!name || !mobileNumber || !aadharNumber || !pin) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const existingUser = await User.findOne({ $or: [{ mobileNumber }, { aadharNumber }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User with this mobile number or Aadhaar number already exists' });
//         }

//         if (pin.length !== 6 || !/^\d+$/.test(pin)) {
//             return res.status(400).json({ message: 'PIN must be 6 digits' });
//         }

//         const hashedPin = await bcrypt.hash(pin, 10);

//         const newUser = new User({
//             name,
//             mobileNumber,
//             aadharNumber,
//             pin: hashedPin,
//         });

//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
//     } catch (error) {
//         console.error('Registration error:', error);
//         res.status(500).json({ message: 'Error registering user', error: error.message });
//     }
// });

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

// router.post('/forgot-pin', async (req, res) => {
//     try {
//         const { mobileNumber } = req.body;
//         const user = await User.findOne({ mobileNumber });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const newPin = Math.floor(100000 + Math.random() * 900000).toString();
//         const hashedPin = await bcrypt.hash(newPin, 10);

//         user.pin = hashedPin;
//         await user.save();

//         await sendPIN(mobileNumber, newPin);

//         res.status(200).json({ message: 'New PIN sent successfully' });
//     } catch (error) {
//         console.error('Forgot PIN error:', error);
//         res.status(500).json({ message: 'Error processing forgot PIN request', error: error.message });
//     }
// });

// module.exports = router;
