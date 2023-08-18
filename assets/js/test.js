let currentQuestionIndex = 0;
let questions = [];
let answers = [];

let questionsList = document.getElementById("questionsList");
let answerForm = document.getElementById("answerForm");

// function to display the current question and answers
let displayQuestion = () => {
    if (currentQuestionIndex < questions.length) {
        questionsList.innerHTML = `<div class="question">${questions[currentQuestionIndex]}</div>`;

        answerForm.innerHTML = "";

        // shuffle the answers to present in random order
        let shuffledAnswers = answers[currentQuestionIndex].map((answer, index) => ({ answer, index }));
        shuffledAnswers.sort(() => Math.random() - 0.5);

        for (let i = 0; i < shuffledAnswers.length; i++) {
            let answerLabel = document.createElement("label");
            answerLabel.innerHTML = `
                <div class="answer"><input type="radio" name="answer" value="${shuffledAnswers[i].index}">
                ${shuffledAnswers[i].answer}</div><br>
            `;
            answerForm.appendChild(answerLabel);
        }

        // remove previous event listener, add listener for next question
        answerForm.removeEventListener("change", nextQuestion);  
        answerForm.addEventListener("change", nextQuestion);

        document.addEventListener("copy", function (event) {
            event.preventDefault();
            questionsList = window.getSelection().toString();
            answerForm = window.getSelection().toString();
        });
    } else {
        alert("Test is done!");
        window.location.href = "result.html";
    }
};

// function to move to the next question with a delay and loading message
let nextQuestion = () => {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        let selectedAnswerIndex = parseInt(selectedAnswer.value);

        getResult(currentQuestionIndex, selectedAnswerIndex);

        currentQuestionIndex++;

        answerForm.innerHTML = `<div class="loading">Evaluating...</div>`;

        const delayDuration = 1000;
        setTimeout(() => {
            displayQuestion();
        }, delayDuration);
    }
};



// function to fetch text data from a file
let getText = async file => {
    try {
        let response = await fetch(file);
        let data = await response.json();

        // creates questions and answers arrays
        questions = data.map(q => q.question);
        answers = data.map(a => a.answers);

        // shuffle questions and answers in the same order
        for (let i = questions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        displayQuestion();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// fetch and display questions and answers
getText("assets/js/qa-fil.json");

let storedUser = JSON.parse(localStorage.getItem("user"));


let totalSanguine = 0;
let totalCholeric = 0;
let totalMelancholic = 0;
let totalPhlegmatic = 0;
let totalQuestions = 0;

if (storedUser == null) {
    totalSanguine = 0;
    totalCholeric = 0;
    totalMelancholic = 0;
    totalPhlegmatic = 0;

    // load user data from localStorage with the condition if null return 0
    totalQuestions = parseInt(localStorage.getItem("totalQuestions")) || 0;    
}


// function to record user's answer and update localStorage
let getResult = (indexQ, indexA) => {
    console.log(`Question : ${indexQ}, Answer : ${indexA}`);

    switch (indexA) {
        case 0:
            console.log("Sanguine");
            totalSanguine++;
            totalQuestions++;
            break;
        case 1:
            console.log("Choleric");
            totalCholeric++;
            totalQuestions++;
            break;
        case 2:
            console.log("Melancholic");
            totalMelancholic++;
            totalQuestions++;
            break;
        case 3:
            console.log("Phlegmatic");
            totalPhlegmatic++;
            totalQuestions++;
            break;
    }

    // update user's data in localStorage
    let user = {
        totalSanguine: totalSanguine,
        totalCholeric: totalCholeric,
        totalMelancholic: totalMelancholic,
        totalPhlegmatic: totalPhlegmatic,
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("totalQuestions", JSON.stringify(totalQuestions));
};
