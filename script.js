const headerFlagLanguage = document.getElementById('headerFlagLanguage');
const navButtonMenu = document.getElementById('navButtonMenu');
const headerNavList = document.querySelector('.header__nav__list');

if (CN_LANG) {
    headerFlagLanguage.src = '/images/usa.png';
} else {
    headerFlagLanguage.src = '/images/china.png';
}

navButtonMenu.addEventListener('click', function () {
    if (headerNavList.style.display === 'flex') {
        headerNavList.style.display = 'none';
    } else {
        headerNavList.style.display = 'flex';
    }
});
