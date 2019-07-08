var breakpoint = false;

$(window).scroll(function() {
  if ($(this).scrollTop() > 80 && !breakpoint ) {
     addFix();
  }
  if ($(this).scrollTop() < 80 && breakpoint ) {
     removeFix();
  }
})

function addFix() {
  breakpoint = true;
  $('header').addClass('fixed')
}
function removeFix() {
  breakpoint = false;
  $('header').removeClass('fixed')
}

$('#hamburger-btn').click(function(e) {
  e.preventDefault();
  $('#mobile_menu').toggleClass("menu-active")
  $('#menu-shadow').toggleClass("shadow-active")
  $(this).toggleClass("is-active");
});
$('#menu-shadow').click(function(){
  if ($(this).hasClass('shadow-active')){
    $(this).removeClass("shadow-active")
    $("#hamburger-btn").removeClass("is-active")
    $('#mobile_menu').removeClass("menu-active")
  }
});
$('.menu_toggle').click(function(e){
  e.preventDefault();
  $(this).siblings(".dropdown").slideToggle();
})
$('.exploitation-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500
});
$('.clients-carousel').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.captcha-btn').click(function(e){
  e.preventDefault();
});
$('#phone').mask('+38(000) 000-00-00');

$('.our_works_album').lightGallery();

$('.reviews_carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500
});