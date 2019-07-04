var rays = document.getElementsByClassName('sun-rays');
var bgSun = document.getElementsByClassName('bg');
var sunnies = document.getElementsByClassName('sunglasses');
var animateTan = document.getElementById('tanTime');
animateTan.addEventListener('click', tan);

function tan () {
  rays[0].style.transform = "scale(4)";

  sunnies[0].style.tranform = "scale(2)";

}