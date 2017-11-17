$(document).ready(function () {
	imageResize("#image");
	$("#header").hide("fade");
	$("#footer").hide("fade");
});

$(window).resize(function () {
	imageResize("#image");
});

$("#content").click(function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
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