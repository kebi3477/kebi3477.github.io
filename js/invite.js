const invite = document.querySelector(".invite");
const canvas = document.querySelector("canvas");
const hintBtn = document.querySelector(".hint_button")
const hint = document.querySelector(".hint");
const items = [false, false, false];
const checkBoxs = document.querySelectorAll(".check_box");
const button = document.querySelector(".after_button");
const nowTime = new Date().getTime();
const timeOut = JSON.parse(localStorage.getItem("timeout"));
const hintPopup = document.querySelector('.hint-popup');

initCanvas(canvas);
setTimeout(() => invite.style.backgroundImage = "url(images/background/15_after_v1.png)", 3500)
hintBtn.addEventListener("click", function() {
    hint.style.animation = 'hint 8s forwards';
    setTimeout(() => hint.style.animation = '', 8000);
})

canvas.addEventListener("touchmove", function(e) {
    checkBoxs.forEach((box, index) => {
        !items[index] && checkByDom(box) ? items[index] = true : "";
    })
})
canvas.addEventListener("touchend", function() {
    if(items.filter(data => data).length === items.length) {
        button.classList.add("after_button_active");
        play();
        button.onclick = () => {
            const newTime = new Date().getTime();
            const diffSeconds = (newTime - nowTime) / (1000);

            timeOut.game5 = diffSeconds;
            localStorage.setItem("timeout", JSON.stringify(timeOut));
            location.href = 'reward.html';
        }
    }
})
setTimeout(() => {
    hintPopup.style.visibility = 'visible';
    hintPopup.style.opacity = 1;    
}, 8000);
setTimeout(() => {
    hintPopup.style.visibility = 'hidden';
    hintPopup.style.opacity = 0;    
}, 12000);