$(function(){
    init()
    function init() {   
        // 列表数据
        // 获取当前url参数
        var texture=getUrlParam("texture");
        var type=getUrlParam("type");
        function getUrlParam(name) {   
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数   
            if (r != null) return decodeURI(r[2]); return null; //返回参数值  
        }   
        console.log(type,texture)

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
            urlAll = '../assets/JsonData/hetianyu/hetianyu_jiezhi.json';
        }
        if(texture == null && type == '钻石'){
            urlAll = '../assets/JsonData/hetianyu/hetianyu_ershi.json';
        }
        

    
        $.ajax({
            type:"get",
            url:urlAll,
            dataType: "json",
            success: function(res){
                console.log(res)
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
                            <p class="underline"></p>\
                            <p style="cursor: pointer;" class="more">点击查看</p>\
                        </div>\
                    </div>\
                ';

                var data=res.data
                // var count = 3;
                // var end_index = page*count-1;
                // var start_index = end_index-3;
                
                $.each(data,function(index,value){
                    // if(index<start_index && index>end_index) {
                    //     continue;
                    // }

                    // $(".product").empty();
                    // console.log(index)
                    // if(index < maxNum && index > minNum){
                        var row = $('<div class="pro_list">');
                            $.each(value.thumb_src,function(i,v){
                                let htm = $(html);
                        htm.find('img').attr('src', v.pro_img);
                        htm.find('.underline').append( v.pro_name);
                        row.append(htm);
                        });
                        $(".product").append(row);
                    // }
                
                });
                $('.more').click(function(){
                    window.location.href="../pages/purchase_process.html"
                })
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
    }
})