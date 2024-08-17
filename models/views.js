const db = require("../config/config");

class Viewmodel {
  static all_view(callback) {
    const sql = "SELECT * FROM `views`";
    db.query(sql, callback);
  }
  // single view data is here
  static single_view(id, callback) {
    const sql = "SELECT * FROM views WHERE view_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const data = result[0];
        callback(null, data);
      }
    });
  }
  //find by post id
  static find_by_post_id(id, callback) {
    const sql = `SELECT * FROM views WHERE post_id=?`;
    db.query(sql, [id], callback);
  }
  // create new view
  static create_view(data, callback) {
    const sql = "INSERT INTO `views` SET?";
    db.query(sql, data, callback);
  }

  // update view new viewer
  static update_view(data, id, callback) {
    const sql = "UPDATE views SET? WHERE views_id=?";
    db.query(sql, [data, id], callback);
  }
  // delete view data
  static delete_view(id, callback) {
    const sql = `DELETE FROM views WHERE views_id=?`;
    db.query(sql, [id], callback);
  }
}
module.exports = Viewmodel;
