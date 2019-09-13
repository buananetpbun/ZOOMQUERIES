<?php 
ob_start("ob_gzhandler"); 
?>
<?php
$url = $_GET['geturl']; 
if ($url == '' ) { 
} else { 
$url = "http://$url";                         // adds http:// to the URL in case the user forgets it... 
$url = preg_replace('[http://http://]', 'http://', $url);     // makes the form work with or without the http:// by simply removing double http://http:// 
}
$domain1 = $url;
function get_http_response_code($domain1) {
  $headers = get_headers($domain1);
  return substr($headers[0], 9, 3);
}
function get_http_response_code1($domain1) {
  $headers = get_headers($domain1);
  return substr($headers[0], 0);
}
function get_http_response_code2($domain1) {
    $headers = get_headers($domain1, 1);
     return $headers['X-Frame-Options'];
}
$get_http_response_code = get_http_response_code($domain1);
$get_http_response_code1 = get_http_response_code1($domain1);
$get_http_response_code2 = get_http_response_code2($domain1);

if ( $get_http_response_code == 200 ) {
  	if ( $get_http_response_code2 == "SAMEORIGIN" ) {
	echo "<span style='text-transform:uppercase;font-weight:bold; color:green'>HTTP/1.1 200 OK</span> [SERVER PROTECT BY X-Frame-Options: SAMEORIGIN]";
	} else if ( $get_http_response_code2 == "DENY" ) {
	echo "<span style='text-transform:uppercase;font-weight:bold; color:green'>HTTP/1.1 200 OK</span> [SERVER PROTECT BY X-Frame-Options: DENY]";
	} else {
	echo "200";
	}
} else if ( $get_http_response_code == 301 ) {
  echo "301";
} else if ( $get_http_response_code == "" ) {
  echo "SERVER NOT FOUND";
} else {
  echo $get_http_response_code1;
}
?>
