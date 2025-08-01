document.getElementById("submit-answer").addEventListener('click', checkAnswer);
function checkAnswer(){
    const correctAnswer="4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    if(correctAnswer===userAnswer){
        feedbackElement.textContent="Correct! Well Done.";
    }
    else{
        feedbackElement.textContent="That's incorrect. Try again";
    }
}
