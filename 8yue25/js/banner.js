banner()
function banner(){
		var requestUrl='http://192.168.97.238:3001/';
//定义网路请求协议
var request=new XMLHttpRequest();
request.open("get",requestUrl + 'getBanner',true)
//发送
request.send(null);

//请求监听
request.onreadystatechange=function(){
	
	if (request.readyState == 4) {
		
		var result=JSON.parse(request.responseText)
		
		//后台返回一个字段
		if (result.success == true) {
			var lists=result.list
		
			var slide= document.querySelector('.cursoal-slide')
			console.log(slide)
				var html=''
			for(var i=0; i<lists.length;i++){
				
				html +=	`<img src="${requestUrl + lists[i].img}" />`
				
			}
			slide.innerHTML=html
		}
	}
}
}



