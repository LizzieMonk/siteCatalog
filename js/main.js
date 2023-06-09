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

function valuesSmallWidth (offset){
    if(offset==0){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(1)'));

        allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[1].querySelector('.slide__button').style.display= 'none';
        allSlides[1].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[1].querySelector('.slide__title').style.top= '-25px';
        allSlides[1].querySelector('.slide__title').style.left= '0px';
        allSlides[1].querySelector('.slide__title').style.width= '150px';
        allSlides[1].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image2.png';
    }
    else if(offset==593){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(2)'));

        allSlides[2].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[2].querySelector('.slide__button').style.display= 'none';
        allSlides[2].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[2].querySelector('.slide__title').style.top= '-25px';
        allSlides[2].querySelector('.slide__title').style.left= '0px';
        allSlides[2].querySelector('.slide__title').style.width= '150px';
        allSlides[2].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';


        allSlides[1].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[1].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[1].querySelector('.slide__title').style.fontSize= '30px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '35px';
        allSlides[1].querySelector('.slide__title').style.top= '0px';
        allSlides[1].querySelector('.slide__title').style.left= '0px';
        allSlides[1].querySelector('.slide__title').style.width= '300px';
        allSlides[1].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[1].querySelector('.slide__img').style.top= '30px';
        allSlides[1].querySelector('.slide__img').style.left= '30px';
    }
    else if(offset==1186){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(3)'));

        allSlides[3].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[3].querySelector('.slide__button').style.display= 'none';
        allSlides[3].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[3].querySelector('.slide__title').style.top= '-25px';
        allSlides[3].querySelector('.slide__title').style.left= '0px';
        allSlides[3].querySelector('.slide__title').style.width= '150px';
        allSlides[3].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';

        allSlides[2].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[2].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[2].querySelector('.slide__title').style.fontSize= '30px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '35px';
        allSlides[2].querySelector('.slide__title').style.top= '0px';
        allSlides[2].querySelector('.slide__title').style.left= '0px';
        allSlides[2].querySelector('.slide__title').style.width= '300px';
        allSlides[2].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[2].querySelector('.slide__img').style.top= '85px';
        allSlides[2].querySelector('.slide__img').style.left= '24px';
    }
    else if(offset==1779){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(4)'));

        allSlides[4].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[4].querySelector('.slide__button').style.display= 'none';
        allSlides[4].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[4].querySelector('.slide__title').style.top= '-25px';
        allSlides[4].querySelector('.slide__title').style.left= '0px';
        allSlides[4].querySelector('.slide__title').style.width= '150px';
        allSlides[4].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';

        allSlides[3].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[3].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[3].querySelector('.slide__title').style.fontSize= '30px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '35px';
        allSlides[3].querySelector('.slide__title').style.top= '0px';
        allSlides[3].querySelector('.slide__title').style.left= '0px';
        allSlides[3].querySelector('.slide__title').style.width= '300px';
        allSlides[3].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[3].querySelector('.slide__img').style.top= '85px';
        allSlides[3].querySelector('.slide__img').style.left= '24px';
    }
    else if(offset==2372){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(5)'));

        allSlides[5].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[5].querySelector('.slide__button').style.display= 'none';
        allSlides[5].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[5].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[5].querySelector('.slide__title').style.top= '-25px';
        allSlides[5].querySelector('.slide__title').style.left= '0px';
        allSlides[5].querySelector('.slide__title').style.width= '150px';
        allSlides[5].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';

        allSlides[4].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[4].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[4].querySelector('.slide__title').style.fontSize= '30px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '35px';
        allSlides[4].querySelector('.slide__title').style.top= '0px';
        allSlides[4].querySelector('.slide__title').style.left= '0px';
        allSlides[4].querySelector('.slide__title').style.width= '300px';
        allSlides[4].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[4].querySelector('.slide__img').style.top= '85px';
        allSlides[4].querySelector('.slide__img').style.left= '24px';
    }
    else if (offset>2372) {
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(1)'));

        offset=0;
        allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[1].querySelector('.slide__button').style.display= 'none';
        allSlides[1].querySelector('.slide__title').style.fontSize= '20px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '26px';
        allSlides[1].querySelector('.slide__title').style.top= '-25px';
        allSlides[1].querySelector('.slide__title').style.left= '0px';
        allSlides[1].querySelector('.slide__title').style.width= '150px';
        allSlides[1].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image2.png';
    }
    sliderLine.style.bottom = offset+'px';
}

