
// // src/App.js
// import React from 'react';
// import Dashboard from './components/Dashboard';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Farm Unity</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;