const popups = document.querySelectorAll('.popup');
const popupSecond = document.querySelector('.popup_second');
const checklist = document.querySelector(".checklist");
const hintPopup = document.querySelector('.hint-popup');

popups.forEach(popup => {
    popup.addEventListener("click", function() {
        this.classList.add('fadeout');
        popupSecond.classList.add('popup-active');
    })
})

checklist.addEventListener("click", function() {
    popupSecond.classList.remove('fadeout')
})  

setTimeout(() => {
    hintPopup.style.visibility = 'visible';
    hintPopup.style.opacity = 1;
}, 12000);
setTimeout(() => {
    hintPopup.style.visibility = 'hidden';
    hintPopup.style.opacity = 0;    
}, 16000);