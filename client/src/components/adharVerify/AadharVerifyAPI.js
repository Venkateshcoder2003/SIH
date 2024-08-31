// import React, { useState } from 'react';

// // Dummy data for testing
// const dummyAadhaarNumbers = ['123456789012', '234567890123', '345678901234'];
// const dummyOTP = '123456';
// const dummyPIN = '1234';


// const d = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
//     [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
//     [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
//     [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
//     [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
//     [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
//     [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
//     [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// ];

// const p = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
//     [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
//     [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
//     [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
//     [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
//     [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
//     [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
// ];

// const validateAadhar = (aadharNumber) => {
//     let c = 0;
//     let invertedArray = aadharNumber.split('').map(Number).reverse();

//     for (let i = 0; i < invertedArray.length; i++) {
//         c = d[c][p[(i % 8)][invertedArray[i]]];
//     }

//     return (c === 0);
// };

// const AadharVerifyAPI = ({ onVerificationComplete }) => {
//     const [step, setStep] = useState(1);
//     const [aadharNumber, setAadharNumber] = useState('');
//     const [otp, setOtp] = useState('');
//     const [error, setError] = useState('');

//     const handleAadharSubmit = () => {
//         if (aadharNumber.length !== 12) {
//             setError('Aadhaar number must be 12 digits long.');
//             return;
//         }

//         // Check if the entered Aadhaar number is in the dummy list
//         if (!dummyAadhaarNumbers.includes(aadharNumber)) {
//             setError('For testing, please use one of the following Aadhaar numbers: ' + dummyAadhaarNumbers.join(', '));
//             return;
//         }

//         setError('');
//         setStep(2);
//         console.log('OTP sent to registered mobile number');
//     };

//     const handleOtpSubmit = () => {
//         if (otp.length !== 6) {
//             setError('OTP must be 6 digits long.');
//             return;
//         }

//         // Check if the entered OTP matches the dummy OTP
//         if (otp !== dummyOTP) {
//             setError(`For testing, please use the OTP: ${dummyOTP}`);
//             return;
//         }

//         setError('');
//         console.log('OTP verified successfully');
//         onVerificationComplete(true);
//         alert(`Verification successful! For testing, use PIN: ${dummyPIN}`);
//     };

//     const AadharInput = () => (
//         <div className="w-full">
//             <h5 className="my-3 text-center">Enter Your Aadhaar Card No</h5>
//             <div className="flex items-center">
//                 <span className="bg-gray-200 p-2 rounded-l-lg"><i className="bi bi-fingerprint"></i></span>
//                 <input
//                     type="text"
//                     className="flex-grow p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your 12 digit Aadhaar no"
//                     value={aadharNumber}
//                     onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
//                     maxLength="12"
//                 />
//             </div>
//             {error && <div className="text-red-500 mt-2">{error}</div>}
//             <button className="w-full bg-red-500 text-white p-2 rounded mt-3 hover:bg-red-600" onClick={handleAadharSubmit}>
//                 <i className="bi bi-send"></i> SEND OTP
//             </button>
//             <p className="mt-2 text-sm text-gray-600">For testing, use one of these Aadhaar numbers: {dummyAadhaarNumbers.join(', ')}</p>
//         </div>
//     );

//     const OTPInput = () => (
//         <div className="w-full">
//             <h5 className="my-3 text-center">Enter OTP Sent To Your Registered Mobile No</h5>
//             <div className="flex items-center">
//                 <span className="bg-gray-200 p-2 rounded-l-lg"><i className="bi bi-phone"></i></span>
//                 <input
//                     type="text"
//                     className="flex-grow p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="######"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                 />
//             </div>
//             {error && <div className="text-red-500 mt-2">{error}</div>}
//             <button className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600" onClick={handleOtpSubmit}>
//                 <i className="bi bi-shield-check"></i> VERIFY OTP
//             </button>
//             <p className="mt-2 text-sm text-gray-600">For testing, use OTP: {dummyOTP}</p>
//         </div>
//     );

//     return (
//         <div className="w-full">
//             {step === 1 && <AadharInput />}
//             {step === 2 && <OTPInput />}
//         </div>
//     );
// };

// export default AadharVerifyAPI;

import React, { useState } from 'react';

// Dummy data for testing
const dummyAadhaarNumbers = ['123456789012', '234567890123', '345678901234'];
const dummyOTP = '123456';
const dummyPIN = '1234';

const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

const validateAadhar = (aadharNumber) => {
    let c = 0;
    let invertedArray = aadharNumber.split('').map(Number).reverse();

    for (let i = 0; i < invertedArray.length; i++) {
        c = d[c][p[(i % 8)][invertedArray[i]]];
    }

    return (c === 0);
};

const AadharVerifyAPI = ({ onVerificationComplete }) => {
    const [step, setStep] = useState(1);
    const [aadharNumber, setAadharNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleAadharSubmit = () => {
        if (aadharNumber.length !== 12) {
            setError('Aadhaar number must be 12 digits long.');
            return;
        }

        // Check if the entered Aadhaar number is in the dummy list
        if (!dummyAadhaarNumbers.includes(aadharNumber)) {
            setError('For testing, please use one of the following Aadhaar numbers: ' + dummyAadhaarNumbers.join(', '));
            return;
        }

        setError('');
        setStep(2);
        console.log('OTP sent to registered mobile number');
    };

    const handleOtpSubmit = () => {
        if (otp.length !== 6) {
            setError('OTP must be 6 digits long.');
            return;
        }

        // Check if the entered OTP matches the dummy OTP
        if (otp !== dummyOTP) {
            setError(`For testing, please use the OTP: ${dummyOTP}`);
            return;
        }

        setError('');
        console.log('OTP verified successfully');
        onVerificationComplete(true);
        alert(`Verification successful! For testing, use PIN: ${dummyPIN}`);
    };

    const AadharInput = () => (
        <div className="w-full">
            <img src='aadhar_logo.jpg' alt="Aadhaar Logo" className="mx-auto mb-3" />
            <h5 className="my-3 text-center">Enter Your Aadhaar Card No</h5>
            <div className="flex items-center">
                <span className="bg-gray-200 p-2 rounded-l-lg"><i className="bi bi-fingerprint"></i></span>
                <input
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your 12 digit Aadhaar no"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    maxLength="12"
                />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button className="w-full bg-red-500 text-white p-2 rounded mt-3 hover:bg-red-600" onClick={handleAadharSubmit}>
                <i className="bi bi-send"></i> SEND OTP
            </button>
            <p className="mt-2 text-sm text-gray-600">For testing, use one of these Aadhaar numbers: {dummyAadhaarNumbers.join(', ')}</p>
        </div>
    );

    const OTPInput = () => (
        <div className="w-full">
            <img src="/api/placeholder/300/200" alt="OTP Verification" className="mx-auto mb-4" />
            <h5 className="my-3 text-center">Enter OTP Sent To Your Registered Mobile No</h5>
            <div className="flex items-center">
                <span className="bg-gray-200 p-2 rounded-l-lg"><i className="bi bi-phone"></i></span>
                <input
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="######"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600" onClick={handleOtpSubmit}>
                <i className="bi bi-shield-check"></i> VERIFY OTP
            </button>
            <p className="mt-2 text-sm text-gray-600">For testing, use OTP: {dummyOTP}</p>
        </div>
    );

    return (
        <div className="w-full max-w-md mx-auto">
            {step === 1 && <AadharInput />}
            {step === 2 && <OTPInput />}
        </div>
    );
};

export default AadharVerifyAPI;