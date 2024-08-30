

// // import React, { useState } from 'react';
// // import AadharVerifyAPI from './AadharVerifyAPI';

// // const InitialAuthPage = ({ onRegistrationComplete, onLoginComplete }) => {
// //     const [isNewUser, setIsNewUser] = useState(true);
// //     const [name, setName] = useState('');
// //     const [mobileNumber, setMobileNumber] = useState('');
// //     const [pin, setPin] = useState('');
// //     const [aadharVerified, setAadharVerified] = useState(false);

// //     const handleAadharVerification = (verified) => {
// //         setAadharVerified(verified);
// //         if (verified && isNewUser) {
// //             const newPin = Math.floor(1000 + Math.random() * 9000);
// //             alert(`Your new PIN is: ${newPin}. Please remember this for future logins.`);
// //             setPin(newPin.toString());
// //         }
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (isNewUser) {
// //             if (aadharVerified) {
// //                 console.log('New user registered:', { name, mobileNumber, pin });
// //                 onRegistrationComplete();
// //             } else {
// //                 alert('Please complete Aadhar verification first.');
// //             }
// //         } else {
// //             console.log('User logging in with PIN:', pin);
// //             onLoginComplete();
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //             <div className="max-w-md w-full bg-white p-8 border rounded-lg shadow-lg">
// //                 <h2 className="text-2xl font-bold mb-6 text-center">
// //                     {isNewUser ? 'Sign Up' : 'Login'}
// //                 </h2>
// //                 <form onSubmit={handleSubmit}>
// //                     {isNewUser && (
// //                         <>
// //                             <input
// //                                 type="text"
// //                                 placeholder="Farmer Name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 className="w-full p-2 mb-4 border rounded"
// //                                 required
// //                             />
// //                             <input
// //                                 type="tel"
// //                                 placeholder="Mobile Number"
// //                                 value={mobileNumber}
// //                                 onChange={(e) => setMobileNumber(e.target.value)}
// //                                 className="w-full p-2 mb-4 border rounded"
// //                                 required
// //                             />
// //                             <AadharVerifyAPI onVerificationComplete={handleAadharVerification} />
// //                         </>
// //                     )}
// //                     {(aadharVerified || !isNewUser) && (
// //                         <input
// //                             type="password"
// //                             placeholder="4-digit PIN"
// //                             value={pin}
// //                             onChange={(e) => setPin(e.target.value)}
// //                             className="w-full p-2 mb-4 border rounded"
// //                             maxLength="4"
// //                             required
// //                         />
// //                     )}
// //                     <button
// //                         type="submit"
// //                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //                     >
// //                         {isNewUser ? 'Register' : 'Login'}
// //                     </button>
// //                 </form>
// //                 <p className="mt-4 text-center">
// //                     {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
// //                     <button
// //                         onClick={() => setIsNewUser(!isNewUser)}
// //                         className="text-blue-500 hover:underline ml-2"
// //                     >
// //                         {isNewUser ? 'Login' : 'Sign Up'}
// //                     </button>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default InitialAuthPage;

// // import React, { useState } from 'react';
// // import AadharVerifyAPI from './AadharVerifyAPI';

// // const InitialAuthPage = ({ onRegistrationComplete, onLoginComplete }) => {
// //     const [isNewUser, setIsNewUser] = useState(true);
// //     const [name, setName] = useState('');
// //     const [mobileNumber, setMobileNumber] = useState('');
// //     const [pin, setPin] = useState('');
// //     const [aadharVerified, setAadharVerified] = useState(false);

// //     const handleAadharVerification = (verified) => {
// //         setAadharVerified(verified);
// //         if (verified && isNewUser) {
// //             const newPin = Math.floor(1000 + Math.random() * 9000);
// //             alert(`Your new PIN is: ${newPin}. Please remember this for future logins.`);
// //             setPin(newPin.toString());
// //         }
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (isNewUser) {
// //             if (aadharVerified) {
// //                 console.log('New user registered:', { name, mobileNumber, pin });
// //                 onRegistrationComplete();
// //             } else {
// //                 alert('Please complete Aadhar verification first.');
// //             }
// //         } else {
// //             console.log('User logging in with PIN:', pin);
// //             onLoginComplete();
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //             {/* Increased the max-width to provide more space for the form */}
// //             <div className="max-w-2xl w-full bg-white p-8 border rounded-lg shadow-lg">
// //                 <h2 className="text-2xl font-bold mb-6 text-center">
// //                     {isNewUser ? 'Sign Up' : 'Login'}
// //                 </h2>
// //                 <form onSubmit={handleSubmit}>
// //                     {isNewUser && (
// //                         <>
// //                             <input
// //                                 type="text"
// //                                 placeholder="Farmer Name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 className="w-full p-2 mb-4 border rounded"
// //                                 required
// //                             />
// //                             <input
// //                                 type="tel"
// //                                 placeholder="Mobile Number"
// //                                 value={mobileNumber}
// //                                 onChange={(e) => setMobileNumber(e.target.value)}
// //                                 className="w-full p-2 mb-4 border rounded"
// //                                 required
// //                             />
// //                             {/* Added a container with full width for the AadharVerifyAPI component */}
// //                             <div className="w-full mb-4">
// //                                 <AadharVerifyAPI onVerificationComplete={handleAadharVerification} />
// //                             </div>
// //                         </>
// //                     )}
// //                     {(aadharVerified || !isNewUser) && (
// //                         <input
// //                             type="password"
// //                             placeholder="4-digit PIN"
// //                             value={pin}
// //                             onChange={(e) => setPin(e.target.value)}
// //                             className="w-full p-2 mb-4 border rounded"
// //                             maxLength="4"
// //                             required
// //                         />
// //                     )}
// //                     <button
// //                         type="submit"
// //                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //                     >
// //                         {isNewUser ? 'Register' : 'Login'}
// //                     </button>
// //                 </form>
// //                 <p className="mt-4 text-center">
// //                     {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
// //                     <button
// //                         onClick={() => setIsNewUser(!isNewUser)}
// //                         className="text-blue-500 hover:underline ml-2"
// //                     >
// //                         {isNewUser ? 'Login' : 'Sign Up'}
// //                     </button>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default InitialAuthPage;
// import React, { useState } from 'react';
// import AadharVerifyAPI from './AadharVerifyAPI';

// // Dummy PIN for testing
// const dummyPIN = '1234';

// const InitialAuthPage = ({ onRegistrationComplete, onLoginComplete }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharVerified, setAadharVerified] = useState(false);
//     const [error, setError] = useState('');

//     const handleAadharVerification = (verified) => {
//         setAadharVerified(verified);
//         if (verified && isNewUser) {
//             alert(`Your new PIN is: ${dummyPIN}. Please remember this for future logins.`);
//             setPin(dummyPIN);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isNewUser) {
//             if (aadharVerified) {
//                 console.log('New user registered:', { name, mobileNumber, pin });
//                 onRegistrationComplete();
//             } else {
//                 setError('Please complete Aadhaar verification first.');
//             }
//         } else {
//             if (pin === dummyPIN) {
//                 console.log('User logged in with PIN:', pin);
//                 onLoginComplete();
//             } else {
//                 setError('Invalid PIN. For testing, use: ' + dummyPIN);
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="max-w-2xl w-full bg-white p-8 border rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-center">
//                     {isNewUser ? 'Sign Up' : 'Login'}
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                     {isNewUser && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="Farmer Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full p-2 mb-4 border rounded"
//                                 required
//                             />
//                             <input
//                                 type="tel"
//                                 placeholder="Mobile Number"
//                                 value={mobileNumber}
//                                 onChange={(e) => setMobileNumber(e.target.value)}
//                                 className="w-full p-2 mb-4 border rounded"
//                                 required
//                             />
//                             <div className="w-full mb-4">
//                                 <AadharVerifyAPI onVerificationComplete={handleAadharVerification} />
//                             </div>
//                         </>
//                     )}
//                     {(aadharVerified || !isNewUser) && (
//                         <input
//                             type="password"
//                             placeholder="4-digit PIN"
//                             value={pin}
//                             onChange={(e) => setPin(e.target.value)}
//                             className="w-full p-2 mb-4 border rounded"
//                             maxLength="4"
//                             required
//                         />
//                     )}
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                     >
//                         {isNewUser ? 'Register' : 'Login'}
//                     </button>
//                 </form>
//                 <p className="mt-4 text-center">
//                     {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                     <button
//                         onClick={() => {
//                             setIsNewUser(!isNewUser);
//                             setError('');
//                         }}
//                         className="text-blue-500 hover:underline ml-2"
//                     >
//                         {isNewUser ? 'Login' : 'Sign Up'}
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default InitialAuthPage;

// import React, { useState } from 'react';
// import AadharVerifyAPI from './AadharVerifyAPI';

// // Dummy PIN for testing
// const dummyPIN = '1234';

// const InitialAuthPage = ({ onRegistrationComplete, onLoginComplete }) => {
//     const [isNewUser, setIsNewUser] = useState(true);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [aadharVerified, setAadharVerified] = useState(false);
//     const [error, setError] = useState('');
//     const [step, setStep] = useState(1); // New state to track the current step

//     const handleAadharVerification = (verified) => {
//         setAadharVerified(verified);
//         if (verified && isNewUser) {
//             alert(`Your new PIN is: ${dummyPIN}. Please remember this for future logins.`);
//             setPin(dummyPIN);
//             setStep(3); // Move to PIN entry step after verification
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isNewUser) {
//             if (aadharVerified) {
//                 console.log('New user registered:', { name, mobileNumber, pin });
//                 onRegistrationComplete();
//             } else {
//                 setError('Please complete Aadhaar verification first.');
//             }
//         } else {
//             if (pin === dummyPIN) {
//                 console.log('User logged in with PIN:', pin);
//                 onLoginComplete();
//             } else {
//                 setError('Invalid PIN. For testing, use: ' + dummyPIN);
//             }
//         }
//     };

//     const handleBack = () => {
//         if (step > 1) {
//             setStep(step - 1);
//             setError('');
//         }
//     };

//     const renderStep = () => {
//         switch (step) {
//             case 1:
//                 return (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Farmer Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full p-2 mb-4 border rounded"
//                             required
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Mobile Number"
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}
//                             className="w-full p-2 mb-4 border rounded"
//                             required
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setStep(2)}
//                             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                         >
//                             Next
//                         </button>
//                     </>
//                 );
//             case 2:
//                 return (
//                     <div className="w-full mb-4">
//                         <AadharVerifyAPI onVerificationComplete={handleAadharVerification} />
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <>
//                         <input
//                             type="password"
//                             placeholder="4-digit PIN"
//                             value={pin}
//                             onChange={(e) => setPin(e.target.value)}
//                             className="w-full p-2 mb-4 border rounded"
//                             maxLength="4"
//                             required
//                         />
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                         >
//                             {isNewUser ? 'Register' : 'Login'}
//                         </button>
//                     </>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="max-w-2xl w-full bg-white p-8 border rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-center">
//                     {isNewUser ? 'Sign Up' : 'Login'}
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                     {renderStep()}
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
//                 </form>
//                 {step > 1 && (
//                     <button
//                         onClick={handleBack}
//                         className="mt-4 text-blue-500 hover:underline"
//                     >
//                         Back
//                     </button>
//                 )}
//                 <p className="mt-4 text-center">
//                     {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
//                     <button
//                         onClick={() => {
//                             setIsNewUser(!isNewUser);
//                             setError('');
//                             setStep(1);
//                         }}
//                         className="text-blue-500 hover:underline ml-2"
//                     >
//                         {isNewUser ? 'Login' : 'Sign Up'}
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default InitialAuthPage;
import React, { useState } from 'react';
import AadharVerifyAPI from './AadharVerifyAPI';

// Dummy PIN for testing
const dummyPIN = '1234';

const InitialAuthPage = ({ onRegistrationComplete, onLoginComplete }) => {
    const [isNewUser, setIsNewUser] = useState(true);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pin, setPin] = useState('');
    const [aadharVerified, setAadharVerified] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(1);

    const handleAadharVerification = (verified) => {
        setAadharVerified(verified);
        if (verified && isNewUser) {
            alert(`Your new PIN is: ${dummyPIN}. Please remember this for future logins.`);
            setPin(dummyPIN);
            setStep(3);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNewUser) {
            if (aadharVerified) {
                console.log('New user registered:', { name, mobileNumber, pin });
                onRegistrationComplete();
            } else {
                setError('Please complete Aadhaar verification first.');
            }
        } else {
            if (pin === dummyPIN) {
                console.log('User logged in with PIN:', pin);
                onLoginComplete();
            } else {
                setError('Invalid PIN. For testing, use: ' + dummyPIN);
            }
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
            setError('');
        }
    };

    const renderStep = () => {
        if (!isNewUser) {
            return (
                <>
                    <input
                        type="password"
                        placeholder="4-digit PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        maxLength="4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </>
            );
        }

        switch (step) {
            case 1:
                return (
                    <>
                        <input
                            type="text"
                            placeholder="Farmer Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 mb-4 border rounded"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full p-2 mb-4 border rounded"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Next
                        </button>
                    </>
                );
            case 2:
                return (
                    <div className="w-full mb-4">
                        <AadharVerifyAPI onVerificationComplete={handleAadharVerification} />
                    </div>
                );
            case 3:
                return (
                    <>
                        <input
                            type="password"
                            placeholder="4-digit PIN"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="w-full p-2 mb-4 border rounded"
                            maxLength="4"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-2xl w-full bg-white p-8 border rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isNewUser ? 'Sign Up' : 'Login'}
                </h2>
                <form onSubmit={handleSubmit}>
                    {renderStep()}
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                </form>
                {isNewUser && step > 1 && (
                    <button
                        onClick={handleBack}
                        className="mt-4 text-blue-500 hover:underline"
                    >
                        Back
                    </button>
                )}
                <p className="mt-4 text-center">
                    {isNewUser ? 'Already have an account?' : 'Need to create an account?'}
                    <button
                        onClick={() => {
                            setIsNewUser(!isNewUser);
                            setError('');
                            setStep(1);
                        }}
                        className="text-blue-500 hover:underline ml-2"
                    >
                        {isNewUser ? 'Login' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default InitialAuthPage;