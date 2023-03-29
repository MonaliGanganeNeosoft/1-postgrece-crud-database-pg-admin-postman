const { Pool } = require("pg");
const credentials = {
  user: "postgres",
  host: "localhost",
  database: "nodedemopostgres",
  password: "Monali@123",
  port: 5432,
};
const connectDb = async (querystringname) => {
  try {
    const pool = new Pool(credentials);
    // const client = await pool.connect();
    // pool.connect((err, client, release), () => {
    //   console.log("client acquired");
    // });
    const res = await pool.query(querystringname);
    console.log(res.rows);
    // const res = await pool.query("SELECT * FROM emp");
    // console.log(res);
    await pool.end();
    return res.rows;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
module.exports = {
  connectDb,
};
