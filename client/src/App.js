// import React, { useState } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import Dashboard from './components/FarmerDashboard/Dashboard'

// function App() {
//   const [userState, setUserState] = useState('initial'); // 'initial', 'registering', 'loggedIn'

//   const handleNewUserSignup = () => {
//     setUserState('registering');
//   };

//   const handleUserAuthenticated = () => {
//     setUserState('loggedIn');
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Farm Unity</h1>
//         {userState === 'initial' && (
//           <LoginForm
//             onNewUserSignup={handleNewUserSignup}
//             onExistingUserLogin={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'registering' && (
//           <RegistrationForm
//             onRegistrationComplete={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'loggedIn' && <Dashboard />}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import Dashboard from './components/FarmerDashboard/Dashboard';
// import DashboardSelection from './components/DashboardSelection';

// function App() {
//   const [userState, setUserState] = useState('initial'); // 'initial', 'registering', 'authenticated', 'dashboard'
//   const [dashboardType, setDashboardType] = useState(null);

//   const handleNewUserSignup = () => {
//     setUserState('registering');
//   };

//   const handleUserAuthenticated = () => {
//     setUserState('authenticated');
//   };

//   const handleDashboardSelection = (type) => {
//     setDashboardType(type);
//     setUserState('dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
//         </div>
//       </header>
//       <main>
//         {userState === 'initial' && (
//           <LoginForm
//             onNewUserSignup={handleNewUserSignup}
//             onExistingUserLogin={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'registering' && (
//           <RegistrationForm onRegistrationComplete={handleUserAuthenticated} />
//         )}
//         {userState === 'authenticated' && (
//           <DashboardSelection onSelect={handleDashboardSelection} />
//         )}
//         {userState === 'dashboard' && (
//           <Dashboard type={dashboardType} />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import Dashboard from './components/FarmerDashboard/Dashboard';
// import DashboardSelection from './components/DashboardSelection';

// function App() {
//   const [userState, setUserState] = useState('initial'); // 'initial', 'registering', 'dashboardSelection', 'dashboard'
//   const [dashboardType, setDashboardType] = useState(null);

//   const handleNewUserSignup = () => {
//     setUserState('registering');
//   };

//   const handleUserAuthenticated = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleRegistrationComplete = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleDashboardSelection = (type) => {
//     setDashboardType(type);
//     setUserState('dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
//         </div>
//       </header>
//       <main>
//         {userState === 'initial' && (
//           <LoginForm
//             onNewUserSignup={handleNewUserSignup}
//             onExistingUserLogin={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'registering' && (
//           <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
//         )}
//         {userState === 'dashboardSelection' && (
//           <DashboardSelection onSelect={handleDashboardSelection} />
//         )}
//         {userState === 'dashboard' && (
//           <Dashboard type={dashboardType} />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import DashboardSelection from './components/DashboardSelection';
// import FarmerDashboard from './components/FarmerDashboard/Dashboard'
// import LaborDashboard from './components/FarmerDashboard/LabourDashboard'
// import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard'

// function App() {
//   const [userState, setUserState] = useState('initial');
//   const [dashboardType, setDashboardType] = useState(null);

//   const handleNewUserSignup = () => {
//     setUserState('registering');
//   };

//   const handleUserAuthenticated = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleRegistrationComplete = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleDashboardSelection = (type) => {
//     setDashboardType(type);
//     setUserState('dashboard');
//   };

//   const renderDashboard = () => {
//     switch (dashboardType) {
//       case 'farmOwner':
//         return <FarmerDashboard />;
//       case 'labor':
//         return <LaborDashboard />;
//       case 'serviceProvider':
//         return <ServiceProviderDashboard />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
//         </div>
//       </header>
//       <main>
//         {userState === 'initial' && (
//           <LoginForm
//             onNewUserSignup={handleNewUserSignup}
//             onExistingUserLogin={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'registering' && (
//           <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
//         )}
//         {userState === 'dashboardSelection' && (
//           <DashboardSelection onSelect={handleDashboardSelection} />
//         )}
//         {userState === 'dashboard' && renderDashboard()}
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import DashboardSelection from './components/DashboardSelection';
// import FarmerDashboard from './components/FarmerDashboard/Dashboard';
// import LaborDashboard from './components/FarmerDashboard/LabourDashboard';
// import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard';

// function App() {
//   const [userState, setUserState] = useState('initial');
//   const [dashboardType, setDashboardType] = useState(null);

//   const handleNewUserSignup = () => {
//     setUserState('registering');
//   };

//   const handleUserAuthenticated = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleRegistrationComplete = () => {
//     setUserState('dashboardSelection');
//   };

//   const handleDashboardSelection = (type) => {
//     setDashboardType(type);
//     setUserState('dashboard');
//   };

//   const handleBackToDashboardSelection = () => {
//     setUserState('dashboardSelection');
//     setDashboardType(null);
//   };

//   const renderDashboard = () => {
//     switch (dashboardType) {
//       case 'farmOwner':
//         return <FarmerDashboard onBackClick={handleBackToDashboardSelection} />;
//       case 'labor':
//         return <LaborDashboard onBackClick={handleBackToDashboardSelection} />;
//       case 'serviceProvider':
//         return <ServiceProviderDashboard onBackClick={handleBackToDashboardSelection} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
//         </div>
//       </header>
//       <main>
//         {userState === 'initial' && (
//           <LoginForm
//             onNewUserSignup={handleNewUserSignup}
//             onExistingUserLogin={handleUserAuthenticated}
//           />
//         )}
//         {userState === 'registering' && (
//           <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
//         )}
//         {userState === 'dashboardSelection' && (
//           <DashboardSelection onSelect={handleDashboardSelection} />
//         )}
//         {userState === 'dashboard' && renderDashboard()}
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import LoginForm from './components/adharVerify/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import DashboardSelection from './components/DashboardSelection';
import FarmerDashboard from './components/FarmerDashboard/Dashboard';
import LaborDashboard from './components/FarmerDashboard/LabourDashboard';
import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard';

function App() {
  const [userState, setUserState] = useState('initial');
  const [dashboardType, setDashboardType] = useState(null);

  const handleNewUserSignup = () => {
    setUserState('registering');
  };

  const handleUserAuthenticated = () => {
    setUserState('dashboardSelection');
  };

  const handleRegistrationComplete = () => {
    setUserState('dashboardSelection');
  };

  const handleDashboardSelection = (type) => {
    setDashboardType(type);
    setUserState('dashboard');
  };

  const handleBackToDashboardSelection = () => {
    setUserState('dashboardSelection');
    setDashboardType(null);
  };

  const renderDashboard = () => {
    switch (dashboardType) {
      case 'farmOwner':
        return <FarmerDashboard onBackClick={handleBackToDashboardSelection} />;
      case 'labor':
        return <LaborDashboard onBackClick={handleBackToDashboardSelection} />;
      case 'serviceProvider':
        return <ServiceProviderDashboard onBackClick={handleBackToDashboardSelection} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
        </div>
      </header>
      <main>
        {userState === 'initial' && (
          <LoginForm
            onNewUserSignup={handleNewUserSignup}
            onExistingUserLogin={handleUserAuthenticated}
          />
        )}
        {userState === 'registering' && (
          <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
        )}
        {userState === 'dashboardSelection' && (
          <DashboardSelection onSelect={handleDashboardSelection} />
        )}
        {userState === 'dashboard' && renderDashboard()}
      </main>
    </div>
  );
}

export default App;