const mysql = require("mysql2");
const config = require("../config/config.json");

//Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection, leaving them open instead of closing when you are done with them.This improves the latency of queries as you avoid all of the overhead that comes with establishing a new connection.Source: https://www.npmjs.com/package/mysql2#using-connection-pools
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

module.exports = pool.promise();