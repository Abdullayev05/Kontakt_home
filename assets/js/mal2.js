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
//                 product.price.toString().toLowerCase().includes(query) ||
//                 product.brand.toLowerCase().includes(query) ||
//                 product.model.toLowerCase().includes(query)
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
//                 product.price.toString().toLowerCase().includes(query) ||
//                 product.brand.toLowerCase().includes(query) ||
//                 product.model.toLowerCase().includes(query)
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
//     resultsDiv.style.width = '1000px';
//     resultsDiv.style.height = '443px';
//     resultsDiv.style.marginTop = '50px';
//     resultsDiv.style.paddingTop = '50px';
//     resultsDiv.style.borderRadius = '10px';
//     resultsDiv.style.position = 'absolute';
//     resultsDiv.style.overflow = 'auto';
//     resultsDiv.style.border = '3px solid #323232';
//     resultsDiv.style.padding = '10px';
//     resultsDiv.style.boxSizing = 'border-box';

//     if (results.length === 0) {
//         resultsDiv.innerHTML = '<div>No results found</div>';
//     } else {
//         results.forEach(product => {
//             const cardDiv = document.createElement('div');
//             cardDiv.className = 'card';
//             cardDiv.style.border = '1px solid #ddd';
//             cardDiv.style.borderRadius = '5px';
//             cardDiv.style.marginBottom = '15px';
//             cardDiv.style.padding = '10px';
//             cardDiv.style.marginLeft = '10px';
//             cardDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
//             cardDiv.style.backgroundColor = '#fff';

//             cardDiv.innerHTML = `
//                 <a href="./assets/pages/detail.html?productId=${product.id}" id="product-link-${product.id}">
//                     <img src="${product.image}" class="card-img-top" alt="">
//                 </a>
//                 <div class="card-body">
//                     <h5 class="card-title">${product.brand} ${product.model}</h5>
//                     <div class="h3_sss">
//                         <h3 class="text_dec">
//                             <span style="margin-right: 3px;">${product.price}</span>
//                             <span>₼</span>
//                         </h3>
//                     </div>
//                     <div class="sebet_btn">
//                         <div class="card_icons">
//                             <span class="line"></span>
//                             <div class="heart_qeydiyyat">
//                                 <i id="heart" class="heart far fa-heart"></i>
//                             </div>
//                         </div>
//                         <div>
//                             <button>
//                                 <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H1.30826C2.25873 0.5 2.82782 1.13899 3.15325 1.73299C3.37016 2.12894 3.52708 2.58818 3.64982 3.00395C3.68306 3.00134 3.71674 3 3.7508 3H16.2481C17.0783 3 17.6778 3.79442 17.4502 4.5928L15.6224 11.0019C15.2856 12.1832 14.2062 12.9978 12.9779 12.9978H7.02977C5.79128 12.9978 4.7056 12.1699 4.37783 10.9756L3.61734 8.20455L2.35874 3.95578L2.3567 3.94834C2.201 3.38051 2.05487 2.85005 1.83773 2.4537C1.62686 2.0688 1.45877 2 1.30826 2H0.75C0.335786 2 0 1.66421 0 1.25ZM5.07283 7.84027L5.82434 10.5786C5.97333 11.1215 6.46682 11.4978 7.02977 11.4978H12.9779C13.5362 11.4978 14.0268 11.1275 14.18 10.5906L15.9168 4.5H4.08549L5.05906 7.78682C5.06434 7.8046 5.06892 7.82243 5.07283 7.84027ZM8.5 16C8.5 17.1046 7.60457 18 6.5 18C5.39543 18 4.5 17.1046 4.5 16C4.5 14.8954 5.39543 14 6.5 14C7.60457 14 8.5 14.8954 8.5 16ZM7 16C7 15.7239 6.77614 15.5 6.5 15.5C6.22386 15.5 6 15.7239 6 16C6 16.2761 6.22386 16.5 6.5 16.5C6.77614 16.5 7 16.2761 7 16ZM15.5 16C15.5 17.1046 14.6046 18 13.5 18C12.3954 18 11.5 17.1046 11.5 16C11.5 14.8954 12.3954 14 13.5 14C14.6046 14 15.5 14.8954 15.5 16ZM14 16C14 15.7239 13.7761 15.5 13.5 15.5C13.2239 15.5 13 15.7239 13 16C13 16.2761 13.2239 16.5 13.5 16.5C13.7761 16.5 14 16.2761 14 16Z" fill="#FFFFFF"></path>
//                                 </svg>
//                                 <span class="sebet_elavet">Səbətə əlavə et</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             cardDiv.addEventListener('click', () => {
//                 window.location.href = `./assets/pages/detail.html?productId=${product.id}`;
//             });
//             resultsDiv.appendChild(cardDiv);
//         });
//     }
// }




