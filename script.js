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

const collapsText = document.querySelector('.aboyt-collapsible-text');
const collaps = document.querySelector('.about-wrapper');
const collapsBtn = document.querySelector('.aboyt-collapsible')
const collapsImg = document.querySelector('.aboyt-collapsible img')

collapsBtn.addEventListener('click', () => {
    collaps.classList.toggle('open');
    collapsBtn.classList.toggle('open');
    if (collapsBtn.classList.contains('open')) {
        collapsText.textContent = 'Скрыть';
        collapsImg.setAttribute('src', './img/about/about-up.svg');
    } else {
        collapsText.textContent = 'Подробнее';
        collapsImg.setAttribute('src', './img/about/about-down.svg');
    }
})

const collapsTextNew = document.querySelector('.aboutNew-collapsible-text');
const collapsNew = document.querySelector('.aboutNew-wrapper');
const collapsBtnNew = document.querySelector('.aboutNew-collapsible');
const collapsImgNew = document.querySelector('.aboutNew-collapsible img');

collapsBtnNew.addEventListener('click', () => {
    collapsNew.classList.toggle('open');
    collapsBtnNew.classList.toggle('open');
    if (collapsBtnNew.classList.contains('open')) {
        collapsTextNew.textContent = 'Скрыть';
        collapsImgNew.setAttribute('src', './img/about/about-up.svg');
    } else {
        collapsTextNew.textContent = 'Подробнее';
        collapsImg.setAttribute('src', './img/about/about-down.svg');
    }
})

const btnHelp = document.querySelectorAll('.pricing-card-button-help');
const priceValue = document.querySelectorAll('.pricing-card__value');

btnHelp.forEach((item) => {
    item.addEventListener('click', () => {
        let parentBtnHelp = item.closest('.pricing-card');
        let valueCard;
        if (item.classList.contains('active')) {
            priceValue.forEach((value) => {
                valueCard = value.closest('.pricing-card');
                if (parentBtnHelp === valueCard) {
                    valueCard = value.textContent;
                    valueCard = +valueCard - 500;
                    value.textContent = valueCard;
                    item.classList.remove('active')
                }
            })
        } else {
            item.classList.add('active');
            priceValue.forEach((value) => {
                valueCard = value.closest('.pricing-card');
                if (parentBtnHelp === valueCard) {
                    valueCard = value.textContent;
                    valueCard = +valueCard + 500;
                    value.textContent = valueCard;
                }
            })
        }
    })
})

const btnMakeup = document.querySelectorAll('.pricing-card-button-makeup');

btnMakeup.forEach((item) => {
    item.addEventListener('click', () => {
        let parentBtnHelp = item.closest('.pricing-card');
        let valueCard;
        if (item.classList.contains('active')) {
            priceValue.forEach((value) => {
                valueCard = value.closest('.pricing-card');
                if (parentBtnHelp === valueCard) {
                    valueCard = value.textContent;
                    valueCard = +valueCard - 2000;
                    value.textContent = valueCard;
                    item.classList.remove('active')
                }
            })
        } else {
            item.classList.add('active');
            priceValue.forEach((value) => {
                valueCard = value.closest('.pricing-card');
                if (parentBtnHelp === valueCard) {
                    valueCard = value.textContent;
                    valueCard = +valueCard + 2000;
                    value.textContent = valueCard;
                }
            })
        }
    })
})
// modal
const btnModalWindow = document.querySelectorAll('.btn-pricingMini');
const overlay = document.querySelector('.overlay');
const modal = document.querySelectorAll('.pricing-card__modal');
const closeModal = document.querySelectorAll('.pricing-card__modal svg');

const btnSubmModalWindow = document.querySelectorAll('.btn-modalSubmit');
const inputNumbFoto = document.querySelectorAll('#pricing-card__modal__inputNumber');
const numberFoto = document.querySelectorAll('.pricing-card__numbFoto');
const priceFoto = document.querySelectorAll('.pricing-card__PriceFoto');

