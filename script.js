// Assignment Code
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
  function randomOutPut(xyz) {
    var mixCharacters = Math.floor(Math.random() * xyz.length)
    var ranlet = xyz[mixCharacters]

    return ranlet

  }
  // console.log("test" + randomOutPut)
  var random = []
  var newpassword = []
  var oneOfeach = []
  var firstPrompt = parseInt(
    prompt("How Many Characters Would you like your password to be? ",))

  if (
    firstPrompt < 8) {
    alert("Must be greater then 8")
    return
  }

  else if (Number.isNaN(firstPrompt)) {
    alert("must be a number")
    return
  }

  else if (firstPrompt > 128) {
    alert("Must be less then 128")
    return
  }
  else {
    confirm
  }


  var selectLowerCase = confirm("Would You like to use Lower case?")
  if (selectLowerCase) {
    random = random.concat(lowerCase)
    oneOfeach.push(randomOutPut(lowerCase))
  }


  var selectUpperCase = confirm("Would you like to use upper case?")
  if (selectUpperCase) {
    random = random.concat(upperCase)
    oneOfeach.push(randomOutPut(upperCase))

  }
  var selectSpecicalCharacters = confirm("Would you like to use specicalCharacters?")
  if (selectSpecicalCharacters) {
    random = random.concat(specicalCharacters)
    oneOfeach.push(randomOutPut(specicalCharacters))
  }
  var selectNumbers = confirm("Would you like to use a number")
  if (selectNumbers) {
    random = random.concat(numbers)
    oneOfeach.push(randomOutPut(numbers))



  }

  if (selectLowerCase === false &&
    selectNumbers === false &&
    selectUpperCase === false &&
    selectSpecicalCharacters === false) {
    alert("You must select one Character type!")
    return
  }






  for (var i = 0; i < firstPrompt; i++) {
    var randomCharacters = randomOutPut(random)

    newpassword.push(randomCharacters)

  }

  for (var i = 0; i < oneOfeach.length; i++) {
    newpassword[i] = oneOfeach[i]
  }
  console.log(newpassword)
  alert(newpassword.join(''))
  newpassword.join('')
  return newpassword.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
