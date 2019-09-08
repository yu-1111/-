/*ajaxPackage */

function ajaxPackage(options) {
	var request = new XMLHttpRequest();

	request.open(options.type || 'get', options.url, options.async || true)

	//发送请求
	request.send(options.data || null)
	request.onreadystatechange = function() {
		if(request.readyState == 4　 && request.status == 200) {
			var data = request.responseText
			
			if(options.dataType == 'json') {
				
				data = JSON.parse(data)
				
			}
			options.success(data)
		}
	}
}