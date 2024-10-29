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
