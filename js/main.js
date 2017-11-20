$(document).on("mobileinit", function(){
	console.log("mobileinit");
	$.mobile.ajaxFormsEnabled = false;
	
	$("#header").hide("fade");
	$("#footer").hide("fade");
	
	imageResize("#image");
});

$("#content").click(function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
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