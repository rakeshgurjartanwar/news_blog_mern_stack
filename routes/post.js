let UploadedImage;
const express = require("express");
const PostsController = require("../controller/post");
const multer = require("multer");
const router = express.Router();
const path = require("path");

// POST THUMBNAIL UPLOADING CONTROLL
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    UploadedImage = uniqueSuffix + path.extname(file.originalname);
    cb(null, UploadedImage);
  },
});

const upload = multer({ storage: storage });

router.get("/", PostsController.all_post);
router.post(
  "/",
  upload.single("post_thumbnail"),
  (req, res, next) => {
    req.UploadedImage = UploadedImage;
    next();
  },
  PostsController.create_post
);
router.get("/:id", PostsController.single_post);
router.patch(
  "/:id",
  upload.single("post_thumbnail"),
  (req, res, next) => {
    req.UploadedImage = UploadedImage;
    next();
  },
  PostsController.update_post
);
router.delete("/:id", PostsController.delete_post);

module.exports = router;
