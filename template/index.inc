<!DOCTYPE html>
<html>
<head>
<meta charset="%CHARSET%">
<title>%TITLE%</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="stylesheet" href="css/minireset.min.css" />
<link rel="stylesheet" href="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<link rel="stylesheet" href="css/main.css" />
</head>
<body>
	<div data-role="page" id="home">
		<div id="header" data-position="fixed">
			<a data-role="button"><?=$disp_filename?></a>
		</div>


		<div id="content">
			<img id="image" <?php /*width="<?=$image_width?>" height="<?=$image_height?>"*/?>border="0" src="<?=$image_url?>" alt="<?=$alt?>" />
		</div>


		<div id="footer" data-position="fixed">
			<div data-role="controlgroup" data-type="horizontal">
				<a data-role="button" data-inline="true" data-ajax="false" id="nextpage" href="<?=$nextpage_url?>"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;next</a>
				<a data-role="button" data-inline="true" id="page_number"><?=$page?> / <?=$maxpage?></a>
				<a data-role="button" data-inline="true" data-ajax="false" id="prevpage" href="<?=$prevpage_url?>">prev&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a>
			</div>
			<div data-role="controlgroup" data-type="horizontal">
				<a data-role="button" data-inline="true" data-ajax="false" id="nextpageff" href="<?=$nextpageff_url?>"><i class="fa fa-angle-double-left" aria-hidden="true"></i>&nbsp;%PAGE_FF_OFFSET%</a>
				<a data-role="button" data-inline="true" data-ajax="false" id="lastpage" href="<?=$lastpage_url?>"><i class="fa fa-caret-left" aria-hidden="true"></i>&nbsp;last</a>
				<a data-role="button" data-inline="true" data-ajax="false" id="firstpage" href="<?=$firstpage_url?>">first&nbsp;<i class="fa fa-caret-right" aria-hidden="true"></i></a>
				<a data-role="button" data-inline="true" data-ajax="false" id="prevpageff" href="<?=$prevpageff_url?>">%PAGE_FF_OFFSET%&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
			</div>
		</div>
		
	</div>

	<script type="text/javascript" src="js/console.ie.js"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="//use.fontawesome.com/2b63a6d468.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</body>
</html>
