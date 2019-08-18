function App() {

  function loadCarModelsInSelect() {
    var selectOption = document.getElementById("car_names");
    var modelNameArray = ["<option></option>"];
    for (var i = 0; i < carArray.length; i++) {
      var carModelName = carArray[i].model;
      var carModelNameCapitalized = carModelName.charAt(0).toUpperCase() + carModelName.slice(1, carModelName.length);
      var optionStr = "<option value='" + carModelName + "'>" + carModelNameCapitalized + "</option>";
      modelNameArray.push(optionStr);
    }
    selectOption.innerHTML = modelNameArray.join("\n");
  }
  loadCarModelsInSelect();

  function loadCarColorSelection(carName) {
    var modelNameArray = ["<option></option>"];
    var colorNameArray = ["<option></option>"];
    var foundValue;
    for (var i = 0; i < carArray.length; i++) {
      if (carArray[i].model == carName) {
        foundValue = i;
        break;
      }
    }

    if (foundValue !== undefined) {
      var selectDiv = document.createElement("select");
      var colors = carArray[foundValue].colors;
      var optionArray = ["<option></option>"];

      for (var j = 0; j < colors.length; j++) {
        var optionColorNames = "<option value = '" + colors[j] + "'>" + colors[j] + "</option>";
        optionArray.push(optionColorNames);
      }
      selectDiv.innerHTML = optionArray.join("\n");
      document.getElementById("select_colors_div").appendChild(selectDiv);
    }
  }

  function linkingCarModelsToColorsUI() {
    var selectDivCarModel = document.getElementById("car_names");
    selectDivCarModel.addEventListener("change", function (ev) {
      console.log(ev.srcElement.value);
      loadCarColorSelection(ev.srcElement.value);
    })
  }

  linkingCarModelsToColorsUI();
}
