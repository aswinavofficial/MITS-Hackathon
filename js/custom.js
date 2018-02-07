/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	$('.accordion-list .acc-head').click(function(){
		$(this).parent().toggleClass('active');
		// $('.accordion-list li').not($(this).parent()).removeClass('active');
	});

	$('.testimonial-list').slick({
	  autoplay: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
	});

	$('.main-nav a, .site-logo, .footer-logo').click(function(event){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    if($('body').hasClass('menu-open')) {
	    	$('body').removeClass('menu-open');
	    	$('#trigger-overlay').removeClass('menu-close');
	    }
	    event.preventDefault();
	});

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 0) {
	        $('body').addClass('sticky');
	    } else {
	        $('body').removeClass('sticky');
	    }
	});

	$('#trigger-overlay').click(function(){
		$('body').toggleClass('menu-open');
		$(this).toggleClass('menu-close');
		event.preventDefault();
	});



	//Countdown Timer
	var countDownDate = new Date("Nov 11, 2017 00:00:00").getTime();
		var x = setInterval(function() {
	  var now = new Date().getTime();
	  var distance = countDownDate - now;
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		$('.days').html(days);
		$('.hours').html(hours);
		$('.mins').html(minutes);
	  if (distance < 0) {
	    clearInterval(x);
        var x = document.getElementById("register");
        var y = document.getElementById("registerhafter");
        x.style.display = "none";
        y.style.display = "block";
	  }
	}, 1000);



})(jQuery);