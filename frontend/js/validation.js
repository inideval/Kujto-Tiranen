const container = document.getElementById("container");
const form = document.getElementById("login-form");
const fNameInput = document.getElementById("fName");
const lastNameInput = document.getElementById("lastName");
const phoneInput = document.getElementById("phoneNum");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageInput = document.getElementById("message");
const fNameError = document.getElementById("fNameError");
const lastNameError = document.getElementById("lastNameError");
const phoneNumError = document.getElementById("phoneNumError");
const emailError = document.getElementById("emailError");
const passwError = document.getElementById("passwordError");
const errorColorPassw = document.getElementById("errorColors");
const xIconPassw = document.getElementById("xMarkIcon");
const exlamationIconPassw = document.getElementById("exclamationIcon");
const checkIconPassw = document.getElementById("checkIcon");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isFormValid = validateFormElements();
  if (isFormValid) {
    console.log({
      name: fNameInput.value,
      lastName: lastNameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      message: messageInput.value,
    });
    container.style.border = "2px solid #38E54D";
  } else {
    container.style.border = "2px solid #FF0032";
  }
});

function validateFormElements() {
  const fNameValue = fNameInput.value;
  const lastNameValue = lastNameInput.value;
  const phoneValue = phoneInput.value;
  const emailValue = emailInput.value;
  const passwValue = passwordInput.value;

  // username
  if (fNameValue.length <= 0) {
    fNameError.innerText = "Name is required*";
    fNameError.style.color = "#FF0032";
    fNameInput.style.border = "2px solid #FF0032";
    return false;
  } else if (fNameValue.length <= 1) {
    fNameError.innerText = "Enter a valid name*";
    fNameError.style.color = "#FF0032";
    fNameInput.style.border = "2px solid #FF0032";
    return false;
  } else {
    fNameInput.style.border = "2px solid #38E54D";
    fNameError.innerText = "";
  }

  // lastName
  if (lastNameValue.length <= 0) {
    lastNameError.innerText = "Last name is required*";
    lastNameError.style.color = "#FF0032";
    lastNameInput.style.border = "2px solid #FF0032";
    return false;
  } else if (lastNameValue.length <= 1) {
    lastNameError.innerText = "Enter a valid lastname*";
    lastNameError.style.color = "#FF0032";
    lastNameInput.style.border = "2px solid #FF0032";
    return false;
  } else {
    lastNameInput.style.border = "2px solid #38E54D";
    lastNameError.innerText = "";
  }

  // phone number
  if (phoneValue.length <= 0 || phoneValue.length <= 4) {
    phoneNumError.innerText = "Enter a valid phone number*";
    phoneNumError.style.color = "#FF0032";
    phoneInput.style.border = "2px solid #FF0032";
    return false;
  } else {
    phoneInput.style.border = "2px solid #38E54D";
    phoneNumError.innerText = "";
  }
  //email
  if (emailValue.length <= 0) {
    emailError.innerText = "*Email is required";
    emailError.style.color = "#FF0032";
    emailInput.style.border = "2px solid #FF0032";
    return false;
  } else if (!emailValue.includes("@")) {
    emailError.innerText = "Email should have @ character to be vaild*";
    emailError.style.color = "#FF0032";
    emailInput.style.border = "2px solid #FF0032";
    return false;
  } else if (emailValue.length < 6) {
    emailError.innerText = "Email should be at least 6 characters*";
    emailError.style.color = "#FF0032";
    emailInput.style.border = "2px solid #FF0032";
    return false;
  } else {
    emailInput.style.border = "2px solid #38E54D";
    emailError.innerText = "";
  }

  //password
  if (passwValue.length <= 0) {
    passwError.innerText = "Password is required*";
    passwError.style.color = "#FF0032";
    passwordInput.style.border = "2px solid #FF0032";
    errorColorPassw.style.visibility = "visible";
    xIconPassw.style.visibility = "visible";
    return false;
  } else if (passwValue.length < 6) {
    passwError.innerText = "Enter a valid password*";
    passwError.style.color = "#FF0032";
    passwordInput.style.border = "2px solid #FF0032";
    errorColorPassw.style.visibility = "visible";
    xIconPassw.style.visibility = "visible";
    return false;
  } else {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(passwValue)) {
      passwError.innerText = "Your password is little secure*";
      passwError.style.color = "#fed049";
      passwordInput.style.border = "2px solid #fed049";
      errorColorPassw.style.visibility = "visible";
      xIconPassw.style.visibility = "hidden";
      exlamationIconPassw.style.visibility = "visible";
      return false;
    } else {
      passwordInput.style.border = "2px solid #38E54D";
      errorColorPassw.style.visibility = "hidden";
      exlamationIconPassw.style.visibility = "hidden";
      checkIconPassw.style.visibility = "visible";
      passwError.innerText = "";
    }
    return true;
  }
}
