const db = require("../config/config");

class UserModel {
  ///CREATE NEW USER
  static get_user(callback) {
    const sql = "SELECT * FROM `users`";
    db.query(sql, callback);
  }
  ///GET SINGLE USER
  static single_user(id, callback) {
    const sql = "SELECT * FROM users WHERE user_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const data = result[0];
        callback(null, data);
      }
    });
  }
  ///CREATE NEW USER
  static create_user(data, callback) {
    const sql = "INSERT INTO `users` SET?";
    db.query(sql, data, callback);
  }
  ///UPDATE SINGLE USER
  static update_user(id, data, callback) {
    const sql = "UPDATE users SET? WHERE user_id=?";
    db.query(sql, [data, id], callback);
  }
  ///DELETE SINGLE USER
  static delete_user(id, callback) {
    const sql = `DELETE FROM users WHERE user_id=?`;
    db.query(sql, [id], callback);
  }
}
module.exports = UserModel;
