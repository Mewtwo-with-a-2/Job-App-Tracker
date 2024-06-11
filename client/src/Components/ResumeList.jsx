import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  // Fetch resumes from the API when the component mounts
  useEffect(() => {
    const getResumes = async () => {
      try {
        const response = await fetchResumes();
        setResumes(response.data);
      } catch (error) {
        console.error('Failed to fetch resumes:', error);
      }
    };

    getResumes();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Resume List
      </Typography>
      <List>
        {resumes.map((resume) => (
          <ListItem button component={Link} to={`/resumes/${resume.id}`} key={resume.id}>
            <ListItemText primary={`${resume.jobTitle} at ${resume.company}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ResumeList;
