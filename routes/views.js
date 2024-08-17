const express = require("express");
const ViewsController = require("../controller/views");
const router = express.Router();
router.get("/", ViewsController.All_views);
router.post("/", ViewsController.create_views);
router.get("/:id", ViewsController.single_views);
router.patch("/:id", ViewsController.update_views);
router.delete("/:id", ViewsController.delete_views);
router.get("/find/:id", ViewsController.find_by_post_id);

module.exports = router;