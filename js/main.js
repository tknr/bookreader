$(document).ready(function() {
	$("#header").hide("fade");
	$("#footer").hide("fade");
});

$("#content").click(function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
});

$(window).on('load',function() {
	imageResize("#image");
});

$(window).resize(function () {
	imageResize("#image");
});

$(window).on("orientationchange",function(){
	imageResize("#image");
});

function imageResize(selector){
//	var h = getWindowHeight();
	scrollTo(0, 0);
	var h = window.innerHeight;
//	h = h - 100;
	console.log(h);
	$(selector).height(h);
}

function getWindowHeight(){
	// 端末の向きを算出
    var isPortrait = window.innerHeight > window.innerWidth;
    // UserAgent から端末の種類を判別
    var ua = navigator.userAgent;
    var device;
    if (ua.search(/iPhone/) != -1 || ua.search(/iPod/) != -1) {
        device = "iPhone";
    } else if (ua.search(/Android/) != -1) {
        device = "Android";
    }
    var h;
    // 端末の種類からページの高さを算出
    if (device == "Android") {
        h = Math.round(window.outerHeight / window.devicePixelRatio);
    } else if (device == "iPhone") {
        bar = (isPortrait ? 480 : screen.width) - window.innerHeight - (20 + (isPortrait ? 44 : 32));
        h = window.innerHeight + bar;
    } else {
        h = window.innerHeight;
    }
    return h;
}