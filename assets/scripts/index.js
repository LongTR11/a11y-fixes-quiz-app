
// Displays the question and score counters at the top of the page. Using interpolation allows for the counts to be dynamic. Because the question count is 0-based, 1 is added to questionNumber
function renderUI(questionNumber, score) {
    let uiTemplate = `
        <div class="group">
            <div class="left tan-background"> Question:
                <span id="question-count">${questionNumber + 1}</span>/10</div>
            <div class="right tan-background"> Score:
                <span id="score-count">${score}</span>/10</div>
        </div>`;
    $('.js-quiz-ui').html(uiTemplate);
}

function renderScore(score) {
    $('#score-count').html(score);
}

// The start page is loaded as the page loads. An event listener is needed to remove the start page. 
function renderStartPage() {
    let startPageTemplate = `
        <section role = "region" class="js-start-page start-page">
            <h2>Click below to find out!</h2>
            <button class="js-start-quiz style-button center-element">Take Quiz</button>
        </section > `;
    $('.container').html(startPageTemplate);
    $('.js-start-quiz').click(function (event) {
        $('.js-start-page').remove();
        renderUI(0, 0);
        renderQuestion(0);
    });
}

// The function takes two arguments. The first argument is used to determine which question from STORE to use, and the coinciding choices. The second is used to style the question based on whether or not an image is displayed within the question.
function renderQuestion(questionNumber, isImageQuestion) {
    let formTemplate = `
    <section role="region" class="quiz-body">
                <form>
                    <fieldset> 
    <legend class="center-text"><span class="group ${isImageQuestion ? 'image-question-top' : 'text-question-top'}">${STORE[questionNumber].question}</span></legend>
<div>
    <div>
        <input value="0" id="answer0" type="radio" name="answer" required>
        <label for="answer0">${STORE[questionNumber].answers[0]}</label>
    </div>
    <div>
        <input value="1" id="answer1" type="radio" name="answer" required>
        <label for="answer1">${STORE[questionNumber].answers[1]}</label>
    </div>
    <div>
        <input value="2" id="answer2" type="radio" name="answer" required>
        <label for="answer2">${STORE[questionNumber].answers[2]}</label>
    </div>
    <div>
        <input value="3" id="answer3" type="radio" name="answer" required>
        <label for="answer3">${STORE[questionNumber].answers[3]}</label>
    </div>
</div>
<button class="center-element style-button" type="submit">Submit</button>
</fieldset>
</form>
</section>`;
    $('.container').html(formTemplate);
}

function renderCorrectAnswerPage() {
    let correctAnswerPage = `
        <section role="region">     
           <h2><span class="army-strong">HOORAHHH!</span> Carry on soldier!</h2>
        </section>
        <button class="js-next-button center-element style-button" type="button">Next</button>
        `;
    $('.container').html(correctAnswerPage);
}

// The correct answer is displayed using interpolation to access the data in STORE with this function.
function renderIncorrectAnswerPage() {
    let incorrectAnswerPage = `
        <section role="region">     
            <h2><span class="army-strong">FRIENDLY DOWN!</span> I'm sorry, the correct answer was "${STORE[questionCount].answers[STORE[questionCount].correctAnswer]}".</h2>
        </section>
        <button class="js-next-button center-element style-button" type="button">Next</button>
    `;
    $('.container').html(incorrectAnswerPage);
}

function renderFinalQuizPage() {
    let finalQuizPage = `
        <section role="region">
            <h2><span class="army-strong">MISSION COMPLETE!</span> That's the end of the quiz. Click below if you'd like to try again.</h2>
        <button class="js-restart-button center-element style-button">Restart</button>
    `;
    $('.container').html(finalQuizPage);
    $('.js-restart-button').click(function (event) {
        renderStartPage();
        setQuestionCount(0);
        setScoreCount(0);
    });
}

// This event listener checks to see if the selected choice matches the correct answer in STORE when a choice is sumbitted, then updates the score count and calls the renderCorrectAnswerPage function if correct, or renderIncorrectAnswerPage if not. Finally, it updates the question number.
$('body').on('submit', 'form', function (event) {
    event.preventDefault();
    let answer = $('input[name="answer"]:checked').val();
    let questionNumber = getQuestionCount();
    if (answer == STORE[questionNumber].correctAnswer) {
        updateScoreCount();
        renderCorrectAnswerPage();
    } else {
        renderIncorrectAnswerPage();
    }
    updateQuestionCount();
    getQuestionCount();
});

// This listener renders the next quiz in the app. It also uses a conditional to determine whether or not load the final page, which it does when there are no questions left to iterate. 
$('body').on('click', '.js-next-button', function (event) {
    let questionNumber = getQuestionCount();
    let score = getScoreCount();
    if (questionNumber == STORE.length) {
        renderScore(score);
        renderFinalQuizPage();
    }
    else {
        renderQuestion(questionNumber, STORE[questionNumber].isImageQuestion);
        renderUI(questionNumber, score);
    }
});

function runQuizApp() {
    renderStartPage();
}

$(runQuizApp);

// $() jQuery
// ${} Interpolation