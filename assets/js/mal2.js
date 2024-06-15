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

// document.getElementById('icon').addEventListener('click', function() {
//     var square = document.createElement('div');
//     square.classList.add('square');
//     document.body.appendChild(square);
// });




// document.getElementById('search_id').addEventListener('input', function() {
//     const query = this.value.toLowerCase();
//     fetch('./assets/json/card.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const results = data.products.filter(product => 
//                 product.price.toString().toLowerCase().includes(query)
//             );
//             displayResults(results);
//         })
//         .catch(error => {
//             console.error('There was a problem fetching the data:', error);
//         });
// });

// function displayResults(results) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';
//     if (results.length === 0) {
//         resultsDiv.innerHTML = '<div>No results found</div>';
//     } else {
//         results.forEach(product => {
//             const cardDiv = document.createElement('div');
//             cardDiv.className = 'card';
//             cardDiv.innerHTML = `
//                 <a href="./assets/pages/detail.html">
//                     <img src="${product.image}" class="card-img-top" alt="${product.model}">
//                 </a>
//                 <div class="card-body">
//                     <h5 class="card-title">${product.brand} ${product.model}</h5>
//                     <div class="card-price">${product.price} ₼</div>
//                     <div class="card-icons">
//                         <button class="add-to-cart">Səbətə əlavə et</button>
//                         <i class="fa-solid fa-scale-balanced"></i>
//                         <i class="fa-solid fa-heart"></i>
//                         <i class="fa-solid fa-share-nodes"></i>
//                     </div>
//                     <div class="specs">
//                         <span>Ekran: ${product.screenSize}"</span>
//                         <span>Operativ yaddaş: ${product.RAM} GB</span>
//                         <span>Daxili yaddaş: ${product.internalStorage} GB</span>
//                     </div>
//                 </div>
//             `;
//             cardDiv.addEventListener('click', () => {
//                 window.location.href = `detail.html?productId=${product.id}`;
//             });
//             resultsDiv.appendChild(cardDiv);
//         });
//     }
// }


document.getElementById('search_id').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    fetch('./assets/json/card.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const results = data.products.filter(product => 
                product.price.toString().toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.model.toLowerCase().includes(query)
            );
            displayResults(results);
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
});

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (results.length === 0) {
        resultsDiv.innerHTML = '<div>No results found</div>';
    } else {
        results.forEach(product => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `
                <a href="./assets/pages/detail.html">
                    <img src="${product.image}" class="card-img-top" alt="${product.model}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${product.brand} ${product.model}</h5>
                    <div class="card-price">${product.price} ₼</div>
                    <div class="card-icons">
                        <button class="add-to-cart">Səbətə əlavə et</button>
                        <i class="fa-solid fa-scale-balanced"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <div class="specs">
                        <span>Ekran: ${product.screenSize}"</span>
                        <span>Operativ yaddaş: ${product.RAM} GB</span>
                        <span>Daxili yaddaş: ${product.internalStorage} GB</span>
                    </div>
                </div>
            `;
            cardDiv.addEventListener('click', () => {
                window.location.href = `detail.html?productId=${product.id}`;
            });
            resultsDiv.appendChild(cardDiv);
        });
    }
}