  $(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        swipeToSlide: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        swipeToSlide: true,
        dots: false,
        infinite: false,
        autoplay: true,
      });
  });
