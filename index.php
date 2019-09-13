<?
$url = $_GET['url']; 
$get_nm = $_GET['nm']; 
$get_pr = $_GET['pr']; 
$get_wt = $_GET['wt']; 
$get_ht = $_GET['ht']; 
$get_sc = $_GET['sc']; 
if ($url == '' ) { 
$url = "deviceinfo.php";  
} else { 
$url = "http://$url";  // adds http:// to the URL in case the user forgets it... 
$url = preg_replace('[http://http://]', 'http://', $url); // makes the form work with or without the http:// by simply removing double http://http:// 
}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>ZoomQueries - Responsive Web Design Testing Tool Plus HTML Online Editor
        </title>
        <meta content="ZoomQueries is a professional tool for testing your Responsive Web Design (RWD) with HTML Online Editor, Customize CSS Pixel Ratio, Physical Resolution, Logical Resolution, Retina Device and Viewport" name="description">
        <meta content="responsive web design testing tool, responsive web design tester, test responsive design, responsive design test, responsive test, responsive tester, zoom queries, media queries, Viewpoert, rwd testing tool" name="keywords">
        <meta content='index, follow, noodp' name='robots'>
        <meta content="jYFkd_jjL9RLJaQLskURJbxMySeTpbE0yLerinViGPA" name="google-site-verification">

        <link href="http://zoomqueries.com/favicon.ico" rel="shortcut icon">

        <link type="text/css" rel="stylesheet" href="jquery-ui.css" />
        <script type="text/javascript" src="jquery.min.js">
        </script>
        <script type="text/javascript" src="jquery-ui.js">
        </script>
        <script src="smoke.min.js" type="text/javascript">
        </script>
        <script src="smoke.js" type="text/javascript">
        </script>
        <script type="text/javascript" src="jquery.fullscreen-min.js">
        </script>

        <link rel="stylesheet" type="text/css" href="zoomqueries-beta1.0.css" />
        <script type="text/javascript" src="zoomqueries-beta1.0.js">
        </script>
        <script>
            var $urlbookmark = '<? echo $url ?>';
            var $urlbookmark_nm = '<? echo $get_nm ?>';
            var $urlbookmark_pr = '<? echo $get_pr ?>';
            var $urlbookmark_wt = '<? echo $get_wt ?>';
            var $urlbookmark_ht = '<? echo $get_ht ?>';
            var $urlbookmark_sc = '<? echo $get_sc ?>';
        </script>
    </head>

    <body>

        <div id="WrapLockScreen">
        </div>

        <div id="header">

            <div id="main-bar">

                <div id="logo">

                    <div id="logozq">
                    </div>
                </div>

                <div id="optionTAB">

                    <div id="SimpleModeTAB">SIMPLE MODE
                    </div>

                    <div id="CustomModeTAB">DEVICE MODE
                    </div>
                </div>

                <span class="linebreak2">
</span>

                <div class="http-input">URL:
                    <input rel="tooltip" data-original-title="Enter your URL here, can use Http://or include http://www" data-placement="bottom" class="addiconinput" type="text" onblur='if (this.value=="") {this.value="http://or localhost";}' onfocus='if (this.value=="http://or localhost") {this.value=""}' value='http://or localhost' size="20" name="url" id="url" />
                    <button rel="tooltip" data-original-title="Test now!" data-placement="bottom" id="GetUrl-BTN">

                        <span class="geturl-img">
</span></button>
                    <button rel="tooltip" data-original-title="Reload" data-placement="bottom" id="Reload-BTN">

                        <span class="reload-img">
</span></button>
                    <button rel="tooltip" data-original-title="Show HTML editor" data-placement="bottom" id="HtmlArea-BTN">HTML</button>
                    <button rel="tooltip" data-original-title="Share your link" data-placement="bottom" id="share-BTN">

                        <span class="share-BTN-img">
</span></button>
                    <button rel="tooltip" data-original-title="Show this tool as FullScreen" data-placement="bottom" id="fullscreen-BTN">

                        <span class="fullscreen-BTN-img">
</span></button>

                    <span class="linebreak">
</span>
                </div>

                <div id="lockedDIV">
                </div>

                <div class="custom-viewport"> CSS PIXEL RATIO:
                    <input rel="tooltip" data-original-title="Edit CSS Pixel Ratio" data-placement="bottom" id="Custom-PixelRatio" type="text" /> RESOLUTION:
                    <input rel="tooltip" data-original-title="Edit Device Width(X)" data-placement="bottom" id="CustomW-Input" type="text" /> X
                    <input rel="tooltip" data-original-title="Edit Device Height(Y)" data-placement="bottom" id="CustomH-Input" type="text" />
                    <button rel="tooltip" data-original-title="Device Rotate" data-placement="bottom" id="RotateBTN">

                        <span class="rotate-img">Rotate
