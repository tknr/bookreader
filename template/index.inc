<!DOCTYPE html>
<html>
<head>
<meta charset="%CHARSET%">
<title>%TITLE%</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
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
			<img id="image" border="0" src="<?=$image_url?>" alt="<?=$alt?>" />
		</div>


		<div id="footer" data-position="fixed">
			<div data-role="controlgroup" data-type="horizontal">
				<a data-role="button" data-inline="true" id="nextpage"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;next</a>
				<a data-role="button" data-inline="true" id="bookmark" data-ajax="false" href="%SELF%?f=<?=$filename?>&p=<?=$page?>"><i class="fa fa-bookmark" aria-hidden="true"></i>&nbsp;bookmark</a>
				<a data-role="button" data-inline="true" id="page_number"><?=$page?> / <?=$maxpage?></a>
				<a data-role="button" data-inline="true" id="prevpage">prev&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a>
			</div>
			<div data-role="controlgroup" data-type="horizontal">
				<a data-role="button" data-inline="true" id="nextpageff"><i class="fa fa-angle-double-left" aria-hidden="true"></i>&nbsp;%PAGE_FF_OFFSET%</a>
				<a data-role="button" data-inline="true" id="lastpage"><i class="fa fa-caret-left" aria-hidden="true"></i>&nbsp;last</a>
				<a data-role="button" data-inline="true" id="firstpage">first&nbsp;<i class="fa fa-caret-right" aria-hidden="true"></i></a>
				<a data-role="button" data-inline="true" id="prevpageff">%PAGE_FF_OFFSET%&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
			</div>
		</div>
		
	</div>

	<script type="text/javascript" src="js/console.ie.js"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="//use.fontawesome.com/2b63a6d468.js"></script>
	<script type="text/javascript" src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>
