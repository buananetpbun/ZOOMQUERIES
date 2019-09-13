<?php 
ob_start("ob_gzhandler"); 
?>
<?
$url = $_GET['geturl']; 
if ($url == '' ) { 
} else { 
$url = "http://$url"; // adds http:// to the URL in case the user forgets it... 
$url = preg_replace('[http://http://]', '', $url); // makes the form work with or without the http:// by simply removing double http://http:// 
}

$url = rtrim ($url, '/'); 

$file_data = date("d.m.y") . " <span onclick=window.location='http://zoomqueries.com?url=http://" . $url . "';>http://" . $url . "</span>\n";
$file_data .= file_get_contents('log.txt');

if(preg_match("/\b$url\b/i", file_get_contents('log.txt'))) {
} else {

file_put_contents('log.txt', $file_data);
}


?>

