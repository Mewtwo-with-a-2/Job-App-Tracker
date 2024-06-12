import DB from "../models/databaseModel.js";
const accountsController = {};
//import bcrypt from 'bcrypt';


// Verify User
accountsController. verifyUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        // Query the database to find the user by username
        const userQuery = 'SELECT * FROM accounts WHERE username = $1';
        const userResult = await DB.query(userQuery, [username]);

        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
          }

        const userData = userResult.rows[0];
        if (password === userData.password) {
            //   req.session.user = userData; // Save user data to session
              res.locals.user = userData.username;
              res.locals.user_id = userData.user_id; // Adding user_id to locals
          } else {
              return res.status(400).json({ message: 'Invalid username or password' });
          }
        return next();
      } catch (error) {
        console.error(error);
        return next({
            log: `Error in accountsController.verifyUser: ${error}`,
            status: 500,
            message: { err: 'Error verifyingUser' },
        });
      }
    };


    // Add New User
accountsController. addNewUser = async (req, res, next) => {
    const {
        username, 
        password,
    } = req.body;

    try {
        const text = `
        INSERT INTO accounts (
        username, 
        password,
        )
        VALUES ($1, $2)
        RETURNING *
        `;
        const params = [
            username, 
            password,
        ];
        const newUser = await DB.query(text, params);
        console.log('new user is here');
        res.locals.newUser = newUser.rows[0];
        return next();
    } catch(error) {
        return next({
            log: `Error in accountsController.addNewUser: ${error}`,
            status: 500,
            message: { err: 'Error adding new user' },
        });
    }
};


// Get User Applications
accountsController.getUserApplications = async (req, res, next) => {
    //const userId = req.session.user.user_id;
    const userId = res.locals.user_id;

    try {
        const applicationsQuery = 'SELECT * FROM applications WHERE user_id = $1';
        const applicationsResult = await DB.query(applicationsQuery, [userId]);

        res.locals.applications = applicationsResult.rows;
        return next();
    } catch (error) {
        return next({
            log: `Error in accountsController.getUserApplications: ${error}`,
            status: 500,
            message: { err: 'Error fetching user applications' },
        });
    }
};

// Get User Resumes
accountsController.getUserResumes = async (req, res, next) => {
    //const userId = req.session.user.user_id;
    const userId = res.locals.user_id;

    try {
        const resumesQuery = 'SELECT * FROM resumes WHERE user_id = $1';
        const resumesResult = await DB.query(resumesQuery, [userId]);

        res.locals.resumes = resumesResult.rows;
        return next();
    } catch (error) {
        return next({
            log: `Error in accountsController.getUserResumes: ${error}`,
            status: 500,
            message: { err: 'Error fetching user resumes' },
        });
    }
};


export default accountsController;
