const images = [
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/hissoppo_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/xaxaxas_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/KH2024_Advertising_Single-post_Sevindir_n09-saatlar_1080x11231234_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/web_1x1_3_.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/Artboard_78_copy_8_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/KH_2024_Single_post_019_samsung_artiq_satishda_1080x1080_jpg.webpaz_1_jpg.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/tel_az_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/Artboard_92_copy_2_13__1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/Artboard_92_copy_2_7_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/Artboard_78_copy_9_3_copy_8_2_1_jpg.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/smartsaat_az_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/tv_az_1.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/squareurbanista_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/newhuaweisquarebanner_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/Ashley_web_AZ.png?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/iphone_15_pro_az_2779_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/1080x1080_az_1__1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/macbook_az_1849_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/az_14_3x_3x_1.jpg?format=pjpg",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/squareairpods_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/amasty/webp/dinarys/banner/images/1x1_8_mart_1_png.webp",
        "alt": ""
    },
    {
        "src": "https://kontakt.az/media/dinarys/banner/images/az_14_3x_3x_1.jpg?format=pjpg",
        "alt": ""
    }
];
const swiperWrapper = document.getElementById('swiper-wrapper');
images.forEach(image => {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
});
new Swiper('.swiper1', {
    slidesPerView: "1.5",
    spaceBetween: 113,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});