const menu = document.querySelector('.menu'); //botao
const navitems = document.querySelector('.nav-items'); //itens menu


menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navitems.classList.toggle('ativo');
})