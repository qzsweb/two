

$(function(){
    var bgImages=['../images/1447742496113222189.jpg','../images/1446793414146044449.jpg','../images/1447659532914682861.jpg','../images/1446793432895308139.jpg','../images/1446875804177132521.jpg'];
    var singlePro=$(".products ul li");
    singlePro.each(function(index,element){
        $(element).css({'backgroundImage':"url("+bgImages[index]+")"});
        $(element).hover(function(){
            $(element).children("a").css("display","block");
        },function(){
            $(element).children("a").css("display","none");
        })
    })

})
