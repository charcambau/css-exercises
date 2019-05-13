//single line comment

/*
multi
line
comment 
*/

//To log information to the console
//We can use the console.log function

console.log('hello world');
//this line is a statement
//single line instruction
//has to end with;

console.log('goodbye');


//tested the var alone
var x = 42

console.log(x + x);

console.log('I am ' + x + ' years old');


//tested the var with teacher
var messageToTheWorld = 'Hello World';
var myName = 'Charlotte';

console.log(messageToTheWorld + ' from ' + myName);



//try to substitute the content of the h1 element
//Finds the element with "title" as an ID in the doc in which the js file is linked
var titleElement = document.getElementById('title');
//innerHTML manipulates the content between the html tags- in this case, the title
titleElement.innerHTML = messageToTheWorld + ' from ' + myName;


/**************** 
 * manipulate CSS
 ****************/

 //select the element with the id 'style button'
var buttonstyleElement = document.getElementById('styleButton');

// add event listener .addEventListener(type, function)
buttonstyleElement.addEventListener('click', changeTextColor);

// a variable storing a number
var counter = 0;

//function containing some code
function changeTextColor() {

  var titleColors = ['red', 'purple', 'pink', 'orange', 'green'];
  
  //print the whole array
  console.log(titleColors);
  //print the array length
  console.log(titleColors.length);
  //print the first item in the Array
  console.log(titleColors[0]);
  //print the last item in the array, even if you don't know it's number
  console.log(titleColors[titleColors.length-1]);

  //assign a new value to an element's CSS property (here, make the color of the title different)
  titleElement.style.color = titleColors[counter];

  //always put before the counter - says to log the string if you arrive to the last item of the list
  if(counter == titleColors.length - 1) {
    console.log('WOOHOO IT IS TRUE');
    counter = -1;
  }

  //counter ++ is the same as counter = counter + 1
  counter ++;

  console.log('Color change')
};


// calling (executing) the function that we defined before :
// changeTextColor();

//console.log('This is the element:' + buttonElement);
//buttonstyleElement.classList.add('mon-bouton');

/************************************************************** 
 * ID is always camel case and classes are lowercase with '-'
**************************************************************/