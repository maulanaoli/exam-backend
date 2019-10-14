const express = require("express");
const router = express.Router();
const { catController } = require("../controllers/");

router.get("/getCategory", catController.getCate);
router.post("/postCategory", catController.postCate);
router.post("/updateCategory,", catController.updateCate);
router.delete("/deleteCategory/:id", catController.deleteCate);
module.exports = router;
