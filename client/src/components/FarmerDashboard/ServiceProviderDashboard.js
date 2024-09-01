import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ServiceProviderDashboard = ({ onBackClick }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Service Provider Dashboard</h1>
                    <button
                        onClick={onBackClick}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                </div>
            </header>
            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Active Contracts</h3>
                            <ul className="space-y-2">
                                <li>Equipment Rental - Farm X</li>
                                <li>Pest Control - Farm Y</li>
                                <li>Soil Testing - Farm Z</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Upcoming Services</h3>
                            <ul className="space-y-2">
                                <li>Tuesday: Farm X - Equipment Delivery</li>
                                <li>Thursday: Farm Y - Pest Inspection</li>
                                <li>Saturday: Farm Z - Soil Sample Collection</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Revenue</h3>
                            <p className="text-xl font-bold">Total: ₹50,000</p>
                            <p className="text-sm text-gray-600">Last 30 days</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServiceProviderDashboard;
