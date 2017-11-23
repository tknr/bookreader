var page_offset = 10;

$(document).on("mobileinit", function() {
	console.log("mobileinit");
	$.mobile.ajaxFormsEnabled = false;

});

$(document).on("pagecreate", function() {
	console.log("pagecreate");

	imageResize("#image");

	init();
});

$img = $('#image img');
$img.originSrc = $img.src;
$img.src = ""; // これで一旦クリアできます！

// コールバックを設定
$img.bind('load', function() {
	console.log("img load");

});

// 画像読み込み開始
$img.src = $img.originSrc;

$(window).load(function() {
	console.log("load");
});

$(window).on('resize', function() {
	console.log("resize");
	imageResize("#image");
});

$(window).on("orientationchange", function() {
	console.log("orientationchange");
	imageResize("#image");
});

function init() {
	console.log("init");

	$("#header").hide("fade");
	$("#footer").hide("fade");

	$("#image").on("click", togglemenuHandler);
	$("#image").on("swipeleft", swipeleftHandler);
	$("#image").on("swiperight", swiperightHandler);

	$('#prevpage').on("click", prevpageHandler);
	$('#nextpage').on("click", nextpageHandler);
	$('#prevpageff').on("click", prevpageffHandler);
	$('#nextpageff').on("click", nextpageffHandler);
	$('#firstpage').on("click", firstpageHandler);
	$('#lastpage').on("click", lastpageHandler);
}


function togglemenuHandler(event) {
	console.log('toggleMenuHandler');
	event.preventDefault();

	$("#header").toggle("fade");
	$("#footer").toggle("fade");
}

function imageResize(selector) {
	console.log("imageResize");
	console.log(selector);

	scrollTo(0, 0);

	var w = $(window).width();
	var h = $(window).height();

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

	if (height > h) {
		height = h;
		width = image_width * (h / image_height);
	}

	console.log(width);
	console.log(height);

	$(selector).width(width);
	$(selector).height(height);
}

function getPageNumberArray(selector) {
	var page_number_string = $(selector).text();
	page_number_string = page_number_string.trim();
	var page_number_array = page_number_string.split('/');

	console.dir(page_number_array);

	return page_number_array;
}

function getCurrentPageNumber(selector) {
	var page_number_array = getPageNumberArray(selector);
	var page_number = page_number_array[0].trim();

	console.log(page_number);

	return parseInt(page_number);
}

function getMaxPageNumber(selector) {
	var page_number_array = getPageNumberArray(selector);
	var page_number = page_number_array[page_number_array.length - 1].trim();

	console.log(page_number);

	return parseInt(page_number);
}

function changeImage(image_selector, page_number_selector, bookmark_selector, dst_page) {
	console.log('changeImage');
	console.log(image_selector);
	console.log(page_number_selector);
	console.log(bookmark_selector);
	console.log(dst_page);

	var orig_src = $(image_selector).attr('src');
	console.log(orig_src);

	var orig_src_array = orig_src.split('?');

	console.dir(orig_src_array);

	var orig_param = orig_src_array[1];
	var orig_param_array = orig_param.split('&');

	console.dir(orig_param_array);

	var url_obj = {};
	for (var i = 0; i < orig_param_array.length; i++) {
		var key_val = orig_param_array[i];
		var key_val_array = key_val.split('=');
		console.dir(key_val_array);
		url_obj[key_val_array[0]] = key_val_array[1];
	}
	console.dir(url_obj);

	if (dst_page < 0) {
		dst_page = 0;
	}
	var max_page = getMaxPageNumber(page_number_selector);

	console.log(max_page);

	if (dst_page > max_page) {
		dst_page = max_page;
	}
	console.log(dst_page);

	url_obj.p = dst_page;

	console.dir(url_obj);

	var dst_url_param = '?';
	dst_url_param += 'p=' + url_obj.p;
	dst_url_param += '&f=' + url_obj.f;

	var dst_src = orig_src_array[0] + dst_url_param;

	console.log(dst_src);

	var orig_url = $(bookmark_selector).attr('href');
	console.log(orig_url);

	var orig_url_array = orig_url.split('?');

	console.dir(orig_url_array);

	var dst_url = orig_url_array[0] + dst_url_param;

	console.log(dst_url);


	$(image_selector).attr('src', dst_src);
	$(page_number_selector).text(dst_page + ' / ' + max_page);
	$(bookmark_selector).attr('href', dst_url);
}

function goPrevPage(image_selector, page_selector, bookmark_selector) {
	console.log('goPrevPage');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector, page_selector, bookmark_selector, currentPage - 1);
}

function goNextPage(image_selector, page_selector, bookmark_selector) {
	console.log('goNextPage');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector, page_selector, bookmark_selector, currentPage + 1);
}

function goPrevPageFF(image_selector, page_selector, bookmark_selector, offset) {
	console.log('goPrevPageFF');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector, page_selector, bookmark_selector, currentPage - offset);
}

function goNextPageFF(image_selector, page_selector, bookmark_selector, offset) {
	console.log('goNextPageFF');
	var currentPage = getCurrentPageNumber(page_selector);
	changeImage(image_selector, page_selector, bookmark_selector, currentPage + offset);
}

function goFirstPage(image_selector, page_selector, bookmark_selector) {
	console.log('goFirstPage');
	changeImage(image_selector, page_selector, bookmark_selector, 0);
}

function goLastPage(image_selector, page_selector, bookmark_selector) {
	console.log('goLastPage');
	var maxPage = getMaxPageNumber(page_selector);
	changeImage(image_selector, page_selector, bookmark_selector, maxPage);
}


function swipeleftHandler(event) {
	console.log('swipeleftHandler');
	event.preventDefault();
	goPrevPage('#image', '#page_number', "#bookmark");
}

function swiperightHandler(event) {
	console.log('swiperightHandler');
	event.preventDefault();
	goNextPage('#image', '#page_number', "#bookmark");
}

function prevpageHandler(event) {
	console.log('prevpageHandler');
	event.preventDefault();
	goPrevPage('#image', '#page_number', "#bookmark");
}

function nextpageHandler(event) {
	console.log('nextpageHandler');
	event.preventDefault();
	goNextPage('#image', '#page_number', "#bookmark");
}

function prevpageffHandler(event) {
	console.log('prevpageffHandler');
	event.preventDefault();
	goPrevPageFF('#image', '#page_number', "#bookmark", page_offset);
}

function nextpageffHandler(event) {
	console.log('nextpageffHandler');
	event.preventDefault();
	goNextPageFF('#image', '#page_number', "#bookmark", page_offset);
}

function firstpageHandler(event) {
	console.log('firstpageHandler');
	event.preventDefault();
	goFirstPage('#image', '#page_number', "#bookmark");
}

function lastpageHandler(event) {
	console.log('lastpageHandler');
	event.preventDefault();
	goLastPage('#image', '#page_number', "#bookmark");
}