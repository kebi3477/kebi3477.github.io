const canvas = document.querySelector(".maze--canvas");
const checkBoxs = document.querySelectorAll(".check_box");
const afterButton = document.querySelector(".after_button");
const popupSecond = document.querySelector(".popup_second")
const checklist = document.querySelector(".checklist");
const nowTime = new Date().getTime();
const timeOut = JSON.parse(localStorage.getItem("timeout"));
const hintPopup = document.querySelector('.hint-popup');
let items = [false, false];

initCanvas(canvas);
canvas.addEventListener("touchstart", function(e) {
    checkByDom(checkBoxs[0]) ? items[0] = true : "";    
})
canvas.addEventListener("touchend", function(e) {
    checkByDom(checkBoxs[1]) ? items[1] = true : "";    
    if(items[0] && items[1]) {
        // alert("미로 성공!");
        afterButton.classList.add("after_button_active");
        play();
        afterButton.onclick = () => {
            const newTime = new Date().getTime();
            const diffSeconds = (newTime - nowTime) / (1000);
            
            timeOut.game2 = diffSeconds;
            localStorage.setItem("timeout", JSON.stringify(timeOut));
            location.href = 'mart.html';
        }
    }
})
checklist.addEventListener("click", function() {
    popupSecond.style.animation = 'hint 8s forwards';
    setTimeout(() => popupSecond.style.animation = '', 8000);
})
setTimeout(() => {
    hintPopup.style.visibility = 'visible';
    hintPopup.style.opacity = 1;    
}, 12000);
setTimeout(() => {
    hintPopup.style.visibility = 'hidden';
    hintPopup.style.opacity = 0;    
}, 16000);