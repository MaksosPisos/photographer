const burger = document.querySelector('.btn.btn-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('open');
})

const nav = document.querySelectorAll('.header-menu a')
nav.forEach((item) => {
    item.addEventListener('click', () => {
        burger.classList.remove('open');
        menu.classList.remove('open');
        body.classList.remove('open');
    })
})

const swiperContainer = document.querySelector('.swiper')

const swiper = new Swiper(swiperContainer, {
    slidesPerView: 3, // кол-во видимых слайдов
    spaceBetween: -100,
    pagination: { //пагинация
        el: '.works-pag',
        type: 'bullets',
        clickable: true,
    },
    // slideToClickedSlide: true переключение по клику на слайд
    loop: true, // бесконечная перемотка в обе стороны
    navigation: { //кнопки вперед назад
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 2000,
    //   },
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 320px
        1024: {
          spaceBetween: 0,
        },
        // when window width is >= 480px
        1440: {
          spaceBetween: 100,
        },
    }
});

const swiperLocations = document.querySelector('.swiper-locations')

const swiperLoc = new Swiper(swiperLocations, {
     // кол-во видимых слайдов
    // spaceBetween: 16,
    // slideToClickedSlide: true переключение по клику на слайд
    loop: true, // бесконечная перемотка в обе стороны
    navigation: { //кнопки вперед назад
        nextEl: '.swiper-button-next-loc',
        prevEl: '.swiper-button-prev-loc',
    },
    breakpoints: {
        200: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        // when window width is >= 320px
        1024: {
          spaceBetween: 16,
          slidesPerView: 3
        },
        // when window width is >= 480px
        1440: {
          spaceBetween: 28,
          slidesPerView: 3
        },
    }

    // autoplay: {
    //     delay: 2000,
    //   },
    // centeredSlides: true,
});

const collapsText= document.querySelector('.aboyt-collapsible-text');
const collaps = document.querySelector('.about-wrapper');
const collapsBtn = document.querySelector('.aboyt-collapsible')
const collapsImg = document.querySelector('.aboyt-collapsible img')

collapsBtn.addEventListener('click', () => {
    collaps.classList.toggle('open');
    collapsBtn.classList.toggle('open');
    if(collapsBtn.classList.contains('open')) {
        collapsText.textContent = 'Скрыть';
        collapsImg.setAttribute('src', './img/about/about-up.svg');
    }else {
        collapsText.textContent = 'Подробнее';
        collapsImg.setAttribute('src', './img/about/about-down.svg');
    }
})

const collapsTextNew= document.querySelector('.aboutNew-collapsible-text');
const collapsNew = document.querySelector('.aboutNew-wrapper');
const collapsBtnNew = document.querySelector('.aboutNew-collapsible');
const collapsImgNew = document.querySelector('.aboutNew-collapsible img');

collapsBtnNew.addEventListener('click', () => {
    collapsNew.classList.toggle('open');
    collapsBtnNew.classList.toggle('open');
    if(collapsBtnNew.classList.contains('open')) {
        collapsTextNew.textContent = 'Скрыть';
        collapsImgNew.setAttribute('src', './img/about/about-up.svg');
    }else {
        collapsTextNew.textContent = 'Подробнее';
        collapsImgNew.setAttribute('src', './img/about/about-down.svg');
    }
})
