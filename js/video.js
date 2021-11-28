const refs = {
    player: document.querySelector('.player'),
    video: document.querySelector('.viewer'),
    toogle: document.querySelector('.toggle'),
    skipBuutons: document.querySelectorAll('[data-skip]'),
    ranger: document.querySelectorAll('.player__slider'),
    progressBar: document.querySelector('.progress__filled'),
    progress: document.querySelector('.progress'),
};
console.log(refs.skipBuutons);

function tooglePlay() {
    const metod = refs.video.paused ? 'play' : 'pause';
    refs.video[metod]();

}

function updateButton() {
    const icon = this.paused ? '▶️' : '❚ ❚';
    refs.toogle.textContent = icon;

}


refs.video.addEventListener('click', tooglePlay);
refs.toogle.addEventListener('click', tooglePlay);
refs.video.addEventListener('play', updateButton);
refs.video.addEventListener('pause', updateButton);
refs.skipBuutons.forEach(btn => {
    btn.addEventListener('click', skip);
})
refs.ranger.forEach(renge => renge.addEventListener('input', handleChangeAppdate));
refs.video.addEventListener('timeupdate', handleProgress);

function skip() {
    console.log(this.dataset.skip);
    refs.video.currentTime += parseFloat(this.dataset.skip);
}

function handleChangeAppdate() {
    console.log(this.name);
    console.log(this.value);
    refs.video[this.name] = this.value;

}

function handleProgress() {
    const percent = (refs.video.currentTime / refs.video.duration) * 100;
    refs.progressBar.style.flexBasis = `${percent}%`;
}

function skrub(event) {
    const skrubTime = (event.offsetX / refs.progress.offsetWidth) * refs.video.duration;
    refs.video.currentTime = skrubTime;

}
let mousedown = false;
refs.progress.addEventListener('click', skrub);
refs.progress.addEventListener('mousemove', event => mousedown && skrub(event));
refs.progress.addEventListener('mousedown', () => (mousedown = true));
refs.progress.addEventListener('mouseup', () => (mousedown = false));