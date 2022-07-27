const router = require("express").Router();
const foodItem = require("../controllers/foodItem.controller"); 
const {MealController , GetMealById , UpdateMeal} = require("../controllers/meal.controller")
const { UpdateUser, UserController, GetUserById } = require("../controllers/user.controller");
// Food Item : 
router.post("/food", foodItem);
// Meal : 
router.post("/meal", MealController);
router.patch("/meal/:id", UpdateMeal);
router.get("/meal/:id", GetMealById);
// User : 
router.get("/user/:id" , GetUserById) ; ``
router.patch("/user/:id" , UpdateUser) ; 
router.post("/user" , UserController) ; 

module.exports = router;
