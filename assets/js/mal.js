var defaultAy = 3;
document.getElementById("fiyatGosterici").textContent = (359 / defaultAy).toFixed(2) + " ₼";

var krediButtons = document.querySelectorAll(".krediButton");

krediButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var secilenAy = this.value;
        document.getElementById("secilenAy").innerHTML = secilenAy;

        var krediAy = parseInt(secilenAy);
        var fiyat = 359 / krediAy;
        var fiyatGosterici = document.getElementById("fiyatGosterici");
        fiyatGosterici.textContent = fiyat.toFixed(2) + " ₼";
    });
});

function toggleRedHeart(element) {
    element.classList.toggle('clicked');
}

function togglePopUp() {
    var popUp = document.getElementById("popUp");
    if (popUp.style.display === "block") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "block";
    }
}


$('.krediButton').click(function () {
    $('.krediButton').css({
        'background-color': '#E4E2E2',
        'color': '#4b5563'
    });
    $(this).css({
        'background-color': '#323232',
        'color': '#fff'
    });
    $('#secilenAy').text($(this).val());
});
$('#btn1').css({
    'background-color': '#323232',
    'color': '#fff'
});


const popupBtn = document.getElementById('popupBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');
const closePopup = document.getElementById('closePopup');
popupBtn.onclick = function() {
    popupOverlay.style.display = 'block';
    popupContent.style.display = 'block';
};
closePopup.onclick = function() {
    popupOverlay.style.display = 'none';
    popupContent.style.display = 'none';
};
popupOverlay.onclick = function() {
    popupOverlay.style.display = 'none';
    popupContent.style.display = 'none';
};


//  const productHTML = `
//             <div class="product_img_left_div">
//                 <div>
//                     <img src="${product.image}" alt="${product.title}">
//                 </div>
//             </div>
//             <div class="product_right_div">
//                 <div class="mehsul_kodu">
//                     <span>Məhsul mövcuddur</span>
//                     <span>SKU: ${product.model}</span>
//                 </div>
//                 <div class="price_kart">
//                     <div>
//                         <span>${product.price} ₼</span>
//                     </div>
//                 </div>
//                 <div>
//                     <span>CPU: ${product.cpu}</span>
//                 </div>
//                 <div>
//                     <span>Screen Size: ${product.screenSize}</span>
//                 </div>
//             </div>
//         `;

//         document.getElementById('product-container').innerHTML = productHTML;



function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.mal.html);
    return urlParams.get(param);
}

const productId = getQueryParam('productId');

fetch('./assets/json/card.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const product = data.products.find(p => p.id == productId);
        if (product) {
            const productDetailsDiv = document.getElementById('product-details');
            productDetailsDiv.innerHTML = `
                <h1>${product.brand} ${product.model}</h1>
                <img src="${product.image}" alt="${product.title}">
                <p>Price: ${product.price} ₼</p>
                <p>CPU: ${product.cpu}</p>
                <p>RAM: ${product.ram} GB</p>
                <p>SSD: ${product.ssd} GB</p>
                <p>Screen Size: ${product.screenSize}"</p>
            `;
        } else {
            document.getElementById('product-details').innerHTML = '<p>Product not found</p>';
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    });