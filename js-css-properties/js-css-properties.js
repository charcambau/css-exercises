var circle = document.getElementById('circle');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var back = document.getElementById('back');


blue.addEventListener('click', changeToBlue);
green.addEventListener('click', changeToGreen);
back.addEventListener('click', backToBlack);

function changeToBlue () {
  circle.style.backgroundColor = 'blue';
  circle.style.width = '250px';
  circle.style.height = '250px';
  circle.style.transition = 'all .5s ease';
}

function changeToGreen () {
  circle.style.backgroundColor = 'green';
}

function backToBlack () {
  circle.style.backgroundColor = 'black';
  circle.style.width = '150px';
  circle.style.height = '150px';
  circle.style.transition = 'all .5s ease';
}