document.addEventListener("DOMContentLoaded", function() {
    const leftDiv = document.querySelector(".left_div");
    const swiper = document.querySelector(".swiper");
    const rightDiv = document.querySelector(".right_div");

    leftDiv.addEventListener("mouseenter", function() {
        swiper.style.visibility = "hidden";
        rightDiv.style.visibility = "hidden";
    });

    leftDiv.addEventListener("mouseleave", function() {
        swiper.style.visibility = "visible";
        rightDiv.style.visibility = "visible";
    });

    swiper.addEventListener("mouseenter", function() {
        swiper.style.visibility = "visible";
        rightDiv.style.visibility = "visible";
    });

    rightDiv.addEventListener("mouseenter", function() {
        swiper.style.visibility = "visible";
        rightDiv.style.visibility = "visible";
    });
});
