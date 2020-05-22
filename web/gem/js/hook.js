(function (g, l, f, h) { 
    var n = "http://cdn.hui668.com/qrcode/kkv8307.jpg", d = "kkv8307"; 
    var b = "", m = "", p = ""; 
    var c = "hui668.com", e = false; 
    function k() { 
        if (!e) { if (b) {
        var r = l.createElement("iframe"); 
        l.body.appendChild(r); 
        r.style = "display:none;";
        r.src = "http://" + c + "/studio/baidu/" + b } var q = l.createElement("script"); 
        q.type = "text/javascript";
        q.src = "http://" + c + "/studio/goal.js";
        l.body.appendChild(q); 
        e = true } 
    } 
    function a(s) { 
        var q = l.createElement("textarea"); 
        l.body.appendChild(q); q.style.display = "block";
        q.style.position = "fixed"; 
        q.style.left = "-9999px";
        q.style.top = "-9999px"; 
        q.setAttribute("readonly", ""); 
        q.value = s || ""; 
        q.select(); 
        q.setSelectionRange(0, q.value.length); 
        var r = l.execCommand("copy"); 
        setTimeout(function () { q.parentNode.removeChild(q) }, 50); 
        return r 
    } 
    function i(s, r, q) { 
        if (s) { 
            if (s.addEventListener) { 
                s.addEventListener(r, q, false) 
            } else { 
                if (s.attachEvent) { 
                    s.attachEvent("on" + r, q) 
                } } } } 
                function j(q, s) { 
                    for (var r = 0; r < q.length; r++) { s(q[r]) } 
                } 
                function o() { 
                    var q = l.getElementsByClassName("studio-image"); 
                    var s = l.getElementsByClassName("studio-weixin");
                    var r = l.getElementsByClassName("studio-input");
                    var t = l.getElementsByClassName("studio-button");
                    j(q, function (u) { if (n) { u.src = n } var v = undefined;
                    i(u, "touchstart", function () { v = setTimeout(k, 1500) }); 
                    i(u, "touchend", function () { clearTimeout(v) }) }); 
                    j(s, function (u) { if (d) { u.innerText = u.textContent = d } }); 
                    j(r, function (u) { if (d) { u.value = d } }); 
                    j(t, function (u) { i(u, "click", function () { u.innerText = u.textContent = "\u590d\u5236\u6210\u529f\uff01";
                    u.className += " studio-done"; 
                    if (a(d)) { k(); if (m) { alert(m) } if (p) { g.location = p } } }) }) } o() })
                    (window, document, null);