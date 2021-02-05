$(document).ready(function () {
      const flowersSLider = new Swiper('.flowers-slider', {
        // параметры слайдера
        slidesPerView: '6',
        loop: true,
      
      // подключаем стрелки
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
        //настройки адаптивной версии
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 6,
          }
        }
    });

    const reviewsSLider = new Swiper('.reviews-slider', {
      // параметры слайдера
      slidesPerView: '1',
      loop: true,

    // подключаем стрелки
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
      },
    });
    //событие review-1 при клике на кнопку reviews-link
    $("#review-1").on('click', function() {

      $.fancybox.open([
        {
          src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
          opts : {
            caption : 'First caption',
            thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
          }
        },
        {
          src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts : {
            caption : 'Second caption',
            thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
          }
        }
      ], {
        loop : true,
        thumbs : {
          autoStart : true
        }
      });
    
    });
});