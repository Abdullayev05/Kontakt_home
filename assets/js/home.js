function toggleRedHeart(event) {
  event.preventDefault();
}
function togglePasswordVisibility(event) {
  event.preventDefault();
  let passwordField = document.getElementById("password");
  let toggleButton = document.getElementById("toggleButton");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "Show";
  }
}
function login(event) {
  event.preventDefault();
}
function signUp(event) {
  event.preventDefault();
}
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}