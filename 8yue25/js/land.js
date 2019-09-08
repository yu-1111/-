$.extend($.validator,{
  		messages:{
  		required: "账号不能为空.",
		remote: "Please fix this field.",
		email: "请输入正确邮箱.",
		url: "请输入正确地址.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "请输入有效账号.",
		digits: "请只输入数字.",
		equalTo: "请再次输入相同的值.",
		maxlength: $.validator.format( "请输入4个验证码." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
  		}
  	});
  	
  	$(".validateform").validate({
  		//验证规则
  		rules:{
  			username:{
  				required: true,
  				number:true,
  				
  			},
  			number:{
  				required: true,
  				digits: true,
  				number:true,
  				maxlength:[4,4]
  			},
  			password:{
  				required: true
  			},
  			repassword:{
  				equalTo:$('[name=password]')
  			}
  		
  		},
  		messages:{
  			//定义错误信息
  			userName:{
  				userName:'账号不能为空.如手机/邮箱/用户名。'
  			}
  		}
  	})
  
  
/*验证码*/
var cookia = $.cookie('cookia')
console.log(cookia)
if(cookia){
	countDown(cookia)
}

$(".get-code").click(function(){
	
	var _this = this;
	
	if($(this).hasClass('disabled'))
		return;
		countDown(3)
	
})


function countDown(count){
	
	$(".get-code").addClass('disabled')
	$(".get-code").html(count + 's重新获取')
  	var timer = setInterval(function(){
		count--
		
		$(".get-code").html(count+'s重新获取')
		
		$.cookie('cookia',count) 
		console.log($.cookie('cookia'))
		if(count <=-1){
			clearInterval(timer)
			$(".get-code").removeClass('disabled').html('重新获取')
			$.removeCookie('cookia')
		}
	},1000)
}
