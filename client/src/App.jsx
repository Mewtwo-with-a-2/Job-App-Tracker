import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Components/Dashboard';
import ResumeUpload from './Components/ResumeUpload';
import ResumeList from './Components/ResumeList';
import ResumeDetails from './Components/ResumeDetails';
import Header from './Components/Header';
import PrivateRoute from './Pages/PrivateRoute';

import { Container } from '@mui/material';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleOAuthLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} onOAuthLogin={handleOAuthLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<ResumeUpload />} />
            <Route path="/resumes" element={<ResumeList />} />
            <Route path="/resumes/:id" element={<ResumeDetails />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