</span></button>

                    <span class="linebreak">
</span>
                </div>

                <div id="InfoDev-ORT">

                    <span id="DeviceOrientation">ORIENTATION: 

<span id="mode" class="size-value">LOCKED
</span>
                    </span>
                </div>

                <div id="device">
                    <button id="DevMobileBTN">DEVICE VIEWPORT</button>
                </div>
            </div>

            <div id='custom-viewport-stripes'>

                <span rel="tooltip" data-original-title="Small Phone Area (240px)" data-placement="bottom" class='custom-viewport-stripe SizePV240'> 

<span id="VPort240">Small Phone
</span>
                </span>

                <span rel="tooltip" data-original-title="Phone Area (320px)" data-placement="bottom" class='custom-viewport-stripe SizePV320'> 

<span id="VPort320">Phone
</span>
                </span>

                <span rel="tooltip" data-original-title="Wide Phone Area (480px)" data-placement="bottom" class='custom-viewport-stripe SizePV480'> 

<span id="VPort480">Wide Phone
</span>
                </span>

                <span rel="tooltip" data-original-title="Tablet Area (768px)" data-placement="bottom" class='custom-viewport-stripe SizePV768'> 

<span id="VPort768">Tablet
</span>
                </span>

                <span rel="tooltip" data-original-title="Wide Tablet Area (1024px)" data-placement="bottom" class='custom-viewport-stripe SizePV1024'> 

<span id="VPort1024">Wide Tablet
</span>
                </span>

                <span rel="tooltip" data-original-title="Desktop Area (1216px)" data-placement="bottom" class='custom-viewport-stripe SizePV1216'> 

<span id="VPort1216">Desktop 
</span>
                </span>

                <span rel="tooltip" data-original-title="Lock Browser/Full Screen (manual resize with window Browser" data-placement="left" class='custom-viewport-stripe SizeLockScreen'> 

