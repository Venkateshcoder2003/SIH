


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


import React, { useState } from 'react';
import LoginForm from './components/adharVerify/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/FarmerDashboard/Dashboard'

function App() {
  const [userState, setUserState] = useState('initial'); // 'initial', 'registering', 'loggedIn'

  const handleNewUserSignup = () => {
    setUserState('registering');
  };

  const handleUserAuthenticated = () => {
    setUserState('loggedIn');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Farm Unity</h1>
        {userState === 'initial' && (
          <LoginForm
            onNewUserSignup={handleNewUserSignup}
            onExistingUserLogin={handleUserAuthenticated}
          />
        )}
        {userState === 'registering' && (
          <RegistrationForm
            onRegistrationComplete={handleUserAuthenticated}
          />
        )}
        {userState === 'loggedIn' && <Dashboard />}
      </div>
    </div>
  );
}

export default App;