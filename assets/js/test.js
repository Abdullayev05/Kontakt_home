// fetch('./assets/json/card.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem fetching the data:', error);
//     });

fetch('./assets/json/card.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cards = document.getElementById('cards');
            const products = data.products;

            products.forEach(product => {
                const card_div = document.createElement('div');
                card_div.classList.add('card');
                card_div.innerHTML = `
                    <a href="#">
                        <img src="${product.image}" class="card-img-top" alt="">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${product.brand} ${product.model}</h5>
                        <div class="h3_sss">
                            <h3 class="text_dec">${product.price}</h3>
                            <h3 class="one_price">${product.discountedPrice}</h3>
                        </div>
                        <div class="ekran_yaddas">
                            <span>Ekran: <em>${product.screenSize}"</em></span>
                            <span>Operativ yaddaş: <em>${product.RAM} GB</em></span>
                            <span>Daxili yaddaş: <em>${product.internalStorage} GB</em></span>
                        </div>
                    </div>
                `;
                cards.appendChild(card_div);
            });
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });