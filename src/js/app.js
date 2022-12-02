
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import DerTabs from "./modules/DerTabs.js";

flsFunctions.isWebp();

const swiper = new Swiper();
new DerTabs('tab', {
    isChanget: (tabs) => {
        // console.log(tabs);
    }
});

