// Assignment code here
var passwordLength = 0;
var characters = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
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
  passwordLength = prompt("Enter a number between 8 and 128", "8");
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

function getLowercase() {
  var getLower = window.confirm("Lowercase");
  if (getLower) {
    characters = characters + lowercase;
    console.log(characters);
  }
}

function getUppercase() {
  var getUpper = window.confirm("Uppercase");
  if (getUpper) {
    characters = characters + uppercase;
    console.log(characters);
  }
}

function getNumeric() {
  var getNum = window.confirm("Numbers");
  if (getNum) {
    characters = characters + numbers;
    console.log(characters);
  }
}

function getSpecial() {
  var getSpecialChar = window.confirm("Special Characters");
  if (getSpecialChar) {
    characters = characters + specialChar;
    console.log(characters);
  }
}

function verifyChar() {
  if (characters === "") {
    window.alert("You must select at least one type of character.");
    generatePassword();
  }
}

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
