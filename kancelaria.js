$("#main ul li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - 55
		},
		500,
		function() {
			// when done, add hash to url
			// (default click behaviour)
			//window.location.hash = hash;
		}
	);
});

$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

var oferta = $('#oferta-img');

function showImages(oferta) {
	var windowHeight = jQuery(window).height();
	$(oferta).each(function() {
		var thisPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (topOfWindow + windowHeight - 200 > thisPos) {
			$(this).addClass('fadeIn');
		}
	});
}

$(document).ready(function() {
	showImages(oferta);
});

$(window).scroll(function() {
	showImages($('.image'));
});
