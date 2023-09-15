$(document).ready(function(){

	/* Initiate Owl Carousel for Related Posts */
	/* related posts big */
	$('.pa-big-related').owlCarousel({
		// autoWidth must not be "true" so that dotsEach can be used (so you could move items by X number of items at once instead of one by one)
		// autoWidth:true,
		autoplay: true,
		autoplayTimeout: 15000,
		autoplayHoverPause: true,
		responsiveBaseElement:".pa-related-posts",
		navContainer:".owl-nav",
		responsive : {
		    0:{ // from 0 and up
		        items:1,
		        nav:true,
		        dots:false,
		        slideBy: 1
		    },
		    460:{ // from 460 and up
		        items:2,
		        nav:true,
		        margin: 3,
		        dots:false,
		        slideBy: 2
		    },
		    817:{ // from 817 and up
		        items:3,
		        // dotsEach: 3,
		        nav: true,
		        dots: false,
		        margin: 3,
		        slideBy: 3
		    },
		    1080:{ // from 1080 and up
		        items: 4,
		        // dotsEach: 4,
		        nav: true,
		        dots: false,
		        margin: 3,
		        slideBy: 4
		    },
		    1440:{ // from 1440 and up
		        items: 6,
		        // dotsEach: 4,
		        nav: true,
		        dots: false,
		        margin: 3,
		        slideBy: 6
		    },
		    1880:{ // from 1880 and up
		        items: 8,
		        // dotsEach: 4,
		        nav: true,
		        dots: false,
		        margin: 3,
		        slideBy: 8
		    }
		}
	});

});

		