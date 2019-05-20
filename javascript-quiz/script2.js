
// //set a variable for the submit button
// var submitButton = document.getElementById('submit');
// //add event listener to clicks on the button - telling it to show the message
// submitButton.addEventListener('click', ShowMessage);

// //setting the function ShowMessage to show a message when clicking on the button
// function ShowMessage() {
//   submitButton = alert("Great job!");
// }



//Goldfish question wrong----------------------------------
var wrongAnswers = document.getElementById('wrongGoldfish');
wrongAnswers.addEventListener('click', saveWrongAnswers);


function saveWrongAnswers() {
  document.getElementById('wrong').innerHTML = 'nope!';
  document.getElementById('wrong').style.display = 'none';
  document.getElementById('wrong').style.color = 'red';
}

//Goldfish question right----------------------------------
var rightAnswers = document.getElementById('rightGoldfish');
rightAnswers.addEventListener('click', saveRightAnswers);

function saveRightAnswers() {
  document.getElementById('right').innerHTML = 'yay!';
  document.getElementById('right').style.display = 'none';
  document.getElementById('right').style.color = 'green';
}

//Adults question wrong----------------------------------
var wrongAnswerAdult = document.getElementById('wrongAdults');
wrongAnswerAdult.addEventListener('click', adultWrongAnswers);


function adultWrongAnswers() {
  document.getElementById('wrongTwo').innerHTML = 'nope!';
  document.getElementById('wrongTwo').style.display = 'none';
  document.getElementById('wrongTwo').style.color = 'red';
}

//Adults question right----------------------------------
var rightAnswersAdult = document.getElementById('rightAdults');
rightAnswersAdult.addEventListener('click', adultRightAnswers);

function adultRightAnswers() {
  document.getElementById('rightTwo').innerHTML = 'yay!';
  document.getElementById('rightTwo').style.display = 'none';
  document.getElementById('rightTwo').style.color = 'green';
}

//San Marino right------------------------------------------
var rightAnswersSanMarino = document.getElementById('rightSanMarino');
rightAnswersSanMarino.addEventListener('click', sanmarinoRightAnswers);

function sanmarinoRightAnswers() {
  document.getElementById('rightThree').innerHTML = 'yay!';
  document.getElementById('rightThree').style.display = 'none';
  document.getElementById('rightThree').style.color = 'green';
}

//San Marino question wrong----------------------------------
var wrongAnswerSanMarino = document.getElementById('wrongSanMarino');
wrongAnswerSanMarino.addEventListener('click', sanmarinoWrongAnswers);


function sanmarinoWrongAnswers() {
  document.getElementById('wrongThree').innerHTML = 'nope!';
  document.getElementById('wrongThree').style.display = 'none';
  document.getElementById('wrongThree').style.color = 'red';
}

//Lightning right------------------------------------------
var rightAnswersLightning = document.getElementById('rightLightning');
rightAnswersLightning.addEventListener('click', lightningRightAnswers);

function lightningRightAnswers() {
  document.getElementById('rightFour').innerHTML = 'yay!';
  document.getElementById('rightFour').style.display = 'none';
  document.getElementById('rightFour').style.color = 'green';
}

//Lightning wrong------------------------------------------
var wrongAnswersLightning = document.getElementById('wrongLightning');
wrongAnswersLightning.addEventListener('click', lightningWrongAnswers);

function lightningWrongAnswers() {
  document.getElementById('wrongFour').innerHTML = 'yay!';
  document.getElementById('wrongFour').style.display = 'none';
  document.getElementById('wrongFour').style.color = 'green';
}

//Breathe right------------------------------------------
var rightAnswersBreathe = document.getElementById('rightBreathe');
rightAnswersBreathe.addEventListener('click', breatheRightAnswers);

function breatheRightAnswers() {
  document.getElementById('rightFive').innerHTML = 'yay!';
  document.getElementById('rightFive').style.display = 'none';
  document.getElementById('rightFive').style.color = 'green';
}

//Breathe wrong------------------------------------------
var wrongAnswersBreathe = document.getElementById('wrongBreathe');
wrongAnswersBreathe.addEventListener('click', breatheWrongAnswers);

function breatheWrongAnswers() {
  document.getElementById('wrongFive').innerHTML = 'yay!';
  document.getElementById('wrongFive').style.display = 'none';
  document.getElementById('wrongFive').style.color = 'green';
}



//---------------------------------------------
//Submit quiz----------------------------------
//---------------------------------------------
var submitAnswers = document.getElementById('submit');
submitAnswers.addEventListener('click', showAnswers);

function showAnswers() {
  //Goldfish question wrong----------------------------------
  document.getElementById('wrong').style.display = 'block';

  //Goldfish question right----------------------------------
  document.getElementById('right').style.display = 'block';

  //Adults question wrong----------------------------------
  document.getElementById('wrongTwo').style.display = 'block';
  
  //Adults question right----------------------------------
  document.getElementById('rightTwo').style.display = 'block';

  //San Marino question wrong----------------------------------
  document.getElementById('wrongThree').style.display = 'block';

  //San Marino question right----------------------------------
  document.getElementById('rightThree').style.display = 'block';

  //Lighnting question wrong----------------------------------
  document.getElementById('wrongFour').style.display = 'block';

  //Lighnting question right----------------------------------
  document.getElementById('rightFour').style.display = 'block';

  //Breathe question wrong----------------------------------
  document.getElementById('wrongFive').style.display = 'block';

  //Breathe question right----------------------------------
  document.getElementById('rightFive').style.display = 'block';

}



//RESET QUESTIONS?----------------------------------
var resetAnswers = document.getElementById('reset');
resetAnswers.addEventListener('click', reset);

function reset() {
  document.getElementById('wrong').innerHTML = '';
  document.getElementById('right').innerHTML = '';
  document.getElementById('wrongTwo').innerHTML = '';
  document.getElementById('rightTwo').innerHTML = '';
  document.getElementById('wrongThree').innerHTML = '';
  document.getElementById('rightThree').innerHTML = '';
  document.getElementById('wrongFour').innerHTML = '';
  document.getElementById('rightFour').innerHTML = '';
  document.getElementById('wrongFive').innerHTML = '';
  document.getElementById('rightFive').innerHTML = '';
}






// //-------SUBMIT ANSWERS---------------------
// var submitAnswers = document.getElementById('submit');
// submitAnswers.addEventListener('click', ShowAnswers);

// function ShowAnswers() {

// }



// var answers = [false, true, true, false, true];
// var last = answers[answers.length-1];



// //--------GOLDFISH RIGHT ANSWER---------------------
// var rightAnswerOne = document.getElementById('rightGoldfish');
// rightAnswerOne.addEventListener('click', ShowYay);

// function ShowYay() {
//   document.getElementsByClassName('right').innerHTML = "Yay!";
// }



// ShowMessage();