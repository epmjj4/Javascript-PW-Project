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

  //I setup a variable to store the user input for the length of password.

  if (inputPassword !== 8 || inputPassword !== 128) {
    inputPassword = parseInt(prompt("How long would you like your password to be?"));
    //if this works, will console.log user answer 
    console.log(inputPassword);
  }

  //This is the conditional to check if the user input is at least 8 characters
  if (inputPassword < 8) {
    alert("Please enter at least 8 characters.");
    return;
  }

  //conditional to check if user input is greater then 128 characters
  if (inputPassword > 128) {
    alert("Please enter less then 128 characters.");
    return;
  }
  //I created this Variable to store boolean answer from user asking if they want to include lower case characters. 
  var hasLowerCase = confirm("Click Ok to confirm if you would like to include lower case characters?");
  if (hasLowerCase === true) {
    //if user selects true, then console.log "User chooses lower case character.""
    console.log("User chooses to include lower case characters.")
  }

  //I created this Variable to store boolean answer from user asking if they want to include upper case characters. 
  var hasUpperCase = confirm("Click Ok to confirm if you would like to include upper case characters?");
  if (hasUpperCase === true) {
    //if user selects true, then console.log "User chooses lower case character.""
    console.log("User chooses to include upper case characters.")
  }

  //I created this Variable to store boolean answer from user asking if they want to include numbers. 
  var hasNumbers = confirm("Click Ok to confirm if you would like to include numbers?");
  if (hasNumbers === true) {
    //if user selects true, then console.log "User chooses lower case character.""
    console.log("User chooses to include numbers.")
  }

  //I created this Variable to store boolean answer from user asking if they want to include  special characters. 
  var hasSpecialCharacters = confirm("Click Ok to confirm if you would like to use special characters?");
  if (hasSpecialCharacters === true) {
    //if user selects true, then console.log"User chooses special characters.""
    console.log("User chooses to include special characters.")
  }

  //I created an array named choices so I could concatinate user selections.
  var choices = [];

  //If user input equals to true this will concatinate lower case selection to choices array.
  if (hasLowerCase === true) {
    choices = choices.concat(charLowerCase);

  }

  //If user input equals to true this will concatinate upper case selection to choices array.
  if (hasUpperCase === true) {
    choices = choices.concat(charUpperCase);
  }

  //If user input equals to true this will concatinate a number selection to choices array.
  if (hasNumbers === true) {
    choices = choices.concat(number);
  }
  //If user input equals to true this will concatinate special character selection to choices array.
  if (hasSpecialCharacters === true) {
    choices = choices.concat(specialChar);
  }

  //I created an emtpy array called finalPassword. 
  var finalPassword = [];

  //This will loop through the info input by user in inputPassword variable and will be pushed into finalPassword array

  for (var i = 0; i < inputPassword; i++) {
    finalPassword.push(choices[Math.floor(Math.random() * choices.length)]);

  }
  //The join method will return finalPassword array as a string. 
  return finalPassword.join('');

}