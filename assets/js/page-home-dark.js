$(document).ready(function () {

	// Custom JavaScript for the dark homepage

	// Initiate counters effect
	$(".pa-counterskills").counterUp({ delay: 20, time: 2200 });

	// Initiate and customize particles.js effect
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 90,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "FFFFFF"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#FFFFFF"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.15,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "FFFFFF",
				"opacity": 0.1,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "bubble"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 350,
					"line_linked": {
						"opacity": 0.65
					}
				},
				"bubble": {
					"distance": 350,
					"size": 12,
					"duration": 1.542946703372556,
					"opacity": 0.9,
					"speed": 3
				},
				"repulse": {
					"distance": 350,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	// Initiate typed.js text effect (done custom for each typed text effect)
	$(".animated-text-effect").typed({ 
		// Enter your texts here, these texts are applied to dark homepages
		strings: ["Awesome Ineractive Effect^", "Click on the live effect!^", "Coolest Modern HTML Theme^"], 
		contentType: "text", 
		typeSpeed: 30, 
		loop: true, 
		backDelay: 1200, 
		showCursor: true, 
		startDelay: 3200, // PRELOADER -- comment-out this line if you stop using page preloader
		cursorChar: "|" 
	});

});