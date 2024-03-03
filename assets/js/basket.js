document.getElementById("krediAy").addEventListener("input", function () {
  var secilenAy = this.value;
  document.getElementById("secilenAy").innerHTML = secilenAy;
});

document.getElementById("krediAy").addEventListener("input", function () {
  var krediAySlider = document.getElementById("krediAy");
  var krediAy = parseInt(krediAySlider.value);
  var fiyat = 2189 / krediAy;
  var fiyatGosterici = document.getElementById("fiyatGosterici");
  fiyatGosterici.textContent = fiyat.toFixed(2);
});
function toggleRedHeart(element) {
  element.classList.toggle('clicked');
}