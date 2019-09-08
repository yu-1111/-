//var chack=$(".centre-title-left input");
//console.log(chack)
var Chackall=$(".my-conten input");
var chgoods=$('.Myshping-centre-chain input');
console.log(chgoods)
Chackall.change(function(){
		if (this.checked) {
			chgoods.prop('checked',true)
		}else{
			chgoods.prop('checked',false)
		}
/*		console.log(this)
		console.log($(this))*/
	})
