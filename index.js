// var newCalc = true;

function gva(input) {
  display.value += input;
}
function calculate() {
  // display.value = eval(display.value);
  var result = eval(display.value);
  display.value = result;
  if (result == "Infinity") {
    display.value = Error;
  } else {
    display.value = result;
  }
  updateDisplay();
}
// newCalc = true;

function clearDisplay() {
  display.value = " ";
}
function clearLastDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = " ";
}
console.log();
