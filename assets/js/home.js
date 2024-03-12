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

let heartIcon = document.getElementById('heart');
let qeydiyyatPopUp = document.querySelector('.qeydiyyat_pop_up');

heartIcon.addEventListener('click', function () {
  qeydiyyatPopUp.style.display = 'block';
});

document.querySelector('.qeydiyyat_buttn').addEventListener('click', function () {
  heartIcon.classList.add('heart_red');
  qeydiyyatPopUp.style.display = 'none';
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


const initializeSlider = () => {
  const imageList = document.querySelector(
    ".slider-container .image-grid"
  );
  const slideButtons = document.querySelectorAll(
    ".slider-container .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".slider-scrollbar"
  );
  const scrollbarThumb =
    sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;
      scrollbarThumb.style.left = `${thumbPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "previous-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initializeSlider);
window.addEventListener("load", initializeSlider);

document.getElementById('video_link').addEventListener('click', function () {
  window.open('https://youtu.be/uK2WbyJx-c4', '_blank');
});