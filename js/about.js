const infoText = [{
    title: "고동민",
    text: "A"   
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