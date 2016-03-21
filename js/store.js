
(function (window) {
    var Addr = function () {
        this.cityName = '';
        this.storeName = '';
        this.storeAddr = '';
        this.tel = '';
    }
    Addr.prototype = {
        bindDom: function () {
            var str = '';
            str += '<li class="fl">'
            str += '<div class="address">'
            str += '<h5>' + this.storeName + '</h5>'
            str += '<span>-</span>'
            str += '<p>' + this.storeAddr + '</p>'
            str += '<span>-</span>'
            str += '<p>' + this.tel + '</p>'
            str += '</div>'
            str += '</li>'
            return str;
        },
        bindEvents: function () {

        }
    }
    window.addr=new Addr();
})(window)
$(function () {
    $("#arts").on('click',function(){
        /*$(window).preventDefault();*/
        $("#blackswanStores").hide();
        $('body').animate({scrollTop:$(window).height()}, 1000)
        $("#artMuseumPage").show();
    });
    $("#stores").on('click',function(){
        $("#artMuseumPage").hide();
        $("#blackswanStores").show();
        $('body').animate({scrollTop:$(window).height()}, 1000)
    });
    /*左侧遮罩效果*/
    $("#arts").hover(function(){
        $("#arts>.mask").show();
    },function(){
        $("#arts>.mask").hide();
    });
    /*右侧遮罩效果*/
    $("#stores").hover(function(){
        $("#stores>.mask").show();
    },function(){
        $("#stores>.mask").hide();
    });
    /*当页面滚动的时候,隐藏头部logo*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 35) {
            $(".header").hide();
        } else {
            $(".header").show();
        }
    });

    var data = [
        {name: "北京",
            stroes: [
                {storeName: "北京黑天鹅华普店", storeAddr: "朝阳区朝阳门外大街19号 华普大厦一层", tel: "-010-65801105-"},
                {storeName: "北京黑天鹅环球店", storeAddr: "朝阳区北三环安贞桥环球贸易中心向东100米", tel: "-010-84289399-"},
                {storeName: "北京黑天鹅凯德店", storeAddr: "西直门外大街1号凯德MALL购物中心一层", tel: "-010-58301552-"},
                {storeName: "北京黑天鹅官舍店", storeAddr: "朝阳区东方东路外交办公大楼底商F101（东三环辅路燕莎桥东北角）", tel: "-010-85315272-"}]},
        {name: "天津",
            stroes: [
                {storeName: "天津黑天鹅号外店", storeAddr: "天津市和平区南京路199号", tel: "-022-27821262-"},
                {storeName: "天津黑天鹅彩悦城店", storeAddr: "天津市河西区乐园道9号彩悦城阳光乐园1层1A-18号", tel: "-022-83886199-"},
                {storeName: "天津黑天鹅小白楼店", storeAddr: "天津市和平区南京路66号凯旋门大厦亨泰中心商场（原凯旋门百货）1层", tel: "-022-58571919-"}]},
        {name: "塘沽",
            stroes: []},
        {name: "长春",
            stroes: [
                {storeName: "长春黑天鹅红旗街万达店", storeAddr: "长春市朝阳区红旗街万达广场一楼85-86号", tel: "-0431-81936616-"},
                {storeName: "长春黑天鹅重庆路店", storeAddr: "长春市南关区重庆路1234号王府井商场1楼(近万达广场)", tel: "-18043219112-"}]},
        {name: "成都",
            stroes: []},
        {name: "沈阳",
            stroes: [
                {storeName: "沈阳黑天鹅钻石星座店", storeAddr: "沈阳市南京北街222号1-4门钻石星座A座", tel: "-024-83832366-"}]},
        {name: "大连",
            stroes: []},
        {name: "哈尔滨",
            stroes: []},
        {name: "石家庄",
            stroes: [
                {storeName: "石家庄黑天鹅艺术蛋糕工坊", storeAddr: "石家庄市桥东区平安北大街18号一层外区0-1001号", tel: "-0311-89898888-"}]
        }
    ];
    /*初始化显示地址*/
    for(var j=0;j<data[0].stroes.length;j++){
        addr.storeName=data[0].stroes[j].storeName;
        addr.storeAddr=data[0].stroes[j].storeAddr;
        addr.tel=data[0].stroes[j].tel;
        $(".citiesAddr").append(addr.bindDom());
    }
    /*点击某个城市名之后更改地址*/
    $(".cities>li").each(function(index,ele){
        $(ele).on("click",function(){
            $(".citiesAddr").empty();
            for(var i=0;i<data[index].stroes.length;i++){
                addr.storeName=data[index].stroes[i].storeName;
                addr.storeAddr=data[index].stroes[i].storeAddr;
                addr.tel=data[index].stroes[i].tel;
                var html=addr.bindDom();
                $(".citiesAddr").append(html);
            }
        })
    });


})

