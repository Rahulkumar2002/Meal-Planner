const FoodItem = require("../models/FoodItem.model.js");

const foodItem = async (req, res, next) => {
  try {
    let food = new FoodItem({
      name : req.body.name,
      calories : req.body.calories , 
      protein : req.body.protein , 
      carb : req.body.carb , 
      fat : req.body.fat , 
      acceptedUnits : req.body.acceptedUnits , 
      itemWeight : req.body.itemWeight
    });

    food = await food.save();

    res.status(201).json({ food });
  } catch (err) {
    console.log("Error occured in foodItem : " + err);
    res.status(500).json(err);
  }
};

module.exports = foodItem;
