

function Serial(option) {
    this._init(option);
    /*this.init();*/
}
Serial.prototype = {
    _init: function (option) {
        this.serialName = option.serialName;
        this.description = option.description;
        this.image = option.image;
        this.targetURL = option.targetURL;
    },
    /*绑定数据*/
    bindDOM: function () {
        var str = "";
        str += '<li style="background-image:url(' + this.image + ')">'
        str += '<a href="' + this.targetURL + '">'
        str += '<span class="mask"></span>'
        str += '<div class="serialInfo">'
        str += '<h2>' + this.serialName + '</h2>'
        str += '<div class="serialInfoDetail">'
        str += '<span class="mask"></span>'
        str += '<span>-</span>'
        str += '<p>' + this.description + '</p>'
        str += '<span>-</span>'
        str += '</div>'
        str += '</div>'
        str += '</a>'
        str += '</li>'
        return str;
    },
    /*绑定事件*/
    bindEvents: function () {
        /*导航条显示效果*/
        $(".nav").hover(function () {
            $(".nav>ul").show();
        }, function () {
            $(".nav>ul").hide();
        });
        /*系列遮罩层和描述显示效果*/
        $(".product_son1>.proSerials>ul li a").hover(function () {
            $(this).children(".mask").show();
            $(this).children(".serialInfo").children(".serialInfoDetail").css("display", "block");
        }, function () {
            $(this).children(".mask").hide();
            $(this).children(".serialInfo").children(".serialInfoDetail").css("display", "none");
        });
        /*返回按钮的回退*/
        $("#goback").click(function () {
            window.history.go(-1);
        })
    }
}
