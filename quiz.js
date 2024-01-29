const questions = [
    {
        question: " Q1) Select the appropriate dark patterns in the given image?",
        image: "img1.jpg",
        choices: ["Hidden Cost", "Visual Interface", "Nagging", "Trick Wording"],
        correctAnswers: [1]
    },
    {
        question: " Q2) Select the appropriate dark patterns in the given image?",
        image: "img2.png",
        choices: ["False Urgency", "Confirm Shaming", "Disguised Ads", "Trick Wording"],
        correctAnswers: [1]
    },
    {
        question: " Q3) Select the appropriate dark patterns in the given image?",
        image: "img3.jpg",
        choices: ["Forced Action", "Obstruction", "Confirm Shaming", "Sneaking"],
        correctAnswers: [2]
    },
    {
        question: " Q4) Select the appropriate dark patterns in the given image?",
        image: "img4.png",
        choices: ["Fake Scarcity", "Hidden Subscription", "Fake Uregency", "Nagging"],
        correctAnswers: [0]
    },
    {
        question: " Q5) Select the appropriate dark patterns in the given image?",
        image: "img5.jpg",
        choices: ["Nagging", "Comparison Prevention", "Obstruction", "Fake Scarcity"],
        correctAnswers: [2]
    },
    {
        question: " Q6) Select the appropriate dark patterns in the given image?",
        image: "img6.jpg",
        choices: ["Preselection", "Visual Interface", "Hard to cancel", "Privacy Zuckering"],
        correctAnswers: [3]
    },
    {
        question: " Q7) Select the appropriate dark patterns in the given image?",
        image: "img7.jpg",
        choices: ["Forced Action", "Disguised Advertising", "Word Tricking", "Nagging"],
        correctAnswers: [1]
    },
    {
        question: " Q8) Select the appropriate dark patterns in the given image?",
        image: "img8.png",
        choices: ["Hidden Cost", "Hidden Subscription", "Fake Social Proof", "Preselection"],
        correctAnswers: [1,3]
    },
    {
        question: " Q9) Select the appropriate dark patterns in the given image?",
        image: "img9.png",
        choices: ["Basking", "Disguised ads", "False Urgency", "Comparison Prevention"],
        correctAnswers: [2]
    },
    {
        question: " Q10) Select the appropriate dark patterns in the given image?",
        image: "img10.png",
        choices: ["Forced Action", "Fake Scarcity", "Fake Social Proof", "Fake Urgency"],
        correctAnswers: [0]
    }
];

let currentQuestion = 0;
        let score = 0;

        const questionElement = document.getElementById("question");
        const choicesElement = document.getElementById("choices");
        const nextButton = document.getElementById("next-btn");

        function loadQuestion() {
            const question = questions[currentQuestion];
            const questionText = `<p>${question.question}</p>`;
            const questionImage = `<img src="${question.image}" alt="Question Image" />`;

            questionElement.innerHTML = questionText + "<br>" + questionImage;
            choicesElement.innerHTML = '';

            question.choices.forEach((choice, index) => {
                const choiceElement = document.createElement("div");
                choiceElement.className = "choice";

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `choice-${index}`;
                checkbox.value = index;

                const label = document.createElement("label");
                label.textContent = `  ${choice}`;
                label.htmlFor = `choice-${index}`;

                choiceElement.appendChild(checkbox);
                choiceElement.appendChild(label);

                choicesElement.appendChild(choiceElement);
            });
        }

function checkAnswer() {
    const question = questions[currentQuestion];
    const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedIndexes = Array.from(selectedCheckboxes).map(checkbox => parseInt(checkbox.value));

    const isCorrect = JSON.stringify(selectedIndexes.sort()) === JSON.stringify(question.correctAnswers.sort());

    if (isCorrect) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    choicesElement.innerHTML = '';
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    checkAnswer();
});

loadQuestion();
