<!DOCTYPE html>
<html>
	<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
		<title></title>
    <script src="../assets/js/jquery-1.11.3.min.js"></script>  
    <style type="text/css">
      body{
        max-width: 640px;
        margin: 0 auto;
      }
      #container{
        position: relative;
      }
      div,img{
        position: absolute;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>

    <script type="text/javascript">
      

      $.ajax({
        url: 'https://gdzb.bddco.cn/api/gdzb/v1/special/details?url=<?php echo $_GET['url']??''; ?>',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function (res) {
          console.log(res)
          successFn(res) 
        }
      })

      function successFn(res) {
        var box = document.getElementById('container');
        var obj = res.data.data;

        for(var i=0; i< obj.length; i++){
          if(obj[i].type == 'text'){
            var div = document.createElement('div');
            div.innerText = obj[i].content;
            box.appendChild(div)
            div.style.width = obj[i].width;
            div.style.height = obj[i].height;
            div.style.top = obj[i].top;
            div.style.left = obj[i].left;
            div.style.color = obj[i].color;
            div.style['font-size'] = obj[i]['font-size'];
            div.style['font-weight'] = obj[i]['font-weight'];
            div.style['font-style'] = obj[i]['font-style'];
            div.style['text-decoration'] = obj[i]['text-decoration'];
            div.style['z-index'] = obj[i]['z-index'];
          }

          if(obj[i].type == 'img'){
            var img = document.createElement('img');
            img.setAttribute('src', obj[i].url)
            box.appendChild(img)
            img.style.width = obj[i].width;
            img.style.height = obj[i].height;
            img.style.top = obj[i].top;
            img.style.left = obj[i].left;
            img.style.color = obj[i].color;
            img.style['font-size'] = obj[i]['font-size'];
            img.style['font-weight'] = obj[i]['font-weight'];
            img.style['font-style'] = obj[i]['font-style'];
            img.style['text-decoration'] = obj[i]['text-decoration'];
            img.style['z-index'] = obj[i]['z-index'];
          }

          if(obj[i].type == 'video'){
            var img = document.createElement('img');
            img.setAttribute('src', obj[i].url)
            box.appendChild(img)
            img.style.width = obj[i].width;
            img.style.height = obj[i].height;
            img.style.top = obj[i].top;
            img.style.left = obj[i].left;
            img.style.color = obj[i].color;
            img.style['font-size'] = obj[i]['font-size'];
            img.style['font-weight'] = obj[i]['font-weight'];
            img.style['font-style'] = obj[i]['font-style'];
            img.style['text-decoration'] = obj[i]['text-decoration'];
            img.style['z-index'] = obj[i]['z-index'];
          }
        }
      }

    </script>
  </body>
</html>