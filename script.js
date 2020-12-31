// Assignment Code
// Create variables holding choices

var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['@', '%', '+', '\\',
  ',',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]
// GIVEN I need a new, secure password
// need a button or link to get a new password
// need to show the password on the page
function getPwCriteria(){
  //variable to store user input for the length of password
  var length = parseInt(prompt("How lond to you want your password to be?"));

  //Conditional to check if input is a number. If false, prompt ends. 
  if(isNaN(length) === true ){
    alert("Please enter a valid number");
    return;
  }
  //conditional to check if user input at least 8 characters
    if(lenght < 8){
      alert("Please enter at least 8 characters");
      return;
    }

    //conditional to check if user input at is greater then 128 characters
    if(lenght > 128){
      alert("Please enter at less then 128 characters");
      return;
    }
    //Variable to store boolean to include lower case or not. 
    var hasLowerCase = confirm("Click Ok to confirm including lower case charactes");

    //Variable to store boolean to include upper case or not. 
    var hasUpperCase = confirm("Click Ok to confirm including upper case charactes");

    //Variable to store boolean to include numbers or not. 
    var hasNumbers = confirm("Click Ok to confirm including numbers");

    //Variable to store boolean to include special characters or not. 
    var hasSpecialCharacters = confirm("Click Ok to confirm including special charactes");

    // Conditoinal to validate user chose at least one character type.
    if(
      hasLowerCase === false &&
      hasUpperCase === false &&
      hasNumbers === false &&
      hasSpecialCharacters === false
    ) {
      alert("You must choose at leaset one character");
      return;
    }
    var pwCriteria {
      lenght: lenght,
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasNumbers,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumbers:hasNumbers
    };
    return pwCriteria;
  }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  var password = generatePassword(){
    
  };
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;






  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password



  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // We have to ask the user for how many characters they want in the password
  // We have to check to make sure it is between 8 and 128 characters otherwise we tell the user
  // otherwise, we tell user to fix their input. 


  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  //confirm if they want lowercase
  //confirm if they want uppercase
  //confirm if they want numeric
  //confirm if they want special characters

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // we need to show an error if ga e us no characters to choose from


  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // from all the chracters chosen, choose one randomely and add it to our password X number of times
  //



}
//******************************* function here*******************************/
//write a function called generate password which will have a series of prompts
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);