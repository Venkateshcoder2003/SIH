import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const API_KEY = '4b7e2f21c8d14a73f094a03e73841c11'; // Replace with your actual API key
const API_BASE_URL = 'https://api.agromonitoring.com/agro/1.0';

const CropPrices = () => {
    const [cropPrices, setCropPrices] = useState([]);
    const [selectedCrop, setSelectedCrop] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCropPrices();
    }, []);

    const fetchCropPrices = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/price?appid=${API_KEY}`);
            const formattedData = response.data.map(crop => ({
                id: crop.id,
                name: crop.name,
                price: (crop.price * 74.5).toFixed(2), // Assuming 1 USD = 74.5 INR
                priceHistory: crop.history.map(item => ({
                    date: new Date(item.valid_time * 1000).toISOString().split('T')[0],
                    price: (item.price * 74.5).toFixed(2)
                }))
            }));
            setCropPrices(formattedData);
        } catch (error) {
            console.error("Failed to fetch crop prices:", error);
            setError("Failed to fetch crop prices. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Market Prices</h2>
            {isLoading ? (
                <p>Loading crop prices...</p>
            ) : error ? (
                <>
                    <p className="text-red-500 mb-2">{error}</p>
                    <button
                        onClick={fetchCropPrices}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Retry
                    </button>
                </>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Crop List</h3>
                        {cropPrices.length > 0 ? (
                            <ul className="space-y-2">
                                {cropPrices.map((crop) => (
                                    <li
                                        key={crop.id}
                                        className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                                        onClick={() => setSelectedCrop(crop)}
                                    >
                                        {crop.name} - ₹{crop.price}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No crop prices available at the moment.</p>
                        )}
                    </div>
                    <div>
                        {selectedCrop && (
                            <>
                                <h3 className="text-lg font-semibold mb-2">{selectedCrop.name} Price Trend</h3>
                                {selectedCrop.priceHistory && selectedCrop.priceHistory.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={selectedCrop.priceHistory}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="date" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <p>No price history available for this crop.</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropPrices;



// import React, { useState, useEffect } from 'react';
// import { Menu, Sun, CloudRain, Wind, Thermometer, Crop, Users, BarChart2, Calendar, HelpCircle, LogOut, Globe, Tractor } from 'lucide-react';
// import CropPrices from './CropPrices'; // Make sure this path is correct

// const About = () => (
//     <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold mb-4">About Farm Unity</h2>
//         <p className="text-gray-600">
//             Farm Unity is a revolutionary platform designed to empower farmers with modern tools and insights.
//             Our mission is to enhance agricultural productivity and sustainability through technology.
//         </p>
//         <p className="text-gray-600 mt-4">
//             This is a placeholder for more detailed information about Farm Unity. You can add your specific content here.
//         </p>
//     </div>
// );

// const Dashboard = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const [currentPage, setCurrentPage] = useState('dashboard');
//     const [weatherData, setWeatherData] = useState({
//         temperature: 0,
//         humidity: 0,
//         windSpeed: 0,
//         rainfall: 0
//     });

//     const toggleMenu = () => setShowMenu(!showMenu);

//     useEffect(() => {
//         const fetchWeatherData = async () => {
//             try {
//                 const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tumkur&units=metric&appid=4fcc4389268b7e95e62f16724eceebf7');
//                 const data = await response.json();
//                 setWeatherData({
//                     temperature: data.main.temp,
//                     humidity: data.main.humidity,
//                     windSpeed: data.wind.speed,
//                     rainfall: data.rain ? data.rain['1h'] : 0
//                 });
//             } catch (error) {
//                 console.error("Failed to fetch weather data:", error);
//             }
//         };

//         fetchWeatherData();
//         const intervalId = setInterval(fetchWeatherData, 3600000);

//         return () => clearInterval(intervalId);
//     }, []);

//     const renderWeatherOverview = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Weather Overview</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="flex items-center">
//                     <Sun className="w-8 h-8 text-yellow-400 mr-2" />
//                     <div>
//                         <p className="text-sm text-gray-500">Temperature</p>
//                         <p className="text-lg font-semibold">{weatherData.temperature.toFixed(1)}°C</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <CloudRain className="w-8 h-8 text-blue-400 mr-2" />
//                     <div>
//                         <p className="text-sm text-gray-500">Rainfall</p>
//                         <p className="text-lg font-semibold">{weatherData.rainfall.toFixed(1)} mm</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <Wind className="w-8 h-8 text-gray-400 mr-2" />
//                     <div>
//                         <p className="text-sm text-gray-500">Wind Speed</p>
//                         <p className="text-lg font-semibold">{weatherData.windSpeed.toFixed(1)} m/s</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <Thermometer className="w-8 h-8 text-red-400 mr-2" />
//                     <div>
//                         <p className="text-sm text-gray-500">Humidity</p>
//                         <p className="text-lg font-semibold">{weatherData.humidity.toFixed(0)}%</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderLocation = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Location</h2>
//             <div className="map-responsive">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7764.599878262775!2d77.11967819184774!3d13.331609087818828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1725126847248!5m2!1sen!2sin"
//                     width="100%"
//                     height="450"
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="Responsive Google Map"
//                     className="border-0"
//                 ></iframe>
//             </div>
//         </div>
//     );

//     const menuItems = [
//         { icon: <BarChart2 className="w-5 h-5 mr-3" />, text: "Live status Dashboard", page: 'dashboard' },
//         { icon: <Crop className="w-5 h-5 mr-3" />, text: "Market Prices", page: 'marketPrices' },
//         { icon: <Users className="w-5 h-5 mr-3" />, text: "Labor Management" },
//         { icon: <BarChart2 className="w-5 h-5 mr-3" />, text: "Favourites" },
//         { icon: <Calendar className="w-5 h-5 mr-3" />, text: "My Calendar" },
//         { icon: <Globe className="w-5 h-5 mr-3" />, text: "Language" },
//         { icon: <HelpCircle className="w-5 h-5 mr-3" />, text: "Help & Support" },
//         { icon: <LogOut className="w-5 h-5 mr-3" />, text: "Logout" },
//         { icon: <Tractor className="w-5 h-5 mr-3" />, text: "About", page: 'about' }
//     ];

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className={`w-64 bg-green-800 text-white shadow-lg ${showMenu ? 'block' : 'hidden'} md:block`}>
//                 <div className="p-4">
//                     <div className="flex items-center mb-4">
//                         <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
//                         <div>
//                             <h2 className="font-bold">John Smith</h2>
//                             <p className="text-sm text-green-200">Farmer ID: F12345</p>
//                         </div>
//                     </div>
//                     {menuItems.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center py-2 px-4 hover:bg-green-700 cursor-pointer"
//                             onClick={() => item.page && setCurrentPage(item.page)}
//                         >
//                             {item.icon}
//                             <span>{item.text}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Main content */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 {/* Header */}
//                 <header className="bg-white shadow-sm">
//                     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//                         <div className="flex items-center">
//                             <button onClick={toggleMenu} className="md:hidden mr-2">
//                                 <Menu className="h-6 w-6" />
//                             </button>
//                             <h1 className="text-2xl font-bold text-gray-900">Farm Dashboard</h1>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Dashboard content */}
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                         {currentPage === 'dashboard' && (
//                             <>
//                                 {renderWeatherOverview()}
//                                 {renderLocation()}
//                                 <div className="grid grid-cols-2 gap-6">
//                                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                         Labour
//                                     </button>
//                                     <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//                                         Service Provider
//                                     </button>
//                                 </div>
//                             </>
//                         )}
//                         {currentPage === 'about' && <About />}
//                         {currentPage === 'marketPrices' && <CropPrices />}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;