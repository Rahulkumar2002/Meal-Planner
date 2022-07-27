const router = require("express").Router();
const foodItem = require("../controllers/foodItem.controller");

router.post("/food", foodItem);

module.exports = router;