<span id="VPortLockScreen">Lock Browser
</span>
                </span>
            </div>
        </div>

        <div id="DeviceMenu">

            <div id="MobileM">
                <ul id="DevListMobile">
                    <li class="DevListNoClick">APPLE</li>
                    <li data-device="iPhone 3/3GS" data-width="320" data-height="480" data-pixelratio="1" data-retina="?" data-aspectratio="3:2"><a onClick="return false;" href="#"><b>iPhone</b> 3/3GS (320x480)</a></li>
                    <li data-device="iPhone 4/4S" data-width="640" data-height="960" data-pixelratio="2" data-retina="?" data-aspectratio="3:2"><a onClick="return false;" href="#"><b>iPhone</b> 4/4S (640x960)</a></li>
                    <li data-device="iPhone 5" data-width="640" data-height="1136" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>iPhone</b> 5 (640x1136)</a></li>
                    <li data-device="iPad 3/4" data-width="1536" data-height="2048" data-pixelratio="2" data-retina="?" data-aspectratio="4:3"><a onClick="return false;" href="#"><b>iPad</b> 3/4 (1536x2048)</a></li>
                    <li data-device="iPad 1/2/Mini" data-width="768" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="4:3"><a onClick="return false;" href="#"><b>iPad</b> 1/2/Mini (768x1024)</a></li>
                    <li class="DevListNoClick">ACER</li>
                    <li data-device="Iconia Tab W700" data-width="1080" data-height="1920" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Iconia</b> Tab W700 (1080x1920)</a></li>
                    <li data-device="Iconia Tab A701" data-width="1200" data-height="1920" data-pixelratio="1" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Iconia</b> Tab A701 (1200x1920))</a></li>
                    <li data-device="Iconia Tab A200/A500 Series" data-width="800" data-height="1280" data-pixelratio="1" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Iconia</b> Tab A200/A500 Series (800x1280)</a></li>
                    <li data-device="Iconia Tab A110" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>Iconia</b> Tab A101 (600x1024)</a></li>
                    <li class="DevListNoClick">AMAZON</li>
                    <li data-device="Kindle Fire HD 8.9" data-width="1200" data-height="1920" data-pixelratio="1.5" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Kindle</b> Fire HD 8.9 (1200x1920)</a></li>
                    <li data-device="Kindle Fire HD 7" data-width="800" data-height="1280" data-pixelratio="1.5" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Kindle</b> Fire HD 7 (800x1024)</a></li>
                    <li data-device="Kindle Fire" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="5.12:3"><a onClick="return false;" href="#"><b>Kindle</b> Fire (600x1024)</a></li>
                    <li class="DevListNoClick">ASUS</li>
                    <li data-device="EEE Transformer Pad" data-width="800" data-height="1200" data-pixelratio="1" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>EEE</b> Transformer Pad (800x1200)</a></li>
                    <li data-device="EEE MeMO Pad" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="5.12:3"><a onClick="return false;" href="#"><b>EEE</b> MeMO Pad (600x1024)</a></li>
                    <li data-device="EEE Phonepad" data-width="800" data-height="1200" data-pixelratio="1" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>EEE</b> Phonepad (800x1200)</a></li>
                    <li data-device="ASUS Google Nexus 7" data-width="800" data-height="1280" data-pixelratio="1.325" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>Nexus</b> 7 Google (800x1280)</a></li>
                    <li class="DevListNoClick">BLACKBERRY</li>
                    <li data-device="BlackBerry Z30" data-width="768" data-height="1280" data-pixelratio="2" data-retina="YES" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>BlackBerry</b> Z30 (720x720)</a></li>
                    <li data-device="BlackBerry Q10/Q5" data-width="720" data-height="720" data-pixelratio="2" data-retina="YES" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>BlackBerry</b> Q10/Q5 (720x720)</a></li>
                    <li data-device="BlackBerry Z10" data-width="768" data-height="1280" data-pixelratio="2.24" data-retina="YES" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>BlackBerry</b> Z10 (768x1280)</a></li>
                    <li data-device="BlackBerry Bold 9930" data-width="480" data-height="640" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>BlackBerry</b> Torch (480x800)</a></li>
                    <li data-device="BlackBerry Touch 9810" data-width="480" data-height="640" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>BlackBerry</b> Touch 9810 (480x640)</a></li>
                    <li data-device="BlackBerry Touch 9850" data-width="400" data-height="800" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>BlackBerry</b> Touch 9850 (400x800)</a></li>
                    <li data-device="BlackBerry PlayBook" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>BlackBerry</b> PlayBook (600x1024)</a></li>
                    <li class="DevListNoClick">HTC</li>
                    <li data-device="Htc One/Butterfly" data-width="1080" data-height="1920" data-pixelratio="3" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Htc</b> One/Butterfly (1080x1920)</a></li>
                    <li data-device="Htc One X/X+" data-width="720" data-height="1280" data-pixelratio="3" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Htc</b> One X/X+ (720x1280)</a></li>
                    <li data-device="Htc Desire" data-width="480" data-height="800" data-pixelratio="1.5" data-retina="?" data-aspectratio="15:9"><a onClick="return false;" href="#"><b>Htc</b> Desire (480x800)</a></li>
                    <li data-device="Htc 8X" data-width="720" data-height="1280" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Htc</b> 8X (720x1280)</a></li>
                    <li class="DevListNoClick">LG</li>
                    <li data-device="LG Optimus" data-width="720" data-height="1280" data-pixelratio="1.7" data-retina="?" data-aspectratio="?"><a href="#"><b>LG</b> Optimus F7/4XHD/Spectrum (720x1280)</a></li>
                    <li data-device="LG Google Nexus 4" data-width="768" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="?"><a onClick="return false;" href="#"><b>LG</b> Nexus 4 Google (768x1280)</a></li>
                    <li data-device="LG Optimus Pad" data-width="720" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>LG</b> Nexus 4 Google (768x1280)</a></li>
                    <li class="DevListNoClick">MICROSOFT</li>
                    <li data-device="Surface PRO" data-width="1080" data-height="1920" data-pixelratio="1.5" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Surface</b> PRO (1080x1920)</a></li>
                    <li data-device="Surface RT" data-width="768" data-height="1366" data-pixelratio="1" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Surface</b> RT (768x1366)</a></li>
                    <li class="DevListNoClick">NOKIA</li>
                    <li data-device="Lumia 920" data-width="768" data-height="1280" data-pixelratio="1.5" data-retina="?" data-aspectratio="15:9"><a onClick="return false;" href="#"><b>Lumia</b> 920 (768x1280)</a></li>
                    <li data-device="Lumia 820/900" data-width="480" data-height="800" data-pixelratio="1" data-retina="?" data-aspectratio="15:9"><a onClick="return false;" href="#"><b>Lumia</b> 820/900 (480x800)</a></li>
                    <li data-device="Lumia 710/800" data-width="480" data-height="800" data-pixelratio="1.5" data-retina="?" data-aspectratio="15:9"><a onClick="return false;" href="#"><b>Lumia</b> 710/800 (480x800)</a></li>
                    <li class="DevListNoClick">SAMSUNG</li>
                    <li data-device="Galaxy S IV" data-width="1080" data-height="1920" data-pixelratio="3" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Galaxy</b> S IV (1080x1920)</a></li>
                    <li data-device="Galaxy S II" data-width="720" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Galaxy</b> S III (720x1280)</a></li>
                    <li data-device="Galaxy S II" data-width="480" data-height="800" data-pixelratio="1.5" data-retina="?" data-aspectratio="5:3"><a onClick="return false;" href="#"><b>Galaxy</b> S II (480x800)</a></li>
                    <li data-device="Galaxy Mega" data-width="720" data-height="1280" data-pixelratio="1.8" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Galaxy</b> Mega (720x1280)</a></li>
                    <li data-device="Galaxy Note 8.0/10.1" data-width="800" data-height="1280" data-pixelratio="1" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Galaxy</b> Note 8.0/10.1 (800x1280)</a></li>
                    <li data-device="Galaxy Note II" data-width="720" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Galaxy</b> Note II (720x1280)</a></li>
                    <li data-device="Galaxy Note" data-width="800" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Galaxy</b> Note (800x1280)</a></li>
                    <li data-device="Galaxy Tab 8.0/10.1" data-width="800" data-height="1280" data-pixelratio="1" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>Galaxy</b> Tab 8.0/10.1 (800x1280)</a></li>
                    <li data-device="Galaxy Tab 7.0" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="5:8"><a onClick="return false;" href="#"><b>Galaxy</b> Tab 7.0 (600x1024)</a></li>
                    <li data-device="Galaxy Tab" data-width="600" data-height="1024" data-pixelratio="1" data-retina="?" data-aspectratio="5:8"><a onClick="return false;" href="#"><b>Galaxy</b> Tab 7.7 (600x1024)</a></li>
                    <li data-device="SAMSUNG Goolge Nexus 10" data-width="1600" data-height="2560" data-pixelratio="2" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Samsung</b> Google Nexus 10 (1600x2560)</a></li>
                    <li class="DevListNoClick">SONY</li>
                    <li data-device="Xperia Z" data-width="1080" data-height="1920" data-pixelratio="3" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Xperia</b> Z (1080x1920)</a></li>
                    <li data-device="Xperia P" data-width="540" data-height="960" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Xperia</b> P (540x960)</a></li>
                    <li data-device="Xperia U" data-width="480" data-height="854" data-pixelratio="1.5" data-retina="?" data-aspectratio="16:9"><a onClick="return false;" href="#"><b>Xperia</b> U/Sola (480x854)</a></li>
                    <li data-device="Xperia S/SL" data-width="720" data-height="1280" data-pixelratio="2" data-retina="?" data-aspectratio="16:9"><a href="#"><b>Xperia</b> S/SL (720x1280)</a></li>
                    <li data-device="Xperia Tablet Z" data-width="1200" data-height="1920" data-pixelratio="1.5" data-retina="?" data-aspectratio="16:10"><a onClick="return false;" href="#"><b>Xperia</b> Tablet Z (1200x1920)</a></li>
                    <li data-device="Xperia Tablet S" data-width="800" data-height="1280" data-pixelratio="1" data-retina="?" data-aspectratio="8:5"><a onClick="return false;" href="#"><b>Xperia</b> Tablet S (800x1280)</a></li>
                </ul>
            </div>
        </div>

        <div id="block">

            <div>
                <ul id="ruler-vertical" data-items="61">
                </ul>

                <span id="rulerBOX">
