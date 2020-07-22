$(document).ready(function()  {

//for sticky navgation
$('.js--section-features').waypoint(function (direction) {
  if (direction == 'down') {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px;'
});

$('.js--scroll-to-plan').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500)
})

$('.js--scroll-to-start').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500)
})

//animations on scroll
$('.js--section-features').waypoint(function(direction) {
  $('.features.fade-in').addClass('animate__animated animate__fadeIn');
  $('.features.fade-in').removeClass('op-0');
})

$('.js--section-steps').waypoint(function(direction) {
  $('.steps-box.fade-in').addClass('animate__animated animate__slideInUp');
  $('.steps-box.fade-in').removeClass('op-0');
}, {
  offset: '200px'
});

$('.js--cities').waypoint(function(direction) {
  $('.section-cities.fade-in').addClass('animate__animated animate__fadeIn');
  $('.section-cities.fade-in').removeClass('op-0');
})

$('.js--section-plans').waypoint(function(direction) {
  $('.plan-box.fade-in').addClass('animate__animated animate__pulse');
})

/* mobile nav icon stuff*/

$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');

  nav.slideToggle(200);

  $(nav).attr('name', 'chevron-up-outline');

});

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})
*/
})
