const caixa = document.querySelector('.conteiner');
const text = document.querySelector('.conteiner__para');

caixa.addEventListener("click", troca1);
caixa.addEventListener("mouseenter", troca2);
caixa.addEventListener("mouseleave", troca3);


function troca1() {
    caixa.style.background = 'green';
    text.style.color = 'black';
}

function troca2() {
    caixa.style.background = 'pink';
    text.style.color = 'white';
}

function troca3() {
    caixa.style.background = 'blue';
    text.style.color = 'yellow';
}