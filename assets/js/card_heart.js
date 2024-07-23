const container = document.getElementById('cards-container'); 
container.addEventListener('click', (event) => { 
    if (event.target && event.target.classList.contains('heart')) {
        togglePopUp();
    }
});
function togglePopUp() {
    const popUps = document.querySelectorAll('.qeydiyyat_pop_up');
    popUps.forEach(popUp => {
        if (popUp.style.display === 'block') {
            popUp.style.display = 'none';
        } else {
            popUp.style.display = 'block';
        }
    });
}


 // Function to toggle popup visibility
 function togglePopUp() {
    const popUp = document.getElementById('popUp');
    popUp.style.display = popUp.style.display === 'none' ? 'block' : 'none';
  }

  // Event listener for heart icon click
  document.getElementById('heart').addEventListener('click', togglePopUp);