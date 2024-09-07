import React, { useState, useCallback } from 'react';
import LoginForm from './components/adharVerify/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import DashboardSelection from './components/DashboardSelection';
import FarmerDashboard from './components/FarmerDashboard/Dashboard';
import LaborDashboard from './components/FarmerDashboard/LabourDashboard';
import ServiceProviderDashboard from './components/FarmerDashboard/ServiceProviderDashboard';

function App() {
  const [userState, setUserState] = useState('initial');
  const [dashboardType, setDashboardType] = useState(null);
  const [services, setServices] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleNewUserSignup = () => {
    setUserState('registering');
  };

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
          />
        );
      case 'labor':
        return <LaborDashboard onBackClick={handleBackToDashboardSelection} />;
      case 'serviceProvider':
        return (
          <ServiceProviderDashboard
            onBackClick={handleBackToDashboardSelection}
            updateServices={updateServices}
            serviceRequests={serviceRequests.filter(req => req.serviceId in services.map(s => s.id))}
            currentUser={currentUser}
          />
        );
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