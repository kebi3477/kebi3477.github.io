const invite = document.querySelector(".invite");
const canvas = document.querySelector("canvas");
const items = [false, false, false];
const checkBoxs = document.querySelectorAll(".check_box");
const button = document.querySelector(".send_button");
const nowTime = new Date().getTime();
const timeOut = JSON.parse(localStorage.getItem("timeout"));

initCanvas(canvas);
setTimeout(() => invite.style.backgroundImage = "url(images/background/15_after_v1.png)", 3500)

canvas.addEventListener("touchmove", function(e) {
    checkBoxs.forEach((box, index) => {
        !items[index] && checkByDom(box) ? items[index] = true : "";
    })
})
canvas.addEventListener("touchend", function() {
    if(items.filter(data => data).length === items.length) {
        button.classList.add("after_button_active");
        button.onclick = () => {
            const newTime = new Date().getTime();
            const diffSeconds = (newTime - nowTime) / (1000);

            timeOut.game5 = diffSeconds;
            localStorage.setItem("timeout", JSON.stringify(timeOut));
            location.href = 'reward.html';
        }
    }
})