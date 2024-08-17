const PostModel = require("../models/post");

class PostsController {
  // ALL posts FROM MODELS
  static all_post(req, res) {
    try {
      PostModel.all_post((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get post data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // SINGLE posts FROM MODELS
  static single_post(req, res) {
    try {
      const { id } = req.params;
      PostModel.single_post(id, (err, data) => {
        if (err) {
          return res.status(500).json({ Message: "failed to get post data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // CREATE posts FROM MODELS
  static create_post(req, res) {
    try {
      const data = {
        post_title: req.body.post_title,
        post_thumbnail: req.UploadedImage,
        post_tags: req.body.post_tags,
        post_description: req.body.post_description,
        post_author: req.body.post_author,
        post_category: req.body.post_category,
        post_published: req.body.post_published,
        post_status: req.body.post_status,
      };
      PostModel.create_post(data, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "failed to posts create" });
        }
        res.status(201).json({
          message: "user posts create success",
          id: result.insertId,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // UPDATE posts FROM MODELS
  static update_post(req, res) {
    try {
      const data = {
        post_title: req.body.post_title,
        post_thumbnail:
          req.UploadedImage === undefined
            ? req.body.post_thumbnail
            : req.UploadedImage,
        post_tags: req.body.post_tags,
        post_description: req.body.post_description,
        post_author: req.body.post_author,
        post_category: req.body.post_category,
        post_published: req.body.post_published,
        post_status: req.body.post_status,
      };
      const { id } = req.params;
      PostModel.update_post(id, data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ Message: "failed to update use posts" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "user posts not found!" });
        }
        res.status(200).json({ message: "user posts update success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // DELETE posts FROM MODELS
  static delete_post(req, res) {
    try {
      const { id } = req.params;
      PostModel.delete_post(id, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to delete posts" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "fauser posts not found!" });
        }
        res.status(200).json({ message: "posts delete success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = PostsController;
