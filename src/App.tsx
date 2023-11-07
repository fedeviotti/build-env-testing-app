import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log("REACT_APP_ENVIRONMENT", process.env.REACT_APP_ENVIRONMENT);
  // Solzuione 1
  // SCRIPT: "build": "craco build",
  // CLI COMMAND: REACT_APP_ENVIRONMENT=test npm run build

  // Solzuione 2
  // SCRIPT: "build": "REACT_APP_ENVIRONMENT=$npm_config_environment craco build",
  // CLI COMMAND: npm run build --environment=test
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
