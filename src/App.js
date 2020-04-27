import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

import Router from './router/Router';

function initializeReactGA() {
	ReactGA.initialize('G-S9DDPEFWEN');
	ReactGA.pageview('/');
}
function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
