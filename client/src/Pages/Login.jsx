import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Container, Typography, Grid, Paper } from '@mui/material';

const Login = ({ onLogin, onOAuthLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      // Call onLogin to update login state
      onLogin();
      // Navigate to the dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Login
          </Button>
          <Grid container justifyContent="flex-end" style={{ marginTop: 10 }}>
            <Grid item>
              <Link to="/register" variant="body2">
                Don't have an account? Register
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
