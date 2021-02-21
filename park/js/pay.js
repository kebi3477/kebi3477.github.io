const canvas = document.querySelector(".pay--canvas");
initCanvas(canvas);
let cnt = 0;
canvas.addEventListener("touchmove", function(e) {
    cnt++;
})
canvas.addEventListener("touchend", function() {
    if(cnt > 250) {
        alert("계산 성공!");
        cnt = 0;
    }
})