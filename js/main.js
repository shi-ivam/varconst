const btn = document.getElementById('btn-menu');
const cbtn = document.getElementById('c-btn-menu');

const navBar = document.querySelector('.nav-bar')
const menu = document.querySelector('.nav-bar .menu')


btn.addEventListener('click',() => {
    menu.style.left = '0px';
    menu.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
})

cbtn.addEventListener('click',() => {
    menu.style.left = '1000px';
    menu.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
})
