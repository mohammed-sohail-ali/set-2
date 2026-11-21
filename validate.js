function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    alert("Bitch enter your name");
    return false;
  }
  if (email.indexOf("@") == -1) {
    alert("Please enter a valid email");
    return false;
  }
  if (message == "") {
    alert("Please enter a message");
    return false;
  }

  alert("Message sent!");
  return false;
}