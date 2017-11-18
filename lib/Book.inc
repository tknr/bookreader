<?php

class Book
{
	private $archive_ext_array = array();
	private $picture_ext_array = array();

	private $archive_filename = null;
	private $disp_archive_filename = null;
	private $files = array();
	private $im_string_array = array();
	private $zip = null;
	private $rar = null;
	private $min_page = 0;
	private $max_page = 0;

	function __construct($archive_filename) {
		$this->archive_filename = $archive_filename;
		$this->init();
	}

	private function init(){
		$this->archive_ext_array = array('zip','rar');
		$this->picture_ext_array = array('jpg','png','gif');

		if (! file_exists($this->archive_filename)){
			throw new \Exception("file not exist:[".$this->archive_filename."]");
		}
		{
			$arr = explode(DIRECTORY_SEPARATOR, $this->archive_filename);
			$this->disp_archive_filename = array_pop($arr);
		}

		{
			$arr = explode('.', $this->archive_filename);
			$ext = strtolower(array_pop($arr));
			if ( !in_array($ext,$this->archive_ext_array) ){
				throw new \Exception("not archive:[".$this->archive_filename."]");
			}
		}

		$this->zip = new \ZipArchive;
		if (!$this->zip->open($this->archive_filename)) {
			throw new \Exception("zip open error:[".$this->archive_filename."]");
		}

		$apc_files = APCUtil::get('Zip::'.$this->archive_filename.'::files');
		$apc_im_string_array = APCUtil::get('Zip::'.$this->archive_filename.'::im_string_array');

		if ($apc_files === false || $apc_im_string_array === false){
			$filearr = array();
			for($i = 0; $i < $this->zip->numFiles;$i++){
				$filename = $this->zip->getNameIndex($i);
				$arr = explode('.', $filename);
				$ext = strtolower(array_pop($arr));
				if ( in_array($ext,$this->picture_ext_array) ){
					$filearr[] = $filename;
					$im_string = $this->zip->getFromName($filename);
					$this->im_string_array[$filename] = $im_string;
				}
			}
			sort($filearr);
			$this->files = $filearr;
			APCUtil::put('Zip::'.$this->archive_filename.'::files',serialize($this->files),APC_TTL);
			APCUtil::put('Zip::'.$this->archive_filename.'::im_string_array',serialize($this->im_string_array),APC_TTL);
		}else{
			$this->files = unserialize($apc_files);
			$this->im_string_array = unserialize($apc_im_string_arrays);
		}
		
		$this->min_page = 0;
		$this->max_page = count($this->files) -1;
	}

	public function getArchiveFilename(){
		return $this->archive_filename;
	}
	
	public function getDispArchiveFilename(){
		return $this->disp_archive_filename;
	}

	public function getFiles(){
		return $this->files;
	}

	public function getMinPage(){
		return $this->min_page;
	}

	public function getMaxPage(){
		return $this->max_page;
	}

	public function hasPrevPage($page){
		return ( $page > $this->getMinPage() );
	}

	public function hasNextPage($page){
		return ($page < $this->getMaxPage() );
	}

	public function getPrevPage($page){
		if(!$this->hasPrevPage($page)){
			return $this->getMinPage();
		}
		return $page -1;
	}

	public function getNextPage($page){
		if(!$this->hasNextPage($page)){
			return $this->getMaxPage();
		}
		return $page +1;
	}

	public function getPrevPageFF($page,$offset=10){
		if($page - $offset < $this->getMinPage()){
			return $this->getMinPage();
		}
		return $page - $offset;
	}

	public function getNextPageFF($page,$offset=10){
		if($page + $offset > $this->getMaxPage()){
			return $this->getMaxPage();
		}
		return $page +$offset;
	}

	public function getFilename($page){
		if ($page < $this->min_page || $page > $this->max_page){
			throw new \Exception("index error:[".$page."/".$this->max_page."]");
		}

		$filename = $this->files[$page];
		return $filename;
	}
	public function getIMString($page){
		$filename = $this->getFilename($page);
		$im_string = $this->im_string_array[$filename];
		return $im_string;
	}

	public function printPicture($page){
		$filename = APCUtil::get('Zip::'.$this->archive_filename.'::page'.$page.'::filename');
		if ($filename === false){
			$filename = $this->getFilename($page);
			APCUtil::put('Zip::'.$this->archive_filename.'::page'.$page.'::filename',$filename,APC_TTL);
		}
		$im_string = APCUtil::get('Zip::'.$this->archive_filename.'::page'.$page.'::im_string');
		if ($im_string === false){
			$im_string = $this->getIMString($page);
			APCUtil::put('Zip::'.$this->archive_filename.'::page'.$page.'::im_string',$im_string,APC_TTL);
		}

		$im = imagecreatefromstring($im_string);

		$arr = explode('.', $filename);
		$ext = strtolower(array_pop($arr));

		switch ($ext){
			case 'jpg':{
				header('Content-Type: image/jpeg');
				imagejpeg($im);
				break;
			}
			case 'png':{
				header('Content-Type: image/png');
				imagepng($im);
				break;
			}
			case 'gif':{
				header('Content-Type: image/gif');
				imagegif($im);
				break;
			}
			default:{
				break;
			}
		}
		imagedestroy($im);
	}
}
?>
