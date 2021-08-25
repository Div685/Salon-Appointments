import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import Routes from './Routes';
// Import style
import '../assets/css/style.css';

const App = () => (
  <div className="App">
    <HttpsRedirect>
      <Routes />
    </HttpsRedirect>
  </div>
);

export default App;
