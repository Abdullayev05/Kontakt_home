function toggleRedHeart(event) {
    event.preventDefault(); // Bağlantının varsayılan davranışını engelle
    var icon = event.currentTarget.querySelector('.fa-heart'); // Bağlantı içindeki ikonu al
    icon.classList.toggle('clicked'); // 'clicked' sınıfını ekle/çıkar
}