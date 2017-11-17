<!DOCTYPE html>
<html>
<head>
<meta charset="%CHARSET%">
<title>%TITLE%</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="stylesheet" href="css/minireset.min.css" />
<link rel="stylesheet" href="css/main.css" />
</head>
<body>

	<div id="header">
		<a><?=$page?> / <?=$maxpage?></a><br />
		<a><?=$disp_filename?></a>
	</div>


	<div id="content">
		<img id="image" src="<?=$image_url?>" border="0" alt="<?=$alt?>" />
	</div>


	<div id="footer">
		<div id="left">
			<a href="<?=$nextpage_url?>"><i id="font-xx-large" class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;next</a>
			&nbsp;
			<a href="<?=$nextpageff_url?>"><i id="font-xx-large" class="fa fa-angle-double-left" aria-hidden="true"></i>&nbsp;%PAGE_FF_OFFSET%</a>
			&nbsp;
			<a href="<?=$lastpage_url?>"><i id="font-xx-large" class="fa fa-caret-left" aria-hidden="true"></i>&nbsp;last</a>
		</div>
		<div id="right">
			<a href="<?=$firstpage_url?>">first&nbsp;<i id="font-xx-large" class="fa fa-caret-right" aria-hidden="true"></i></a>
			&nbsp;
			<a href="<?=$prevpageff_url?>">%PAGE_FF_OFFSET%&nbsp;<i id="font-xx-large" class="fa fa-angle-double-right" aria-hidden="true"></i></a>
			&nbsp;
			<a href="<?=$prevpage_url?>">prev&nbsp;<i id="font-xx-large" class="fa fa-angle-right" aria-hidden="true"></i></a>
		</div>
	</div>

	<script type="text/javascript" src="//code.jquery.com/jquery-3.2.1.min.js"
			integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			crossorigin="anonymous"></script>
	<script type="text/javascript" src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="//use.fontawesome.com/2b63a6d468.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>
