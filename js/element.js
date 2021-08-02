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
        dom: `<div class="intro">
        <div class="intro__wrap max-width">
            <div class="intro__left">
                <div class="intro__text">안녕하세요<br>저는 고동민입니다. 저를 소개해 드릴까요?<br>이미지를 눌러보세요!</div>
                <div class="intro__texts">
                    <div class="intro__text title">안녕하세요</div>
                    <div class="intro__text text"></div>
                </div>
            </div>
            <!-- 
                1. 개발자 고동민
                2. JavaSript
                3. 
                4. 긍정적
                5.  --> 
            <div class="intro__right">
                <div class="circle__list">
                    <div class="circle__item">
                        <img src="images/my.jpg">
                    </div>
                    <div class="circle__item">
                        <img src="images/javascript.svg">
                    </div>
                    <div class="circle__item">
                        <object data="images/positive-vote.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="circle__item">
                        <object data="images/confidence.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="circle__item">
                        <object data="images/goal.svg" type="image/svg+xml"></object>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="language">
        <div class="language__title max-width">LANGUAGE</div>
        <div class="language__list max-width">
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/html.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">HTML</div>
                <div class="language__text">시멘틱 태그<br></div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/css.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">CSS</div>
                <div class="language__text">KeyFrames<br>Media query</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <i class="fab fa-js"></i>
                </div>
                <div class="language__name">JavaSript</div>
                <div class="language__text">주력언어<br>Vanilla Js, ECMAScript</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <i class="fab fa-php"></i>
                </div>
                <div class="language__name">php</div>
                <div class="language__text">MVC, Mail Server<br>Custom Message</div>
            </div>
        </div>
        <div class="language__title max-width">FRAMEWORK</div>
        <div class="language__list max-width">
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/node.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">Node.js</div>
                <div class="language__text">주력 프레임워크<br>Express, File-session</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/spring.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">Spring</div>
                <div class="language__text">Mybatis + DAO 데이터 통신</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/vue.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">Vue.js</div>
                <div class="language__text">Vue Directive를 이용한 페이지 구축</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/react.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">React.js</div>
                <div class="language__text">Route, status를 통한 SPA 구축</div>
            </div>
        </div>
        <div class="language__title max-width">TOOL</div>
        <div class="language__list max-width">
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/vscode.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">Vs Code</div>
                <div class="language__text">코드 작성</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/git.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">git</div>
                <div class="language__text">버전 관리</div>
            </div>
            <div class="language__item">
                <div class="language__image">
                    <object data="images/language/notion.svg" type="image/svg+xml"></object>
                </div>
                <div class="language__name">Notion</div>
                <div class="language__text">문서 정리</div>
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