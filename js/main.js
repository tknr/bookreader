$(document).on("mobileinit", function(){
	console.log("mobileinit");
	$.mobile.ajaxFormsEnabled = false;
	
	$("#header").hide("fade");
	$("#footer").hide("fade");
		
    $("#image").on("swipeleft", swipeleftHandler);
    $("#image").on("swiperight", swiperightHandler);

	$('#prevpage').on("click",prevpageHandler);
	$('#nextpage').on("click",nextpageHandler);
	$('#prevpageff').on("click",prevpageffHandler);
	$('#nextpageff').on("click",nextpageffHandler);
	$('#firstpage').on("click",firstpageHandler);
	$('#lastpage').on("click",lastpageHandler);

	imageResize("#image");
});

$("#content").on('click',function(){
	$("#header").toggle("fade");
	$("#footer").toggle("fade");
});

$(window).on('resize',function () {
	console.log("resize");
	imageResize("#image");
});

$(window).on("orientationchange",function(){
	console.log("orientationchange");
	imageResize("#image");
});

function imageResize(selector){
	console.log("imageResize");
	console.log(selector);

	scrollTo(0, 0);

	var w = $(window).width();
	var h = $(window).height();

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

function getPageNumberArray(selector){
	var page_number_string = $(selector).text();
	page_number_string = page_number_string.trim();
	var page_number_array = page_number_string.split('/');
	
	console.dir(page_number_array);
	
	return page_number_array;
}

function getCurrentPageNumber(selector){
	var page_number_array = getPageNumberArray(selector);
	var page_number = page_number_array[0].trim();

	console.log(page_number);

	return parseInt(page_number);
}

function getMaxPageNumber(selector){
	var page_number_array = getPageNumberArray(selector);
	var page_number = page_number_array[page_number_array.length - 1].trim();

	console.log(page_number);

	return parseInt(page_number);
}

function changeImage(image_selector,page_number_selector,dst_page){
	console.log('changeImage');
	console.log(dst_page);
	
	var orig_src = $(image_selector).attr('src');
	console.log(orig_src);
	
	var url_obj = {};
	var orig_src_array = orig_src.split('?');
	
	console.dir(orig_src_array);
	
	var orig_param = orig_src_array[1];
	var orig_param_array = orig_param.split('&');
	
	console.dir(orig_param_array);
	
	for (var key_val of orig_param_array){
		var key_val_array = key_val.split('=');
		
		console.dir(key_val_array);
		
		url_obj[key_val_array[0]] = key_val_array[1];
	}

	console.dir(url_obj);

	if(dst_page < 0){
		dst_page = 0;
	}
	var max_page = getMaxPageNumber(page_number_selector);
	
	console.log(max_page);
	
	if (dst_page > max_page){
		dst_page = max_page;
	}
	console.log(dst_page);

	url_obj['p'] = dst_page;
	
	console.dir(url_obj);
	
	var dst_src = orig_src_array[0];
	dst_src += '?';
	dst_src += 'p=' + url_obj['p'];
	dst_src += '&f=' + url_obj['f'];
	
	console.log(dst_src);
	
	$(image_selector).attr('src',dst_src);
	$(page_number_selector).text(dst_page + ' / ' + max_page);
}

// todo on click button change image url

function goPrevPage(image_selector,page_selector){
	console.log('goPrevPage');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector,page_selector,currentPage-1);
}
function goNextPage(image_selector,page_selector){
	console.log('goNextPage');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector,page_selector,currentPage+1);
}

function goPrevPageFF(image_selector,page_selector,offset = 10){
	console.log('goPrevPageFF');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector,page_selector,currentPage-offset);
}
function goNextPageFF(image_selector,page_selector,offset = 10){
	console.log('goNextPageFF');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector,page_selector,currentPage+offset);
}

function goFirstPage(image_selector,page_selector){
	console.log('goFirstPage');
	changeImage(image_selector,page_selector,0);
}
function goLastPage(image_selector,page_selector){
	console.log('goLastPage');
	var maxPage = getMaxPageNumber(page_selector);
	changeImage(image_selector,page_selector,maxPage);
}


function swipeleftHandler( event ){
	console.log('swipeleftHandler');
	goPrevPage('#image','#page_number');
}

function swiperightHandler( event ){
	console.log('swiperightHandler');
	goNextPage('#image','#page_number');
}

function prevpageHandler( event ){
	console.log('prevpageHandler');
	goPrevPage('#image','#page_number');
	return false;
}

function nextpageHandler( event ){
	console.log('nextpageHandler');
	goNextPage('#image','#page_number');
	return false;
}

function prevpageffHandler( event ){
	console.log('prevpageffHandler');
	goPrevPageFF('#image','#page_number');
	return false;
}

function nextpageffHandler( event ){
	console.log('nextpageffHandler');
	goNextPageFF('#image','#page_number');
	return false;
}

function firstpageHandler( event ){
	console.log('firstpageHandler');
	goFirstPage('#image','#page_number');
	return false;
}

function lastpageHandler( event ){
	console.log('lastpageHandler');
	goLastPage('#image','#page_number');
	return false;
}
