var upperCaseArr = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
var lowerCaseArr = Array.from('qwertyuiopasdfghjklzxcvbnm')
var specialCharacter = Array.from('`~!@#$%^&*()-_=+\|]}[{";:/?.>,<')


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


