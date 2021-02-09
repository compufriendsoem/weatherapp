import React from 'react';
import './Style.css';
import Mynav from './components/nav';

function App() {
  return (
    <div className="container">
      <h1 className="text-center titles">Weather App</h1>
      <Mynav/>
    </div>
  );
}

export default App;
