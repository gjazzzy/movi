 var swiper = new Swiper(".mySwiper", {
  // Arrow
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { //dots
    el: '.swiper-pagination',
    clickable:  true, 
    dynamicBullets: true, // Dynamick pag
    type: 'fraction', // Fraction
    // type: 'progressbar', //  Progressbar
   
  }, 
  scrollbar: { //Scrollbar
      el: '.swiper-scrollbar',
      draggable: true,

  },
  keyboard:  { // Keyboard
    enabled: true,
  },

  mousewheel: {
    sensitivity: 1, // Mouswwheel
  },

  fadeEffect: {
    crossFade:true
  },

   autoplay: {
     delay:5000 // Pause

   },
  //  Main setting
  loop: false, // Infinity ! (not scroll, column)
  speed:800,
  freeMode: false, // Scroll slider
  simulateTouch: true, // TouchScroll
  grabCursor: true, // Cursor
  slideToClickedSlide: true,// Alide Clicked Slide
  autoHeight: false, // AutoHeight
  slidesPerView: 1, // Slides show
  watchOverflow: true, 
  spaceBetween: 0,// Margin
  slidesPerGroup: 1, // Slides swap
  centeredSlides: false, //centered Slide
  initialSlide: 0, // First slid
  effect:'slide',
  direction:'horizontal', // vertical

  breakpoints: {
   320: { 
    slidesPerView: 1,

    },
   480: { 
    slidesPerView: 1,

    },
   992: { 
    slidesPerView: 1,

    }
  },
});