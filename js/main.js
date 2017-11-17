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
	var h = $(window).innerHeight();
	console.log(h);
	$(id).height(h);
}