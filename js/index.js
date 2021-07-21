const visual = document.querySelector('.visual');
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;

window.onmousemove = e => moveBackground(e);

function moveBackground(e) {
    const x = +(e.clientX / middleX).toFixed(2)*-10-20;
    const y = +(e.clientY / middleY).toFixed(2)*-10;
    visual.style.backgroundPosition = `${x}px ${y}px`;
}