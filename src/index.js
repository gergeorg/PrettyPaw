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

const videoBg = document.querySelector(".video-bg");

videoBg.innerHTML = `
    <source src="video/video.webm" type="video/webm" />
    <source src="video/video.mp4" type="video/mp4" />
`;
