const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerNavbar = $('.header__navbar');
const HeaderLogo = $('.header__logo');
const Modal = $('.modal');
const Slide = $('.slide .slide-img');
const btnToggle = $('.navbar-toggle ');
const MobileSlideMenu = $('.header__notify-list-mobile-menu');
const MobileMenu = $('.menu__mobile');
const MobileMenuBtn = $('.header__navbar-mobile-menu-item');
const CloseMobileMenu = $('.js-modal-close');
const Btns = $$('.header__navbar-mobile-menu');

window.onscroll = function myscroll() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        headerNavbar.classList.add('Color');
        HeaderLogo.classList.add('header__logo-js');
    } else {
        headerNavbar.classList.remove('Color');
        HeaderLogo.classList.remove('header__logo-js');
    }
};

var indexSlide = 1;
changeImage =  function() {
    var imgs = ['http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide3.jpg',
               'http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide2.jpg',
               'http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide1.jpg'
            ];
     Slide.src = imgs[indexSlide];
     indexSlide++;   
     if (indexSlide >= imgs.length) {
         indexSlide = 0;
     }    
};
Slide.onclick = changeImage;
setInterval(changeImage,4000);

for (Btn of Btns) {
    Btn.addEventListener('click', HideMobileMenu);
}

btnToggle.onclick = function() {
    MobileSlideMenu.classList.add('presently');
};

btnToggle.onblur = function() {
    MobileSlideMenu.classList.remove('presently');
};

MobileMenuBtn.onclick = function() {
    Modal.classList.add('open');
};

function HideMobileMenu() {
    Modal.classList.remove('open');
};

CloseMobileMenu.addEventListener('click',HideMobileMenu);

Modal.addEventListener('click', HideMobileMenu);

btnToggle.addEventListener('click', function(e) {
    e.stopPropagation();
})

MobileMenu.addEventListener('click',function(e) {
    e.stopPropagation();
});
