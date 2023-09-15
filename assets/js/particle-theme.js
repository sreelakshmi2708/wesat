/**
 * Particle HTML Template V2 002
 * Theme JS
 * Author: Dragan Milenkovic
 * Copyright - 2021 Skilltech Web Design - skilltechwebdesign.com
 * URL: https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech
 */

$(document).ready(function () {

	// -- START: Page Transitions and Preloader -- //

	// Page Preloader - Part 1 (pre-insert)
	$('body').addClass('pa-preloadable');
	$('body').prepend('<div class="pa-loader">' +
		'<section class="warper"><div class="spinn" style="opacity: 0.24;"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="preloader"><p class="hello"></p><div id="preloader"><div id="loader"></div></div></div></section>' +
		'<section class="warper darker"><div class="spinn" style="opacity: 0.24;"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></section>' +
	'</div>');

	// Page Transitions - Part 1
	setTimeout(function(){
		$('.pa-overlay').detach();
	}, 340);
	setTimeout(function(){
		$( '.pa-page-transition-1' ).removeClass( 'is-active' );
	}, 420);

	// Page Preloader - Part 2
	setTimeout(function(){
		$('.warper').addClass('is-inactive');
		$('.pa-loader').addClass('is-inactive');
	}, 3000);
	setTimeout(function(){
		$( '.pa-loader' ).detach();
	}, 4410);

	// Page Transitions - Part 2
	window.onload = () => {

		// On Load
		const anchors = document.querySelectorAll('a:not([href^="#"])');

		// Wait 350ms AND
		// Make .pa-page-transitions (black overlay) INVISIBLE
		const transition_el = document.querySelector('.pa-page-transition');
		setTimeout(() => {
			transition_el.classList.remove('is-active');
		}, 350);

		for (let i = 0; i < anchors.length; i++) {
			const anchor = anchors[i];

			// On normal link click
			anchor.addEventListener('click', e => {
				e.preventDefault();
				var target = anchor.href;

				// Make .pa-page-transition (black overlay) VISIBLE
				transition_el.classList.add('is-active');

				// Wait for .pa-page-transition.is-active transition and update URL
				setInterval(() => {
					window.location.href = target;
				}, 500); // make it equal to .pa-page-transition-1.is-active {transition: all EQUIALms ease 0s;}
			})
		}
	}

	// -- END: Page Transitions and Preloader -- //


	// Desktop Menu Dropdown
	$('.navbar-nav > li > ul > li').on('click', function(e) {
		e.stopPropagation();
		$(this).siblings().removeClass('pa-expand-children');
		$(this).toggleClass('pa-expand-children');
	});


	/** 
	 * Smooth Anchor Scrolling
	 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
	 */

	// Select all links with hashes
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) { // Select a AND Remove links that don't actually link to anything
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, 'easeInOutQuad',
				function(){
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});


	// Initiate Off Canvas Menu
	$('#main-nav').hcOffcanvasNav({
		disableAt: 1200,
		insertClose: false,
		insertBack: true,
		labelBack: 'Back',
		levelTitleAsBack: false,
		pushContent: true,
		pushContent: '.pushable-content',
		position: 'right',
		swipeGestures: true,
		levelSpacing: 17,
	});
	// Fix for Off Canvas Menu
	var $nav = $('#main-nav').hcOffcanvasNav();
	var Nav = $nav.data('hcOffcanvasNav');
	$(window).on('resize', function() {
		if ( $('body').hasClass('hc-nav-open') ) {
			Nav.close();
		}
	});


	// Change hero entrance animations if preloader HTML is present
	$('body.pa-blog.pa-preloadable .pa-hero .fadeInDelay03Duration10').addClass('fadeInDelay35Duration10').removeClass('fadeInDelay03Duration10'); // Blog and Single
	$('body.pa-service-item.pa-preloadable .pa-hero .slideDownDelay07Duration10').addClass('slideDownDelay39Duration10').removeClass('slideDownDelay07Duration10'); // Service Item
	$('body.pa-service-item.pa-preloadable .pa-show-more-arrow.fadeInDelay15Duration10').addClass('fadeInDelay47Duration10').removeClass('fadeInDelay15Duration10'); // Service Item
	$('body.pa-service-item.pa-preloadable .bounceDelay35Duration12').addClass('bounceDelay67Duration12').removeClass('bounceDelay35Duration12'); // Service Item
	$('body.pa-project-item.pa-preloadable .pa-hero .fadeInDelay03Duration10').addClass('fadeInDelay35Duration10').removeClass('fadeInDelay03Duration10'); // Portfolio Item


	// Configue WOW.js and animate.css elements (animations) - Before initialization
	$('.counterskills').addClass('wow fadeIn');
	$('.fadeInDelay00Duration10').addClass('wow fadeIn');
	$('.fadeInDelay03Duration10').addClass('wow fadeIn');
	$('.fadeInDelay05Duration10').addClass('wow fadeIn');
	$('.fadeInDelay06Duration10').addClass('wow fadeIn');
	$('.fadeInDelay10Duration10').addClass('wow fadeIn');
	$('.fadeInDelay15Duration10').addClass('wow fadeIn');
	$('.fadeInDelay35Duration10').addClass('wow fadeIn');
	$('.fadeInDelay47Duration10').addClass('wow fadeIn');
	$('.fadeInLeftDelay03Duration10').addClass('wow fadeInLeft');
	$('.fadeInLeftDelay05Duration10').addClass('wow fadeInLeft');
	$('.fadeInRightDelay05Duration10').addClass('wow fadeInRight');
	$('.fadeInRightDelay11Duration10').addClass('wow fadeInRight');
	$('.fadeInRight--Custom').addClass('wow fadeInRightCustom');
	$('.fadeInLeft--Custom').addClass('wow fadeInLeftCustom');
	$('.progressBar').addClass('wow progressBar');
	$('.slideup').addClass('wow slideInUp');
	$('.slideUp').addClass('wow slideInUp');
	$('.slideDownDelay10Duration10').addClass('wow slideInDown');
	$('.slideDownDelay07Duration10').addClass('wow slideInDown');
	$('.slideDownDelay39Duration10').addClass('wow slideInDown');
	$('.bounceDelay35Duration12').addClass('wow bounce');
	$('.bounceDelay67Duration12').addClass('wow bounce');


	// Innitiate WOW.js for animations
	new WOW().init();


	// Configue WOW.js and animate.css elements (animations) - After initialization
	$('.counterskills').attr({'data-wow-delay':'1.0s'});
	$('.fadeInDelay00Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.0s'});
	$('.fadeInDelay03Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$('.fadeInDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInDelay06Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.6s'});
	$('.fadeInDelay10Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$('.fadeInDelay15Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.5s'});
	$('.fadeInDelay35Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'3.5s'});
	$('.fadeInDelay47Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'4.7s'});
	$('.fadeInLeftDelay03Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$('.fadeInLeftDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay11Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$('.fadeInRight--Custom, .fadeInLeft--Custom').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay11Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$('.slideDownDelay10Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$('.slideDownDelay07Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.7s'});
	$('.slideDownDelay39Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'3.9s'});
	$('.bounceDelay35Duration12').attr({'data-wow-duration':'1.2s','data-wow-delay':'3.5s'});
	$('.bounceDelay67Duration12').attr({'data-wow-duration':'1.2s','data-wow-delay':'6.7s'});


	// Back to Top Button
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 1200) {
			$(".pa-back-to-top-wrap").addClass("pa-backtotop-visible");
		} else {
			$(".pa-back-to-top-wrap").removeClass("pa-backtotop-visible");
		}
	});


	// BLOG - Feed Styler UI (changes feed layout)
	$('span.pa-feed-styler').on('click', function(e) {
		event.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
		var ovo = $(this);
		if ( $('.pa-blog-featured').length) {
			$( '.pa-blog-featured' ).addClass( 'temp-hidden' );
			setTimeout(function(){ // 500
				$('.pa-articles-wrapper').css('transform', 'translateX(100%)');
				$("section[class*='pa-blog-style-v']").removeClass (function (index, css) {
					return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
				});
				setTimeout(function(){
					if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v1-magazine');
					}
					if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v2-stretched');
					}
					if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v3-classic');
					}
					$('.pa-articles-wrapper').css('transition', 'all 0s linear 0s');
					$('.pa-articles-wrapper').css('opacity', '0');
					$('.pa-articles-wrapper').css('transform', 'translateX(-100%)');
					$('.pa-articles-wrapper').css('opacity', '1');

					setTimeout(function(){
						$('.pa-articles-wrapper').css('transition', 'all 0.3s ease 0s');
						$('.pa-articles-wrapper').css('transform', 'translateX(0)');
					}, 15);
				}, 300);
				setTimeout(function(){
					$( '.pa-blog-featured' ).removeClass( 'temp-hidden' );
				}, 850);
			}, 500);
		} else {
			$(this).siblings().removeClass('active');
			$(this).toggleClass('active');
			$('.pa-articles-wrapper').css('transform', 'translateX(100%)');
			$("section[class*='pa-blog-style-v']").removeClass (function (index, css) {
			    return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
			});
			setTimeout(function(){
				if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v1-magazine');
				}
				if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v2-stretched');
				}
				if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v3-classic');
				}
				$('.pa-articles-wrapper').css('transition', 'all 0s linear 0s');
				$('.pa-articles-wrapper').css('opacity', '0');
				$('.pa-articles-wrapper').css('transform', 'translateX(-100%)');
				$('.pa-articles-wrapper').css('opacity', '1');

				setTimeout(function(){
					$('.pa-articles-wrapper').css('transition', 'all 0.3s ease 0s');
					$('.pa-articles-wrapper').css('transform', 'translateX(0)');
				}, 15);
			}, 300);	
		}
	});


	// Dark Mode Switch
	$('span.lm-button').on('click', function(e) {
		event.preventDefault();
		$('body').toggleClass('pa-dark-mode');
		$('.dark-sensitive').toggleClass('pa-dark-mode');
	});

});