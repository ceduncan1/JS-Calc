

//Grab My Elements
var firstNumber = document.querySelector('#num_one'); //1st blank
var secondNumber = document.querySelector('#num_two'); //2nd blank
var calcButton = document.querySelector('#calculateBtn'); //Button
var sum = document.querySelector('#answer'); //Answer [span]


//Variable Declarations



//Function to Perform Calculation
var total = function () {
  var calc = Number(firstNumber.value) + Number(secondNumber.value);
  console.log(calc);
  sum.innerHTML = String(calc);
};



//Button Click
calcButton.addEventListener('click', total); //*** = function


