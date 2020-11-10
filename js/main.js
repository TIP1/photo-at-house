const width = $(window).width();

// // мобильное меню
// $(document).ready(function() {
//   $('.menu-toggle').click(function() {
//     $(this).toggleClass('active');
//     $('.header').toggleClass('active');
//     $("body").toggleClass('noscroll');
//   });
// });

// показываем выбранный таб, скрываем все остальные
$(document).ready(function() {

  $('.tab-toggle__btn').on('click', function(evt) {
    evt.preventDefault();

    let tab = $(this).closest('.tab-toggle__item');
    let id = $(this).attr('href');//номер по счету - сделать
    let num = parseInt(id.match(/\d+/));
    // console.log(id + '--1')
    // $('.tab-toggle__item').each(function (index, el) { 
    //   if (num !== index + 1) {
    //     console.log($(evt)+'----3')
    //     $(evt.target).parent(el).find('a').attr('href', ('#tab' + (index + 1)))
    //     // console.log($(evt.target).parent(el))
    //     // id = $(this).attr('href')
    //     console.log($(evt)+'----3')
    //     console.log(id + '--2')
    //     num = parseInt(id.match(/\d+/));
    //   }
    // })


    let list = $(id);

    $('.tab-toggle__item').removeClass('active');
    $('.suggestions__list').removeClass('active');

    tab.addClass('active');
    list.addClass('active');


    $('.tab-toggle__decor-img').removeClass('active');
    $('.tab-toggle__decor-img--' + num).addClass('active');
    $(this).blur();
  })
});

// прячем иконку в поле поиска
$(document).ready(function() {
  $('.search__input--shutterstock').on('keyup', function(evt) {
    let icon = $(this).closest('.search__form').find('.search__icon-shutterstock');
    icon.addClass('hide');

    // показываем если поле пустое
    if ($(this).val().length === 0) {
      icon.removeClass('hide');
    }
  });
});

// // мобильное подменю
// $(document).ready(function() {
//   if (width <= 756) {
//     $('.main-nav-sub').click(function(evt) {
//       evt.preventDefault();

//       let currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sublist');
//       $('.main-nav__sublist').not(currentSublist).toggleClass('active');
//       currentSublist.toggleClass('active');

//       $('.main-nav-sub').not($(this)).toggleClass('active');
//       $(this).toggleClass('active');
//     });
//   }
// });

// // доступное навигационное меню (enter и пробел)
// $(document).ready(function() {
//   $('.main-nav-sub').on('keydown', function(evt) {
//     if (evt.keyCode === 13 || evt.keyCode === 32) {
//       evt.preventDefault();
//       let currentSublist = $(this).closest('.main-nav__item');

//       $('.main-nav__item').not(currentSublist).removeClass('selected-on-tab');
//       currentSublist.toggleClass('selected-on-tab');

//       // клик мышкой вне выпадающего меню
//       $(document).on('mouseup', function(evt) {
//         if (!currentSublist.is(evt.target) && currentSublist.has(evt.target).length === 0) {
//           currentSublist.removeClass('selected-on-tab');
//         }
//       });
//     }
//   });
// });

// // маска для поля ввода номера
// $(document).ready(function() {
//   $(".js-phone-mask").mask("+7 ( 999 ) 999 - 99 - 99");
// });

// модальные окна
// оставить заявку (модалка 1)
// $('.js-modal-callback').click(function(evt) {
//   evt.preventDefault();
//   openModal('.modal-callback', '.modal__name');
// });

// коммерческое предложение (модалка 2)
// $('.js-modal-business').click(function(evt) {
//   evt.preventDefault();
//   openModal('.modal-business', '.modal__name');
// });

// открыть модальное окно
function openModal(modalClass, focusClass) {
  $('.overlay').fadeIn();
  $('body').addClass('noscroll');
  $(modalClass).addClass('active'); // класс модального окна
  $(focusClass).focus(); // класс для фокуса
}

// закрыть модальное окно
function closeModal() {
  if ($('.modal').hasClass('active')) {
    $('.modal').removeClass('active');
    $('.overlay').fadeOut();
    $('body').removeClass('noscroll');
  }
}

// клик/тач вне модального окна -> закрыть окно
function clickOutsideModal(evt) {
  let modal = $('.modal');
  if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
    closeModal();
  }
}

// нажат esc -> закрыть окно
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    closeModal();
  }
});

// слушаем клик/тач вне модального окна
$(document).on('mouseup touchstart', clickOutsideModal);

// кнопка закрыть
$('.modal__close').click(function(evt) {
  closeModal();
});

// !NB добавить в ajax-запрос
// сообщение об успешной отправке
// showMessageAfterRequest($(this));

// // сообщение об успешной отправке в модальном окне (для пользователя)
// function showMessageAfterRequest(current) {
//   current.closest('.modal').addClass('reply');

