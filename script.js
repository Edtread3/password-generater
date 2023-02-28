// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['@','#','!','%','$','&','/','*'];


// adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
 

function generatePassword() {
  
  
   var userOptions = [];
 // console.log(userOptions) //here is full array
  
  var userChoice = window.prompt("Please select how many characters you'd like the length of your password to be: No less than 8 and No more than 128 .");
    
    if (isNaN(userChoice) || userChoice < 8 || userChoice > 128) {
      alert("The Characters length must be a number, and have no less than 8, and no more than 128. Try again please.");
      return "Doesn't meet digits or length criteria."; 
    }
    console.log(userChoice) //the number the user input

  // prompts to confirm yes or no for each character type
    if (confirm("Would you like to select lowercase characters for your password?")){
        userOptions = userOptions.concat(lowerCase);
        console.log(userOptions)
    }
    if (confirm("Would you like to select uppercase characters for your password?")){
        userOptions = userOptions.concat(upperCase);
        console.log(userOptions)
    }
    if (confirm("Would you like to select any numbers for your password?")){
        userOptions = userOptions.concat(numeric);
        console.log(userOptions)
    }
    if (confirm("Would you like to select special characters for your password?")){
        userOptions = userOptions.concat(specialChar);
        console.log(userOptions)
    }
    else {
      alert("Sorry but atleast one character type has to be chosen!"); //Alerts user if not one character type is chosen
      return "Please Try Again"
    }
    var password = []
    for (var i = 0; i < userChoice; i++) {
      var randomNumber = Math.floor(Math.random() * userOptions.length)
      password.push(userOptions[randomNumber])
     console.log (userOptions[Math.floor(Math.random() * userOptions.length)]);
    }
    // adding new variable to password that will turn my password array into one string
    var stringPassword = password.join('')
    console.log(password)
    return stringPassword
  
}
  
  
  

