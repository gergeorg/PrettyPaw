import "./index.html";
import "./page.html";

import "swiper/scss/pagination";
import "swiper/scss";
import "./index.scss";

import { sliderInit } from "./modules/sliders";
import { videoBgInit } from "./modules/videoBg";
import { burgerControl } from "./modules/menuControl";
import { locationHover } from "./modules/locationHover";

sliderInit(".about__slider", {
  pagination: {
    el: ".about__slider-pagination",
  },
});

const careerSliderItems = document.querySelectorAll(".career__slider-item");

careerSliderItems.forEach((item, idx) => {
  item.classList.add(`career__slider-item_${idx % 2 ? "even" : "odd"}`);
});

sliderInit(".career__slider", {
  pagination: {
    el: ".career__slider-pagination",
  },
  breakpoints: {
    576: {
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
locationHover();
