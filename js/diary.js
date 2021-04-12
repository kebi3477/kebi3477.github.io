const canvas = document.querySelector(".diary--canvas");
const ctx = canvas.getContext("2d");
const buttonItemRed = document.querySelector(".button__item--red");
const buttonItemYellow = document.querySelector(".button__item--yellow");
const buttonItemGreeen = document.querySelector(".button__item--green");
const buttonItemBlue = document.querySelector(".button__item--blue");
const buttonItemBlack = document.querySelector(".button__item--black");
const buttonItemLight = document.querySelector(".button__item--light");
const buttonItemRegular = document.querySelector(".button__item--regular");
const buttonItemBold = document.querySelector(".button__item--bold");
const buttonHome = document.querySelector(".button__home");
const buttonAgain = document.querySelector(".button__again");
const saveDiary = document.querySelector('.save-diary');
let vh = window.innerHeight * 0.01;

initCanvas(canvas);

buttonItemRed.onclick = function() { setStrokeColor("red", this) };
buttonItemBlue.onclick = function() { setStrokeColor("blue", this) };
buttonItemGreeen.onclick = function() { setStrokeColor("green", this) };
buttonItemBlack.onclick = function() { setStrokeColor("#333", this) };
buttonItemYellow.onclick = function() { setStrokeColor("yellow", this) };
buttonItemLight.onclick = function() { setStrokeWidth(2, this) };
buttonItemRegular.onclick = function() { setStrokeWidth(6, this) };
buttonItemBold.onclick = function() { setStrokeWidth(10, this) };
buttonHome.onclick = () => location.href = 'main.html';
buttonAgain.onclick = () => {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.documentElement.style.setProperty('--vh', `${vh}px`);

saveDiary.onclick = () => {
    html2canvas(document.querySelector(".diary"))
    .then(function (canvas2) {
        const dataURL = canvas2.toDataURL('image/png');
        const aTag = document.createElement('a');
        
        dataURL = dataURL.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
        dataURL = dataURL.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
        aTag.download = 'myDiary.png';
        aTag.href = dataURL;
        aTag.click();
    }).catch(function (err) {
        console.log(err);
    });
}

function setStrokeColor(color, that=null) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    resetSelected("color");
    that.classList.add("selected");
}

function setStrokeWidth(width, that=null) {
    ctx.beginPath();
    ctx.lineWidth = width;
    resetSelected("size");
    that.classList.add("selected");
}

function resetSelected(type) {
    const imgs = document.querySelectorAll(`.${type} > img`);
    imgs.forEach(el => el.classList.remove("selected"));
}