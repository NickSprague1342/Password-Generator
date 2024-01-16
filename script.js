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

//if user does not select any criteria throw error and have user choose from criteria again.
if (!enter) {
  alert('This needs a value in order to proceed!');
} else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt('You must choose between 8 and 128'));
} else {
  upperCaseArr = confirm('Would you like you password to contain Uppercase Letters?');
  lowerCaseArr = confirm('Would you like your password to contain Lowercase Letters?');
  specialCharacter = confirm('Would you like your password to contain any special characters?');
  number = confirm('Would you like your password to contain numbers?');
};

if (!upperCaseArr && !lowerCaseArr && !specialCharacter && !number) {
  choice = alert('You must enter at least one criteria');
}


//puts password in provided textbox
function UserInput(newps) {
  document.getElementById('password').textContent = newps;
}

var copy = document.querySelector('#copy');
copy.addEventListener('click', function(){
  copyPassword();
});



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


