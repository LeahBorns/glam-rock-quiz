const myQuestions = [
    {
        question: 1,
        questionstring: 'What year did french poet, Charles Piere Boudelaire coin the term modernity?',
        answer: ['1864', '1977', '1921', '2005'],
        correct: 0
    },

    {
        question: 2,
        questionstring: 'As Europe modernized gender roles blurred. Men, concerned with physical appearance became known as ______.',
        answer: ['A man about town', 'A fashionista', 'A dandy', 'A Bowie'],
        correct: 2
    },

    {
        question: 3,
        questionstring: 'What two artists kicked off the Glam Rock Era in the 70s?',
        answer: ['Elton John and Iggy Pop', 'David Bowie and Marc Bolan', 'Lou Reed and Lady Gaga', 'Suzi Quatro and The Runaways'],
        correct: 1
    },

    {
        question: 4,
        questionstring: 'Who was the mentor and teacher of David Bowie?',
        answer: ['Lindsay Kemp', 'Tiny Tim', 'Tina Turner', 'Oliver Wilde'],
        correct: 0
    },

    {
        question: 5,
        questionstring: 'What was the "excuse" for Glam Rock becoming so popular?',
        answer: ['To make the music scene more about looks than music itself', 'It was the 70s, anything was possible', 'To honor modernization in Europe in the late 1700s', 'This time was the end of a modern era'],
        correct: 3
    },

    {
        question: 6,
        questionstring: 'Who was the first female bass player to become a major rock star in the 70s?',
        answer: ['Marilyn Manson', 'Joan Jett', 'Olivia Newton John', 'Suzi Quartro'],
        correct: 3
    },

    {
        question: 7,
        questionstring: 'True or False. After the release of "Dandy in the Underworld", Marc Bolan was in a car accident and killed on scene.',
        answer: ['True', 'False'],
        correct: 0
    },

    {
        question: 8,
        questionstring: 'What artists continue to use Glam Rock influences, today?',
        answer: ['Andrew W.K.', 'M83', 'Lil Uzi Vert', 'BØRNS', 'All of the above'],
        correct: 4
    },
];

const currentQuestionNumber = 0;
const totalNumberQuestions = myQuestions.length;
const totalCorrect = 0;

const QUESTION_ELEMENT_CLASS = ".quizQuestion";
const QUESTION_INDEX_ATTRIBUTE = "data-item-index";
const CURRENT_QUESTION = ".glamQuestion";
const CURRENT_NUMBER = "span";
const QUESTION_FORM = ".options";
const RADIO_OPTION = "js-option";
const RADIO_ANSWER = ".resultAnswer";
const CORRECT_ANSWER = ".correctAnswer";

function generateQuestionElement(question, questionIndex) {

    return `<div class="${QUESTION_ELEMENT_CLASS}" "${QUESTION_INDEX_ATTRIBUTE}" = "${questionIndex}">
<p class="glamQuestion"><span>"${myQuestions.numberstring}"</span>"${myQuestions.questionstring}"</p>
<form class="options" role="form">
<input class="option" type="radio" name="${myQuestions.question}" id="${myQuestions.answer1}" value="0" required>
<label for="${myQuestions.answer1}">"${myQuestions.answer1}"</label><br>
<input class="option" type="radio" name="Question1" id="${myQuestions.answer2}" value="1" required>
<label for="${myQuestions.answer2}">"${myQuestions.answer1}"</label><br>
<input class="option" type="radio" name="Question1" id="${myQuestions.answer3}" value="2" required>
<label for="${myQuestions.answer1}">"${myQuestions.answer3}"</label><br>
<input class="option" type="radio" name="Question1" id="${myQuestions.answer4}" value="3" required>
<label for="${myQuestions.answer4}">"${myQuestions.answer1}"</label>
</form>
<div class="submitSection">
<!--Score and question number -->
<button class="nextQuestion" type="submit">Next</button>
</div>
<div class="resultAnswer">CORRECT</div>
</div>)`
}

function questionHTMLstring(nextQuestion) {
    console.log("generating next question");
    const question = nextQuestion.map((question, questionIndex) => generateQuestionElement(question, questionIndex));

    return question.join("");
}


//Quiz questions show one at a time
function renderQuizQuestions() {
    console.log('`quizQuestions` ran');
    //render question in DOM
    const glamRockQuestion = questionHTMLstring(myQuestions);
    //insert HTML into DOM
    $('QUESTION_ELEMENT_CLASS').html(glamRockQuestion, function () {
        $('RADIO_ANSWER').hide();
        $('.startingPage').hide();
        $('.finalpage').hide();

    });


    //.addClass(.correctAnswer) if label = myquestions.correct

}

//start page
function startPage() {
    //indiv page with button to start quiz
    console.log('`startPage` ran');
    //starting page. Hide questions and only show starting page
    $(".quizPage").hide();
    $(".finalPage").hide();

    //click start button on starting page to get to quiz
    $(".start-quiz").click(function () {
        $(".startingPage").hide();
        $(".quizPage").show();
    });


}

function basicLoopQuestion(questions) {
    console.log(questions[0].answer[0]);
    for (let i = 0; i <= myQuestions.length; i++); {

    }
}
basicLoopQuestion(myQuestions);

function printQuestions() {
    //log question key value from 4 objects to the console
}

function getAnswer() {
    if (answer === myQuestion[0].correct) {
        return true;
    }
    getAnswer();

}

function handleQuizQuestions() {
    console.log('`handleQuizQuestions` ran');
    //prompted thru multiple choice questions
    //one question right after the other
    //one at a time
    $('.resultAnswer').hide();
    $('.submitAnswer').click(function () {
        $('form').submit(function (event) {
            event.preventDefault();

        });
    });
}
