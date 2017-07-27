$(function(){
	//轮播广告
	$('#bootstrap-touch-slider').bsTouchSlider();
	//菜单
	var menu = $('.rm-nav').rMenu({minWidth: '960px'});
	var nav_top=$(window).scrollTop();
	top_action();
	function top_action(){
		if(nav_top>106){
			$("#mynavbar").addClass('site-nav-fixed-top');
			$(".brand").removeClass('off');
			$(".brand").addClass('animated fadeInDown');
		}
		else{
			$("#mynavbar").removeClass('site-nav-fixed-top'); 
			$(".brand").removeClass('animated fadeInDown');
			$(".brand").addClass('off');
		}
	};
	$(window).scroll(function(){
		nav_top=$(window).scrollTop();
		top_action();
	});
})
