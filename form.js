function printErrMsg(elementId, msg) {
  document.getElementById(elementId).innerHTML = msg;
}

// defining function to validate form
function validateForm() {
  // retrieving the values of form elements
  let userName = document.getElementsByName("userName").value;
  let email = document.getElementsByName("email").value;
  let country = document.getElementsByName("country").value;
  let pinCode = document.getElementsByName("pincode").value;
  let password = document.getElementsByName("password").value;
  let confirPassword = document.getElementsByName("confirm_password").value;

  let nameErr = (emailErr = countryErr = pinErr = true);
  // username validate
  if (userName === "") {
    printErrMsg("nameErr", "please enter your name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(userName) === false) {
      printErrMsg("nameErr", "please enter a valid name");
    } else {
      printErrMsg("nameErr", "");
      nameErr = false;
    }
  }

  // email validate
  if (email === "") {
    printErrMsg("emailErr", "please enter your email address");
  } else {
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printErrMsg("emailErr", "please enter a valid email");
    } else {
      printErrMsg("emailErr", "");
      emailErr = false;
    }
  }

  //   country validate
  if (country === "Select") {
    printErrMsg("countryErr", "please enter your country");
  } else {
    printErrMsg("countryErr", "");
    countryErr = false;
  }
}

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", validateForm);
