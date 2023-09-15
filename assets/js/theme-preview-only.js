/**
 * Dynamic generation of theme colors
 */

$('body').append(' ' +
'<!-- CSS/JS Change Colors Menu / Theme Preview Only -->' +
	'<div class="styler-trigger-cover"></div>' +
	'<div class="color-styler-wrapper">' +
		'<div class="color-styler">' +
			'<div class="gear styler-trigger">' +
				'<i class="fa fa-fw fa-cog fa-spin custom-spin"></i>' +
			'</div>' +
			'<div class="styler-menu-scroll-wrapper">' +
				'<div class="styler-menu-scroll-scroller">' +
					'<div class="styler-menu">' +
						'<!-- <header>' +
							'<h5 class="styler-title">Choose Your Colors</h5>' +
						'</header> -->' +
						'<div class="styler-header" style="background: #12233a; padding: 20px;">' +
							'<h6 style="color: #ffffff; font-size: 1.2rem; text-align: center; margin-bottom: 15px;">Want <strong>Particle WordPress</strong>?</h6>' +
							'<a href="https://www.previews.skilltechwebdesign.com/particle/" target="_blank">' +
								'<img src="assets/images/theme-preivew-small.jpg" alt="">' +
							'</a>' +
							'<p style="color: #ffffff; font-size: 15px; text-align: center; margin-top: 20px;">Get it directly from our shop at 40% OFF. Use coupon code <strong>PARTICLE40OFF</strong></p>' +
							'<a class="pa-button-primary pa-hvr-sweep-to-right" style="padding-left: 10px; padding-right: 10px;" href="https://www.previews.skilltechwebdesign.com/particle/" target="_blank"><i class="fa fa-external-link get-pa-wp"></i>GET PARTICLE WORDPRESS</a>' +
							'<p style="color: #dedede; font-size: 14px; text-align: center; margin-top: 10px; margin-bottom: 10px;">on skilltechwebdesign.com</p>' +
						'</div>' +
						'<main>' +
							'<div class="light-mode-panel">' +
								'<div class="lm-header">' +
									'<h6 style="color: #dedede; font-size: 1.2rem">Dark Mode Switch</h6>' +
								'</div>' +
								'<div class="lm-switch-container">' +
									'<div class="lm-switch">' +
										'<div class="lm-switch-back-light"></div>' +
										'<div class="lm-switch-back-dark"></div>' +
										'<span class="lm-button go-light"></span>' +
										'<span class="lm-button go-dark"></span>' +
										'<span class="lm-indicator light-on"></span>' +
										'<span class="lm-indicator dark-on"></span>' +
									'</div>' +
								'</div>' +
							'</div>' +
							'<h6 style="color: #dedede; font-size: 1.2rem">Choose Your Colors</h6>' +
							'<ul class="color-inputs">' +
								'<li>' +
									'<label>Primary Theme Color</label>' +
									'<input id="theme-color-master" value="#7100B8" name="theme-color-master"/>' +
								'</li>' +
								'<li>' +
									'<label>Primary Theme Color / Shade B</label>' +
									'<input id="theme-color-master-b" value="#9300F5" name="theme-color-master-b"/>' +
								'</li>' +
								'<li>' +
									'<label>Primary Theme Color / Shade C</label>' +
									'<input id="theme-color-master-c" value="#B44AFF" name="theme-color-master-c"/>' +
								'</li>' +
								'<li>' +
									'<label>Primary Theme Color / Shade D</label>' +
									'<input id="theme-color-master-d" value="#d12bff" name="theme-color-master-d"/>' +
								'</li>' +
								'<li>' +
									'<label>Secondary Theme Color</label>' +
									'<input id="theme-color-secondary" value="#00f2ff" name="theme-color-secondary"/>' +
								'</li>' +
								'<li>' +
									'<label>Secondary Theme Color / Shade B</label>' +
									'<input id="theme-color-secondary-b" value="#00bbff" name="theme-color-secondary-b"/>' +
								'</li>' +
							'</ul>' +
						'</main>' +
						'<div class="styler-footer">' +
							'<!-- Button trigger modal -->' +
							'<a id="getCSSLauncher" href="#" class="pa-button-plain pa-hvr-sweep-to-right" data-toggle="modal" data-target="#codeModal">GET CSS</a>' +
							'<a href="https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech" class="pa-button-primary pa-hvr-sweep-to-right" target="_blank">BUY NOW</a>' +
						'</div>' +
					'</div><!-- /.styler-menu -->' +
				'</div><!-- /.styler-menu-scroll-scroller -->' +
			'</div><!-- /.styler-menu-scroll-wrapper -->' +
		'</div><!-- /.color-styler -->' +
	'</div><!-- /.color-styler-wrapper -->' +
'' +
	'<!-- Modal / Theme Preview Only -->' +
	'<div class="modal fade" id="codeModal" tabindex="-1" role="dialog" aria-labelledby="codeModalLabel" aria-hidden="true">' +
		'<div class="modal-dialog" role="document" style="width: 960px; max-width: 90%;">' +
			'<div class="modal-content">' +
			'<div class="modal-header" style="background-color: #24344a; color: white; border-bottom: 1px solid #41505f;">' +
				'<div class="modal-header-heading">' +
					'<h5 class="modal-title" id="codeModalLabel">Copy Your New CSS Color Styles</h5>' +
				'</div>' +
				'<div class="modal-header-menu">' +
					'<button class="copyToClip pa-get-code-buttons pa-hvr-sweep-to-right" data-clipboard-target="#stylesForDwnLoad" title="Copy The Code">' +
						'<i class="fa fa-clone"></i><span class="ctClip">Copy The Code</span>' +
					'</button>' +
					'<div class="copyDone unappeared"><p>Copied to Clipboard!<br>You can now paste over the code in<br><strong>particle-colors.css<strong></p></div>' +
					'<!-- <button id="downloadLinkTop" class="pa-get-code-buttons pa-hvr-sweep-to-right" data-clipboard-target="#stylesForDwnLoad" title="Download as CSS file">' +
						'<i class="fa fa-download"></i>' +
					'</button> -->' +
					'<button data-dismiss="modal" class="pa-get-code-buttons pa-hvr-sweep-to-right" data-clipboard-target="#stylesForDwnLoad" title="Close">' +
						'<i class="fa fa-times"></i>' +
					'</button>' +
				'</div>' +
			'</div>' +
			'<div class="modal-body" style="background-color: #1f2937;">' +
				'<div class="color-styles-copy">' +
					'<pre style="color: #ebebeb;">' +
						'<code id="stylesForDwnLoad"></code>' +
					'</pre>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>');

