$(window).on("scroll", function() {
  if($(window).scrollTop()<=40) { 
      $('.menu-section').removeClass('sticky');
      }
      else {
        $('.menu-section').addClass('sticky'); 
      }
  });










      $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });







// Scroll to top      
  if ($('#scroll-to-top').length) {
    var scrollTrigger = 10, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#scroll-to-top').addClass('show');
        } else {
          $('#scroll-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#scroll-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 100);
    });
  }


  $(document).on('click', '.menu-section ul li', function(){
    $(this).addClass('active'); // add the class to the element that's clicked.
    $(this).siblings().removeClass('active'); // remove the class from siblings.
  });