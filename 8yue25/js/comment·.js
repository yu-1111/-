	var send=$(".send")
	send.click(function(){
	 var value = $("[name=content]").val()
	 console.log(value)
	   if(value){
		   	if (confirm('是否提交评论')) {
				var html=`<div class="six-assess-cont">
	           		<div class="six-assess-cont-left text-center fl">
	           			<img src="img/333.jpg"/>
	           			<span>h****o</span>
	           		</div>
	           		<div class="six-assess-cont-right">
	           			<div class="cont-right-top">
	           				<a href="">好评</a>
	           				<span>|</span>
		           			<span>2016-11-29</span>
		           			<span class="paddin-10-l">16:10:45</span>
		           			<p class="marig-10-tb overflow">${value}
		           			</p>
		           			
	           			</div>
		           			<div class="cont-right-bottom">
		           				<p class="text-main paddin-5-tb">客服回复：宜，外包装很好，有气垫包裹，奶粉完好无损。一直相信洋货码头，所以只要进口</p>
		           		    </div>
                    </div>
				</div>`
				$(html).prependTo($(".six-assess-content"))
				$("[name=content]").val('')
		}
	   }
		
		
	})