document.addEventListener('click', function (event) {
    const resultsDiv = document.getElementById('results');
    const searchInput = document.getElementById('search_id');

    // Check if the click was outside the results div and search input
    if (!resultsDiv.contains(event.target) && event.target !== searchInput) {
        resultsDiv.style.display = 'none'; // Hide the results
    }
});

document.getElementById('search_id').addEventListener('input', function () {
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
    resultsDiv.style.width = '1000px';
    resultsDiv.style.height = '444px';
    resultsDiv.style.marginTop = '50px';
    resultsDiv.style.paddingTop = '50px';
    resultsDiv.style.borderRadius = '10px';
    resultsDiv.style.position = 'absolute';
    resultsDiv.style.overflow = 'auto';
    // resultsDiv.style.border = '3px solid #323232';
    resultsDiv.style.padding = '10px';
    resultsDiv.style.boxSizing = 'border-box';
    resultsDiv.style.background = '#323232';
    if (results.length === 0) {
        resultsDiv.innerHTML = '<div>No results found</div>';
    } else {
        results.forEach(product => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.style.border = '1px solid #ddd';
            cardDiv.style.borderRadius = '5px';
            cardDiv.style.marginTop = '15px';
            cardDiv.style.padding = '10px';
            cardDiv.style.marginLeft = '10px';
            cardDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
            cardDiv.style.backgroundColor = '#fff';

            cardDiv.innerHTML = `
                <a href="./assets/pages/detail.html?productId=${product.id}" id="product-link-${product.id}">
                    <img src="${product.image}" class="card-img-top" alt="">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${product.brand} ${product.model}</h5>
                    <div class="h3_sss">
                        <h3 class="text_dec">
                            <span style="margin-right: 3px;">${product.price}</span>
                            <span>₼</span>
                        </h3>
                    </div>
                    <div class="sebet_btn">
                        <div class="card_icons">
                            <span class="line"></span>
                            <div class="heart_qeydiyyat">
                                <i id="heart" class="heart far fa-heart"></i>
                            </div>
                        </div>
                        <div>
                            <button>
                                <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H1.30826C2.25873 0.5 2.82782 1.13899 3.15325 1.73299C3.37016 2.12894 3.52708 2.58818 3.64982 3.00395C3.68306 3.00134 3.71674 3 3.7508 3H16.2481C17.0783 3 17.6778 3.79442 17.4502 4.5928L15.6224 11.0019C15.2856 12.1832 14.2062 12.9978 12.9779 12.9978H7.02977C5.79128 12.9978 4.7056 12.1699 4.37783 10.9756L3.61734 8.20455L2.35874 3.95578L2.3567 3.94834C2.201 3.38051 2.05487 2.85005 1.83773 2.4537C1.62686 2.0688 1.45877 2 1.30826 2H0.75C0.335786 2 0 1.66421 0 1.25ZM5.07283 7.84027L5.82434 10.5786C5.97333 11.1215 6.46682 11.4978 7.02977 11.4978H12.9779C13.5362 11.4978 14.0268 11.1275 14.18 10.5906L15.9168 4.5H4.08549L5.05906 7.78682C5.06434 7.8046 5.06892 7.82243 5.07283 7.84027ZM8.5 16C8.5 17.1046 7.60457 18 6.5 18C5.39543 18 4.5 17.1046 4.5 16C4.5 14.8954 5.39543 14 6.5 14C7.60457 14 8.5 14.8954 8.5 16ZM7 16C7 15.7239 6.77614 15.5 6.5 15.5C6.22386 15.5 6 15.7239 6 16C6 16.2761 6.22386 16.5 6.5 16.5C6.77614 16.5 7 16.2761 7 16ZM15.5 16C15.5 17.1046 14.6046 18 13.5 18C12.3954 18 11.5 17.1046 11.5 16C11.5 14.8954 12.3954 14 13.5 14C14.6046 14 15.5 14.8954 15.5 16ZM14 16C14 15.7239 13.7761 15.5 13.5 15.5C13.2239 15.5 13 15.7239 13 16C13 16.2761 13.2239 16.5 13.5 16.5C13.7761 16.5 14 16.2761 14 16Z" fill="#FFFFFF"></path>
                                </svg>
                                <span class="sebet_elavet">Səbətə əlavə et</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            cardDiv.addEventListener('click', () => {
                window.location.href = `./assets/pages/detail.html?productId=${product.id}`;
            });
            resultsDiv.appendChild(cardDiv);
        });
    }
}