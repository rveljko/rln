const openCloseMenu = document.getElementById('openCloseMenu');
const sideBar = document.getElementById('sideBar');
const overlay = document.getElementById('overlay');
const sideBarLinks = document.querySelectorAll('.sidebar__link');

window.addEventListener('load', () => {
    document.body.classList.remove('no-animations');
});

const openingClosingMenu = () => {
    if (sideBar.classList.contains('close')) {
        sideBar.classList.remove('close');
        openCloseMenu.classList.add('closehamburger');
        document.body.classList.add('noscroll');
        sideBar.classList.add('open');
        overlay.classList.remove('invisible');
        overlay.classList.add('visible');
    }
    else {
        sideBar.classList.remove('open');
        openCloseMenu.classList.remove('closehamburger');
        document.body.classList.remove('noscroll');
        sideBar.classList.add('close');
        overlay.classList.remove('visible');
        overlay.classList.add('invisible');
    }
}

openCloseMenu.addEventListener('click', openingClosingMenu);
overlay.addEventListener('click', openingClosingMenu);
sideBarLinks.forEach(sideBarLink => {
    sideBarLink.addEventListener('click', openingClosingMenu);
});