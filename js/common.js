import element from './element.js';
const content = document.querySelector('.content');
const menuItems = document.querySelectorAll('.menu__item, .logo');
let sliderFlag = 1, prevPath = "";

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        const pathName = event.target.getAttribute('route');
        
        sliderFlag = sliderFlag ? 0 : 1;
        historyRouterPush(pathName, content);
    })
})
window.onpopstate = () => renderHTML(content, window.location.pathname);

const historyRouterPush = (pathName, dom) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderHTML(dom, pathName);
}

const renderHTML = (dom, route) => {
    element.forEach(el => {
        if(el.url === route && prevPath !== el.url) {
            dom.innerHTML = el.dom;
            prevPath = el.url;
        }
    })
}