console.log('-- innit script');

var myTitle;

/* the variable is undefined because it has no value assigned to it */
console.log(myTitle);

// The variable has null because it has a wrong value assigned to it
myTitle = document.getElementById('name');
console.log(myTitle);

// The value of the variable gets logged into the console : it fetched the id and logs its text
myTitle = document.getElementById('appTitle').innerHTML;
console.log(myTitle);


/* Say my name app */


// ********* DEFINE VARIABLES FOR EACH ELEMENT IN HTML ************************
var allTheNames = [];

var nameButton = document.getElementById('nameButton');
nameButton.addEventListener('click', sayMyName);

// define a variable for the inputted text in the input field with id myName
var inputText = document.getElementById('myName');

// var for the message
var messageBox = document.getElementById('msgBox');



// in the function that happens when you click on the button, 
function sayMyName() {

  // log into the console whatever was written in the input field
  // console.log(allTheNames);



// STORE IN THAT VARIABLE USING THE .push VALUE METHOD

// This is saying, if the inputted text is more than 0 characters, store the inputted text
// and console log that inputted text
// if it's 0 characters, log 'no names' in the console
if( inputText.value.length > 0) {
  allTheNames.push(inputText.value);
  var lastNameAdded = allTheNames[allTheNames.length - 1];
  updateTheMessage('Your name ' + lastNameAdded + ' has been saved',true);


  // empty the input after a text has been inputted
  inputText.value = '';

  // put the focus on the input field
  inputText.focus();


} else {
  console.log('No name');
  updateTheMessage('No name entered',false);
}


// console.log(inputText.value.length);
}


function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

  if (messageSuccess == true) {
    messageBox.classList.add('message-success');
    messageBox.classList.remove('message-error');
  } else {
    messageBox.classList.add('message-error');
    messageBox.classList.remove('message-success');
  }
}


var undo = document.getElementById('undoButton');
undo.addEventListener('click', undoLast);

function undoLast () {
  console.log('yo this works');
  allTheNames.pop(inputText.value);

  var lastNameToUndo = allTheNames[allTheNames.length];
  deleteTheMessage('Your name ' + lastNameToUndo + ' has been deleted',true);
}


function deleteTheMessage(messageText, messagedeleted) {
  messageBox.innerText = messageText;

  if (messagedeleted == true) {
    messageBox.classList.add('message-delete');
    messageBox.classList.remove('message-success');
  } else {
    messageBox.classList.add('message-success');
    messageBox.classList.remove('message-delete');
  }
}


var listNames = document.getElementById('list');
listNames.addEventListener('click', listTheNames);

function listTheNames () {
  document.getElementById('display').innerHTML = ' ' + allTheNames;
}







// // execute the function
// updateTheMessage('hello', true);




// 1.check if the input is not empty
// 2.empty the inpu and focus on it


// .length is the number of characters