// Assignment code here
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");



var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  Number: getRandomNumber,
  Symbol: getRandomSymbol
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateEl.addEventListener("click", () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, hasUpper, hasNumber, hasSymbol
    );

  console.log(typeof length)
});
function generatePassword(lower, upper, number, symbol, length) {

  let generatePassword ="";

  var typesCount = lower + upper + number + symbol;

  console.log("typesCount: ", typesCount);

  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (item =>Object.values(item)[0]
  );

  console.log("typesArr: ", typesArr);

  if(typesCount===0) {
    return "";

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];

        finalPassword += randomFunc[funcName]();
      });
    }
  }

  var finalPassword = finalPassword(0, length);
}


