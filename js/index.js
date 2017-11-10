$(function(){
	$(".picsdown").mouseover(function(){
		$(this).children("img:nth-of-type(1)").stop().slideUp(500)
	})
	
	$(".picsdown").mouseout(function(){
		$(this).children("img:nth-of-type(1)").stop().slideDown(500)
	})
	
	//.content>.top ul
	
	$(document).scroll(function(){
		var screenH = document.documentElement.clientHeight || document.body.clientHeight;
		console.log(screenH/2+100);
		console.log("滑轮高度："+$("body").scrollTop());
		/*if($("body").scrollTop()>(screenH/2+110)){
		
			console.log(1)
		}*/
		
		if($("body").scrollTop()>screenH/2+80){
			$(".content>.top ul li:nth-of-type(1)").addClass('limove');
			$(".content>.top ol li:nth-of-type(1)>a").addClass('amove');
			$(".content>.top ol li:nth-of-type(1)>p").addClass('pmove');
		}
		if($("body").scrollTop()>screenH/2+250){
			$(".content>.top ul li:nth-of-type(2)").addClass('limove');
			$(".content>.top ol li:nth-of-type(2)>a").addClass('amove');
			$(".content>.top ol li:nth-of-type(2)>p").addClass('pmove');
		}
		if($("body").scrollTop()>screenH/2+400){
			$(".content>.top ul li:nth-of-type(3)").addClass('limove');
			$(".content>.top ol li:nth-of-type(3)>a").addClass('amove');
			$(".content>.top ol li:nth-of-type(3)>p").addClass('pmove');
		}
		
		if($("body").scrollTop()>screenH/2+500){
			$(".content>.middle>.left").addClass('quan');
			$(".content>.middle>h4").addClass('h4move');
		}
		if(($("body").scrollTop()>screenH/2+1000)||($("body").scrollTop()<screenH/2+80)){
			
			$(".content>.top ul li:nth-of-type(1)").removeClass('limove');
			$(".content>.top ol li:nth-of-type(1)>a").removeClass('amove');
			$(".content>.top ol li:nth-of-type(1)>p").removeClass('pmove');
			$(".content>.top ul li:nth-of-type(2)").removeClass('limove');
			$(".content>.top ol li:nth-of-type(2)>a").removeClass('amove');
			$(".content>.top ol li:nth-of-type(2)>p").removeClass('pmove');
			$(".content>.top ul li:nth-of-type(3)").removeClass('limove');
			$(".content>.top ol li:nth-of-type(3)>a").removeClass('amove');
			$(".content>.top ol li:nth-of-type(3)>p").removeClass('pmove');
		}
		if(($("body").scrollTop()>screenH/2+2500)||($("body").scrollTop()<screenH/2+500)){
			$(".content>.middle>.left").removeClass('quan');
			$(".content>.middle>h4").removeClass('h4move');
		}
		if($("body").scrollTop()>screenH/2+1300){
			$(".content>.bottom>.middle>.imgs").addClass('updown');
			$(".content>.bottom>.left>span").addClass('updown');
			$(".content>.bottom>.left>.font").addClass('fontmove');
			$(".content>.bottom>.middle>p").addClass("pfontmove");
		}else{
			$(".content>.bottom>.middle>.imgs").removeClass('updown');
			$(".content>.bottom>.left>span").removeClass('updown');
			$(".content>.bottom>.left>.font").removeClass('fontmove');
			$(".content>.bottom>.middle>p").removeClass("pfontmove");
			
		}
		
	})
})
