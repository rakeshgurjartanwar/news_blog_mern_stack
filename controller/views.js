const Viewmodel = require("../models/views");

class ViewsController {
  // ALL VIEWS FROM MODELS
  static All_views(req, res) {
    try {
      Viewmodel.all_view((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get view data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // SINGLE VIEWS FROM MODELS
  static single_views(req, res) {
    try {
      const { id } = req.params;
      Viewmodel.single_view(id, (err, data) => {
        if (err) {
          return res.status(500).json({ Message: "failed to get views data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // FIND BY POST ID
  static find_by_post_id(req, res) {
    try {
      const { id } = req.params;
      Viewmodel.find_by_post_id(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to find post views" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // CREATE VIEWS FROM MODELS
  static create_views(req, res) {
    try {
      const data = {
        post_id: req.body.post_id,
        view_count: req.body.view_count,
      };
      Viewmodel.create_view(data, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "failed to views create" });
        }
        res.status(201).json({
          message: "user views create success",
          id: result.insertId,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // UPDATE VIEWS FROM MODELS
  static update_views(req, res) {
    try {
      const data = {
        post_id: req.body.post_id,
        view_count: req.body.view_count,
      };
      const { id } = req.params;
      Viewmodel.update_view(id, data, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to update use view" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "user view not found!" });
        }
        res.status(200).json({ message: "user view update success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // DELETE VIEWS FROM MODELS
  static delete_views(req, res) {
    try {
      const { id } = req.params;
      Viewmodel.delete_view(id, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to delete views" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "fauser viewer not found!" });
        }
        res.status(200).json({ message: "viewer delete success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = ViewsController;
