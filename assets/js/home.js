(function () {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function () {
        heart.classList.toggle('red');
    });
})();

function togglePopUp() {
    var popUp = document.getElementById("popUp");
    if (popUp.style.display === "block") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "block";
    }
}

// Bu funksiya üçün HTML kodundakı onclick funksiyası ilə əlaqəlidir.
function login(event) {
    // Bu funksiyanın istifadəsi burada göstərilmir.
}

// Bu funksiya üçün HTML kodundakı onclick funksiyası ilə əlaqəlidir.
function signUp(event) {
    // Bu funksiyanın istifadəsi burada göstərilmir.
}

// Bu funksiya üçün HTML kodundakı onclick funksiyası ilə əlaqəlidir.
function togglePasswordVisibility(event) {
    // Bu funksiyanın istifadəsi burada göstərilmir.
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

