const boneco = document.querySelector('.boneco')
const espinho = document.querySelector('.espinho')
const score =document.querySelector('.score')
let alreadyJump =false;
let count = 0;

const jump = () => {
    boneco.classList.add('jump');

    setTimeout(() => {

        boneco.classList.remove('jump');

    }, 500)

}

const loop = setInterval(() => {
    
    const espinhoPosition = espinho.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '');

    count++;
    score.innerHTML = `SCORE: ${count}`;
    if (espinhoPosition < 190 && espinhoPosition > 0 && bonecoPosition < 85) {
        alert(`Game Over! Seu score foi: ${count}`);
        count = 0;

        espinho.style.animation ='none';
        espinho.style.left = `${espinhoPosition}px`;

        boneco.style.animation ='none';
        boneco.style.bottom = `${bonecoPosition}px`;
    
boneco.src='./images/game-over.png';
boneco.style.width = '100px';
boneco.style.marginLeft = '100px';
    
clearInterval(loop);
    
}

}, 10)
  
document.addEventListener('keydown', jump);