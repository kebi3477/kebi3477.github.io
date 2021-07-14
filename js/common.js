import element from './element.js';
const menuItems = document.querySelectorAll('.menu__item');
const content = document.querySelector('.content');

menuItems.push(document.querySelector('.logo'));
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        const pathName = event.target.getAttribute('route');
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
        if(el.url === route) {
            dom.innerHTML = el.dom;
        }
    })
}