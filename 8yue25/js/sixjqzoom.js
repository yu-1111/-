(function($){
	$.fn.jqzoom = function(options){
		var _this = this;
		var smallImg = $(_this).find('.small-img')
		
		var smallWidth = smallImg.width()
		var smallHeight = smallImg.height()
		
		//存放


		
		$(_this).mouseenter(function(){
			
			//放到放大镜
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
		
		
		 $(_this).mousemove(function(e){
		 	
		 	
		 	//鼠标距离页面的位置
		 	var pagex = e.pageX;
	    	var pagey = e.pageY;
	    	
	    	//当前图片距离页面的位置
	    	var offsetX = $(_this).offset().left
	    	var offsetY = $(_this).offset().top
	    	
	    	
	    	//计算弹出的left top
	    	var popx = pagex - offsetX - popwidth/2
	    	var popy = pagey - offsetY - popheight/2
	    	//popy小余0则等于0，否则等于它自己
	    	
//	    	格式： 表达式1?表达式2:表达式3
//           说明：如果表达式1为true ，则整个表达式的结果就是表达式2的值，如果表达式false，则整个表达式的结果就是表达式3的值.
	    	popy = popy < 0 ? 0 : popy
	    	popx = popx < 0 ? 0 : popx
	    	
	    	//popx 大余0则等于大图高度-小图高度，否则等于popx
	    	popx = popx > (smallWidth - popwidth) ? (smallWidth - popwidth):popx
	    	popy = popy > (smallHeight - popheight) ? (smallHeight - popheight):popy
	    	//区域  位置不超过图片限制
	    	$(".zoom-pop").css({
	    		left:popx,
	    		top:popy

	    	})
	    	//同步图片显示
	    	
	    	$(_this).find('.zoom-big img').css({
	    		left:-popx*bigWidth/smallWidth,
	    		top:-popy*bigHeight/smallHeight
	    	})
		 	
		 })
	}	
})(jQuery)
