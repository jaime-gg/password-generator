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

var passwordLength;
var chooseLowercase;
var chooseUppercase;
var chooseSymbol; 


function promptLength () {
  prompt("What is your desired password length? Please choose a number between 8-128 characters.")
  if (passwordLength<8){
    alert("Password length has to be a number between 8-128 characters");
    promptLength();
  } else if (passwordLength > 128){
    alert("Password length has to be a number between 8-128 characters");
    promptLength();
  } else{
  alert("The following alerts will ask you which characters you would like to include in your password.");
  }
  return passwordLength;
}

function promptLowercase () {
  chooseLowercase = confirm ("Would you like to include lowercase?");
}

function promptUppercase() {
  chooseUppercase = confirm ("Would you like to include lowercase?")
}

function promptSymbol () {
  chooseSymbol= confirm ("Would you like to include symbols?")
}



function generatePassword() {
  // console.log ('clicked')  // checing button worked 
  // call my prompts
  promptLength();
  promptLowercase();
  promptUppercase()
  promptSymbol();
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
