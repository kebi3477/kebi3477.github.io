const popup = document.querySelector(".popup");
const main = document.querySelector(".main");
const clickable = document.querySelector(".clickable");
const exit = document.querySelector(".exit");
try {
    const name = localStorage.getItem("nickName");
    setNickname(name);
} catch(err) {
    localStorage.setItem("nickName", "");
    setNickname();
}
clickable.onclick = () => {
    popup.classList.remove("popup-hidden");
    popup.classList.add("popup-active");
}
exit.onclick = () => {
    popup.classList.remove('popup-active');
    popup.classList.add("popup-hidden");
}

function setNickname(name="guest") {
    const label = document.createElement("label");
    label.innerText = `${name} 님`;
    label.classList.add("nickname");
    main.append(label);
}