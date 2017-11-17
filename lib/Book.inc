<?php

class Book
{
	private $archive_ext_array = array();
	private $picture_ext_array = array();

	private $archive_filename = null;
	private $files = array();
	private $zip = null;
	private $rar = null;
	private $min_page = 0;
	private $max_page = 0;

	function __construct($archive_filename) {
		error_log($archive_filename);

		$this->archive_filename = $archive_filename;
		$this->init();
	}

	private function init(){
		$this->archive_ext_array = array('zip','rar');
		$this->picture_ext_array = array('jpg','png','gif');


		$arr = explode('.', $this->archive_filename);
		$ext = strtolower(array_pop($arr));
		if ( !in_array($ext,$this->archive_ext_array) ){
			throw new \Exception("not archive:[".$this->archive_filename."]");
		}
		$this->zip = new \ZipArchive;
		if (!$this->zip->open($this->archive_filename)) {
			throw new \Exception("zip open error:[".$this->archive_filename."]");
		}

		$filearr=array();
		for($i = 0; $i < $this->zip->numFiles;$i++){
			$name = $this->zip->getNameIndex($i);
			$arr = explode('.', $name);
			$ext = strtolower(array_pop($arr));
			if ( in_array($ext,$this->picture_ext_array) ){
				$filearr[] = $name;
			}
		}
		sort($filearr);

		$this->files = $filearr;
		$this->min_page = 0;
		$this->max_page = count($filearr) -1;
	}

	public function getArchiveFilename(){
		return $this->archive_filename;
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

	public function getFilename($page){
		if ($page < $this->min_page || $page > $this->max_page){
			throw new \Exception("index error:[".$page."/".$this->max_page."]");
		}

		$filename = $this->files[$page];
		return $filename;
	}
	public function getIMString($page){
		$filename = $this->getFilename($page);
		$im_string = $this->zip->getFromName($filename);
		return $im_string;
	}

	public function printPicture($page){
		$filename = $this->getFilename($page);
		$im_string = $this->getIMString($page);

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
