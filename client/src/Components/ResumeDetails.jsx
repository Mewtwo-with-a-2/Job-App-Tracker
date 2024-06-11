import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const ResumeDetails = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  // Fetch resume details from the API when the component mounts or ID changes
  useEffect(() => {
    const getResume = async () => {
      try {
        const response = await fetchResume(id);
        setResume(response.data);
      } catch (error) {
        console.error('Failed to fetch resume:', error);
      }
    };

    getResume();
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Resume Details
      </Typography>
      {resume && (
        <div>
          <Typography variant="h6">Job Title: {resume.jobTitle}</Typography>
          <Typography variant="h6">Company: {resume.company}</Typography>
          <Typography variant="body1">Submission Date: {resume.submissionDate}</Typography>
          <Typography variant="body1">Description: {resume.description}</Typography>
          <Button variant="contained" color="primary" href={resume.fileUrl} download>
            Download Resume
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ResumeDetails;
