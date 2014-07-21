/*global google */
/*global Instafeed */
/*jshint unused:false*/

'use strict';

// Script para criar offset nas ancoras + animação suave na rolagem

var offsetHeight = 160;

$('.navbar-nav li a, .carousel-caption a').click(function () {
	var scrollPos = $('.bl-section-wrap').find($(this).attr('href')).offset().top - offsetHeight;
	$('body,html').animate({
		scrollTop: scrollPos
	}, 500);
	return false;
});

// Script para gerar o botão de scrollup

$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 600, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
		scrollText: 'Topo', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});

// Script para iniciar a galeria de fotos Owl Carousel

$(document).ready(function() {
	var carousel = $('.owl-carousel');
	carousel.owlCarousel({
		nav : true,
		slideSpeed : 800,
		paginationSpeed : 800,
		autoPlay : 8000,
		navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		singleItem : true
	});
	var gallery = $('.owl-gallery');
	gallery.owlCarousel({
		items : 2,
		slideSpeed : 800,
		paginationSpeed : 800,
		itemsMobile : [460, 1],
		itemsTablet : [768, 1],
		itemsDesktop : [1200,2],
		nav : true,
		navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
	});
});

// Script para iniciar Tweetie

$(document).ready(function() {
	$('.tweet').twittie({
		dateFormat: '%d/%m/%Y',
		template: '<div><i class="fa fa-twitter fa-2x fa-inverse"></i></div> <div>{{screen_name}} {{tweet}}<span>{{date}}</span></div>',
		count: 4
	});
});

// Script para iniciar o Instafeed

$(document).ready(function() {
	var feed = new Instafeed({
	    get: 'tagged',
	    tagName: 'tonaburgerlab',
	    clientId: 'd64987e04b084a3b9c13525774dd57b0',
	    resolution: 'standard_resolution',
	    limit: 4,
	    template: '<div class="col-xs-6 col-md-3"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></div>'
	});
	feed.run();
});

// Script para iniciar o Ekko Lightbox

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});