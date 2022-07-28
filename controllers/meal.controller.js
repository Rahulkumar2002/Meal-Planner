const Meal = require("../models/Meal.model");

const getAllMeal = async (req, res) => {
  try {
    const meal = await Meal.find({}).populate("mealItem");
    res.status(200).json(meal);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetMealById = async (req, res, next) => {
  try {
    const meal = await Meal.findById(req.params.id).populate("mealItem");
    if (!meal) {
      return res.status(404).json("Meal not found invalid id!");
    }

    res.status(200).json(meal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const MealController = async (req, res, next) => {
  try {
    let meal = new Meal({
      category: req.body.category,
      name: req.body.name,
      mealItem: req.body.mealItem,
    });

    meal = await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const UpdateMeal = async (req, res, next) => {
  try {
    await Meal.findByIdAndUpdate(req.params.id, {
      mealItem: req.body.mealItem,
    });

    res.status(204).json("Meal Item Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { MealController, UpdateMeal, GetMealById, getAllMeal };
