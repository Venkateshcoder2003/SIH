


import React, { useState } from 'react';

function RegistrationForm() {
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({});

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
        setFormData({});
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', { userType, ...formData });
    };

    const renderFormFields = () => {
        const inputClasses = "shadow-lg appearance-none border-2 border-green-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 ease-in-out mb-4 hover:shadow-xl";
        const labelClasses = "block text-green-700 text-lg font-bold mb-2 transition duration-300 ease-in-out transform hover:scale-105";

        const renderInput = (name, placeholder) => (
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: `${Math.random() * 0.5}s` }}>
                <label htmlFor={name} className={labelClasses}>
                    {placeholder}
                </label>
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                />
            </div>
        );

        switch (userType) {
            case 'farmOwner':
                return (
                    <>
                        {renderInput("name", "Name")}
                        {renderInput("location", "Location")}
                        {renderInput("farmType", "Type of Farm")}
                        {renderInput("preferredLabor", "Preferred Labor")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                );
            case 'laborer':
                return (
                    <>
                        {renderInput("name", "Name")}
                        {renderInput("skills", "Skills")}
                        {renderInput("preferredWage", "Preferred Wage")}
                        {renderInput("preferredWork", "Preferred Work")}
                        {renderInput("preferredLocation", "Preferred Location")}
                        {renderInput("availability", "Daily/Weekly Availability")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                );
            case 'serviceProvider':
                return (
                    <>
                        {renderInput("name", "Name")}
                        {renderInput("serviceType", "Type of Service")}
                        {renderInput("serviceArea", "Service Area")}
                        {renderInput("charges", "Charges")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-extrabold text-center text-green-800 mb-6 animate-bounce">Farm Unity Registration</h2>
                    <div className="mb-6">
                        <label className="block text-green-700 text-lg font-bold mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                            I am a:
                            <select
                                value={userType}
                                onChange={handleUserTypeChange}
                                className="shadow-lg border-2 border-green-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 ease-in-out mt-1 hover:shadow-xl"
                            >
                                <option value="">Select user type</option>
                                <option value="farmOwner">Farm Owner</option>
                                <option value="laborer">Laborer</option>
                                <option value="serviceProvider">Service Provider</option>
                            </select>
                        </label>
                    </div>
                    {userType && (
                        <div className="mb-6">
                            {renderFormFields()}
                        </div>
                    )}
                    {userType && (
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        >
                            Register
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;