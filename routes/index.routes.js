const router = require("express").Router();
const { foodItem, getAll } = require("../controllers/foodItem.controller");
const {
  MealController,
  GetMealById,
  UpdateMeal,
  getAllMeal,
} = require("../controllers/meal.controller");
const MealGen = require("../controllers/mealGen.controller");
const {
  UpdateUser,
  UserController,
  GetUserById,
  getAllUsers,
} = require("../controllers/user.controller");
// Food Item :
router.post("/food", foodItem);
router.get("/food", getAll);
// Meal :
router.get("/meal", getAllMeal);
router.post("/meal", MealController);
router.patch("/meal/:id", UpdateMeal);
router.get("/meal/:id", GetMealById);
// User :
router.get("/user/:id", GetUserById);
router.get("/user", getAllUsers);
router.patch("/user/:id", UpdateUser);
router.post("/user", UserController);
// Meal Generator :
router.get("/mealgen", MealGen);

module.exports = router;
