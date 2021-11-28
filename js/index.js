const keys = document.querySelectorAll(".key__item");
keys.forEach(btn => { btn.addEventListener("click", playSound) });
function playSound(event) {
    

    // console.log(event.keyCode);
    const code = event.keyCode || event.currentTarget.dataset.key;
    console.log(code);
   const audio = document.querySelector(`audio[data-key='${code}']`);
const key = document.querySelector(`.key__item[data-key='${code}']`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}

window.addEventListener('keydown', playSound)

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
            
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));