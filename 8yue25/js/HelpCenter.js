$(function(){
  $(".help-main-left>ul>li").on("click",function(){
  	//children() 方法返回返回被选元素的所有直接子元素。
    var next = $(this).children(".child-ul");
    var icon = $(this).children("span");
     console.log(icon)
    next.slideToggle('fade');
    if(icon.html()=="+"){
      icon.html("-");
    }else{
      icon.html("+");
    }
    $('.child-ul').not(next).slideUp('fast');//不是当前点击的内容全部向上收起
    $('.help-main-left>ul>li').children("span").not(icon).html("+");
    return false;
  })
})