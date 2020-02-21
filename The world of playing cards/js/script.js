
export const menuOpening = (menuIcon, menuList, menuDiv, pageTitle) => {
    menuIcon.addEventListener('click', () => {
        const x = window.matchMedia("(max-width: 500px)")
        menuList.classList.toggle('visible');
        menuDiv.classList.toggle('nav-bar__menu--width');

        if (x.matches) {
            pageTitle.classList.toggle('invisible');
        }
    })
}

export const stickyLogo = (logo) => {
        window.onscroll = () => {
        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
            logo.classList.add('logo-fixed')
        } else {
            logo.classList.remove('logo-fixed')
        }
    }
}