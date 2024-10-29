import React, { useState, useEffect } from 'react';
import { User, Calendar, Briefcase, DollarSign, Clock, MapPin, Phone, Mail, HelpCircle, LogOut, ArrowLeft } from 'lucide-react';

const LaborDashboard = ({ onBackClick, onLogout }) => {
    const [currentPage, setCurrentPage] = useState('profile');
    const [laborProfile, setLaborProfile] = useState({
        name: 'Rahul Kumar',
        skill: 'Harvesting',
        experience: '5 years',
        dailyWage: '₹500',
        location: 'Tumkur, Karnataka',
        phone: '+91 9876543210',
        email: 'rahul.kumar@example.com'
    });
    const [upcomingJobs] = useState([
        { id: 1, date: '2024-09-05', farmer: 'John Smith', location: 'Field A', duration: '8 hours' },
        { id: 2, date: '2024-09-10', farmer: 'Emily Brown', location: 'Orchard B', duration: '6 hours' },
    ]);

    const menuItems = [
        { icon: <User className="w-5 h-5 mr-3" />, text: "My Profile", page: 'profile' },
        { icon: <Calendar className="w-5 h-5 mr-3" />, text: "My Calendar", page: 'calendar' },
        { icon: <Briefcase className="w-5 h-5 mr-3" />, text: "Job History", page: 'jobHistory' },
        { icon: <DollarSign className="w-5 h-5 mr-3" />, text: "Earnings", page: 'earnings' },
        { icon: <HelpCircle className="w-5 h-5 mr-3" />, text: "Help & Support", page: 'support' },
        { icon: <LogOut className="w-5 h-5 mr-3" />, text: "Logout", page: 'logout' },
    ];

    useEffect(() => {
        if (currentPage === 'logout') {
            handleLogout();
        }
    }, [currentPage]);

    const handleLogout = async () => {
        try {
            // Simulating an API call to delete labor data from the database
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Clear local state
            setLaborProfile(null);

            // Call the onLogout prop to handle app-level logout logic
            onLogout();
        } catch (error) {
            console.error('Error during logout:', error);
            // Handle error (e.g., show an error message to the user)
        }
    };

    const renderProfile = () => (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                    <User className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Name:</span> {laborProfile.name}</p>
                </div>
                <div className="flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Skill:</span> {laborProfile.skill}</p>
                </div>
                <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Experience:</span> {laborProfile.experience}</p>
                </div>
                <div className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Daily Wage:</span> {laborProfile.dailyWage}</p>
                </div>
                <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Location:</span> {laborProfile.location}</p>
                </div>
                <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Phone:</span> {laborProfile.phone}</p>
                </div>
                <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-gray-600" />
                    <p><span className="font-semibold">Email:</span> {laborProfile.email}</p>
                </div>
            </div>
        </div>
    );

    const renderCalendar = () => (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">My Calendar</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Farmer</th>
                            <th className="py-2 px-4 border-b text-left">Location</th>
                            <th className="py-2 px-4 border-b text-left">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingJobs.map((job) => (
                            <tr key={job.id}>
                                <td className="py-2 px-4 border-b">{job.date}</td>
                                <td className="py-2 px-4 border-b">{job.farmer}</td>
                                <td className="py-2 px-4 border-b">{job.location}</td>
                                <td className="py-2 px-4 border-b">{job.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderJobHistory = () => (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Job History</h2>
            <ul className="space-y-2">
                <li>Harvesting - Farm A (Completed)</li>
                <li>Planting - Farm B (Completed)</li>
                <li>Irrigation - Farm C (Completed)</li>
            </ul>
        </div>
    );

    const renderEarnings = () => (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Earnings</h2>
            <p className="text-xl font-bold">Total: ₹15,000</p>
            <p className="text-sm text-gray-600">Last 30 days</p>
        </div>
    );

    const renderSupport = () => (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
            <p>If you need any assistance, please contact our support team at support@farmunity.com</p>
        </div>
    );

    const renderDashboard = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Available Jobs</h3>
                <ul className="space-y-2">
                    <li>Harvesting - Farm A</li>
                    <li>Planting - Farm B</li>
                    <li>Irrigation - Farm C</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">My Schedule</h3>
                <ul className="space-y-2">
                    <li>Monday: Farm A - Harvesting</li>
                    <li>Wednesday: Farm B - Planting</li>
                    <li>Friday: Farm C - Irrigation</li>
                </ul>
            </div>
            {renderEarnings()}
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-green-800 text-white shadow-lg">
                <div className="p-4">
                    <div className="flex items-center mb-4">
                        <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <h2 className="font-bold">{laborProfile?.name || 'Guest'}</h2>
                            <p className="text-sm text-green-200">Laborer ID: L12345</p>
                        </div>
                    </div>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center py-2 px-4 hover:bg-green-700 cursor-pointer"
                            onClick={() => setCurrentPage(item.page)}
                        >
                            {item.icon}
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Labor Dashboard</h1>
                        <button
                            onClick={onBackClick}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back
                        </button>
                    </div>
                </header>

                {/* Dashboard content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {currentPage === 'profile' && renderProfile()}
                        {currentPage === 'calendar' && renderCalendar()}
                        {currentPage === 'jobHistory' && renderJobHistory()}
                        {currentPage === 'earnings' && renderEarnings()}
                        {currentPage === 'support' && renderSupport()}
                        {currentPage === 'dashboard' && renderDashboard()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LaborDashboard;


// import React, { useState, useEffect } from 'react';
// import { User, Calendar, Briefcase, DollarSign, Clock, MapPin, Phone, Mail, HelpCircle, LogOut, ArrowLeft } from 'lucide-react';

// const LaborDashboard = ({ onBackClick, onLogout }) => {
//     const [currentPage, setCurrentPage] = useState('profile');
//     const [laborProfile, setLaborProfile] = useState({
//         name: 'Rahul Kumar',
//         skill: 'Harvesting',
//         experience: '5 years',
//         dailyWage: '₹500',
//         location: 'Tumkur, Karnataka',
//         phone: '+91 9876543210',
//         email: 'rahul.kumar@example.com'
//     });
//     const [upcomingJobs] = useState([
//         { id: 1, date: '2024-09-05', farmer: 'John Smith', location: 'Field A', duration: '8 hours' },
//         { id: 2, date: '2024-09-10', farmer: 'Emily Brown', location: 'Orchard B', duration: '6 hours' },
//     ]);
//     // New state for job request form
//     const [jobRequest, setJobRequest] = useState({
//         date: '',
//         numberOfWorkers: 0,
//         notes: ''
//     });

//     const [jobRequests, setJobRequests] = useState([]);

//     const menuItems = [
//         { icon: <User className="w-5 h-5 mr-3" />, text: "My Profile", page: 'profile' },
//         { icon: <Calendar className="w-5 h-5 mr-3" />, text: "My Calendar", page: 'calendar' },
//         { icon: <Briefcase className="w-5 h-5 mr-3" />, text: "Job History", page: 'jobHistory' },
//         { icon: <DollarSign className="w-5 h-5 mr-3" />, text: "Earnings", page: 'earnings' },
//         { icon: <HelpCircle className="w-5 h-5 mr-3" />, text: "Help & Support", page: 'support' },
//         { icon: <LogOut className="w-5 h-5 mr-3" />, text: "Logout", page: 'logout' },
//     ];

//     useEffect(() => {
//         if (currentPage === 'logout') {
//             handleLogout();
//         }
//     }, [currentPage]);


//     // New state for job request form
//     const [jobRequest, setJobRequest] = useState({
//         date: '',
//         numberOfWorkers: 0,
//         notes: ''
//     });

//     const [jobRequests, setJobRequests] = useState([]);

//     const handleLogout = async () => {
//         try {
//             // Simulating an API call to delete labor data from the database
//             await new Promise(resolve => setTimeout(resolve, 1000));

//             // Clear local state
//             setLaborProfile(null);

//             // Call the onLogout prop to handle app-level logout logic
//             onLogout();
//         } catch (error) {
//             console.error('Error during logout:', error);
//             // Handle error (e.g., show an error message to the user)
//         }
//     };

//     const renderProfile = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex items-center">
//                     <User className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Name:</span> {laborProfile.name}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Briefcase className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Skill:</span> {laborProfile.skill}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Clock className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Experience:</span> {laborProfile.experience}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <DollarSign className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Daily Wage:</span> {laborProfile.dailyWage}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <MapPin className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Location:</span> {laborProfile.location}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Phone className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Phone:</span> {laborProfile.phone}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Mail className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Email:</span> {laborProfile.email}</p>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderCalendar = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">My Calendar</h2>

//             {/* Job Request Form */}
//             <form onSubmit={handleJobRequestSubmit} className="mb-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                         <input
//                             type="date"
//                             value={jobRequest.date}
//                             onChange={(e) => setJobRequest({ ...jobRequest, date: e.target.value })}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Number of Workers</label>
//                         <input
//                             type="number"
//                             value={jobRequest.numberOfWorkers}
//                             onChange={(e) => setJobRequest({ ...jobRequest, numberOfWorkers: e.target.value })}
//                             className="w-full p-2 border rounded-md"
//                             min="0"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
//                         <input
//                             type="text"
//                             value={jobRequest.notes}
//                             onChange={(e) => setJobRequest({ ...jobRequest, notes: e.target.value })}
//                             className="w-full p-2 border rounded-md"
//                         />
//                     </div>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
//                 >
//                     POST JOB REQUEST
//                 </button>
//             </form>

//             {/* Job Requests Table */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="py-2 px-4 border-b text-left">Date</th>
//                             <th className="py-2 px-4 border-b text-left">Workers Needed</th>
//                             <th className="py-2 px-4 border-b text-left">Notes</th>
//                             <th className="py-2 px-4 border-b text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {jobRequests.map((request) => (
//                             <tr key={request._id}>
//                                 <td className="py-2 px-4 border-b">
//                                     {new Date(request.date).toLocaleDateString()}
//                                 </td>
//                                 <td className="py-2 px-4 border-b">{request.amount}</td>
//                                 <td className="py-2 px-4 border-b">{request.notes}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         onClick={() => handleDeleteRequest(request._id)}
//                                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );

//     const renderJobHistory = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Job History</h2>
//             <ul className="space-y-2">
//                 <li>Harvesting - Farm A (Completed)</li>
//                 <li>Planting - Farm B (Completed)</li>
//                 <li>Irrigation - Farm C (Completed)</li>
//             </ul>
//         </div>
//     );

//     const renderEarnings = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Earnings</h2>
//             <p className="text-xl font-bold">Total: ₹15,000</p>
//             <p className="text-sm text-gray-600">Last 30 days</p>
//         </div>
//     );

//     const renderSupport = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
//             <p>If you need any assistance, please contact our support team at support@farmunity.com</p>
//         </div>
//     );

//     const renderDashboard = () => (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow">
//                 <h3 className="text-lg font-semibold mb-4">Available Jobs</h3>
//                 <ul className="space-y-2">
//                     <li>Harvesting - Farm A</li>
//                     <li>Planting - Farm B</li>
//                     <li>Irrigation - Farm C</li>
//                 </ul>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//                 <h3 className="text-lg font-semibold mb-4">My Schedule</h3>
//                 <ul className="space-y-2">
//                     <li>Monday: Farm A - Harvesting</li>
//                     <li>Wednesday: Farm B - Planting</li>
//                     <li>Friday: Farm C - Irrigation</li>
//                 </ul>
//             </div>
//             {renderEarnings()}
//         </div>
//     );

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-64 bg-green-800 text-white shadow-lg">
//                 <div className="p-4">
//                     <div className="flex items-center mb-4">
//                         <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
//                         <div>
//                             <h2 className="font-bold">{laborProfile?.name || 'Guest'}</h2>
//                             <p className="text-sm text-green-200">Laborer ID: L12345</p>
//                         </div>
//                     </div>
//                     {menuItems.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center py-2 px-4 hover:bg-green-700 cursor-pointer"
//                             onClick={() => setCurrentPage(item.page)}
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
//                         <h1 className="text-2xl font-bold text-gray-900">Labor Dashboard</h1>
//                         <button
//                             onClick={onBackClick}
//                             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
//                         >
//                             <ArrowLeft className="w-5 h-5 mr-2" />
//                             Back
//                         </button>
//                     </div>
//                 </header>

//                 {/* Dashboard content */}
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                         {currentPage === 'profile' && renderProfile()}
//                         {currentPage === 'calendar' && renderCalendar()}
//                         {currentPage === 'jobHistory' && renderJobHistory()}
//                         {currentPage === 'earnings' && renderEarnings()}
//                         {currentPage === 'support' && renderSupport()}
//                         {currentPage === 'dashboard' && renderDashboard()}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default LaborDashboard;

