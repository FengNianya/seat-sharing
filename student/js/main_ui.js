window.onresize = function(){//监听窗口大小改变
  var width = $(window).width();
  if( width >= 800){
    $(".container").css("margin-left","0");
  }else{
    $(".container").css("margin-left","-260px");
  }
}

$(".meau_btn").click(function () {
  var margin = $(".container").css("margin-left");
  if(margin == "-260px"){
    $(".container").css("margin-left","0");
  }else{
    $(".container").css("margin-left","-260px");
  }
})

$("li").click(function() {
  $("li").css("background-color","#fff");
  $(this).css("background-color","#d7d7d7");
})

$("#search").click(function () {
  $(".main").attr('src',"search.html");
  $("#title").html('座位查询');
})

$("#information").click(function () {
  $(".main").attr('src',"information.html");
  $("#title").html('我的信息');
})

$("#watch").click(function () {
  $(".main").attr('src',"watch.html");
  $("#title").html('我的值班');
})

$("#class").click(function () {
  $(".main").attr('src',"class.html");
  $("#title").html('我的课表');
})
