let buttomDrowtown = document.getElementById('buttom-drowtown-menu');
let menuDrowtown = document.getElementById('menu-drowtown');
let buttomClose = document.getElementById('buttom-closed');
let navBar = document.getElementById('navbar-conferpress')

buttomDrowtown.addEventListener('click', ()=>{
    menuDrowtown.classList.add('active');
});

buttomClose.addEventListener('click', ()=>{
    menuDrowtown.classList.remove('active')
});

window.addEventListener('scroll', ()=> {
    navBar.classList.toggle("active-bottom", window.scrollY>=50);
})



