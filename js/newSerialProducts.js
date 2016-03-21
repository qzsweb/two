
'use strict';

function Classical(options) {
  this.init(options);
}
Classical.prototype = {
  init: function(options) {
    this.name = options.name;
    this.description1 = options.description1;
    this.description2 = options.description2;
    this.price = options.price;
    this.left = options.left;
    this.top = options.top;
    this.backgroundImage = options.backgroundImage;
  },
  bindDOM: function() {
    var str = '';
    str += '<li style = "background-image:url(' + this.backgroundImage + ')">'
    str += '<div class="productsDetails" style="left:' + this.left + ';top:' + this.top + '">'
    str += '<div class="smallLogo">'
    str += '<img src="../images/ms-logo.png" alt="">'
    str += '</div>'
    str += '<h3>' + this.name + '</h3>'
    str += '<span>-</span>'
    str += '<p>' + this.description1 + '<br/>' + this.description2 + '</p>'
    str += '<span>-</span>'
    str += '<span class="price">&yen;' + this.price + '</span>'
    str += '<span>-</span>'
    str += '<div class="addCartBtn">'
    str += '<a href="javascript:;"></a>'
    str += '</div>'
    str += '</div>'
    str += '</li>'
    return str;
  }
};
$(function() {
  for (var i = 0; i < data.length; i++) {
    var option = {
      name: data[i].name,
      description1: data[i].description1,
      description2: data[i].description2,
      price: data[i].price,
      left: data[i].left,
      top: data[i].top,
      backgroundImage: data[i].backgroundImage
    }
    var classic = new Classical(option);
    $(".newProducts>ul").append(classic.bindDOM());
    /*console.log($(".addCartBtn"));*/
    /* $(".addCartBtn").click(function() {
     $(".newSerial>.mask").show();
     console.log($(".newProducts .productsDetails>h3").html());
     });
     $("#closeBtn").click(function() {
     $(".newSerial>.mask").hide();
     })*/
  }
});
$(function () {
  /*动态添加产品信息---解析json数据*/
  $(".productsDetails").each(function (index, ele) {
    /*console.log($(".addCartBtn").length)*/
    $(this).click(function () {
      /*console.log(index);
       console.log(buyInfo[index].material);*/
      $(".cakeName").html(buyInfo[index].name);
      $(".mainMaterial").html(buyInfo[index].material);
      $(".coldStorage").html(buyInfo[index].coldStorage);
      var smallData = [];
      var middleData = [];
      var bigData = [];
      for (var key in buyInfo[index]) {
        if (buyInfo[index][key][0]) {
          smallData.push(buyInfo[index][key][0].small);
        }
        if (buyInfo[index][key][1]) {
          middleData.push(buyInfo[index][key][1].middle);
        }
        if (buyInfo[index][key][2]) {
          bigData.push(buyInfo[index][key][2].big);
        }
        /*console.log(buyInfo[index][key][2])*/
      }
      $('#small>td').each(function (i, ele) {
        $(ele).html(smallData[i]);
        /*console.log(smallData[0] + '    ' + smallData[3]);*/
        $(".selecteSize>li:eq(0)").html(smallData[0] + '    ' + smallData[3]);
      });
      $('#middle>td').each(function (i, ele) {
        $(ele).html(middleData[i]);
        $(".selecteSize>li:eq(1)").html(middleData[0] + '    ' + middleData[3]);
      });
      $('#big>td').each(function (i, ele) {
        $(ele).html(bigData[i]);
        $(".selecteSize>li:eq(2)").html(bigData[0] + '    ' + bigData[3]);
      });
      $(".newSerial>.mask").show();
    })
  });
  /*点击关闭按钮,关闭弹框*/
  $("#closeBtn").click(function () {
    $(".newSerial>.mask").hide();
    $("#selectSize").html("请选择规格");
  });
  /*选择蛋糕规格*/
  $("#selectSize").click(function () {
    $(".newSerial .bookInfo>.buyBtn .selecteSize").show();

  });
  $(".selecteSize>li").each(function (index, ele) {
    $(ele).on("click", function () {
      var html = $(this).html();
      $("#selectSize").html(html);
      $(".newSerial .bookInfo>.buyBtn .selecteSize").hide();
    })
  });
  /*点击立即购买,出现弹出框*/
  $("#buy").on("click",function(){
    var txt=$('#selectSize').html();
    if(txt=="请选择规格"){
      $(".buyBox").show();
      $(".buyBox>.pop_box").show();
      $(".buyBox .topBox>span").html("请选择规格");
      $("#btnLeft").html("确定");
      $("#btnRight").html("取消");
    }else{
      $(".buyBox").show();
      $(".buyBox>.pop_box").show();
      $(".buyBox .topBox>span").html("已加入购物车");
      $("#btnLeft").html("再逛逛");
      $("#btnRight").html("去购物车结算");
    }
    /*关闭弹框*/
    $(".buyBox>.pop_box>.closeBox").on("click",function(){
      $(this).parent().hide();
    });
    $("#btnLeft").on("click",function(){
      $(".buyBox").hide();
    });
    $("#btnRight").on("click",function(){
      if($("#btnRight").html()=="去购物车结算"){

      }else{
        $(".buyBox").hide();
      }
    })
  })

})
