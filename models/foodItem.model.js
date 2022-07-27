const mongoose = require("mongoose");

const FoodItem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is compulsory!"],
  },
  calories: {
    type: Number,
    required: [true, "Calorie is compulsory!"],
  },
  protein: {
    type: Number,
    required: [true, "Protein is compulsory!"],
  },
  carb: {
    type: Number,
    required: [true, "Carb is compulsory!"],
  },
  fat: {
    type: Number,
    required: [true, "Fat is compulsory!"],
  },
  acceptedUnits: {
    type: String,
    enum: ["ml", "kg", "litre", "g", "item"],
    required: true,
  },
  itemWeight: {
    type: Number,
    required: [true, "Weight should be in grams"],
  },
}, {
  timestamps : true 
});

module.exports = mongoose.model("FoodItem" , FoodItem);
