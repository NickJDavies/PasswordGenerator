// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// variables
var lowLetters = ("qwertyuiopasdfghjklzxcvbnm");
var capLetters = ("QWERTYUIOPASDFGHJKLZXCVBNM");
var symbols = (",./;'[]\=-<>?:'`+_*&^%$#@!~");
var numbers = ("1234567890");
var passwordPossibleCharacters = ("");

var confirmLowLetters = false;
var confirmCapLetters = false;
var confirmNumbers = false;
var confirmSymbols = false;
// generate password:

// Random Number Generator + picks random symbol.

// function to add potential symbols/letters/numbers
function passConfirm(x, confx, varx) {
  var confx = confirm("Do you want " + x + "?");
  if (confx === true) {
    passwordPossibleCharacters = passwordPossibleCharacters + varx;
  }
}


//questions
function generatePassword() {
  //lengthChoice();
  passwordPossibleCharacters = ("");
  passConfirm("Lowercase Letters", confirmLowLetters, lowLetters);
  passConfirm("Capital Letters", confirmCapLetters, capLetters);
  passConfirm("Symbols", confirmSymbols, symbols);
  passConfirm("Numbers", confirmNumbers, numbers);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);