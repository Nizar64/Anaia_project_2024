
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict




// Gallery

jQuery(document).ready(function() {
 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#myModal').on('hidden.bs.modal', function(e) {
        $('#myModal iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() {
 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#myCarousel').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#myCarousel .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});

// *****************__NEW___MENU___2024____********************

(function($) {

    // Menu filter
    $("#menu-filters li a").click(function() {
      $("#menu-filters li a").removeClass('active');
      $(this).addClass('active');
  
      var selectedFilter = $(this).data("filter");
      //  $("#menu-wrapper").fadeTo(100, 0);
  
      $(".menu-restaurant").fadeOut();
  
      setTimeout(function() {
        $(selectedFilter).slideDown();
        //$("#menu-wrapper").fadeTo(300, 1);
      }, 300);
    });
  
    })(jQuery);


    // *****************____END____NEW___MENU___2024____********************



    // ###################______test____stiky_____button________##############


    // document ready trigger
$(document).ready(function(){  
    userScroll();
    buttonPosition();
  });
  // window resize trigger
  $(window).resize(function() {
    userScroll();
    buttonPosition();
  });
  // scroll trigger
  $(document).scroll(function() {
    userScroll();
    buttonPosition();
  });
  
  var cB=0;
  
  // this function will position the button as if it were it the normal flow
  function buttonPosition(){
        // get the position of the content above the button
    var caP = $('#wrapper > div:nth-child(1)').position(),
        // get the height of the content above the button
        caH = $('#wrapper > div:nth-child(1)').height(),
        // find out exactly where the bottom of the content, abover the button, is
        cB = caP.top + caH;
    // set the top of the button to the bottom of the content with 50px of margin
      $('#stickybutton.static').css('top',cB + 50);
    // when the button is in the corner, keep the button up top
      $('#stickybutton.corner').css('top',0); 
  }
  
  // this function will sence where the button is and toggle the positioning classes
  function userScroll(){
        // get the position of the content above the button
    var caP = $('#wrapper > div:nth-child(1)').position(),
        // get the height of the content above the button
        caH = $('#wrapper > div:nth-child(1)').height(),
        // find out exactly where the bottom of the content, abover the button, is
        cB = caP.top + caH;
    // check if the button is at the top
      if($(window).scrollTop()>cB){ // if at the top
      // add 'corner' class and remove 'static' class
      $('#stickybutton').addClass('corner').removeClass('static');
    }else{ // else at the top
      // add 'static' class and remove 'corner' class
      $('#stickybutton').removeClass('corner').addClass('static');
    }
  }


//   @@@@@@@@@@@@@@@@@@@@@@@@@@______test_____carousel_____png_______@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


$(function(){
    var $clientcarousel = $('#brands-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 220);
    $clientcarousel.css('width',clientwidth);
    
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
    
    $(document).on({
      mouseenter: function(){
        rotating = true;
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '#brands-section');
    
    function rotateClients() {
      if(rotating != false) {
        var $first = $('#brands-list li:first');
        $first.animate({ 'margin-left': '-190px' }, 4000, "linear", function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('#brands-list li:last').after($first);
        });
      }
    }
  });
  
  //   @@@@@@@@@@@@@@@@@@@@@@@@@@______END____test_____carousel_____png_______@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@