<?php
	// ///////init//////////
	ini_set('memory_limit','-1');
	setlocale(LC_ALL,'ja_JP.UTF-8');
	date_default_timezone_set('Asia/Tokyo');
	require_once __DIR__.'/lib/ReflexiveLoader.inc';
	$loader=new ReflexiveLoader();
	$loader->registerDir(__DIR__.'/lib');
	// ///////define//////////
	$define=array();
	{
		$define['SCRIPT_TITLE']='bookreader';
		// Page title
		$self=array_reverse(explode("/",$_SERVER["SCRIPT_NAME"]));
		$define['SELF_PHP']=$self[0];
		$define['SCRIPT_PATH']=rtrim($_SERVER["SCRIPT_NAME"],$define['SELF_PHP']);
		$define['CHARSET']='UTF-8';
		// Shift_JIS
		$define['TEMPLATE_FOLDER']=__DIR__.'/template/';
	}
	// config
	{
		$define['APC_TTL']=60*60*0.5;
		$define['HOME_DIR']='/home/tknr/';
		$define['PAGE_FF_OFFSET']=10;
	}
	APCUtil::define_array($define['SCRIPT_TITLE'],$define,false);
	// ///////request////////////////
	$filename=HttpUtil::get("f");
	$archive=HOME_DIR.$filename;
	$page=HttpUtil::getInt("p",0);
	////////// book
	$book=new Book($archive);
	$im=$book->getImageObject($page);
	// render
	$template=new EZTemplate(TEMPLATE_FOLDER.'index.inc');
	$template->setValue('filename',$filename);
	$template->setValue('disp_filename',$book->getDispArchiveFilename());
	$template->setValue('page',$page);
	$template->setValue('minpage',$book->getMinPage());
	$template->setValue('maxpage',$book->getMaxPage());
	$template->setValue('prevpage_url','?p='.$book->getPrevPage($page).'&f='.$filename);
	$template->setValue('nextpage_url','?p='.$book->getNextPage($page).'&f='.$filename);
	$template->setValue('prevpageff_url','?p='.$book->getPrevPageFF($page,PAGE_FF_OFFSET).'&f='.$filename);
	$template->setValue('nextpageff_url','?p='.$book->getNextPageFF($page,PAGE_FF_OFFSET).'&f='.$filename);
	$template->setValue('firstpage_url','?p='.$book->getMinPage().'&f='.$filename);
	$template->setValue('lastpage_url','?p='.$book->getMaxPage().'&f='.$filename);
	$template->setvalue('image_url','pic.php?p='.$page.'&f='.$filename);
	$template->setvalue('image_width',imagesx($im));
	$template->setvalue('image_height',imagesy($im));
	$template->setvalue('alt',$book->getFilename($page));
	$template->setReplace('%CHARSET%',CHARSET);
	$template->setReplace('%TITLE%',SCRIPT_TITLE.':'.$book->getDispArchiveFilename());
	$template->setReplace('%SELF%',SELF_PHP);
	$template->setReplace('%PAGE_FF_OFFSET%',PAGE_FF_OFFSET);
	return $template->render();
?>