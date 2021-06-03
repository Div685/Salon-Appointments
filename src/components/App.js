import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import Routes from './Routes';

const App = () => (
  <div className="App">
    <HttpsRedirect>
      <Routes />
    </HttpsRedirect>
  </div>
);

export default App;
