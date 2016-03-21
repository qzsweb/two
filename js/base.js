$(function () {
    $(".nav").hover(function () {
        $(".nav>ul").show();
    }, function () {
        $(".nav>ul").hide();
    });
    $("#goback").click(function () {
        window.history.go(-1);
    });


});
