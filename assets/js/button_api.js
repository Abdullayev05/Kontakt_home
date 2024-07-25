// function handleButtonClick(event) {
//     const clickedButton = event.target;
//     const cardsElement = document.getElementById('cards');
    
//     if (clickedButton.classList.contains('show-cards')) {
//         // Show the #cards element
//         cardsElement.classList.remove('hidden');
//     } else {
//         // Hide the #cards element
//         cardsElement.classList.add('hidden');
//     }
// }

// // Attach event listeners to all buttons
// document.querySelectorAll('.satis_buttons button').forEach(button => {
//     button.addEventListener('click', handleButtonClick);
// });



function handleButtonClick(event) {
    const clickedButton = event.target;
    const cardsElement = document.getElementById('cards');
    const noProductMessage = document.getElementById('no-product-message');
    
    if (clickedButton.classList.contains('show-cards')) {
        // Show the #cards element
        cardsElement.classList.remove('hidden');
        noProductMessage.style.display = 'none'; // Hide the message
    } else {
        // Hide the #cards element
        cardsElement.classList.add('hidden');
        noProductMessage.style.display = 'block'; // Show the message
    }
}

// Attach event listeners to all buttons
document.querySelectorAll('.satis_buttons button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});