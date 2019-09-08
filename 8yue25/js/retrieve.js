//步骤一跳转至步骤二
$('.retrieve-tell').click(function(){
	$('.step2').css({display: 'block'})
	$(this).closest('.step1').css({display: 'none'})
})
//步骤二跳转至步骤三
$('.step2 .find-btn').click(function(){
	$('.step3').css({display: 'block'})
	$(this).closest('.step2').css({display: 'none'})
	
	setInterval(function(){
	   $('.step1').css({display: 'block'})
	   $('.step2').css({display: 'none'})
	   $('.step3').css({display: 'none'})
    },5000) 
})