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
            question: 'An object falls out of an airplane, and falls freely downward. Its...',
            choices: ['mass increases', 'acceleration increases', 'velocity increases', 'gravity increases'],
            correctAnswer: 2
        },

        {
            question: 'You brake suddenly. The passengers in your car lurch forward. This demonstrates...',
            choices: ['gravity', 'weight', 'mass', 'inertia'],
            correctAnswer: 3
        },

        {
            question: 'A truck is travelling at 10 m/s. A package drops off the truck. Neglecting air resistance, as the package hits the ground, its horizontal speed is',
            choices: ['0 m/s', '10 m/s', '20 m/s', 'depends on the weight of the package'],
            correctAnswer: 1
        },

        {
            question: 'A truck is decelerating. A package is dropped from the midpoint of the ceiling of the truck\'s storage compartment. The package hits the floor',
            choices: ['immediately beneath the midpoint of the ceiling', 'closer to the back of the truck than the midpoint', 'closer to the front of the truck than the midpoint', 'all of the above'],
            correctAnswer: 2
        },

        {
            question: 'You tie a rock to a string and whirl it in a horizontal circle. The string breaks. In the absence of gravity, the rock',
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


function Quiz(){
    this.counter = 0;
    this.numberCorrect = 0;
    this.questions = questionList; // tempoary[], and a moethod to add questions...
}

//we need a method to iterate over all the current Question choices 
Quiz.prototype.getQuestion = function(){
    return this.questions[this.counter];
        //console.log(questionGroup[0].question);
    // for (var i= 0; i < questionList.length; i++) {

    // }
};
Quiz.prototype.nextQuestion = function(){
    this.counter++;
    console.log('this is the counter: ' + this.counter);
};
var correctCounter = 0;

Quiz.prototype.checkAnswer = function(userChoice){
    console.log(correctCounter);
    if(userChoice == this.questions[this.counter].correctAnswer){
        correctCounter++;
        console.log(correctCounter);
    }
};

//View *********
//add get user choice method

// Quiz.prototype.correctCounter = function(userChoice){
//     if(Quiz.prototype.checkAnswer(userChoice)){
//         return correctCounter++;
//     }
// };
// Quiz.prototype.displayAnswers = function(questionGroup){
//     for(var i = 0; i > questionGroup[0][1].length; i++){
//         console.log(questionGroup[0[1][i]]);
//     }
// };

var testQuiz = new Quiz(); 
console.log(testQuiz.getQuestion());
testQuiz.nextQuestion();
console.log(testQuiz.getQuestion());
console.log(testQuiz.checkAnswer(1));
// console.log(testQuiz.correctCounter(1));
// console.log(correctCounter);
//testQuiz.displayQuestions(questionList);
//console.log(questionList[0].question);
//testQuiz.displayAnswers(questionList);
