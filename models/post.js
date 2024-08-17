const db = require("../config/config");

class PostModel {
  static all_post(callback) {
    const sql = "SELECT * FROM `posts`";
    db.query(sql, callback);
  }
  static single_post(id, callback) {
    const sql = "SELECT * FROM posts WHERE posts_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const data = result[0];
        callback(null, data);
      }
    });
  }
  static create_post(data, callback) {
    const sql = "INSERT INTO `posts` SET?";
    db.query(sql, data, callback);
  }
  static update_post(data, id, callback) {
    const sql = "UPDATE posts SET? WHERE posts_id=?";
    db.query(sql, [data, id], callback);
  }
  static delete_post(id, callback) {
    const sql = `DELETE FROM posts WHERE posts_id=?`;
    db.query(sql, [id], callback);
  }
}
module.exports = PostModel;
