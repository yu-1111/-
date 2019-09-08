(function($){
	$.extend({
		//封装警告方法
		//options 参数名 Object
		//content
		alert: function(options){
			$(".alert").remove();
			clearTimeout(this.time);
			let alertClass = '';
			switch(options.type) {
				case 'success': 
					alertClass = 'alert-success';
					break;
				case 'error':
					alertClass = 'alert-danger';
					break;
				default :
					alertClass = 'alert-info';
					break;
			}
			let html = `<div class="alert ${alertClass}">
				<button class="close" data-dismiss="alert">
					<span>x</span>
				</button>
				${options.content}	
			</div>`;
			$("body").append(html);
			
			this.time = setTimeout(()=>{
				
				$(".alert").remove();
				clearTimeout(this.time)
			}, options.time || 3000)		
		}
		
		
	});
})($)
