$(document).ready(function() {
	$('#about-nav').smoothScroll({
		scrollTarget: '#about',
		easing: 'swing',
		speed: 400,
		preventDefault: true
	});

	$('#contact-nav').smoothScroll({
		scrollTarget: '#contact',
		easing: 'swing',
		speed: 400,
		preventDefault: true
	});

});