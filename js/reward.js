const write = document.querySelector(".write");
const conti = document.querySelector(".continue");
const timeoutDom = document.querySelector(".timeout");
const timeout = parseInt(localStorage.getItem("timeout"));
const minute = Math.floor(timeout/60);
const seconds = timeout%60;
timeoutDom.innerText = `${minute}분 ${seconds}초`;
write.addEventListener("click", function() {
    location.href = 'diary.html';
})
conti.addEventListener("click", function() {
    location.href = 'main.html';
})