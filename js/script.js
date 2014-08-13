/**
 * Store the url for the request to the hash.php
 * @type {String}
 */
var site = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + "/hash.php";

//Get

var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

var hash = params.hash;
/**
 * Makes the ajax request to the hash.php and checks if there is data in the input field
 *
 */
function doJob()
{
  $field = $('input.string-convert').val();
  $data = ($field == '' && typeof hash != 'undefined') ? hash : $field;
  $err   = $('.error-holder');

  if( $data != '')
  {
    $.get(site,{hash: $data},function(data){
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

    //Trigger via url
    (typeof hash != 'undefined') ? doJob() : false;

    //Form
    $('form').on('submit',function(){
    doJob();
    return false;
    });

    $('input.string-convert').on('keyup',function(){ doJob(); });
});