const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const header = document.querySelector('header');
const ul = document.querySelector('.ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    ul.classList.toggle('active');
})