//   setTimeout(function() {
//     closeModal();
//     $('.modal').removeClass('reply');
//   }, 3000);
// }

$('.two-columns__wallpapers-list.wallpapers-list .wallpapers-list__catigories__button').on('click', function(e){
  e.preventDefault();
  $('.two-columns__wallpapers-list.wallpapers-list .wallpapers-list__catigories a').removeClass('active');
  $(e.target).toggleClass('active')
})

$('.column__slider-block .wallpapers-list__catigories__button').on('click', function(e){
  e.preventDefault();
  $('.column__slider-block .wallpapers-list__catigories a').removeClass('active');
  $(e.target).toggleClass('active')
})

$('.column__second-slider .wallpapers-list__catigories__button').on('click', function(e){
  e.preventDefault();
  $('.column__second-slider .wallpapers-list__catigories a').removeClass('active');
  $(e.target).toggleClass('active')
})

$('.subpagionation__pagination .wallpapers-list__catigories__button').on('click', function(e){
  e.preventDefault();
  $('.subpagionation__pagination .wallpapers-list__catigories a').removeClass('active');
  $(e.target).toggleClass('active')
})



$('#mobile-burger-menu-btn').on('click', function(){
  $('.mobile-burger-menu-block').slideToggle(250)
  $('#mobile-burger-menu-btn').toggleClass('active')
  $('.mobile-burger-menu-block').toggleClass('active')
  $('body').toggleClass('noscroll')
  $('header').toggleClass('active')
})

$('.typeofwall.item p').on('click',  function(e) {
  if ($(e.target).hasClass('active')) {
    $('.typeofwall.item').removeClass('active')
    $('.typeofwall.item p').removeClass('active')
    $('.typeofwall.item p').siblings('ul').slideUp()
  } else {
      $('.typeofwall.item p').siblings('ul').slideUp()
      $('.typeofwall.item').removeClass('active')
      $('.typeofwall.item p').removeClass('active')
      $(e.target).toggleClass('active')
      $(e.target).parent().toggleClass('active')
      $(e.target).siblings('ul').slideToggle()
  }
})

function clickOutsideModalCities(evt) {
  let modal = $('.btn-big-contacts__text-wrap__modal');
  if (!modal.is(evt.target) && modal.has(evt.target).length === 0 
  && !$('.btn-big-contacts__desc').is(evt.target) 
  && $('.btn-big-contacts__desc').has(evt.target).length === 0) {
    $(".btn-big-contacts__text-wrap__modal").slideUp(100)
  }
  // if ($('.btn-big-contacts__desc').is(evt.target)) {
  //   $(".btn-big-contacts__text-wrap__modal").slideDown(100)
  // }
}

$(document).on('mouseup touchstart', clickOutsideModalCities);

$('.btn-big-contacts__desc').on('click', function(){
  $(".btn-big-contacts__text-wrap__modal").slideToggle(100)
})

// search-btn-modal mobile-nav-search-modal
$('#search-btn-modal').on('click', function() {
  $('.mobile-nav-search-modal').slideToggle()
  $('.mobile-nav__burger-link').removeClass('active')
  $('.header').removeClass('active')
  $('body').removeClass('noscroll')
  $('.mobile-burger-menu-block').slideUp('active')
})

function clickOutsideModalSearch(evt) {
  let modal = $('.mobile-nav-search-modal');
  if (!modal.is(evt.target) && modal.has(evt.target).length === 0 
  && !$('#search-btn-modal').is(evt.target) 
  && $('#search-btn-modal').has(evt.target).length === 0) {
    $(".mobile-nav-search-modal").slideUp(100)
  }
  // if ($('.btn-big-contacts__desc').is(evt.target)) {
  //   $(".btn-big-contacts__text-wrap__modal").slideDown(100)
  // }
}

$(document).on('mouseup touchstart', clickOutsideModalSearch);

$(window).on('load resize', function() {
  if($(window).width() > 750) {
    $('.mobile-nav-search-modal').slideUp()
    $('.mobile-nav__burger-link').removeClass('active')
    $('.header').removeClass('active')
    $('body').removeClass('noscroll')
    $('.mobile-burger-menu-block').slideUp('active')
    $(".mobile-nav-search-modal").slideUp(100)
    $('.typeofwall.item').removeClass('active')
    $('.typeofwall.item p').removeClass('active')
    $('.typeofwall.item p').siblings('ul').slideUp()
  }
})

$(document).on('mouseup touchstart',  function(){
    let howMuch = $('.tab-toggle__list.container li').filter(function() {
      return $(this).css('display') !== 'none';
  }).length;
  // console.log(howMuch)
    $('.tab-toggle__decor-img-wrap img').each(function (index, el) { 
      var classтum = $(el).attr('class').split(' ')[1].split('').reverse()[0];
      if (classтum > howMuch) {
        el.css({'display':'none'})
      }
    });
})