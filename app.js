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
function Question(question, choices, correctAnswer) {
	this.answer = $('input').val();;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}
//what are the responsabilities of a Question ? : 


//Creating a Quiz object 
var questions =[];
//what are the responsabilities of a Quiz? resposabilities = methods of Quiz

var questionTest = new Question(questionList[0][0],questionList[0][1], questionList[0][2]);

questionTest.addQuestion(questionList);


