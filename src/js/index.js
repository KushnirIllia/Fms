const nav = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
  nav.classList.toggle('navbar_active', window.scrollY > 20)
})

function toggle(item) {
  item.addEventListener('click', function () {
    document.querySelector('.navbar__links').classList.toggle('navbar__links_active')
    document.querySelector('.navbar__bg').classList.toggle('navbar__bg_active')
    document.body.classList.toggle('body_active')
  })
}

toggle(document.querySelector('.navbar__btn'))
toggle(document.querySelector('.navbar__close'))

// const slider = tns({
//   container: '.slider',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   center: true,
//   controlsPosition: "bottom",
//   speed: 1000,
//   nav: true,
//   rewind: false,
//   preventScrollOnTouch: "force",
//   mouseDrag: true,
//   controlsContainer: '.slider__btns',
//   controls: false,
// });
// function prev(item) {
//   document.querySelector(item).addEventListener('click', function () {
//     slider.goTo('prev')
//   })
// }
// prev('.prev')
// prev('.prengi-expert__prev')
//
// function next(item) {
//   document.querySelector(item).addEventListener('click', function () {
//     slider.goTo('next')
//   })
// }
// next('.next')
// next('.prengi-expert__next')
$(document).ready(function () {

  $(function () {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })
  })
  $('.promo-slider__inner').slick({
    dots: true,
    speed: 700,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="promo-slider__prev">&#8810;</button>',
    nextArrow: '<button type="button" class="promo-slider__next">&#8811;</button>',
  })
  $('.prengi-expert__slider').slick({
    dots: false,
    speed: 700,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="prengi-expert__prev"><img src="img/slider__arrow.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="prengi-expert__next"><img src="img/slider__arrow.png" alt="arrow"></button>',
  })

})

