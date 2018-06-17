const images = ["/images/bg2.jpg", "/images/bg3.jpg", "/images/bg4.jpg", "/images/bg5.jpg"];
images.forEach(image => {
  preloadImage(image);
});
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

let imgCount = 0;
document.addEventListener('DOMContentLoaded', doSlideshow);
const intro = document.querySelector('.intro');

function doSlideshow(){
  if (imgCount >= images.length) imgCount = 0;
  intro.style.background = `url(${images[imgCount++]}) no-repeat top center`;
  intro.style.backgroundSize = 'cover';
  intro.style.width = '100%';
  intro.style.position = 'relative';
  intro.style.transition = '0.6s';
  setTimeout(doSlideshow, 5000);
}
