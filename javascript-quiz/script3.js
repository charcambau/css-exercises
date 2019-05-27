
// Set a var for the message
var message = document.getElementsByClassName('message');

// variable and event listener for all answers
var SelectedAnswers = document.getElementsByClassName('wrong-answers', 'right-answers');
SelectedAnswers.addEventListener('click', saveAnswers);

var allTheAnswers = [];

var submitAnswers = document.getElementById('submit');
submitAnswers.addEventListener('click', showAnswers);

function showAnswers () {
  
}

// function to print the message
function messageAnswers (messageText, SelectedBox) {
  if (SelectedBox == true) {
    message.innerHTML = 'Yay!';
    message.style.color = 'green';
  } else {
    message.innerHTML = 'Nope...';
    message.style.color = 'red';
  }
}















// // var with the text saying Good job or bad job

// var listNames = document.getElementById('list');
// listNames.addEventListener('click', listTheNames);

// function listTheNames () {
//   document.getElementById('display').innerHTML = ' ' + allTheNames;
// }