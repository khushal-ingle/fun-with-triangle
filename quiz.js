const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

const correctAnswer = ["90°","right angled"];

submitAnswerBtn.addEventListener("click",calculateScore);

function calculateScore(){
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let value of formResults.values()){
    if(value === correctAnswer[index]){
        score = score + 1;
    }
    index++;
  }
//   console.log(score);
  outputE1.innerText = "The final score is " + score;
}

