
// VARIABLES //

// storing the animated elements in variables. const because they won't need to change
  // constant for the animation on the top yellow anim
const yellowTop = document.getElementById('yellowTop');
  // constants for the animation on the big red square animation
const redBottom = document.getElementById('redBottom');
const whiteMoveRed = document.getElementById('whiteBigRed');
  // constants for the animation on the bottom blue rectangle
const blueBottom = document.getElementById('blueBottom');
const whiteMoveBlue = document.getElementById('whiteSmallBlue');

  // constants for the animation on the little red square on the top
const whiteLittleRed = document.getElementById('whiteLittleRed');
const littleRed = document.getElementById('redTop');

// constant for the animation on the top blue anim
const blueTop = document.getElementById('blueTop');



// EVENT LISTENERS //

// yellow square event listener to do the animation on mouse over and undo it on mouse out
yellowTop.addEventListener('mouseover', flashYellow);
yellowTop.addEventListener('mouseout', flashBackYellow);

// event listener on a white div to move the red square when hovering next to it
whiteBigRed.addEventListener('mouseover', animBigRed);
whiteBigRed.addEventListener('mouseout', animBackBigRed);

// event listener on a white div for the bottom blue rectangle to move and grow
whiteMoveBlue.addEventListener('mouseover', animGrowBlue);
whiteMoveBlue.addEventListener('mouseout', animUngrowBlue);

// event listener on white square to animate the red square next to it when hovering over
whiteLittleRed.addEventListener('mouseover', animateRedTop);
whiteLittleRed.addEventListener('mouseout', animateOutRedTop);

blueTop.addEventListener('mouseover', animBlueTop);
blueTop.addEventListener('mouseout', animOutBlueTop);



// FUNCTIONS //

// function for the top yellow square animation
function flashYellow () {
  TweenMax.to('#yellowTop', .5, {backgroundColor: "pink", ease: RoughEase.easeOut})
  TweenMax.to('#yellowTop', .8, {delay: ".5", backgroundColor: "purple", ease: RoughEase.easeOut})
  TweenMax.to('#yellowTop', .8, {delay: "1", backgroundColor: "blue", ease: RoughEase.easeOut})
  TweenMax.to('#yellowTop', .8, {delay: "1.5", backgroundColor: "rgb(250, 217, 75)", ease: RoughEase.easeOut})
  TweenMax.to('#yellowTop', 2, {height: "300px", ease: Power1.easeOut})
}

// function for the top yellow square to go back to its normal color.
function flashBackYellow () {
  yellowTop.style.backgroundColor = "rgb(250, 217, 75)";
  TweenMax.to('#yellowTop', 2, {height: "49px", ease: Power1.easeOut})
}

// function that makes the red square move.
function animBigRed () {
  TweenMax.to(redBottom, 1, {transform: "translate(-120px, -120px)", ease: Power1.easeOut})
}

// function that makes the red square go back to its place
function animBackBigRed () {
  TweenMax.to(redBottom, .5, {transform: "translate(0px)"})
}

// function that makes the blue square to move up to the next grid row, and then grow into the cell
function animGrowBlue () {
  TweenMax.to(blueBottom, 1.5, {delay: "1", height: "171.5px"})
  TweenMax.to(blueBottom, 1, {transform: "translateY(-176px)", ease: Power1.easeOut})
}

// function that makes the blue square shrink back to its size, and then go back down to its cell
function animUngrowBlue () {
  TweenMax.to(blueBottom, 1.5, {height: "29.39px", ease: Power1.easeOut})
  TweenMax.to(blueBottom, 1, {delay: "1", transform: "translate(0px)"})
}

function animateRedTop () {
  TweenMax.to(littleRed, 1, {transform: "rotate(45deg)", ease: Power1.easeOut})
}

function animateOutRedTop () {
  TweenMax.to(littleRed, 1, {transform: "rotate(0deg)", ease: Power1.easeOut})
}

function animBlueTop () {
  TweenMax.to('#blueTop', .2, {backgroundColor: "#FFA8F8", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".2", backgroundColor: "#8E00FF", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".4", backgroundColor: "#006AFF", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".6", backgroundColor: "#FFF633", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".8", backgroundColor: "#32CD32", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".10", backgroundColor: "#00FF00", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".12", backgroundColor: "#00FA9A", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".14", backgroundColor: "#00FFFF", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".16", backgroundColor: "20B2AA", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".18", backgroundColor: "#FF00FF", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".20", backgroundColor: "#FF1493", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".22", backgroundColor: "#FF0000", ease: Power2.easeOut})
  TweenMax.to('#blueTop', .2, {delay: ".24", backgroundColor: "#2f60a2", ease: Power2.easeOut})
}

function animOutBlueTop () {
  TweenMax.to('#blueTop', .2, {backgroundColor: "#2f60a2", ease: Power2.easeOut})
}


