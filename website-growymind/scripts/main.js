$('#menu').click(function () {
  $('#nav').css({
    'display': 'block',
    'top': '0',
    'left': '0',
    'width': '100%',
    'z-index': '14',
    'transition': '0.3s',
    'transition-delay': '0.3s',
    'overflow': 'hidden',
    'background-color': '#ffc000',
    'position': 'fixed'
  });
});

$('#burger').change(function () {
  if ($('#burger').is(':checked')) {
    $("body").css("position", "fixed");
  } else {
    $("body").css("position", "static");
  }
});


$(document).ready(function () {
  $('.carousel').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '44px',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 200,
        }
      }
    ]
  });
})