function isItMobileDevice() {
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	return isMobile;
}
var $isMobile = isItMobileDevice();
$( document ).ready(function() {      
	if ($isMobile == true) {
		// this is for mobile
		$('.color-styler').addClass('mobile-true');
	} else {
	}
});

$(document).ready(function(){
	var primClrA = '#7100B8';
	var primClrARGBA = 'rgba(113,0,184,1)';
	var primClrARGBNumbersOnly = '113,0,184';

	var primClrB = '#9300F5';
	var primClrBRGBA = 'rgba(147,0,245,1)';
	var primClrBRGBNumbersOnly = '147,0,245';

	var primClrC = '#B44AFF';
	var primClrCRGBA = 'rgba(180,74,255,1)';
	var primClrCRGBNumbersOnly = '180,74,255';

	var primClrD = '#d12bff';
	var primClrDRGBA = 'rgba(209,43,255,1)';
	var primClrDRGBNumbersOnly = '209,43,255';

	var secondClrA = '#00f2ff';
	var secondClrARGBA = 'rgba(0,242,255,1)';
	var secondClrARGBNumbersOnly = '0,242,255';

	var secondClrB = '#00bbff';
	var secondClrBRGBA = 'rgba(0,187,255,1)';
	var secondClrBRGBNumbersOnly = '0,187,255';

	function headlinesColorFix() {

		var bodyClass = $('body').attr('class');

		if (bodyClass.indexOf("pa-dark-mode") >= 0) {

			// NORMAL BLOG HEADINGS
			$( '.pa-h3-blog-feed-title-font a' ).css( 'color', '#e5e6e7' );
			$( '.pa-h3-blog-feed-title-font a' ).hover( function () {
				$( this ).css( 'color', primClrB );
			});
			$( '.pa-h3-blog-feed-title-font a').mouseleave( function() {    
				$( this ).css( 'color', '#e5e6e7' );
			});

			// BLOG TOP METAS (aka Skilltech above headings)
			$( '.pa-blog-feed-top-metas > p > a' ).css( 'color', '#dee4e9' );
			$( '.pa-blog-feed-top-metas > p > a' ).hover( function () {
				$( this ).css( 'color', primClrB );
			});
			$( '.pa-blog-feed-top-metas > p > a' ).mouseleave( function() {    
				$( this ).css( 'color', '#dee4e9' );
			});

			// BLOG TAGS
			$( '.pa-blog-tags > p > a' ).css( 'color', '#969fa9' );
			$('.pa-blog-tags > p > a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-blog-tags > p > a').mouseleave( function() {    
				$(this).css('color', '#969fa9');
			});

			// BLOG CATS
			$( '.pa-blog-cats > p > a' ).css( 'color', '#969fa9' );
			$('.pa-blog-cats > p > a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-blog-cats > p > a').mouseleave( function() {    
				$(this).css('color', '#969fa9');
			});

			// CAT ITEM
			$( '.cat-item a' ).css( 'color', '#cfd9df' );
			$('.cat-item a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.cat-item a').mouseleave( function() {    
				$(this).css('color', '#cfd9df');
			});

			// TAG CLOUD LINK
			$( '.tag-cloud-link' ).css( 'color', '#cfd9df' );
			$('.tag-cloud-link').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.tag-cloud-link').mouseleave( function() {    
				$(this).css('color', '#cfd9df');
			});


		} else {

			// NORMAL BLOG HEADINGS
			$( '.pa-h3-blog-feed-title-font a' ).css( 'color', '#3B3B3B' );
			$('.pa-h3-blog-feed-title-font a').hover( function () {
				$( this ).css( 'color', primClrB );
			});
			$('.pa-h3-blog-feed-title-font a').mouseleave( function() {    
				$( this ).css( 'color', '#3B3B3B' );
			});

			// BLOG TOP METAS (aka Skilltech above headings)
			$( '.pa-blog-feed-top-metas > p > a' ).css( 'color', '#495663' );
			$( '.pa-blog-feed-top-metas > p > a' ).hover( function () {
				$( this ).css( 'color', primClrB );
			});
			$( '.pa-blog-feed-top-metas > p > a' ).mouseleave( function() {    
				$( this ).css( 'color', '#495663' );
			});

			// BLOG TAGS
			$( '.pa-blog-tags > p > a' ).css( 'color', '#495663' );
			$('.pa-blog-tags > p > a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-blog-tags > p > a').mouseleave( function() {    
				$(this).css('color', '#495663');
			});

			// BLOG CATS
			$( '.pa-blog-cats > p > a' ).css( 'color', '#495663' );
			$('.pa-blog-cats > p > a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-blog-cats > p > a').mouseleave( function() {    
				$(this).css('color', '#495663');
			});	

			// CAT ITEM
			$( '.cat-item a' ).css( 'color', '#657E8A' );
			$('.cat-item a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.cat-item a').mouseleave( function() {    
				$(this).css('color', '#657E8A');
			});

			// TAG CLOUD LINK
			$( '.tag-cloud-link' ).css( 'color', '#657E8A' );
			$('.tag-cloud-link').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.tag-cloud-link').mouseleave( function() {    
				$(this).css('color', '#657E8A');
			});

		}


		// FEATURED HEADLINER (FIRST FEATURED POST) -- REQUIRES BOTH IF/ELSE AND MEDIA QUERIES

		if ( (window.matchMedia("(min-width: 992px)").matches) && (window.matchMedia("(max-width: 1499px)").matches) ) {
			
			// MIN-WIDTH: 992 __ MAX-WIDTH: 1499

			if (bodyClass.indexOf("pa-dark-mode") >= 0) {
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').css('color', '#e5e6e7');
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').hover( function () {
					$(this).css('color', primClrB);
				});
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').mouseleave( function() {    
					$(this).css('color', '#e5e6e7');
				});
			} else {
				$('.pa-featured-headliner header h3 a').css('color', '#3B3B3B');
				$('.pa-featured-headliner header h3 a').hover( function () {
					$(this).css('color', primClrB);
				});
				$('.pa-featured-headliner header h3 a').mouseleave( function() {    
					$(this).css('color', '#3B3B3B');
				});
			}		

		} else if (window.matchMedia("(max-width: 575px)").matches) {

			// MAX-WIDTH: 575

			if (bodyClass.indexOf("pa-dark-mode") >= 0) {
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').css('color', '#e5e6e7');
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').hover( function () {
					$(this).css('color', primClrB);
				});
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').mouseleave( function() {    
					$(this).css('color', '#e5e6e7');
				});
			} else {
				$('.pa-featured-headliner header h3 a').css('color', '#3B3B3B');
				$('.pa-featured-headliner header h3 a').hover( function () {
					$(this).css('color', primClrB);
				});
				$('.pa-featured-headliner header h3 a').mouseleave( function() {    
					$(this).css('color', '#3B3B3B');
				});
			}

		} else {

			if (bodyClass.indexOf("pa-dark-mode") >= 0) {
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').css('color', '#e5e6e7');
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').hover( function () {
					$(this).css('color', '#ffffff');
				});
				$('.pa-featured-headliner .pa-h3-blog-feed-title-font a').mouseleave( function() {    
					$(this).css('color', '#ffffff');
				});
			} else {
				$('.pa-featured-headliner header h3 a').css('color', '#ffffff');
				$('.pa-featured-headliner header h3 a').hover( function () {
					$(this).css('color', '#ffffff');
				});
				$('.pa-featured-headliner header h3 a').mouseleave( function() {    
					$(this).css('color', '#ffffff');
				});
			}	
		}
	} // headlinesColorFix()

	$('#theme-color-master').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrA = color.toHexString();
			primClrARGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrARGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-primary').css('color', primClrA);
			$('.pa-color-primary-rgba').css('color', primClrARGBA);

			$('.pa-form-on-white button[type="submit"]').css('backgroundColor', primClrA).css('borderColor', primClrA);
			$('a.pa-button-primary, .pa-social-icons i, a.moretag').css('backgroundColor', primClrA);

			$('.pa-gradient-back-v1').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="' + primClrA + '")'
			});

			$('.pa-portfolio-thumb-deco-1, .pa-portfolio-thumb-deco-2').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + primClrA + '", endColorstr="' + secondClrA + '")'
			});

		}
	});
	$('#theme-color-master-b').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrB = color.toHexString();
			primClrBRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrBRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-primary-b').css('color', primClrB);
			$('.pa-color-primary-b-rgba').css('color', primClrBRGBA);
			$('.pa-color-primary-b, .pa-p-v2.pa-dark a, .pa-h2-quote strong, .pa-icon-list-icon i, .pa-what-we-do .pa-h1-v2.pa-bright strong, .pa-serv-list-icon i, .pa-contact-info p span i, .pa-project-icons i, .pa-h2-v2-hero-subhead strong, .server_response a, .close_server_response, .simple_tip a').css('color', primClrB);
			$('a').hover( function () {
				$(this).find('.pa-h3-v1.pa-bright').css('color', primClrB);
			});
			$('a').mouseleave( function() {    
				$(this).find('.pa-h3-v1.pa-bright').css('color', '#DCEAF3');
			});
			$('button[type="submit"]').hover( function () {
				$(this).css({'borderColor': primClrB, 'backgroundColor': primClrBRGBA});
			});
			$('button[type="submit"]').mouseleave( function() {    
				$(this).css({'borderColor': '#ffffff', 'backgroundColor': 'rgba(255,255,255,0)'});
			});
			$('.pa-form-on-white button[type="submit"]').hover( function () {
				$(this).css({'borderColor': '#444B54', 'backgroundColor': '#444B54'});
			});
			$('.pa-form-on-white button[type="submit"]').mouseleave( function() {    
				$(this).css({'borderColor': primClrA, 'backgroundColor': primClrARGBA});
			});
			$('input[type="submit"]').hover( function () {
				$(this).css({'borderColor': primClrB, 'backgroundColor': primClrBRGBA});
			});
			$('input[type="submit"]').mouseleave( function() {    
				$(this).css({'borderColor': '#ffffff', 'backgroundColor': 'rgba(255,255,255,0)'});
			});
			$('.pa-social-icons i').hover( function () {
				$(this).css('backgroundColor', primClrBRGBA);
			});
			$('.pa-social-icons i').mouseleave( function() {    
				$(this).css('backgroundColor', primClrARGBA);
			});
			$('.pa-project-icons i').hover( function () {
				$(this).css('backgroundColor', primClrBRGBA);
			});
			$('.pa-project-icons i').mouseleave( function() {    
				$(this).css('backgroundColor', 'rgba(0,0,0,0.8)');
			});
			$('a.post-comments-badge-link').hover( function () {
				$(this).css('color', primClrB);
			});
			$('a.post-comments-badge-link').mouseleave( function() {    
				$(this).css('color', '#ffffff');
			});

			$('.pa-blog-tags').css('borderLeftColor', primClrB);
			$('.pa-blog-cats').css('borderLeftColor', primClrB);
			
			

			

			$('.widget_title').css('borderLeftColor', primClrB);
			$('.pa-custom-recent-thumb-hook').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-custom-recent-thumb-hook').mouseleave( function() {    
				$(this).css('color', '#647D89');
			});
			$('.pa-dark-mode .pa-custom-recent-thumb-hook').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-dark-mode .pa-custom-recent-thumb-hook').mouseleave( function() {    
				$(this).css('color', '#86a7b9');
			});
			$('.button.pa-search-button').focus( function () {
				$(this).css('color', primClrB);
			});
			$('.button.pa-search-button').mouseleave( function() {    
				$(this).css('color', '#8B999E');
			});
			$('input.search-field').css('borderLeftColor', primClrB);

			$('.pa-post-bottom-metas div a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-post-bottom-metas div a').mouseleave( function() {    
				$(this).css('color', '#647D89');
			});

			$('.pa-related-info-wrapper a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-related-info-wrapper a').mouseleave( function() {    
				$(this).css('color', '#3B3B3B');
			});

			$('.pa-rel-meta-right a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-rel-meta-right a').mouseleave( function() {    
				$(this).css('color', '#3B3B3B');
			});

			$('.pa-dark-mode .pa-related-info-wrapper a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-dark-mode .pa-related-info-wrapper a').mouseleave( function() {    
				$(this).css('color', '#e5e6e7');
			});

			$('.pa-dark-mode .pa-rel-meta-right a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-dark-mode .pa-rel-meta-right a').mouseleave( function() {    
				$(this).css('color', '#e5e6e7');
			});

			$('table a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('table a').mouseleave( function() {    
				$(this).css('color', '#647D89');
			});

			$('.pa-dark-mode table a').hover( function () {
				$(this).css('color', primClrB);
			});
			$('.pa-dark-mode table a').mouseleave( function() {    
				$(this).css('color', '#bdc7cc');
			});

			// // $('.pa-dark-mode .pa-featured-headliner .pa-h3-blog-feed-title-font a').hover( function () {
			// // 	$(this).css('color', primClrB);
			// // });
			// // $('.pa-dark-mode .pa-featured-headliner .pa-h3-blog-feed-title-font a').mouseleave( function() {    
			// // 	$(this).css('color', '#e5e6e7');
			// // });

			// $('.pa-dark-mode .pa-featured-headliner .post-image-inner header p a').hover( function () {
			// 	$(this).css('color', primClrB);
			// });
			// $('.pa-dark-mode .pa-featured-headliner .post-image-inner header p a').mouseleave( function() {    
			// 	$(this).css('color', '#e5e6e7');
			// });

			headlinesColorFix();
			
		}
	});
	$('#theme-color-master-c').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrC = color.toHexString();
			primClrCRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrCRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-primary-c, nav a em, .pa-portfolio-thumb-hover-icon ').css('color', primClrC);
			$('.pa-color-primary-c-rgba').css('color', primClrCRGBA);

			$('.pa-p-v2.pa-dark a').hover( function () {
				$(this).css('color', primClrC);
			});
			$('.pa-p-v2.pa-dark a').mouseleave( function() {    
				$(this).css('color', primClrB);
			});
			$('footer a').hover( function () {
				$(this).css('color', primClrC);
			});
			$('footer a').mouseleave( function() {    
				$(this).css('color', '#87A1AD');
			});
		}
	});
	$('#theme-color-master-d').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrD = color.toHexString();
			primClrDRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrDRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-primary-d').css('color', primClrD);
			$('.pa-color-primary-d-rgba').css('color', primClrDRGBA);
			$('.pa-skill-bar').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrB + '", endColorstr="' + primClrD + '")'
			});
		}
	});
	$('#theme-color-secondary').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			secondClrA = color.toHexString();
			secondClrARGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			secondClrARGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-secondary').css('color', secondClrA);
			$('.pa-color-secondary-rgba').css('color', secondClrARGBA);

			$('.pa-p-v2.pa-bright a').css('color', secondClrARGBA);

			$('.pa-gradient-back-v1').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="' + primClrA + '")'
			});

			$('.pa-portfolio-thumb-deco-1, .pa-portfolio-thumb-deco-2').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',0.8) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + primClrA + '", endColorstr="' + secondClrA + '")'
			});
			
			$('a.pa-button-secondary').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="#' + secondClrB + '")',
				'border-color': secondClrA
			});

			$('.pa-gradient-back-v2').css({ 
				'background-image': '-moz-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(to right,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="' + secondClrB + '")',
			});

			$('.pa-portfolio-thumb-heading').hover( function () {
				$(this).css('color', secondClrA);
			});
			$('.pa-portfolio-thumb-heading').mouseleave( function() {    
				$(this).css('color', '#FFFFFF');
			});
		}
	});
	$('#theme-color-secondary-b').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			secondClrB = color.toHexString();
			secondClrBRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			secondClrBRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			$('.pa-color-secondary-b').css('color', secondClrB);
			$('.pa-color-secondary-b-rgba').css('color', secondClrBRGBA);
			$('a.pa-button-secondary').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="#' + secondClrB + '")',
				'border-color': secondClrA
			});
			$('.pa-gradient-back-v2').css({ 
				'background-image': '-moz-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(to right,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrA + '", endColorstr="' + secondClrB + '")',
			});
			$('.pa-skill-bar').css({ 
				'background-image': '-moz-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)', 
				'background-image': '-webkit-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)', 
				'background-image': 'linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="' + secondClrB + '", endColorstr="' + primClrD + '")'
			});
		}
	});
	$('.lm-button').click(function() {
		headlinesColorFix();
	});
	$('.styler-trigger').click(function() {
		$('.color-styler').toggleClass('expanded');
		$('.styler-trigger-cover').toggleClass('expanded');
	});
	$('.styler-trigger-cover').click(function() {
		$('.color-styler').toggleClass('expanded');
		$('.styler-trigger-cover').toggleClass('expanded');
	});

	// On click, update downloadable code
	$(document).on("click",'#getCSSLauncher',function(){
		$('#stylesForDwnLoad').html('<br>' +
	'/*<br>' + 
	' * Particle Theme Accent/Brand Colors<br>' +
	' */<br>' +
	'.pa-color-primary { color: ' + primClrA + '; }<br>' +
	'.pa-color-primary-rgba { color: rgba(' + primClrARGBNumbersOnly + ',1); }<br>' +
	'.pa-color-primary-b { color: ' + primClrB + '; }<br>' +
	'.pa-color-primary-c { color: ' + primClrC + '; }<br>' +
	'.pa-color-primary-d { color: ' + primClrD + '; }<br>' +
	'.pa-color-primary-d-rgba { color: rgba(' + primClrDRGBNumbersOnly + ',1); }<br>' +
	'.pa-color-secondary { color: ' + secondClrA + '; }<br>' +
	'.pa-color-secondary-rgba { color: rgba(' + secondClrARGBNumbersOnly + ',1); }<br>' +
	'.pa-color-secondary-b { color: ' + secondClrB + '; }<br>' +
	'.pa-color-secondary-b-rgba { color: rgba(' + secondClrBRGBNumbersOnly + ',1); }<br>' +
	'nav a em {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrC + ';<br>' +
	'}<br>' +
	'.pa-p-v2.pa-bright a {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + secondClrA + ';<br>' +
	'}<br>' +
	'.pa-p-v2.pa-dark a, <br>' +
	'.pa-h2-v2-hero-subhead strong {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-p-v2.pa-dark a:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrC + ';<br>' +
	'}<br>' +
	'.pa-h2-quote strong {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'a, <br>' +
	'a:hover, <br>' +
	'a:hover .pa-h3-v1.pa-bright {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'button[type="submit"]:hover, <br>' +
	'input[type="submit"]:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrB + ';<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-form-on-white button[type="submit"] {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid ' + primClrA + ';<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrA + ';<br>' +
	'}<br>' +
	'a.pa-button-primary {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrA + ';<br>' +
	'}<br>' +
	'a.pa-button-secondary {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + secondClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + secondClrA + '",endColorstr="' + secondClrB + '",GradientType=1);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid ' + secondClrA + ';<br>' +
	'}<br>' +
	'.pa-gradient-back-v1 {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + secondClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + secondClrARGBNumbersOnly + ',0.8) 0%, rgba(' + primClrARGBNumbersOnly + ',0.8) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + secondClrA + '",endColorstr="' + primClrA + '",GradientType=1);<br>' +
	'}<br>' +
	'.pa-gradient-back-v2 {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + secondClrBRGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%, rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(left,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(to right,  rgba(' + secondClrARGBNumbersOnly + ',1) 0%,rgba(' + secondClrBRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="' + secondClrA + '", endColorstr="' + secondClrB + '",GradientType=1 );<br>' +
	'}<br>' +
	'.pa-portfolio-thumb-deco-1, <br>' +
	'.pa-portfolio-thumb-deco-2 {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.8) 0%, rgba(' + secondClrARGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + secondClrA + '",GradientType=1);<br>' +
	'}<br>' +
	'.pa-portfolio-thumb-heading:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + secondClrA + ';<br>' +
	'}<br>' +
	'.pa-portfolio-thumb-hover-icon {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrC + ';<br>' +
	'}<br>' +
	'.pa-icon-list-icon i {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-what-we-do .pa-h1-v2.pa-bright strong {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-serv-list-icon i {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-skill-bar {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + secondClrBRGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + secondClrBRGBNumbersOnly + ',1) 0%, rgba(' + primClrDRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + secondClrB + '",endColorstr="' + primClrD + '",GradientType=1);<br>' +
	'}<br>' +
	'.pa-contact-info p span i {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-social-icons i {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrA + ';<br>' +
	'}<br>' +
	'.pa-social-icons i:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrB + ';<br>' +
	'}<br>' +
	'footer a:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrC + ';<br>' +
	'}<br>' +
	'.pa-project-icons i {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-project-icons i:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrB + ';<br>' +
	'}<br>' +
	'a.post-comments-badge-link:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-blog-feed-top-metas p a:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-blog-tags,<br> ' +
	'.pa-blog-cats {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-left: 4px solid ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-blog-tags p a:hover, <br>' + 
	'.pa-blog-cats p a:hover, <br>' + 
	'.pa-dark-mode .pa-blog-tags p a:hover, <br>' + 
	'.pa-dark-mode .pa-blog-cats p a:hover, <br>' + 
	'.cat-item a:hover, <br>' + 
	'.tag-cloud-link:hover, <br>' + 
	'.pa-dark-mode .cat-item a:hover, <br>' + 
	'.pa-dark-mode .tag-cloud-link:hover, <br>' + 
	'.pa-post-bottom-metas div a:hover, <br>' +
	'.pa-related-info-wrapper a:hover, <br>' +
	'.pa-rel-meta-right a:hover, <br>' +
	'table a:hover, <br>' +
	'.pa-dark-mode table a:hover, <br>' +
	'.pa-dark-mode .pa-featured-headliner .post-image-inner header p a:hover, <br>' +
	'.pa-dark-mode :not(.pa-featured-headliner) .pa-h3-blog-feed-title-font a:hover  {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-h3-blog-feed-title-font a:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'a.moretag {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-color: ' + primClrA + ';<br>' +
	'}<br>' +
	'.widget_title {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-left: 4px solid ' + primClrB + ';<br>' +
	'}<br>' +
	'.pa-custom-recent-thumb-hook:hover, <br>' +
	'.pa-dark-mode .pa-custom-recent-thumb-hook:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'button.pa-search-button:focus {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'}<br>' +
	'input.search-field {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-left: 4px solid ' + primClrB + ';<br>' +
	'}<br>' +
	'@media all and (min-width: 992px) and (max-width: 1499px) {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;.pa-featured-headliner header h3 a {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;}<br>' +
	'}<br>' +
	'@media all and (max-width: 575px) {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;.pa-featured-headliner header h3 a {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: ' + primClrB + ';<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;}<br>' +
	'}<br>' + 
	'#loader  {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-top-color: ' + primClrB + ';<br>' +
	'}<br>' + 
	'#loader:before  {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-top-color: ' + primClrC + ';<br>' +
	'}<br>' + 
	'#loader:after  {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;border-top-color: ' + primClrD + ';<br>' +
	'}');
	});

	$(window).on('load resize', function() {
		headlinesColorFix();
	});

	// // Download CSS function
	// function downloadInnerText(filename, elId, mimeType) {
	// 	var elHtml = document.getElementById(elId).innerText,
	// 		link = document.createElement("a");
	// 	(mimeType = mimeType || "text/css"), link.setAttribute("download", filename), link.setAttribute("href", "data:" + mimeType + ";charset=utf-8," + encodeURIComponent(elHtml)), link.click();
	// }
	// // Download CSS
	// var filename = "particle-colors.css";
	// $("#downloadLink").click(function () {
	// 	downloadInnerText(filename, "stylesForDwnLoad", "text/css");
	// });
	// $("#downloadLinkTop").click(function () {
	// 	downloadInnerText(filename, "stylesForDwnLoad", "text/css");
	// });

	// Copy text to clipboard
	new ClipboardJS('.copyToClip');

	$(".copyToClip").click(function () {
		$('.unappeared').addClass('appeared');
		$('.appeared').removeClass('unappeared');
		setTimeout(function(){
			$( '.appeared' ).addClass( 'processing-appearance' );
			$( '.processing-appearance' ).removeClass( 'appeared' );
			setTimeout(function(){
				$( '.processing-appearance' ).addClass( 'unappeared' );
				$( '.unappeared' ).removeClass( 'processing-appearance' );
			}, 3000);
		}, 8000);
	});

});