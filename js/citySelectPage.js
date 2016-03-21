
$(function(){
    $("body").delay(1000).fadeTo(1500,1);
    $("#index_main").delay(1000).fadeTo(1500,1);
    $(".main .cities").click(function(){
        $(".main>.cities>.cityList").slideToggle(500);
    });
    var citySelected=$(".main>.cities>.cityList li")
    citySelected.each(function(index,element){
        $(this).click(function(){
            $(".main>.cities>span").html($(this).html());
            $(".index_mask").fadeTo(2000,1);
            $(".loging").fadeTo(2500,1);
            $(".main").fadeTo(2000.0);
            setInterval(function(){
                var $cityName=$(".main>.cities>span").html();
                console.log($cityName)
                window.location.href="index.html#"+$cityName;
            },4000)
        })
    })


})
