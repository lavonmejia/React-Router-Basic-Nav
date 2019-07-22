import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to ="/About.js">Home</Link>
        </div>
        <div>
          <Link to ="/About.js">About</Link>
        </div>
        <div>
          <Link to ="/About.js">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
