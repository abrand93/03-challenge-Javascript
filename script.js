// Assignment Code
// these arrays for each Character type
var lowerCase = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
var upperCase = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
var specicalCharacters = [' ', ',', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


// Function to prompt user for password options


var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





function generatePassword() {
 
  //This function randomize data allows me to use this randomizer more then once 
  function randomOutPut(xyz) {
    var mixCharacters = Math.floor(Math.random() * xyz.length)
    var ranlet = xyz[mixCharacters]

    return ranlet

  }
 
 // console.log("test" + randomOutPut)
//Empty arrays to store user data 
 var random = []
  var newpassword = []
  var oneOfeach = []
  // converting sting to a number
  var firstPrompt = parseInt(
    prompt("How Many Characters Would you like your password to be? must be greater then 8 and less then 128",))
//length must be greater than a 8 
  if (
    firstPrompt < 8) {
    alert("Must be greater then 8")
    return
  }
// has to be a number 
  else if (Number.isNaN(firstPrompt)) {
    alert("must be a number")
    return
  }
// must be less then 128
  else if (firstPrompt > 128) {
    alert("Must be less then 128")
    return
  }
  else {
    confirm
  }

// Asking if the user would like to use a lowercase Characters 
  var selectLowerCase = confirm("Would you like your password to contain a lowercase character?")
  if (selectLowerCase) {
    //if True add lowerCase characters to array 
    random = random.concat(lowerCase)
    // randomly select one of these characters and push it to oneOfeach array
    oneOfeach.push(randomOutPut(lowerCase))
  }

// Asking if the user would like to use a uppercase Character
  var selectUpperCase = confirm("Would you like your password to contain a Uppercase character? ")
  if (selectUpperCase) {
    random = random.concat(upperCase)
    oneOfeach.push(randomOutPut(upperCase))

  }
  var selectSpecicalCharacters = confirm("Would you like your password to contain a SpecicalCharacters?")
  if (selectSpecicalCharacters) {
    random = random.concat(specicalCharacters)
    oneOfeach.push(randomOutPut(specicalCharacters))
  }
  var selectNumbers = confirm("Would you like your password to contain a Number?")
  if (selectNumbers) {
    random = random.concat(numbers)
    oneOfeach.push(randomOutPut(numbers))



  }
 // if doesn't select any characters it alert the user that they must select one 
  if (selectLowerCase === false &&
    selectNumbers === false &&
    selectUpperCase === false &&
    selectSpecicalCharacters === false) {
    alert("You must select one Character type!")
    return
  }





  // this for loop randomizes all the characters and pushes them to newpassword array
  for (var i = 0; i < firstPrompt; i++) {
    var randomCharacters = randomOutPut(random)

    newpassword.push(randomCharacters)

  }
  // this for loop makes sure we have at least one of each character that the user has selected
  for (var i = 0; i < oneOfeach.length; i++) {
    newpassword[i] = oneOfeach[i]
  }
  //test 
  console.log(newpassword)
  alert(newpassword.join(''))
 // returns the function as a string 
  return newpassword.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
