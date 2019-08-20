function App() {

  function evaluatePrice(dress) {
    return (dress.price > 100 && dress.price < 500);
  }

  function evaluatePriceWithinRange(lowerRange, upperRange) {
    var innerFn = function (dress) {
      return (dress.price > lowerRange && dress.price < upperRange);
    };
    return innerFn;
  }

  function evaluateColors(dress) {
    for (var i = 0; i < dress.color.length; i++) {
      if (dress.color[i] == "black" || dress.color[i] == "white") {
        return true;
      }
    }
    return false;
  }

  function evaluateSelectColorsPartialFn(colorsArr) {
    var innerFn = function (dress) {
      for (var i = 0; i < dress.color.length; i++) {
        if (colorsArr.includes(dress.color[i])) {
          return true;
        }
      }
      return false;
    };
    return innerFn;
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

  console.log(myFilter(dresses, evaluateSelectColorsPartialFn(["black", "grey"])));
  console.log(myFilter(dresses, evaluatePriceWithinRange(100, 500)));

  console.log(dresses.filter(evaluateSelectColorsPartialFn(["black", "grey"]))); console.log(dresses.filter(evaluatePriceWithinRange(100, 500)));
  }
