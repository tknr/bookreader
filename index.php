<?php
// ///////init//////////
setlocale(LC_ALL,'ja_JP.UTF-8');
date_default_timezone_set('Asia/Tokyo');
require_once __DIR__ . '/lib/ReflexiveLoader.inc';
$loader = new ReflexiveLoader();
$loader->registerDir(__DIR__ . '/lib');
// ///////request////////////////
$archive = HttpUtil::get("f");
$page = HttpUtil::getInt("p", 0);
?>
////////////////
$book = new Book($archive);
