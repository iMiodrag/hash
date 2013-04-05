/**
 * Store the url for the request to the hash.php
 * @type {String}
 */
var site = 'http://localhost/hash/hash.php';
/**
 * Makes the ajax request to the hash.php and checks if there is data in the input field
 * 
 */
function doJob()
{
  $field = $('input.string-convert').val();
  $err   = $('.error-holder');
  if( $field != '')
  {
    $.get(site,{hash: $field},function(data){
      if (typeof(data.error == "undefined")) {
        $.each(data,function(key,value){
          $('.'+key).html(value);
        });
      }else{
        $err.show();
      };
    },"json");
    if($err.is(':visible')) $err.hide();
  }else{
     $err.show();
  }
}
$(function(){
  $('form').on('submit',function(){
    doJob();
    return false;
  });
  $('input.string-convert').on('keyup',function(){ doJob(); });
});