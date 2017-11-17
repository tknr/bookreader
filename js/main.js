$(document).ready(function () {
	hsize = $(window).height();
	$("#image").css("height", hsize + "px");
	$("#header").slideUp();
});
$(window).resize(function () {
	hsize = $(window).height();
	$("#image").css("height", hsize + "px");
});
$("#image").click(function(){
	$("#header").slideToggle();
});