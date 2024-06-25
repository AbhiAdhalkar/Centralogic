// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Logout from './Components/Logout';
import './App.css'

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
