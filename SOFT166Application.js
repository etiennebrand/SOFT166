var inputPassword;
var minLength = 8;
var lengthScore = 0, totalScore = 0;
var characterArray;
var num = {};
var multiplier = {};
var output = $("#result");

function test()
{
  if (inputPassword.length >= minLength)
  {
    lengthScore = 50;
    analysePassword();
    calculateScore();
  }
  else
  {
    lengthScore = 0;
  }

  displayStrength();
}

function analysePassword()
{
  num.excessLength = 0;
  num.upperCase = 0;
  num.numbers = 0;
  num.symbols = 0;

  multiplier.excessLength = 5;
  multiplier.upperCase = 3;
  multiplier.numbers = 4;
  multiplier.symbols = 5;
  multiplier.combination = 0;

  for (i=0; i<characterArray.length; i++)
  {
    if (characterArray[i].match(/[A-Z]/g)) {num.upperCase++};
    if (characterArray[i].match(/[0-9]/g)) {num.numbers++};
    if (characterArray[i].match(/(.*[!@£$%&*?])/)) {num.symbols++};
  }
  num.excessLength = characterArray.length - minLength;

  if (num.upperCase && num.numbers && num.symbols)
  {
    multiplier.combination = 50;
  }
  else if ((num.upperCase && num.numbers) || (num.upperCase && num.symbols) || (num.numbers && num.symbols))
  {
    multiplier.combination = 30;
  }
}

function calculateScore()
{
  totalScore = lengthScore + (num.excessLength * multiplier.excessLength) + (num.upperCase * multiplier.upperCase)
  + (num.numbers * multiplier.numbers) + (num.symbols * multiplier.symbols) + multiplier.combination;
}

function displayStrength()
{
  if (characterArray.length < minLength)
  {
    output("Password is too short!");
  }
  else if (totalScore >= 50 && totalScore < 75)
  {
    output("Password is weak!");
  }
  else if (totalScore >= 75 && totalScore < 100)
  {
    output("Password is average!");
  }
  else if (totalScore >= 100)
  {
    output("Password is secure!");
  }
}



