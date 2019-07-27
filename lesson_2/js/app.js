function App() {
  console.log("Loading App");

  var obj1 = [
    [
      {
        model: "BMW",
        color: "black"
      },
      {
        model: "jeep",
        color: "red"
      },
      {
        model: "tesla",
        color: "grey"
      }
    ],

    [
      {
        model: "HeroHonda",
        color: "red"
      },
      {
        model: "Yamaha",
        color: "silver"
      },
      {
        model: "Bajaj",
        color: "green"
      }
    ]
  ];

  function carDescription() {
    var commonDescription = "This is a brand new ";
    var i;
    var arr = [];
    for (i = 0; i < obj1[0].length; i++) {
      var printStatement = commonDescription + obj1[0][i].color + " " + obj1[0][i].model;
      arr.push(printStatement);
    }
    return arr;
  }

  function bikeDescription() {
    var commonDescription = "This is a new ";
    var i;
    var arr = [];
    for (i = 0; i < obj1[1].length; i++) {
      var printStatement = commonDescription + obj1[1][i].color + " " + obj1[1][i].model;
      arr.push(printStatement);
    }
    return arr;
  }

  function callVehicleNames() {
    var carsDisplayButton = document.querySelector("#car");
    var bikesDisplayButton = document.querySelector("#bike");

    carsDisplayButton.addEventListener("click", function(){
      console.log(carDescription().join("\n"));
    });
    bikesDisplayButton.addEventListener("click", function(){
      console.log(bikeDescription().join("\n"));
    });
  }
  callVehicleNames();
};
