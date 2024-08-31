// import React, { useState } from 'react';
// import InitialAuthPage from './components/adharVerify/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

// function App() {
//   const [userState, setUserState] = useState('initial'); // 'initial', 'loggedIn'

//   const handleRegistrationComplete = () => {
//     setUserState('loggedIn');
//   };

//   const handleLoginComplete = () => {
//     setUserState('loggedIn');
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Farm Unity</h1>
//         {userState === 'initial' && (
//           <InitialAuthPage
//             onRegistrationComplete={handleRegistrationComplete}
//             onLoginComplete={handleLoginComplete}
//           />
//         )}
//         {userState === 'loggedIn' && <RegistrationForm />}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import LoginForm from './components/adharVerify/LoginForm'
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [userState, setUserState] = useState('initial'); // 'initial', 'loggedIn'

  const handleRegistrationComplete = () => {
    setUserState('loggedIn');
  };

  const handleLoginComplete = () => {
    setUserState('loggedIn');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Farm Unity</h1>
        {userState === 'initial' && (
          <LoginForm
            onRegistrationComplete={handleRegistrationComplete}
            onLoginComplete={handleLoginComplete}
          />
        )}
        {userState === 'loggedIn' && <RegistrationForm />}
      </div>
    </div>
  );
}

export default App;