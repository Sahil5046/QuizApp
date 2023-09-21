const quizdb = [
    {
        question: "Q1: Identify the correct extension of the user-defined header file in C++.",
        a: ".cpp",
        b: ".cp",
        c: ".c",
        d: ".java",
        ans: "ans1"
    },
    {
        question: "Q2: Which of the following is “address of operator”?.",
        a: "*",
        b: "&",
        c: "[]",
        d: "&&",
        ans: "ans2"
    },
    {
        question: "Q3: goto can be classified into?",
        a: "lable",
        b: "variable",
        c: "function",
        d: "operator",
        ans: "ans1"
    },
    {
        question: "Q4: Identify the scope resolution operator.",
        a: ":",
        b: "::",
        c: "?:",
        d: "none",
        ans: "ans2"
    }

]

const question = document.querySelector(".question");
const opt1 = document.querySelector("#option1")
const opt2 = document.querySelector("#option2")
const opt3 = document.querySelector("#option3")
const opt4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")

const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");


let QuestionCount = 0;
let score = 0;

const loadQuestion = () => {
    let list = quizdb[QuestionCount];
    // console.log(quizdb[QuestionCount].question);

    question.innerText = list.question;

    // console.log(list.question)
    opt1.innerText = list.a;
    opt2.innerText = list.b;
    opt3.innerText = list.c;
    opt4.innerText = list.d;
}

loadQuestion();


const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curElement)=>{
        if(curElement.checked)
        {
            // console.log(curElement.id)
            answer = curElement.id;
        }
    })
    return answer;
}

const deSelectAll = () => {
    answers.forEach((curElement)=>{
        curElement.checked = false;
    })
}


submit.addEventListener("click", () =>{
    const checkAnswer = getCheckAnswer();
    // console.log(checkAnswer);

    if(checkAnswer == quizdb[QuestionCount].ans)
    {
        score++;
    }

    QuestionCount++;

    deSelectAll();

    if(QuestionCount < quizdb.length)
    {
        loadQuestion();
    }
    else{
        showscore.innerHTML = `<h3>You scored ${score}/${quizdb.length}👍</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove("scorearea");
    }
})
