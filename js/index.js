const popup = document.querySelector(".popup");
const loadingText = document.querySelector(".loading-text");
const backgroundsWrap = document.querySelector(".backgrounds-wrap");
const startBtn = document.querySelector(".start");
const setBtn = document.querySelector(".setsave");
const typing = document.querySelector('.typing');
const text = `집 청소를 하던 나는 서랍장 맨 위에서 작은 상자 하나를 꺼낸다./상자 속에는 빛이 바랜 일기장 한 권이 들어있었다./나는 일기장을 꺼내어 겉면에 먼지를 쓸었다./30대에 쓰던 일기장이었다./처음 다녔던 직장 이야기부터, 나의 결혼, 첫 아이, 첫 가족 여행 등 일상에서 내가 겪은 일들과 느낌들이 쓰여 있었다./오랜만에 보니 내가 잊고 있던 기억들이 하나둘씩 생각났다./어느 날은 기쁘고, 어느 날은 슬프고 정신없이 살다 보니 일기 쓰는 것도 잊고 살았다./이게 나의 기억이자 추억이었는데………달그락..!..(상자에서 열쇠 하나가 바닥으로 떨어진다)/"이게 무슨 열쇠지?.........."`;
const textArr = text.split('');

startBtn.onclick = () => backgroundsWrap.classList.add("slide");
setBtn.onclick = () => {
    const name = document.querySelector(".name");
    localStorage.setItem("nickName", name.value);
    name.value = "";
    setInterval(() => loadingText.innerText = loadingText.textContent + ".", 100);
    popup.classList.add("popup-active");
    setTimeout(() => location.href = "main.html", 1000);   
}

// const appendText = async (textArr) => {
//     for(let txt of textArr) {
//         await delay()
//         .then(() => {
//             if(txt === '/') {
//                 typing.textContent = '';
//             } else {
//                 typing.innerHTML = typing.textContent + txt
//             }
//         });
//     }
// }

// const delay = () => {
//     return new Promise(resolve => setTimeout(resolve, 100))
// }  

// appendText(textArr);