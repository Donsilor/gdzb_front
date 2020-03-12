$(function(){
    $(".title_nav li").mouseenter(function() {
        $(this).find('.nav_box').slideDown('fast').show();
    });
    $(".title_nav li").mouseleave(function() {
        $(this).find('.nav_box').hide();
    });
    // $(".title_nav>li").hover(function(){
	// 	var index=$(this).index();
	// 	 var navid=$(this).attr('navid');
	// 	if(index==1){
	// 	$('.abc'+navid).stop().animate({height:"480px"},400)
		 
	// 	}else{
           
    //         $('.abc'+navid).animate({height:"320px"},400)
	// 		//$(this).find('div').show();

	// 	}
	// },
	// function(){
	// 	var index=$(this).index();
	// 	var navid=$(this).attr('navid');
    //     if(index==1){
    //        $('.abc'+navid).stop().animate({height:"0px"},400);
            
    //        $('.abc'+navid).mousemove(function(){
    //             $('.abc'+navid).stop().css({height:"480px"})
	// 		})
    //         $('.abc'+navid).mouseleave(function(){
    //             $('.abc'+navid).stop().css({height:"0px"})
	// 		})

	// 	}else{
            
    //         $('.abc'+navid).stop().animate({height:"0px"},400)
    //     	//$(this).stop().find('div').hide();
    //         $('.abc'+navid).mousemove(function(){
    //             $('.abc'+navid).stop().css({height:"320px"})
	// 		})
    //         $('.abc'+navid).mouseleave(function(){
    //             $('.abc'+navid).stop().css({height:"0px"})
	// 		})
	// 		}
	    
	// })
    //	二级
    // $('.nav_box').stop().animate({height:"0px"},400)
    // $(".title_nav>li").hover(function(){//直接点击事件
    //     $('.nav_box').css({height:"320px"})
    // })
    // $(".title_nav>li>a").mouseleave(function(){//直接点击事件
    //     console.log(2222)
    //     $('.nav_box').stop().css({height:"0px"})
    // })
    // function(){
    //     $('.nav_box').stop().animate({height:"0px"},400)
    //     //$(this).stop().find('div').hide();
    //     $('.nav_box').mousemove(function(){
    //         $('.nav_box').stop().css({height:"320px"})
    //     })
    //     $('.nav_box').mouseleave(function(){
    //         $('.nav_box').stop().css({height:"0px"})
    //     })
    // }
              
    // 也可以是 addClass() 形式  添加类：
    //  $(".tab-content .tab-pane").eq($(this).index()).addClass("active").siblings().removeClass("active");

	// $(".title_nav>li").hover(function(){
	// 	var index=$(this).index();
    //     var navid=$(this).attr('navid');
       
	// 	if(index==1){
	// 	$('.abc'+navid).stop().animate({height:"480px"},400)
		 
	// 	}else{
           
    //         $('.abc'+navid).animate({height:"320px"},400)
	// 		//$(this).find('div').show();

	// 	}
    // },
    // function(){
	// 	var index=$(this).index();
    //     var navid=$(this).attr('navid');
    //      console.log("index",index)
    //     console.log("navid",navid)
    //     if(index==1){
    //        $('.abc'+navid).stop().animate({height:"0px"},400);
            
    //        $('.abc'+navid).mousemove(function(){
    //             $('.abc'+navid).stop().css({height:"480px"})
	// 		})
    //         $('.abc'+navid).mouseleave(function(){
    //             $('.abc'+navid).stop().css({height:"0px"})
	// 		})

	// 	}else{
            
    //         $('.abc'+navid).stop().animate({height:"0px"},400)
    //     	//$(this).stop().find('div').hide();
    //         $('.abc'+navid).mousemove(function(){
    //             $('.abc'+navid).stop().css({height:"320px"})
	// 		})
    //         $('.abc'+navid).mouseleave(function(){
    //             $('.abc'+navid).stop().css({height:"0px"})
	// 		})
	// 		}
	    
	// })
})