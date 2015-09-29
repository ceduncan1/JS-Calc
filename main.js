//Grab My Elements
var firstNumber = document.querySelector('#num_one'); //1st blank
var secondNumber = document.querySelector('#num_two'); //2nd blank
var calcButton = document.querySelector('#calculateBtn'); //Button
var sum = document.querySelector('#answer'); //Answer [span]


//Variable Declarations
var answer, calc;


//Function to Perform Calculation
var total = function () {
  calc = Number(firstNumber.value) + Number(secondNumber.value);
  console.log(calc)
  return calc;
  // sum.innerHTML = String(calc);
};

//Function to Show Calculation
var span = function() {  
  answer = total();
  sum.textContent = total();
};

//Button Click
calcButton.addEventListener('click', span); //*** = function