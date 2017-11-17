$(document).ready(function () {
	imageResize("#content");
	imageResize("#image");
	$("#header").hide("fade");
	$("#footer").hide("fade");
});

$(window).resize(function () {
	imageResize("#content");
	imageResize("#image");
});

$("#content").click(function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
});

function imageResize(id){
	var h = $(window).height()
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		h = ((h * 70) / 100);
	}
	console.log(h);
	$(id).height(h);
}