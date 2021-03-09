const popup = document.querySelector(".popup");
const loadingText = document.querySelector(".loading-text");
const backgroundsWrap = document.querySelector(".backgrounds-wrap");
const startBtn = document.querySelector(".start");
const setBtn = document.querySelector(".setsave");

startBtn.onclick = () => backgroundsWrap.classList.add("slide");
setBtn.onclick = () => {
    const name = document.querySelector(".name");
    localStorage.setItem("nickName", name.value);
    name.value = "";
    setInterval(() => loadingText.innerText = loadingText.textContent + ".", 100);
    popup.classList.add("popup-active");
    setTimeout(() => location.href = "main.html", 1000);   
}