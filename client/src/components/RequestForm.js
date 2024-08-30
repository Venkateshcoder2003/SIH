
// // src/components/RequestForm.js
// import React, { useState } from 'react';

// function RequestForm() {
//     const [request, setRequest] = useState({
//         service: '',
//         date: '',
//         details: ''
//     });

//     const handleChange = (e) => {
//         setRequest({ ...request, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Submitted request:', request);
//         // TODO: Send request to backend
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Request Labor Service</h2>
//             <div>
//                 <label htmlFor="service">Service Type:</label>
//                 <select
//                     id="service"
//                     name="service"
//                     value={request.service}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select a service</option>
//                     <option value="harvesting">Harvesting</option>
//                     <option value="planting">Planting</option>
//                     <option value="maintenance">Maintenance</option>
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="date">Date Needed:</label>
//                 <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={request.date}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="details">Details:</label>
//                 <textarea
//                     id="details"
//                     name="details"
//                     value={request.details}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit">Submit Request</button>
//         </form>
//     );
// }

// export default RequestForm;


// src/components/RequestForm.js
import React, { useState } from 'react';

function RequestForm() {
    const [request, setRequest] = useState({
        service: '',
        date: '',
        details: ''
    });

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted request:', request);
        // TODO: Send request to backend
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Request Labor Service</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                    Service Type:
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="service"
                    name="service"
                    value={request.service}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a service</option>
                    <option value="harvesting">Harvesting</option>
                    <option value="planting">Planting</option>
                    <option value="maintenance">Maintenance</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date Needed:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    id="date"
                    name="date"
                    value={request.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
                    Details:
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="details"
                    name="details"
                    value={request.details}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Submit Request
            </button>
        </form>
    );
}

export default RequestForm;