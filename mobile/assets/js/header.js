$(function(){
    $('.menuicon').click(function(e){
        $('.menu').addClass('open')
        $('.menu').removeClass('closed')
        $('.menu-box').css("display","block")
        $('body').css("height","100%")
        $('body').css("overflow","hidden")
        $('html').css("height","100%")
        $('html').css("overflow","hidden")
        e.stopPropagation();
    })
    $('.menu-top img').click(function(e){
        $('.menu').removeClass('open')
        $('.menu').addClass('closed')
        $('.menu-box').css("display","none")
        $('body').css("height","100%")
        $('body').css("overflow","visible")
        $('html').css("height","100%")
        $('html').css("overflow","visible")
        e.stopPropagation();
    })
    $(document).on("click", function(e){
        $('.menu-box').css("display","none")
        $('.menu').removeClass('open')
        $('.menu').addClass('closed')
        $('body').css("height","100%")
        $('body').css("overflow","visible")
        $('html').css("height","100%")
        $('html').css("overflow","visible")
        e.stopPropagation();
    });
    $(".menu").on("click", function(e){
        e.stopPropagation();
    });
    $(".list_dt").on("click",function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if($(this).attr("id")=="open"){
            $(this).removeAttr("id").siblings("dd").slideUp();
        }else{
            $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
        }
    });
})