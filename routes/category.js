const express = require("express");
const CategoryController = require("../controller/category");
const router = express.Router();
router.get("/", CategoryController.allcategory);
router.post("/", CategoryController.create_category);
router.get("/:id", CategoryController.single_category);
router.patch("/:id", CategoryController.update_category);
router.delete("/:id", CategoryController.delate_category);

module.exports = router;
