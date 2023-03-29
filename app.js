const express = require("express");
const empRouter = require("./Routes/empRoutes");
const pg = require("pg");
const dotenv = require("dotenv").config();

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(empRouter);

app.listen(port, () => {
  console.log("connected");
});
