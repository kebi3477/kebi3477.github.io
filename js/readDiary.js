const next = document.querySelector(".next");
const text = document.querySelector(".text");
const nickName = localStorage.getItem("nickName");
const nowTime = new Date().getTime();

next.onclick = () => {
    const newTime = new Date().getTime();
    const diffSeconds = (newTime - nowTime) / (1000);
    localStorage.setItem("timeout", diffSeconds);
    location.href = "home.html";
}
text.innerHTML = `${nickName}님이 작성하신<br>일기를 읽어주세요!!`;