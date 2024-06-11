import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// Display an overview of user information and actions
const AppForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [appliedDate, setAppliedDate] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    // log form data on change
    console.log({ companyName, positionName, appliedDate });
  }, [companyName, positionName, appliedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic

    const data = {
      companyName,
      positionName,
      appliedDate: appliedDate ? appliedDate.toISOString() : null,
    };

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error in submitting new application');
      }

      const result = await response.json();
      setMessage(`Success: ${result.message}`);
    } catch (err) {
      console.error('Form submission failed:', err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h1'>''</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            label='Company Name'
            variant='outlined'
            type='company'
            fullWidth
            margin='normal'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            label='Job Position'
            variant='outlined'
            type='job position'
            fullWidth
            margin='normal'
            value={positionName}
            onChange={(e) => setPositionName(e.target.value)}
          />
          <TextField
            type='date'
            variant='outlined'
            fullWidth
            margin='normal'
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
          />

          <Button type='submit' variant='contained' color='primary' fullWidth>
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default AppForm;
