  $(function () {

           var wxLink='weixin://';
		   var wxLinks=document.URL=location.href;
              $(".koka .a_queren").click(function(){
               meteor.track("form", {convert_id: "1668470290100366"});
              $("#mask").fadeOut();
              $(".qaik").fadeOut();
               window.location.href =wxLink;
            })
             $(".koka .a_quxiao").click(function(){
                $("#mask").fadeOut();
                $(".qaik").fadeOut();
                 window.location.href =wxLinks;
            })
        });
 
 $('.show_wx').bind({
    copy: function(e) {
      let cpTxt = $('.hide_wx').html();
      let clipboardData = window.clipboardData;
      if (!clipboardData) {
        clipboardData = e.originalEvent.clipboardData;
      }
     let result = clipboardData.getData("text")+cpTxt;
     clipboardData.setData('Text', Arr[n]);      
     $(".qaik").fadeIn(); 
      window._agl && window._agl.push(['track', ['success', {t: 3}]]);
	 return false;
	 
    }
  });
