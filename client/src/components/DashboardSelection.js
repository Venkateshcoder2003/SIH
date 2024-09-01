import React from 'react';
import { ArrowRight, Tractor, Users, Wrench } from 'lucide-react';

const DashboardButton = ({ icon: Icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-4 text-left text-lg font-semibold text-gray-700 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
    >
        <div className="flex items-center">
            <Icon className="w-8 h-8 mr-3 text-blue-500" />
            <span>{label}</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400" />
    </button>
);

const DashboardSelection = ({ onSelect }) => {
    const handleSelection = (dashboardType) => {
        onSelect(dashboardType);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
                    Select Your Dashboard
                </h2>
                <div className="space-y-4">
                    <DashboardButton
                        icon={Tractor}
                        label="Farm Owner Dashboard"
                        onClick={() => handleSelection('farmOwner')}
                    />
                    <DashboardButton
                        icon={Users}
                        label="Labor Dashboard"
                        onClick={() => handleSelection('labor')}
                    />
                    <DashboardButton
                        icon={Wrench}
                        label="Service Provider Dashboard"
                        onClick={() => handleSelection('serviceProvider')}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardSelection;