import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

// JC added - discuss with team?
const { DBUSER, HOST, DB, PASSWORD, PORT } = process.env;

export const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const query = (text, params, callback) => {
  console.log("executed query", text);
  return pool.query(text, params, callback);
};

export default { query };
