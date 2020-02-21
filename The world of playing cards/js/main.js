import { stickyLogo, menuOpening } from "/js/script.js";

export function main() {
    
    const menuIcon = document.querySelector('.nav-bar__menu-icon');
    const menuList = document.querySelector('.nav-bar-list');
    const menuDiv = document.querySelector('.nav-bar');
    const pageTitle = document.querySelector('.page-title');
    const logo = document.querySelector('.logo');

    menuOpening(menuIcon, menuList, menuDiv, pageTitle);
    stickyLogo(logo);
    
}