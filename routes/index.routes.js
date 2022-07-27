const router = require("express").Router();
const foodItem = require("../controllers/foodItem.controller");
const MealController = require("../controllers/meal.controller") ; 
router.post("/food", foodItem);
router.post("/meal", MealController);

module.exports = router;
