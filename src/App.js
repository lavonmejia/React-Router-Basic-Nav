import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch, Link } from 'react-router-dom';



const App = () => {
  return (
  <div>
    <Navigation />
<Switch>
     <Route exact path="/" component={Home} />
     <Route path=".components/about/" component={About} />
     <Route path=".components/contact/" component={Contact} />
</Switch>
   </div>
);
  }   

export default App;


