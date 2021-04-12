const canvas = document.querySelector(".pay--canvas");
const ctx = canvas.getContext("2d");
initCanvas(canvas);
const payButton = document.querySelector(".pay_button");
const popupSecond = document.querySelector(".popup_second")
const checklist = document.querySelector(".checklist");
const button = document.querySelector(".after_button");
const nowTime = new Date().getTime();
const timeOut = JSON.parse(localStorage.getItem("timeout"));
const hintPopup = document.querySelector('.hint-popup');
let cnt = 0;

canvas.addEventListener("touchmove", function(e) {
    cnt++;
})
canvas.addEventListener("touchend", function() {
    if(cnt > 50) {
        // alert("계산 성공!");
        button.classList.add("after_button_active");
        play();
        button.onclick = () => {
            const newTime = new Date().getTime();
            const diffSeconds = (newTime - nowTime) / (1000);

            timeOut.game4 = diffSeconds;
            localStorage.setItem("timeout", JSON.stringify(timeOut));
            location.href = 'invite.html';
        }
        cnt = 0;
    }
})
payButton.addEventListener("click", function() {
    this.parentElement.classList.remove("popup_second");
    this.remove();
})
checklist.addEventListener("click", function() {
    popupSecond.style.animation = 'hint 8s forwards';
    setTimeout(() => popupSecond.style.animation = '', 8000);
})
setTimeout(() => {
    hintPopup.style.visibility = 'visible';
    hintPopup.style.opacity = 1;    
}, 10000);
setTimeout(() => {
    hintPopup.style.visibility = 'hidden';
    hintPopup.style.opacity = 0;    
}, 14000);