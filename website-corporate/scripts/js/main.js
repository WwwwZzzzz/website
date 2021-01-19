
$( ".button-inner" ).mouseenter(function(e) {
   var parentOffset = $(this).offset(); 
  
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   $(this).prev(".button-circle").css({"left": relX, "top": relY });
   $(this).prev(".button-circle").removeClass("desplode-circle");
   $(this).prev(".button-circle").addClass("explode-circle");

});

$( ".button-inner" ).mouseleave(function(e) {

     var parentOffset = $(this).offset(); 

     var relX = e.pageX - parentOffset.left;
     var relY = e.pageY - parentOffset.top;
     $(this).prev(".button-circle").css({"left": relX, "top": relY });
     $(this).prev(".button-circle").removeClass("explode-circle");
     $(this).prev(".button-circle").addClass("desplode-circle");

});

var videoSrc = $("#videoModal iframe").attr("src");

$('#videoModal').on('show.bs.modal', function () { 
  $("#videoModal iframe").attr("src", videoSrc+"&amp;autoplay=1");
});

$("#videoModal").on('hidden.bs.modal', function (e) {
  $("#videoModal iframe").attr("src", null);
});