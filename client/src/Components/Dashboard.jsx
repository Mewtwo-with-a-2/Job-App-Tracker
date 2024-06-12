import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  Paper,
  MenuItem,
  InputAdornment,
  Box 
} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField label="Company Name" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Position" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Job Description" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Location" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Salary"
                    type="number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    fullWidth
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Date Applied"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Recruiter" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    select
                    label="Status"
                    fullWidth
                  >
                    <MenuItem value="Applied">Applied</MenuItem>
                    <MenuItem value="Behavioral Interview">Behavioral Interview</MenuItem>
                    <MenuItem value="Technical Interview #1">Technical Interview #1</MenuItem>
                    <MenuItem value="Technical Interview #2">Technical Interview #2</MenuItem>
                    <MenuItem value="Technical Interview #3">Technical Interview #3</MenuItem>
                    <MenuItem value="Final Round">Final Round</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </TextField>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    select
                    label="Platform"
                    fullWidth
                  >
                    <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                    <MenuItem value="Indeed">Indeed</MenuItem>
                    <MenuItem value="Company Website">Company Website</MenuItem>
                    <MenuItem value="Referral">Referral</MenuItem>
                  </TextField>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Notes" fullWidth multiline />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"> 
                  <Box textAlign="center">
                    <Button variant="contained" component="label">
                      Upload Resume
                      <input type="file" hidden accept=".pdf,.doc,.docx"/>
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard;


