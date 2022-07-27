const mongoose = require("mongoose");
const Meal = require("../models/Meal.model");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    calorieRequirement: {
      type: Number,
      required: true,
    },
    mealPlan: [
      {
        date: {
          type: Date,
          required: true,
        },
        mealId: {
          type: [mongoose.Schema.Types.ObjectId],
          ref: Meal,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