btnModalWindow.forEach((item) => {
    item.addEventListener('click', () => {
        let parentBtnModal = item.closest('.pricing-card');
        let modalParent;
        let closeParent;
        modal.forEach((value) => {
            modalParent = value.closest('.pricing-card');
            closeModal.forEach((values) => {
                closeParent = values.closest('.pricing-card')
                if (parentBtnModal === modalParent && parentBtnModal === closeParent) {
                    value.classList.add('open');
                    overlay.classList.add('open');
                    body.classList.add('open');
                    overlay.addEventListener('click', () => {
                        value.classList.remove('open');
                        overlay.classList.remove('open');
                        body.classList.remove('open');
                    })
                    values.addEventListener('click', () => {
                        value.classList.remove('open');
                        overlay.classList.remove('open');
                        body.classList.remove('open');
                    })
                    document.body.addEventListener('keyup', function (e) {
                        var key = e.keyCode;
                        if (key == 27) {
                            overlay.classList.remove('open');
                            value.classList.remove('open');
                            body.classList.remove('open');
                        };
                    }, false);
                    inputNumbFoto.forEach((getNumbFoto) => {
                        let inputParent = getNumbFoto.closest('.pricing-card');
                        let btnsSubmParent;
                        btnSubmModalWindow.forEach((btnsSubm) => {
                            let btnsSubmParent = btnsSubm.closest('.pricing-card')
                            if (inputParent === btnsSubmParent) {
                                btnsSubm.addEventListener('click', () => {
                                    numberFoto.forEach((setNumbFoto) => {
                                        priceFoto.forEach((setPriceFoto) => {
                                            let setNumbFotoParent = setNumbFoto.closest('.pricing-card');
                                            let setPriceFotoParent = setPriceFoto.closest('.pricing-card');
                                            if (setNumbFotoParent === setPriceFotoParent && setNumbFotoParent === btnsSubmParent) {
                                                setNumbFoto.textContent = getNumbFoto.value;
                                                setPriceFoto.textContent = getNumbFoto.value * 250;
                                                overlay.classList.remove('open');
                                                value.classList.remove('open');
                                                body.classList.remove('open');
                                                priceValue.forEach((priceTotal) => {
                                                    if (setNumbFotoParent === priceTotal.closest('.pricing-card')){
                                                        item.classList.add('active');
                                                        if (getNumbFoto.value <= 0) {
                                                            setNumbFoto.textContent = '0';
                                                            setPriceFoto.textContent = '0';
                                                            item.classList.remove('active');
                                                        }
                                                    }
                                                        // let defaultPrice = +priceTotal.textContent;
  
                                                        // let delta = +setPriceFoto.textContent;
                                                        // priceTotal.textContent = +priceTotal.textContent + delta;
                                                        // item.classList.add('active');
                                                        // if (getNumbFoto.value == 0) {
                                                        //     priceTotal.textContent = +priceTotal.textContent - delta;
                                                        //     console.log(priceTotal.textContent)
                                                        //     item.classList.remove('active');
                                                        // }
                                                        // НУЖНО ОТНИМАТЬ ЗНАЧЕНИЕ 
                                                        // НАСТРОИТЬ ЗАЩИТУ ОТ НЕККОРЕКТНОГО ВВОДА
                                                    // }
                                                })
                                            }

                                        })
                                    })


                                })
                            }


                        })
                    })


                }
            })
        })
    })
})

const btnModalMain = document.querySelector('.btnModalMain');
const modalMain = document.querySelector('.main-modalWindow');
const closeModalMain = document.querySelector('.main-modalWindow svg');

btnModalMain.addEventListener('click', () => {
    overlay.classList.add('open');
    modalMain.classList.add('open');
    body.classList.add('open');
    overlay.addEventListener('click', () => {
        overlay.classList.remove('open');
        modalMain.classList.remove('open');
        body.classList.remove('open');
        modalSubMain.classList.remove('open')
    })
    closeModalMain.addEventListener('click', () => {
        overlay.classList.remove('open');
        modalMain.classList.remove('open');
        body.classList.remove('open');
    })
    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;
        if (key === 27) {
            overlay.classList.remove('open');
            modalMain.classList.remove('open');
            body.classList.remove('open');
        };
    }, false);
})
const btnSubmModalMain = document.querySelector('.btnSubmModalMain');
const modalSubMain = document.querySelector('.main-modalWindowGratitude');
const closeModalSubMain = document.querySelector('.main-modalWindowGratitude svg');
const inputModalMain = document.querySelectorAll('.main-modalWindow form input');

btnSubmModalMain.addEventListener('click', (e) => {
    e.preventDefault();
    modalMain.classList.remove('open');
    modalSubMain.classList.add('open');
    closeModalSubMain.addEventListener('click', () => {
        overlay.classList.remove('open');
        modalSubMain.classList.remove('open');
        body.classList.remove('open');
    })
    inputModalMain.forEach(item => {
        if (item.value == ''){
            // тут проверка на ввод данных
            console.log('ki')
        }
    })
    
})


// scroll

const linksNav = document.querySelectorAll('.header-menu a');
const sectionNav = document.querySelectorAll('.section-nav');

window.onscroll = function() {

    for(let i = 0; i < sectionNav.length; i++){
        let delta = Math.abs(sectionNav[i].offsetTop - window.scrollY);
        if (delta < window.innerHeight / 2) {
            if (document.querySelector('.header-menu a.active')){
                document.querySelector('.header-menu a.active').classList.remove('active');
            }
            linksNav[i].classList.add('active');
            break;
        }

    }
}



