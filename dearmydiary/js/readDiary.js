const next = document.querySelector(".next");
const text = document.querySelector(".text");
const nickName = localStorage.getItem("nickName");

next.onclick = () => {
    localStorage.setItem('timeout', '{}');
    location.href = "home.html";
}

text.innerHTML = `${nickName}님이 작성하신<br>일기를 읽어주세요!!`;