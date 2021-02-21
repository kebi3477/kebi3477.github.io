const canvas = document.querySelector(".maze--canvas");

const items = {
    item1: false,
    item2: false
}
initCanvas(canvas);
canvas.addEventListener("touchstart", function(e) {
    isCheck(265, 190, 370, 230, mousePos) ? items.item1 = true : "";
})
canvas.addEventListener("touchend", function(e) {
    isCheck(1000, 500, 1055, 550, mousePos) ? items.item2 = true : "";
    if(items.item1 && items.item2) {
        alert("미로 성공!");
    } else {
        items.item1 = false;
        items.item2 = false;
    }
})
canvas.addEventListener("touchmove", function(e) {
    console.log(mousePos, items);
})

function isCheck(xStart, yStart, xEnd, yEnd, mousePos) {
    if(mousePos.x > xStart && mousePos.y > yStart && mousePos.x < xEnd && mousePos.y < yEnd) {
        return true;
    }
}