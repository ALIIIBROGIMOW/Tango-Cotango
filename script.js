function handle() {
    let inputs = document.querySelectorAll("input, textarea"); // Добавляем textarea в выборку
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

        if (diffX > 0) {
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