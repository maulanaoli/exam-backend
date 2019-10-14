const { sqlDB } = require("../database");

module.exports = {
  getMovie: (req, res) => {
    var sql = `SELECT * FROM movie`;
    sqlDB.query(sql, (err, results) => {
      if (err) return res.status(500).send("GAGAL CUK");

      res.status(200).send(results);
    });
  },
  updateMovie: (req, res) => {
    var sql = `UPDATE movie SET ? WHERE id = ${req.params.id}`;
    sqlDB.query(sql, req.body, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
    console.log(req.params.id);
    console.log(req.body);
  },
  postMovie: (req, res) => {
    var sql = `INSERT INTO movie set ?`;
    sqlDB.query(sql, req.body, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
  },

  deleteMovie: (req, res) => {
    var sql = `DELETE FROM movie WHERE id = ${req.params.id}`;
    sqlDB.query(sql, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
  }
};
