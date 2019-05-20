
//Set a variable for the wrong answer of the goldfish question
var selectWrongAnswerGoldfish = document.getElementById('wrongGoldfish');
selectWrongAnswerGoldfish.addEventListener('click', selectwrongAnswer);

//Set a variable for the right answer of the goldfish question
var selectRightAnswerGoldfish = document.getElementById('rightGoldfish');
selectRightAnswerGoldfish.addEventListener('click', selectRightAnswer);

//Set a variable for any answer selected on the question
var selectAnyAnswer = document.getElementById('selectAnswerGoldfish');

//set a function for the wrong answer selected
function selectwrongAnswer() {
  console.log('wrong answer goldfish');
}

//calling the function select wrong answer
selectRightAnswerGoldfish = selectRightAnswer;

//set a function for the right answer selected
function selectRightAnswer() {
  document.getElementById('demo').innerHTML = "Right!";
}

var submitTheQuiz = document.getElementById('submit');
submitTheQuiz.addEventListener('click', selectRightAnswer);


submitQuiz(); {
  console.log('submitted!');
}



//var correctAnswers = [false, true, true, false, true];


// const quizContainer = document.getElementById('quiz');

// const resultsContainer = document.getElementById('results');

// const submitButton = document.getElementById('submit');



// const myQuestions = [
//   {
//     question: "Goldfish have a memory of 3 seconds"

//     answers: {
//       a:"yes"
//       b:"no"
//     },

//     correctAnswer: "no"
//   }
// ]

// //on submit, show results
// submitButton.addEventListener('click', showResults);

// //define the function to show results
// function showResults(){}