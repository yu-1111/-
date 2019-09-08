window.onload = function() {
	banner1()
}

// * 1. 计算移动盒子的宽度
// * 2. 使移动盒子移动  每次移动距离为图片的宽度
// * 3. 定时执行2步的运动
// * 4. 判断运动到最后一张是返回显示第一张
// * 
//移动盒子
function banner1() {
	var speed = 10;
	var index = 0;
	var dotIndex = 0
	var interval = null
	var bannerCarosoul = document.querySelector('.banner-cursoal')
	var slideBox = document.querySelector('.cursoal-slide');
	var imgList = document.querySelectorAll('.cursoal-slide img')
	var aBtn = document.querySelectorAll('.carosoul-btn')
	var aDot = document.querySelectorAll('.carosoul-dot li')
	console.log(aDot)
	//图片宽度
	// offsetLeft offsetTop   offsetWidth  offsetHeight
	//currentStyle  判断条件
	var imgWidth = imgList[0].offsetWidth
	//图片长度
	var imgLength = imgList.length

	//1. 计算移动盒子的宽度
	slideBox.style.width = imgWidth * imgLength + 'px'

	//3. 定时执行2步的运动
	autoAniamte()

	function autoAniamte(speed,position) {
		interval = setInterval(function() {
			animate(speed, position)
		}, 2000)

	}

	//2. 使移动盒子移动  每次移动距离为图片的宽度
	function animate(speed, position) {

		changeDot(position)

		var timer = setInterval(function() {
			var left = slideBox.offsetLeft + speed

			slideBox.style.left = left + 'px'

			var curIndex = 0; //表示即将要运动到图片的下标

			if(position == 'left') {
				curIndex = index + 1

			} else {
				curIndex = index - 1

			}

			//当当前盒子的left值小于等于目标值时 停止动画
			//(left <= -(curIndex)*imgWidth && speed <0)  往左移
			//(left >= -curIndex*imgWidth && speed > 0)   往右移
			if((left <= -(curIndex) * imgWidth && speed < 0) || (left >= -curIndex * imgWidth && speed > 0)) {
				clearInterval(timer)
				index = curIndex

				//4. 判断运动到最后一张是返回显示第一张
				if(index >= imgLength - 1) {
					index = 1;
					slideBox.style.left = -imgWidth + 'px'
				} else if(index <= 0) {
					index = imgLength - 2
					slideBox.style.left = -index * imgWidth + 'px'
				}

			}

		}, 10)
	}

	//4.左右
	function changeDot(position) {

		if(position == 'left') {
			dotIndex++
		} else {
			dotIndex--
		}

		if(dotIndex > aDot.length - 1) {
			dotIndex = 0
		} else if(dotIndex < 0) {
			dotIndex = aDot.length - 1
		}

		for(var i = 0; i < aDot.length; i++) {

			aDot[i].classList.remove('on')
		}

		aDot[dotIndex].classList.add('on')
	}

	//5. 移入轮播盒子 停止动画 移除开始
	bannerCarosoul.onmouseenter = function() {
		clearInterval(interval)
	}

	bannerCarosoul.onmouseleave = function() {
		autoAniamte()
	}

	//6.给左右按钮加点击事件
	for(var i = 0; i < aBtn.length; i++) {
		aBtn[i].onclick = function() {

			//获取类名
			var className = this.className
			if(className.indexOf('prev') >= 0) {
				//点击左按钮  往右走
				animate(10, 'right')

			} else {
				//点击右按钮  往左走
				animate(-10, 'left')

			}

		}

	}

	for(var i = 0; i < aDot.length; i++) {
		var r='left';
		aDot[i].dot = i
		aDot[i].onclick = function() {
			if(this.dot < dotIndex) {
				speed = Math.abs(speed)
				index = this.dot + 2
				dotIndex.dot + 1
				r='right';
			} else {
				speed = -Math.abs(speed)
				index = this.dot
				dotIndex = this.dot - 1
			}
			autoAniamte(speed, r)
		}
	}

	//当浏览器最小化 或者切换不同标签是执行的动作  visibilitychange
	//document.addEventListener  监听事件
	document.addEventListener('webkitvisibilitychange', function() {
		//浏览器是否隐藏  隐藏hidden  显示visible
		var isHidden = document.hidden || document.webkitVisibilityState == 'hidden'
		if(isHidden) {
			clearInterval(interval)
		} else {
			autoAniamte()
		}
	})
}
