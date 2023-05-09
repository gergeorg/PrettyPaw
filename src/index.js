import "./index.html";

import "swiper/scss/pagination";
import "swiper/scss";
import "./index.scss";

import { sliderInit } from "./modules/sliders";
import { videoBgInit } from "./modules/videoBg";
import { burgerControl } from "./modules/menuControl";

sliderInit(".about__slider", {
  pagination: {
    el: ".about__slider-pagination",
  },
});

sliderInit(".career__slider", {
  pagination: {
    el: ".career__slider-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: false,
    },

    1024: {
      slidesPerView: "auto",
      spaceBetween: 26,
      pagination: false,
    },

    1240: {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: false,
    },
  },
});

videoBgInit();
burgerControl();
