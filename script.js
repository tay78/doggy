let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


// 1. Convert to an arrow function.
const calculateDoggieAge = (humanAge) => {
  
  doggyAge= humanAge*7;
  result.innerHTML = "Your doggie is " + doggyAge + " years old in human years!";
}
//function calculateDoggieAge(humanAge) {

  // 2. Declare a doggieAge variable and set it equal to the humanAge parameter multiplied by 7.
  

  // 3. Update the result div's inner html to display the dog's age. Use string interpolation to create the message: "Your doggie is _________ years old in human years!"

  
  




equalsButton.addEventListener("click", () => {
let userInput=Number(input.value);
  // 4. Declare a userInput variable and set it equal to the value of the input. This needs to be a number, not a string! Be sure to place that inside our Number() method!
  calculateDoggieAge(userInput);

  // 5. Call the calculateDoggieAge function. Be sure to include the userInput variable as the parameter!


})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}