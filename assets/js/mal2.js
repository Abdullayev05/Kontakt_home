// const data_card = document.querySelector(".cards"); // Düzgün seçici istifadə olunur
// fetch('./assets/json/card.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const products = data.products; // Məhsulları JSON-dan əldə edirik
//         products.map(product => {
//             const img = document.createElement('img');
//             data_card.append(img);
//             img.setAttribute("src", product.image); // Image üçün src atributu təyin olunur
//             img.setAttribute("alt", product.title); // Məhsul başlığı üçün alt atributu təyin olunur
//             img.addEventListener("click", () => {
//                 window.location.href = "mal.html";
//             });
//         });
//     })
//     .catch(error => {
//         console.error('There was a problem fetching the data:', error);
//     });

document.getElementById('icon').addEventListener('click', function() {
    var square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
});