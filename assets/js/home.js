function toggleRedHeart() {
    var heartIcon = document.getElementById('heartIcon');
    if (heartIcon.classList.contains('red-heart')) {
        heartIcon.classList.remove('red-heart');
        heartIcon.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        heartIcon.classList.add('red-heart');
        heartIcon.innerHTML = '<i class="far fa-heart" style="color: #ff003c;"></i>';
    }
}

function togglePopUp() {
    var popUp = document.getElementById("popUp");
    if (popUp.style.display === "block") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "block";
    }
}

function togglePopUp() {
    var popUp = document.getElementById("popUp");
    popUp.classList.toggle("active");
}
document.getElementById("closeIcon").addEventListener("click", function () {
    document.querySelector(".pop_up").style.display = "none";
})
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