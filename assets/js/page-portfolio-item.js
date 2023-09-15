$(document).ready(function () {

	// Custom JavaScript for all "portfolio-item" pages

	// Initiate and customize particles.js effect
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 123,
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
				"value": .5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": .1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": .1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "FFFFFF",
				"opacity": .5,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 4,
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
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 231,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 231,
					"size": 12,
					"duration": 1.542946703372556,
					"opacity": .9,
					"speed": 3
				},
				"repulse": {
					"distance": 231,
					"duration": .4
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
		strings: ["Coolest Portfolio Item^"], // example for multiple headings strings: ["Awesome Ineractive Effect^", "Click on the live effect!^", "Coolest Modern HTML Theme^"], 
		contentType: "text", 
		typeSpeed: 30, 
		loop: false, 
		backDelay: 1200, 
		showCursor: true, 
		startDelay: 3200, // PRELOADER -- comment-out this line if you stop using page preloader
		cursorChar: "|" 
	});

});