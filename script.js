//input variables for uppercase, lower case, special character, and number
var upperCaseArr = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
var lowerCaseArr = Array.from('qwertyuiopasdfghjklzxcvbnm')
var specialCharacter = Array.from('`~!@#$%^&*()-_=+\|]}[{";:/?.>,<')
var number = Array.from('0123456789')


// Assignment Code
var generateBtn = document.querySelector("#generate");

var get = document.querySelector('#generte');

get.addEventListener('click', function () {
  newps = generatePassword();
  document.getElementById('password').placeholder = newps
});

function generatePassword() {
  enter = parseInt(prompt('How many characters would you like your password? Choose between 8 and 128 characters.'));
}

if (!enter) {
  alert('This needs a value in order to proceed!');
} else if (enter < 8 || enter > 128) {
  
}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


