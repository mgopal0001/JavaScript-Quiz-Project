const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];

let currentQuestion = 0;
let currentScore = 0;

function startQuiz() {

    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {

        const main = document.getElementById("main");
        main.innerHTML = "";

        //get the first question from the question array.
        const question = questions[currentQuestion];

        //create a div element which contains the question.
        const questionContainer = document.createElement('div');

        //crate a heading for the question.
        const questionHeading = document.createElement("h5");
        questionHeading.textContent = question.questionText;
        questionContainer.appendChild(questionHeading);

        //create button for each options
        question.options.forEach(opt => {
            const optionButton = document.createElement("button");
            optionButton.setAttribute('class', 'btn btn-primary options');
            optionButton.innerText = opt;

            optionButton.addEventListener("click", () => {
                //check if answer if answer is correct
                const resultElement = document.createElement("p");
                if (question.answer === optionButton.innerText) {
                    resultElement.textContent = "Correct!";
                    currentScore++;
                } else {
                    resultElement.textContent = "Incorrect!";
                }

                questionContainer.appendChild(document.createElement('hr'));
                questionContainer.appendChild(resultElement);
                
                
                setTimeout(() => {
                    currentQuestion++;
                    showQuestion();
                }, 1000);


            });
            questionContainer.appendChild(optionButton);
        })

        main.appendChild(questionContainer);

    } else {
        main.innerHTML = "";
        const allDoneContainer = document.createElement('div');
        const allDoneHeading = document.createElement('h3');
        allDoneHeading.innerHTML = "All done!!";

        const finalScore = document.createElement('p');
        finalScore.innerHTML = `Your Final Score is ${currentScore}`;

        allDoneContainer.appendChild(allDoneHeading);
        allDoneContainer.appendChild(finalScore);

        main.appendChild(allDoneContainer);
    }

}




