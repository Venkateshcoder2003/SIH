// import React from 'react';
// import RequestForm from './RequestForm.js'
// import StatusUpdates from './StatusUpdates';

// function Dashboard() {
//     return (
//         <div className="dashboard">
//             <h1>Farmer Dashboard</h1>
//             <RequestForm />
//             <StatusUpdates />
//         </div>
//     );
// }

// export default Dashboard;


import React from 'react';
import RequestForm from './RequestForm';
import StatusUpdates from './StatusUpdates';

function Dashboard() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Farmer Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RequestForm />
                <StatusUpdates />
            </div>
        </div>
    );
}

export default Dashboard;