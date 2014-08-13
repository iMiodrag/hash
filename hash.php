<?php
/**
 * Basic stuff, for a basic job :-)
 * v0.1
 */
if( isset($_GET['hash']) && !empty($_GET['hash'])){
  $hash = urldecode($_GET['hash']);
  $data = array(
  'md5'    => md5($hash).' ('.strlen(md5($hash)).' string length)',
  'sha1'   => sha1($hash) .' ('.strlen(sha1($hash)).' string length)',
  'sha256' => hash('sha256',$hash).' ('.strlen(hash('sha256',$hash)).' string length)',
  'sha384' => hash('sha384',$hash).' ('.strlen(hash('sha384',$hash)).' string length)',
  'sha512' => hash('sha512',$hash).' ('.strlen(hash('sha512',$hash)).' string length)'
  );
}else{
  $data = array('error' => 'No hash!');
}
//B00M!!
echo json_encode($data);