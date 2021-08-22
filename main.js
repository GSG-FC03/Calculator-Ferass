// Initiailzing currencies and their values depends on ILS.
// Which mean 1 USD = 3.24 NIS, and 1 EUR = 3.79 NIS
const USD = 3.24;
const EUR = 3.79;
const ILS = 1;
let array = [];
const ILSUSD = document.getElementsByClassName("from-ILS-To-USD")[0];
const USDILS = document.getElementsByClassName("from-USD-To-ILS")[0];
const EURILS = document.getElementsByClassName("from-EUR-To-ILS")[0];
const ILSEUR = document.getElementsByClassName("from-ILS-To-EUR")[0];
let convResult = 0;
// Intializing numbers, signs, clear, and equal buttons
const equal = document.getElementsByClassName("equal")[0];
const clear = document.getElementsByClassName("clear")[0];
const number = document.querySelectorAll(".number");
const sign = document.querySelectorAll(".sign");
const point = document.getElementsByClassName("point")[0];
// Initializing display screens
const opScreen = document.getElementsByClassName("operation-screen")[0];
const convScreen = document.getElementsByClassName("conversion-screen")[0];
// Create event for each number, querySelectorAll we treat it as array to apply function at each one.
number.forEach((number) => {
  number.addEventListener("click", function () {
    opScreen.value = opScreen.value + number.value
  });
});
// Create special function for point
point.addEventListener("click",function() {
    const num = opScreen.value;
    const numString = num.toString();
    if(numString.includes('.')){
      opScreen.value = opScreen.value;
  
    }else{
       opScreen.value = opScreen.value + point.value
    }
  })
// Create event for equal and clear
clear.addEventListener("click", function () {
  opScreen.value = "";
  array = [];
  convScreen.value = "";
});
// Create event for each sign, querySelectorAll we treat it as array to apply function at each one.
sign.forEach((sign) => {
  sign.addEventListener("click", function () {
    array[1] = sign.value;
    if (array[1] == "+") {
      array[0] = opScreen.value;
      opScreen.value = "";
    } else if (array[1] == "-") {
      array[0] = opScreen.value;
      opScreen.value = "";
    } else if (array[1] == "*") {
      array[0] = opScreen.value;
      opScreen.value = "";
    } else {
      array[0] = opScreen.value;
      opScreen.value = "";
    }
  });
});

equal.addEventListener("click", function () {
    
  array[2] = opScreen.value;
  if (array[1] === "+") {
    result = Number(array[0]) + Number(array[2]);
    array[3] = result;
    opScreen.value = result;
  } else if (array[1] === "-") {
    result = Number(array[0]) - Number(array[2]);
    array[3] = result;
    opScreen.value = result;
  } else if (array[1] === "X") {
    result = Number(array[0]) * Number(array[2]);
    array[3] = result;
    opScreen.value = result;
  } else {
    result = Number(array[0]) / Number(array[2]);
    array[3] = result;
    opScreen.value = result;
  }
});
// array.forEach(fucntion (element){let print = "" + element})

// Creating function for conversion operations
if (!opScreen.value){
ILSUSD.addEventListener("click", function () {
  convResult = opScreen.value / USD;
  convScreen.value = convResult.toFixed(3) ;
});
USDILS.addEventListener("click", function () {
  convResult = opScreen.value * USD;
  convScreen.value = convResult.toFixed(3) ;
});
ILSEUR.addEventListener("click", function () {
  convResult = opScreen.value / EUR;
  convScreen.value = convResult.toFixed(3) ;
});
EURILS.addEventListener("click", function () {
  convResult = opScreen.value * EUR;
  convScreen.value = convResult.toFixed(3) ;
});
}