import "normalize.css";
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
