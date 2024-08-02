document.addEventListener('DOMContentLoaded', function() {
    var theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
});

document.getElementById('themico').addEventListener('click', function() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    var themeIcon = document.getElementById('themico');
    if (theme === 'dark') {
        themeIcon.src = 'images/Sun.png';
        themeIcon.alt = 'Switch to light theme';
    } else {
        themeIcon.src = 'images/Moon.png';
        themeIcon.alt = 'Switch to dark theme';
    }
}

let lastScrollTop = 0;
let lastScrollTopForReset = 0;
let scrollToTop = true;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!scrollToTop && currentScrollTop > lastScrollTopForReset) {
            const scrollButton = document.getElementById('scrollButton');
            scrollButton.classList.remove('flip');
            scrollToTop = true;
        }
    lastScrollTopForReset = currentScrollTop;
});

function scrollToTopOrLast() {
    const scrollButton = document.getElementById('scrollButton');
    if (scrollToTop) {
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollToTop = false;
        scrollButton.classList.add('flip');
    } else {
        window.scrollTo({ top: lastScrollTop, behavior: 'smooth' });
        scrollToTop = true;
        scrollButton.classList.remove('flip');
    }
}

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
$(document).ready(function() {
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
                slideWidth: 150
            });
        } else {
            $('.slider').bxSlider({
                auto: true,
                mode: 'horizontal',
                minSlides: 4,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin: 10,
                infiniteLoop: true,
                captions: true,
                slideWidth: 600
            });
        }
    }
    adjustSliderForScreenWidth();    
    $(window).resize(function() {
        adjustSliderForScreenWidth();
    });
});
let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'})
        })
    })
