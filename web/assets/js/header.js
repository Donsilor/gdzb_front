$(function(){
    $(".title_nav li").mouseenter(function() {
        $(this).find('.nav_box').slideDown('fast').show();
    });
    $(".title_nav li").mouseleave(function() {
        $(this).find('.nav_box').hide();
    });

        
    // $("#div").click(function() {
    //     str = $("#div").text().substr(0,10) + " ...";
    //      $(".content p").text(str);
    // })


    // 获取页面底部公共年份
    var data = new Date(),
        year = data.getFullYear();
    
    $('.year').text(year)
})