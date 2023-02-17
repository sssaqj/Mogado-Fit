/*------------------------------------
Scroll Button
------------------------------------*/
$(function(){
  var pagetop = $('#js-pagetop');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() < 500 || $(this).scrollTop() > 3000){
      pagetop.fadeOut();
    } else {
      pagetop.fadeIn();
    }
  });
  pagetop.click(function(){
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

/*------------------------------------
Fade anime
------------------------------------*/
if(window.matchMedia("(max-width: 600px)").matches){
  function fadeAnime(){
    $('.fadeLeftTriger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll >= elemPos - windowHeight){
        $(this).addClass('fadeLeft');
      }
    });

    $('.fadeRightTriger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
      }
    });
  }
}


/*------------------------------------
Change Map
------------------------------------*/
$(window).scroll(function(){
  fadeAnime();
});

$(function() {
  $('.map-buttons img').on('click', function() {
    var url = $(this).data('url');
		$('.google-map iframe').attr('src', url);
	});
});
/*------------------------------------
hamburger
------------------------------------*/
const ham = $('#js-hamburger');
const nav = $('#js-nav');
const nav_item = $('.nav-items-item');

ham.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
nav_item.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
