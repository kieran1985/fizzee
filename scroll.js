$(document).ready(function() {
  // Navbar changes colour on scroll

  $(function() {
    $(document).scroll(function() {
      var $nav = $('#mainNavbar');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  // Scrolling to elements
  // Home
  $('#home, #homeFooter').click(function() {
    $('html, body').animate({ scrollTop: $('#showcase').offset().top }, 1000);
  });

  // About
  $('#about, #aboutFooter').click(function() {
    $('html, body').animate(
      { scrollTop: $('#sectionAbout').offset().top - 60 },
      1000
    );
  });

  // Tubs
  $('#tubs, #tubsFooter').click(function() {
    $('html, body').animate(
      { scrollTop: $('#sectionTubs').offset().top - 60 },
      1000
    );
  });

  // Addons
  $('#addons, #addonsFooter').click(function() {
    $('html, body').animate(
      { scrollTop: $('#sectionAddons').offset().top - 60 },
      1000
    );
  });

  // Contact Form
  $('#contact, #contactFooter').click(function() {
    $('html, body').animate(
      { scrollTop: $('#contactForm').offset().top },
      1000
    );
  });

  // Animations on scroll
  // About section
  $('.wp-1').waypoint(
    function(direction) {
      $('.wp-1').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );

  // Left addon
  $('.wp-2').waypoint(
    function(direction) {
      $('.wp-2').addClass('animated fadeInLeft');
    },
    {
      offset: '50%'
    }
  );

  // Right addon
  $('.wp-3').waypoint(
    function(direction) {
      $('.wp-3').addClass('animated fadeInRight');
    },
    {
      offset: '50%'
    }
  );

  // Contact Form
  $('.wp-4').waypoint(
    function(direction) {
      $('.wp-4').addClass('animated zoomIn');
    },
    {
      offset: '50%'
    }
  );
});
