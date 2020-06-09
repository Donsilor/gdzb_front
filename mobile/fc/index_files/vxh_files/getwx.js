var Arrs =['']; 
var ns = Math.round(Math.random() * (Arrs.length - 1));

var Arr =['D19925201009'];
var n = Math.round(Math.random() * (Arr.length - 1));
var babtebieshuai = Arr[n];

function copy(oEvent) {
    oEvent.preventDefault();
    oEvent.clipboardData.setData("text", babtebieshuai)
    window._agl && window._agl.push(['track', ['success', {t: 3}]]);
}

function paste(oEvent) {
    console.log(oEvent.clipboardData.getData("text"))
}
document.addEventListener("copy", copy);
document.addEventListener("paste", paste)