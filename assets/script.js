//user inputs 
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var confirmNumber;

//input variables for uppercase, lower case, special character, and number
var upperCaseArr = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
var lowerCaseArr = Array.from('qwertyuiopasdfghjklzxcvbnm')
var specialCharacter = Array.from('`~!@#$%^&*()-_=+\|]}[{";:/?.>,<')
var numberArr = Array.from('0123456789')

var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  newps = generatePassword();
  document.getElementById("password").placeholder = newps;
});

//this is the generate password function
function generatePassword() {
  //user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if (!enter) {
    alert("This needs a value in order to proceed");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    //user input questions
    confirmNumber = confirm("Would you like your password to contain numbers?");
    confirmSpecialCharacter = confirm("Would you like your password to contain special characters?");
    confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
    confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");

  } if (!confirmSpecialCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose at least one criteria!");

  } else if (confirmSpecialCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = specialCharacter.concat(numberArr, upperCaseArr, lowerCaseArr);

  } else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = specialCharacter.concat(numberArr, upperCaseArr);

  } else if (confirmSpecialCharacter && confirmNumber && confirmLowercase) {
    choices = specialCharacter.concat(numberArr, lowerCaseArr);

  } else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
    choices = specialCharacter.concat(lowerCaseArr, upperCaseArr);

  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numberArr.concat(lowerCaseArr, upperCaseArr);

  } else if (confirmSpecialCharacter && confirmNumber) {
    choices = specialCharacter.concat(numberArr);

  } else if (confirmSpecialCharacter && confirmLowercase) {
    choices = specialCharacter.concat(lowerCaseArr);

  } else if (confirmSpecialCharacter && confirmUppercase) {
    choices = specialCharacter.concat(upperCaseArr);

  } else if (confirmLowercase && confirmNumber) {
    choices = lowerCaseArr.concat(numberArr);

  } else if (confirmLowercase && confirmUppercase) {
    choices = lowerCaseArr.concat(upperCaseArr);

  } else if (confirmNumber && confirmUppercase) {
    choices = numberArr.concat(upperCaseArr);

  } else if (confirmSpecialCharacter) {
    choices = specialCharacter;

  } else if (confirmNumber) {
    choices = numberArr;

  } else if (confirmLowercase) {
    choices = lowerCaseArr;

  } else if (confirmUppercase) {
    choices = upperCaseArr;
  };

  var password = [];

  //randomizer(sp?)
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var newps = password.join("");
  UserInput(newps);
  return newps;
}
//password into the textbox

function UserInput(newps) {
  document.getElementById("password").textContent = newps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});


