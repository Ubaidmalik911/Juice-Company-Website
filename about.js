function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function toggleMenu() {
let menu = document.getElementById('mobileMenu');
if (menu.classList.contains('open')) {
menu.classList.add('closing');
setTimeout(() => {
    menu.classList.remove('open', 'closing');
}, 500);
} else {
menu.classList.add('open');
}
}