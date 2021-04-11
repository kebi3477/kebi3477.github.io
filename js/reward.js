const write = document.querySelector(".write");
const conti = document.querySelector(".continue");
const timeoutDom = document.querySelector(".timeout");
const timeout = JSON.parse(localStorage.getItem("timeout"));
const timeoutItems = document.querySelectorAll('.timeout-item');
let time = 0, minute = 0, seconds = 0;

Object.values(timeout).forEach((value, index) => {
    timeoutItems[index].innerText = `${Math.floor(value)}초`;
    time += Math.floor(value);
})
minute = Math.floor(time/60);
seconds = Math.floor(time%60);

timeoutDom.innerText = `${minute}분 ${seconds}초`;
write.addEventListener("click", function() {
    location.href = 'diary.html';
})
conti.addEventListener("click", function() {
    location.href = 'main.html';
})