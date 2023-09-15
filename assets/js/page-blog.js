$(document).ready(function () {

	// Custom JavaScript for the Blog Page

	// Initiate typed.js text effect (done custom for each typed text effect)
	$(".animated-text-effect").typed({ 
		strings: ["Particle Blog^", "Like to build stuff?^", "Here's a Blog Masterplan^"], 
		contentType: "text", 
		typeSpeed: 30, 
		loop: true, 
		backDelay: 1200, 
		showCursor: true, 
		startDelay: 3200, // PRELOADER -- comment-out this line if you stop using page preloader
		cursorChar: "|" 
	});

});