// import express from "express";
import { Router } from 'express';
import resumeController from '../controllers/resumeController.js';
const router = Router();

const resumesRouter = () => {
  router.post(
    '/upload',
    // resumeController.upload.single('file'),
    resumeController.saveResume
  );

  router.get('/', resumeController.getResumes),
    (req, res) => {
      return res.status(200).json(res.locals.allResumes);
    };
};

export default resumesRouter;
