// import express from "express";
import { Router } from "express";
import resumeController from "../controllers/resumeController";
const router = Router();

router.post(
  "/upload",
  resumeController.upload.single("file"),
  resumeController.saveResume
);

// router.get('/', resumeController.getResumes), (req, res) => {
//   return res.status(200).json(res.locals.allResumes);
// };
// test
router.get('/', async (req, res) => {
  try {
    const resumes = await resumeController.getResumes(); 
    return res.status(200).json(resumes); 
  } catch (error) {
    console.error('Failed to fetch resumes:', error);
    return res.status(500).json({ error: 'Failed to fetch resumes' });
  }
});

// test
router.get('/testdb', async (req, res) => {
  try {
    const result = await resumeController.testDBConnection();
    res.status(200).json(result); 
  } catch (error) {
    console.error('Failed to test database connection:', error);
    res.status(500).json({ error: 'Failed to test database connection' });
  }
});

module.exports = resumeRouter;
