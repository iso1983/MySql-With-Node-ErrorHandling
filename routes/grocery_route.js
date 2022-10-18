//This is where we specify the request paths
const express = require("express");
const groceryController = require("../controllers/grocery_controller");
const router = express.Router();

router.get("/", groceryController.getAllGroceries);
router.post("/", groceryController.addGrocery);

module.exports = router;
