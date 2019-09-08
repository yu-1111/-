var requestUrl = 'http://192.168.97.238:3001/';
	//请求banner数据
	for (var i=0; i<3; i++) {
		
		tabone(i)
	}
	function tabone(ret){
		ajaxPackage({
		url: requestUrl + 'lists?id='+ ret ,
		async: true,
		a:1,
		dataType: 'json',
		success:function(res){
			if(res.success == true) {
				var lists = res.list

				var slide = document.querySelector('.tablis'+(ret+1))
				var html = ''
				for(var i = 0; i < lists.length; i++) {

					html += `
					<li>
	    				<img src="${requestUrl + lists[i].img}"/>
	    				<div class="text-ellipsis marig-10-tb">${lists[i].title}</div>
	    				<span class="text-main font-14">￥${lists[i].price}.00</span>
    				</li>`
				}
				slide.innerHTML = html
			}
		}
	})
	}
	
	