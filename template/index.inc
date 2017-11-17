<!DOCTYPE html>
<html>
<head>
<meta charset="%CHARSET%">
<title>%TITLE%</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="stylesheet" href="//code.jquery.com/mobile/latest/jquery.mobile.min.css" />
<style>
.ui-header .ui-title, /* header */
.ui-footer .ui-title, /* footer */
.ui-btn-inner, /* button */
.ui-li-heading, /* listview heading */
.ui-li .ui-btn-text a.ui-link-inherit, /* listview link */
.ui-li-desc /* listview description */
{
    overflow: visible;
    white-space: normal;
}
</style>
</head>
<body>
	<div data-role="page" id="home">

		<div data-role="header" data-position="fixed">
		</div>

		<div data-role="content">

			<div class="content-primary main-content">
				<img src="<?=$image_url?>" border="0" alt="<?=$alt?> />
			</div>

		</div>

	</div>
	<script type="text/javascript" src="//code.jquery.com/jquery-2.1.2.min.js"></script>
	<script type="text/javascript" src="//code.jquery.com/mobile/latest/jquery.mobile.min.js"></script>
	<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.animate-enhanced/1.07/jquery.animate-enhanced.min.js"></script>
	<script type="text/javascript" src="//use.fontawesome.com/2b63a6d468.js"></script>
</body>
</html>
