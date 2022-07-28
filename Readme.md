# Meal Planner : 

### Food Item : 

There are 2 method in food item : 
 1. GET method at ```localhost:8080/api/v1/food``` to get all food items in collection.
 2. POST method at ```localhost:8080/api/v1/food``` to create a new food item . 
      ```
      Schmea :  
          {
            {
               "name" : "Wheat Bran",
               "calories": 200 , 
                "protein": 14 ,
                "fat" : 6 , 
                "carb": 23 , 
                "acceptedUnits": "g" ,
                "itemWeight":100 
              }
          }
      ```
### Meal : 

There are 4 method in Meal: 
 1. GET method at ```localhost:8080/api/v1/meal``` to get all meals in collection.
 2. GET method at ```localhost:8080/api/v1/meal/:id``` to get a meal by its id  . 
 3. POST method at ```localhost:8080/api/v1/meal``` to create a new meal. 
     ```
      Schmea :  
         {
             "category": "Breakfast" , 
             "name" : "Morning Meal Two" ,
             "mealItem" : ["62e21d595dbb0f692a4639c4" , "62e2194ac0adffb3c8820cf0" , "62e219d45dbb0f692a46399c" , "62e21ba25dbb0f692a4639b0" , "62e21c2c5dbb0f692a4639b6"]
         }
      ```
 4. PATCH method at ```localhost:8080/api/v1/meal/:id``` to update mealItem of meal by its ids. 


### User : 

There are 4 method in User: 
 1. GET method at ```localhost:8080/api/v1/user``` to get all users in collection.
 2. GET method at ```localhost:8080/api/v1/user/:id``` to get a user by its id  . 
 3. POST method at ```localhost:8080/api/v1/user``` to create a new user. 
     ```
      Schmea :  
             {
        "name" : "Mike Tyson" ,
        "calorieRequirement" : 2500 , 
        "mealPlan" : [ { "date" : "2022-7-29" , "mealId" : ["62e220a05dbb0f692a4639d7" , "62e21f1d5dbb0f692a4639cb" ,    "62e21fcc5dbb0f692a4639cf" , "62e2202d5dbb0f692a4639d3"]}]
            }
     ```
 4. PATCH method at ```localhost:8080/api/v1/user/:id``` to update mealPlan of user by its ids. 

 ### Meal Generator : 

 There is one method int Meal Generator : 

 1. GET method at ```localhost:8080/api/v1/mealgen``` to create a meal. 
 ```
               Schema :     
               {
                  "calories" : 500 , 
                  "items" : No. of items in a single meal highest 5 and min 2.example 2.
               }              
          
 ```