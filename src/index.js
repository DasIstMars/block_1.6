import 'normalize.css'
import './styles/main.scss';

let mobMenuButton = document.querySelector('.mob-menu__button');
let sideMenuOpener = document.querySelector('.wrapper--closed');

mobMenuButton.onclick = function() {
    sideMenuOpener.classList.add('wrapper--opened');
    sideMenuOpener.classList.remove('wrapper--closed');
}

let sideMobMenuButton = document.querySelector('.side-mob-menu__button');

sideMobMenuButton.onclick = function() {
    sideMenuOpener.classList.remove('wrapper--opened');
    sideMenuOpener.classList.add('wrapper--closed');
}
