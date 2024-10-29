import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function RegistrationForm({ onRegistrationComplete }) {
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
        setFormData({});
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:6002/api/${userType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Registration successful!');
                onRegistrationComplete();
            } else {
                toast.error(data.message || 'Registration failed');
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
        }
    };

    const renderFormFields = () => {
        const inputClasses = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300";
        const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

        const renderInput = (name, placeholder, type = "text") => (
            <div>
                <label htmlFor={name} className={labelClasses}>
                    {placeholder}
                </label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                />
            </div>
        );

        const renderSelect = (name, label, options) => (
            <div>
                <label htmlFor={name} className={labelClasses}>
                    {label}
                </label>
                <select
                    id={name}
                    name={name}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                >
                    <option value="">Select {label}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {userType === 'farmOwner' && (
                    <>
                        {renderInput("name", "Full Name")}
                        {renderInput("location", "Farm Location")}
                        {renderInput("adharNumber", "Aadhaar Number")}
                        {renderInput("pin", "PIN", "password")}
                        {renderSelect("farmType", "Type of Farm", [
                            { value: "crop", label: "Crop Farm (ಹಣ್ಣು ಹಂಪಲು ಹಣ್ಣು)" },
                            { value: "dairy", label: "Dairy Farm (ಹಾಲು ಉತ್ಪಾದನೆ)" },
                            { value: "poultry", label: "Poultry Farm (ಕೋಳಿ ಸಾಕಾಣಿಕೆ)" },
                            { value: "fishery", label: "Fishery (ಮೀನುಗಾರಿಕೆ)" },
                            { value: "horticulture", label: "Horticulture (ತೋಟಗಾರಿಕೆ)" },
                        ])}
                        {renderInput("preferredLabor", "Preferred Labor Type")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                )}
                {userType === 'laborer' && (
                    <>
                        {renderInput("name", "Full Name")}
                        {renderInput("aadharNumber", "Aadhaar Number")}
                        {renderInput("pin", "PIN", "password")}
                        {renderInput("skills", "Agricultural Skills")}
                        {renderInput("preferredWage", "Preferred Daily Wage", "number")}
                        {renderSelect("preferredWork", "Preferred Work Type", [
                            { value: "harvesting", label: "Harvesting (ಪಿಕಿಂಗ್)" },
                            { value: "plowing", label: "Plowing (ನೋಡುವಿಕೆ)" },
                            { value: "irrigation", label: "Irrigation (ನೀರು ಬಿಡುವಿಕೆ)" },
                            { value: "seeding", label: "Seeding (ಬೀಜ ಬೀಜಿಸುವಿಕೆ)" },
                            { value: "fertilizing", label: "Fertilizing (ಊರ್ವರಕ ಹಾಕುವಿಕೆ)" },
                        ])}
                        {renderInput("preferredLocation", "Preferred Work Location")}
                        {renderInput("availability", "Availability (e.g., Full-time, Seasonal)")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                )}
                {userType === 'serviceProvider' && (
                    <> {renderInput("name", "Company/Individual Name")}
                        {renderInput("aadharNumber", "Aadhaar Number")}
                        {renderInput("pin", "PIN", "password")}
                        {renderInput("serviceType", "Type of Agricultural Service")}
                        {renderInput("serviceArea", "Service Coverage Area")}
                        {renderInput("charges", "Service Charges", "number")}
                        {renderInput("contactInfo", "Contact Information")}
                    </>
                )}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-8 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-lg mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-center text-gray-900">Farm Unity Registration</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    I am registering as a:
                                </label>
                                <select
                                    value={userType}
                                    onChange={handleUserTypeChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                >
                                    <option value="">Select user type</option>
                                    <option value="farmOwner">Farm Owner</option>
                                    <option value="laborer">Farm Laborer</option>
                                    <option value="serviceProvider">Agricultural Service Provider</option>
                                </select>
                            </div>
                            {userType && renderFormFields()}
                            {userType && (
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                                    >
                                        Register
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;