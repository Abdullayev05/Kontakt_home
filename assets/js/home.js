(function () {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function () {
    heart.classList.toggle('red');
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  var heartIcon = document.querySelector('.red-heart');
  var popUp = document.getElementById('popUp');

  // heartIcon.addEventListener('click', function () {
  //   popUp.style.display = 'block';
  // });
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
document.getElementById("two_close_icon").addEventListener("click", function () {
  document.querySelector(".qeydiyyat_pop_up").style.display = "none";
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
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
let heartIcon = document.getElementById('heart');
let qeydiyyatPopUp = document.querySelector('.qeydiyyat_pop_up');

heartIcon.addEventListener('click', function () {
  qeydiyyatPopUp.style.display = 'block';
});

document.querySelector('.qeydiyyat_buttn').addEventListener('click', function () {
  heartIcon.classList.add('heart_red');
  qeydiyyatPopUp.style.display = 'none';
});

$('#btn1').css({
  'background-color': '#323232',
  'color': '#fff'
});

$('.satis_lideri button').click(function () {
  $('.satis_lideri button').css({
    'background-color': '#E4E2E2',
    'color': '#4b5563'
  });

  $(this).css({
    'background-color': '#323232',
    'color': '#fff'
  });
});

function updateTimer() {
  let hours = parseInt(document.getElementById('hours').textContent);
  let minutes = parseInt(document.getElementById('minutes').textContent);
  let seconds = parseInt(document.getElementById('seconds').textContent);
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        clearInterval(timerInterval);
        return;
      } else {
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      }
    }
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  }
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();



document.getElementById('video_link').addEventListener('click', function () {
  window.open('https://youtu.be/uK2WbyJx-c4', '_blank');
});

