function App() {

  function evaluatePrice(dress) {
    return (dress.price > 100 && dress.price < 500);
  }

  function evaluateColors(dress) {
    for (var i = 0; i < dress.color.length; i++) {
      if (dress.color[i] == "black" || dress.color[i] == "white") {
        return true;
      }
    }
    return false;
  }

  // myFilter is a higher order function since it takes another function and operates
  function myFilter(inputArray, fn) {
    var output = [];
    for (var i = 0; i < inputArray.length; i++) {
      if (fn(inputArray[i])) {
        output.push(inputArray[i]);
      }
    }
    return output;
  }

  console.log(myFilter(dresses, evaluateColors));
  console.log(myFilter(dresses, evaluatePrice));

  console.log(dresses.filter(evaluateColors));
  console.log(dresses.filter(evaluatePrice));
}
