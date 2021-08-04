const infoText = [{
    title: "개발자 고동민",
    text: `개인적으로 개발자에게 무엇보다 중요한건 협력과 커뮤니케이션이라고 생각합니다.<br>
    저의 사람 자체를 중요하게 생각하는 성격 덕분에 사람들을 존중하면서 소통합니다.<br>
    또한 개인의 특성들을 빠르게 파악하고 조화롭게 연결시키는 것을 좋아합니다.`
},
{
    title: "JavaScript",
    text: `자바스크립트의 확장된 매력에 빠져있습니다.<br>
        ECMAScript 및 JS Framework들을 접하면서 흥미가 가기 시작했고,<br>
        현재는 주력 언어로 삼고 공부 또 공부하고 있습니다.`
},
{
    title: "긍정적",
    text: `행복을 챙길 수 있는 결정적인 에너지는 긍정에서 나온다고 생각합니다.<br>
    우리가 생각하는 이상적인 행복들과 개인이 느낄 수 있는 현실적인 행복을 구분하며,<br>
    상황이 주어졌을 때 얻는 행복의 양은 긍정적인 정도에 영향이 있다고 생각합니다.<br><br>
    저의 긍정적인 에너지와 행복은 자연스럽게 제 주변으로 확산된다고 믿고 있습니다. `   
},
{
    title: "자신감",
    text: `자신감있는 태도들이 사회에서 주는 영향에 대해서 중요하게 생각합니다.<br>
    아무리 노력해도 시도하지 않는 사람과 시도하는 사람은 천차만별이라고 느끼고<br>
    항상 자신감있는 태고를 유지하려고 노력하고 있습니다.`
},
{
    title: "책임감",
    text: `저를 움직이는 삶의 원동력입니다.<br>
    자기객관화를 할 때마다 책임감이라는 것이 엄청 중요하구나라는 것을 매 순간 느낍니다.<br>
    항상 더 나은 어른이 되기 위한 책임감이라는 계단을 밟고 오르는 중입니다.`
}
]
const introLeft = document.querySelector('.intro__left');
const circles = document.querySelectorAll('.circle__item');
circles.forEach((el, index) => {
    el.onclick = () => {
        const wrap = document.createElement('div');
        introLeft.querySelector('.intro__texts').remove();
        wrap.classList.add('intro__texts');
        wrap.innerHTML = `
            <div class="intro__text intro__text--bold">${infoText[index].title}</div>
            <div class="intro__text">${infoText[index].text}</div>
        `
        introLeft.append(wrap);
    }
})

window.onscroll = e => {
    console.log(window.scrollY/20);
    circles[0].style.top = `${window.scrollY/3}px`;
    circles[1].style.top = `${window.scrollY/1.5}px`;
    circles[2].style.top = `${14+window.scrollY/5}%`;
    circles[4].style.top = `${80+window.scrollY/20}%`;
}