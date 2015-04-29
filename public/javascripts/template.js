         $(document).ready(function() {
         
         	$().UItoTop({ easingType: 'easeOutQuart' });
         	
         });

                  $(function () {
         	
         	var filterList = {
         	
         		init: function () {
         		
         			// MixItUp plugin
         		// http://mixitup.io
         		$('#portfoliolist').mixitup({
         			targetSelector: '.portfolio',
         			filterSelector: '.filter',
         			effects: ['fade'],
         			easing: 'snap',
         			// call the hover effect
         			onMixEnd: filterList.hoverEffect()
         		});				
         	
         	},
         	
         	hoverEffect: function () {
         	
         		// Simple parallax effect
         		$('#portfoliolist .portfolio').hover(
         			function () {
         				$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
         				$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
         			},
         			function () {
         				$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
         				$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
         			}		
         		);				
         	
         	}
         
         };
         
         // Run the show!
         	filterList.init();
         	
         });	

      $(function () {
           // Slideshow 4
           $("#slider4").responsiveSlides({
             auto: true,
             pager: false,
             nav: true,
             speed: 500,
             namespace: "callbacks",
             before: function () {
               $('.events').append("<li>before event fired.</li>");
             },
             after: function () {
               $('.events').append("<li>after event fired.</li>");
             }
           });
         
         });

         $("span.menu").click(function(){
         	$(" ul.navig").slideToggle("slow" , function(){
         	});
         });

                  jQuery(document).ready(function($) {
         	$(".scroll").click(function(event){		
         		event.preventDefault();
         		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
         	});
         });