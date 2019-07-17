var navigation = document.getElementById('nav');
var fullMenu = document.getElementById('fullMenu');
var header = document.getElementById('header');
var logo = document.getElementById('h1');
var cart = document.getElementById('cart');
var lineTop = document.getElementById('lineOne');
var lineBottom = document.getElementById('lineTwo');
var buttonShop = document.getElementById('buttonShop');
var menuShop = document.getElementById('menuShop');
var title = document.getElementById('h1');


navigation.addEventListener('click', openMenu);
buttonShop.addEventListener('click', unfoldShop);
h1.addEventListener('click', goBack);

function openMenu() {
  fullMenu.style.display = 'block';

  header.style.background = '#fffef3';
  logo.style.color = 'black';
  cart.style.backgroundColor = 'black';
  lineTop.style.backgroundColor = 'black';
  lineTop.style.transform = 'rotate(45deg)'
  lineBottom.style.backgroundColor = 'black';
  lineBottom.style.transform = 'rotate(-45deg)';
  navigation.style.transform = 'translateX(-100)';


  TweenMax.to('#shop', .3, {x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#read', .3, {delay: .3, x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#visit', .3, {delay: .4,x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#search', .3, {delay: .5, x: 20, opacity: 1, ease: Power1.easeOut});
}

function unfoldShop() {
  menuShop.style.display = 'block'

  TweenMax.to('#shop', .3, {x: -20, opacity: 0, ease: Power1.easeOut});
  TweenMax.to('#read', .3, {x: -20, opacity: 0, ease: Power1.easeOut});
  TweenMax.to('#visit', .3, {x: -20, opacity: 0, ease: Power1.easeOut});
  TweenMax.to('#search', .3, {x: -20, opacity: 0, ease: Power1.easeOut});

  TweenMax.to('#skin', .3, {x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#hair', .3, {delay: .4, x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#body', .3, {delay: .5,x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#fragrance', .3, {delay: .6,x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#home', .3, {delay: .7,x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#kitsAndTravel', .3, {delay: .8,x: 20, opacity: 1, ease: Power1.easeOut});
  TweenMax.to('#gifts', .3, {delay: .9,x: 20, opacity: 1, ease: Power1.easeOut});  
}

function goBack() {
  fullMenu.style.display = 'none';
  menuShop.style.display = 'none';

  header.style.background = 'url(images/aesop-hero-img.jpg)';
  logo.style.color = '#F6F5E9';
  cart.style.backgroundColor = '#F6F5E9';
  lineTop.style.backgroundColor = '#F6F5E9';
  lineTop.style.transform = 'rotate(0deg)'
  lineBottom.style.backgroundColor = '#F6F5E9';
  lineBottom.style.transform = 'rotate(0deg)';
  navigation.style.transform = 'translateX(0)';
}

