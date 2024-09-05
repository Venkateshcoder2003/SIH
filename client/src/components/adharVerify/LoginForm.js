// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const LoginForm = ({ onNewUserSignup, onExistingUserLogin }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharNumber, setAadharNumber] = useState('');
//     const [otp, setOtp] = useState('');
//     const [aadharVerified, setAadharVerified] = useState(false);
//     const [step, setStep] = useState(1);

//     // Replace with your actual Aadhaar API endpoint
//     const AADHAAR_API_SEND_OTP_URL = 'https://api.yourdomain.com/send-otp';
//     const AADHAAR_API_VERIFY_OTP_URL = 'https://api.yourdomain.com/verify-otp';

//     const handleAadharSubmit = async () => {
//         if (aadharNumber.length !== 12) {
//             toast.error('Aadhaar number must be 12 digits long.');
//             return;
//         }

//         try {
//             const response = await axios.post(AADHAAR_API_SEND_OTP_URL, {
//                 aadharNumber: aadharNumber,
//             });

//             if (response.status === 200) {
//                 toast.success('OTP sent to registered mobile number');
//                 setStep(2);
//             } else {
//                 toast.error('Failed to send OTP. Please try again.');
//             }
//         } catch (error) {
//             toast.error('An error occurred while sending OTP');
//             console.error('Error:', error);
//         }
//     };

//     const handleOtpSubmit = async () => {
//         try {
//             const response = await axios.post(AADHAAR_API_VERIFY_OTP_URL, {
//                 aadharNumber: aadharNumber,
//                 otp: otp,
//             });

//             if (response.status === 200 && response.data.verified) {
//                 toast.success('Verification successful!');
//                 setAadharVerified(true);
//                 setPin(response.data.newPin); // Assuming the API returns a new PIN
//                 setStep(3);
//             } else {
//                 toast.error('OTP verification failed. Please try again.');
//             }
//         } catch (error) {
//             toast.error('An error occurred while verifying OTP');
//             console.error('Error:', error);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isNewUser) {
//             if (aadharVerified) {
//                 console.log('New user registered:', { name, mobileNumber, pin });
//                 toast.success('Registration successful!');
//                 onNewUserSignup();
//             } else {
//                 toast.error('Please complete Aadhaar verification first.');
//             }
//         } else {
//             // Add your login logic here
//             console.log('User logged in with PIN:', pin);
//             onExistingUserLogin();
//         }
//     };

//     const renderStep = () => {
//         if (!isNewUser) {
//             return (
//                 <>
//                     <input
//                         type="tel"
//                         placeholder="Mobile Number"
//                         value={mobileNumber}
//                         onChange={(e) => setMobileNumber(e.target.value)}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="password"
//                         placeholder="4-digit PIN"
//                         value={pin}
//                         onChange={(e) => setPin(e.target.value)}
//                         maxLength="4"
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
//                         Login
//                     </button>
//                 </>
//             );
//         }

//         switch (step) {
//             case 1:
//                 return (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Farmer Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Mobile Number"
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter your 12 digit Aadhaar no"
//                             value={aadharNumber}
//                             onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
//                             maxLength="12"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button onClick={handleAadharSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
//                             Send OTP
//                         </button>
//                     </>
//                 );
//             case 2:
//                 return (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                             maxLength="6"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button onClick={handleOtpSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
//                             Verify OTP
//                         </button>
//                     </>
//                 );
//             case 3:
//                 return (
//                     <>
//                         <input
//                             type="tel"
//                             placeholder="Mobile Number"
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             placeholder="4-digit PIN"
//                             value={pin}
//                             onChange={(e) => setPin(e.target.value)}
//                             maxLength="4"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
//                             Register
//                         </button>
//                     </>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <Toaster position="top-center" reverseOrder={false} />
//             <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//                 <div className="text-center mb-8">
//                     <h1 className="text-2xl font-bold text-blue-600">Farm Unity</h1>
//                     <p className="text-sm text-gray-500">Authentication Portal</p>
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4">{isNewUser ? 'Sign Up' : 'Login'}</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {renderStep()}
//                 </form>
//                 {isNewUser && step > 1 && (
//                     <button
//                         onClick={() => setStep(step - 1)}
//                         className="mt-4 text-blue-500 hover:text-blue-600 transition duration-300"
//                     >
//                         Back
//                     </button>
//                 )}
//                 <div className="mt-4 text-center">
//                     <p className="text-sm">
//                         {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                         <button
//                             onClick={() => {
//                                 setIsNewUser(!isNewUser);
//                                 setStep(1);
//                             }}
//                             className="ml-2 text-blue-500 hover:text-blue-600 transition duration-300"
//                         >
//                             {isNewUser ? 'Login' : 'Sign Up'}
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;







// import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

// // Dummy data for testing
// const dummyAadhaarNumbers = ['123456789012', '234567890123', '345678901234'];
// const dummyOTP = '123456';
// const dummyPIN = '1234';

// const LoginForm = ({ onNewUserSignup, onExistingUserLogin }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharNumber, setAadharNumber] = useState('');
//     const [otp, setOtp] = useState('');
//     const [aadharVerified, setAadharVerified] = useState(false);
//     const [step, setStep] = useState(1);

