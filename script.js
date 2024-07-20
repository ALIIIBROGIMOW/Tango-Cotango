function handle() {
    let inputs = document.querySelectorAll("input, textarea"); 
    let input_values = [];
    inputs.forEach(element => {
        input_values.push(element.value);
    });
    alert(input_values.join(', ')); 
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);

document.querySelector('.menu-toggle').addEventListener('click', function() {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const toggle = document.querySelector('.menu-toggle');

    nav.classList.toggle('nav-active');
    toggle.classList.toggle('toggle-active');

    if (nav.classList.contains('nav-active')) {
        openMenu(nav, toggle);
    } else {
        closeMenu(toggle);
    }
}
function openMenu(nav, toggle) {
    toggle.style.right = (nav.offsetWidth + 10) + 'px';
}
function closeMenu(toggle) {
    toggle.style.right = '10px';
}

let touchStartX = null;
let touchStartY = null;
const swipeThreshold = 50;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}, false);


document.addEventListener('touchend', function(event) {
    if (touchStartX === null || touchStartY === null) {
        return;
    }
    let touchEndX = event.changedTouches[0].clientX;
    let touchEndY = event.changedTouches[0].clientY;

    let diffX = touchEndX - touchStartX;
    let diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        const nav = document.querySelector('nav ul');
        const toggle = document.querySelector('.menu-toggle');

        if (diffX < 0) {
            if (!nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        } else {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        }
    }

    touchStartX = null;
    touchStartY = null;
}, false);


$(document).ready(function(){
    function initializeSlider() {
    }
    
    function adjustSliderForScreenWidth() {
        var screenWidth = $(window).width();        
        if (screenWidth <= 767) { 
            $('.slider').bxSlider({
                auto: true,
                mode: 'horizontal',
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 10,
                infiniteLoop: true,
                captions: true,
                slideWidth: 250
            });
        } else {
            $('.slider').bxSlider({
                auto: true,
                mode: 'horizontal',
                minSlides: 5,
                maxSlides: 5,
                moveSlides: 1,
                slideMargin: 10,
                infiniteLoop: true,
                captions: true,
                slideWidth: 250
            });
        }
    }

    // Инициализация слайдера при загрузке страницы
    adjustSliderForScreenWidth();
    
    // Перенастроить слайдер при изменении размера окна
    $(window).resize(function(){
        adjustSliderForScreenWidth();
    });
});



let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',

            block: 'start'})


        })

    })
