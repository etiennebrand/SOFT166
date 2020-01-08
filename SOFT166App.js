const minLength = 8;

var num = {};
num.Letters = 0;
num.Numbers = 0;
num.Symbols = 0;
var strengthScore;

var lightColour;


function test(lightID, lightColour) {

  var password = document.getElementById("inputPassword");
  var baseScore;

  if (password.value.length < 8) {


    window.alert("The password entered is too short.");
    switchLightOn(6, lightColour = 0);


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

  if (strengthScore < 100) {
    //document.getElementById("result").innerHTML = "Password is very weak"
    alert("Password is very weak");
    switchLightOn(5, 0);
  }
  if (strengthScore >= 100 && strengthScore < 150) {
    //document.getElementById("result").innerHTML = "Password is average"
    alert("Password is average");
    switchLightOn(2, 7500);
  }
  if (strengthScore >= 150 && strengthScore < 200) {
    //document.getElementById("result").innerHTML = "Password is strong"
    alert("Password is strong");
    switchLightOn(4, 13000);
  }
  if (strengthScore >= 200) {
    //document.getElementById("result").innerHTML = "Password is very secure"
    alert("Password is very secure");
    switchLightOn(1,  25500);
  }
  var meter = document.getElementById("meter");
  meter.value = strengthScore;
}
function clear()
{
  document.getElementById("inputPassword").value="";
}


function switchLightOff(lightID)  //This function takes a light ID number.  It then switches the given light on or off.
{
  var lightCommand = {"on": false}; //this creates a string of  { "on" : false }
  var lightURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + lightID + "/state/";

  $.ajax({
    url: lightURI,  //calls function getLightURI (see below) and passes the required light ID
    type: "PUT",
    data: JSON.stringify(lightCommand)  //translates contents of lightCommand variable into jSON code
  })
}


function switchLightOn(lightID, lightColour) {
  var lightCommand = {"on": true, "hue": (lightColour), "bri":250}; //replace 25500 with the different colours?
  var lightURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + lightID + "/state/";


  console.log(lightCommand);
  console.log(lightURI);

  $.ajax({
    url: lightURI,
    type: "PUT",
    data: JSON.stringify(lightCommand)
  })
}
