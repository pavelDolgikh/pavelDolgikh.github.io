'use strict';

const headMenu = document.querySelector('header nav')
const subheader = document.querySelector('.subheader');

const menuIO = new IntersectionObserver(function(entries){
    if(!entries[0].isIntersecting) headMenu.classList.add('fixed-menu');
    else headMenu.classList.remove('fixed-menu')
});
menuIO.observe(subheader);


const burger = document.querySelector('header .menu');

burger.addEventListener('click', function(e){
    e.stopPropagation();
    if(e.target.nodeName == 'UL' ) this.classList.toggle('menu_active')
})