$(function(){
    var mobile_flag = isMobile(); // true为PC端，false为手机端
    // var headerHost =window.location.pathname
    // var path = window.location.search
    // var host = 'http://www.hdlbdd.com';
    // if(!(/hdlbdd\.com/).test(headerHost)) {
	// 	//测试环境
	// 	host = 'http://www.gdzb.bddia.com';
	// }
    // console.log("mobile_flag",host + path)
    // if(!mobile_flag){
    //     window.location.replace = host + path;  
    // } 
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



