import "./index.html";
import "./index.scss";

import Swiper from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const videoBg = document.querySelector(".video-bg");

videoBg.innerHTML = `
    <source src="video/video.webm" type="video/webm" />
    <source src="video/video.mp4" type="video/mp4" />
`;
