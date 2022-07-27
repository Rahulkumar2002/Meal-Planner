const mongoose = require("mongoose");
const FoodItem = require("./FoodItem.model");
const Meal = new mongoose.Schema(
  {
    category: {
      type: [String],
      enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner" , "breakfast" , "dinner" , "lunch" , "evening snack"],
      required: [true, "Atleast choose one category."],
    },
    name: {
      type: String,
      required: true,
    },
    mealItem : {
        type: [mongoose.Schema.Types.ObjectId], 
        ref : FoodItem,
        required : true  
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", Meal);
