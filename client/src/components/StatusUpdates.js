// // src/components/Dashboard.js



// // src/components/StatusUpdates.js
// import React from 'react';

// function StatusUpdates() {
//     // Mock data - replace with actual API call later
//     const requests = [
//         { id: 1, service: 'Harvesting', date: '2024-09-15', status: 'Pending' },
//         { id: 2, service: 'Planting', date: '2024-10-01', status: 'Assigned' },
//     ];

//     return (
//         <div className="status-updates">
//             <h2>Current Requests</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Service</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {requests.map((request) => (
//                         <tr key={request.id}>
//                             <td>{request.service}</td>
//                             <td>{request.date}</td>
//                             <td>{request.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default StatusUpdates;













// src/components/StatusUpdates.js
import React from 'react';

function StatusUpdates() {
    // Mock data - replace with actual API call later
    const requests = [
        { id: 1, service: 'Harvesting', date: '2024-09-15', status: 'Pending' },
        { id: 2, service: 'Planting', date: '2024-10-01', status: 'Assigned' },
    ];

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Current Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Service</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {requests.map((request) => (
                            <tr key={request.id}>
                                <td className="w-1/3 text-left py-3 px-4">{request.service}</td>
                                <td className="w-1/3 text-left py-3 px-4">{request.date}</td>
                                <td className="text-left py-3 px-4">
                                    <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${request.status === 'Pending' ? 'text-orange-700 bg-orange-100' : 'text-green-700 bg-green-100'
                                        }`}>
                                        {request.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StatusUpdates;

