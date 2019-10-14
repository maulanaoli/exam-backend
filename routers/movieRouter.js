const express = require("express");
const router = express.Router();
const { movieController } = require("../controllers");

router.get("/getMovie", movieController.getMovie);
router.post(`/postMovie`, movieController.postMovie);
router.post("/updateMovie/:id", movieController.updateMovie);
router.delete(`/deleteMovie/:id`, movieController.deleteMovie);
module.exports = router;
