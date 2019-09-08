(function($){
	$.fn.jqzoom = function(options){

		var _this = this;
		//小图
		var smallImg = $(_this).find('.small-img')
		
		var smallWidth = smallImg.width()
		var smallHeight = smallImg.height()
		
		//存放
		var popwidth = 0,popheight = 0
		var bigWidth = 0, bigHeight = 0
		
		$(_this).mouseenter(function(){
			
			//图片
			var smallSrc = smallImg.attr('src')
			var bigHtml = `<div style="width:${options.offwidth}px; height:${options.offheight}px;" class="zoom-big">
								<img src="${smallSrc}"/>
							</div>`	
							
			$(_this).append('<div class="zoom-pop"></div>')
			$(_this).append(bigHtml)
			
			var bigImg = $(_this).find('.zoom-big img')
			bigWidth = bigImg.width()
			bigHeight = bigImg.height()
			
			var popx = smallWidth/bigWidth*options.offwidth
			var popy = smallHeight/bigHeight*options.offheight
			
			popwidth = popx
			popheight = popy
			
			$(_this).find('.zoom-pop').css({
				
				width:popx,
				height:popy
			})
		})
	
	
	
	 	$(_this).mouseleave(function(){
	    	$(_this).find('.zoom-pop').remove()
	    	$(_this).find('.zoom-big').remove()
	    })
	
	    //鼠标移动时小图移动位置
	    $(_this).mousemove(function(e){
	    	
	    	
	    	
	    	var pagex = e.pageX;
	    	var pagey = e.pageY;
	    	
	    	//当前图片距离页面的位置
	    	var offsetx = $(_this).offset().left
	    	var offsety = $(_this).offset().top
	    	
	    	//计算弹出的left top
	    	var popx = pagex - popwidth/2
	    	var popy = pagey - popheight/2
	    	
	    	popx = popx < 0 ? 0 : popx
	    	popy = popy < 0 ? 0 : popy
	    	
	    	popx = popx > (smallWidth - popwidth) ? (smallWidth - popwidth):popx
	    	popy = popy > (smallHeight - popheight) ? (smallHeight - popheight):popy
	    	
	    	
	    	$(".zoom-pop").css({
	    		left:popx,
	    		top:popy
	    	})
	    	
	    	
	    	$(_this).find('.zoom-big img').css({
	    		left:-popx*bigWidth/smallWidth,
	    		top:-popy*bigHeight/smallHeight
	    	})
	    	
	    })

	}
})(jQuery)
