const infoText = [{
    title: "개발자 고동민",
    text: `협업과 커뮤니케이션을 가장 중요하게 생각하는 개발자입니다.<br>
    제가 생각하기에 개발자에게 무엇보다 중요한건 협력과 커뮤니케이션이라고 생각합니다.<br>
    팀 프로젝트를 작업하면서 진행 및 개발 상황을 팀원들과 확인하며 원활하게 소통하려고 노력했었습니다.`
},
{
    title: "JavaScript는 저에게",
    text: "B"   
},
{
    title: "긍적적인 에너지",
    text: "C"   
},
{
    title: "절대적인 자신감",
    text: "D"   
},
{
    title: "끊임없는 노력파",
    text: "E"   
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
            <div class="intro__text title">${infoText[index].title}</div>
            <div class="intro__text text">${infoText[index].text}</div>
        `
        introLeft.append(wrap);
    }
})