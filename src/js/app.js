
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import DerTabs from "./modules/DerTabs.js";
import Modal from "./modules/Modal.js";

flsFunctions.isWebp();

const swiper = new Swiper();
new DerTabs('tab', {
    isChanget: (tabs) => {
        // console.log(tabs);
    }
});

new Modal({
    isOpen: (modal) => {
        // console.log(modal);
        // console.log('opened');
    },
    isClose: (modal) => {
        // console.log('closed');
    },
});

