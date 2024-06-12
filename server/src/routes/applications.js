import { Router } from 'express';
import applicationsController from '../controllers/applicationsController.js';

const applicationsRouter = Router();

// get all the applications from database
applicationsRouter.get(
  '/',
  applicationsController.getAllApplications,
  (req, res) => {
    return res.status(200).json(res.locals.allApps);
  }
);

//store the new application
applicationsRouter.post(
  '/',
  applicationsController.addNewApplication,
  (req, res) => {
    return res.status(200).json(res.locals.newApplication);
  }
);

export default applicationsRouter;
