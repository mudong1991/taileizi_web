$(function(){
	//-------------------------首页---------------------------------
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
	//公司视频
	$(".video-item .video-item-content").on('mouseover', function(){
		var show_img_src = $(this).children('img').attr("src");
		$(".video-content-bg").attr('src', show_img_src);
	});
	$('#company_intro').on('click', function(){
		$("#tailei-video").attr("src", "http://static.home.baidu.com/homebd/1495104075.mp4");
		$('.video-mask').show();
	})
	$("#close-video-mask").on('click', function(){
		$('.video-mask').hide();
		$("#tailei-video").attr("src", "");
	})
	
	
	
	//--------------------------------关于我们/发展历程----------------
	//	时间轴
	$('.cntl').cntl({
        revealbefore: 300,
        anim_class: 'cntl-animate',
        onreveal: function(e){
            console.log(e);
        }
	});

})
