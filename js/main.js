$(document).on("mobileinit", function(){
	console.log("mobileinit");
	$.mobile.ajaxFormsEnabled = false;
	
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
	imageResize("#image img");
});

$(window).on("orientationchange",function(){
	imageResize("#image img");
});

function imageResize(selector){
	scrollTo(0, 0);
	var w = window.innerWidth;
	var h = window.innerHeight;

	console.log(w);
	console.log(h);
	
    var img = new Image();
    img.src = $(selector).attr('src');
    var image_width = img.width;
    var image_height = img.height;

	console.log(image_width);
	console.log(image_height);
	
	var width = w;
	var height = image_height * (w / image_width);
	
	if( height > h ){
		height = h;
		width = image_width * (h / image_height);
	}
	
	console.log(width);
	console.log(height);
	
	$(selector).width(width);
    $(selector).height(height);
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