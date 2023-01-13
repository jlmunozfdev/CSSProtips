const buttonShow = document.getElementById('show');
undefined
const cardTwo = document.getElementById('card--two');
undefined


buttonShow.addEventListener('click', () => {
    cardTwo.style.visibility = 'visible';
})

const buttonOcultar = document.getElementById('ocultar');
undefined
const cardOne = document.getElementById('card--one');

buttonOcultar.addEventListener('click', () => {
  
    cardTwo.style.visibility = 'hidden';
   
});
