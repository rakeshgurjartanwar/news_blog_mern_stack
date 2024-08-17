const db = require("../config/config");

class CategoryModel {
  // all category model
  static allcategory(callback) {
    const sql = "SELECT * FROM `category`";
    db.query(sql, callback);
  }
  // single category model
  static single_category(id, callback) {
    const sql = "SELECT * FROM category WHERE category_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const data = result[0];
        callback(null, data);
      }
    });
  }
  // create new category
  static create_category(data, callback) {
    const sql = "INSERT INTO `category` SET?";
    db.query(sql, data, callback);
  }
  // update category
  static update_catgory(id, data, callback) {
    const sql = "UPDATE category SET? WHERE category_id=?";
    db.query(sql, [data, id], callback);
  }
  // delete category
  static delate_category(id, callback) {
    const sql = "DELETE FROM category WHERE category_id=?";
    db.query(sql, [id], callback);
  }

  // all
  // single
  // create
  // update
  // delete
}
module.exports = CategoryModel;
