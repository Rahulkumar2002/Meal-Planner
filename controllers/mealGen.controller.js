const FoodItem = require("../models/FoodItem.model");

const MealGen = async (req, res) => {
  try {
    let { calories, items } = req.body;
    while (true) {
      let item = await FoodItem.aggregate([{ $sample: { size: items } }]);
      let result = Calculator(item);
      if (result[0] * 4 >= calories * 0.2 && result[0] * 4 <= calories * 0.4 ) {
        if (
          result[1] >= calories - 100 &&
          result[1] <= calories + 100
        ) {
          return res.status(200).json(item);
        }
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

const Calculator = (item) => {
  let i = 0;
  let sum = 0;
  let cal = 0;
  while (i < item.length) {
    sum += item[i].protein;
    cal += item[i].calories;
    i++;
  }
  // console.log([sum , cal]);
  return [sum, cal];
};

module.exports = MealGen;
