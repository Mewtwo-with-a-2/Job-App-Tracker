import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ResumeUpload from './Components/ResumeUpload';
import ResumeList from './Components/ResumeList';
import ResumeDetails from './Components/ResumeDetails';

// Define the main structure and routing of the application
const App = () => {
  // Define routes for different components 
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/resumes" element={<ResumeList />} />
        <Route path="/resumes/:id" element={<ResumeDetails />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
