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


// import React, { useState, useEffect } from 'react';
// import LoginForm from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import DashboardSelection from './components/DashboardSelection';
// import FarmerDashboard from './components/FarmerDashboard/Dashboard';
// import LaborDashboard from './components/FarmerDashboard/LabourDashboard';
// import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard';

// import farmUnityLogo from './components/FarmerDashboard/Logo.png'

// const AnimatedIntro = ({ onAnimationComplete }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onAnimationComplete();
//     }, 4000); // Adjust timing as needed

//     return () => clearTimeout(timer);
//   }, [onAnimationComplete]);

//   return (
//     <div className="min-h-screen bg-[#1E212A] flex flex-col justify-center items-center overflow-hidden">
//       <div className="text-white font-sans text-5xl font-bold tracking-wider text-center mb-6">
//         {'FARM\nUNITY'.split('\n').map((line, lineIndex) => (
//           <div key={lineIndex}>
//             {line.split('').map((letter, letterIndex) => (
//               <span
//                 key={letterIndex}
//                 className="inline-block opacity-0 animate-[slideInFromLeft_0.5s_forwards]"
//                 style={{ animationDelay: `${lineIndex * 0.5 + letterIndex * 0.1}s` }}
//               >
//                 {letter}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="opacity-0 animate-[slideInFromLeft_0.5s_forwards] mt-4" style={{ animationDelay: '2s' }}>
//         <img src={farmUnityLogo} alt="Logo" className="w-[150px] h-[150px] rounded-full" />
//       </div>
//       <div
//         className="text-white text-center mt-4 opacity-0 animate-[slideInFromLeft_0.5s_forwards]"
//         style={{ animationDelay: '2.5s', fontSize: '1.25rem' }}
//       >
//         India's Firstever Agri Open Mobility platform
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [userState, setUserState] = useState('intro');
//   const [dashboardType, setDashboardType] = useState(null);

//   const handleAnimationComplete = () => {
//     setUserState('initial');
//   };

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
//       {userState === 'intro' ? (
//         <AnimatedIntro onAnimationComplete={handleAnimationComplete} />
//       ) : (
//         <>
//           <header className="bg-white shadow">
//             <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//               <h1 className="text-3xl font-bold text-gray-900">Farm Unity</h1>
//             </div>
//           </header>
//           <main>
//             {userState === 'initial' && (
//               <LoginForm
//                 onNewUserSignup={handleNewUserSignup}
//                 onExistingUserLogin={handleUserAuthenticated}
//               />
//             )}
//             {userState === 'registering' && (
//               <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
//             )}
//             {userState === 'dashboardSelection' && (
//               <DashboardSelection onSelect={handleDashboardSelection} />
//             )}
//             {userState === 'dashboard' && renderDashboard()}
//           </main>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;