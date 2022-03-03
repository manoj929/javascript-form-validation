function printMsg(elementId, msg) {
  document.getElementById(elementId).innerHTML = msg;
}

// defining function to validate form
function validateForm() {
  // retrieving the values of form elements
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let pinCode = document.getElementById("pincode").value;
  let password = document.getElementById("password").value;
  let confirPassword = document.getElementById("confirm_password").value;
}
