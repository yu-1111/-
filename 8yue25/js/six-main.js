var index=0
var im = $('.bottom-img')
im.click(function(){
	index = $(this).index()
	console.log(this)
	$(this).addClass('on')
	$(this).siblings().removeClass('on')
})

$('.left-bottom-btn').click(function(){
	if($(this).index() == 0){
		
		console.log($(this).index())
		
		if(index>0){
		    index--
			 $('.bottom-img').eq(index).addClass('on')
			 $('.bottom-img').eq(index).siblings().removeClass('on')
		}
	}else if(index<4){
			index++
			 $('.bottom-img').eq(index).addClass('on')
			 $('.bottom-img').eq(index).siblings().removeClass('on')
	}

})