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
  $(this).parent().siblings(".dropdown").slideToggle();
});
$('.captcha-btn').click(function(e){
  e.preventDefault();
});
$('.map-img').click(function(e){
  e.preventDefault();
  $('.map-block').addClass('dn');
  $('.map').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5529748844833!2d30.514464815263647!3d50.41216809800436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf3af97c6063%3A0x29c06e78aacc11fc!2z0YPQuy4g0JjQt9GO0LzRgdC60LDRjywgNSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1562580469308!5m2!1sru!2suahttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5529748844833!2d30.514464815263647!3d50.41216809800436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf3af97c6063%3A0x29c06e78aacc11fc!2z0YPQuy4g0JjQt9GO0LzRgdC60LDRjywgNSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1562580469308!5m2!1sru!2sua');
})