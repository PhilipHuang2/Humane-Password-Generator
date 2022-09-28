// Assignment Code
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

  
  
  // if()
  //   if(length < ){
  //   length = prompt("Your password is")
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
