const plusBtns = document.querySelectorAll('.plus.btn');
const minusBtns = document.querySelectorAll('.minus.btn');

plusBtns.forEach((plusBtn, idx) => {
    plusBtn.addEventListener('click', () =>{
        const currentAnswerIndex = 'answer-' + (idx + 1);
        const answer = document.getElementById(currentAnswerIndex);

        answer.classList.add('active');
        plusBtn.classList.add('hidden'); 
        minusBtns[idx].classList.remove('hidden');
       
    });
});

minusBtns.forEach((minusBtn, idx) => {
    minusBtn.addEventListener('click', () =>{
        const currentAnswerIndex = 'answer-' + (idx + 1);
        const answer = document.getElementById(currentAnswerIndex);

        answer.classList.remove('active');
        minusBtn.classList.add('hidden'); 
        plusBtns[idx].classList.remove('hidden');       
    });
});