const canvas = document.querySelector(".diary--canvas");
const ctx = canvas.getContext("2d");
const buttonItemRed = document.querySelector(".button__item--red");
const buttonItemBlue = document.querySelector(".button__item--blue");
const buttonItemGreeen = document.querySelector(".button__item--green");
const buttonItemBlack = document.querySelector(".button__item--black");
const buttonItemLight = document.querySelector(".button__item--light");
const buttonItemRegular = document.querySelector(".button__item--regular");
const buttonItemBold = document.querySelector(".button__item--bold");
// const buttonItemWhite = document.querySelector(".button__item--white");
const buttonItemReset = document.querySelector(".button__item--reset");

initCanvas(canvas);

buttonItemRed.onclick = () => setStrokeColor("red");
buttonItemBlue.onclick = () => setStrokeColor("blue");
buttonItemGreeen.onclick = () => setStrokeColor("green");
buttonItemBlack.onclick = () => setStrokeColor("#333");
// buttonItemWhite.onclick = () => setStrokeColor("#fff");
buttonItemReset.onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
buttonItemLight.onclick = () => setStrokeWidth(2);
buttonItemRegular.onclick = () => setStrokeWidth(6);
buttonItemBold.onclick = () => setStrokeWidth(10);

function setStrokeColor(color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
}

function setStrokeWidth(width) {
    ctx.beginPath();
    ctx.lineWidth = width;
}