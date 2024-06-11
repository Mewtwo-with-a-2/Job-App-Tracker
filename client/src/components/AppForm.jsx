import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

// Display an overview of user information and actions
const AppForm = () => {
  return (
    <Container>
      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <TextField></TextField>
        <FormLabel>Position</FormLabel>
        <TextField></TextField>
        <FormLabel>Job Description</FormLabel>
        <TextField></TextField>
        <FormLabel>Location</FormLabel>
        <TextField></TextField>
        <FormLabel>Salary Range</FormLabel>
        <TextField></TextField>
        <FormLabel>Recruiter Contact</FormLabel>
        <TextField></TextField>
        <FormLabel>Date Applied</FormLabel>
        <TextField type='date'></TextField>
        <FormLabel>Resume</FormLabel>
      </FormControl>
    </Container>
  );
};

export default AppForm;
