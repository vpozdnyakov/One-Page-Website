const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


document.querySelectorAll('.projects__nav_button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.projects__nav_button').forEach(function(btn){
    btn.classList.remove('projects__nav_button-active')});

    e.currentTarget.classList.add('tprojects__nav_button-active');

    document.querySelectorAll('.projects__blocks').forEach(function(tabsBtn){
    tabsBtn.classList.remove('projects__blocks-active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('projects__blocks-active');
    });
});
    

$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true
});
    

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

    burger.addEventListener('click', function () {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('header__nav-active');
        document.body.classList.toggle('stop-scroll');
    });

    menuLinks.forEach(function(el){
        el.addEventListener('click', function () {
            burger.classList.remove('burger-active');
            menu.classList.remove('header__nav-active');
            document.body.classList.remove('stop-scroll');
        });
    });



    
let loupe = document.querySelector('.header__btn-search');
let search = document.querySelector('.header__search-fotm');

    loupe.addEventListener('click', function () {
        search.classList.toggle('header__search-fotm-active');
        document.body.classList.toggle('stop-scroll');
    }); 