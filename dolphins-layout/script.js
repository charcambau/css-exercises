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
  // console.log(e);

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
  
  
  playTimeLine(lastSlide);
  playTimeline(nextSlide);
}

function playTimeline(nextSlide) {
  console.log(nextSlide);
  function playTimeLine(lastSlide) {
    var timelineLastSlide = new TimelineLite();
  
    timelineLastSlide.to('#' + lastSlide, .8, {x:700, ease: Power1.easeOut}), "0";
    timelineLastSlide.to('#' + lastSlide + ' .blob', 2, {y:600, ease: Elastic.easeOut}, "0");
    timelineLastSlide.to('#' + lastSlide + ' .img', .5, {x:-1200, ease: Power1.easeOut}, "0");
    timelineLastSlide.to('#' + lastSlide + ' h2', 2, {scale:0, ease: Elastic.easeOut}, "0");
    timelineLastSlide.to('#' + lastSlide + ' p', 2, {scale:0, ease: Elastic.easeOut}, "0" );
    timelineLastSlide.to('#' + lastSlide + ' a', .6, {y:800, ease: Back.easeOut}, "1");
  }

  var timelineSlide = new TimelineLite();
  // timelineSlide.from('#' + lastSlide, 2, {x:-800, ease: Power1.easeOut}), "0";
  timelineSlide.from('#' + nextSlide, .8, {x:700, ease: Power1.easeOut}), "0";
  timelineSlide.from('#' + nextSlide + ' .blob', 2, {y:600, ease: Elastic.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' .img', .5, {x:-1200, ease: Power1.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' h2', 2, {scale:0, ease: Elastic.easeOut}, "0");
  timelineSlide.from('#' + nextSlide + ' p', 2, {scale:0, ease: Elastic.easeOut}, "0" );
  timelineSlide.from('#' + nextSlide + ' a', .6, {y:800, ease: Back.easeOut}, "1");

}


