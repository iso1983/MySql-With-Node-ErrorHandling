const db = require("../util/database");

// This is where the data is coming from
class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static fetchAllItems() {
    return db.execute("SELECT * FROM groceries");
  }

  addItem(){
    return db.execute(`INSERT INTO groceries(item)VALUES('${this.item}')`)
  }
}

module.exports = Grocery;
