import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Register/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/adminlogin" element={<AdminLogin/>}/>
  <Route exact path="/dashboard" element={<Dashboard/>}/>




  </Routes>
)
}

export default App