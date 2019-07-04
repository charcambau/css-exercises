var startSleep = document.querySelector('#sleepTight');
var sun = document.querySelector('.sun');
var sky = document.querySelector('.sky');
var island = document.getElementById('island');
var islandBit = document.getElementById('islandBit');
var stars = document.getElementsByClassName('stars');
var waves = document.getElementsByClassName('waves');

var leafOne = document.querySelector('#leafFarLeft');
var leafTwo = document.querySelector('#leafLeft');
var leafThree = document.querySelector('#leafMiddle');
var leafFour = document.querySelector('#leafRight');
var leafFive = document.querySelector('#leafFarRight');

var sunRays = document.getElementsByClassName('sun-ray');
var sunRayOne = document.querySelector('#sunRayOne');
var sunRayTwo = document.querySelector('#sunRayTwo');
var sunRayThree = document.querySelector('#sunRayThree');
var sunRayFour = document.querySelector('#sunRayFour');
var sunRayFive = document.querySelector('#sunRayFive');
var sunRaySix = document.querySelector('#sunRaySix');
var sunRaySeven = document.querySelector('#sunRaySeven');
var sunRayEight = document.querySelector('#sunRayEight');

startSleep.addEventListener('click', sunSet);

function sunSet () {
  sun.style.fill = '#ef8b88';
  sun.style.WebkitTransform = "translate(0px, 160px)"; 

  sky.style.fill = '#a84b83';

  island.style.setProperty('--myColorSand', '#eda200');
  islandBit.style.setProperty('--myColorSand', '#eda200');

  leafOne.style.setProperty('--myColorLeaf', '#00612c');
  leafTwo.style.setProperty('--myColorLeaf', '#00612c');
  leafThree.style.setProperty('--myColorLeaf', '#00612c');
  leafFour.style.setProperty('--myColorLeaf', '#00612c');
  leafFive.style.setProperty('--myColorLeaf', '#00612c');

  sunRayOne.style.fill = "#000";
  sunRayTwo.style.fill = "#000";
  sunRayThree.style.opacity = 0;
  sunRayFour.style.opacity = 0;
  sunRayFive.style.fill = "#000"
  sunRaySix.style.opacity = 0;
  sunRaySeven.style.opacity = 0;
  sunRayEight.style.opacity = 0;

  waves[0].style.WebkitTransform = "translate(-10px)";
  waves[1].style.WebkitTransform = "translate(-10px)";
  waves[2].style.WebkitTransform = "translate(-10px)";

  stars[0].style.opacity = 1;
  stars[1].style.opacity = 1;
  stars[2].style.opacity = 1;
  stars[3].style.opacity = 1;
  stars[4].style.opacity = 1;
  stars[5].style.opacity = 1;
  stars[6].style.opacity = 1;
  stars[7].style.opacity = 1;
  stars[8].style.opacity = 1;
  // console.log(stars);
}