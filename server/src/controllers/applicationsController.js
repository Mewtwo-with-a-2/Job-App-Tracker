import DB from "../models/databaseModel.js";
const applicationsController = {};

applicationsController. getAllApplications = async (req, res, next) => {
    try {
      const allAppsQuery = 'SELECT * FROM applications';
      const allApps = await DB.query(allAppsQuery);
      console.log('working!!!!');
      res.locals.allApps = allApps.rows;
      console.log(res.locals.allApps);
      return next();
    } catch(error) {
        return next({
            log: `Error in applicationsController.getAllApplications: ${error}`,
            status: 500,
            message: { err: 'Error fetching all applications data' },
        });
    }
};


applicationsController. addNewApplication = async (req, res, next) => {
    const {
        company_name,
        position,
        job_description,
        location,
        salary,
        recruiter,
        date_applied,
        resume_name, 
        status,
        platform,
        notes,
    } = req.body;

    try {
        const text = `
        INSERT INTO application (
            company_name,
            position,
            job_description,
            location,
            salary,
            recruiter,
            date_applied,
            resume_name, 
            status,
            platform,
            notes 
        )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *
            `;
        const params = [
            company_name,
            position,
            job_description,
            location,
            salary,
            recruiter,
            date_applied,
            resume_name, 
            status,
            platform,
            notes
        ];
        const newApplication = await DB.query(text, params);
        console.log('new application is here');
        res.locals.newApplication = newApplication.rows[0];
        return next();
    } catch(error) {
        return next({
            log: `Error in applicationsController.addNewApplication: ${error}`,
            status: 500,
            message: { err: 'Error adding new applications' },
        });
    }
};



export default applicationsController;