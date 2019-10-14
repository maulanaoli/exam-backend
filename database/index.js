const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "maulana",
  password: "archangels",
  database: "movie_purwadhika",
  timezon: "utc"
});
module.exports = {
  sqlDB: db
};
