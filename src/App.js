import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route parth ='signup' component={ Contact } />
    </Switch>
    </>
  );
}

export default App;
