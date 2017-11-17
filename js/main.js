$(document).ready(function () {
	imageResize("#image");
	$("#header").slideUp();
});

$(window).resize(function () {
	imageResize("#image");
});

$("#image").click(function(){
	$("#header").slideToggle();
});

function imageResize(id){
	var wsize = $(window).width();
	var hsize = $(window).height();
	
	var imgWidth = $('.sample img').width();
	var imgHeight = $('.sample img').height();
	var aspectRatio = imgWidth / imgHeight;
	
	if (hsize < imgHeight){
		$(id).css("height", hsize + "px");
		return;
	}
	
	if (wsize < imgWidth){
		$(id).css("width", wsize + "px");
		return;
	}
}