/*global google */
/*global Instafeed */
/*global EkkoLightbox */
/*jshint unused:false*/

'use strict';

// Script para recolher a navegação ao tocar no botão, na versão mobile

$(document).ready(function () {
	$('.navbar-nav li a').click(function(event) {
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
});

// Scripts para criar offset nas ancoras + animação suave na rolagem

var offsetHeightMobile = 80;
var offsetHeightDesktop = 154;
var mobileScreen = matchMedia('(max-width:1199px)');
var desktopScreen = matchMedia('(min-width:1200px)');

	// Mobile

var offsetScrollMobile = function () {
	if (mobileScreen.matches) {
		$('.navbar-nav li a, .carousel-caption a, .bl-header-brand a').click(function () {
			var scrollPos = $('.bl-section-wrap').find($(this).attr('href')).offset().top - offsetHeightMobile;
			$('body,html').animate({
				scrollTop: scrollPos
			}, 1500);
			return false;
		});
	}
};

offsetScrollMobile();

	// Desktop

var offsetScrollDesktop = function () {
	if (desktopScreen.matches) {
		$('.navbar-nav li a, .carousel-caption a, .bl-header-brand a').click(function () {
			var scrollPos = $('.bl-section-wrap').find($(this).attr('href')).offset().top - offsetHeightDesktop;
			$('body,html').animate({
				scrollTop: scrollPos
			}, 1500);
			return false;
		});
	}
};

offsetScrollDesktop();

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