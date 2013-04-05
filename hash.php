<?php
/**
 * Basic stuff, for a basic job :-)
 */
if( isset($_GET['hash']) && !empty($_GET['hash'])){
  $data = array(
  'md5'    => md5($_GET['hash']),
  'sha1'   => sha1($_GET['hash']),
  'sha256' => hash('sha256',$_GET['hash']),
  'sha384' => hash('sha384',$_GET['hash']),
  'sha512' => hash('sha512',$_GET['hash'])
  );
}else{
  $data = array('error' => 'No hash!');
}
//B00M!!
echo json_encode($data);