</span>
                <ul id="ruler-horizontal" data-items="61">
                </ul>
            </div>

            <div id="grid-view">

                <div id="framewrap" class="borderframewrap">
                    <iframe src="deviceinfo.php" name="frame" id="frame">

                        <p>Your browser does not support iframes.</p>
                    </iframe>
                </div>
            </div>
        </div>

        <div id="dialog" title="Share This Tool">
            <br>

            <div id="btn-facebook" class="button-share facebook">Facebook
            </div>

            <div id="btn-google" class="button-share google">Google Plus
            </div>

            <div id="btn-twitter" class="button-share twitter">Twitter
            </div>
            <br>
            <br> SHARE WITH MANUAL SOURCE LINK:
            <br>
            <br> URL
            <br>
            <textarea id="ShareorEmbedURL">
            </textarea> HTML LINK:
            <br>
            <textarea id="ShareorEmbedURLHref">
            </textarea> FORUM LINK:
            <br>
            <textarea id="ShareorEmbedURLForum">
            </textarea>
        </div>

        <div class="htmleditor">

            <div style="float:right; color:#333; padding-top:4px; font-weight:bold">HTML EDITOR
            </div>

            <div class="htmlmenu"> <a onClick="return false;" href="#" id="newhtml">NEW HTML</a> <a onClick="return false;" href="#" id="tagh1">H1</a> <a onClick="return false;" href="#" id="tagh2">H2</a> <a onClick="return false;" href="#" id="tagh3">H3</a> <a onClick="return false;" href="#" id="tagh4">H4</a> <a onClick="return false;" href="#" id="tagh5">H5</a> <a onClick="return false;" href="#" id="tagh6">H6</a> <a onClick="return false;" href="#" id="tagp">P</a> <a onClick="return false;" href="#" id="tagb"><b>b</b></a> <a onClick="return false;" href="#" id="tagi"><i>i</i></a> <a onClick="return false;" href="#" id="tagu"><u>u</u></a> <a onClick="return false;" href="#" id="tagul">UL</a> <a onClick="return false;" href="#" id="tagol">OL</a> <a onClick="return false;" href="#" id="tagli">LI</a> <a onClick="return false;" href="#" id="tagdl">DL</a> <a onClick="return false;" href="#" id="tagdt">DT</a> <a onClick="return false;" href="#" id="tagdd">DD</a> <a onClick="return false;" href="#" id="tagtable">TABLE</a> <a onClick="return false;" href="#" id="tagtr">TR</a> <a onClick="return false;" href="#" id="tagtd">TD</a> <a onClick="return false;" href="#" id="taglink">LINK</a> <a onClick="return false;" href="#" id="tagimg">IMG</a> <a onClick="return false;" href="#" id="tagblockquote">BLOCKQUOTE</a> <a onClick="return false;" href="#" id="tagcode">CODE</a> <a onClick="return false;" href="#" id="tagpre">PRE</a> <a onClick="return false;" href="#" id="tagiframe">IFRAME</a> <a onClick="return false;" href="#" id="tagdiv">DIV</a> <a onClick="return false;" href="#" id="tagspan">SPAN</a> <a onClick="return false;" href="#" id="runhtml" style="background:#D14836; font-weight:bold; border:1px solid #111; margin-left:4px">PREVIEW</a>
            </div>
            <textarea id="CanvasHTML">
            </textarea>
        </div>

        <div id="WelcomeSCR"> <img src="ZOOMQUERIESLOGO.png" alt="ZoomQueries" style="float:left; margin-right:20px" />

            <span style="color:#fff; font-size:30pt; font-weight:bold">ZOOM

