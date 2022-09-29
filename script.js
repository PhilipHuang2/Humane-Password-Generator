// Assignment Code
var lowerCaseArr = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var upperCaseArr = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numericArr = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
var specialCharArr = [
  " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
  "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^",
  "_", "`", "{", "|", "}", "~"
];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Initialize generatePassword
function generatePassword()
{
  var length = prompt("Please enter the length of your intended password between 8 and 128 characters.","10");
  
  var validInput = false;
  
  // Keep prompting the user to input a valid input until they do
  // this loop will loop at least once
  do {
    //Parseint calculations
    // non number ->>> Nan (still a number but a Falsey Value)
    // number -> number version of the string
    length = parseInt(length);
    console.log(length);
    console.log(typeof(length));
    // Checking if the input is a number(IE. if Nan, then retry prompt)
    if(!length)
      length = prompt("That is not a number. Please enter a password length between 8 and 128.", "10");
    else if (length < 8)
      length = prompt("That password is too short.  Please enter a password length between 8 and 128.", "10");
    else if (length > 128)
      length = prompt("That password length is too long.  Please enter a password length between 8 and 128.", "10");
    else
      // ends the loop
      validInput = true;
  } while(!validInput)

  console.log("We did it!");

  //Object to hold all parameter that the user wants.
  var parameter = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialChar: false
  }

  // Establish parameters under which the password will be constructed from.
  parameter.lowercase = confirm("Do you want your password to contain lowercase characters?");
  parameter.uppercase = confirm("Do you want your password to contain uppercase characters?");
  parameter.numeric = confirm("Do you want your password to contain numbers?");
  parameter.specialChar = confirm("Do you want your password to contain special characters?");
  console.log(parameter);

  // While there is no parameters are true, reprompt the user to enter the parameters.
  while(!(parameter.lowercase || parameter.uppercase || parameter.numeric || parameter.specialChar))
  {
    alert("Please select at least one parameter to populate your password with.");
    parameter.lowercase = confirm("Do you want your password to contain lowercase characters?");
    parameter.uppercase = confirm("Do you want your password to contain uppercase characters?");
    parameter.numeric = confirm("Do you want your password to contain numbers?");
    parameter.specialChar = confirm("Do you want your password to contain special characters?");
  }

  // create an array to hold all the possible elements the password can hold
  var fullArray = [];
  if(parameter.lowercase)
    fullArray = fullArray.concat(lowerCaseArr);
  if(parameter.uppercase)
    fullArray = fullArray.concat(upperCaseArr);
  if(parameter.numeric)
    fullArray = fullArray.concat(numericArr);
  if(parameter.specialChar)
    fullArray = fullArray.concat(specialCharArr);
  console.log(fullArray);

  var password = "";
  for(var newChar = 0; newChar < length; newChar++)
  {
    password = password.concat(fullArray[Math.floor(Math.random() * fullArray.length)]);
  }
  return password;
}

function parseConfirmation (userInput) {
  userInput = userInput.toLower
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
