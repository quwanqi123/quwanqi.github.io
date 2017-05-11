define(['jquery','swiper'],function($,swiper){

	function init(){
				$('.swiper-container').swiper({
				    loop: true,
				    autoplay:2000,
				    speed:800,
				    effect : 'fade',
				    pagination: '.swiper-pagination',
				    grabCursor:true,
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev'
				});
			}
			init();
			function init2(){
				var dabox = $('.banner1 .ban-b .dabox');
				var boxR = dabox.find('.box2-1');
				var boxL = dabox.find('.box2-2');
				var imgs = dabox.find('.box1 .box1-1 img')
				var timer;
				var index = 0;
				boxR.click(function(){
					index++;
					imgSwitch();
				});
				boxL.click(function(){
					index--;
					imgSwitch();
					
				});
				function autoPlay(){
					timer = setInterval(function(){
						index++;
						imgSwitch();
					},3000);
					
				}
				autoPlay();
				function imgSwitch(){
					if(index >= imgs.length-2){
						(dabox.find('.box1')).css({
							marginLeft : 0
						});
						index = 1;
					}
					if(index <= -1){
						(dabox.find('.box1')).css({
							marginLeft : -253*(imgs.length-3)
						})
						index = imgs.length - 4;
					}
					(dabox.find('.box1')).animate({
						marginLeft: -253*index
					});
				}
		    }	
			init2();
});