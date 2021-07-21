const element = [
    {
        url: '/',
        dom: `<div class="visual">
        <div class="visual__wrap max-width">
            <div class="visual__text visual__text--big">Hi, My name is <span class="visual__text visual__text--bold">KEBI</span></div>
            <div class="visual__text visual__text--small">
                안녕하세요, 열정적인 백앤드 개발자를 희망하고 있는 고동민이라고 합니다.<br>
                저의 홈페이지에 접속해주셔서 정말 감사합니다!
            </div>
            <div class="icon__list">
                <a href="https://github.com/kebi3477" target="_blank"><div class="icon__item"><i class="fab fa-github"></i></div></a>
                <a href="https://www.instagram.com/kebi_ko/" target="_blank"><div class="icon__item"><i class="fab fa-instagram"></i></div></a>
            </div>
        </div>
        <div class="visual--black"></div>
    </div>
    <div class="hashtag__list"></div>
    <div class="about max-width">
        <div class="title">
            <div class="title__text title__text--big">ABOUT ME</div>
            <div class="title__text title__text--small">제가 지금까지 사용했던 언어 및 툴 들입니다. 좀 더 자세한 내용은 ABOUT에서 확인하실 수 있습니다.</div>
        </div>
        <div class="about__list">
            <div class="about__item">
                <div class="about__image"><i class="fas fa-code"></i></div>
                <div class="about__text about__text--bold">Language</div>
                <div class="about__text about__text--small">HTML5, CSS3, JavaScript, Php, Java</div>
            </div>
            <div class="about__item">
                <div class="about__image"><i class="fas fa-laptop-code"></i></div>
                <div class="about__text about__text--bold">Framework</div>
                <div class="about__text about__text--small">React.js, Vue.js, Node.js, Spring</div>
            </div>
            <div class="about__item">
                <div class="about__image"><i class="fas fa-tools"></i></div>
                <div class="about__text about__text--bold">Tools</div>
                <div class="about__text about__text--small">Visual Studio Code, git, Notion</div>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="title">
            <div class="title__text title__text--big">PROJECT</div>
            <div class="title__text title__text--small">공사 중 입니다.</div>
        </div>
    </div>
    <div class="blog">
        <div class="title">
            <div class="title__text title__text--big">BLOG</div>
            <div class="title__text title__text--small">공사 중 입니다.</div>
        </div>
    </div>`
    }, {
        url: '/about',
        dom: `<div class="about max-width">
            <div class="about__grid about__grid--top">
                <div class="about__text--name">
                    고동민
                </div>
                <div class="about__image">
                    <img src="images/profile.png" alt="profile">
                    <div class="about__circle"></div>
                    <div class="about__circle"></div>
                    <div class="about__circle"></div>
                </div>
                <div class="about__text">
                    <div class="about__text--big">INFORMATION</div>
                    <i class="fas fa-phone-alt"></i>010-5295-6530<br>
                    <i class="fas fa-envelope"></i>kebi3477@naver.com<br>
                    <i class="fas fa-birthday-cake"></i>2000. 02. 11.<br>
                    <i class="fab fa-github"></i><a href="https://github.com/kebi3477" target="_blank">https://github.com/kebi3477</a>
                </div>
            </div>
            <div class="about__grid about__grid--icons">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js"></i>
                <i class="fab fa-php"></i>
                <i class="fas fa-database"></i>
                <i class="fab fa-node"></i>
                <i class="fab fa-git-alt"></i>
            </div>
            <div class="about__grid about__grid--between">
                <div class="about__text">
                    <div class="about__text--big">EDUCATION</div>
                    2018. 02. 영주고등학교 컴퓨터공업과 졸업<br>
                    2020. 11. 공군 정보체계관리단 SW개발지원병 만기 전역<br>
                    2022. 03. 한국폴리텍대학 제주캠퍼스 융합디자인학과 졸업예정<br>
                </div>
                <div class="about__text">
                    <div class="about__text--big">AWARD</div>
                    2017 전국기능경기대회 정보기술 부문 장려상<br>
                    2018 벤처창업아이템 공모전 장려상<br>
                    2018 제 6회 K-Hackathon 우수상<br>
                    2021 지방기능경기대회 웹디자인 및 개발 부문 금메달<br>                 
                </div>
                <div class="about__text">
                    <div class="about__text--big">LICENSE</div>
                    웹디자인기능사<br>
                    정보처리기능사<br>
                    정보기기운용기능사<br>
                </div>
            </div>
        </div>
    </div>`
    }, {
        url: '/project',
        dom: `<div class="project">
            <div class="project__header">
                <div class="project__text project__text--big">고동민의 프로젝트</div>
                <div class="project__text">제가 지금까지 작업했던 프로젝트들 입니다. 클릭하시면 자세한 내용을 확인하실 수 있습니다.</div>
            </div>
            <div class="project__body max-width">
                <div class="project__list">
                    <div class="project__item">
                        <div class="project__image">
                            <img src="images/jac.png" alt="jeju-and-coffe">
                        </div>
                        <div class="project__label project__label--bold">Jeju And Coffee</div>
                        <div class="project__label">제주에 있는 모든 카페 정보들을 안내하는 웹 페이지</div>
                    </div>
                    <div class="project__item">
                        <div class="project__image">
                            <img src="images/transition.png" alt="alife">
                        </div>
                        <div class="project__label project__label--bold">모바일 장병 출타체계</div>
                        <div class="project__label">공군 장병 출타증 모바일 웹</div>
                    </div>
                    <div class="project__item">
                        <div class="project__image">
                            <img src="images/dmd.png" alt="dear-my-diary">
                        </div>
                        <div class="project__label project__label--bold">Dear-my-diary</div>
                        <div class="project__label">중노년층의 인지기능 강화를 위한 기능성 게임 개발</div>
                    </div>
                    <div class="project__item">
                        <div class="project__image">
                            <img src="images/alife.png" alt="alife">
                        </div>
                        <div class="project__label project__label--bold">ALife</div>
                        <div class="project__label">냉장고에 남은 음식을 최대한으로 활용하여 요리를 만드는 웹 페이지</div>
                    </div>
                </div>
            </div>
        </div>`
    }, {
        url: '/diary',
        dom: `<div class="bg">
                <div class="bg__wrap max-width">
                    <div class="bg__text bg__text--big">Hi, My name is <span class="bg__text bg__text--bold">KEBI</span></div>
                    <div class="bg__text bg__text--small">
                        diary
                    </div>
                    <div class="icon__list">
                        <div class="icon__item"></div>
                    </div>
                </div>
                <div class="bg--black"></div>
            </div>`
    }
]

export default element;