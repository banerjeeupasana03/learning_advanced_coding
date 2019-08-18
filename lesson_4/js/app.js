function App() {

  var cuisineNames = [
    {
      type: "Japanese",
      name: "sushi",
      taste: "great",
      ingredient: "fish and riceball stuffing",
      calorie: 200,
      price: 9.95
    },

    {
      type: "Chinese",
      name: "Dumpling",
      taste: "good",
      ingredient: "wheat and stuffing",
      calorie: 400,
      price: 8.50
    },

    {
      name: "Indian",
      name: "Curry",
      taste: "Great",
      ingredient: "various",
      calorie: 500,
      price: 12.20
    },

    {
      name: "French",
      name: "Croissant",
      taste: "good",
      ingredient: "wheat flour and butter",
      calorie: 250,
      price: 4.23
    },

    {
      name: "vietnamese",
      name: "Pho",
      taste: "Great",
      ingredient: "noodle soup",
      calorie: 300,
      price: 11.50
    },

    {
      name: "Thai",
      name: "Pad-thai",
      taste: "Spicy",
      ingredient: "spicy noodle",
      calorie: 600,
      price: 11.50
    },

    {
      name: "Italian",
      name: "Pizza",
      taste: "Yum",
      ingredient: "wheat base with various topping",
      calorie: 800,
      price: 15.30
    },

    {
      name: "American",
      name: "Burger",
      taste: "moderate",
      ingredient: "bread buns and topping",
      calorie: 1000,
      price: 5.50
    },

    {
      name: "Canadian",
      name: "Poutine",
      taste: "Great",
      ingredient: "potato fries and curry soup",
      calorie: 1500,
      price: 11.50
    },

    {
      name: "Mexican",
      name: "Taco",
      taste: "good",
      ingredient: "wheat brackets with veggies and fries",
      calorie: 780,
      price: 10.50
    }
  ];

  function goodFoodSelect(arrayInput, taste) {
    var goodFoodList = [];
    for (var i = 0; i < arrayInput.length; i++) {
      if (arrayInput[i].taste.toLowerCase() === taste.toLowerCase()) {
        goodFoodList.push(arrayInput[i]);
      }
    }
    return goodFoodList;
  }
  console.log(goodFoodSelect(cuisineNames, "great"));

  function calorieValueSelect(arrayInput, calorieOne, calorieTwo) {
    var calorieList = [];
    for (var i = 0; i < arrayInput.length; i++) {
      if (arrayInput[i].calorie > calorieOne && arrayInput[i].calorie <= calorieTwo) {
        calorieList.push(arrayInput[i]);
      }
    }
    return calorieList;
  }
  console.log(calorieValueSelect(cuisineNames, 524, 1200));

  function CheckTaste(obj, tasteName) {
//    if (obj.taste === tasteName) {
//      return true;
//    } else {
//      return false;
//    }
     return (obj.taste.toLowerCase() === tasteName.toLowerCase());
    
  }
  console.log(CheckTaste(cuisineNames[4], "good"));

  function CheckCalorie(obj, calorieLow, calorieHigh) {
//    if (obj.calorie > calorieLow && obj.calorie <= calorieHigh) {
//      return true;
//    } else {
//      return false;
//    }
    
    return (obj.calorie > calorieLow && obj.calorie <= calorieHigh);
  }
  console.log(CheckCalorie(cuisineNames[3], 560, 700));

}
