/*   MODEL

-Create Object/array that provides the data.
	-questions
	-choices
	-solutions

Create a consturctor function (MODEL) that cycles through the data.
Create counter that updates questions and choices + question number.
Create function that updates scores.




****************************/

 var questionList = [

        {
            question: '1. An object falls out of an airplane, and falls freely downward. Its...',
            choices: ['mass increases', 'acceleration increases', 'velocity increases', 'gravity increases'],
            correctAnswer: 2
        },

        {
            question: '2. You brake suddenly. The passengers in your car lurch forward. This demonstrates...',
            choices: ['gravity', 'weight', 'mass', 'inertia'],
            correctAnswer: 3
        },

        {
            question: '3. A truck is travelling at 10 m/s. A package drops off the truck. Neglecting air resistance, as the package hits the ground, its horizontal speed is',
            choices: ['0 m/s', '10 m/s', '20 m/s', 'depends on the weight of the package'],
            correctAnswer: 1
        },

        {
            question: '4. A truck is decelerating. A package is dropped from the midpoint of the ceiling of the truck\'s storage compartment. The package hits the floor',
            choices: ['immediately beneath the midpoint of the ceiling', 'closer to the back of the truck than the midpoint', 'closer to the front of the truck than the midpoint', 'all of the above'],
            correctAnswer: 2
        },

        {
            question: '5. You tie a rock to a string and whirl it in a horizontal circle. The string breaks. In the absence of gravity, the rock',
            choices: ['travels in a circle', 'falls in a straight line down to the earth', 'flies in a straight line vertically up into the air', 'travels in a straight line horizontally away from you'],
            correctAnswer: 3
        }
    ];

// content of a Question
// function Question(question, choices, correctAnswer) {
// 	this.question = question;
// 	this.choices = choices;
// 	this.correctAnswer = correctAnswer;
// }
// //what are the responsabilities of a Question ? : 
// Question.prototype.checkAnswer = function(userChoice){
//     //here we are comparing index vs index 
//     return userChoice == this.correctAnswer;
// };

//Constructor Quiz that contains the initial state of the data.
function Quiz(){
    this.counter = 0;
    this.numberCorrectAnswer = 0;
    this.questions = questionList; // tempoary[], and a moethod to add questions...
}

//Created a method that provides (get) the question.
Quiz.prototype.getQuestion = function(){
    //console.log("getQuestion returns this: " + this.questions[this.counter].question);
    return this.questions[this.counter].question;
};

//this method allows us to get the next question.
Quiz.prototype.nextQuestion = function(){
    this.counter++;
    console.log('this is the counter: ' + this.counter);
};

//get the choices of questions from questionList data
Quiz.prototype.getChoices = function() {
    console.log('Array of Choices : ' + this.questions[this.counter].choices);
   return this.questions[this.counter].choices; 
}



//     // var answer = "";
//     // for (var i = 0; i < this.questions[this.counter].choices.length; i++) {
//     //     console.log(this.questions[this.counter].choices[i]);
//     //     answer += this.questions[this.counter].choices[i];
//     // }
//     // return answer;


// https://bl.ocks.org/shiftyp/0e2516f91a044acfb396


Quiz.prototype.checkAnswer = function(userChoice){
    if(userChoice == this.questions[this.counter].correctAnswer){
        this.numberCorrectAnswer++;
        console.log('userChoice = ' + userChoice + " vs correct answer: " + this.questions[this.counter].correctAnswer);
        console.log('# of correct questions: ' + this.numberCorrectAnswer);
        return this.numberCorrectAnswer;
    }else{
        console.log('userChoice = wrong answer');
        console.log('userChoice = ' + userChoice + " vs correct answer: " + this.questions[this.counter].correctAnswer);
        console.log('# of correct questions: ' + this.numberCorrectAnswer);
    }

};

/*

DONE! display the questions
DONE! display the choices 

display the totalnumberCorrect choices 
display the current question number like 1/5


start button : to start the game  start button just at the beginings 
reset button : to restart the game stays all the time.

a behavior that on click renders te next question

results page that contains : 

title showing results 



*/

//*************************View **************************

//the parameter will allow us to select where we want to display the data.
function View(elementSelector, answerSelector, scoreSelector, counterSelector) {
    this.element = $(elementSelector);
    this.answer = $(answerSelector);
    this.score = $(scoreSelector);
    this.counter = $(counterSelector);

    


}

// var myState = {
//    question: 'something',
//    answers= [1,23,4]
// }
//Render displays data where it needs to go
View.prototype.renderAll = function(question, choices, numberCorrectAnswer, counter){
     //fix duplicating answers/questiontetx bug
    this.element.empty();
    this.answer.empty();

    // update question text
    this.element.append('<li>' + question + '</li>');

    // update user choices
    var displayArea = this.answer;
    choices.forEach(function(value, index){
        displayArea.append('<li><input class="user-option" type="radio" name="option" value=' + index + '><label>' + value + '</label></li>');
    });

    // update the score
    this.score.html(numberCorrectAnswer);
    // update the counter

   
};

// View.prototype.displayQuestion = function(testQuestion) {
//     this.element.append('<li>' + testQuestion + '</li>');
//     // <li><input class="user-option" type="radio" name="option" value=' + i + '><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label></li>

// };

// View.prototype.displayUserChoices = function(myArray){
//     //we are grabing the selector value because we had issues appending to this.answer
//     var displayArea = this.answer;
//     myArray.forEach(function(value, index){
//         displayArea.append('<li><input class="user-option" type="radio" name="option" value=' + index + '><label>' + value + '</label></li>');
//     });
// };



//*************************Controller**********************

function Controller(model, view, userChoice) {
    this.model = model;
    this.view = view;
    //connecting the view display method to the model getQuestion method.
    // this.view.displayQuestion(this.model.getQuestion());
    // this.view.displayUserChoices(this.model.getChoices());
this.view.renderAll(this.model.getQuestion(),this.model.getChoices(),this.model.checkAnswer(userChoice));
    // view.question = model.getQuestion.bind(testQuiz);
}



$(document).ready(function(){



var testQuiz = new Quiz(); 
var testView = new View('.question', '.answers', '.score', '.question-current');
var controller = new Controller(testQuiz, testView, 2);


//add get user choice method


// };
// Quiz.prototype.displayAnswers = function(questionGroup){
//     for(var i = 0; i > questionGroup[0][1].length; i++){
//         console.log(questionGroup[0[1][i]]);
//     }
// };


// console.log(testQuiz.getQuestion());
// console.log(testQuiz.getChoices());
// testQuiz.getQuestion();
// testQuiz.nextQuestion();
// // console.log(testQuiz.getQuestion());
// console.log(testQuiz.checkAnswer(2));
// testQuiz.checkAnswer(3);

// testView.renderAll('my q2', [10,100,12,13]);
// testView.renderAll('my q3', [23,100,12,13]);


// testView.displayQuestion(testQuiz);
// console.log(testQuiz.correctCounter(1));
// console.log(correctCounter);
//testQuiz.displayQuestions(questionList);
//console.log(questionList[0].question);
//testQuiz.displayAnswers(questionList);
});


