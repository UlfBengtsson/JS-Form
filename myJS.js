"use strict";

var pwdInput = document.getElementById("pwd");
var pwdHasDigit = false;
var pwdHasLower = false;
var pwdHasUpper = false;
var pwdHasLength = false;

//----- functions ------------------------------------------------------------------

function checkPwd() {
  console.log("pwd keypress");
  let pwdValue = pwdInput.value;
  const regexDigit = /[0-9]/g;
  const regexLowerCase = /[a-z]/g;
  const regexUpperCase = /[A-Z]/g;

  /*
  console.log("digitRegEx:", pwdValue.match(regexDigit));
  console.log("LowerRegEx:", pwdValue.match(regexLowerCase));
  console.log("UpperRegEx:", pwdValue.match(regexUpperCase));
*/
  if (pwdValue.length >= 8) {
    pwdHasLength = true;
  } else {
    pwdHasLength = false;
  }

  if (pwdValue.match(regexDigit) != null) {
    pwdHasDigit = true;
  } else {
    pwdHasDigit = false;
  }

  if (pwdValue.match(regexLowerCase) != null) {
    pwdHasLower = true;
  } else {
    pwdHasLower = false;
  }

  if (pwdValue.match(regexUpperCase) != null) {
    pwdHasUpper = true;
  } else {
    pwdHasUpper = false;
  }

  okToLogin();
}

function okToLogin() {
  let submitBtn = document.getElementById("submitBtn");

  if (pwdHasLength && pwdHasDigit && pwdHasLower && pwdHasUpper) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

//--- Event Listeners --------------------------------------------------------------

pwdInput.addEventListener("keydown", checkPwd); //better to use keydown then keypress then it will not be one step behind the user input.