//     const handleAadharSubmit = () => {
//         if (aadharNumber.length !== 12) {
//             toast.error('Aadhaar number must be 12 digits long.');
//             return;
//         }
//         if (!dummyAadhaarNumbers.includes(aadharNumber)) {
//             toast.error('For testing, please use one of the following Aadhaar numbers: ' + dummyAadhaarNumbers.join(', '));
//             return;
//         }
//         setStep(2);
//         toast.success('OTP sent to registered mobile number');
//     };

//     const handleOtpSubmit = () => {
//         if (otp !== dummyOTP) {
//             toast.error(`For testing, please use the OTP: ${dummyOTP}`);
//             return;
//         }
//         setAadharVerified(true);
//         toast.success(`Verification successful! Your new PIN is: ${dummyPIN}. Please remember this for future logins.`);
//         setPin(dummyPIN);
//         setStep(3);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isNewUser) {
//             if (aadharVerified) {
//                 console.log('New user registered:', { name, mobileNumber, pin });
//                 toast.success('Registration successful!');
//                 onNewUserSignup();
//             } else {
//                 toast.error('Please complete Aadhaar verification first.');
//             }
//         } else {
//             if (pin === dummyPIN) {
//                 console.log('User logged in with PIN:', pin);
//                 toast.success('Login successful!');
//                 onExistingUserLogin();
//             } else {
//                 toast.error('Invalid PIN. For testing, use: ' + dummyPIN);
//             }
//         }
//     };

//     const renderStep = () => {
//         if (!isNewUser) {
//             return (
//                 <>
//                     <input
//                         type="tel"
//                         placeholder="Mobile Number"
//                         value={mobileNumber}
//                         onChange={(e) => setMobileNumber(e.target.value)}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="password"
//                         placeholder="4-digit PIN"
//                         value={pin}
//                         onChange={(e) => setPin(e.target.value)}
//                         maxLength="4"
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
//                 </>
//             );
//         }

//         switch (step) {
//             case 1:
//                 return (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Farmer Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Mobile Number"
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter your 12 digit Aadhaar no"
//                             value={aadharNumber}
//                             onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
//                             maxLength="12"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button onClick={handleAadharSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Send OTP</button>
//                     </>
//                 );
//             case 2:
//                 return (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                             maxLength="6"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button onClick={handleOtpSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Verify OTP</button>
//                     </>
//                 );
//             case 3:
//                 return (
//                     <>
//                         <input
//                             type="tel"
//                             placeholder="Mobile Number"
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             placeholder="4-digit PIN"
//                             value={pin}
//                             onChange={(e) => setPin(e.target.value)}
//                             maxLength="4"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
//                     </>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <Toaster position="top-center" reverseOrder={false} />
//             <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//                 <div className="text-center mb-8">
//                     <h1 className="text-2xl font-bold text-blue-600">Farm Unity</h1>
//                     <p className="text-sm text-gray-500">Authentication Portal</p>
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4">{isNewUser ? 'Sign Up' : 'Login'}</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {renderStep()}
//                 </form>
//                 {isNewUser && step > 1 && (
//                     <button
//                         onClick={() => setStep(step - 1)}
//                         className="mt-4 text-blue-500 hover:text-blue-600 transition duration-300"
//                     >
//                         Back
//                     </button>
//                 )}
//                 <div className="mt-4 text-center">
//                     <p className="text-sm">
//                         {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                         <button
//                             onClick={() => {
//                                 setIsNewUser(!isNewUser);
//                                 setStep(1);
//                             }}
//                             className="ml-2 text-blue-500 hover:text-blue-600 transition duration-300"
//                         >
//                             {isNewUser ? 'Login' : 'Sign Up'}
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;




import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const API_BASE_URL = 'http://localhost:6002/api';

const LoginForm = ({ onNewUserSignup, onExistingUserLogin }) => {
    const [isNewUser, setIsNewUser] = useState(true);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pin, setPin] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isNewUser ? `${API_BASE_URL}/register` : `${API_BASE_URL}/login`;
            const body = isNewUser
                ? { name, mobileNumber, aadharNumber, pin }
                : { mobileNumber, pin };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'An error occurred');
            }

            const data = await response.json();

            if (isNewUser) {
                toast.success('Registration successful!');
                onNewUserSignup(data.userId);
            } else {
                toast.success('Login successful!');
                onExistingUserLogin(data.userId);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-600">Farm Unity</h1>
                    <p className="text-sm text-gray-500">Authentication Portal</p>
                </div>
                <h2 className="text-xl font-semibold mb-4">{isNewUser ? 'Sign Up' : 'Login'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isNewUser && (
                        <>
                            <input
                                type="text"
                                placeholder="Farmer Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Enter your 12 digit Aadhaar no"
                                value={aadharNumber}
                                onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                                maxLength="12"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </>
                    )}
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="6-digit PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        maxLength="6"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
                        {isNewUser ? 'Register' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
                        <button
                            onClick={() => {
                                setIsNewUser(!isNewUser);
                                setName('');
                                setMobileNumber('');
                                setPin('');
                                setAadharNumber('');
                            }}
                            className="ml-2 text-blue-500 hover:text-blue-600 transition duration-300"
                        >
                            {isNewUser ? 'Login' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;