const User = require("../models/user.model");

const getAllUsers = async (req , res) => {
    try{
       const user = await User.find({}).populate('mealPlan.mealId') ; 
       res.status(200).json(user) ; 
    }catch(err){
      res.status(500).json(err); 
    }
  }

const GetUserById = async (req , res , next) => {
    try{
        const user  = await User.findById(req.params.id).populate('mealPlan.mealId'); 
        if(!user){
            return res.status(404).json("User not found invalid id!");
        }

        res.status(200).json(user) ; 
    }catch(err){
        console.log(err);
        res.status(500).json(err) ; 
    }
}

const UserController = async (req , res , next ) => {
try{

  let user = new User({
    name : req.body.name , 
    calorieRequirement : req.body.calorieRequirement ,
    mealPlan : req.body.mealPlan
  }) ; 

  user = await user.save();
  res.status(201).json(user);
}catch(err){
    console.log(err) ; 
    res.status(500).json(err);
}
}

const UpdateUser = async (req , res , next) => {
try{

 await User.findByIdAndUpdate(req.params.id, {
    mealPlan : req.body.mealPlan
 })

 res.status(204).json("Meal Plan Updated Successfully") ;
}catch(err){
    console.log(err);
    res.status(500).json(err);
}
}


module.exports = {UserController , UpdateUser , GetUserById , getAllUsers} ; 