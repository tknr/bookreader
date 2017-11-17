$(document).ready(function () {
	imageResize("#image");
	$("#header").hide("fade");
	$("#left").hide("fade");
	$("#right").hide("fade");
});

$(window).resize(function () {
	imageResize("#image");
});

$("#image").click(function(){
	$("#header").toggle("fade");
	$("#left").toggle("fade");
	$("#right").toggle("fade");
});

function imageResize(id){
	var w = window.innerWidth ? window.innerWidth: $(window).width();
	var h = window.innerHeight ? window.innerHeight: $(window).height();
	console.log(w);
	console.log(h);
	if (w >= h) {
        $(id).height(h);
    } else {
        $(id).width(w);
    }
}