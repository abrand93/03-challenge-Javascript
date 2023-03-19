// Assignment Code
var lowerCase =['a', 's', 'd', 'f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p','z','x','c','v','b','n','m'] 
var upperCase = ['A','S','D','F','G','H','J','K','L','Q','W','E','R','T','Y','U','I','O','P','Z','X','C','V','B','N','M']
var specicalCharacters = [' ',',','!','"','#','$','%','&',"'",'(',')','*',',','-','.','/',':',';','<','=','>', '?','@','[',']','^','_','`','{','|','}','~']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var random = []
// Function to prompt user for password options


var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  



 var firstPrompt = parseInt(
 prompt("How Many Characters Would you like your password to be? " , ))

 if(
  firstPrompt < 8){
    alert("Must be greater then 8")
    return}
    
   else if (Number.isNaN(firstPrompt)){
    alert("must be a number")
    return }
  
  else if(firstPrompt > 128){
    alert("Must be less then 128")
    return
  }
    else{
      confirm
    }
    
    
    var selectLowerCase = confirm("Would You like to use Lower case?")
    if(selectLowerCase){
      random = random.concat(lowerCase)
    }
    
      
    var selectUpperCase = confirm("Would you like to use upper case?")
    if(selectUpperCase){
      random = random.concat(upperCase)
      
     
    }
    var selectSpecicalCharacters = confirm("Would you like to use specicalCharacters?")
    if(selectSpecicalCharacters){
      random = random.concat(specicalCharacters)
    }
    var selectNumbers = confirm("Would you like to use a number")
    if(selectNumbers){
      random = random.concat(numbers)
    }
    
    if(selectLowerCase === false &&
      selectNumbers === false && 
      selectUpperCase === false &&
      selectSpecicalCharacters === false){
        alert("You must select one Character type!")
        return
      }
     
    }
   

  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
