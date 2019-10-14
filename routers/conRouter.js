const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { conController } = require("../controllers");

router.get("/connectionList", conController.movcat);
router.get("/getMovieName", conController.getMovieName);
router.get("/getCategory", conController.getCategory);
router.post("/addConnection", conController.addConnection);
router.post("/deleteConnection", conController.deleteConnection);

module.exports = router;
