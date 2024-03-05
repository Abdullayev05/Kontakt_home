document.getElementById("krediAy").addEventListener("input", function () {
  var secilenAy = this.value;
  document.getElementById("secilenAy").innerHTML = secilenAy;
});

document.getElementById("krediAy").addEventListener("input", function () {
  var krediAySlider = document.getElementById("krediAy");
  var krediAy = parseInt(krediAySlider.value);
  var fiyat = 2849 / krediAy;
  var fiyatGosterici = document.getElementById("fiyatGosterici");
  fiyatGosterici.textContent = fiyat.toFixed(2);
});
function toggleRedHeart(element) {
  element.classList.toggle('clicked');
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
$('.memory-button').click(function() {
  $('.memory-button').css({
      'background-color': '#FFFFFF',
      'border': '1px solid #E7E7E7'
  });

  $(this).css({
      'background-color': '#ff003c',
      'border': '1px solid #F58634'
  });
});