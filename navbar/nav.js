const menu_btn = document.querySelector('#menu');
const nav_list = document.querySelector('#nav_list');
menu_btn.setAttribute('rotate', 90)

menu_btn.addEventListener('click', function(){
    let showMenu = nav_list.classList.contains('show_menu');
    if(showMenu === true){
        nav_list.classList.remove('show_menu');
        
    }
    else{
        nav_list.classList.add('show_menu');
    }


})