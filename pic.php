<?php
// ///////init//////////
setlocale(LC_ALL,'ja_JP.UTF-8');
date_default_timezone_set('Asia/Tokyo');
require_once __DIR__ . '/lib/ReflexiveLoader.inc';
$loader = new ReflexiveLoader();
$loader->registerDir(__DIR__ . '/lib');
// ///////define//////////
$define = array();
{
    $define['SCRIPT_TITLE'] = 'bookreader_pic'; // Page title
    $self = array_reverse(explode("/", $_SERVER["SCRIPT_NAME"]));
    $define['SELF_PHP'] = $self[0];
    $define['SCRIPT_PATH'] = rtrim($_SERVER["SCRIPT_NAME"], $define['SELF_PHP']);
    $define['CHARSET'] = 'UTF-8'; // Shift_JIS
    $define['APC_TTL'] = 60 * 60 * 0.5;
}
// config
{
	$define['HOME_DIR'] = '/home/tknr/';
}
APCUtil::define_array($define['SCRIPT_TITLE'], $define,false);
// ///////request////////////////
$filename = HttpUtil::get("f");
$archive = HOME_DIR.$filename;
$page = HttpUtil::getInt("p", 0);
////////////////
$book = new Book($archive);
$book->printPicture($page);
?>
