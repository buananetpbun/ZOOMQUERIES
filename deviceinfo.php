<?php 
ob_start("ob_gzhandler"); 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
	<!--[if lt IE 9]>
	<script type='text/javascript' src='http://html5shim.googlecode.com/svn/trunk/html5.js'>
	</script>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js">
	</script>
	<![endif]-->
  <script src="jquery.min.js" type="text/javascript">
  </script>
  <script type="text/javascript">
    $(window).resize(function(){
      $('#width').text($(window).width() + 'PX');
      $('#height').text($(window).height() + 'PX');
    });
    $(window).load(function(){
      $('#width').text($(window).width() + 'PX');
      $('#height').text($(window).height() + 'PX');
    });
  </script>
  <title>
    Welcome To ZoomQueries Beta 1.0 
  </title>
  <meta name="robots" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;">
  <style type="text/css">
    html, body{
      opacity:.9;
      margin: 0;
      height: 100%;
      font-family:Helvetica,Arial,sans-serif;
      color: #000;
      background: url(square.png);
      font-weight:bold;
    }#sqLogBoard{
      padding: 20px;
      text-transform: uppercase;
    }.success{
      color: #000;
    }@media only screen and (max-width:3000px){
      body{
        background:#F1C40F;
      }#breakpoint:after{
        content: "CUSTOM SCREEN";
      }}
    @media only screen and (max-width: 1216px){
      body{
        background: #D14836;
      }#breakpoint:after{
        content: "Desktop";
      }}
    @media only screen and (max-width: 1024px){
      body{
        background: #99CC00;
      }#breakpoint:after{
        content: "Wide Tablet";
      }}
    @media only screen and (max-width:768px){
      body{
        background: #770DB7;
      }#breakpoint:after{
        content: "Tablet";
      }}
    @media only screen and (max-width:480px){
      body{
        background: #54A743;
      }#breakpoint:after{
        content: "Wide Phone";
      }}
    @media only screen and (max-width:320px){
      body{
        background: #FF9900;
      }#breakpoint:after{
        content: "Phone";
      }}
    @media only screen and (max-width:240px){
      body{
        background:#3284D6 ;
      }#breakpoint:after{
        content: "Small Phone";
      }}
    @media (orientation: portrait){
      #orientation:before{
        content: "portrait";
      }}
    @media (orientation: landscape){
      #orientation:before{
        content: "landscape";
      }}
  </style>
  </head>
  <body>
    <div id="sqLogBoard">
      <br/>
      <span style="font-size: 17px;font-weight:bold;line-height: 20px;display: inline-block;">
        ==================
      </br>
      Device Reporter:
    </br>
    ==================
  </span>
</span>
<br/>
<br/>
<span style="font-size: 12px">
  <span style="font-size: 12px">
    Device Size Width: 
    <span id="width" style="color:#fff">
    </span>
  </span>
  <br/>
  <span style="font-size: 12px;">
    Device Size Height: 
    <span id="height" style="color:#fff">
    </span>
  </span>
</span>
<br/>
<span style="font-size: 12px">
  CURRENT BREAKPOINT: 
  <span id="breakpoint" style="color:#fff">
  </span>
</span>
<br/>
<span style="font-size: 12px">
  ORIENTATION: 
  <span id="oriontation1" style="color:#fff">
    <span id="orientation">
    </span>
  </span>
</span>
<br/>
<span style="font-size: 12px">
  USER AGENT: 
  <span id="useragent" style="color:#fff">
    <script>
      document.write(navigator.userAgent);
    </script>
  </span>
</span>
<br/>
</div>
</body>
</html>