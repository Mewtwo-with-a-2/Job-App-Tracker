import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fetch resumes from the API when the component mounts
  useEffect(() => {
    const getResumes = async () => {
      try {
        const response = await fetch('/resumes');
        if (response.ok) {
          const data = await response.json();
          setResumes(data); 
          setLoading(false); 
        } else {
          console.error('Failed to fetch resumes:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch resumes:', error);
        setLoading(false); 
      }
    };

    getResumes();
  }, []);

  // // test
  // useEffect(() => {
  //   const testDBConnection = async () => {
  //     try {
  //       const response = await fetch('/resumes/testdb');
  //       if (response.ok) {
  //         const responseData = await response.text(); 
  //         try {
  //           const data = JSON.parse(responseData); 
  //           console.log('Database connection successful:', data);
  //         } catch (error) {
  //           console.error('Failed to parse JSON data:', error);
  //         }
  //       } else {
  //         const errorText = await response.text(); 
  //         console.error('Failed to test database connection:', errorText);
  //       }
  //     } catch (error) {
  //       console.error('Failed to test database connection:', error);
  //     }
  //   };
  
  //   testDBConnection();
  // }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Resume List
      </Typography>
      {resumes.length === 0 ? ( // Check if resumes array is empty
        <Typography variant="body1">No resumes found.</Typography>
      ) : (
        <List>
          {resumes.map((resume) => (
            <ListItem button component={Link} to={`/resumes/${resume.id}`} key={resume.id}>
              <ListItemText primary={`${resume.jobTitle} at ${resume.company}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );

};

export default ResumeList;
