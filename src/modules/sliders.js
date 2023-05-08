import { Swiper, Pagination, Autoplay } from "swiper";

const params = {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInterection: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  modules: [Pagination, Autoplay],
};

export const sliderInit = (selectorSlider, newParams) => {
  new Swiper(selectorSlider, {
    ...params,
    ...newParams,
  });
};
