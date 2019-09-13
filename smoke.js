(function () {
	var d = {
		smoketimeout: [],
		init: false,
		zindex: 1000,
		i: 0,
		bodyload: function (f) {
			var e = document.createElement("div");
			e.setAttribute("id", "smoke-out-" + f);
			e.className = "smoke-base";
			e.style.zIndex = d.zindex;
			d.zindex++;
			document.body.appendChild(e)
		},
		newdialog: function () {
			var e = new Date().getTime();
			e = Math.random(1, 99) + e;
			if (!d.init) {
				d.listen(window, "load", function () {
					d.bodyload(e)
				})
			} else {
				d.bodyload(e)
			}
			return e
		},
		forceload: function () {},
		build: function (n, l) {
			d.i++;
			l.stack = d.i;
			n = n.replace(/\n/g, "<br />");
			n = n.replace(/\r/g, "<br />");
			var g = "",
			h = "OK",
			k = "Cancel",
			m = "",
			j = "",
			i;
			if (l.type === "prompt") {
				g = '<div class="dialog-prompt"><input id="dialog-input-' + l.newid + '" type="text" ' + (l.params.value ? 'value="' + l.params.value + '"': "") + " /></div>"
			}
			if (l.params.ok) {
				h = l.params.ok
			}
			if (l.params.cancel) {
				k = l.params.cancel
			}
			if (l.params.classname) {
				m = l.params.classname
			}
			if (l.type !== "signal") {
				j = '<div class="dialog-buttons">';
				if (l.type === "alert") {
					j += '<button id="alert-ok-' + l.newid + '">' + h + "</button>"
				} else {
					if (l.type === "quiz") {
						if (l.params.button_1) {
							j += '<button class="quiz-button" id="' + l.type + "-ok1-" + l.newid + '">' + l.params.button_1 + "</button>"
						}
						if (l.params.button_2) {
							j += '<button class="quiz-button" id="' + l.type + "-ok2-" + l.newid + '">' + l.params.button_2 + "</button>"
						}
						if (l.params.button_3) {
							j += '<button class="quiz-button" id="' + l.type + "-ok3-" + l.newid + '">' + l.params.button_3 + "</button>"
						}
						if (l.params.button_cancel) {
							j += '<button id="' + l.type + "-cancel-" + l.newid + '" class="cancel">' + l.params.button_cancel + "</button>"
						}
					} else {
						if (l.type === "prompt" || l.type === "confirm") {
							if (l.params.reverseButtons) {
								j += '<button id="' + l.type + "-ok-" + l.newid + '">' + h + '</button><button id="' + l.type + "-cancel-" + l.newid + '" class="cancel">' + k + "</button>"
							} else {
								j += '<button id="' + l.type + "-cancel-" + l.newid + '" class="cancel">' + k + '</button><button id="' + l.type + "-ok-" + l.newid + '">' + h + "</button>"
							}
						}
					}
				}
				j += "</div>"
			}
			i = '<div id="smoke-bg-' + l.newid + '" class="smokebg"></div><div class="dialog smoke ' + m + '"><div class="dialog-inner">' + n + g + j + "</div></div>";
			if (!d.init) {
				d.listen(window, "load", function () {
					d.finishbuild(n, l, i)
				})
			} else {
				d.finishbuild(n, l, i)
			}
		},
		finishbuild: function (j, i, h) {
			var g = document.getElementById("smoke-out-" + i.newid);
			g.className = "smoke-base smoke-visible  smoke-" + i.type;
			g.innerHTML = h;
			while (g.innerHTML === "") {
				g.innerHTML = h
			}
			if (d.smoketimeout[i.newid]) {
				clearTimeout(d.smoketimeout[i.newid])
			}
			d.listen(document.getElementById("smoke-bg-" + i.newid), "click", function () {
				d.destroy(i.type, i.newid);
				if (i.type === "prompt" || i.type === "confirm" || i.type === "quiz") {
					i.callback(false)
				} else {
					if (i.type === "alert" && typeof i.callback !== "undefined") {
						i.callback()
					}
				}
			});
			switch (i.type) {
			case "alert":
				d.finishbuildAlert(j, i, h);
				break;
			case "confirm":
				d.finishbuildConfirm(j, i, h);
				break;
			case "quiz":
				d.finishbuildQuiz(j, i, h);
				break;
			case "prompt":
				d.finishbuildPrompt(j, i, h);
				break;
			case "signal":
				d.finishbuildSignal(j, i, h);
				break;
			default:
				throw "Unknown type: " + i.type
			}
		},
		finishbuildAlert: function (i, h, g) {
			d.listen(document.getElementById("alert-ok-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				if (typeof h.callback !== "undefined") {
					h.callback()
				}
			});
			document.onkeyup = function (f) {
				if (!f) {
					f = window.event
				}
				if (f.keyCode === 13 || f.keyCode === 32 || f.keyCode === 27) {
					d.destroy(h.type, h.newid);
					if (typeof h.callback !== "undefined") {
						h.callback()
					}
				}
			}
		},
		finishbuildConfirm: function (i, h, g) {
			d.listen(document.getElementById("confirm-cancel-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				h.callback(false)
			});
			d.listen(document.getElementById("confirm-ok-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				h.callback(true)
			});
			document.onkeyup = function (f) {
				if (!f) {
					f = window.event
				}
				if (f.keyCode === 13 || f.keyCode === 32) {
					d.destroy(h.type, h.newid);
					h.callback(true)
				} else {
					if (f.keyCode === 27) {
						d.destroy(h.type, h.newid);
						h.callback(false)
					}
				}
			}
		},
		finishbuildQuiz: function (i, h, g) {
			d.listen(document.getElementById("quiz-cancel-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				h.callback(false)
			});
			if (a = document.getElementById("quiz-ok1-" + h.newid)) {
				d.listen(a, "click", function () {
					d.destroy(h.type, h.newid);
					h.callback(a.innerHTML)
				})
			}
			if (b = document.getElementById("quiz-ok2-" + h.newid)) {
				d.listen(b, "click", function () {
					d.destroy(h.type, h.newid);
					h.callback(b.innerHTML)
				})
			}
			if (c = document.getElementById("quiz-ok3-" + h.newid)) {
				d.listen(c, "click", function () {
					d.destroy(h.type, h.newid);
					h.callback(c.innerHTML)
				})
			}
			document.onkeyup = function (f) {
				if (!f) {
					f = window.event
				}
				if (f.keyCode === 27) {
					d.destroy(h.type, h.newid);
					h.callback(false)
				}
			}
		},
		finishbuildPrompt: function (j, h, g) {
			var i = document.getElementById("dialog-input-" + h.newid);
			setTimeout(function () {
				i.focus();
				i.select()
			},
			100);
			d.listen(document.getElementById("prompt-cancel-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				h.callback(false)
			});
			d.listen(document.getElementById("prompt-ok-" + h.newid), "click", function () {
				d.destroy(h.type, h.newid);
				h.callback(i.value)
			});
			document.onkeyup = function (f) {
				if (!f) {
					f = window.event
				}
				if (f.keyCode === 13) {
					d.destroy(h.type, h.newid);
					h.callback(i.value)
				} else {
					if (f.keyCode === 27) {
						d.destroy(h.type, h.newid);
						h.callback(false)
					}
				}
			}
		},
		finishbuildSignal: function (i, h, g) {
			document.onkeyup = function (f) {
				if (!f) {
					f = window.event
				}
				if (f.keyCode === 27) {
					d.destroy(h.type, h.newid);
					if (typeof h.callback !== "undefined") {
						h.callback()
					}
				}
			};
			d.smoketimeout[h.newid] = setTimeout(function () {
				d.destroy(h.type, h.newid);
				if (typeof h.callback !== "undefined") {
					h.callback()
				}
			},
			h.timeout)
		},
		destroy: function (g, l) {
			var h = document.getElementById("smoke-out-" + l);
			if (g !== "quiz") {
				var k = document.getElementById(g + "-ok-" + l)
			}
			var j = document.getElementById(g + "-cancel-" + l);
			h.className = "smoke-base";
			if (k) {
				d.stoplistening(k, "click", function () {});
				document.onkeyup = null
			}
			if (g === "quiz") {
				var e = document.getElementsByClassName("quiz-button");
				for (var f = 0; f < e.length; f++) {
					d.stoplistening(e[f], "click", function () {});
					document.onkeyup = null
				}
			}
			if (j) {
				d.stoplistening(j, "click", function () {})
			}
			d.i = 0;
			h.innerHTML = ""
		},
		alert: function (j, i, h) {
			if (typeof h !== "object") {
				h = false
			}
			var k = d.newdialog();
			d.build(j, {
				type: "alert",
				callback: i,
				params: h,
				newid: k
			})
		},
		signal: function (k, i, h) {
			if (typeof h !== "object") {
				h = false
			}
			var j = 5000;
			if (h.duration !== "undefined") {
				j = h.duration
			}
			var l = d.newdialog();
			d.build(k, {
				type: "signal",
				callback: i,
				timeout: j,
				params: h,
				newid: l
			})
		},
		confirm: function (j, i, h) {
			if (typeof h !== "object") {
				h = false
			}
			var k = d.newdialog();
			d.build(j, {
				type: "confirm",
				callback: i,
				params: h,
				newid: k
			})
		},
		quiz: function (j, i, h) {
			if (typeof h !== "object") {
				h = false
			}
			var k = d.newdialog();
			d.build(j, {
				type: "quiz",
				callback: i,
				params: h,
				newid: k
			})
		},
		prompt: function (j, i, h) {
			if (typeof h !== "object") {
				h = false
			}
			var k = d.newdialog();
			return d.build(j, {
				type: "prompt",
				callback: i,
				params: h,
				newid: k
			})
		},
		listen: function (j, i, h) {
			if (j.addEventListener) {
				return j.addEventListener(i, h, false)
			}
			if (j.attachEvent) {
				return j.attachEvent("on" + i, h)
			}
			return false
		},
		stoplistening: function (j, i, h) {
			if (j.removeEventListener) {
				return j.removeEventListener("click", h, false)
			}
			if (j.detachEvent) {
				return j.detachEvent("on" + i, h)
			}
			return false
		}
	};
	d.init = true;
	if (typeof module != "undefined" && module.exports) {
		module.exports = d
	} else {
		if (typeof define === "function" && define.amd) {
			define(d)
		} else {
			this.smoke = d
		}
	}
})();