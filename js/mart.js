const canvas = document.querySelector(".mart--canvas");
initCanvas(canvas)
const items = {
    item1: false,
    item2: false,
    item3: false,
    item4: false
}
canvas.addEventListener("touchmove", function(e) {
    !items.item1 && isCheck(60, 30, 270, 160, mousePos) ? items.item1 = true : "";
    !items.item2 && isCheck(490, 200, 610, 350, mousePos) ? items.item2 = true : "";
    !items.item3 && isCheck(750, 200, 980, 350, mousePos) ? items.item3 = true : "";
    !items.item4 && isCheck(560, 400, 830, 550, mousePos) ? items.item4 = true : "";
    localStorage.setItem("items", JSON.stringify(items));
})
canvas.addEventListener("touchend", function() {
    if(items.item1 && items.item2 && items.item3 && items.item4) {
        alert("장보기 완료!");
        window.location = './diary.html';
    }
})

function isCheck(xStart, yStart, xEnd, yEnd, mousePos) {
    if(mousePos.x > xStart && mousePos.y > yStart && mousePos.x < xEnd && mousePos.y < yEnd) {
        return true;
    }
}
