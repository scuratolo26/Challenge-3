// Assignment code here
var passwordLength = 0;


function generatePassword() {
  getPasswordLength();

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

console.log(passwordLength);

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
