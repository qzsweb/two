
(function(window){
    var Profile=function(){
        this.date='';
        this.description='';
        this.bgImg='';
    }
    Profile.prototype={
        bindDom:function(){
            var str='';
            str+='<li style="background-image: url('+this.bgImg+')">'
            str+='<div class="pic1 productsDetails">'
            str+='<h3>'+this.date+'</h3>'
            str+='<span>-</span>'
            str+='<p>'+this.description+'</p>'
            str+='<span>-</span>'
            str+='</div>'
            str+='</li>'
            return str;
        }
    }
    window.profile=new Profile();
})(window)
$(function(){
    var data=[
        {bgImg:"../images/ceo-1.jpg",date:'2006年11月',description:'以个人名义在联合国创立“罗红环保基金”，成为首个在联合国创办个人基金的中国人。“罗红环保基金”主要用于资助联合国环境规划署野生动物保护项目和野生动物生存环境治理项目，随着中国国内环境问题的突出，后期主要用于资助中国环保教育与普及项目。'},
        {bgImg:"../images/ceo-2.jpg",date:'2009年7月',description:'2009年7月，罗红先生被美国《福布斯》杂志选入全球24位有杰出业余爱好的企业领袖榜。福布斯杂志是美国最早的大型商业杂志，也是全球最为著名的财经出版物之一。它的榜单只挑选影响力最大，或者在许多领域都做出杰出贡献的商业精英。本期上榜的24位杰出领袖中，就包括了沃伦•巴菲特、大卫•洛克菲勒、比尔•福特等领袖人物。'},
        {bgImg:"../images/ceo-3.jpg",date:'2011年11月',description:'肯尼亚总统齐贝吉授予罗红先生“Moran of theOrder of the Burning Spear”(MBS)勋章，以表彰他为肯尼亚做出的杰出贡献。这是肯尼亚总统为表彰最杰出公民而颁发的最高荣誉，罗红先生是当年获此殊荣的唯一外籍人士。'},
        {bgImg:"../images/ceo-4.jpg",date:'2010年6月14日',description:'应邀在剑桥大学西格维克博物馆举办名为《地球的颂歌的个人摄影展，这次展览的全部作品采用密封竞拍的方式拍卖，拍卖所得善款捐助剑桥东方教育与发展协会组织的“寻梦康桥，点燃希望”——四川及青海地震灾区暑期慈善夏令营活动。'}];
    for(var i=0;i<data.length;i++){
        profile.date=data[i].date;
        profile.description=data[i].description;
        profile.bgImg=data[i].bgImg;
        $(".ceoPics>ul").append(profile.bindDom());
    }
    $(".ceoPics>ul>li:eq(0)").css("opacity","1");
    var index=0;
    var $lis=$(".ceoPics>ul>li");
    $(".arrow_next").on("click",function(){
        index++;
        for(var i=0;i<$lis.length;i++){
            $lis[i].style.opacity=0;
        }
        if(index>$lis.length-1){
            index=index-$lis.length;
        }
        $lis.eq(index).css("opacity","1");
    });
    $(".arrow_prev").on("click",function(){
        index--;
        for(var i=0;i<$lis.length;i++){
            $lis[i].style.opacity=0;
        }
        if(index<0){
            index=$lis.length-1;
        }
        console.log(index);
        $lis.eq(index).css("opacity","1");
    })

})
