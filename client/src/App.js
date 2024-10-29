import React, { useState, useCallback, useEffect } from 'react';
import LoginForm from './components/adharVerify/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import DashboardSelection from './components/DashboardSelection';
import FarmerDashboard from './components/FarmerDashboard/Dashboard';
import LaborDashboard from './components/FarmerDashboard/LabourDashboard';
import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard';

function App() {
  const [userState, setUserState] = useState('animation');
  const [dashboardType, setDashboardType] = useState(null);
  const [services, setServices] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setUserState('deviceSelection');
    }, 5000); // Animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleDeviceSelection = (isSmartphone) => {
    setUserState(isSmartphone ? 'initial' : 'desktopRedirect');
  };

  const handleNewUserSignup = () => {
    setUserState('registering');
  };

  const sendServices = useCallback((newServices) => {
    setServices(newServices);
  }, []);

  const handleUserAuthenticated = (user) => {
    setCurrentUser(user);
    setUserState('dashboardSelection');
  };

  const handleRegistrationComplete = (user) => {
    setCurrentUser(user);
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

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
    setUserState('initial');
    setDashboardType(null);
    setServices([]);
    setServiceRequests([]);
  }, []);



  const updateServices = useCallback((newServices) => {
    setServices(newServices);
  }, []);

  const requestService = useCallback((serviceId) => {
    const newRequest = {
      id: Date.now(),
      serviceId,
      farmerName: currentUser.name,
      farmerId: currentUser.id,
      date: new Date().toISOString().split('T')[0]
    };
    setServiceRequests(prevRequests => [...prevRequests, newRequest]);
  }, [currentUser]);

  const renderDashboard = () => {
    switch (dashboardType) {
      case 'farmOwner':
        return (
          <FarmerDashboard
            onBackClick={handleBackToDashboardSelection}
            services={services}
            requestService={requestService}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        );
      case 'labor':
        return <LaborDashboard onBackClick={handleBackToDashboardSelection} onLogout={handleLogout} />;
      case 'serviceProvider':
        return (
          <ServiceProviderDashboard
            onBackClick={handleBackToDashboardSelection}
            sendServices={sendServices}
            services={services}
            serviceRequests={serviceRequests.filter(req => services.some(s => s.id === req.serviceId))}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };
  const renderContent = () => {
    if (userState === 'animation') {
      return (
        <div className="flex items-center justify-center h-screen bg-[#1E212A]">
          <div className={`text-center transition-opacity duration-500 ${animationComplete ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src="/logo.png"
              alt="Farm Unity Logo"
              className="w-40 h-40 mx-auto mb-6 rounded-full animate-bounce"
            />
            <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
              FARM UNITY
            </h1>
            <p className="text-2xl text-white animate-pulse">
              India's Firstever Online Agricultural Open Mobility platform
            </p>
          </div>
        </div>
      );
    }

    if (userState === 'deviceSelection') {
      return (
        <div className="flex items-center justify-center h-screen bg-[#1E212A]">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Are you using a smartphone?</h2>
            <div className="space-x-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeviceSelection(true)}
              >
                Yes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeviceSelection(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (userState === 'desktopRedirect') {
      return (
        <div className="h-screen bg-white">
          {/* This is an empty page for non-smartphone users */}
        </div>
      );
    }

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
  };

  return renderContent();
}

export default App;