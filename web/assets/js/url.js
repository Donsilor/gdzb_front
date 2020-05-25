$(function(){
    var _default = -1;
    var max_default = 4;
    var list = []
    
    init()
    function init() {   
        
        // 获取当前url参数
        var texture=getUrlParam("texture");
        var type=getUrlParam("type");
        function getUrlParam(name) {   
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数   
            if (r != null) return decodeURI(r[2]); return null; //返回参数值  
        }   
        console.log(type,texture)
        // 请求的列表json数据
        let urlAll = '';
        if(texture == null && type == null){
            urlAll = '../assets/JsonData/allList.json';
            $('#own').addClass('div_show')
        }
        // 所有材质分类
        if(texture == '翡翠'){
            urlAll = '../assets/JsonData/feicui/feicui.json';
            $('#first').addClass('div_show')
            $('#own').removeClass('div_show')
            if(type !== null){
                if($('.all').hasClass('on')){
                    $(".all").removeClass('on')
                }
            }
        }
        if(texture == '和田玉'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu.json';
            $('#second').addClass('div_show')
            $('#own').removeClass('div_show')
            if(type !== null){
                if($('.all').hasClass('on')){
                    $(".all").removeClass('on')
                }
            }
        }
        if(texture == '珍贵宝石'){
            urlAll = '../assets/JsonData/baoshi/baoshi.json';
            $('#third').addClass('div_show')
            $('#own').removeClass('div_show')
            if(type !== null){
                $(".all").removeClass('on')
            }
        }
        // 翡翠
        if(texture == '翡翠' && type == '手镯'){
            urlAll = '../assets/JsonData/feicui/feicui_shouzhuo.json';
        }
        if(texture == '翡翠' && type == '挂件'){
            urlAll = '../assets/JsonData/feicui/feicui_guajian.json';
        }
        if(texture == '翡翠' && type == '戒指'){
            urlAll = '../assets/JsonData/feicui/feicui_jiezhi.json';
        }
        if(texture == '翡翠' && type == '耳饰'){
            urlAll = '../assets/JsonData/feicui/feicui_ershi.json';
        }
        if(texture == '翡翠' && type == '项链'){
            urlAll = '../assets/JsonData/feicui/feicui_xianglian.json';
        }
        if(texture == '翡翠' && type == '手把件'){
            urlAll = '../assets/JsonData/feicui/feicui_shoubajian.json';
        }
        if(texture == '翡翠' && type == '摆件'){
            urlAll = '../assets/JsonData/feicui/feicui_baijian.json';
        }
        
        // 和田玉

        if(texture == '和田玉' && type == '手镯'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_shouzhuo.json';
        }
        if(texture == '和田玉' && type == '挂件'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_guajian.json';
        }
        if(texture == '和田玉' && type == '戒指'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_jiezhi.json';
        }
        if(texture == '和田玉' && type == '耳饰'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_ershi.json';
        }
        if(texture == '和田玉' && type == '项链'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_xianglian.json';
        }
        if(texture == '和田玉' && type == '手把件'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_shoubajian.json';
        }
        if(texture == '和田玉' && type == '摆件'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_baijian.json';
        }

        // 珍贵宝石
        if(texture == '珍贵宝石' && type == '红宝石'){
            urlAll = '../assets/JsonData/baoshi/baoshi_hongbaoshi.json';
        }
        if(texture == '珍贵宝石' && type == '蓝宝石'){
            urlAll = '../assets/JsonData/baoshi/baoshi_lanbaoshi.json';
        }
        if(texture == '珍贵宝石' && type == '祖母绿'){
            urlAll = '../assets/JsonData/baoshi/baoshi_zumulv.json';
        }
        if(texture == '珍贵宝石' && type == '钻石'){
            urlAll = '../assets/JsonData/baoshi/baoshi_zuanshi.json';
        }
        if(texture == '珍贵宝石' && type == '猫眼石'){
            urlAll = '../assets/JsonData/baoshi/baoshi_cat.json';
        }
        
        // 所有材质下的类型分类
        if(texture == '翡翠' && type == null){
            urlAll = '../assets/JsonData/feicui/feicui.json';
        }
        if(texture == '和田玉' && type == null){
            urlAll = '../assets/JsonData/hetianyu/hetianyu.json';
        }
        if(texture == '珍贵宝石' && type == null){
            urlAll = '../assets/JsonData/baoshi/baoshi.json';
        }
        // 所有类型分类
        if(texture == null && type == '手镯'){
            urlAll = '../assets/JsonData/all/all_shouzhuo.json';
        }
        if(texture == null && type == '挂件'){
            urlAll = '../assets/JsonData/all/all_guajian.json';
        }
        if(texture == null && type == '戒指'){
            urlAll = '../assets/JsonData/all/all_jiezhi.json';
        }
        if(texture == null && type == '耳饰'){
            urlAll = '../assets/JsonData/all/all_ershi.json';
        }
        if(texture == null && type == '项链'){
            urlAll = '../assets/JsonData/all/all_xianglian.json';
        }
        if(texture == null && type == '手把件'){
            urlAll = '../assets/JsonData/all/all_shoubajian.json';
        }
        if(texture == null && type == '摆件'){
            urlAll = '../assets/JsonData/all/all_baijian.json';
        }
        if(texture == null && type == '红宝石'){
            urlAll = '../assets/JsonData/all/all_hongbaoshi.json';
        }
        if(texture == null && type == '蓝宝石'){
            urlAll = '../assets/JsonData/all/all_lanbaoshi.json';
        }
        if(texture == null && type == '祖母绿'){
            urlAll = '../assets/JsonData/all/all_zumulv.json';
        }
        if(texture == null && type == '钻石'){
            urlAll = '../assets/JsonData/all/all_zuanshi.json';
        }
        if(texture == null && type == '猫眼石'){
            urlAll = '../assets/JsonData/all/all_cat.json';
        }
        var datar = [];

        // json数据请求
        $.ajax({
            type:"get",
            url:urlAll,
            dataType: "json",
            success: function(res){
                datar = res.data;
                console.log("数据",res.data)
                if(res.data==''){
                    var div='<div class="no_pro">对不起，暂时没有宝贝</div>'
                    $(".product").css('height','300px');
                    $(".product").css('text-align','center');
                    $(".product").css('text-align','center');
                    $(".product").append(div);
                }
                var html = '\
                    <div class="list">\
                        <div class="pro_div">\
                            <div class="pro_img">\
                                <img src="" alt="">\
                            </div>\
                            <p class="underline" style="text-overflow: ellipsis;white-space: nowrap;overflow:hidden;" title=""></p>\
                            <p style="cursor: pointer;" onclick="clickMe(event)" class="look"></p>\
                        </div>\
                    </div>\
                ';
                // list = res.data
                var data=res.data
                
                
                // var count = 3;
                // var end_index = page*count-1;
                // var start_index = end_index-3;
                // let aa = -1
                $.each(data,function(index,value){
                    // if(index<start_index && index>end_index) {
                    //     continue;
                    // }
                    // aa = index

                    // $(".product").empty();
                    // console.log(index)
                    // if(index < maxNum && index > minNum){
                    // if(index < max_default && index > _default){
                       
                        var row = $('<div class="pro_list">');
                        $.each(value.thumb_src,function(i,v){
                            a = index;
							b = i;
                            let htm = $(html);
                            htm.find('img').attr('src', v.pro_img);
                            htm.find('.underline').append( v.pro_name);
                            htm.find('.underline').attr('title', v.pro_name);
                            htm.find('.look').attr('dataa', a);
                            htm.find('.look').attr('datab', b);
                            htm.find('.look').append( v.btn);
                            row.append(htm);
                        });
                        $('.look').click(function(){
                            // console.log(index)
                            // var itemParent = $(this).parent().parent().parent().index()
                            // var item = $(this).parent().parent().index()
                            // console.log("ppp",data[itemParent].value.thumb_src[item].type)
                            // console.log("yyyy",value.thumb_src[item].type)
                            // if(value.thumb_src[item].type == 1){
                            //     window.location.href="../pages/purchase_process.html"
                            // }
                            // if(value.thumb_src[item].type == 2){
                            //     window.location.href="../pages/purchase_process_hetian.html"
                            // }
                            // if(value.thumb_src[item].type == 3){
                            //     window.location.href="../pages/purchase_process_baoshi.html"
                            // }
                            // console.log("index",itemParent,item)
                        })
                        // console.log("yyyy",value.thumb_src[0].type)
                        $(".product").append(row);
                    // }
                    // }
                });
               
                // 点击列表查看更多跳转购买流程页面
                $('.look').click(function(){
                    // var baseUrl = window.location.href
                    // console.log("dddd",type)
                    // if(texture == '翡翠'){
                    //     window.location.href="../pages/purchase_process.html"
                    // } else if(texture == '和田玉'){
                    //     window.location.href="../pages/purchase_process_hetian.html"
                    // } else if(texture == '珍贵宝石'){
                    //     window.location.href="../pages/purchase_process_baoshi.html"
                    // } 
                })
                // $(".underline").each(function(){
                //     var maxwidth = 10;
                //     if($(this).text().length > maxwidth){ 
                //         $(this).text($(this).text().substring(0,maxwidth));
                //         $(this).html($(this).html()+'…');
                //     }
                // });
                // 二维码弹框
                // $('.more').click(function(){
                //     $('.msgBox').css('display','block')
                // })
                // $('.enter').click(function(){
                //     $('.msgBox').css('display','none')
                // })
                // $('.cha img').click(function(){
                //     $('.msgBox').css('display','none')
                // })
            }
        });

        clickMe = function(e) {
			var lineA = e.target.getAttribute("dataa"),
                lineB = e.target.getAttribute("datab");
                if(datar[lineA].thumb_src[lineB].type == 1){
                    window.location.href="../pages/purchase_process.html"
                } else if(datar[lineA].thumb_src[lineB].type == 2){
                    window.location.href="../pages/purchase_process_hetian.html"
                } else if(datar[lineA].thumb_src[lineB].type == 3){
                    window.location.href="../pages/purchase_process_baoshi.html"
                }
			// console.log(datar[lineA].thumb_src[lineB].type)
		}
    }
    // 加载更多
    // $(".loadmore p").click(function(){
    //     console.log("max_default",max_default)
    //     console.log("_default",list.length)
    //     // $('.product').html("");
    //     if(_default<list.length){
    //         max_default = max_default + 4
    //         _default = _default + 4;
    //     } 
    //     if(max_default >= list.length){
    //         console.log(99999)
    //         $('.loadmore p').html("已加载全部");
    //     }
    //     $('.loadmore img').css("display","block")
    //     if(list){
    //         $('.loadmore img').css("display","none")
    //     }
    //     init()
    // })

    
})