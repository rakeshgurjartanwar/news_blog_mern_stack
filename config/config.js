const mysql = require("mysql2");
const connection_pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "news_blog",
  password: "",
});
connection_pool.getConnection((err, connection) => {
  if (err) {
    console.log("database not connected");
  } else {
    console.log("database connected");
  }
  if (connection) {
    connection.release();
  }
});
module.exports = connection_pool;
