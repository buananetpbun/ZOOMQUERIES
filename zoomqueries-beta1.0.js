function formatText(c) {
	var e = document.getElementById("CanvasHTML");
	var b = e.value;
	var f = b.substring(e.selectionStart, e.selectionEnd);
	var d = b.substring(0, e.selectionStart);
	var a = b.substring(e.selectionEnd, b.length);
	e.value = d + "<" + c + ">" + f + "</" + c + ">" + a
}
function formatTextTable(c) {
	var e = document.getElementById("CanvasHTML");
	var b = e.value;
	var f = b.substring(e.selectionStart, e.selectionEnd);
	var d = b.substring(0, e.selectionStart);
	var a = b.substring(e.selectionEnd, b.length);
	e.value = d + "<" + c + ">\n<tbody>\n" + f + "</tbody>\n</" + c + ">" + a
}
function formatTextImage() {
	var d = document.getElementById("CanvasHTML");
	var b = d.value;
	var c = b.substring(0, d.selectionStart);
	var f = b.substring(d.selectionEnd, b.length);
	var g = "";
	var a = "";
	smoke.prompt("Enter the URL of the image", function (e) {
		if (e) {
			smoke.prompt("Enter a description (alt) of the image", function (h) {
				if (h) {
					myValue = '<img src="' + e + '" alt="' + h + '" />';
					d.value = c + myValue + f
				}
			},
			{
				ok: "Yes",
				cancel: "Cancel",
				classname: "custom-class",
				reverseButtons: true
			})
		}
	},
	{
		ok: "Yes",
		cancel: "Cancel",
		classname: "custom-class",
		reverseButtons: true,
		value: "http://"
	})
}
function formatTextLink() {
	var c = document.getElementById("CanvasHTML");
	var a = c.value;
	var d = a.substring(c.selectionStart, c.selectionEnd);
	var b = a.substring(0, c.selectionStart);
	var f = a.substring(c.selectionEnd, a.length);
	var g = "";
	var h = "";
	smoke.prompt("Enter the URL", function (e) {
		if (e) {
			smoke.prompt("Enter a open target url like:\n _blank or _self or _top or _parent", function (i) {
				if (i) {
					myValue = '<a href="' + e + '" target="' + i + '">' + d + "</a>";
					c.value = b + myValue + f
				}
			},
			{
				ok: "Yes",
				cancel: "Cancel",
				classname: "custom-class",
				reverseButtons: true,
				value: "_blank"
			})
		}
	},
	{
		ok: "Yes",
		cancel: "Cancel",
		classname: "custom-class",
		reverseButtons: true,
		value: "http://"
	})
}
function formatTextiframe() {
	var c = document.getElementById("CanvasHTML");
	var a = c.value;
	var b = a.substring(0, c.selectionStart);
	var d = a.substring(c.selectionEnd, a.length);
	var f = "";
	smoke.prompt("Enter the Frame Src URL", function (e) {
		if (e) {
			myValue = '<iframe src="' + e + '"></iframe>';
			c.value = b + myValue + d
		}
	},
	{
		ok: "Yes",
		cancel: "Cancel",
		classname: "custom-class",
		reverseButtons: true,
		value: "http://"
	})
}
$(window).load(function () {
	$(".ui-resizable-s").css("display", "none");
	$(".ui-resizable-se").css("display", "none");
	var b = $(window).width();
	var a = $(window).height();
	$("#viewport_W").text(b + "PX");
	$("#viewport_H").text(a + "PX");
	$("#CanvasHTML").val("")
});
$(window).resize(function (b) {
	var a = $(window).width();
	var c = $(window).height();
	$("#viewport_W").text(a + "PX");
	$("#viewport_H").text(c + "PX")
});
function portraitLanscape() {
	var a = $("#framewrap").height();
	var b = $("#framewrap").width();
	if ($("#SimpleModeTAB").hasClass("active")) {
		$("#mode").text("LOCKED")
	} else {
		if (b > a) {
			$("#mode").text("LANDSCAPE")
		} else {
			$("#mode").text("PORTRAIT")
		}
	}
}
$(document).ready(function () {
	$(".borderframewrap").addClass("remborder");
	$("#SizePixelRatio").text("1");
	$("#Custom-PixelRatio").val("1");
	$("#SupportRetinaDevice").text("NO");
	$(".ui-resizable-se").css("display", "none");
	$("#lockedDIV").css({
		display: "block"
	});
	$("#RotateBTN, #CustomW-Input, #CustomH-Input, #DevMobileBTN").attr("disabled", "disable");
	$("#SimpleModeTAB").addClass("active");
	$("#fullscreen-BTN").addClass("active");
	$("#viewport_W").text($(window).width());
	$("#viewport_H").text($(window).height());
	$("#CustomW-Input").val($("#framewrap").width());
	$("#CustomH-Input").val($("#framewrap").height());
	$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
	$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
	$(".hideRB").css({
		display: "none"
	});
	$("#ruler-vertical[data-items]").each(function () {
		var h = $(this).empty(),
		e = Number(h.attr("data-items")) || 0,
		g = $(document.createElement("li")),
		f;
		for (f = 1; f < e; f++) {
			h.append(g.clone().text(f * 50))
		}
	});
	$("#ruler-horizontal[data-items]").each(function () {
		var g = $(this).empty(),
		e = Number(g.attr("data-items")) || 0,
		h = $(document.createElement("li")),
		f;
		for (f = 1; f < e; f++) {
			g.append(h.clone().text(f * 50))
		}
	});
	$("#framewrap").resizable({
		minHeight: 50,
		minWidth: 50,
		start: function (f, e) {
			$("iframe").css("pointer-events", "none")
		},
		stop: function (f, e) {
			$(".ui-resizable-e").removeClass("active");
			$("iframe").css("pointer-events", "auto")
		},
		resize: function (f, e) {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$(".ui-resizable-e").addClass("active");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$("#SupportRetinaDevice").text("NO");
			portraitLanscape()
		}
	});
	$("#HtmlArea-BTN").click(function () {
		if ($(".htmleditor").css("display") == "none") {
			$(".htmleditor").show();
			$(".htmleditor").addClass("active");
			$("#HtmlArea-BTN").css({
				background: "#D14836"
			});
			if ($("#SimpleModeTAB").hasClass("active")) {
				$("#block").css({
					top: "53px",
					bottom: "216px"
				})
			} else {
				$("#block").css({
					top: "53px",
					bottom: "196px"
				})
			}
		} else {
			$(".htmleditor").hide();
			$(".htmleditor").removeClass("active");
			$("#HtmlArea-BTN").css({
				background: ""
			});
			if ($("#SimpleModeTAB").hasClass("active")) {
				$("#block").css({
					top: "53px",
					bottom: "50px"
				})
			} else {
				$("#block").css({
					top: "53px",
					bottom: "30px"
				})
			}
		}
		return false
	});
	$("#SimpleModeTAB").click(function () {
		$("#SizePixelRatio").text("1");
		$("#Custom-PixelRatio").val("1");
		$("#SupportRetinaDevice").text("NO");
		$("#VPortLockScreen").text("LOCK BROWSER");
		$(".borderframewrap").addClass("remborder");
		$("#lockedDIV").css({
			display: "block"
		});
		$("#RotateBTN, #CustomW-Input, #CustomH-Input, #DevMobileBTN").attr("disabled", "disable");
		$("#modedevice").text("CUSTOM");
		$("#ruler-horizontal").css({
			display: "none"
		});
		$("#SimpleModeTAB").addClass("active");
		$("#VPortLockScreen").css({
			display: "block"
		});
		$("#grid-view").css({
			"margin-left": "0"
		});
		$("#ruler-vertical").css({
			"margin-left": "0"
		});
		$(".SizePV240").css({
			width: "240px"
		});
		$("#rulerBOX").css({
			display: "none"
		});
		$("#SimpleModeTAB").css({
			background: "#D14836"
		});
		$("#CustomModeTAB").css({
			background: "#333"
		});
		$("#block").removeClass("full-screen");
		$("#header").css({
			height: "53px"
		});
		$("#grid-view").css({
			height: "100%",
			width: "100%"
		});
		$("#framewrap").css({
			width: "320px",
			height: "100%"
		});
		$("#CustomW-Input").val($("#framewrap").width());
		$("#CustomH-Input").val($("#framewrap").height());
		$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
		$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
		$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
		$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
		$(".ui-resizable-s").css("display", "none");
		$(".ui-resizable-e").css("display", "block");
		$("#mode").text("LOCKED");
		if ($(".htmleditor").hasClass("active")) {
			$("#block").css({
				top: "53px",
				bottom: "216px"
			})
		} else {
			$("#block").css({
				top: "53px",
				bottom: "50px"
			})
		}
		return false
	});
	$("#CustomModeTAB").click(function () {
		$("#SizePixelRatio").text("1");
		$("#Custom-PixelRatio").val("1");
		$("#SupportRetinaDevice").text("NO");
		$("#VPortLockScreen").text("FULL SCREEN");
		$(".borderframewrap").removeClass("remborder");
		$("#lockedDIV").css({
			display: "none"
		});
		$("#RotateBTN, #CustomW-Input, #CustomH-Input, #DevMobileBTN").removeAttr("disabled");
		$("#modedevice").text("CUSTOM");
		$("#ruler-horizontal").css({
			display: "block"
		});
		$("#SimpleModeTAB").removeClass("active");
		$("#rulerBOX").css({
			display: "block"
		});
		$("#grid-view").css({
			"margin-left": "20px"
		});
		$("#ruler-vertical").css({
			"margin-left": "20px"
		});
		$(".SizePV240").css({
			width: "260px"
		});
		$("#SimpleModeTAB").css({
			background: "#333"
		});
		$("#CustomModeTAB").css({
			background: "#D14836"
		});
		$("#block").addClass("full-screen");
		$("#header").css({
			height: "53px"
		});
		$("#grid-view").css({
			height: "3000px",
			width: "3000px"
		});
		$("#framewrap").css({
			width: "320px",
			height: "480px"
		});
		$("#CustomW-Input").val($("#framewrap").width());
		$("#CustomH-Input").val($("#framewrap").height());
		$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
		$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
		$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
		$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
		$(".ui-resizable-s").css("display", "block");
		$(".ui-resizable-e").css("display", "block");
		if ($(".htmleditor").hasClass("active")) {
			$("#block").css({
				top: "53px",
				bottom: "196px"
			})
		} else {
			$("#block").css({
				top: "53px",
				bottom: "30px"
			})
		}
		portraitLanscape();
		return false
	});
	$("#Reload-BTN").click(function () {
		if ($(".htmleditor").hasClass("active")) {
			window.frames.frame.location.reload()
		} else {
			$("#frame").attr("src", $("#frame").attr("src"))
		}
		return false
	});
	$("#GetUrl-BTN").click(function () {
		$("#CanvasHTML").val("");
		var g = $("#url").val().substring(0, 4);
		if (g === "http") {
			$.noop()
		} else {
			var i = $("#url").val();
			$("#url").val("http://" + i)
		}
		var m = $("#url").val();
		var f = $("#frame");
		var e = /^(https?:\/\/)?((?:[a-z0-9-]+\.)+(?:localhost|aero|asia|biz|cat|com|coop|info|int|edu|jobs|mobi|museum|name|net|org|post|pro|tel|travel|xxx|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gv|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rw|ru|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw))(?:\/|$)/i;
		var h = /^(http\:\/\/(?:localhost))/;
		smoke.signal("Loading! Please Wait...", function (k) {
			if (m.match(e)) {
				$.ajax({
					url: "validateurl.php",
					data: "geturl=" + m + "",
					type: "GET",
					success: function (l) {
						if (l == 200 || l == 301) {
							smoke.signal("SUCCESS : <span style='font-weight:bold; color:green'>HTTP/1.1 200 OK</span>", function (o) {
								f.attr("src", m);
								$($("#frame")[0].document).ready(function () {
									$.ajax({
										url: "gethtmlsource.php",
										data: "geturl=" + m + "",
										type: "GET",
										success: function (n) {
											$("#CanvasHTML").val(n)
										}
									});
									$.ajax({
										url: "lastcheckurl.php",
										data: "geturl=" + m + ""
									})
								})
							},
							{
								duration: 2000,
								classname: "custom-class"
							})
						} else {
							smoke.alert("STATUS: <span style='text-transform:uppercase;font-weight:bold; color:red'>" + l + "</span>", function (o) {
								f.attr("src", "deviceinfo.php")
							},
							{
								ok: "OK",
								cancel: "Nope",
								classname: "custom-class"
							})
						}
					}
				})
			} else {
				if (m.match(h)) {
					smoke.signal("SUCCESS : <span style='font-weight:bold; color:green'>RUNNING AT LOCALHOST</span>", function (l) {
						f.attr("src", m);
						$($("#frame")[0].document).ready(function () {
							$.ajax({
								url: "gethtmlsource.php",
								data: "geturl=" + m + "",
								type: "GET",
								success: function (n) {
									$("#CanvasHTML").val(n)
								}
							})
						})
					},
					{
						duration: 2000,
						classname: "custom-class"
					})
				} else {
					smoke.alert("Sorry! Invalid URL Request!", function (l) {
						f.attr("src", "deviceinfo.php")
					},
					{
						ok: "OK",
						cancel: "Nope",
						classname: "custom-class"
					})
				}
			}
		},
		{
			duration: 2000,
			classname: "custom-class"
		});
		return false
	});
	$("#url").keypress(function (e) {
		if (e.keyCode == 13) {
			var g = $("#url").val().substring(0, 4);
			if (g === "http") {
				$.noop()
			} else {
				var f = $("#url").val();
				$("#url").val("http://" + f)
			}
			$("#GetUrl-BTN").trigger("click");
			e.preventDefault();
			return false
		}
	});
	$("#VPort240, .SizePV240").click(function () {
		$("#framewrap").animate({
			width: "240px",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$("#SupportRetinaDevice").text("NO");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPort320, .SizePV320").click(function () {
		$("#framewrap").animate({
			width: "320",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$("#SupportRetinaDevice").text("NO");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPort480, .SizePV480").click(function () {
		$("#framewrap").animate({
			width: "480px",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$("#SupportRetinaDevice").text("NO");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPort768, .SizePV768").click(function () {
		$("#framewrap").animate({
			width: "768px",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPort1024, .SizePV1024").click(function () {
		$("#framewrap").animate({
			width: "1024px",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPort1216, .SizePV1216").click(function () {
		$("#framewrap").animate({
			width: "1216px",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$(".ui-resizable-e").css("display", "block")
		});
		return false
	});
	$("#VPortLockScreen, .SizeLockScreen").click(function () {
		$("#framewrap").animate({
			width: "100%",
			height: "100%"
		},
		500, function () {
			$("#CustomW-Input").val($("#framewrap").width());
			$("#CustomH-Input").val($("#framewrap").height());
			$("#viewport_iframeW, #viewport_iframeW_PixelRatio").text($("#framewrap").width() + "PX");
			$("#viewport_iframeH, #viewport_iframeH_PixelRatio").text($("#framewrap").height() + "PX");
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
			$("#mode").text("LOCKED");
			$("#modedevice").text("CUSTOM");
			$("#SizePixelRatio").text("1");
			$("#Custom-PixelRatio").val("1");
			$(".ui-resizable-e").css("display", "none")
		});
		return false
	});
	$("#CustomW-Input").keyup(function () {
		$("#modedevice").text("CUSTOM");
		var e = $("#CustomW-Input").val();
		var f = $("#Custom-PixelRatio").val();
		$("#viewport_iframeW").text(e + "PX");
		$("#viewport_iframeW_PixelRatio").text(e / f + "PX");
		$("#framewrap").animate({
			width: e / f
		},
		500, function () {
			portraitLanscape();
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text())
		});
		return false
	});
	$("#CustomH-Input").keyup(function () {
		$("#modedevice").text("CUSTOM");
		var e = $("#CustomH-Input").val();
		var f = $("#Custom-PixelRatio").val();
		$("#viewport_iframeH").text(e + "PX");
		$("#viewport_iframeH_PixelRatio").text(e / f + "PX");
		$("#framewrap").animate({
			height: e / f
		},
		500, function () {
			portraitLanscape();
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text())
		});
		return false
	});
	$("#Custom-PixelRatio").keyup(function () {
		$("#modedevice").text("CUSTOM");
		var g = $("#CustomW-Input").val();
		var f = $("#CustomH-Input").val();
		var e = $("#Custom-PixelRatio").val();
		$("#viewport_iframeW").text(g + "PX");
		$("#viewport_iframeH").text(f + "PX");
		$("#viewport_iframeW_PixelRatio").text(g / e + "PX");
		$("#viewport_iframeH_PixelRatio").text(f / e + "PX");
		$("#SizePixelRatio").text(e);
		$("#framewrap").animate({
			width: g / e,
			height: f / e
		},
		500, function () {
			portraitLanscape();
			$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
			$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text())
		});
		return false
	});
	$("#fullscreen-BTN").click(function () {
		if ($("#fullscreen-BTN").hasClass("active")) {
			$(document).fullScreen(true);
			$("#fullscreen-BTN").css({
				background: "#333"
			});
			$("#fullscreen-BTN").removeClass("active")
		} else {
			$("#fullscreen-BTN").css({
				background: "#535353"
			});
			$(document).fullScreen(false);
			$("#fullscreen-BTN").addClass("active")
		}
		return false
	});
	$("#share-BTN").click(function () {
		$("#dialog").dialog({
			height: 420,
			width: 615,
			dialogClass: "noTitleStuff",
			closeOnEscape: false,
			resizable: false,
			buttons: [{
				text: "Ok",
				click: function () {
					$(this).dialog("close")
				}
			}]
		});
		if ($("#url").val() == "http:// or localhost") {
			var f = "http://zoomqueries.com";
			$("#ShareorEmbedURL").val(f);
			var e = "<a href='http://zoomqueries.com'>ZoomQueries - Responsive Web Design Testing Tool</a>";
			$("#ShareorEmbedURLHref").val(e);
			var g = "[url=http://zoomqueries.com]ZoomQueries - Responsive Web Design Testing Tool[/url]";
			$("#ShareorEmbedURLForum").val(g)
		} else {
			var f = "http://zoomqueries.com?url=" + $("#url").val();
			$("#ShareorEmbedURL").val(f);
			var e = "<a href='http://zoomqueries.com?url=" + $("#url").val() + "'>ZoomQueries - Responsive Web Design Testing Tool</a>";
			$("#ShareorEmbedURLHref").val(e);
			var g = "[url=http://zoomqueries.com?url=" + $("#url").val() + "']ZoomQueries - Responsive Web Design Testing Tool[/url]";
			$("#ShareorEmbedURLForum").val(g)
		}
		return false
	});
	$("#btn-facebook").click(function () {
		var f = "https://www.facebook.com/sharer.php?u=http://zoomqueries.com?url=" + $("#url").val() + "&t=Responsive Web Design Testing Tool!";
		var e = "https://www.facebook.com/sharer.php?u=http://zoomqueries.com&t=Responsive Web Design Testing Tool!";
		if ($("#url").val() == "http:// or localhost") {
			window.location.href = e
		} else {
			window.location.href = f
		}
	});
	$("#btn-google").click(function () {
		var f = "https://plus.google.com/share?url=http://zoomqueries.com?url=" + $("#url").val();
		var e = "https://plus.google.com/share?url=http://zoomqueries.com";
		if ($("#url").val() == "http:// or localhost") {
			window.location.href = e
		} else {
			window.location.href = f
		}
	});
	$("#btn-twitter").click(function () {
		var f = "http://twitter.com/intent/tweet?text=Responsive Web Design Testing Tool&url=http://zoomqueries.com?url=" + $("#url").val();
		var e = "http://twitter.com/intent/tweet?text=Responsive Web Design Testing Tool&url=http://zoomqueries.com";
		if ($("#url").val() == "http:// or localhost") {
			window.location.href = e
		} else {
			window.location.href = f
		}
	});
	$("#RotateBTN").on("click", function () {
		var g = $("#CustomW-Input").val();
		var f = $("#CustomH-Input").val();
		var e = $("#Custom-PixelRatio").val();
		if (g > f) {
			$("#CustomW-Input").val(f);
			$("#CustomH-Input").val(g);
			var g = $("#CustomW-Input").val();
			var f = $("#CustomH-Input").val();
			$("#viewport_iframeW").text(g + "PX");
			$("#viewport_iframeH").text(f + "PX");
			$("#viewport_iframeW_PixelRatio").text(g / e + "PX");
			$("#viewport_iframeH_PixelRatio").text(f / e + "PX");
			$("#framewrap").animate({
				width: g / e,
				height: f / e
			},
			500, function () {
				portraitLanscape();
				$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
				$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text())
			})
		} else {
			$("#CustomW-Input").val(f);
			$("#CustomH-Input").val(g);
			var g = $("#CustomW-Input").val();
			var f = $("#CustomH-Input").val();
			$("#viewport_iframeW").text(g + "PX");
			$("#viewport_iframeH").text(f + "PX");
			$("#viewport_iframeW_PixelRatio").text(g / e + "PX");
			$("#viewport_iframeH_PixelRatio").text(f / e + "PX");
			$("#framewrap").animate({
				width: g / e,
				height: f / e
			},
			500, function () {
				portraitLanscape();
				$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
				$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text())
			})
		}
		return false
	});
	$("#DevListMobile li").not(".DevListNoClick").click(function () {
		var e = $(this).attr("data-width");
		var f = $(this).attr("data-height");
		var h = $(this).attr("data-pixelratio");
		var g = $(this).attr("data-retina");
		var i = $(this).attr("data-device");
		$("#CustomW-Input").val(e);
		$("#CustomH-Input").val(f);
		$("#viewport_iframeW").text(e + "PX");
		$("#viewport_iframeH").text(f + "PX");
		$("#SupportRetinaDevice").text(g);
		$("#SizePixelRatio").text(h);
		$("#Custom-PixelRatio").val(h);
		$("#viewport_iframeW_PixelRatio").text(e / h + "PX");
		$("#viewport_iframeH_PixelRatio").text(f / h + "PX");
		$(".ui-resizable-e").attr("data-content", $("#viewport_iframeW_PixelRatio").text());
		$(".ui-resizable-s").attr("data-content", $("#viewport_iframeH_PixelRatio").text());
		$("#modedevice").text(i);
		$("#framewrap").animate({
			width: e / h,
			height: f / h
		},
		500, function () {
			portraitLanscape()
		});
		return false
	});
	$("#DevMobileBTN").click(function () {
		$("#DeviceMenu").show();
		$("#MobileM").show();
		$("#DevMobileBTN").css({
			"background-color": "#D14836"
		});
		return false
	});
	$("#SimpleModeTAB, #CustomModeTAB, #HtmlArea-BTN, #GoTestRWD-BTN, #GetUrl-BTN, #Reload-BTN, #HtmlArea-BTN, #RotateBTN, #logo, #grid-view, #framewrap, #frame, #main-bar, #custom-viewport-stripes, #custom-viewport-stripe, #footer, #VPort240, #VPort320, #VPort480, #VPort768, #VPort1024, #VPort1216, #VPortLockScreen").click(function () {
		$("#DeviceMenu").hide();
		$("#DevMobileBTN").css({
			"background-color": "#333"
		});
		return false
	});
	$("html").click(function () {
		$("#DeviceMenu").hide();
		$("#DevMobileBTN").css({
			"background-color": "#333"
		});
		return false
	});
	$(document).click(function () {
		$("#DeviceMenu").hide();
		$("#DevMobileBTN").css({
			"background-color": "#333"
		});
		return false
	});
	$("#logo").click(function () {
		$("#WelcomeSCR").show();
		$("#WrapLockScreen").show();
		$("#lastcheck").show();
		return false
	});
	$("#GoTestRWD-BTN").click(function () {
		$("#WelcomeSCR").hide();
		$("#WrapLockScreen").hide();
		$("#lastcheck").hide();
		return false
	});
	$("#newhtml").click(function () {
		$("#DeviceMenu").hide();
		var e = '<html>\n<head>\n<style type="text/css">\n</style>\n</head>\n<body>\n</body>\n</html>';
		if (!$("#CanvasHTML").val().length) {
			$("#CanvasHTML").val(e)
		} else {
			smoke.confirm("Are you sure to replace html source?", function (f) {
				if (f) {
					$("#CanvasHTML").val(e)
				}
			},
			{
				ok: "Yes",
				cancel: "Cancel",
				classname: "custom-class",
				reverseButtons: true
			})
		}
		return false
	});
	$("#tagh1").click(function () {
		formatText("h1");
		return false
	});
	$("#tagh2").click(function () {
		formatText("h2");
		return false
	});
	$("#tagh3").click(function () {
		formatText("h3");
		return false
	});
	$("#tagh4").click(function () {
		formatText("h4");
		return false
	});
	$("#tagh5").click(function () {
		formatText("h5");
		return false
	});
	$("#tagh6").click(function () {
		formatText("h6");
		return false
	});
	$("#tagp").click(function () {
		formatText("p");
		return false
	});
	$("#tagb").click(function () {
		formatText("b");
		return false
	});
	$("#tagi").click(function () {
		formatText("i");
		return false
	});
	$("#tagu").click(function () {
		formatText("u");
		return false
	});
	$("#tagul").click(function () {
		formatText("ul");
		return false
	});
	$("#tagol").click(function () {
		formatText("ol");
		return false
	});
	$("#tagli").click(function () {
		formatText("li");
		return false
	});
	$("#tagdl").click(function () {
		formatText("dl");
		return false
	});
	$("#tagdt").click(function () {
		formatText("dt");
		return false
	});
	$("#tagdd").click(function () {
		formatText("dd");
		return false
	});
	$("#tagtable").click(function () {
		formatTextTable("table");
		return false
	});
	$("#tagtr").click(function () {
		formatText("tr");
		return false
	});
	$("#tagtd").click(function () {
		formatText("td");
		return false
	});
	$("#taglink").click(function () {
		formatTextLink();
		return false
	});
	$("#tagimg").click(function () {
		formatTextImage();
		return false
	});
	$("#tagiframe").click(function () {
		formatTextiframe();
		return false
	});
	$("#tagblockquote").click(function () {
		formatText("blockquote");
		return false
	});
	$("#tagcode").click(function () {
		formatText("code");
		return false
	});
	$("#tagpre").click(function () {
		formatText("pre");
		return false
	});
	$("#tagdiv").click(function () {
		formatText("div");
		return false
	});
	$("#tagspan").click(function () {
		formatText("span");
		return false
	});
	$("#runhtml").click(function () {
		var g = $("#frame");
		if (!$("#CanvasHTML").val().length) {
			smoke.alert("Blank html!\n please write your valid html!", function (h) {},
			{
				ok: "OK",
				cancel: "Cancel",
				classname: "custom-class"
			})
		} else {
			g.attr("src", "about:blank");
			var f = $("#CanvasHTML").val();
			var e = document.getElementById("frame");
			e = (e.contentWindow) ? e.contentWindow: (e.contentDocument.document) ? e.contentDocument.document: e.contentDocument;
			e.document.open();
			e.document.write(f);
			e.document.close()
		}
		return false
	});
	if ($urlbookmark == "deviceinfo.php") {
		var d = $("#frame");
		d.attr("src", $urlbookmark);
		$("#url").val("http:// or localhost")
	} else {
		var d = $("#frame");
		var j = $urlbookmark_pr;
		var a = $urlbookmark_wt;
		var b = $urlbookmark_ht;
		var c = $urlbookmark_sc;
		$.ajax({
			url: "validateurl.php",
			data: "geturl=" + $urlbookmark + "",
			type: "GET",
			success: function (e) {
				if (e == 200 || e == 301) {
					smoke.signal("SUCCESS : <span style='font-weight:bold; color:green'>HTTP/1.1 200 OK</span>", function (f) {
						if (c == "fs") {
							d.attr("src", $urlbookmark);
							$("#url").val($urlbookmark);
							$("#VPortLockScreen").trigger("click")
						} else {
							d.attr("src", $urlbookmark);
							$("#url").val($urlbookmark)
						}
						$.ajax({
							url: "gethtmlsource.php",
							data: "geturl=" + $urlbookmark + "",
							type: "GET",
							success: function (g) {
								$("#CanvasHTML").val(g)
							}
						});
						$.ajax({
							url: "lastcheckurl.php",
							data: "geturl=" + $urlbookmark + ""
						})
					},
					{
						duration: 2000,
						classname: "custom-class"
					})
				} else {
					smoke.alert("STATUS: <span style='text-transform:uppercase;font-weight:bold; color:red'>" + e + "</span>", function (f) {
						iframe.attr("src", "deviceinfo.php")
					},
					{
						ok: "OK",
						cancel: "Nope",
						classname: "custom-class"
					})
				}
			}
		})
	} !
	function (e) {
		var f = function (g, h) {
			this.init("tooltip", g, h)
		};
		f.prototype = {
			constructor: f,
			init: function (o, k, h) {
				var g, i;
				this.type = o;
				this.$element = e(k);
				this.options = this.getOptions(h);
				this.enabled = true;
				if (this.options.trigger != "manual") {
					g = this.options.trigger == "hover" ? "mouseenter": "focus";
					i = this.options.trigger == "hover" ? "mouseleave": "blur";
					this.$element.on(g, this.options.selector, e.proxy(this.enter, this));
					this.$element.on(i, this.options.selector, e.proxy(this.leave, this))
				}
				this.options.selector ? (this._options = e.extend({},
				this.options, {
					trigger: "manual",
					selector: ""
				})) : this.fixTitle()
			},
			getOptions: function (g) {
				g = e.extend({},
				e.fn[this.type].defaults, g, this.$element.data());
				if (g.delay && typeof g.delay == "number") {
					g.delay = {
						show: g.delay,
						hide: g.delay
					}
				}
				return g
			},
			enter: function (g) {
				var h = e(g.currentTarget)[this.type](this._options).data(this.type);
				if (!h.options.delay || !h.options.delay.show) {
					h.show()
				} else {
					h.hoverState = "in";
					setTimeout(function () {
						if (h.hoverState == "in") {
							h.show()
						}
					},
					h.options.delay.show)
				}
			},
			leave: function (g) {
				var h = e(g.currentTarget)[this.type](this._options).data(this.type);
				if (!h.options.delay || !h.options.delay.hide) {
					h.hide()
				} else {
					h.hoverState = "out";
					setTimeout(function () {
						if (h.hoverState == "out") {
							h.hide()
						}
					},
					h.options.delay.hide)
				}
			},
			show: function () {
				var n, m, l, i, h, k, g;
				if (this.hasContent() && this.enabled) {
					n = this.tip();
					this.setContent();
					if (this.options.animation) {
						n.addClass("fade")
					}
					k = typeof this.options.placement == "function" ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement;
					m = /in/.test(k);
					n.remove().css({
						top: 0,
						left: 0,
						display: "block"
					}).appendTo(m ? this.$element: document.body);
					l = this.getPosition(m);
					i = n[0].offsetWidth;
					h = n[0].offsetHeight;
					switch (m ? k.split(" ")[1] : k) {
					case "bottom":
						g = {
							top: l.top + l.height,
							left: l.left + l.width / 2 - i / 2
						};
						break;
					case "top":
						g = {
							top: l.top - h,
							left: l.left + l.width / 2 - i / 2
						};
						break;
					case "left":
						g = {
							top: l.top + l.height / 2 - h / 2,
							left: l.left - i
						};
						break;
					case "right":
						g = {
							top: l.top + l.height / 2 - h / 2,
							left: l.left + l.width
						};
						break
					}
					n.css(g).addClass(k).addClass("in")
				}
			},
			setContent: function () {
				var g = this.tip();
				g.find(".tooltip-inner").html(this.getTitle());
				g.removeClass("fade in top bottom left right")
			},
			hide: function () {
				var i = this,
				h = this.tip();
				h.removeClass("in");
				function g() {
					var l = setTimeout(function () {
						h.off(e.support.transition.end).remove()
					},
					500);
					h.one(e.support.transition.end, function () {
						clearTimeout(l);
						h.remove()
					})
				}
				e.support.transition && this.$tip.hasClass("fade") ? g() : h.remove()
			},
			fixTitle: function () {
				var g = this.$element;
				if (g.attr("title") || typeof(g.attr("data-original-title")) != "string") {
					g.attr("data-original-title", g.attr("title") || "").removeAttr("title")
				}
			},
			hasContent: function () {
				return this.getTitle()
			},
			getPosition: function (g) {
				return e.extend({},
				(g ? {
					top: 0,
					left: 0
				}: this.$element.offset()), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				})
			},
			getTitle: function () {
				var g, i = this.$element,
				h = this.options;
				g = i.attr("data-original-title") || (typeof h.title == "function" ? h.title.call(i[0]) : h.title);
				g = g.toString().replace(/(^\s*|\s*$)/, "");
				return g
			},
			tip: function () {
				return this.$tip = this.$tip || e(this.options.template)
			},
			validate: function () {
				if (!this.$element[0].parentNode) {
					this.hide();
					this.$element = null;
					this.options = null
				}
			},
			enable: function () {
				this.enabled = true
			},
			disable: function () {
				this.enabled = false
			},
			toggleEnabled: function () {
				this.enabled = !this.enabled
			},
			toggle: function () {
				this[this.tip().hasClass("in") ? "hide": "show"]()
			}
		};
		e.fn.tooltip = function (g) {
			return this.each(function () {
				var h = e(this),
				i = h.data("tooltip"),
				m = typeof g == "object" && g;
				if (!i) {
					h.data("tooltip", (i = new f(this, m)))
				}
				if (typeof g == "string") {
					i[g]()
				}
			})
		};
		e.fn.tooltip.Constructor = f;
		e.fn.tooltip.defaults = {
			animation: true,
			delay: 0,
			selector: false,
			placement: "top",
			trigger: "hover",
			title: "",
			template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
		}
	} (window.jQuery);
	window.log = function () {
		log.history = log.history || [];
		log.history.push(arguments);
		if (this.console) {
			arguments.callee = arguments.callee.caller;
			var e = [].slice.call(arguments);
			(typeof console.log === "object" ? log.apply.call(console.log, console, e) : console.log.apply(console, e))
		}
	};
	(function (h) {
		function e() {}
		for (var f = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), g; g = f.pop();) {
			h[g] = h[g] || e
		}
	})((function () {
		try {
			console.log();
			return window.console
		} catch(e) {
			return window.console = {}
		}
	})());
	$(function () {
		$(document).tooltip({
			selector: "input[rel=tooltip], textarea[rel=tooltip], a[rel=tooltip], select[rel=tooltip], button[rel=tooltip], span[rel=tooltip], div[rel=tooltip] "
		})
	});
	$(".ui-resizable-e").attr("data-content", "320px")
});