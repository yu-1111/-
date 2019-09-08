
//console.log(vip,smrz,jf)
$("ul>li>a").click(function(){
		var index = $(this).parent().index()
//		$(this).parents('.vip-left-text').siblings().find('a').removeClass('vip-on')
		$('.lisone').children().eq(index).children().eq($(this).index()).addClass('vip-on')
		$('.lisone').children().eq(index).children().eq($(this).index()).siblings().removeClass('vip-on')
		$('.lisone').children().eq(index).siblings().children().removeClass('vip-on')
		$('.tab-title').not(this).removeClass('vip-on')
		$('.vip-right-toptop').removeClass('on')
		/*
		var index = $(this).index()
		console.log(index)
			
		var parent = $(this).parents('.lisone')
		
		var ele = $('.tab-lists').not(this)
		console.log(ele)
		ele.eq(index).addClass('vip-on')
//		ele.eq(index).$('.tab-lists').not(this).removeClass('vio-on')*/
	})