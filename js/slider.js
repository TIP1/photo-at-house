var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  // grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

// главный слайдер
var swiper = new Swiper("#main-swiper", swiperOptions);


//слайдер на главной для мобилки(внизу) 
var swiper = new Swiper('.gallery__title-wrap .swiper-container', {
  slidesPerView: 1.4,
  spaceBetween: 30,
  freeMode: true
});

var swiperWallpapers = new Swiper('.column__slider-block .column-slider .swiper-container', {
  navigation: {
    nextEl: '.column__slider-block .swiprer-arrows .swiper-button-next',
    prevEl: '.column__slider-block .swiprer-arrows .swiper-button-prev',
  },
});

var swiperWallpapers2 = new Swiper('.column__second-slider .swiper-container', {
  navigation: {
    nextEl: '.column__second-slider .swiprer-arrows .swiper-button-next',
    prevEl: '.column__second-slider  .swiprer-arrows .swiper-button-prev',
  },
});