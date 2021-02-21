const canvas = document.querySelector(".diary--canvas");
const ctx = canvas.getContext("2d");
const buttonItemRed = document.querySelector(".button__item--red");
const buttonItemBlue = document.querySelector(".button__item--blue");
const buttonItemGreeen = document.querySelector(".button__item--green");
const buttonItemBlack = document.querySelector(".button__item--black");
// const buttonItemWhite = document.querySelector(".button__item--white");
const buttonItemReset = document.querySelector(".button__item--reset");

initCanvas(canvas);

buttonItemRed.onclick = () => setStrokeColor("red");
buttonItemBlue.onclick = () => setStrokeColor("blue");
buttonItemGreeen.onclick = () => setStrokeColor("green");
buttonItemBlack.onclick = () => setStrokeColor("#333");
// buttonItemWhite.onclick = () => setStrokeColor("#fff");
buttonItemReset.onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

function setStrokeColor(color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
}