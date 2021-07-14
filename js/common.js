import element from './element.js';
const content = document.querySelector('.content');
const menuItems = document.querySelectorAll('.menu__item, .logo');
const contentItems = document.querySelectorAll('.content__item');
let sliderFlag = 1, contentDom;

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        const pathName = event.target.getAttribute('route');
        contentDom = contentItems[sliderFlag];
        
        sliderFlag = sliderFlag ? 0 : 1;
        historyRouterPush(pathName, contentDom);
    })
})
window.onpopstate = () => renderHTML(contentDom, window.location.pathname);

const historyRouterPush = (pathName, dom) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderHTML(dom, pathName);
}

const renderHTML = (dom, route) => {
    element.forEach(el => {
        if(el.url === route) {
            dom.innerHTML = el.dom;
            sliderFlag ? content.classList.remove('active') : content.classList.add('active');
        }
    })
}