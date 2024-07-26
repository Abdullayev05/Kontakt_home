function togglePopUp() {
    var popUp = document.getElementById("popUp");
    if (popUp.style.display === "block") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "block";
    }
  }
  
  function togglePopUpClass() {
    var popUp = document.getElementById("popUp");
    popUp.classList.toggle("active");
  }
  
  document.getElementById("closeIcon").addEventListener("click", function () {
    document.querySelector(".pop_up").style.display = "none";
  });
  
  document.getElementById("two_close_icon").addEventListener("click", function () {
    document.querySelector(".qeydiyyat_pop_up").style.display = "none";
  });
  