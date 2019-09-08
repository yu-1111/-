
/*
 *countDown   倒计时
 * @param future date 表示倒计时结束时间   IS NOT NUll
 * @param history date 表示倒计时开始时间
 * 将时间转换为相差的时分秒字符串返回
 */

function countDown(future, histry) {
	
	if(!histry) {
		//当前时间距离1970年1月1日毫秒数
		histry = new Date().getTime()
	}else {
		histry = new Date(histry).getTime()
	}
	//倒计时结束时间距离1970年的毫秒数
	future = new Date(future).getTime()
	
	//倒计时相差的毫秒数
	var distance = future - histry
	
	
	if(distance <= 0) {
		return '000000'
	}
	
	//距离毫秒数- 小时毫秒数 =  分钟毫秒数 + 秒的毫秒数
	//1小时  1*60*60*1000
	//向下取整 Math.floor()
	var hours = Math.floor(distance/(60*60*1000))
	
	//1分钟 1*60*1000
	
	var minutes = Math.floor((distance - hours*60*60*1000)/(60*1000))
	
	var seconds = Math.floor((distance - hours*60*60*1000 - minutes*60*1000)/1000)

	return changeLength(hours) + changeLength(minutes) + changeLength(seconds) 
}

/*
 *changeLength   将一位数的时间转换为两位数
 * @param num string|number 表示转换的字符   IS NOT NUll
 */
function changeLength(num) {
	//判断长度
	num = String(num)
	
	if(num.length <=1) {
		num = '0' + num
	}
	
	return num
}



setInterval(countDownHtml,1000)

function countDownHtml(){
		
//倒计时
var countDownTime = countDown('2019-8-13 12:00:00')

var arrTime=countDownTime.split('')
var html=`  <span class="time">${arrTime[0]}</span>
			<span class="time">${arrTime[1]}</span>
			<span > :</span>
			<span class="time">${arrTime[2]}</span>
			<span class="time">${arrTime[3]}</span>
			<span >: </span>
			<span class="time">${arrTime[4]}</span>
			<span class="time">${arrTime[5]}</span>`

document.querySelector('.count-down').innerHTML=html
}


//tab切换
//var tabTitle = document.querySelectorAll('.tab-title')
//for (var i=0; i<=tabTitle.length;i++) {
//	
//	tabTitle[i].index = i;
//
//	tabTitle[i].onmouseenter=function(){
//		
//		var parent = this.parentNode.nextElementSibling
//		console.log(parent)
//		//找到所有tabLists
//		var tabLists = parent.children
//	
//		for (var j=0; j<tabTitle.length;j++) {
//			tabTitle[j].classList.remove('active')
//			tabLists[j].classList.remove('active')
//		}
//		
//		this.classList.add('active')
//		tabLists[this.index].classList.add('active')
//		
//	}
//}

function changeTab(parentClass){
	var parent = document.querySelector(parentClass)
//	console.log(parent)
	var tabTitle = parent.querySelectorAll('.tab-title')
	var tablists = parent.querySelectorAll('.tab-lists')
	
	for (var i=0; i < tabTitle.length;i++) {
		tabTitle[i].index=i;
		tabTitle[i].onmouseenter=function(){
			for (var j=0; j<tablists.length;j++) {
				tabTitle[j].classList.remove('active')
				tablists[j].classList.remove('active')
			}
			this.classList.add('active')
			
			tablists[this.index].classList.add('active')
		}
	}
}

changeTab('.tab-box')
changeTab('.tab-box1')
changeTab('.tab-box2')
changeTab('.tab-box3')
