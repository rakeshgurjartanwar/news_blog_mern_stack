const express = require("express");
const UserController = require("../controller/user");
const router = express.Router();
router.get("/", UserController.get_all_user);
router.get("/:id", UserController.get_single_user);
router.delete("/:id", UserController.delete_user);
router.post("/", UserController.create_user);
router.patch("/:id", UserController.update_user);

module.exports = router;
