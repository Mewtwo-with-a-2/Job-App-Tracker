import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import ResumeUpload from './Components/ResumeUpload';
import ResumeList from './Components/ResumeList';
import ResumeDetails from './Components/ResumeDetails';
import AppPage from './Components/AppPage';

// Define the main structure and routing of the application
const App = () => {
  // Define routes for different components
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/upload' element={<ResumeUpload />} />
          <Route path='/resumes' element={<ResumeList />} />
          <Route path='/resumes/:id' element={<ResumeDetails />} />
          <Route path='/create' element={<AppPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
