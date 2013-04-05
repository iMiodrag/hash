<?php
/**
 * Basic stuff, for a basic job :-)
 */
if( isset($_GET['hash']) && !empty($_GET['hash'])){
  $hash = urldecode($_GET['hash']);
  $data = array(
  'md5'    => md5($hash),
  'sha1'   => sha1($hash),
  'sha256' => hash('sha256',$hash),
  'sha384' => hash('sha384',$hash),
  'sha512' => hash('sha512',$hash)
  );
}else{
  $data = array('error' => 'No hash!');
}
//B00M!!
echo json_encode($data);