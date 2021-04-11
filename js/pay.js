const canvas = document.querySelector(".pay--canvas");
initCanvas(canvas);
const payButton = document.querySelector(".pay_button");
const button = document.querySelector(".after_button");
const nowTime = new Date().getTime();
const timeOut = localStorage.getItem("timeout");
let cnt = 0;

canvas.addEventListener("touchmove", function(e) {
    cnt++;
})
canvas.addEventListener("touchend", function() {

    if(cnt > 50) {
        // alert("계산 성공!");
        button.classList.add("after_button_active");
        button.onclick = () => {
            const newTime = new Date().getTime();
            const diffSeconds = (newTime - nowTime) / (1000);

            localStorage.setItem("timeout", parseInt(timeOut)+diffSeconds);
            location.href = 'invite.html';
        }
        cnt = 0;
    }
})
payButton.addEventListener("click", function() {
    this.parentElement.classList.remove("popup_second");
})