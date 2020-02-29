// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// variables
var lowLetters = ("qwertyuiopasdfghjklzxcvbnm");
var capLetters = ("QWERTYUIOPASDFGHJKLZXCVBNM");
var symbols = (",./;'[]|}{:?><=-+_)(*&^%$#@!~`");
var numbers = ("1234567890");
var passwordPossibleCharacters = ("");
var length = 0;
var securePassword = "empty";

var confirmLowLetters = false;
var confirmCapLetters = false;
var confirmNumbers = false;
var confirmSymbols = false;
// generate password:

// Random Number Generator + picks random symbol.
function randomSymbol() {
  return(passwordPossibleCharacters[Math.floor(Math.random() * Math.floor((passwordPossibleCharacters.length)))]);
}

function lengthChoice() {
  // loop to ensure they enter a password of correct length.
  while(true) {
    length = parseInt(prompt("How long would you like your password? must be between 8 and 128 characters."));
    if (typeof(length) !== "number") {
      alert("Not a number");
    } else if (length >= 8 && length <= 128) {
      alert("success!!");
      return;
    } else {
      alert("Please enter a number between 8 and 128.");
    }
  }
}

// function to add potential symbols/letters/numbers
function passConfirm(x, confx, varx) {
  var confx = confirm("Do you want " + x + "?");
  if (confx === true) {
    passwordPossibleCharacters = passwordPossibleCharacters + varx;
  }
}


//questions
function generatePassword() {
  lengthChoice();
  passwordPossibleCharacters = ("");
  passConfirm("Lowercase Letters", confirmLowLetters, lowLetters);
  passConfirm("Capital Letters", confirmCapLetters, capLetters);
  passConfirm("Symbols", confirmSymbols, symbols);
  passConfirm("Numbers", confirmNumbers, numbers);
  
  passwordPossibleCharacters.split("")
  securePassword = "";
  for(i = 0; i < length; i++) {
    securePassword = securePassword + randomSymbol();
  }
  return(securePassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);