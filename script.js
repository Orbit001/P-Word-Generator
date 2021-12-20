
function generatePassword() {
  var length = Number(prompt("Desired password length?"));
  if(length < 8) {
    alert("Too low! Must be between 8-128!")
    var length = Number(prompt("Desired password length?"));
  } else if(length > 128) {
    alert("Too high! Must be between 8-128!")
    var length = Number(prompt("Desired password length?"));
  }else{
  var charType = prompt("Any preference? (special, numeric, uppercase, lowercase and random.)");
  }
 

  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "random" ) {
    charSet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!0123456789\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  document.getElementById("password").value = (retVal);
  return retVal;
};
document.getElementById("generate").addEventListener("click", function(){
generatePassword();
});
