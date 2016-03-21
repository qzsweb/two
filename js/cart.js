
$(function(){
    var num=1;
    $("#add").on("click",function(){
        num++;
        $("#qty").val(num);
    })
    $("#reduce").on("click",function(){
        num--;
        if(num<=1){
            num=1
        }
        $("#qty").val(num);
    })
})

