const Categorymodel = require("../models/category");

class CategoryController {
  // all user category type
  static allcategory(req, res) {
    try {
      Categorymodel.allcategory((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get category data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // get single category start
  static single_category(req, res) {
    try {
      const { id } = req.params;
      Categorymodel.single_category(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ Message: "failed to get category data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // create new category
  static create_category(req, res) {
    try {
      const data = {
        name: req.body.name,
        is_sub: req.body.is_sub,
        category_status: req.body.status,
      };
      Categorymodel.create_category(data, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "failed to create category" });
        }
        res.status(201).json({
          message: "user category create success",
          id: result.insertId,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // update category 
  static update_category(req, res) {
    try {
      const data = {
        name: req.body.name,
        is_sub: req.body.is_sub,
        category_status: req.body.status,
      };
      const { id } = req.params;
      Categorymodel.update_catgory(id, data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ Message: "failed to update use category" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "user categor not found!" });
        }
        res.status(200).json({ message: "user category update success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  // delete category
  static delate_category(req, res) {
    try {
      const { id } = req.params;
      Categorymodel.delate_category(id, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to delete category" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "fauser not found!" });
        }
        res.status(200).json({ message: "category delete success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = CategoryController;
