import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';



window.addEventListener('DOMContenLoader', switchSlider());

function switchSlider () {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 767px)', 
    '.swiper',
    {
      width: 240,
      height: 72,
      loop: false,
      freeMode: false,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    }
  );
}