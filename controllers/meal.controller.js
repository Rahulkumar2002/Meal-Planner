const mealModel = require("../models/meal.model");

const MealController = async (req, res, next) => {
  try {
    let meal = new mealModel({
      category: req.body.category,
      name: req.body.name,
      mealItem: req.body.mealItem,
    });

    meal = await meal.save();
    const populatedMeal = await mealModel.find({}).populate("mealItem");
    res.status(201).json(populatedMeal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = MealController;
