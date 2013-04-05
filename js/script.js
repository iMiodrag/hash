/**
 * Store the url for the request to the hash.php
 * @type {String}
 */
var site = 'http://hash.imiodrag.com/hash.php';

$(function(){
  $field = $('input.string-convert').val();
  if( $field != '')
  {
    $.get(site,{hash: $field},function(data){
      if (typeof(data.error != "undefined")) {
        $answer = '<table class="table table-hover"><tbody></tbody></table>
        ';
      }else{
        throwError();
      };
    },"json");
  }else{
     throwError();
  }
});