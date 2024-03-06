(function () {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function () {
        heart.classList.toggle('red');
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    var heartIcon = document.querySelector('.red-heart');
    var popUp = document.getElementById('popUp');

    heartIcon.addEventListener('click', function () {
        popUp.style.display = 'block';
    });
});

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

let heartIcon = document.getElementById('heart');
let qeydiyyatPopUp = document.querySelector('.qeydiyyat_pop_up');

heartIcon.addEventListener('click', function() {
    qeydiyyatPopUp.style.display = 'block';
});

document.querySelector('.qeydiyyat_buttn').addEventListener('click', function() {
    heartIcon.classList.add('heart_red');
    qeydiyyatPopUp.style.display = 'none';
});