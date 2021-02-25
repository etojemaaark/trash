"use strict";

/// SWIPER ///
new Swiper(".feedback__slider", {
  /// Стрелки ///
  navigation: {
    nextEl: '.feedback__text-button-next',
    prevEl: '.feedback__text-button-prev'
  },
  pagination: {
    el: '.feedback__text-progressbar',
    type: 'progressbar'
  },
  /// Скроллбар ///
  // scrollbar: {
  // 	el: '.swiper-scrollbar',
  // 	draggable: true,
  //  },
  /// Количество показываемых слайдов ///
  slidesPerView: 3,
  /// Расстоление между слайдами ///
  // spaceBetween: '10px',
  /// Сменить курсор на руку ///
  // grabCursor: true,
  /// Пагинация ///
  // pagination: {
  // 	el: '.swiper-pagination',
  // 	type: 'bullets',
  // },
  /// Автовоспроизведение ///
  // autoplay: {
  // 	delay: 1000,
  // 	disableOnInteraction: false,
  // },
  loop: true,
  speed: 1000,
  breakpoints: {
    1707: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
}); /// ТАБЫ ///

var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');
    activeTrigger.classList.remove('active'); // 1

    trigger.classList.add('active'); // 2

    activeContent.classList.remove('active'); // 3

    content.classList.add('active'); // 4
  });
}); /// ДЕЙСТВИЕ ПРИ КЛИКЕ ///

$(function () {
  $(".listing__bottom-btn").click(function () {
    $(".listing__bottom-text-hidden").slideToggle();
    $(".listing__bottom-text").toggleClass('active'); // if ($(".listing__bottom-text").hasClass("active")) {
    // 	$(".listing__bottom-text").removeClass("active");
    // 	$(".listing__bottom-btn").text('читать полностью')
    // } else {
    // 	$(".listing__bottom-text").addClass("active");
    // 	$(".listing__bottom-btn").text('скрыть')
    // }
  });
}); /// БУРГЕР ///

$('.header__burger').on('click', function () {
  if (!$(this).hasClass('active')) {
    $('.header__burger, .header__menu, .header__menu-list').toggleClass('active');
    $('body').toggleClass('lock');
  } else {
    $('.header__burger, .header__menu, .header__menu-list').removeClass('active');
    $('body').removeClass('lock');
  }
});