//购物车
var aLists = document.querySelectorAll('.delete')
var listParent= document.querySelector('.shopp')

for(var i=0;i<aLists.length;i++) {
	
			aLists[i].onclick=function(){
				var oLi=this.parentNode
				console.log(oLi)
				listParent.removeChild(oLi)
			}
		}