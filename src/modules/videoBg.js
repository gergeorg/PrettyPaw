export const videoBgInit = () => {
  const videoElems = document.querySelectorAll(".video-bg");

  videoElems.forEach(
    (elem) =>
      (elem.innerHTML = `
    <source src="video/video.webm" type="video/webm" />
    <source src="video/video.mp4" type="video/mp4" />
   `)
  );
};