function valuesLargeWidth (offset){
    if(offset==0){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(1)'));

        allSlides[1].querySelector('.slide__scroll').style.display= 'none';
        allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[1].querySelector('.slide__button').style.display= 'none';
        allSlides[1].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[1].querySelector('.slide__title').style.top= '55px';
        allSlides[1].querySelector('.slide__title').style.left= '-65px';
        allSlides[1].querySelector('.slide__title').style.width= '80px';
        allSlides[1].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image2.png';
    }
    else if(offset==1151){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(2)'));

        allSlides[2].querySelector('.slide__scroll').style.display= 'none';
        allSlides[2].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[2].querySelector('.slide__button').style.display= 'none';
        allSlides[2].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[2].querySelector('.slide__title').style.top= '55px';
        allSlides[2].querySelector('.slide__title').style.left= '-65px';
        allSlides[2].querySelector('.slide__title').style.width= '80px';
        allSlides[2].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';


        allSlides[1].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[1].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[1].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[1].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[1].querySelector('.slide__title').style.top= '0px';
        allSlides[1].querySelector('.slide__title').style.left= '0px';
        allSlides[1].querySelector('.slide__title').style.width= '400px';
        allSlides[1].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[1].querySelector('.slide__img').style.top= '40px';
        allSlides[1].querySelector('.slide__img').style.left= '-100px';
    }
    else if(offset==2302){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(3)'));

        allSlides[3].querySelector('.slide__scroll').style.display= 'none';
        allSlides[3].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[3].querySelector('.slide__button').style.display= 'none';
        allSlides[3].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[3].querySelector('.slide__title').style.top= '55px';
        allSlides[3].querySelector('.slide__title').style.left= '-65px';
        allSlides[3].querySelector('.slide__title').style.width= '80px';
        allSlides[3].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';


        allSlides[2].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[2].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[2].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[2].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[2].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[2].querySelector('.slide__title').style.top= '0px';
        allSlides[2].querySelector('.slide__title').style.left= '0px';
        allSlides[2].querySelector('.slide__title').style.width= '400px';
        allSlides[2].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[2].querySelector('.slide__img').style.top= '70px';
        allSlides[2].querySelector('.slide__img').style.left= '110px';
    }
    else if(offset==3453){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(4)'));

        allSlides[4].querySelector('.slide__scroll').style.display= 'none';
        allSlides[4].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[4].querySelector('.slide__button').style.display= 'none';
        allSlides[4].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[4].querySelector('.slide__title').style.top= '55px';
        allSlides[4].querySelector('.slide__title').style.left= '-65px';
        allSlides[4].querySelector('.slide__title').style.width= '80px';
        allSlides[4].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';


        allSlides[3].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[3].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[3].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[3].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[3].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[3].querySelector('.slide__title').style.top= '0px';
        allSlides[3].querySelector('.slide__title').style.left= '0px';
        allSlides[3].querySelector('.slide__title').style.width= '400px';
        allSlides[3].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[3].querySelector('.slide__img').style.top= '70px';
        allSlides[3].querySelector('.slide__img').style.left= '110px';
    }
    else if(offset==4604){
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(5)'));

        allSlides[5].querySelector('.slide__scroll').style.display= 'none';
        allSlides[5].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[5].querySelector('.slide__button').style.display= 'none';
        allSlides[5].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[5].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[5].querySelector('.slide__title').style.top= '55px';
        allSlides[5].querySelector('.slide__title').style.left= '-65px';
        allSlides[5].querySelector('.slide__title').style.width= '80px';
        allSlides[5].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image1.png';


        allSlides[4].querySelector('.slide__scroll').style.display= 'flex';
        allSlides[4].querySelector('.slide__subtitle').style.display= 'inline-block';
        allSlides[4].querySelector('.slide__button').style.display= 'inline-flex';
        allSlides[4].querySelector('.slide__title').style.fontSize= '50px';
        allSlides[4].querySelector('.slide__title').style.lineHeight= '59px';
        allSlides[4].querySelector('.slide__title').style.top= '0px';
        allSlides[4].querySelector('.slide__title').style.left= '0px';
        allSlides[4].querySelector('.slide__title').style.width= '400px';
        allSlides[4].querySelector('.slide__img').style.display= 'inline-block';
        allSlides[4].querySelector('.slide__img').style.top= '70px';
        allSlides[4].querySelector('.slide__img').style.left= '110px';
    }
    else if (offset>4604) {
        valuesButtonsSlider (document.querySelector('.buttons__button:nth-child(1)'));

        offset=0;
        allSlides[1].querySelector('.slide__scroll').style.display= 'none';
        allSlides[1].querySelector('.slide__subtitle').style.display= 'none';
        allSlides[1].querySelector('.slide__button').style.display= 'none';
        allSlides[1].querySelector('.slide__title').style.fontSize= '25px';
        allSlides[1].querySelector('.slide__title').style.lineHeight= '32px';
        allSlides[1].querySelector('.slide__title').style.top= '55px';
        allSlides[1].querySelector('.slide__title').style.left= '-65px';
        allSlides[1].querySelector('.slide__title').style.width= '80px';
        allSlides[1].querySelector('.slide__img').style.display= 'none';
        document.querySelector('.header__shadow-img').src= '../img/slider-image2.png';
    }
    sliderLine.style.right = offset+'px';
}

