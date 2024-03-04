function toggleRedHeart(event) {
    event.preventDefault();
    var icon = event.currentTarget.querySelector('.fa-heart');
    icon.classList.toggle('clicked');
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
});

function toggleRedHeart(event) {
    event.preventDefault();
}
