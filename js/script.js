
//hamburger
let menuToggle = document.getElementById('menu-toggle'),
menu = document.querySelector('.headConteiner ul');

let click = false;

menuToggle.addEventListener('click', ()=>{
    click = !click;
    if(click){
        menuToggle.className = 'open';
        menu.style.setProperty('left','0');
    }else{
        menuToggle.className = '';
        menu.style.setProperty('left','100%');
    }
});