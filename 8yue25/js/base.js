////底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]


var asideLists =  document.querySelectorAll(".lisss")
//console.log(asideLists)
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间

for(var i = 0; i< asideLists.length; i++) {
	
	asideLists[i].onmouseenter = function() {
	
		//this  指向当前函数的执行的对象  li ,没有指向window
		
		//获取子节点
//		console.log(this.children[1])
		var bar = this.children[1]
		//需要right的值从45 变到 35
		//定时器  让一个时间延迟执行  时间可以自定义
		//setInterval(延迟执行的动作， 延迟的时间)
		var right = 45
		var timer = setInterval(function(){

			right = right-1;
			if(right<=35) {
				//clearInterval(定时器名字)
				clearInterval(timer)
			}else {
				bar.style.right = right+'px'
			}

			
		}, 10)
		
//		this.children[1].style.right = '35px';
		
		
	}
}
/*侧边栏*/
var returnTopelem=document.querySelector('.return-top')
returnTopelem.onclick=function(){
document.body.scrollTop=0
}

//var slideBars=document.querySelectorAll('.aside-slide-bar');
//var asideSlide=document.querySelector('.aside-slide')
//console.log(slideBars,slideBars)
//for (var i=0; i<slideBars.length;i++) {
//	
//	slideBars[i].onclick=function () {
//		
//		
////		console.log(asideSlide.currentStyle.right)
//		var right=''
//		if (asideSlide.currentStyle) {
//			right=asideSlide.currentStyle.right
//		} else{
//			right=getComputedStyle(asideSlide,false)['right']
//			console.log(right)
//		}
//	        right=parseInt(right)
//	        if (right>-264) {
//	        	//回去
//	        	speed= -12
//	        }else{
//	        	//处理
//	        	speed =12
//	        }
//		var timer=setInterval(function() {
//			right += speed
//			asideSlide.style.right=right+'px'
//			if ((right>=35 && speed>0) || (right<= -264 && speed<0)) {
//			clearInterval(timer)
//			}
//		},10)
//		
//		}	
//}

var slidebar = document.querySelectorAll('.aside-slide-bar');

var slideBox = document .querySelector(".aside-slide");
//客服
var slideServer = document.querySelector('.aside-slide-server')
//购物车
var slideCart=document.querySelector('.aside-slide-car')

for (var i =0 ; i < slidebar.length;i++) {
	slidebar[i].onclick=function () {
		
		var className=this.className
		
		var speed=0
		if (className.indexOf('on')>=0) {
			//回去
			speed = -12
			this.classList.remove('on')
		} else{
			//出来
			speed = 12;
			
			this.classList.add('on')
			//判断显示是购物车还是客服
			
			if (className.indexOf('asidebar-bar-cart') >=0) {
				
				this.nextElementSibling.classList.remove('on')
				slideCart.style.display = 'block'
				slideServer.style.display = 'none'
			}else{
				
				this.previousElementSibling.classList.remove('on')
				slideServer.style.display = 'block'
				slideCart.style.display = 'none'
			}
			
			
			
		
			
		}
		var right=0;
		if (slideBox.currentStyle) {
			
		   	right=slideBox.currentStyle.right
		   	
		}else{
			right=getComputedStyle(slideBox,false).right
			
		}
		 right=parseInt(right)
	
	    //运动
	    var timer = setInterval(function(){
			right += speed
			
			
			
			if (right>35|| right<-264) {
				clearInterval(timer)
			}else{
				slideBox.style.right=right + 'px'
			}
		},10)
		
	}	
}
