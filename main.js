const STORAGE_KEY = 'LANG';

const STORAGE_LANG = localStorage.getItem(STORAGE_KEY);
const CN_LANG = STORAGE_LANG === 'CN';

function print(text) {
    document.write(text);
}

function changeLanguage() {
    const langValue = CN_LANG ? 'EN' : 'CN';
    localStorage.setItem(STORAGE_KEY, langValue)
    window.location.reload(true);
}
