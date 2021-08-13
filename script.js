// Assignment Code
var generateBtn = document.querySelector("#generate");
// var limitofCharacters = 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
var password = ""

var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "y", "z"]
var lettersArrUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lettersArrSpecial = ["!", "@", "#", "$", "%", "&", "*"]
var Numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var userChoicelowercase = window.confirm("Do you want your password have lowercase on it?");
var userChoicespecialcharacter = window.confirm("Do you want to include special characters?")
var userAmountofcharacters = window.confirm("How much characters do you want from 8-140 characters?")
var userNumericals = window.confirm("Do you want numbers in your password?")
var userChoiceUppercase = window.confirm("Do you want a uppercase letter?")
var buckets = []
if (userChoicelowercase) {
  buckets.push(lettersArr)
 }
if (userChoicespecialcharacter) {
  buckets.push(lettersArrSpecial)
}
if (userNumericals) {
  buckets.push(Numerical)
}
if (userChoiceUppercase) {
  buckets.push(lettersArrUppercase)
}
for (var i = 0; i < 8; i++) {
  var currentbucket = Math.floor (Math.random () * buckets.length);
  var index = Math.floor(Math.random() * buckets[currentbucket].length);
  password += buckets[currentbucket][index]
}
  console.log(password);
  return password;
}
  //   then ()
// Create my variables
// Conditional states to see how many characters while I see.
// Write a function 

// var num1 = 35;
// var lettersArr = ["a", "b", "c"]

// if (password > 7 && password < 29) {
//   createPassword
// } 
// else if (password < 7) {
//   console.log("its not greater than 7")
// }
// else {restart Password function}


// for (var i = 0; i < lettersArr.length; i++) {
//   console.log(lettersArr[i])
// }

// "first time says 'a'"
// "second time says 'b'"
// "first time says 'c'"