// This is where we fetch all the data
const Grocery = require("../models/grocery_model");

exports.getAllGroceries = async (req, res, next) => {
  try {
    const [allGroceries] = await Grocery.fetchAllItems();
    res.status(200).json(allGroceries);
  } catch (err) {
    next(err);
  }
};

exports.addGrocery = async (req, res, next) => {
  //this is just a demonstration,never use user input without filtering
  const { item } = req.body;
  const grocery = new Grocery(null, item);
  const newItem = await grocery.addItem();
};
