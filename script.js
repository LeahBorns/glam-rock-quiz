/*--- Step 1 - Defining global variables ---*/
const myQuestions = [
    {
        question: 1,
        questionstring: 'What year did french poet, Charles Piere Boudelaire coin the term modernity?',
        glamAnswer: ['1864', '1977', '1921', '2005'],
        correct: 0
    },

    {
        question: 2,
        questionstring: 'As Europe modernized gender roles blurred. Men, concerned with physical appearance became known as ______.',
        glamAnswer: ['A man about town', 'A fashionista', 'A dandy', 'A Bowie'],
        correct: 2
    },

    {
        question: 3,
        questionstring: 'What two artists kicked off the Glam Rock Era in the 70s?',
        glamAnswer: ['Elton John and Iggy Pop', 'David Bowie and Marc Bolan', 'Lou Reed and Lady Gaga', 'Suzi Quatro and The Runaways'],
        correct: 1
    },

    {
        question: 4,
        questionstring: 'Who mentored and taught David Bowie?',
        glamAnswer: ['Lindsay Kemp', 'Tiny Tim', 'Tina Turner', 'Oliver Wilde'],
        correct: 0
    },

    {
        question: 5,
        questionstring: 'What was the "excuse" for Glam Rock becoming so popular?',
        glamAnswer: ['To make the music scene more about looks than music itself', 'It was the 70s, anything was possible', 'To honor modernization in Europe in the late 1700s', 'This time was the end of a modern era'],
        correct: 3
    },

    {
        question: 6,
        questionstring: 'Who was the first female bass player to become a major rock star in the 70s?',
        glamAnswer: ['Marilyn Manson', 'Joan Jett', 'Olivia Newton John', 'Suzi Quartro'],
        correct: 3
    },

    {
        question: 7,
        questionstring: 'True or False. After the release of "Dandy in the Underworld", Marc Bolan was in a car accident and killed on scene.',
        glamAnswer: ['True', 'False'],
        correct: 0
    },

    {
        question: 8,
        questionstring: 'What artists continue to use Glam Rock influences, today?',
        glamAnswer: ['Andrew W.K.', 'M83', 'Lil Uzi Vert', 'BØRNS', 'All of the above'],
        correct: 4
    }
];

let currentQuestionNumber = 0;
const totalNumberQuestions = myQuestions.length;
let totalCorrect = 0;


/*--- Step 2 - Defining functions ---*/
function questionLayout() {

    //Update each question
    $('.glamQuestion').text(myQuestions[currentQuestionNumber].questionstring);

    //show multiple choices for each question
    //Make sure each question shows appropriate choices
    $('.choices').empty();

    //get the total number of choices for the current question
    const totalOptions = myQuestions[currentQuestionNumber].glamAnswer.length;

    //loop thru all the choices for each assigned question
    for (let i = 0; i < totalOptions; i++) {
        var eachAnswerOption = "<input aria-label='radio_label' role='radio' type='radio' class='option' name='option' value=" + i + "> " + myQuestions[currentQuestionNumber].glamAnswer[i] + "<br>";
        //apply to choices div
        $('.choices').append(eachAnswerOption);
    }



    $('.currentQuestion').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberQuestions);

    $('.currentScore').text("Current Score: " + totalCorrect + " of " + totalNumberQuestions);
}

//applying the function

$(document).ready(function () {
    //starting page. Hide questions and only show starting page
    $(".quizPage").hide();
    $(".finalPage").hide();

    $('.currentScore').text("");
    $('.currentQuestion').text("");


    //on start page
    $('.startButton').click(function () {
        console.log(totalCorrect);
        $('.finalPage').hide();
        $('.quizPage').show();
        $('.startingPage').hide();
        $('resultMessage').empty();
        questionLayout();
    });

    //quiz questions
    $('.quizPage').on('click', '.option', function () {

        //recognize the answer chosen
        let chosenAnswer = $("input[class='option']:checked").val();
        //recognize the correct answer from above
        let correctAnswer = myQuestions[currentQuestionNumber].correct;
        //compare each answer
        //        console.log(chosenAnswer, correctAnswer);
        if (chosenAnswer == correctAnswer) {
            totalCorrect++;
            //            console.log(totalCorrect);
        }
        console.log(totalCorrect);
        //if quiz is finished show results
        if ((currentQuestionNumber + 1) == totalNumberQuestions) {
            //show the final score
            $('.finalScore').text(totalCorrect + "/" + totalNumberQuestions);

            //hide other sections
            $('.finalPage').show();
            $('.quizPage').hide();
            $('.startingPage').hide();

        }
        //if not end contiue to next question
        else {
            //go to the next numerical question
            currentQuestionNumber++;
            //show next question
            questionLayout();
        }
    });

    //click start button to reset quiz
    $('.finalPage').on('click', '.resetQuiz', function () {

        $('.finalPage').hide();
        $('.quizPage').hide();
        $('.startingPage').show();
        //reset the quiz
        currentQuestionNumber = 0;
        totalCorrect = 0;

        $('.currentScore').text("");
        $('.currentQuestion').text("");
        console.log(totalCorrect);

    });
});
