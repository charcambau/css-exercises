var dotClicked;

var toNextSlideTwo = document.getElementById('nextSlideTwo');
toNextSlideTwo.addEventListener('click', nextSlideTwo);
=======
// VARIABLES
var btnClicked;
var nextSlide;
var lastSlide = "dolphin";
var btnOne = document.getElementById('btn-dolphin');
var btnTwo = document.getElementById('btn-palm');
var btnThree = document.getElementById('btn-earth');

// EVENT LISTENERS
btnOne.addEventListener('click', changeSlide);
btnTwo.addEventListener('click', changeSlide);
btnThree.addEventListener('click', changeSlide);

// SIMPLIFIED
// assign the same function to all buttons

function changeSlide(e) {
  nextSlide = e.target.dataset.name;
  // if the statement is true
  if ( lastSlide == nextSlide) {
    // return exits (ends) the function
    // the code after (show, hide,..) doesn't get executed
    return;
  }
  // SHOW
  document.getElementById(nextSlide).style.display = 'grid';
  document.getElementById('btn-'+nextSlide).style.backgroundColor = "#2896E0";
  // HIDE
  document.getElementById(lastSlide).style.display = 'none';
  document.getElementById('btn-'+lastSlide).style.backgroundColor = "#BEFCFE";
  //SAVE
  lastSlide = nextSlide;
  
  playTimeline(nextSlide);
>>>>>>> 5670e6ddf03dca1f922cd62a3084156a40ecef3d

function nextSlideTwo() {
  console.log('yup');

}

function playTimeline(nextSlide) {
  console.log(nextSlide);

  var timelineSlide = new TimelineLite();
  timelineSlide.from('#' + nextSlide, .3, {x:600, ease: Power1.easeOut});
  timelineSlide.from('#' + nextSlide + ' .blob', 2, {y:600, ease: Elastic.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' .img', .5, {x:-800, ease: Power1.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' h2', 1, {scale:1.8, ease: Elastic.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' p', 1, {scale:1.5, ease: Elastic.easeOut}, "0" );
  timelineSlide.from('#' + nextSlide + ' a', .6, {y:800, ease: Back.easeOut}, "0.5");
}

// FUNCTIONS
function nextSlideOne() {
  document.getElementById('earth').style.display = 'none';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'grid';

}
function nextSlideTwo() {
  document.getElementById('palm').style.display = 'grid';
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('earth').style.display = 'none';

  myAnimTwo = TweenLite.from('#palm', .3, {x:600, delay:0, ease: Power1.easeOut});

  myAnimTwo = TweenLite.from('.island-blob', 2, {y:600, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('.island-img', .5, {x:-800, delay:0, ease: Power1.easeOut});
  myAnimTwo = TweenLite.from('#palmTitle', 1, {scale:1.8, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('#palmText', 1, {scale:1.5, delay:0, ease: Elastic.easeOut});
  myAnimTwo = TweenLite.from('#palm-link', 1, {y:500, delay:.6, ease: Back.easeOut});
}

function nextSlideThree() {
  document.getElementById('earth').style.display = 'grid';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'none';

  
  btnClicked = toNextSlideThree;

  // var dotThree = document.getElementsByClassName('dot-three');

  // dotClicked = nextSlideThree;

  // if (dotClicked) {
  //   dotClicked.style.color = 'red';

}



  myAnimOne = TweenLite.from('.dolphin-blob', 2, {y:600, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('.dolphin-img', .5, {x:-800, delay:0, ease: Power1.easeOut});
  myAnimOne = TweenLite.from('#dolphinTitle', 1, {scale:1.8, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('#dolphinText', 1, {scale:1.5, delay:0, ease: Elastic.easeOut});
  myAnimOne = TweenLite.from('#dolphin-link', 1, {y:500, delay:.6, ease: Back.easeOut});

}

