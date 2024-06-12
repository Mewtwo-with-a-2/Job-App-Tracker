import { Router } from "express";
import accountsController from "../controllers/accountsController"; 
//import isAuthenticated from "../controllers/authController";

const accountsRouter = Router();

// Login route
accountsRouter.post('/login', accountsController.verifyUser, (req,res) => {
    res.status(200).json({
        message: 'Logged in successfully',
        user: res.locals.user,
    });
});


// SignUp route
accountsRouter.post('/register', accountsController.addNewUser, (req, res) => {
    res.status(200).json({
        message: 'User successfully registered',
        user: res.locals.newUser,
    });
});


// Fetch applications for logged-in user
accountsRouter.get('/applications', accountsController.verifyUser, accountsController.getUserApplications, (req, res) => {
    res.status(200).json(res.locals.applications);
});


// Fetch resumes for logged-in user
accountsRouter.get('/resumes', accountsController.verifyUser, accountsController.getUserResumes, (req, res) => {
    res.status(200).json(res.locals.resumes);
});

export default accountsRouter;