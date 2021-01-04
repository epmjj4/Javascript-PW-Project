//Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//This is a function to ask user for password criteria
function generatePassword() {
  var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ['@', '%', '+', '\\', ',', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
  var inputPassword = false;

  //variable to store user input for the length of password

  if (inputPassword < 8 || inputPassword > 128) {
     inputPassword = prompt("How long would you like your password to be?");

  }
  //Variable to store boolean to include lower case or not. 
  var hasLowerCase = confirm("Click Ok to confirm including lower case characters");

  //Variable to store boolean to include upper case or not. 
  var hasUpperCase = confirm("Click Ok to confirm including upper case characters");

  //Variable to store boolean to include numbers or not. 
  var hasNumbers = confirm("Click Ok to confirm this will include numbers");

  //Variable to store boolean to include special characters or not. 
  var hasSpecialCharacters = confirm("Click Ok to confirm if you would like to use special characters");

  //Created choices array to concatinate user selections.
  var choices = [];

  //If user input is true this will concatinate lower case selection to choices array.
  if (hasLowerCase === true) {
    choices = choices.concat(charLowerCase);
  }

  //If user input is true this will concatinate upper case selection to choices array.
  if (hasUpperCase === true) {
    choices = choices.concat(charUpperCase);
  }

  //If user input is true this will concatinate a number selection to choices array.
  if (hasNumbers === true) {
    choices = choices.concat(number);
  }
  //If user input is true this will concatinate special character selection to choices array.
  if (hasSpecialCharacters === true) {
    choices = choices.concat(specialChar);
  }
  
  
  var finalPassword = [];
  
  for (var i = 0; i < inputPassword; i++) {
    finalPassword.push(choices[Math.floor(Math.random() * choices.length)]);
    
  }
return finalPassword.join('');

}