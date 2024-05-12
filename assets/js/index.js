$(".pipli-banner.owl-carousel").owlCarousel({
  //   animateOut: "flipInX",
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 450,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    2000: {
      items: 1,
    },
  },
});

$(".left-product-slider.owl-carousel").owlCarousel({
  animateOut: "fadeOut",
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 450,
  items: 1,
});

$(".right-product-slider.owl-carousel").owlCarousel({
  animateOut: "fadeOut",
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 450,
  items: 1,
  rtl: false, // Set rtl option to false for left to right sliding
});

$(".product-frame-slider.owl-carousel").owlCarousel({
  animateOut: "fadeOut",
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  loop: true,
  nav: false,
  dots: false,
  mouseDrag: false,
  smartSpeed: 450,
  items: 1,
});

$(".oil-sources").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".step-into-house .slider").slick({
  arrows: false,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});



$(".love-left-arrow").click(() => {
  $(".left-product .owl-next").click();
})

$(".love-right-arrow").click(() => {
  $(".right-product .owl-prev").click();
})

$(".product-next-prev-btn .prev").click(() => {
  $(".product-frame-slider .owl-prev").click();
})

$(".product-next-prev-btn .next").click(() => {
  $(".product-frame-slider .owl-next").click();
})


setTimeout(() => {
  $(".preloader").fadeOut();
}, 2000)


$(".top-foot video").play();
