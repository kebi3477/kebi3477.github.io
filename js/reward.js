const write = document.querySelector(".write");
const conti = document.querySelector(".continue");
const timeoutDom = document.querySelector(".timeout");
const timeout = JSON.parse(localStorage.getItem("timeout"));
const timeoutItems = document.querySelectorAll('.timeout-item');
const time = timeout.game1 + timeout.game2 + timeout.game3 + timeout.game4 + timeout.game5;
const minute = Math.floor(time/60);
const seconds = Math.floor(time%60);

Object.values(timeout).forEach((value, index) => {
    timeoutItems[index].innerText = `${Math.floor(value)}초`;
})

timeoutDom.innerText = `${minute}분 ${seconds}초`;
write.addEventListener("click", function() {
    location.href = 'diary.html';
})
conti.addEventListener("click", function() {
    location.href = 'main.html';
})