import { gsap } from "gsap";

export const burgerControl = () => {
  const navBtn = document.querySelector(".nav__burger");
  const navList = document.querySelector(".nav__list");
  const navItems = document.querySelectorAll(".nav__item");

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    navList,
    { opacity: 0, display: "none" },
    { opacity: 1, display: "block" }
  );

  navItems.forEach((elem, idx) => {
    const x = idx % 2 ? 500 : -500;

    tl.from(elem, { opacity: 0, x, duration: 1 }, "-=1");
  });

  const openMenu = () => {
    navBtn.classList.add("nav__burger_active");
    tl.play();
  };

  const closeMenu = () => {
    tl.reverse();
  };

  tl.eventCallback("onReverseComplete", () => {
    navBtn.classList.remove("nav__burger_active");
  });

  navBtn.addEventListener("click", () => {
    if (navBtn.classList.contains("nav__burger_active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const checkScreenSize = (e) => {
    if (e.matches) {
      gsap.set(navList, { opacity: 1, display: "flex" });
      navItems.forEach((elem) => {
        gsap.set(elem, { opacity: 1, x: 0 });
      });
    } else {
      gsap.set(navList, { opacity: 0, display: "none" });
      navItems.forEach((elem, idx) => {
        const x = idx % 2 ? 500 : -500;

        gsap.set(elem, { opacity: 0, x, duration: 1 });
      });
    }
  };

  const mediaQuery = window.matchMedia("(min-width: 1280px)");

  mediaQuery.addEventListener("change", checkScreenSize);
  checkScreenSize(mediaQuery);
};
