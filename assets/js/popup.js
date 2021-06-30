let buttons = document.querySelectorAll('#btn');
let modal = document.querySelector('.modal');
let bg = document.querySelector('.bg');
let hidden = document.querySelector('html');

for(let button of buttons){
    button.addEventListener('click', ()  => {
        modal.classList.toggle('active');
        bg.classList.toggle('modalbg');
        hidden.classList.toggle('modal__active');
})}

bg.addEventListener('click', ()  => {
    modal.classList.remove('active');
    bg.classList.remove('modalbg');
    hidden.classList.remove('modal__active');
})

