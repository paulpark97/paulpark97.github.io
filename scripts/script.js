let anchor = document.querySelector('.about-anchor');

anchor.addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
    });
});