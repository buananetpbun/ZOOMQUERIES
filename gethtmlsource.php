<?php 
ob_start("ob_gzhandler"); 
?>
<?
$url = $_GET['geturl']; 
if ($url == '' ) { 
} else { 
$url = "http://$url"; // adds http:// to the URL in case the user forgets it... 
$url = preg_replace('[http://http://]', 'http://', $url); // makes the form work with or without the http:// by simply removing double http://http:// 
}
/* gets the data from a URL */
function get_data($url) {
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$data = curl_exec($ch);
curl_close($ch);
return $data;
}
$returned_content = get_data($url);
echo $returned_content;
?>