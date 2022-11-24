/* Проверка поддержки webp, добавление класса для html */
export function isWebp() {
    //проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

// открытие меню
document.querySelector('.header__nav').addEventListener('click', () => {
    const menuBlock = document.querySelector('.wrapper-nav')
    const menuIcon = document.querySelector('.header__nav')
    menuBlock.classList.toggle('nav-active');
    if (menuBlock.classList.contains('nav-active')) {
        menuIcon.classList.remove('icon-app-menu');
        menuIcon.classList.add('icon-close');
    } else {
        menuIcon.classList.remove('icon-close');
        menuIcon.classList.add('icon-app-menu');
    }

});


// sidebar

const titleSidebar = document.querySelectorAll('.sidebar__title');
const sidebarTitle = document.querySelector('.sidebar__catalog-title');
const filterTitle = document.querySelector('.sidebar__catalog-filter');
const sidebarMenu = document.querySelector('.sidebar__catalog-nav');
const sidebaFilter = document.querySelector('.sidebar__filter-wrapper');
function sidebarActived(title, box) {
    if (title || box) {
        title.addEventListener('click', () => {
            box.classList.toggle('active');
            title.children[1].classList.toggle('rotate-active')
            console.dir(title);
        });
    } else {
        return
    }
}
    titleSidebar.forEach((el) => {
        el.firstElementChild.addEventListener('click', () => {
            console.dir(el.firstElementChild.children[0]);
            el.lastElementChild.classList.toggle('active')
            el.firstElementChild.children[0].classList.toggle('rotate-active')
        })
    });


sidebarActived(sidebarTitle, sidebarMenu)
sidebarActived(filterTitle, sidebaFilter)