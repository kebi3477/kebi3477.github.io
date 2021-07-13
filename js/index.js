class Hashtag {
    constructor(flag) {
        this.flag = flag;
        this.textArr = ["협력", "긍정적", "밝음", "분위기메이커", "재밌음", "열정적", "ESFJ"];
        this.hashtagList = document.querySelector('.hashtag__list');
        this.hashtag = document.createElement('div');
        this.top = this.flag ? 0 : 600;
        this.left = this.flag ? 1900 : 0;
        this.init();
    }
    init() {
        this.count = 0;
        this.hashtag.classList.add('hashtag__item');
        this.hashtag.innerText = this.textArr[Math.floor(Math.random()*this.textArr.length)];
        this.hashtag.style.top = `${this.top}px`;
        this.hashtag.style.left = `${this.left}px`;
        this.hashtagList.append(this.hashtag);
        this.start();
    }
    start() {
        setInterval(() => this.moving(), 1);
    }
    moving() {
        this.hashtags = document.querySelectorAll('.hashtag__item');
        this.hashtag.style.transform = `translate(${this.count}px)`;
        this.flag ? this.count-=.09 : this.count+=.09;
    }
}

const hashtag = new Hashtag(0);
const hashtag2 = new Hashtag(1);