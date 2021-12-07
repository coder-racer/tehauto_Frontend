let Burger = false;

function burger_click(){
    Burger = !Burger;
    if (Burger) {
        document.querySelector(".burger_icon").classList.add('burger_icon_checked')
        document.querySelector(".burger_menu").classList.add('burger_menu_checked')
    }
    else {
        document.querySelector(".burger_icon").classList.remove('burger_icon_checked')
        document.querySelector(".burger_menu").classList.remove('burger_menu_checked')
    }
}