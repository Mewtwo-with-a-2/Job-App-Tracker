import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// Display an overview of user information and actions
const Dashboard = () => {
  return (
    <Container>
      <Typography variant='h4' component='h1' gutterBottom>
        Dashboard
      </Typography>
      <List>
        <ListItem button component={Link} to='/upload'>
          <ListItemText primary='Upload Resume' />
        </ListItem>
        <ListItem button component={Link} to='/resumes'>
          <ListItemText primary='View Resumes' />
        </ListItem>
      </List>
    </Container>
  );
};

export default Dashboard;
