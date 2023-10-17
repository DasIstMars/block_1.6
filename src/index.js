import 'normalize.css'
import './styles/main.scss';


let mobMenuButton = document.querySelector('.mob-menu__button');
let sideMenuWrapper = document.querySelector('.wrapper--side');
let sideMenuOpener = document.querySelector('.wrapper--closed');
let fogSpace = document.querySelector('.fog--closed');

mobMenuButton.onclick = function() {
    sideMenuOpener.classList.add('wrapper--opened');
    sideMenuOpener.classList.remove('wrapper--closed');
    fogSpace.classList.toggle('fog--closed')
}

let sideMobMenuButton = document.querySelector('.side-mob-menu__button');

sideMobMenuButton.onclick = function() {
    sideMenuOpener.classList.remove('wrapper--opened');
    sideMenuOpener.classList.add('wrapper--closed');
    fogSpace.classList.toggle('fog--closed')
}

fogSpace.onclick = function() {
    sideMenuOpener.classList.remove('wrapper--opened');
    sideMenuOpener.classList.add('wrapper--closed');
    fogSpace.classList.toggle('fog--closed')
}


let desktopBreakpoint = window.matchMedia( '(min-width:1366px)' );
const breakpointChecker = function() {
    if ( desktopBreakpoint.matches === true ) {
        sideMenuWrapper.classList.remove('wrapper--closed');
        sideMenuWrapper.classList.add('wrapper--open');
    } else {
        sideMenuWrapper.classList.add('wrapper--closed');
        sideMenuWrapper.classList.remove('wrapper--open');  
    }
}
desktopBreakpoint.addListener(breakpointChecker);
breakpointChecker();