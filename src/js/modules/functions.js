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
    //===================================================================================================
    //добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

//===================================================================================================
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

//===================================================================================================
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
            el.lastElementChild.classList.toggle('active');
            el.firstElementChild.children[0].classList.toggle('rotate-active');
        })
    });


sidebarActived(sidebarTitle, sidebarMenu);
sidebarActived(filterTitle, sidebaFilter);

//===================================================================================================

// фиксированый header

const header = document.querySelector('.header');
const headerHeidht = header.offsetHeight;
const mainTopHeidht = 800;
const mainTop = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if(scrollDistance >= mainTopHeidht + headerHeidht) {
        header.classList.add('header--fixed');
        mainTop.style.marginTop = `${headerHeidht}px`;
        if(sidebar){
            sidebar.style.transform = `translateY(${headerHeidht}px)`;
        }
    } else {
        header.classList.remove('header--fixed');
        mainTop.style.marginTop = null;
    }
})

//===================================================================================================

// Генерация карточек товаров
//===================================================================================================
// Товары
//===================================================================================================
const data =
    [
        {
            "title": "Универсальный корм для птицы All Cicken",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-1.jpg",
            "price": 22,
            "oldprice": 27,
            "weight": 1,
            "measure": "кг",
            "sale": true,
            "tm": "Purina",
            "animal": "bird",
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период"
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков"
            ]
        },
        {
            "title": "Концентрированая кормовая добавка Просто-МИКС",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-2.jpg",
            "price": 128,
            "oldprice": 0,
            "weight": 25,
            "measure": "кг",
            "sale": false,
            "tm": "Purina",
            "animal": "bird",
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период"
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков"
            ]
        },
        {
            "title": "Комбикорм Премиум корм для птиц AVA CHICK",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-3.jpg",
            "price": 252,
            "oldprice": 0,
            "weight": 25,
            "measure": "кг",
            "sale": true,
            "tm": "Purina",
            "animal": [
                "bird",
                "quail",
                "broiler"
            ],
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период",
                
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков",
                "Для бройлеров"
            ]
        },
        {
            "title": "Корм для птицы",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-4.jpg",
            "price": 112,
            "oldprice": 0,
            "weight": 10,
            "measure": "кг",
            "sale": true,
            "tm": "Purina",
            "animal": [
                "bird",
                "quail",
                "broiler"
            ],
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период",
                
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков",
                "Для бройлеров"
            ]
        },
        {
            "title": "Комбикорм для несушек",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-5.jpg",
            "price": 148,
            "oldprice": 0,
            "weight": 25,
            "measure": "кг",
            "sale": true,
            "tm": "Purina",
            "animal": [
                "bird",
                "quail",
                "egg"
            ],
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период",
                
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков",
                "Для бройлеров"
            ]
        },
        {
            "title": "Зерносмесь сбалансированная для кур нусушек с добавлением витаминов",
            "descr": "Полнорационный гранулированный стартовый комбикорм для цыплят бройлеров от 1 до 25 или от 11 до 24 дневного возраста. Производится в виде крупки: диаметр – 3,2 мм, размер 2-3 мм. Бежевый цвет с приятным фруктово-зерновым запахом. В рецепте комбикорма используется только высокопротеиновые ингредиенты, обладающие высоким уровнем усвояемости, используют мультиэнзимную группу, способствующую лучшему усвоению белков и минеральной группы. Благодаря своей усовершенствованной формуле стартовый комбикорм действует на интенсивный рост молодняка до достижения ими продуктивного периода. За период кормления на 24-25 день жизни Комбикорм Крамар ПК 5-4 обеспечивает массу цыпленка-бройлера до 1300-1400 г. живой массы тела.",
            "img": "product-6.jpg",
            "price": 22,
            "oldprice": 27,
            "weight": 1,
            "measure": "кг",
            "sale": true,
            "tm": "Своё производство",
            "animal": "bird",
            "stock": true,
            "season": [
                "Гровер",
                "Продуктивный период"
            ],
            "category": [
                "Для несушек",
                "Для гусей и уток",
                "Для индюков"
            ]
        }
    ]
//===================================================================================================
// Вывод товаров на страницу
//===================================================================================================
// 1.Генерация карточки товара
// 2.По кнопке "корзина" добавить в LocalStorage
// 3.Акционному товару добавить класс "scale"
// 4.
//===================================================================================================

//===================================================================================================
// счётчик товара

const currentProduct = document.querySelector('.product__info-current');
const counters = document.querySelectorAll('[data-counter]');
if(currentProduct){
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;
            if(target.closest('[data-counter]')){
                let value = parseInt(target.closest('.product__info-current').querySelector('.product__info-input').value);
                if(target.classList.contains('product__info-plus')){
                    value++;
                } else {
                    value--;
                }
                if(value <= 0 ){
                    value = 0;
                    target.closest('.product__info-minus').classList.add('disabled');
                } else {
                    target.closest('.product__info-current').querySelector('.product__info-minus').classList.remove('disabled');

                }
                target.closest('.product__info-current').querySelector('input').value = value;
            }
        });
    });
}
