import DB from '../models/databaseModel.js';
import Pool from 'pg';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
const resumeController = {};

// test
resumeController.testDBConnection = async () => {
  try {
    // Just to test the database connection, no need to execute any query
    console.log('Database connection successful');
    return { message: 'Database connection successful' };
  } catch (error) {
    throw error;
  }
};

resumeController.getResumes = async (req, res, next) => {
  try {
    const pullResumes = 'SELECT * FROM resumes';
    const result = await DB.query(pullResumes);
    console.log(result);
  } catch (err) {
    console.log('Error in getResumes function: ' + err);
  }
};

resumeController.insertResume = async (req, res, next) => {
  try {
    const newResume = 'Practice';
    const values = [newResume];
    const newInsert = 'INSERT INTO resumes (resume_name) VALUES($1)';

    const result = await DB.query(newInsert, values);
    console.log('Resume has been inserterted successfully');
  } catch (err) {
    console.log(err);
  }
};

resumeController.saveResume = async (req, res, next) => {
  const storage = multer.memoryStorage();
  // const upload = multer({ storage: storage }).single('file');

  upload(req, res, async (err) => {
    if (err) {
      console.log('Error uploading file: ' + err);
      return res.status(500).send('Error uploading file');
    }

    try {
      const file = req.file;

      if (!file) {
        console.log('No file uploaded');
        return res.status(400).send('No file uploaded');
      }

      const values = ['Joe_Cho_Google_resume', file.buffer];
      const newUploadQuery =
        'INSERT INTO resumes (filename, file_data) VALUES ($1, $2)';

      const result = await DB.query(newUploadQuery, values);
      return res.status(200).send('File has been saved to the database');
    } catch (err) {
      console.log('Error saving resume: ' + err);
      return res.status(500).send('Error saving resume');
    }
  });
};
export default resumeController;