<span style="color:#D14836">QUERIES
</span>

            <span style="font-size:15px">BETA 1.0
</span>
            </span>
            <br>

            <span style="color:#fff; font-size:12pt; font-weight:bold">Professional Tool For Testing Your Responsive Web Design.
</span>
            <br>

            <span style="color:#fff; font-size:10pt;font-weight:normal"> 
<br> <b>ZOOMQUERIES BETA 1.0 Features:</b>
<br> * Custom Viewer Mode (Simple Mode or Device Mode)
<br> * HTTP and Localhost Support
<br> * HTML Editor (CSS and Javascript Support)
<br> * Viewport Size Info for Browser or Device
<br> * Custom Resize Handle
<br> * Support Locked for Browser Resize
<br> * Rotate Portrait or Lanscape
<br> * Device size Area for 240px, 320px, 480px, 768px, 1024px, 1216px or Full Screen 
<br> * 50+ Device Viewport Size (Mobile and Tablet)
<br> * Support Fullscreen Browser
<br> * Simple Bookmark and Share Url
<br> 
<br> <b>Browser Support:</b> Firefox, Chrome, Opera, Safari 
<br>
<br>
</span>
            <button id="GoTestRWD-BTN">BETA TESTER</button>
            <br>
            <br>

            <div style='float:left; width:70px;margin-right:3px'>
                <a class='g-plusone' data-count='true' data-size='medium' href='http://zoomqueries.com'></a>
            </div>

            <div style='float:left; width:80px;margin-right:13px'> <a class='twitter-share-button' data-count='horizontal' data-url="http://zoomqueries.com" data-text='ZoomQueries | Professional tool for testing your Responsive Web Design.' href='https://twitter.com/share'>Tweet</a>
            </div>

            <div style='float:left; width:80px;margin-right:5px'>
                <a class='fb-like' data-href='http://zoomqueries.com' data-layout='button_count' data-send='false' data-show-faces='false' data-width='1'> </a>
            </div>
            <br>
            <br>

            <span style="color:#fff; font-size:10pt;font-weight:normal"> ZoomQueries 1.0 Beta is not real device simulator, but we believe this tool approaching 90% accurate, the end result may be slightly different on each device and the best way is to try it directly on your device.
