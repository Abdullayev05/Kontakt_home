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
        products.map(product => {
            const card_div = document.createElement('div');
            card_div.classList.add('card');
            card_div.innerHTML = `
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
            const imgLink = card_div.querySelector(`#product-link-${product.id}`);
            imgLink.addEventListener('click', (event) => {
                if (event.target.tagName === 'IMG') {
                    window.location.href = `detail.html?productId=${product.id}`;
                } else {
                    event.preventDefault();
                }
            });

            cards.appendChild(card_div);
        });
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    });
