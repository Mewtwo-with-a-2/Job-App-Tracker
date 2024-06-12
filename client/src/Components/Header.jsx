// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import { styled } from '@mui/system';
// import logo from '../logo.svg';

// const LogoContainer = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   color: 'inherit',
// });

// const Header = ({ isLoggedIn }) => {
//   const location = useLocation();
//   const isLoginPage = location.pathname === '/';
//   const isRegisterPage = location.pathname === '/register';

//   const handleOAuthLogin = () => {
//     // Handle OAuth login process
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <LogoContainer as={Link} to="/">
//           <IconButton edge="start" color="inherit" aria-label="logo">
//             <img src={logo} alt="logo" style={{ width: '30px' }} />
//           </IconButton>
//           <Typography variant="h6" component="span" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}>
//             Your App Name
//           </Typography>
//         </LogoContainer>
//         <div style={{ marginLeft: 'auto' }}>
//           {isLoggedIn && (
//             <>
//               <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//               <Button color="inherit" component={Link} to="/resumes">Resumes</Button>
//             </>
//           )}
//           {!isLoggedIn && !isLoginPage && <Button color="inherit" component={Link} to="/">Login</Button>}
//           {!isLoggedIn && !isRegisterPage && <Button color="inherit" component={Link} to="/register">Register</Button>}
//           <Button color="inherit" onClick={handleOAuthLogin}>Login with OAuth</Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../logo.svg';

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
});

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isRegisterPage = location.pathname === '/register';
  const isDashboardPage = location.pathname === '/dashboard';

  const handleOAuthLogin = () => {
    // Handle OAuth login process
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <LogoContainer as={Link} to="/">
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={logo} alt="logo" style={{ width: '30px' }} />
          </IconButton>
          <Typography variant="h6" component="span" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}>
            Your App Name
          </Typography>
        </LogoContainer>
        <div style={{ marginLeft: 'auto' }}>
          {isDashboardPage ? (
            <>
              <Button color="inherit" component={Link} to="/resumeupload">Resume Upload</Button>
              <Button color="inherit" component={Link} to="/resumelist">Resume List</Button>
              <Button color="inherit" component={Link} to="/resumes/:id">Resume Details</Button>
            </>
          ) : (
            <>
              {!isLoggedIn && !isLoginPage && <Button color="inherit" component={Link} to="/">Login</Button>}
              {!isLoggedIn && !isRegisterPage && <Button color="inherit" component={Link} to="/register">Register</Button>}
              {!isLoggedIn && <Button color="inherit" onClick={handleOAuthLogin}>Login with OAuth</Button>}
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
