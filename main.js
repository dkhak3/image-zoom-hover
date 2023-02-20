window.addEventListener("load", () => {
  const image = document.querySelector(".image");

  const imageCover = document.querySelector(".image-cover");

  const imageWrapper = document.querySelector(".image-wrapper");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;

  imageCover.addEventListener("mousemove", (e) => {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width: auto; height: auto; max-height: unset";

    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;

    imageWidth += spaceX;
    imageHeight += spaceY;

    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;

    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`;
  });

  imageCover.addEventListener("mouseleave", () => {
    image.style = "";
  });
});
