import "./index.html";

import "swiper/scss/pagination";
import "swiper/scss";
import "./index.scss";

import { sliderInit } from "./modules/sliders";

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

// const heroVideoBg = document.querySelector(".hero__video-bg");

// heroVideoBg.innerHTML = `
//     <source src="video/video.webm" type="video/webm" />
//     <source src="video/video.mp4" type="video/mp4" />
// `;

// const locationVideoBg = document.querySelector(".location__video-bg");

// locationVideoBg.innerHTML = `
//     <source src="video/video.webm" type="video/webm" />
//     <source src="video/video.mp4" type="video/mp4" />
// `;

const videoBg = document.querySelectorAll(".video-bg");

videoBg.forEach(
  (elem) =>
    (elem.innerHTML = `
    <source src="video/video.webm" type="video/webm" />
    <source src="video/video.mp4" type="video/mp4" />
`)
);
