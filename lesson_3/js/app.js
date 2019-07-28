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
}
