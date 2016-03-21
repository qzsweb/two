

$(function(){
    /*当表单获得焦点时,清空表单中的默认文本*/
    $(".userInfo>form>input").focus(function(){
        /*首先判断表单的类型是不是文本框或者密码框型,如果不是,提交或者按钮类型的表单则不需要清空文字*/
        var type=$(this).attr("type");
        if(type=="text"||type=="password"){
            /*获取当前placeholder的属性值*/
            var txt=$(this).attr("placeholder");
            /*将这个placeholder的值赋值给value,并设置为默认初始值*/
            this.defaultValue=txt;
            if($(this).val()==this.defaultValue){
                $(this).removeAttr("placeholder");
                $(this).val("");
            }
        }
        /*当失去焦点时,如果表单中没有文字,则需还原为默认初始value值*/
    }).blur(function(){
        /*如果是密码框,则需要先将密码框的type类型改为文本框,否则会出现圆点,而不是文字*/
        if($(this).attr("type")=='password'){
            $(this).attr("type","text");
        }
        if($(this).val()===""){
            $(this).attr("placeholder",this.defaultValue);
            $(this).val(this.defaultValue);
        }
    });
    /*当点击忘记密码时,页面进入寻找密码页面*/
    $("#forget_password").on("click",function(){
        $(".login").hide();
        $("#findPassword").css({"display":"block","z-index":"10000"})
    });
    (function(){
        /*电话号码验证*/
        function isnum(obj){
            var reg=/^1[0-9]{10}/;
            if(!reg.test(obj.value)){
                $(".main>.dialog").html("请输入正确的号码").show();
                setTimeout(function(){
                    $(".main>.dialog").hide();
                },3000)
                obj.value="";
            }
        }
        /*邮箱格式验证*/
        function ismail(obj){
            var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
            if(!reg.test(obj.value)){
                $(".main>.dialog").html("请输入正确的号码！").show().delay(6000).hide();
                obj.value="";
            }
        }
        /*用户名验证*/
        function isname(obj){
            var reg=/^[\u4e00-\u9fa5]{2,4}$/;
            if(!reg.test(obj.value)){
                $(".main>.dialog").html("请输入正确的用户名！").show().delay(6000).hide();
                obj.value="";
            }
        }

        $("#loginBtn").on("click",function(){
            isnum($("#tel"));
        })
        $("#confirm").on("click",function(){
            isnum($("#mobileTel"));
        })


    })()
})
