$(document).on("mobileinit", function(){
	console.log("mobileinit");
	$.mobile.ajaxFormsEnabled = false;
	
	$("#header").hide("fade");
	$("#footer").hide("fade");
		
	scrollTo(0, 0);
	imageResize("#image");
	
    $("#image").on("swipeleft", swipeleftHandler);
    $("#image").on("swiperight", swiperightHandler);
});

$("#content").click(function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
});

$(window).resize(function () {
	console.log("resize");
	scrollTo(0, 0);
	imageResize("#image");
});

$(window).on("orientationchange",function(){
	console.log("orientationchange");
	scrollTo(0, 0);
	imageResize("#image");
});

function imageResize(selector){
	console.log("imageResize");
	console.log(selector);

	var w = window.innerWidth;
	var h = window.innerHeight;

	console.log(w);
	console.log(h);
	
    var image_width = $(selector).width();
    var image_height = $(selector).height();

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

function swipeleftHandler( event ){
	console.log('swipeleftHandler');
	var href = $("#nextpage").attr("href");
	console.log(href);
	location.href=href;
}

function swiperightHandler( event ){
	console.log('swiperightHandler');
	var href = $("#prevpage").attr("href");
	console.log(href);
	location.href=href;
}