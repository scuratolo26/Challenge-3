// Assignment code here

// DEFINE VARIABLES
var passwordLength = 0;
var characters = "";
var randomPass = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// GENERATE RANDOM PASSWORD 
function generatePassword() {
  randomPass = "";
  prompts();

  for (var i = 0; i <= passwordLength; i++) {
    var randomize = Math.floor(Math.random() * characters.length);
    randomPass += characters.substring(randomize, randomize + 1);
  }
  return randomPass;
}

function prompts() {
  characters = "";
  getPasswordLength();
  getLowercase();
  getUppercase();
  getNumeric();
  verifyChar();
  getSpecial();
}

// GET PASSWORD LENGTH
function getPasswordLength() {
  // ask password length 
  passwordLength = prompt("How long would you like your password to be? Enter a number between 8 and 128", "8");
  console.log(passwordLength);

  // validate password length 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  } else if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  } else if (isNaN(passwordLength)) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  };

}

// VERIFY CHARACTER TYPES 
function getLowercase() {
  var getLower = window.confirm("Would you like your password to include LOWERCASE characters? Click 'OK' for yes, 'Cancel' for no.");
  if (getLower) {
    characters = characters + lowercase;
    console.log(characters);
  }
}

function getUppercase() {
  var getUpper = window.confirm("Would you like your password to include UPPERCASE characters? Click 'OK' for yes, 'Cancel' for no.");
  if (getUpper) {
    characters = characters + uppercase;
    console.log(characters);
  }
}

function getNumeric() {
  var getNum = window.confirm("Would you like your password to include NUMBERS? Click 'OK' for yes, 'Cancel' for no.");
  if (getNum) {
    characters = characters + numbers;
    console.log(characters);
  }
}

function getSpecial() {
  if (getSpecialChar) {
    characters = characters + specialChar;
    console.log(characters);
  }
}

function verifyChar() {
  if (characters === "") {
    window.alert("You must select at least one type of character.");
    prompts();
  }
}

// END VERIFY CHARACTER TYPES 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
