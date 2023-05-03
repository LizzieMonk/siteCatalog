//show/hide nav menu
const menu = document.querySelector('.menu_burger');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
})

//slider
var offset = 0;
const sliderLine = document.querySelector('.slider__line');

const allSlides = document.querySelectorAll('.slider__slide');
allSlides[1].querySelector('.slide__scroll').style.display= 'none';
allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
allSlides[1].querySelector('.slide__button').style.display= 'none';
allSlides[1].querySelector('.slide__title').style.fontSize= '25px';
allSlides[1].querySelector('.slide__title').style.lineHeight= '32px';
allSlides[1].querySelector('.slide__title').style.top= '55px';
allSlides[1].querySelector('.slide__title').style.left= '-237px';
allSlides[1].querySelector('.slide__title').style.width= '80px';
allSlides[1].querySelector('.slider__shadow').style.opacity= '0.85';
allSlides[1].querySelector('.slide__img').style.top= '-250px';
allSlides[1].querySelector('.slide__img').style.left= '-80px';


document.querySelector('.slider-container__slider-next').addEventListener('click', function(){
    offset = offset +1411;
    if(offset==1411){
        allSlides[2].querySelector('.slide__scroll').style.display= 'none';
        allSlides[2].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[2].querySelector('.slide__button').style.display= 'none';
        allSlides[2].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[2].querySelector('.slide__title').style.top= '55px';
        allSlides[2].querySelector('.slide__title').style.left= '-237px';
        allSlides[2].querySelector('.slide__title').style.width= '80px';
        allSlides[2].querySelector('.slider__shadow').style.opacity= '0.85';
        allSlides[2].querySelector('.slide__img').style.top= '0px';
        allSlides[2].querySelector('.slide__img').style.left= '-80px';


        allSlides[1].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[1].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[1].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[1].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[1].querySelector('.slide__title').style.top= '0px';
        allSlides[1].querySelector('.slide__title').style.left= '0px';
        allSlides[1].querySelector('.slide__title').style.width= '400px';
        allSlides[1].querySelector('.slider__shadow').style.opacity= '0';
        allSlides[1].querySelector('.slide__img').style.top= '0px';
        allSlides[1].querySelector('.slide__img').style.left= '180px';
    }
    else if(offset==2822){
        allSlides[3].querySelector('.slide__scroll').style.display= 'none';
        allSlides[3].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[3].querySelector('.slide__button').style.display= 'none';
        allSlides[3].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[3].querySelector('.slide__title').style.top= '55px';
        allSlides[3].querySelector('.slide__title').style.left= '-237px';
        allSlides[3].querySelector('.slide__title').style.width= '80px';
        allSlides[3].querySelector('.slider__shadow').style.opacity= '0.85';
        allSlides[3].querySelector('.slide__img').style.top= '0px';
        allSlides[3].querySelector('.slide__img').style.left= '-80px';


        allSlides[2].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[2].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[2].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[2].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[2].querySelector('.slide__title').style.top= '0px';
        allSlides[2].querySelector('.slide__title').style.left= '0px';
        allSlides[2].querySelector('.slide__title').style.width= '400px';
        allSlides[2].querySelector('.slider__shadow').style.opacity= '0';
        allSlides[2].querySelector('.slide__img').style.top= '70px';
        allSlides[2].querySelector('.slide__img').style.left= '280px';

    }
    else if(offset==4233){
        allSlides[4].querySelector('.slide__scroll').style.display= 'none';
        allSlides[4].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[4].querySelector('.slide__button').style.display= 'none';
        allSlides[4].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[4].querySelector('.slide__title').style.top= '55px';
        allSlides[4].querySelector('.slide__title').style.left= '-237px';
        allSlides[4].querySelector('.slide__title').style.width= '80px';
        allSlides[4].querySelector('.slider__shadow').style.opacity= '0.85';
        allSlides[4].querySelector('.slide__img').style.top= '0px';
        allSlides[4].querySelector('.slide__img').style.left= '-80px';


        allSlides[3].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[3].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[3].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[3].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[3].querySelector('.slide__title').style.top= '0px';
        allSlides[3].querySelector('.slide__title').style.left= '0px';
        allSlides[3].querySelector('.slide__title').style.width= '400px';
        allSlides[3].querySelector('.slider__shadow').style.opacity= '0';
        allSlides[3].querySelector('.slide__img').style.top= '70px';
        allSlides[3].querySelector('.slide__img').style.left= '280px';

    }
    else if(offset==5644){
        allSlides[5].querySelector('.slide__scroll').style.display= 'none';
        allSlides[5].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[5].querySelector('.slide__button').style.display= 'none';
        allSlides[5].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[5].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[5].querySelector('.slide__title').style.top= '55px';
        allSlides[5].querySelector('.slide__title').style.left= '-237px';
        allSlides[5].querySelector('.slide__title').style.width= '80px';
        allSlides[5].querySelector('.slider__shadow').style.opacity= '0.85';
        allSlides[5].querySelector('.slide__img').style.top= '0px';
        allSlides[5].querySelector('.slide__img').style.left= '-80px';


        allSlides[4].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[4].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[4].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[4].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[4].querySelector('.slide__title').style.top= '0px';
        allSlides[4].querySelector('.slide__title').style.left= '0px';
        allSlides[4].querySelector('.slide__title').style.width= '400px';
        allSlides[4].querySelector('.slider__shadow').style.opacity= '0';
        allSlides[4].querySelector('.slide__img').style.top= '70px';
        allSlides[4].querySelector('.slide__img').style.left= '280px';

    }
    else if (offset>5644) {
        offset=0;
        allSlides[1].querySelector('.slide__scroll').style.display= 'none';
        allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[1].querySelector('.slide__button').style.display= 'none';
        allSlides[1].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[1].querySelector('.slide__title').style.top= '55px';
        allSlides[1].querySelector('.slide__title').style.left= '-237px';
        allSlides[1].querySelector('.slide__title').style.width= '80px';
        allSlides[1].querySelector('.slider__shadow').style.opacity= '0.85';
        allSlides[1].querySelector('.slide__img').style.top= '0px';
        allSlides[1].querySelector('.slide__img').style.left= '-80px';
    }
    sliderLine.style.right = offset+'px';
})
