import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography } from '@mui/material';

// Manage form inputs and file selection
const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('jobTitle', jobTitle);
      formData.append('company', company);

      try {
        // Call API to upload resume with form data
        await uploadResume(formData);
        navigate('/resumes');
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Resume
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          fullWidth
          margin="normal"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <TextField
          label="Company"
          fullWidth
          margin="normal"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          margin="normal"
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Upload
        </Button>
      </form>
    </Container>
  );
};

export default ResumeUpload;
