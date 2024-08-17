const UserModel = require("../models/user");

class UserController {
  static get_all_user(req, res) {
    try {
      UserModel.get_user((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get user data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  static get_single_user(req, res) {
    try {
      const { id } = req.params;
      UserModel.single_user(id, (err, data) => {
        if (err) {
          return res.status(500).json({ Message: "failed to get user data" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  static delete_user(req, res) {
    try {
      const { id } = req.params;
      UserModel.delete_user(id, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to delete user" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "fauser not found!" });
        }
        res.status(200).json({ message: "user delete success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  static create_user(req, res) {
    try {
      const data = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_type: req.body.user_type,
        user_status: req.body.user_status,
      };
      UserModel.create_user(data, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "failed to create user" });
        }
        res
          .status(201)
          .json({ message: "user create success", id: result.insertId });
      });
    } catch (error) {
      console.log(error);
    }
  }
  static update_user(req, res) {
    try {
      const data = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_type: req.body.user_type,
        user_status: req.body.user_status,
      };
      const { id } = req.params;
      UserModel.update_user(id, data, (err, result) => {
        if (err) {
          return res.status(500).json({ Message: "failed to update user" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ Message: "user not found!" });
        }
        res.status(200).json({ message: "user update success!" });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = UserController;