var prevChild;
function valuesButtonsSlider (child){
    if(document.documentElement.clientWidth>375){
        child.style.height= '9px';
        child.style.width= '9px';
        child.style.background= '#292D32';
    
        if(prevChild){
            prevChild.style.height= '5px';
            prevChild.style.width= '5px';
            prevChild.style.background= '#D0D0D0';
        }
    } else {
        child.style.height= '5px';
        child.style.width= '5px';
        child.style.background= '#292D32';
    
        if(prevChild){
            prevChild.style.height= '3px';
            prevChild.style.width= '3px';
            prevChild.style.background= '#D0D0D0';
        }
    }
    prevChild = child;
}

if(document.documentElement.clientWidth>375){
valuesLargeWidth (offset);  //initial values

//buttons of slider
document.querySelector('.buttons__button:nth-child(1)').addEventListener('click',function(){
    offset = 0;
    valuesLargeWidth(offset);
})
document.querySelector('.buttons__button:nth-child(2)').addEventListener('click',function(){
    offset = 1151;
    valuesLargeWidth(offset);
})
document.querySelector('.buttons__button:nth-child(3)').addEventListener('click',function(){
    offset = 2302;
    valuesLargeWidth(offset);
})
document.querySelector('.buttons__button:nth-child(4)').addEventListener('click',function(){
    offset = 3453;
    valuesLargeWidth(offset);
})
document.querySelector('.buttons__button:nth-child(5)').addEventListener('click',function(){
    offset = 4604;
    valuesLargeWidth(offset);
})

//button "next"
document.querySelector('.slider-container__slider-next').addEventListener('click', function(){
    offset = offset +1151;
    if(offset>4604) offset=0;
    valuesLargeWidth(offset);
})

}
else{
valuesSmallWidth (offset);  //initial values

//button "next"
document.querySelector('.slider-container__slider-next').addEventListener('click', function(){
    offset = offset +593;
    if(offset>2372) offset=0;
    valuesSmallWidth(offset);
})

}


//verify input

const allField = document.querySelectorAll('.form__field');

function validateInputName() {
    const inputName = document.getElementById("nameInput").value;

    const patternName = /^[a-zA-Z_]{3,50}$/; // паттерн для ввода
    allField[0].querySelector('.field__title').style.color= '#F2F2F2';
    allField[0].querySelector('.field__block').style.borderColor= 'rgba(242, 242, 242, 0.5)';
    if (!patternName.test(inputName)) {
        allField[0].querySelector('.field__title').style.color= '#BE2121';
        allField[0].querySelector('.field__block').style.borderColor= '#BE2121';
        document.getElementById("nameInput").value = ""; // очистка поля ввода
    }
  }
function validateInputNumber() {
    const inputNumber = document.getElementById("numberInput").value;
    const patternNumber = /^[0-9]{7,12}$/; // паттерн для ввода
    allField[1].querySelector('.field__title').style.color= '#F2F2F2';
    allField[1].querySelector('.field__block').style.borderColor= 'rgba(242, 242, 242, 0.5)';
    if (!patternNumber.test(inputNumber)) {
        allField[1].querySelector('.field__title').style.color= '#BE2121';
        allField[1].querySelector('.field__block').style.borderColor= '#BE2121';
        document.getElementById("numberInput").value = ""; // очистка поля ввода
    }
  }
function validateInputMessage() {
    const inputMessage = document.getElementById("messageInput").value;

    allField[2].querySelector('.field__title').style.color= '#F2F2F2';
    allField[2].querySelector('.field__block').style.borderColor= 'rgba(242, 242, 242, 0.5)';
    const pattern = /^[a-zA-Z0-9_]{0,100}$/; // паттерн для ввода
    if (!pattern.test(inputMessage)) {
        allField[2].querySelector('.field__title').style.color= '#BE2121';
        allField[2].querySelector('.field__block').style.borderColor= '#BE2121';
        document.getElementById("messageInput").value = ""; // очистка поля ввода
    }
  }
