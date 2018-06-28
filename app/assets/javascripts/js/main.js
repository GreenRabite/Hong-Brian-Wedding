const images = [];

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "/images/bg2.jpg",
    "/images/bg3.jpg",
    "/images/bg4.jpg",
    "/images/bg5.jpg",
);

const imagesUrl=["/images/bg2.jpg","/images/bg3.jpg","/images/bg4.jpg","/images/bg5.jpg"];

let imgCount = 0;
document.addEventListener('DOMContentLoaded', doSlideshow);
const intro = document.querySelector('.intro');

function doSlideshow(){
  if (imgCount >= images.length) imgCount = 0;
  intro.style.minWidth = '100vw';
  intro.style.maxHeight = '100vh';
  intro.style.background = `url(${imagesUrl[imgCount]}) no-repeat top center`;
  intro.style.position = 'relative';
  intro.style.transition = '1s';
  imgCount++;
  setTimeout(doSlideshow, 3000);
}
