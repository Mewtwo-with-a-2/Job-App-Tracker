// import express from "express";
import { Router } from "express";
import resumeController from "../controllers/resumeController";
const router = Router();

router.post(
  "/upload",
  resumeController.upload.single("file"),
  resumeController.saveResume
);

router.get('/', resumeController.getResumes), (req, res) => {
  return res.status(200).json(res.locals.allResumes);
};



module.exports = resumeRouter;
