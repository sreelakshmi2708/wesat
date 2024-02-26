$(function(){
    if($('.gallery-wrapper').length){
        var galleryThumbs = new Swiper('.gallery-wrapper .content .gallery.thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.thumb .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.thumb .swiper-prev-button',
            },
            observer: true,
            observeParents: true,
            breakpoints: {
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                767: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                991: {
                    slidesPerView: 7,
                    spaceBetween: 10
                }
            },
			  on: {
				  init: function() { 
				  	let containerThumbWidth = $('.gallery-wrapper .content .gallery.thumb').outerWidth();
	
	let totalThumbWidth = 0;
	
	$('.gallery.thumb .swiper-container .swiper-wrapper .swiper-slide').each(function(){
		let thumbWidth = $(this).outerWidth();
		totalThumbWidth += thumbWidth
	});
	
	
	
	if(totalThumbWidth < containerThumbWidth){
		$('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').addClass('hide');
	}else{
		$('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').removeClass('hide');
	}
			   }
			  }
        });

        var galleryFull = new Swiper('.gallery-wrapper .content .gallery.full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            },
            keyboard: {
                enabled: true,
            },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.full .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.full .swiper-prev-button',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionStart: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide .overlay').removeClass('show');
                },
                slideChangeTransitionEnd: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide-active .overlay').addClass('show');
                }
            }
        });
    }
});


$(window).on("load", function() {
    setTimeout(function(){
        $('.loader').fadeOut();
    }, 1000);
});