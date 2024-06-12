import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import resumeRouter from './routes/resumes.js';
import accountsRouter from './routes/accounts.js';
import applicationsRouter from './routes/applications.js';
import cors from 'cors';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.send('The server is running!');
});

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }, // set to true if using https
//   })
// );

app.use('/accounts', accountsRouter);
app.use('/applications', applicationsRouter);
app.use('/resumes', resumeRouter);

//Global error handler
app.use((err, req, res, next) => {
  // test
  console.log('Request received:', req.method, req.url);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// 404 error
app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
