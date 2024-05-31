const nav = document.getElementById("nav-top");

nav.addEventListener('click',function() {
    var menu = document.getElementById('nav-side');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
})

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.style.display = 'none';
    }
})