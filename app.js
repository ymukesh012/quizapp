const questions = [
    {
        question: "Which of the following is a client-side language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;
let correct = 0;
let incorrect = 0;
const total = questions.length;

const questionBox = document.getElementById("questionBox");
const optionInput = document.querySelectorAll(".option");

const loadQuestion = () => {
    if (index >= total) {
        quizEnd();
        return; // Exit function if all questions have been answered
    }

    const data = questions[index];
    questionBox.textContent = `${index + 1}) ${data.question}`;
    optionInput[0].nextElementSibling.textContent = data.a;
    optionInput[1].nextElementSibling.textContent = data.b;
    optionInput[2].nextElementSibling.textContent = data.c;
    optionInput[3].nextElementSibling.textContent = data.d;
};

document.getElementById("submit").addEventListener("click", function() {
    const ans = getAnswer();
    const data = questions[index];
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
});

const getAnswer = () => {
    let ans;
    optionInput.forEach(inputEl => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
};

const quizEnd = () => {
    const container = document.querySelector(".container");
    container.style.backgroundColor = "#800080";
    
    container.innerHTML = `
        <div class="col">
            <h3 style ="text-align: center; color:white;"> Hi, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};

// Initial load of the first question
loadQuestion();