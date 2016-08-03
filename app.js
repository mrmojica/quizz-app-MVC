
/***********MODEL******************/

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

//Constructor Quiz that contains the initial state of the data.
function Quiz(theData) {
    this.counter = 0;
    this.currentQuestion = 1;
    this.numberCorrectAnswer = 0;
    this.questions = theData; // this allows to pass dynamically different content
}

//Created a method that provides (get) the question.
Quiz.prototype.getQuestion = function() {
    return this.questions[this.counter].question;
};

//this method allows us to get the next question.
Quiz.prototype.nextQuestion = function() {
    return this.counter++;
    console.log('this is the counter: ' + this.counter);
};

Quiz.prototype.currentQ = function() {
    return this.currentQuestion++;
};

//get the choices of questions from questionList data
Quiz.prototype.getChoices = function() {
    console.log('Array of Choices : ' + this.questions[this.counter].choices);
    return this.questions[this.counter].choices;
};




Quiz.prototype.checkAnswer = function(userChoice) {
    if (userChoice == this.questions[this.counter].correctAnswer) {
        this.numberCorrectAnswer++;
        console.log('userChoice = ' + userChoice + " vs correct answer: " + this.questions[this.counter].correctAnswer);
        console.log('# of correct questions: ' + this.numberCorrectAnswer);
        return this.numberCorrectAnswer;
    } else {
        console.log('userChoice = wrong answer');
        console.log('userChoice = ' + userChoice + " vs correct answer: " + this.questions[this.counter].correctAnswer);
        console.log('# of correct questions: ' + this.numberCorrectAnswer);
    }

};



//*************************View **************************

//the parameter will allow us to select where we want to display the data.
function View(elementSelector, answerSelector, scoreSelector, counterSelector) {
    this.element = $(elementSelector);
    this.answer = $(answerSelector);
    this.score = $(scoreSelector);
    this.counter = $(counterSelector);




}


//Render displays data where it needs to go
View.prototype.renderAll = function(question, choices, numberCorrectAnswer, currentQuestion) {
    //fix duplicating answers/questiontetx bug
    this.element.empty();
    this.answer.empty();

    // update question text
    this.element.append('<li>' + question + '</li>');

    // update user choices
    var displayArea = this.answer;
    choices.forEach(function(value, index) {
        displayArea.append('<li><input class="user-option" type="radio" name="option" value=' + index + '><label>' + value + '</label></li>');
    });

    // update the score (still need to get user input value)
    this.score.html(numberCorrectAnswer);
    // update the counter
    this.counter.html(currentQuestion);

    //Maybe add a result page.

};

//Create the behavior functionality using the button's event's.
    //input button 'user-option'
        //get value
            //check if answer is correct - adjust score

    //reset button behavior
        //clear original content







//*************************Controller**********************

function Controller(model, view, userChoice) {
    this.model = model;
    this.view = view;
    this.view.renderAll(this.model.getQuestion(), this.model.getChoices(), this.model.checkAnswer(userChoice), this.model.currentQ());

}



$(document).ready(function() {

    var testQuiz = new Quiz(questionList);
    var testView = new View('.question', '.answers', '.score', '.question-current');
    var controller = new Controller(testQuiz, testView, 2);

});




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




***********ALTERNATE SAMPLE OF DISPLAYING QUESTION + CHOICES****************
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

Controller function() {
        // this.view.displayQuestion(this.model.getQuestion());
    // this.view.displayUserChoices(this.model.getChoices());
}


***************************************************************




*/