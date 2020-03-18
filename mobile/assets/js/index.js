
$(function(){
	$(".title>ul>li").hover(function(){
		$(".title>ul>li>span").css("color","e0c365");
	})
//	输入框显示
	$(".ssuo").click(function(){
		$(".title_nav").css("display","none");
		$(".ssuo").css("display","none")
		$(".title_input").css("display","block");
	})
	
	$(".glyphicon-removes").click(function(){
		$(".title_nav").css("display","block");
		$(".ssuo").css("display","block")
		$(".title_input").css("display","none");
	})
	
	$(".title_text").focus(function(){
	//	$(".search_box").css("display","block");
	})
	$(".title_text").blur(function(){
	//	$(".search_box").css("display","none");
	})
	
	
//	二级
	$(".title_nav>li").hover(function(){
		var index=$(this).index();
		 var navid=$(this).attr('navid');
		if(index==1){
		$('.abc'+navid).stop().animate({height:"480px"},400)
		 
		}else{
           
            $('.abc'+navid).animate({height:"320px"},400)
			//$(this).find('div').show();

		}
	},
	function(){
		var index=$(this).index();
		var navid=$(this).attr('navid');
        if(index==1){
           $('.abc'+navid).stop().animate({height:"0px"},400);
            
           $('.abc'+navid).mousemove(function(){
                $('.abc'+navid).stop().css({height:"480px"})
			})
            $('.abc'+navid).mouseleave(function(){
                $('.abc'+navid).stop().css({height:"0px"})
			})

		}else{
            
            $('.abc'+navid).stop().animate({height:"0px"},400)
        	//$(this).stop().find('div').hide();
            $('.abc'+navid).mousemove(function(){
                $('.abc'+navid).stop().css({height:"320px"})
			})
            $('.abc'+navid).mouseleave(function(){
                $('.abc'+navid).stop().css({height:"0px"})
			})
			}
	    
	})
	
	/*$(".nav_box").mouseout(function(){
		var index=$(this).index();
		      $(".nav_box").stop().animate({height:"0px"},400)
	   })*/
	
//	详情选项
	$("#cli1>ul>li").click(function(){
		var _this=$(this).index();
		$("#cli1>ul>li").removeClass("back_ground");
		$("#cli1>ul>li").eq(_this).addClass("back_ground")
	})
	
	$("#cli2>ul>li").click(function(){
		var _this=$(this).index();
		$("#cli2>ul>li").removeClass("active");
		$("#cli2>ul>li").eq(_this).addClass("active")
	})
	
	$("#cli3>ul>li").click(function(){
		var _this=$(this).index();
		$("#cli3>ul>li").removeClass("active");
		$("#cli3>ul>li").eq(_this).addClass("active")
	})
	
	$("#cli4>ul>li").click(function(){
		var _this=$(this).index();
		$("#cli4>ul>li").removeClass("active");
		$("#cli4>ul>li").eq(_this).addClass("active")
	})
	
	$(".contact_table>ul>li").click(function(){
		var _this=$(this).index();
		$(".contact_table>ul>li").removeClass("back_ground");
		$(".contact_table>ul>li").eq(_this).addClass("back_ground")
	})
	
	
//	图片数组
 /*   $(".shopping_wrap>.shopping_box>.shopping>.shopping_table>ul>li").hover(function(){
     var _this=$(this).index();
     
var a=$(this).children("img").attr('src');

    var b=$(this).parent().parent().parent().find(".shopping_img").find("img").attr("src",a)

   // var c=$(this).parent().parent().parent().find(".shopping_img").css("boder","1px solid #d7b54b")

    })*/


    $(".shopping_wrap").on('mouseover',".shopping_box .shopping .shopping_table ul li",function(){
        var a=$(this).children("img").attr('src');
        $(this).parent().parent().parent().find(".shopping_img").find("img").attr("src",a)

    }),


/*
    $(".news_wrap .news_box").hover(function(){
		console.log(5);
    	$(this).children(".news_img").css("border","1px solid #a5905a")
    	$(this).children(".news_font").find(".news_look").css("border","1px solid #a5905a")
    	$(this).children(".news_font").find(".news_look").find("span").css("color","#a5905a")
    },function(){
    	$(".news_wrap .news_box>.news_img").css("border","1px solid #484848")
    	$(".news_wrap .news_box>.news_font>.news_look").css("border","1px solid #484848")
    	$(".news_wrap .news_box>.news_font>.news_look").find("span").css("color","#888888")
    })
*/

    $(".news_wrap").on('mouseover','.news_box',function(){
        $(this).children(".news_img").css("border","1px solid #a5905a")
        $(this).children(".news_font").find(".news_look").css("border","1px solid #a5905a")
        $(this).children(".news_font").find(".news_look").find("span").css("color","#a5905a")
    }),

	$(".news_wrap").on('mouseout','.news_box',function(){
		$(".news_wrap .news_box>.news_img").css("border","1px solid #484848")
		$(".news_wrap .news_box>.news_font>.news_look").css("border","1px solid #484848")
		$(".news_wrap .news_box>.news_font>.news_look").find("span").css("color","#888888")
	}),


	//	会所
    $(".recreation_wrap>.recreation_box>ul>li").hover(function(){
//  	
    	$(this).children("img").css("border","1px solid #a5905a")
    	
    	
    },function(){
    	$(".recreation_wrap>.recreation_box>ul>li>img").css("border","1px solid #484848")
    	
    })
	
	
	
	
//			console.log(1)
			$(window).scroll(function(){
			var top = $(window).scrollTop();
			if($(window).scrollTop()>200){
				
				$(".title").css("position","fixed")
				$(".title").css("top","0")
				$(".title").css("z-index","9999")
				$(".top_box").css("display","block")
			}else{
				$(".title").css("position","static")
				$(".top_box").css("display","none")
			}
			
			
			});
	
	
	


})
