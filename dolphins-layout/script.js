var toNextSlideTwo = document.getElementById('nextSlideTwo');
toNextSlideTwo.addEventListener('click', nextSlideTwo);

function nextSlideTwo() {
  console.log('yup');

  document.getElementById('palm').style.display = 'grid';
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('earth').style.display = 'none';

  myAnimTwo = TweenLite.from('#palm', .3, {x:600, delay:0, ease: Power1.easeOut});

  myAnimTwo = TweenLite.from('.island-blob', 2, {y:600, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('.island-img', .5, {x:-800, delay:0, ease: Power1.easeOut});
  myAnimTwo = TweenLite.from('#palmTitle', 1, {scale:1.8, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('#palmText', 1, {scale:1.5, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('#palm-link', .6, {y:800, delay:.6, ease: Back.easeOut});

}

var toNextSlideThree = document.getElementById('nextSlideThree');
toNextSlideThree.addEventListener('click', nextSlideThree);

function nextSlideThree() {
  console.log('yes');

  document.getElementById('earth').style.display = 'grid';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'none';

  myAnimThree = TweenLite.from('#earth', .3, {x:600, delay:0, ease: Power1.easeOut});

  myAnimThree = TweenLite.from('.earth-blob', 2, {y:600, delay:0, ease: Elastic.easeOut});
  myAnimThree = TweenLite.from('.earth-img', .5, {x:-800, delay:0, ease: Power1.easeOut});
  myAnimThree = TweenLite.from('#earthTitle', 1, {scale:1.8, delay:0, ease: Elastic.easeOut});
  myAnimThree = TweenLite.from('#earthText', 1, {scale:1.5, delay:0, ease: Elastic.easeOut});
  myAnimThree = TweenLite.from('#earthLink', .6, {y:800, delay:.6, ease: Back.easeOut});

}

var toNextSlideOne = document.getElementById('nextSlideOne');
toNextSlideOne.addEventListener('click', nextSlideOne);

function nextSlideOne() {
  console.log('si');

  document.getElementById('earth').style.display = 'none';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'grid';

  myAnimOne = TweenLite.from('#dolphin', .3, {x:600, delay:0, ease: Power1.easeOut});

  myAnimOne = TweenLite.from('.dolphin-blob', 2, {y:600, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('.dolphin-img', .5, {x:-800, delay:0, ease: Power1.easeOut});
  myAnimOne = TweenLite.from('#dolphinTitle', 1, {scale:1.8, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('#dolphinText', 1, {scale:1.5, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('#dolphin-link', .6, {y:800, delay:.6, ease: Back.easeOut});
}