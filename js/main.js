const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body

// клік по кнопці

navBtn.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    toggleMobileNav();
})
//  ()=>{} ---===== function
 
// клік по вікну за межами навігації 

window.addEventListener('click', function () {
    console.log('Click on window');
    
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
        
    }
})

// зупиняємо клік по відкритій мобільній навігації

mobileNav.addEventListener('click', function (event) {
event.stopImmediatePropagation();
})

// функція яка замінює опис попередніх
function toggleMobileNav() {

    body.classList.toggle('no-scroll');
    navBtn.classList.toggle('nav-button-close');
    mobileNav.classList.toggle('mobile-nav-active')
}