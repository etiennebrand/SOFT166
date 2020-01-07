const minLength = 8;

var num = {};
num.Letters = 0;
num.Numbers = 0;
num.Symbols = 0;
var strengthScore;

function test() {

  var password = document.getElementById("inputPassword");
  var baseScore;

  if (password.value.length < 8) {
    document.getElementById("result").innerHTML = "Password too Short";
    window.alert("The password entered is too short.");
  } else {
    baseScore = 50;
  }

  var passwordlength = password.value.length;
  var lengthBonus = 0;
  var complexityScore = 0;

  var numbers = /[0-9]/g;
  var numberPresent = false;

  var upperCharacters = /[A-Z]/g;
  var upperCasePresent = false;

  var lowerCharacters = /[a-z]/g;
  var lowerCasePresent = false;

  var symbols = /[!@£#$%&?{}~_-]/g;
  var symbolsPresent = false;

  lengthBonus = (passwordlength - minLength) * 3;

  if (password.value.match(numbers)) {
    numberPresent = true;
  } else {
    numberPresent = false;
  }

  if (password.value.match(upperCharacters)) {
    upperCasePresent = true;
  } else {
    upperCasePresent = false;
  }

  if (password.value.match(lowerCharacters)) {
    lowerCasePresent = true;
  } else {
    lowerCasePresent = false;
  }

  if (password.value.match(symbols)) {
    symbolsPresent = true;
  } else {
    symbolsPresent = false;
  }

  if (upperCasePresent) {
    complexityScore = complexityScore + 35;
  }
  if (lowerCasePresent) {
    complexityScore = complexityScore + 35;
  }
  if (numberPresent) {
    complexityScore = complexityScore + 35;
  }
  if (symbolsPresent) {
    complexityScore = complexityScore + 35;
  }

  var strengthScore;

  strengthScore = baseScore + lengthBonus + complexityScore;

  alert(strengthScore);

  if (strengthScore < 100) {
      //document.getElementById("result").innerHTML = "Password is very weak"
      alert("Password is very weak")
  }
  if (strengthScore >= 100 && strengthScore < 150) {
      //document.getElementById("result").innerHTML = "Password is average"
      alert("Password is average")
  }
  if (strengthScore >= 150 && strengthScore < 200) {
      //document.getElementById("result").innerHTML = "Password is strong"
      alert("Password is strong")
  }
  if (strengthScore >= 200) {
      //document.getElementById("result").innerHTML = "Password is very secure"
      alert("Password is very secure")
  }
}
function clear()
{
  document.getElementById("inputPassword").value="";
}

