const c005 = localStorage.getItem("c005");
if(c005) {
    const food = JSON.parse(c005);
    const filterFood = food.filter(data => data.BAR_CD === "8801117539818");
    console.log(filterFood)
} else {
    console.log("loading start")
    fetch('https://openapi.foodsafetykorea.go.kr/api/008ad7dda9c84cf7b0f2/C005/json/1/1000')
    .then(data => data.json())
    .then(json => {
        localStorage.setItem("c005", JSON.stringify(json.C005.row));
        console.log("loading end");
    })
}