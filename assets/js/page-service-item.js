$(document).ready(function () {

	// Custom JavaScript for all "service-item" pages

	// Initiate typed.js text effect (done custom for each typed text effect)
	$(".animated-text-effect").typed({ 
		strings: ["Theme Design^"], // example for multiple headings strings: ["Awesome Ineractive Effect^", "Click on the live effect!^", "Coolest Modern HTML Theme^"], 
		contentType: "text", 
		typeSpeed: 30, 
		loop: false, 
		backDelay: 1200, 
		showCursor: true, 
		startDelay: 3200, // PRELOADER -- comment-out this line if you stop using page preloader
		cursorChar: "|" 
	});

});