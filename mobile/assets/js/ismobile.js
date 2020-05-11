$(function(){
    var mobile_flag = isMobile(); // true为PC端，false为手机端
    var headerHost = window.location.host;
    var path = window.location.pathname
    var params = window.location.search;
    var host ='http://www.hdlbdd.com';
    if((/yushan33\.cn/).test(headerHost)) {
        if((/hdl02\.yushan33\.cn/).test(headerHost)){
            host = 'http://hdl01.yushan33.cn';
        }
	} else if(!(/hdlbdd\.com/).test(headerHost)) {
		//测试环境
		host = 'https://www-gdzb.bddco.cn';
	}
    console.log("mobile_flag",window.location)
    console.log("mobile",host + path + params)
    if(!mobile_flag){
        window.location.href = host + path + params;  
    }
});
function isMobile() {
    var userAgentInfo = navigator.userAgent;
    // console.log("userAgentInfo",userAgentInfo)
    var pageDATA_ua = window.navigator.userAgent.toLowerCase();
    // console.log("userAgentInfo",pageDATA_ua)
    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }

     var screen_width = window.screen.width;
     var screen_height = window.screen.height;    

     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 800){
         mobile_flag = true;
     }

     return mobile_flag;
}



