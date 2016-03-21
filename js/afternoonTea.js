
$(function () {
    var lis=$(".teaPros > ul>li");
    var details=$(".teaPros > ul>li>.productsDetails")
    /*console.log(lis.eq(0));*/
    var num=0;
    lis.eq(num).css("opacity","1");
    details.eq(num).css("opacity","0");
    details.eq(num).stop().delay(1000).animate({'opacity':"1"},900);
    var num=0;
    $(".arrow_next").on('click',function(){
        num++;
        for(var i=0;i<lis.length;i++){
            lis[i].style.opacity=0;
            details[i].style.opacity=0;
        }
        if(num>lis.length-1){
            num=num-lis.length;
        }
        lis.eq(num).animate({'opacity':"1"},900);
        details.eq(num).stop().delay(1000).animate({'opacity':"1"},900);
    })
    $(".arrow_prev").on('click',function(){
        num--;
        for(var i=0;i<lis.length;i++){
            lis[i].style.opacity=0;
            details[i].style.opacity=0;
        }
        if(num<0){
            num=lis.length-1;
        }
        lis.eq(num).animate({'opacity':"1"},900);
        details.eq(num).stop().delay(1000).animate({'opacity':"1"},900);
    })


})
