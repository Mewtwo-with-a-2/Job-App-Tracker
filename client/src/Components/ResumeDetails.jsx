import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const ResumeDetails = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [relatedResumes, setRelatedResumes] = useState([]);
  const navigate = useNavigate();

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

    const getRelatedResumes = async () => {
      try {
        const response = await fetchResumes();
        // Filter out the current resume and set the related resumes
        const related = response.data.filter(res => res.id !== id);
        setRelatedResumes(related);
      } catch (error) {
        console.error('Failed to fetch related resumes:', error);
      }
    };

    getResume();
    getRelatedResumes();
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
      <Button variant="outlined" onClick={() => navigate('/resumes')} style={{ marginTop: '20px' }}>
        Back to Resumes
      </Button>
      <Typography variant="h5" component="h2" style={{ marginTop: '20px' }}>
        Related Resumes
      </Typography>
      <List>
        {relatedResumes.map((relatedResume) => (
          <ListItem button component={Link} to={`/resumes/${relatedResume.id}`} key={relatedResume.id}>
            <ListItemText primary={`${relatedResume.jobTitle} at ${relatedResume.company}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ResumeDetails;
