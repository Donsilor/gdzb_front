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

})