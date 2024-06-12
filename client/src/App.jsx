import { useState } from 'react';
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

// const App = () => {
//   // State to track user login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Set login state to true upon successful login
//     setIsLoggedIn(true);
//   };

//   const handleOAuthLogin = () => {
//     // Set login state to true upon successful OAuth login
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header isLoggedIn={isLoggedIn} />
//         <Container maxWidth="sm">
//           <Routes>
//             <Route path="/" element={<Login onLogin={handleLogin} onOAuthLogin={handleOAuthLogin} />} />
//             <Route path="/register" element={<Register />} />
//             {/* <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn}>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             /> */}
//             <Route path='/dashboard' element={<Dashboard />} /> 
//             <Route
//               path="/upload"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn}>
//                   <ResumeUpload />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/resumes"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn}>
//                   <ResumeList />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/resumes/:id"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn}>
//                   <ResumeDetails />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </Container>
//       </div>
//     </Router>
//   );
// };

export default App;
