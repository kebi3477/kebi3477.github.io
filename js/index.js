class Hashtag {
    constructor(flag) {
        this.flag = flag;
        this.textArr = [["협력", "긍정적", "밝음", "분위기메이커"], ["재밌음", "열정적", "ESFJ", "고동민"]];
        this.hashtagList = document.querySelector('.hashtag__list');
        this.top = this.flag ? 50 : 800;
        this.left = this.flag ? 1900 : 0;
        this.speed = 1;
        this.init();
    }
    init() {
        this.hashtag = document.createElement('div');
        this.hashtag.classList.add('hashtag__item');
        this.hashtag.innerText = '#' + this.textArr[this.flag][Math.floor(Math.random()*this.textArr[this.flag].length)];
        this.hashtag.style.top = `${this.top}px`;
        this.hashtag.style.left = `${this.left}px`;
        this.hashtag.onmouseover = () => this.stop();
        this.hashtag.onmouseleave = () => this.start();
        this.hashtagList.append(this.hashtag);
        this.count = this.flag ? 0 : -this.hashtag.offsetWidth;
        this.start();
    }
    start() {
        this.interval = setInterval(() => this.moving(), 10);
    }
    stop() {
        clearInterval(this.interval);
    }
    moving() {
        if(this.count < -1920-this.hashtag.offsetWidth && this.flag) {
            this.restart();
        } else if(this.count > window.innerWidth && !this.flag){
            this.restart();
        }
        this.flag ? this.count-=this.speed : this.count+=this.speed;
        this.hashtag.style.transform = `translate(${this.count}px)`;
    }
    restart() {
        this.stop();
        this.hashtag.remove();
        this.init();
    }
}

const hashtag = new Hashtag(0);
const hashtag2 = new Hashtag(1);
const bg = document.querySelector('.bg');
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;

window.onmousemove = e => moveBackground(e);

function moveBackground(e) {
    const x = +(e.clientX / middleX).toFixed(2)*-10-20;
    const y = +(e.clientY / middleY).toFixed(2)*-10;
    bg.style.backgroundPosition = `${x}px ${y}px`;
}