</span>
            <br>
            <br>

            <span style="color:#fff; font-size:10pt; font-weight:normal">Copyright (c) ZoomQueries 2013, Made in Indonesia (INA)
</span>
        </div>

        <div id="lastcheck"> <b>LAST CHECK URL:</b>
            <br>

            <div id="lastcheckurl">
                <?php
$file = fopen("log.txt","r");
while(! feof($file))
  {
  echo fgets($file). '
<br>';
  }
fclose($file);
?>
            </div>
        </div>

        <div id="footer">

            <div id="zq-info">

                <span id="BrowserViewport">BROWSER VIEWPORT: 

<span id="viewport_W" class="size-value">
</span> x

                <span id="viewport_H" class="size-value">
</span>
                </span>
            </div>

            <div id="viewport-info-iframe">

                <span id="DeviceMode">DEVICE: 

<span id="modedevice" style="color:orange; font-weight:bold">CUSTOM
</span>
                </span>

                <span class="linebreak2">
</span>

                <span id="DeviceViewport">PHYSICAL RESOLUTION: 

<span id="viewport_iframeW" class="size-value">
</span> x

                <span id="viewport_iframeH" class="size-value">
</span>
                </span>

                <span class="linebreak2">
</span>

                <span id="DataPixelRatio">CSS PIXEL RATIO: 

<span id="SizePixelRatio" class="size-value">
</span>
                </span>

                <span class="linebreak2">
</span>

                <span id="DeviceViewportPixelRatio">LOGICAL RESOLUTION: 

<span id="viewport_iframeW_PixelRatio" class="size-value">
</span> x

                <span id="viewport_iframeH_PixelRatio" class="size-value">
</span>
                </span>

                <span class="linebreak2">
</span>

                <span id="DataRetinaDevice">RETINA DEVICE: 

<span id="SupportRetinaDevice" class="size-value">
</span>
                </span>

                <span class="linebreak2">
</span>
            </div>
        </div>

        <div id='fb-root'>
        </div>
        <script type='text/javascript'>
            (function() {
                var fb1 = document.createElement('script');
                fb1.type = 'text/javascript';
                fb1.async = true;
                fb1.src = 'http://connect.facebook.net/en_US/all.js#xfbml=1',
                    'facebook-jssdk';
                var fb2 = document.getElementsByTagName('script')[0];
                fb2.parentNode.insertBefore(fb1, fb2);
            })();
            (function() {
                var tw1 = document.createElement('script');
                tw1.type = 'text/javascript';
                tw1.async = true;
                tw1.src = 'http://platform.twitter.com/widgets.js';
                var tw2 = document.getElementsByTagName('script')[0];
                tw2.parentNode.insertBefore(tw1, tw2);
            })();
            (function() {
                var gp1 = document.createElement('script');
                gp1.type = 'text/javascript';
                gp1.async = true;
                gp1.src = 'https://apis.google.com/js/plusone.js';
                var gp2 = document.getElementsByTagName('script')[0];
                gp2.parentNode.insertBefore(gp1, gp2);
            })();
        </script>
        <script>
            (function() {
                var uv = document.createElement('script');
                uv.type = 'text/javascript';
                uv.async = true;
                uv.src = '//widget.uservoice.com/c1AFwHruOy2nmjfNk2R2Gw.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(uv, s)
            })()
        </script>
        <script>
            UserVoice = window.UserVoice || [];
            UserVoice.push(['showTab', 'classic_widget', {
                mode: 'full',
                primary_color: '#cc6d00',
                link_color: '#007dbf',
                default_mode: 'support',
                forum_id: 230458,
                tab_label: 'Feedback',
                tab_color: '#cc6d00',
                tab_position: 'middle-right',
                tab_inverted: false
            }]);
        </script>
    </body>

    </html>