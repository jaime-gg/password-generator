// Assignment Code
var generateBtn = document.querySelector("#generate");

// to do: 
  // 1. promt the user 
  //    1.1. leangth 8 - 128
  //    1.2. lowercase, uppercase, numbers, special charecters
  //      1.2.a Establish what is accepted examples of each
  // 2. validate the input 
  // 3. generate and display working password

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var numbers = "0123456789";
var specialCharecters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";


function promptLength () {

}

function promptLowercase () {

}

function promptUppercase() {

}

function promptSymbol () {

}



function generatePassword() {
// console.log ('clicked')  // checing button worked 

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
