	
window.onload = function() {
    var	interval=null	
	var index = 0;
	
	var carosoalSlide = document.querySelector(".cursoal-slide")	
	var carosoalImg = document.querySelectorAll(".banner-cursoal img")	
	var aBtn = document.querySelectorAll('.carosoul-btn')


	
	//图片的宽度等于任意一张图片的宽度
	var imgWidth = carosoalImg[0].offsetWidth	
	var imgLength = carosoalImg.length
	
	//1. 计算carosoal-slide 的宽度  图片的宽度*图片的长度
	carosoalSlide.style.width = imgWidth * imgLength + 'px'

	
//3. 让图片循环运动  5000  2000
autoAnimate()

function autoAnimate(){
   interval = setInterval(function() {
		animate(-10, 'left')
}, 2000)
}

	//移动盒子。每一次移动相当于图片宽度
function animate(speed) {
		//2. 让图片滚动起来
	var timer = setInterval(function() {
			var left = carosoalSlide.offsetLeft -20
			carosoalSlide.style.left = left + 'px'
			//当运动的left的值小于下一张显示图片的left的时 停止动画
			if(left <= -(index+1) * imgWidth) {
				clearInterval(timer)
				index ++
				
			//4.判断当运动到最后一张的时候， 将index变为0
				if(index >= imgLength -1) {
					index = 1;
					
					carosoalSlide.style.left = -imgWidth + 'px' 
				}
				
			}
			
			
		}, 10)
	}

//6.给左右按钮加点击事件
for(var i =0; i< aBtn.length;i++) {
	aBtn[i].onclick = function() {
		
		//获取类名
		var className = this.className
		if(className.indexOf('prev') >=0) {
			//点击左按钮  往右走
			animate(10, 'right')

		}else {
			//点击右按钮  往左走
			animate(-10, 'left')

		}
		
	}
	
}



//当浏览器最小化。
document.addEventListener('webkitvisibilitychange',function(){
	//浏览器是否隐藏 隐藏hidden 显示 visib
     var isHidden = document.webkitVisibilityState
     
       console.log(isHidden)
     if(isHidden == 'hidden'){
      	clearInterval(interval)
     }else{
      	autoAnimate()
      }
     });
}

