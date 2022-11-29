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



class DerTabs {
    constructor(selector, options) {
        let defaultOption = {
            isChanget: () => { }
        }
        this.options = Object.assign(defaultOption, options);
        this.selector = selector;
        this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
        if (this.tabs) {
            this.tabList = this.tabs.querySelector('.tabs__nav');
            this.tabsBtns = this.tabs.querySelectorAll('.tabs__nav-btn');
            this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
        } else {
            console.error('Селектор data-tabs не существует.');
            return;
        }
        this.check();
        this.init();
        this.events();
    }
    check() {
        if(document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
            console.error('Колличество элементов с одинаковым data-tabs больше одного!');
            return;
        };
        if(this.tabsBtns.length !== this.tabsPanels.length){
            console.error('Колличество табов не совпадает с колличеством панелей!');
            return;
        }
    }
    init() {
        this.tabList.setAttribute('role', 'tablist');
        this.tabsBtns.forEach((el, i) => {
            el.setAttribute('role', 'tab');
            el.setAttribute('tabindex', '-1');
            el.setAttribute('id', `${this.selector}-${i + 1}`);
            el.classList.remove('tabs__nav-btn--active');

        });
        this.tabsPanels.forEach((el, i) => {
            el.setAttribute('role', 'tabpanel');
            el.setAttribute('tabindex', '-1');
            el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
            el.classList.remove('tabs__panel--active');
        });
        this.tabsBtns[0].classList.add('tabs__nav-btn--active');
        this.tabsBtns[0].removeAttribute('tabindex');
        this.tabsBtns[0].setAttribute('aria-selected', 'true');
        this.tabsPanels[0].classList.add('tabs__panel--active');

    };
    events() {
        this.tabsBtns.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                let currentTab = this.tabList.querySelector('[aria-selected]');
                if(e.currentTarget !== currentTab) {
                    this.switchTabs(e.currentTarget, currentTab);
                }
            });
            el.addEventListener('keydown', (e) => {
                let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

                let dir = null;
                if(e.which === 37) {
                    dir = index - 1;
                } else if (e.which === 39) {
                    dir = index + 1;
                } else if (e.which === 40) {
                    dir = 'down';
                } else {
                    dir = null;
                };
                if(dir !== null) {
                    if(dir === 'down'){
                        this.tabsPanels[i].focus();
                    } else if (this.tabsBtns[dir]){
                        this.switchTabs(this.tabsBtns[dir], e.currentTarget)
                    } else {

                    }
                }
            });
        });
    }
    switchTabs(newTab, oldTab){
        newTab.focus();
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        // newTab.classList.add('tabs__nav-btn--active');   
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');
        let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
        let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);
        this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
        this.tabsPanels[index].classList.add('tabs__panel--active');
        this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
        this.tabsBtns[index].classList.add('tabs__nav-btn--active');

        this.options.isChanget(this);
    }
}
new DerTabs('tab', {
    isChanget: (tabs) => {
        // console.log(tabs);
    }
});