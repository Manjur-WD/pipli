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
  touchDrag:false,
  pullDrag: false,
  freeDrag: false,
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


  // Function to fetch JSON data remotely
  async function fetchJSON() {
    try {
      const response = await fetch('product-and-item.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }

  // Function to populate the first dropdown with product names
  async function populateProducts() {
    const data = await fetchJSON();
    const select = document.getElementById("product");
    data.products.forEach(function(product) {
      if (product.names) {
        product.names.forEach(function(name) {
          var option = document.createElement("option");
          option.text = name;
          select.add(option);
        });
      }
    });
  }

  // Function to update the second dropdown based on the selected product
  async function updateItems() {
    const data = await fetchJSON();
    const productSelect = document.getElementById("product");
    const itemSelect = document.getElementById("items");
    const selectedProduct = productSelect.value;
    
    // Clear existing options
    itemSelect.innerHTML = '<option value="">-- Select an item --</option>';

    // Find the selected product and populate its items
    data.products.forEach(function(product) {
      if (product[selectedProduct]) {
        product[selectedProduct].forEach(function(item) {
          var option = document.createElement("option");
          option.text = item;
          itemSelect.add(option);
        });
      }
    });
  }

  // Populate the first dropdown when the page loads
  window.onload = function() {
    populateProducts();
  };

