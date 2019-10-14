const { sqlDB } = require("../database");
module.exports = {
  getCate: (req, res) => {
    var sql = `SELECT * FROM categories`;
    sqlDB.query(sql, (err, results) => {
      if (err) return res.status(500).send("GAGAL CUK");

      res.status(200).send(results);
    });
  },
  updateCate: (req, res) => {
    var sql = `UPDATE categories SET ? WHERE id = ${req.params.id}`;
    sqlDB.query(sql, req.body, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
    console.log(req.params.id);
    console.log(req.body);
  },
  postCate: (req, res) => {
    var sql = `INSERT INTO categories set ?`;
    sqlDB.query(sql, req.body, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
  },
  deleteCate: (req, res) => {
    var sql = `DELETE FROM movie WHERE id = ${req.params.id}`;
    sqlDB.query(sql, (err, results) => {
      if (err) return res.status(500).send("gagal cuk");

      res.status(200).send("berhasil");
    });
  }
};
