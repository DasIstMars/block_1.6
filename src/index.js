import "normalize.css";
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles/main.scss";


let openMobMenuButton = document.querySelector(".mob-menu__button");
let closeMobMenuButton = document.querySelector(".side-mob-menu__button");
let sideMenuWrapper = document.querySelector(".wrapper--side");

let callWraper = document.querySelector('.wrapper-call');
let feedbackWraper = document.querySelector('.wrapper-feedback');
let fogRightSide = document.querySelector(".fog--right-side");
let fogLeftSide = document.querySelectorAll(".fog--left-side");


let phoneButton = document.querySelectorAll(".button-phone");
let chatButton = document.querySelectorAll(".button-chat");
let closeButton = document.querySelectorAll(".button-close"); 

for (let i = 0; i < phoneButton.length; i++) {
  phoneButton[i].onclick = function () {
    callWraper.classList.replace("wrapper--closed", "wrapper--opened");
  }
}
for (let i = 0; i < chatButton.length; i++) {
  chatButton[i].onclick = function () {
    feedbackWraper.classList.replace("wrapper--closed", "wrapper--opened");
  }
}

openMobMenuButton.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--closed", "wrapper--opened");
};

closeMobMenuButton.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--opened" , "wrapper--closed");
};

fogRightSide.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--opened" , "wrapper--closed");
};


for (let i = 0; i < fogLeftSide.length; i++) {
  fogLeftSide[i].onclick = function () {
    callWraper.classList.replace("wrapper--opened" , "wrapper--closed");
    feedbackWraper.classList.replace("wrapper--opened" , "wrapper--closed");
  };
}
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function () {
    callWraper.classList.replace("wrapper--opened" , "wrapper--closed");
    feedbackWraper.classList.replace("wrapper--opened" , "wrapper--closed");
  };
}


let mySwiper;
const breakpoint = window.matchMedia( '(min-width:768px)' );
const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
     if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
     return;
  } else if ( breakpoint.matches === false ) {
     return enableSwiper();
  }
};
const enableSwiper = function() {
  mySwiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay: 2000,
          disableOnInteraction: true,
      },
    });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();







/*-------------*/
let expandButton = document.querySelector('.section__expand-button');
let expandSection = document.querySelector('.section--minimalize');
let expandNav = document.querySelector('.section-nav--minimalize');
let expandButtonMinimalize = document.querySelector('.section__button--minimalize');
let expantButtonText = document.querySelector('.section__expand-button-text');
let expandButtonImg = document.querySelector('.section__expand-button-img--bottom');

expandButton.onclick = function() {
  expandNav.classList.toggle('section-nav--expanded');
  expandSection.classList.toggle('section--expanded');
  expandButtonMinimalize.classList.toggle('section__button--expanded');
  expandButtonImg.classList.toggle('section__expand-button-img--top');
  if (expantButtonText.textContent == 'Показать все') {
    expantButtonText.textContent = 'Скрыть';
  } else {
    expantButtonText.textContent = 'Показать все';
  } 
};