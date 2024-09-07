// import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

// const API_BASE_URL = 'http://localhost:6002/api';

// const LoginForm = ({ onNewUserSignup, onExistingUserLogin }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharNumber, setAadharNumber] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const endpoint = isNewUser ? `${API_BASE_URL}/register` : `${API_BASE_URL}/login`;
//             const body = isNewUser
//                 ? { name, mobileNumber, aadharNumber, pin }
//                 : { mobileNumber, pin };

//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(body),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'An error occurred');
//             }

//             const data = await response.json();

//             if (isNewUser) {
//                 toast.success('Registration successful!');
//                 onNewUserSignup(data.userId);
//             } else {
//                 toast.success('Login successful!');
//                 onExistingUserLogin(data.userId);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error(error.message || 'An error occurred. Please try again.');
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
//                     {isNewUser && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="Farmer Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Enter your 12 digit Aadhaar no"
//                                 value={aadharNumber}
//                                 onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
//                                 maxLength="12"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </>
//                     )}
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
//                         placeholder="6-digit PIN"
//                         value={pin}
//                         onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                         maxLength="6"
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
//                         {isNewUser ? 'Register' : 'Login'}
//                     </button>
//                 </form>
//                 <div className="mt-4 text-center">
//                     <p className="text-sm">
//                         {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                         <button
//                             onClick={() => {
//                                 setIsNewUser(!isNewUser);
//                                 setName('');
//                                 setMobileNumber('');
//                                 setPin('');
//                                 setAadharNumber('');
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

// const API_BASE_URL = 'http://localhost:6002/api';

// const LoginForm = ({ onNewUserSignup, onExistingUserLogin }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharNumber, setAadharNumber] = useState('');
//     const [isPinSent, setIsPinSent] = useState(false);

//     const sendPin = async () => {
//         if (!mobileNumber) {
//             toast.error('Please enter a mobile number');
//             return;
//         }

//         // Remove any non-digit characters
//         const cleanedNumber = mobileNumber.replace(/\D/g, '');

//         // Validate the number (should be 10 digits for Indian numbers)
//         if (cleanedNumber.length !== 10) {
//             toast.error('Please enter a valid 10-digit mobile number');
//             return;
//         }

//         try {
//             const response = await fetch(`${API_BASE_URL}/send-pin`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ mobileNumber: cleanedNumber }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.message || 'Failed to send PIN');
//             }

//             toast.success('PIN sent to your mobile number');
//             setIsPinSent(true);
//         } catch (error) {
//             console.error('Error sending PIN:', error);
//             if (error.message) {
//                 toast.error(`Failed to send PIN: ${error.message}`);
//             } else {
//                 toast.error('Failed to send PIN. Please try again.');
//             }
//         }
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!isPinSent) {
//             toast.error('Please request a PIN first');
//             return;
//         }

//         try {
//             const endpoint = isNewUser ? `${API_BASE_URL}/register` : `${API_BASE_URL}/login`;
//             const body = isNewUser
//                 ? { name, mobileNumber, aadharNumber, pin }
//                 : { mobileNumber, pin };

//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(body),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'An error occurred');
//             }

//             const data = await response.json();

//             if (isNewUser) {
//                 toast.success('Registration successful!');
//                 onNewUserSignup(data.userId);
//             } else {
//                 toast.success('Login successful!');
//                 onExistingUserLogin(data.userId);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error(error.message || 'An error occurred. Please try again.');
//         }
//     };

//     const toggleNewUser = () => {
//         setIsNewUser(!isNewUser);
//         setName('');
//         setMobileNumber('');
//         setPin('');
//         setAadharNumber('');
//         setIsPinSent(false);
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
//                     {isNewUser && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="Farmer Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Enter your 12 digit Aadhaar no"
//                                 value={aadharNumber}
//                                 onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
//                                 maxLength="12"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </>
//                     )}
//                     <input
//                         type="tel"
//                         placeholder="Mobile Number"
//                         value={mobileNumber}
//                         onChange={(e) => setMobileNumber(e.target.value)}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="button"
//                         onClick={sendPin}
//                         className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
//                     >
//                         Send PIN via SMS
//                     </button>
//                     <input
//                         type="password"
//                         placeholder="Enter 6-digit PIN received via SMS"
//                         value={pin}
//                         onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                         maxLength="6"
//                         required
//                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
//                     >
//                         {isNewUser ? 'Register' : 'Login'}
//                     </button>
//                 </form>
//                 <div className="mt-4 text-center">
//                     <p className="text-sm">
//                         {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                         <button
//                             onClick={toggleNewUser}
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
    const [isPinSent, setIsPinSent] = useState(false);

    const sendPin = async () => {
        if (!mobileNumber) {
            toast.error('Please enter a mobile number');
            return;
        }

        const cleanedNumber = mobileNumber.replace(/\D/g, '');

        if (cleanedNumber.length !== 10) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/send-pin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobileNumber: cleanedNumber }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send PIN');
            }

            toast.success('PIN sent to your mobile number');
            setIsPinSent(true);
        } catch (error) {
            console.error('Error sending PIN:', error);
            toast.error(error.message || 'Failed to send PIN. Please try again.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isNewUser && !isPinSent) {
            toast.error('Please request a PIN first');
            return;
        }

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

    const toggleNewUser = () => {
        setIsNewUser(!isNewUser);
        setName('');
        setMobileNumber('');
        setPin('');
        setAadharNumber('');
        setIsPinSent(false);
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
                    {isNewUser && (
                        <button
                            type="button"
                            onClick={sendPin}
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Send PIN via SMS
                        </button>
                    )}
                    <input
                        type="password"
                        placeholder={isNewUser ? "Enter 6-digit PIN received via SMS" : "Enter your 6-digit PIN"}
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        maxLength="6"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        {isNewUser ? 'Register' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
                        <button
                            onClick={toggleNewUser}
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