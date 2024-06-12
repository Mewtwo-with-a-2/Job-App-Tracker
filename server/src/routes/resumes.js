import express from "express";
import resumeController from "../controllers/resumeController";
const router = express.router();

router.post(
  "/upload",
  resumeController.upload.single("file"),
  resumeController.saveResume
);

module.exports = resumeRouter;
