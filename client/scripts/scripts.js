var requirejs, require, define;
! function(a) {
    function b(a, b) {
        return r.call(a, b)
    }

    function c(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
            o = p.map,
            q = o && o["*"] || {};
        if (a && "." === a.charAt(0))
            if (b) {
                for (a = a.split("/"), g = a.length - 1, p.nodeIdCompat && t.test(a[g]) && (a[g] = a[g].replace(t, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                    if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                    else if (".." === m) {
                    if (1 === k && (".." === a[2] || ".." === a[0])) break;
                    k > 0 && (a.splice(k - 1, 2), k -= 2)
                }
                a = a.join("/")
            } else 0 === a.indexOf("./") && (a = a.substring(2));
        if ((n || q) && o) {
            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n)
                    for (l = n.length; l > 0; l -= 1)
                        if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                            f = e, h = k;
                            break
                        }
                if (f) break;
                !i && q && q[d] && (i = q[d], j = k)
            }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
        }
        return a
    }

    function d(b, c) {
        return function() {
            var d = s.call(arguments, 0);
            return "string" != typeof d[0] && 1 === d.length && d.push(null), k.apply(a, d.concat([b, c]))
        }
    }

    function e(a) {
        return function(b) {
            return c(b, a)
        }
    }

    function f(a) {
        return function(b) {
            n[a] = b
        }
    }

    function g(c) {
        if (b(o, c)) {
            var d = o[c];
            delete o[c], q[c] = !0, j.apply(a, d)
        }
        if (!b(n, c) && !b(q, c)) throw new Error("No " + c);
        return n[c]
    }

    function h(a) {
        var b, c = a ? a.indexOf("!") : -1;
        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
    }

    function i(a) {
        return function() {
            return p && p.config && p.config[a] || {}
        }
    }
    var j, k, l, m, n = {},
        o = {},
        p = {},
        q = {},
        r = Object.prototype.hasOwnProperty,
        s = [].slice,
        t = /\.js$/;
    l = function(a, b) {
        var d, f = h(a),
            i = f[0];
        return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), f = h(a), i = f[0], a = f[1], i && (d = g(i))), {
            f: i ? i + "!" + a : a,
            n: a,
            pr: i,
            p: d
        }
    }, m = {
        require: function(a) {
            return d(a)
        },
        exports: function(a) {
            var b = n[a];
            return "undefined" != typeof b ? b : n[a] = {}
        },
        module: function(a) {
            return {
                id: a,
                uri: "",
                exports: n[a],
                config: i(a)
            }
        }
    }, j = function(c, e, h, i) {
        var j, k, p, r, s, t, u = [],
            v = typeof h;
        if (i = i || c, "undefined" === v || "function" === v) {
            for (e = !e.length && h.length ? ["require", "exports", "module"] : e, s = 0; s < e.length; s += 1)
                if (r = l(e[s], i), k = r.f, "require" === k) u[s] = m.require(c);
                else if ("exports" === k) u[s] = m.exports(c), t = !0;
            else if ("module" === k) j = u[s] = m.module(c);
            else if (b(n, k) || b(o, k) || b(q, k)) u[s] = g(k);
            else {
                if (!r.p) throw new Error(c + " missing " + k);
                r.p.load(r.n, d(i, !0), f(k), {}), u[s] = n[k]
            }
            p = h ? h.apply(n[c], u) : void 0, c && (j && j.exports !== a && j.exports !== n[c] ? n[c] = j.exports : p === a && t || (n[c] = p))
        } else c && (n[c] = h)
    }, requirejs = require = k = function(b, c, d, e, f) {
        if ("string" == typeof b) return m[b] ? m[b](c) : g(l(b, c).f);
        if (!b.splice) {
            if (p = b, p.deps && k(p.deps, p.callback), !c) return;
            c.splice ? (b = c, c = d, d = null) : b = a
        }
        return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? j(a, b, c, d) : setTimeout(function() {
            j(a, b, c, d)
        }, 4), k
    }, k.config = function(a) {
        return k(a)
    }, requirejs._defined = n, define = function(a, c, d) {
        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
        c.splice || (d = c, c = []), !b(n, a) && !b(o, a) && (o[a] = [a, c, d])
    }, define.amd = {
        jQuery: !0
    }
}(), define("../../src/js/libs/almond", function() {}), define("modules/helpers/DomElement", [], function() {
    return {
        hasClass: function(a, b) {
            var c = a.className.split(" "),
                d = c.indexOf(b);
            return d > -1
        },
        addClass: function(a, b) {
            var c = a.className.split(" "),
                d = c.indexOf(b);
            d === -1 && c.push(b), a.className = c.join(" ")
        },
        removeClass: function(a, b) {
            var c = a.className.split(" "),
                d = c.indexOf(b);
            d > -1 && c.splice(d, 1), a.className = c.join(" ")
        },
        toggleClass: function(a, b) {
            var c = a.className.split(" "),
                d = c.indexOf(b);
            d > -1 ? c.splice(d, 1) : c.push(b), a.className = c.join(" ")
        },
        prepend: function(a, b) {
            a.childNodes.length > 0 ? a.insertBefore(b, a.childNodes[0]) : a.appendChild(b)
        },
        removeElement: function(a) {
            a.parentNode.removeChild(a)
        }
    }
}), define("modules/helpers/SmoothScroll", [], function() {
    var a = function(a) {
            return a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
        },
        b = function(b, c, d, e) {
            return d > e ? c : b + (c - b) * a(d / e)
        },
        c = function(a, c, d) {
            duration = c || 500;
            var e = window.pageYOffset,
                f = a,
                g = Date.now(),
                h = function() {
                    var a = Date.now() - g;
                    window.scroll(0, b(e, f, a, duration)), a > duration ? "function" == typeof callback && callback(el) : requestAnimationFrame(h)
                };
            h()
        };
    return function(a, b, d) {
        c(a, b, d)
    }
}), define("modules/helpers/StickyHoverFix", [], function() {
    if ("createTouch" in document) try {
        for (var a = /:hover/, b = 0; b < document.styleSheets.length; b++)
            for (var c = document.styleSheets[b], d = c.cssRules.length - 1; d >= 0; d--) {
                var e = c.cssRules[d];
                e.type === CSSRule.STYLE_RULE && a.test(e.selectorText) && c.deleteRule(d)
            }
    } catch (a) {}
    return {}
}), define("modules/helpers/WindowListener", [], function() {
    function a(a) {
        this.callback = a || function(a) {}, this.adjustScreenHandler = this._adjustScreen.bind(this), this.enable()
    }
    return a.prototype.destroy = function() {
        this.disable(), delete this.callback, delete this.adjustScreenHandler
    }, a.prototype.enable = function() {
        window.addEventListener("orientationchange", this.adjustScreenHandler), window.addEventListener("resize", this.adjustScreenHandler), this._adjustScreen()
    }, a.prototype.resize = function() {}, a.prototype._adjustScreen = function() {
        this.callback({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }, a
}), define("modules/helpers/GoogleAnalytics", [], function() {
    return {
        trackEvent: function(a, b, c) {
            void 0 !== window.ga && ga("send", "event", a, b, c)
        },
        trackPageView: function(a, b) {
            void 0 !== window.ga && ga("send", "pageview", {
                page: a,
                title: b
            })
        }
    }
}), define("modules/helpers/Touch", [], function() {
    function a() {
        this.dragging = !1, this.touchMoveHandler = this._touchMove.bind(this), this.touchStartHandler = this._touchStart.bind(this), this.enable()
    }
    return a.prototype.destroy = function() {
        this.disable(), delete this.dragging, delete this.touchMoveHandler, delete this.touchStartHandler
    }, a.prototype.disable = function() {
        document.body.removeEventListener("touchmove", this.touchMoveHandler), document.body.removeEventListener("touchstart", this.touchStartHandler)
    }, a.prototype.enable = function() {
        document.body.addEventListener("touchmove", this.touchMoveHandler), document.body.addEventListener("touchstart", this.touchStartHandler)
    }, a.prototype.isDragging = function() {
        return this.dragging
    }, a.prototype._touchMove = function() {
        this.dragging = !0
    }, a.prototype._touchStart = function() {
        this.dragging = !1
    }, a
}), define("modules/ui/Carousel", [], function() {
    function a(a, b) {
        this.init(a, b)
    }

    function b() {
        void 0 === window.requestAnimFrame && (window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
        }())
    }

    function c() {
        var a = ["webkit", "Moz", "O", "ms"],
            b = this;
        b.styleTransform = "transform", a.every(function(a) {
            var c = a + "Transform";
            return "undefined" == typeof document.body.style[c] || (b.styleTransform = c, !1)
        }), b.styleTransformOrigin = "transformOrigin", a.every(function(a) {
            var c = a + "TransformOrigin";
            return "undefined" == typeof document.body.style[c] || (b.styleTransformOrigin = c, !1)
        }), b.stylePerspective = null, "undefined" != typeof document.body.style.perspective && (b.stylePerspective = "perspective"), a.every(function(a) {
            var c = a + "Perspective";
            return "undefined" == typeof document.body.style[c] || (b.stylePerspective = c, !1)
        });
        var c = navigator.userAgent.toLowerCase();
        this.isAndroid = c.indexOf("android") > -1
    }

    function d(a, b) {
        if (b <= 0) return "none";
        if (this.settings.infiniteScrolling === !1) {
            var c = Math.round(this.offset / this.settings.itemWidth) + this.settings.numberOfDeselectedItems + 1,
                d = Math.round(this.offset / this.settings.itemWidth) - this.settings.numberOfDeselectedItems - 1;
            if (a > c || a < d) return "none"
        }
        return "block"
    }

    function e(a) {
        return a >= this.items.length ? a % this.items.length : a < 0 ? e.call(this, this.items.length + a % this.items.length) : a
    }

    function f(a) {
        var b, c, f, g, h, i;
        this.offset = "number" == typeof a ? a : this.offset;
        var j = Math.floor((this.offset + this.settings.itemWidth / 2) / this.settings.itemWidth),
            k = this.element.clientWidth / 2 + this.centerOffset,
            l = this.offset - j * this.settings.itemWidth,
            m = l < 0 ? 1 : -1,
            n = this.items.length >> 1,
            o = -m * l * 2 / this.settings.itemWidth,
            p = this.settings.offsetOfSelectedItem * (1 - o),
            q = e.call(this, Math.floor((this.offset + this.settings.itemWidth / 2) / this.settings.itemWidth));
        this.selectedItem = q, f = e.call(this, j), i = -l / 2, h = this.settings.opacityOfDeselectedItem + (this.settings.opacityOfSelectedItem - this.settings.opacityOfDeselectedItem) * (1 - o), g = d.call(this, f, h), b = this.items[f], b.className = this.settings.itemClass + " active", b.style.display = g, b.style.opacity = h, b.style.left = k + i + "px", b.style[this.styleTransform] = "translateX(-50%)", b.style.visibility = "none" === g ? "hidden" : "visible";
        var r, s, t;
        0 !== this.settings.constantSpacing && (t = b.offsetWidth / 2, r = i - t - this.settings.constantSpacing, s = i + t + this.settings.constantSpacing);
        var u = -p - this.settings.itemWidth / 2,
            v = -p + -this.settings.itemWidth * (this.settings.numberOfDeselectedItems + 1) / 2,
            w = p + this.settings.itemWidth / 2,
            x = p + this.settings.itemWidth * (this.settings.numberOfDeselectedItems + 1) / 2;
        for (c = 1; c <= n; ++c) f = e.call(this, j - c), i = -p + (-this.settings.itemWidth * c - l) / 2, h = (i - v) / (u - v) * this.settings.opacityOfDeselectedItem, g = d.call(this, f, h), b = this.items[f], 0 !== this.settings.constantSpacing && (t = b.offsetWidth / 2, r -= t, i = r, r -= t + this.settings.constantSpacing), "none" === g && (i = 0), b.className = this.settings.itemClass, b.style.display = g, b.style.opacity = h, b.style.left = k + i + "px", b.style[this.styleTransform] = "translateX(-50%)", b.style.visibility = "none" === g ? "hidden" : "visible", f = e.call(this, j + c), i = p + (this.settings.itemWidth * c - l) / 2, h = (i - x) / (w - x) * this.settings.opacityOfDeselectedItem, g = d.call(this, f, h), b = this.items[f], 0 !== this.settings.constantSpacing && (t = b.offsetWidth / 2, s += t, i = s, s += t + this.settings.constantSpacing), "none" === g && (i = 0), b.className = this.settings.itemClass, b.style.display = g, b.style.opacity = h, b.style.left = k + i + "px", b.style[this.styleTransform] = "translateX(-50%)", b.style.visibility = "none" === g ? "hidden" : "visible";
        this.settings.infiniteScrolling === !1 && (null !== this.settings.nextButton && (this.settings.nextButton.style.opacity = Math.round(this.offset / this.settings.itemWidth) >= this.items.length - 1 ? .25 : 1), null !== this.settings.prevButton && (this.settings.prevButton.style.opacity = Math.round(this.offset / this.settings.itemWidth) <= 0 ? .25 : 1))
    }
    return a.prototype.init = function(a, d) {
        d = "object" != typeof d ? {} : d, d.constantSpacing = void 0 === d.constantSpacing || "number" != typeof d.constantSpacing ? 0 : d.constantSpacing, d.infiniteScrolling = void 0 !== d.infiniteScrolling && "boolean" == typeof d.infiniteScrolling && d.infiniteScrolling, d.itemClass = void 0 === d.itemClass || "string" != typeof d.itemClass ? "li" : d.itemClass, d.itemWidth = void 0 === d.itemWidth || "number" != typeof d.itemWidth ? 100 : d.itemWidth, d.itemSelector = void 0 === d.itemSelector || "string" != typeof d.itemSelector ? "li" : d.itemSelector, d.nextButton = void 0 === d.nextButton || "object" != typeof d.nextButton ? null : d.nextButton, d.numberOfDeselectedItems = void 0 === d.numberOfDeselectedItems || "number" != typeof d.numberOfDeselectedItems ? 2 : d.numberOfDeselectedItems, d.offsetOfSelectedItem = void 0 === d.offsetOfSelectedItem || "number" != typeof d.offsetOfSelectedItem ? 30 : d.offsetOfSelectedItem, d.opacityOfDeselectedItem = void 0 === d.opacityOfDeselectedItem || "number" != typeof d.opacityOfDeselectedItem ? .3 : d.opacityOfDeselectedItem, d.opacityOfSelectedItem = void 0 === d.opacityOfSelectedItem || "number" != typeof d.opacityOfSelectedItem ? 1 : d.opacityOfSelectedItem, d.prevButton = void 0 === d.prevButton || "object" != typeof d.prevButton ? null : d.prevButton, d.selectedIndex = void 0 === d.selectedIndex || "number" != typeof d.selectedIndex ? 0 : d.selectedIndex, d.selectedItem = void 0 === d.selectedItem || "object" != typeof d.selectedItem ? null : d.selectedItem;
        var e, f, g;
        if (this.element = a, this.items = this.element.querySelectorAll(d.itemSelector), this.settings = d, null !== this.settings.selectedItem)
            for (f = 0, g = this.items.length; f < g; ++f)
                if (e = this.items[f], e === this.settings.settings.selectedItem) {
                    this.settings.selectedItem = f;
                    break
                }
        for (this.selectedItem = this.settings.selectedIndex, this.enabled = !1, this.timeConstant = 250, this.offset = this.target = 0, this.centerOffset = 0, b.call(this), c.call(this), this.element.style.cursor = "default", this.element.style.display = "block", this.element.style.listStyle = "none", this.element.style.margin = "0", this.element.style.overflow = "hidden", this.element.style.padding = "0", this.element.style.position = "relative", f = 0, g = this.items.length; f < g; ++f) e = this.items[f], e.style.position = "absolute", e.style.left = "0", e.style[this.styleTransformOrigin] = "center center";
        this.nextButtonUpHandler = this.nextButtonUpEvent.bind(this), this.prevButtonUpHandler = this.prevButtonUpEvent.bind(this), this.resizeHandler = this.resizeEvent.bind(this), this.enable()
    }, a.prototype.destroy = function() {
        this.disable(), this.element.removeAttribute("style");
        var a, b;
        for (a = 0, b = this.items.length; a < b; ++a) this.items[a].className = this.settings.itemClass, this.items[a].removeAttribute("style")
    }, a.prototype.enable = function() {
        this.enabled = !0, this.element.style.opacity = "1", null !== this.settings.nextButton && this.settings.nextButton.addEventListener("mouseup", this.nextButtonUpHandler), null !== this.settings.prevButton && this.settings.prevButton.addEventListener("mouseup", this.prevButtonUpHandler), window.addEventListener("orientationchange", this.resizeHandler), window.addEventListener("resize", this.resizeHandler), f.call(this, this.selectedItem * this.settings.itemWidth)
    }, a.prototype.disable = function() {
        this.enabled = !1, this.element.style.opacity = "0.3", window.removeEventListener("orientationchange", this.resizeHandler), window.removeEventListener("resize", this.resizeHandler), null !== this.settings.nextButton && this.settings.nextButton.removeEventListener("mouseup", this.nextButtonUpHandler), null !== this.settings.prevButton && this.settings.prevButton.removeEventListener("mouseup", this.prevButtonUpHandler)
    }, a.prototype.getIndex = function() {
        return this.selectedItem
    }, a.prototype.getItem = function() {
        return this.items[this.selectedItem]
    }, a.prototype.setCenterOffset = function(a) {
        this.centerOffset = a
    }, a.prototype.setIndex = function(a) {
        if (this.enabled !== !1) {
            var b = this.offset - (this.selectedItem - a) * this.settings.itemWidth;
            if (this.settings.infiniteScrolling) {
                var c = this.offset - b;
                c > this.items.length * this.settings.itemWidth * .5 ? b += this.items.length * this.settings.itemWidth : c < this.items.length * this.settings.itemWidth * -.5 && (b -= this.items.length * this.settings.itemWidth)
            } else b < 0 ? b = 0 : b > this.settings.itemWidth * (this.items.length - 1) && (b = this.settings.itemWidth * (this.items.length - 1));
            return b = Math.round(b / this.settings.itemWidth) * this.settings.itemWidth, this.target = b, this.offset !== this.target ? (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimFrame(this.autoScroll.bind(this)), !0) : void 0
        }
    }, a.prototype.setItem = function(a) {
        if (this.enabled !== !1) {
            var b, c;
            for (b = 0, c = this.items.length; b < c; ++b)
                if (this.items[b] === a) return void this.setIndex(b)
        }
    }, a.prototype.nextItem = function() {
        this.enabled !== !1 && (this.settings.infiniteScrolling === !1 && this.selectedItem >= this.items.length - 1 || this.setIndex(this.selectedItem + 1))
    }, a.prototype.prevItem = function() {
        this.enabled !== !1 && (this.settings.infiniteScrolling === !1 && this.selectedItem <= 0 || this.setIndex(this.selectedItem - 1))
    }, a.prototype.setItemWidth = function(a) {
        this.settings.itemWidth = void 0 === a || "number" != typeof a ? this.settings.itemWidth : a
    }, a.prototype.setOffsetOfSelectedItem = function(a) {
        this.settings.offsetOfSelectedItem = void 0 === a || "number" != typeof a ? this.settings.offsetOfSelectedItem : a
    }, a.prototype.setNumberOfDeselectedItems = function(a) {
        this.settings.numberOfDeselectedItems = void 0 === a || "number" != typeof a ? this.settings.numberOfDeselectedItems : a
    }, a.prototype.redraw = function() {
        if (this.enabled !== !1) {
            var a = this;
            setTimeout(function() {
                f.call(a, a.selectedItem * a.settings.itemWidth)
            }, 10)
        }
    }, a.prototype.track = function() {
        var a, b, c, d;
        a = Date.now(), b = a - this.timestamp, this.timestamp = a, c = this.offset - this.frame, this.frame = this.offset, d = 1e3 * c / (1 + b), this.velocity = .8 * d + .2 * this.velocity
    }, a.prototype.autoScroll = function() {
        var a, b;
        this.amplitude && (a = Date.now() - this.timestamp, b = this.amplitude * Math.exp(-a / this.timeConstant), Math.abs(b) > 1 ? (f.call(this, this.target - b), requestAnimFrame(this.autoScroll.bind(this))) : (f.call(this, this.target), null !== this.stylePerspective && (this.element.style[this.stylePerspective] = "1000")))
    }, a.prototype.nextButtonUpEvent = function(a) {
        this.nextItem(), a.preventDefault()
    }, a.prototype.prevButtonUpEvent = function(a) {
        this.prevItem(), a.preventDefault()
    }, a.prototype.resizeEvent = function(a) {
        this.redraw()
    }, a
}), define("modules/ui/Tabs", ["modules/helpers/DomElement"], function(a) {
    function b(b, c) {
        this.element = b, this.callback = c, this.tabs = this.element.querySelectorAll(".tabs li"), this.tabPanes = this.element.querySelectorAll(".tab-pane"), this.tabToggles = this.element.querySelectorAll(".tab-toggle"), this.tabs.length > 0 ? this.showTab(this.tabs[0].querySelector("a").getAttribute("href")) : 1 === this.tabPanes.length && a.addClass(this.tabPanes[0], "active"), this.handler = this._click.bind(this)
    }
    return b.prototype.destroy = function() {
        this.disable(), delete this.element, delete this.tabs, delete this.tabPanes, delete this.tabToggles, delete this.handler
    }, b.prototype.disable = function() {
        for (var a = 0, b = this.tabToggles.length; a < b; ++a) this.tabToggles[a].removeEventListener("click", this.handler)
    }, b.prototype.enable = function() {
        for (var a = 0, b = this.tabToggles.length; a < b; ++a) this.tabToggles[a].addEventListener("click", this.handler)
    }, b.prototype.showTab = function(b) {
        var c, d;
        for (c = 0, d = this.tabs.length; c < d; ++c) this.tabs[c].querySelector("a").getAttribute("href") === b ? a.addClass(this.tabs[c], "active") : a.removeClass(this.tabs[c], "active");
        var e = this.element.querySelector(b);
        for (null === e && (e = this.tabPanes[0]), c = 0, d = this.tabPanes.length; c < d; ++c) this.tabPanes[c].scrollTop = 0, this.tabPanes[c] === e ? a.addClass(this.tabPanes[c], "active") : a.removeClass(this.tabPanes[c], "active");
        "function" == typeof this.callback && this.callback(e)
    }, b.prototype._click = function(a) {
        a.preventDefault();
        var b = a.target.getAttribute("href");
        null !== b && this.showTab(b)
    }, b
}), define("modules/ui/Scrubber", [], function() {
    function a(a, b, c, d, e, f) {
        this.element = a || document.body, this.callbackDown = b || function(a) {}, this.callbackMove = c || function(a) {}, this.callbackStop = d || function(a) {}, this.active = !1, this.mouseEnabled = void 0 === e || e, this.touchEnabled = void 0 === f || f, this.mouseDownHandler = this._mouseDown.bind(this), this.mouseMoveHandler = this._mouseMove.bind(this), this.mouseUpHandler = this._mouseUp.bind(this), this.touchDownHandler = this._touchDown.bind(this), this.touchMoveHandler = this._touchMove.bind(this), this.touchUpHandler = this._touchUp.bind(this)
    }
    return a.prototype.destroy = function() {
        this.disable(), delete this.element, delete this.callbackDown, delete this.callbackMove, delete this.callbackStop, delete this.active
    }, a.prototype.enable = function() {
        this.mouseEnabled && (this.element.addEventListener("mousedown", this.mouseDownHandler), this.element.addEventListener("mousemove", this.mouseMoveHandler), this.element.addEventListener("mouseup", this.mouseUpHandler), this.element.addEventListener("mouseout", this.mouseUpHandler)), this.touchEnabled && (this.element.addEventListener("touchstart", this.touchDownHandler), this.element.addEventListener("touchmove", this.touchMoveHandler), this.element.addEventListener("touchend", this.touchUpHandler), this.element.addEventListener("touchcancel", this.touchUpHandler))
    }, a.prototype.disable = function() {
        this.mouseEnabled && (this.element.removeEventListener("mousedown", this.mouseDownHandler), this.element.removeEventListener("mousemove", this.mouseMoveHandler), this.element.removeEventListener("mouseup", this.mouseUpHandler), this.element.removeEventListener("mouseout", this.mouseUpHandler)), this.touchEnabled && (this.element.removeEventListener("touchstart", this.touchDownHandler), this.element.removeEventListener("touchmove", this.touchMoveHandler), this.element.removeEventListener("touchend", this.touchUpHandler), this.element.removeEventListener("touchcancel", this.touchUpHandler))
    }, a.prototype._mouseDown = function(a) {
        a.preventDefault(), this.active = !0, this.callbackDown(this._calculateMousePercents(a))
    }, a.prototype._mouseMove = function(a) {
        this.active && (a.preventDefault(), this.callbackMove(this._calculateMousePercents(a)))
    }, a.prototype._mouseUp = function(a) {
        this.active && (a.preventDefault(), this.active = !1, this.callbackStop(this._calculateMousePercents(a)))
    }, a.prototype._touchDown = function(a) {
        1 === a.touches.length ? (a.preventDefault(), this.active = !0, this.callbackDown(this._calculateTouchPercents(a))) : this._touchUp(a)
    }, a.prototype._touchMove = function(a) {
        this.active && 1 === a.touches.length ? (a.preventDefault(), this.callbackMove(this._calculateTouchPercents(a))) : this._touchUp(a)
    }, a.prototype._touchUp = function(a) {
        this.active && (a.preventDefault(), this.active = !1, this.callbackStop(this._calculateTouchPercents(a)))
    }, a.prototype._calculateMousePercents = function(a) {
        var b = a.target || a.srcElement,
            c = b.getBoundingClientRect(),
            d = a.clientX - c.left,
            e = a.clientY - c.top,
            f = a.currentTarget.offsetWidth,
            g = a.currentTarget.offsetHeight,
            h = d / f;
        h = h < 0 ? 0 : h, h = h > 1 ? 1 : h;
        var i = e / g;
        return i = i < 0 ? 0 : i, i = i > 1 ? 1 : i, {
            touch: "mouse",
            x: h,
            y: i
        }
    }, a.prototype._calculateTouchPercents = function(a) {
        var b = a.target || a.srcElement,
            c = b.getBoundingClientRect(),
            d = a.touches[0].clientX - c.left,
            e = a.touches[0].clientY - c.top,
            f = a.currentTarget.offsetWidth,
            g = a.currentTarget.offsetHeight,
            h = d / f;
        h = h < 0 ? 0 : h, h = h > 1 ? 1 : h;
        var i = e / g;
        return i = i < 0 ? 0 : i, i = i > 1 ? 1 : i, {
            type: "touch",
            x: h,
            y: i
        }
    }, a
}), define("modules/ui/VideoControls", ["modules/helpers/GoogleAnalytics", "modules/ui/Scrubber"], function(a, b) {
    function c(c, d, e) {
        this.element = c, this.video = d, this.name = e, this.buttonPlay = this.element.querySelector(".button-play"), this.buttonPlayIcon = this.buttonPlay.querySelector("i"), this.buttonVolume = this.element.querySelector(".button-volume"), this.buttonVolumeIcons = this.buttonVolume.querySelectorAll("i"), this.time = this.element.querySelector(".video-time"), this.bar = this.element.querySelector(".video-bar"), this.barLoaded = this.bar.querySelector(".loaded"), this.barProgress = this.bar.querySelector(".progress"), this.buttonPlayClickedHandler = this._buttonPlayClicked.bind(this), this.seekScrubber = new b(this.bar, this._seekScrubberChanged.bind(this), this._seekScrubberChanged.bind(this), this._seekScrubberChanged.bind(this)), this.seekScrubber.enable(), this.volumeScrubber = new b(this.buttonVolume, this._volumeScrubberChanged.bind(this), this._volumeScrubberChanged.bind(this), this._volumeScrubberChanged.bind(this)), this.volumeScrubber.enable(), a.trackEvent("Video", "play", this.name)
    }
    return c.prototype.destroy = function() {
        this.buttonPlay.removeEventListener("click", this.buttonPlayClickedHandler), this.seekScrubber.destroy(), this.volumeScrubber.destroy(), delete this.element, delete this.video, delete this.buttonPlay, delete this.buttonPlayIcon, delete this.buttonVolume, delete this.buttonVolumeIcons, delete this.time, delete this.bar, delete this.barLoaded, delete this.barProgress, delete this.buttonPlayClickedHandler, delete this.seekScrubber, delete this.volumeScrubber
    }, c.prototype.ready = function() {
        this.buttonPlay.addEventListener("click", this.buttonPlayClickedHandler)
    }, c.prototype.updateStatus = function(a) {
        a ? this.buttonPlayIcon.className = "icon-play" : this.buttonPlayIcon.className = "icon-pause"
    }, c.prototype.finished = function() {
        a.trackEvent("Video", "finished", this.name)
    }, c.prototype.updateLoadProgress = function(a) {
        this.barLoaded.style.width = 100 * a + "%"
    }, c.prototype.updatePlayProgress = function(a, b, c) {
        this.barProgress.style.width = 100 * a + "%", this.time.innerHTML = "00:00";
        var d = parseInt(c - b),
            e = parseInt(d / 60),
            f = d % 60;
        this.time.innerHTML = (e < 10 ? "0" + e : e) + ":" + (f < 10 ? "0" + f : f)
    }, c.prototype.updateVolume = function(a) {
        this.buttonVolumeIcons[0].className = "icon-volume-4", a <= .05 ? this.buttonVolumeIcons[1].className = "icon-volume-0" : a <= .3 ? this.buttonVolumeIcons[1].className = "icon-volume-1" : a <= .55 ? this.buttonVolumeIcons[1].className = "icon-volume-2" : a <= .8 ? this.buttonVolumeIcons[1].className = "icon-volume-3" : this.buttonVolumeIcons[1].className = "icon-volume-4"
    }, c.prototype._buttonPlayClicked = function(a) {
        a.preventDefault(), this.video.togglePlay()
    }, c.prototype._seekScrubberChanged = function(a) {
        this.video.seekTo(a.x)
    }, c.prototype._volumeScrubberChanged = function(a) {
        this.video.setVolume(a.x)
    }, c
});
var Froogaloop = function() {
    function a(b) {
        return new a.fn.init(b)
    }

    function b(a, b, c) {
        if (!c.contentWindow.postMessage) return !1;
        var d = JSON.stringify({
            method: a,
            value: b
        });
        c.contentWindow.postMessage(d, j)
    }

    function c(a) {
        var b, c;
        try {
            b = JSON.parse(a.data), c = b.event || b.method
        } catch (a) {}
        if ("ready" === c && !i && (i = !0), !/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === j && (j = a.origin);
        var d = b.value,
            f = b.data,
            g = "" === g ? null : b.player_id,
            h = e(c, g),
            k = [];
        return !!h && (void 0 !== d && k.push(d), f && k.push(f), g && k.push(g), k.length > 0 ? h.apply(null, k) : h.call())
    }

    function d(a, b, c) {
        c ? (h[c] || (h[c] = {}), h[c][a] = b) : h[a] = b
    }

    function e(a, b) {
        return b ? h[b][a] : h[a]
    }

    function f(a, b) {
        if (b && h[b]) {
            if (!h[b][a]) return !1;
            h[b][a] = null
        } else {
            if (!h[a]) return !1;
            h[a] = null
        }
        return !0
    }

    function g(a) {
        return !!(a && a.constructor && a.call && a.apply)
    }
    var h = {},
        i = !1,
        j = (Array.prototype.slice, "*");
    return a.fn = a.prototype = {
        element: null,
        init: function(a) {
            return "string" == typeof a && (a = document.getElementById(a)), this.element = a, this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var e = this,
                f = e.element,
                h = "" !== f.id ? f.id : null,
                i = g(c) ? null : c,
                j = g(c) ? c : null;
            return j && d(a, j, h), b(a, i, f), e
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var e = this,
                f = e.element,
                g = "" !== f.id ? f.id : null;
            return d(a, c, g), "ready" !== a ? b("addEventListener", a, f) : "ready" === a && i && c.call(null, g), e
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this,
                d = c.element,
                e = "" !== d.id ? d.id : null,
                g = f(a, e);
            "ready" !== a && g && b("removeEventListener", a, d)
        }
    }, a.fn.init.prototype = a.fn, window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c), window.Froogaloop = window.$f = a
}();
define("modules/ui/VideoVimeo", [], function() {
    function a(a) {
        this.vimeoId = a, this.controls = null, this.froogaloop = null, this.isPaused = !0, this.duration = 30
    }
    return a.prototype.destroy = function() {
        null !== this.froogaloop && (this.froogaloop.removeEvent("ready"), this.froogaloop.removeEvent("loadProgress"), this.froogaloop.removeEvent("playProgress"), this.froogaloop.removeEvent("play"), this.froogaloop.removeEvent("pause"), this.froogaloop.removeEvent("finish"), this.froogaloop.removeEvent("seek"), this.froogaloop.api("unload")), delete this.controls, delete this.froogaloop, delete this.isPaused, delete this.vimeoId
    }, a.prototype.getHtml = function() {
        return '<iframe id="video-player" src="http://player.vimeo.com/video/' + this.vimeoId + '?api=1&amp;player_id=video-player&amp;autoplay=1" frameborder="0"></iframe>'
    }, a.prototype.setup = function(a) {
        this.controls = a, this.froogaloop = $f(document.getElementById("video-player")), this.froogaloop.addEvent("ready", this._ready.bind(this))
    }, a.prototype.pause = function() {
        null !== this.froogaloop && this.froogaloop.api("pause")
    }, a.prototype.play = function() {
        null !== this.froogaloop && this.froogaloop.api("play")
    }, a.prototype.seekTo = function(a) {
        null !== this.froogaloop && this.froogaloop.api("seekTo", a * this.duration)
    }, a.prototype.setVolume = function(a) {
        null !== this.froogaloop && (this.controls.updateVolume(a), this.froogaloop.api("setVolume", a))
    }, a.prototype.togglePlay = function() {
        this.isPaused ? this.play() : this.pause()
    }, a.prototype._ready = function(a) {
        var b = this;
        this.froogaloop.addEvent("loadProgress", this._loadProgress.bind(this)), this.froogaloop.addEvent("playProgress", this._playProgress.bind(this)), this.froogaloop.addEvent("play", this._play.bind(this)), this.froogaloop.addEvent("pause", this._pause.bind(this)), this.froogaloop.addEvent("finish", this._finish.bind(this)), this.froogaloop.addEvent("seek", this._seek.bind(this)), this.controls.ready(), this.controls.updateStatus(this.isPaused), this.froogaloop.api("getVolume", function(a, c) {
            b.controls.updateVolume(a)
        })
    }, a.prototype._loadProgress = function(a) {
        this.duration = a.duration, this.controls.updateLoadProgress(a.percent)
    }, a.prototype._playProgress = function(a) {
        this.duration = a.duration, this.controls.updatePlayProgress(a.percent, a.seconds, a.duration)
    }, a.prototype._play = function() {
        this.isPaused = !1, this.controls.updateStatus(this.isPaused)
    }, a.prototype._pause = function() {
        this.isPaused = !0, this.controls.updateStatus(this.isPaused)
    }, a.prototype._finish = function() {
        this.isPaused = !0, this.controls.finished(), this.controls.updateStatus(this.isPaused)
    }, a.prototype._seek = function(a) {
        this.controls.updatePlayProgress(a.percent, a.seconds, a.duration)
    }, a
}), define("modules/ui/VideoModal", ["modules/ui/VideoControls", "modules/ui/VideoVimeo"], function(a, b) {
    function c(c, d, e) {
        if (this.closedCallback = e, this.controls = null, this.element = null, this.video = null, 0 === d.indexOf("https://vimeo.com/")) {
            var f = d.replace("https://vimeo.com/", "");
            this.video = new b(f)
        }
        if (null === this.video) {
            var g = this;
            return void setTimeout(function() {
                g.close()
            }, 10)
        }
        var h = "";
        h += '<div class="video-container">', h += this.video.getHtml(), h += "</div>", h += '<div class="video-controls">', h += '<div class="info">', h += '<button class="button-close"><i class="icon-close"></i></button>', h += '<div class="video-title"><span>' + c + "</span></div>", h += "</div>", h += '<div class="controls">', h += '<button class="button-play"><i></i></button>', h += '<div class="video-bar"><div class="loaded"></div><div class="progress"></div></div>', h += '<div class="video-time"></div>', h += '<button class="button-volume"><i></i><i></i></button>', h += "</div>", h += "</div>", this.element = document.createElement("div"), this.element.className = "video-modal", this.element.innerHTML = h, document.body.appendChild(this.element), this.controls = new a(this.element.querySelector(".controls"), this.video, c), this.video.setup(this.controls), this.buttonCloseClickedHandler = this._buttonCloseClicked.bind(this), this.buttonClose = this.element.querySelector(".button-close"), this.buttonClose.addEventListener("click", this.buttonCloseClickedHandler)
    }
    return c.prototype.close = function() {
        this.video.pause(), this.closedCallback()
    }, c.prototype.destroy = function() {
        this.buttonClose.removeEventListener("click", this.buttonCloseClickedHandler), null !== this.video && this.video.destroy(), null !== this.controls && this.controls.destroy(), null !== this.element && (this.element.innerHTML = "", document.body.removeChild(this.element)), delete this.buttonClose, delete this.buttonCloseClickedHandler, delete this.closedCallback, delete this.controls, delete this.elements, delete this.video
    }, c.prototype._buttonCloseClicked = function(a) {
        a.preventDefault(), this.close()
    }, c
}), define("modules/managers/StateManager", ["modules/helpers/DomElement", "modules/helpers/GoogleAnalytics", "modules/helpers/SmoothScroll", "modules/helpers/Touch", "modules/ui/Carousel", "modules/ui/Tabs", "modules/ui/VideoModal"], function(a, b, c, d, e, f, g) {
    function h(a, b) {
        this.baseUrl = document.body.getAttribute("data-base-url"), this.contentId = "main", this.content = document.getElementById(this.contentId), this.currentHref = window.location.href, this.pages = {}, this.titles = {}, this.pages[this.currentHref] = this.content.innerHTML, this.titles[this.currentHref] = document.title, this.parser = new DOMParser, this.enableContentCallback = b, this.historyPopStateHandler = this._historyPopState.bind(this), this.linkClickedHandler = this._linkClicked.bind(this), this.masonry = [], this.modules = a, this.noMainLinks = document.body.getAttribute("data-no-main").split("|"), this.supportsHistoryAPI = this._supportsHistoryAPI(), this.carousel = null, this.tabs = null, this.timer = 0, this.touchHelper = new d, this.videoModal = null, this.enable()
    }
    return h.prototype.destroy = function() {
        this.disable(), this.touchHelper.destroy(), delete this.baseUrl, delete this.contentId, delete this.content, delete this.currentHref, delete this.enableContentCallback, delete this.historyPopStateHandler, delete this.linkClickedHandler, delete this.masonry, delete this.modules, delete this.noMainLinks, delete this.pages, delete this.parser, delete this.supportsHistoryAPI, delete this.carousel, delete this.tabs, delete this.timer, delete this.titles, delete this.touchHelper, delete this.videoModal, delete this.xhr
    }, h.prototype.disable = function() {
        this._disableContent(), this._closeModals(), this.supportsHistoryAPI && (window.removeEventListener("popstate", this.historyPopStateHandler), document.body.removeEventListener("click", this.linkClickedHandler), document.body.removeEventListener("touchend", this.linkClickedHandler))
    }, h.prototype.enable = function() {
        this._enableContent(), this.supportsHistoryAPI ? (window.addEventListener("popstate", this.historyPopStateHandler), document.body.addEventListener("click", this.linkClickedHandler), document.body.addEventListener("touchend", this.linkClickedHandler)) : document.querySelector("footer button").style.display = "none";
    }, h.prototype.changeState = function(a, b) {
        if (this.currentHref !== a) {
            this.currentHref = a, void 0 === b && (b = !0), b && this.supportsHistoryAPI && history.pushState(null, null, a), this._closeModals(), this._updateModules();
            var c = this;
            this.xhr && this.xhr.abort(), this._showLoader(), this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
                void 0 !== c.pages[a] ? (c._disableContent(), c.content.innerHTML = c.pages[a], document.title = c.titles[a], c.trackPageView(a, c.titles[a]), c._enableContent(), c._hideLoader()) : (c.xhr = new XMLHttpRequest, c.xhr.onreadystatechange = function(b) {
                    4 === c.xhr.readyState && 200 === c.xhr.status && (c._disableContent(), xmlDoc = c.parser.parseFromString(c.xhr.responseText, "text/html"), c.pages[a] = xmlDoc.getElementById(c.contentId).innerHTML, c.titles[a] = xmlDoc.title, c.content.innerHTML = c.pages[a], document.title = c.titles[a], c.trackPageView(a, c.titles[a]), c._enableContent(), c._hideLoader())
                }, c.xhr.open("GET", a, !0), c.xhr.setRequestHeader("Content-type", "text/html"), c.xhr.send())
            }, 500)
        }
    }, h.prototype.adjustSizeOfMain = function() {
        this.noMainLinks.indexOf(this.currentHref) > -1 ? this.content.style.minHeight = "0" : this.content.style.minHeight = window.innerHeight + "px"
    }, h.prototype._updateModules = function() {
        for (i = 0, l = this.modules.length; i < l; ++i) this.modules[i].setActiveLink(this.currentHref)
    }, h.prototype._disableContent = function() {
        for (var a = 0, b = this.masonry.length; a < b; ++a) this.masonry[a].destroy();
        this.masonry = [], null !== this.carousel && (this.carousel.destroy(), this.carousel = null), null !== this.tabs && (this.tabs.destroy(), this.tabs = null)
    }, h.prototype._enableContent = function() {
        var b, c, d = this,
            g = document.getElementById("cards-load-more"),
            h = document.getElementById("cards-more-items");
        h = h ? JSON.parse(h.innerHTML) : [];
        var i = this.content.querySelectorAll(".cards-grid");
        if (i) {
            for (b = 0, c = i.length; b < c; ++b) {
                var j = new Isotope(i[b], {
                    columnWidth: ".card",
                    isResizeBound: !0,
                    itemSelector: ".card",
                    transitionDuration: 0
                });
                this.masonry.push(j)
            }
            var k = document.querySelectorAll(".card-toggles button");
            if (k) {
                var l = function(b) {
                    a.removeClass(document.querySelector(".card-toggles button.active"), "active"), a.addClass(b.target, "active");
                    var c = b.target.getAttribute("data-filter").split("|");
                    if (g && (c.length >= 6 ? 0 === h.length ? a.addClass(g, "hide") : a.removeClass(g, "hide") : a.addClass(g, "hide")), 0 !== h.length) {
                        var e = h.splice(0, h.length);
                        d.masonry[0].destroy();
                        for (var f = 0, j = e.length; f < j; ++f) {
                            var k = d.parser.parseFromString(e[f], "text/html");
                            i[0].appendChild(k.body.firstChild)
                        }
                        d.masonry[0] = new Isotope(i[0], {
                            columnWidth: ".card",
                            isResizeBound: !0,
                            itemSelector: ".card",
                            transitionDuration: 0
                        }), d.masonry[0].layout()
                    }
                    d.masonry[0].arrange({
                        filter: function(b) {
                            for (var d = 0, e = c.length; d < e; ++d)
                                if (a.hasClass(b, c[d])) return !0;
                            return !1
                        }
                    })
                };
                for (b = 0, c = k.length; b < c; ++b) k[b].addEventListener("click", l)
            }
            if (setTimeout(function() {
                    for (b = 0, c = d.masonry.length; b < c; ++b) d.masonry[b].layout()
                }, 500), setTimeout(function() {
                    for (b = 0, c = d.masonry.length; b < c; ++b) d.masonry[b].layout()
                }, 1e3), setTimeout(function() {
                    for (b = 0, c = d.masonry.length; b < c; ++b) d.masonry[b].layout()
                }, 2e3), g) {
                var m = parseInt(g.getAttribute("data-items-per-page"));
                g.addEventListener("click", function(b) {
                    b.preventDefault();
                    var c = document.body.scrollTop,
                        e = h.splice(0, m);
                    0 === h.length && a.addClass(g, "hide"), d.masonry[0].destroy();
                    for (var f = 0, j = e.length; f < j; ++f) {
                        var k = d.parser.parseFromString(e[f], "text/html");
                        i[0].appendChild(k.body.firstChild)
                    }
                    d.masonry[0] = new Isotope(i[0], {
                        columnWidth: ".card",
                        isResizeBound: !0,
                        itemSelector: ".card",
                        transitionDuration: 0
                    }), d.masonry[0].layout(), document.body.scrollTop = c, setTimeout(function() {
                        for (f = 0, j = d.masonry.length; f < j; ++f) d.masonry[f].layout()
                    }, 500), setTimeout(function() {
                        for (f = 0, j = d.masonry.length; f < j; ++f) d.masonry[f].layout()
                    }, 1e3)
                })
            }
        }
        var n = this.content.querySelector(".journey-hero ul");
        n && (this.carousel = new e(n, {
            constantSpacing: 40,
            infiniteScrolling: !0,
            itemWidth: 1e3,
            numberOfDeselectedItems: 1,
            opacityOfDeselectedItem: 1,
            nextButton: this.content.querySelector(".journey-hero .icon-arrow-right"),
            prevButton: this.content.querySelector(".journey-hero .icon-arrow-left")
        })), this.tabs = new f(this.content, function(a) {
            for (b = 0, c = d.masonry.length; b < c; ++b) d.masonry[b].layout()
        }), this.tabs.enable(), this.enableContentCallback(this.currentHref), this.adjustSizeOfMain()
    }, h.prototype._hideLoader = function() {
        a.removeClass(this.content, "loading"), c(0)
    }, h.prototype._showLoader = function() {
        a.addClass(this.content, "loading"), this.adjustSizeOfMain()
    }, h.prototype._supportsHistoryAPI = function() {
        return !!window.history && !!history.pushState
    }, h.prototype._historyPopState = function(a) {
        var b = window.location.href;
        this.changeState(b, !1)
    }, h.prototype._linkClicked = function(a) {
        var b = a.target.getAttribute("href");
        if (!this.touchHelper.isDragging() && (null === b || 0 !== b.indexOf("#")) && null !== b) {
            if (0 === b.indexOf(this.baseUrl) && b.indexOf("wp-admin") === -1) {
                if (a.preventDefault(), 0 === b.indexOf(this.currentHref) && b.indexOf("#") > -1) {
                    var d = document.getElementById(b.split("#")[1]);
                    if (null !== d) {
                        var e = d.offsetTop - d.scrollTop + d.clientTop;
                        return window.innerWidth >= 900 && (e -= 65), void c(e)
                    }
                }
                this.changeState(b)
            }
            if (0 === b.indexOf("https://vimeo.com/")) {
                if (null !== this.videoModal) return;
                a.preventDefault();
                var f = a.target.getAttribute("title");
                null === f && (f = "Video"), this.videoModal = new g(f, b, this._videoModalClosed.bind(this))
            }
        }
    }, h.prototype.trackPageView = function(a, c) {
        a = a.replace(this.baseUrl, "/"), b.trackPageView(a, c)
    }, h.prototype._closeModals = function() {
        null !== this.videoModal && this.videoModal.close()
    }, h.prototype._videoModalClosed = function() {
        null !== this.videoModal && (this.videoModal.destroy(), this.videoModal = null)
    }, h
}), define("modules/ui/VideoClip", [], function() {
    function a(a) {
        this.element = a.element, this.videoIsLoaded = !1, this.videoShouldPlay = !1;
        var b = a.autoplay || "true" === this.element.getAttribute("data-autoplay"),
            c = a.poster || this.element.getAttribute("data-poster-src"),
            d = a.src || this.element.getAttribute("data-video-src");
        navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || (this.video = document.createElement("video"), this.video.className = "loading", this.video.canPlayType && ("" === this.video.canPlayType("video/mp4") && (d = d.replace(".mp4", ".webm")), this.videoLoadedHandler = this._videoLoaded.bind(this), this.videoErrorHandler = this._videoError.bind(this), this.video.addEventListener("canplaythrough", this.videoLoadedHandler), this.video.addEventListener("error", this.videoErrorHandler), b && this.video.setAttribute("autoplay", "autoplay"), c && this.video.setAttribute("poster", c), this.video.setAttribute("loop", "loop"), this.video.setAttribute("muted", "muted"), this.video.setAttribute("preload", "auto"), this.video.setAttribute("src", d), this.element.appendChild(this.video), this.video.load()))
    }
    return a.prototype.destroy = function() {
        this.video.removeEventListener("canplaythrough", this.videoLoadedHandler), this.video.removeEventListener("error", this.videoErrorHandler), this.video.src = "", delete this.element, delete this.resizeHeight, delete this.resizeWidth, delete this.video, delete this.videoIsLoaded, delete this.videoShouldPlay, delete this.videoLoadedHandler, delete this.videoErrorHandler
    }, a.prototype.pause = function() {
        this.videoShouldPlay = !1, void 0 !== this.video && this.videoIsLoaded && this.video.pause()
    }, a.prototype.play = function() {
        this.videoShouldPlay = !0, void 0 !== this.video && this.videoIsLoaded && this.video.play()
    }, a.prototype.resize = function(a, b) {
        if (this.resizeHeight = b, this.resizeWidth = a, void 0 !== this.video && (0 !== this.video.videoWidth || 0 !== this.video.videoHeight)) {
            var c, d, e = a / b,
                f = this.video.videoWidth / this.video.videoHeight;
            e > f ? (c = a, d = a / this.video.videoWidth * this.video.videoHeight) : (c = b / this.video.videoHeight * this.video.videoWidth, d = b), this.video.style.width = c + "px", this.video.style.height = d + "px", this.video.className = ""
        }
    }, a.prototype._videoLoaded = function(a) {
        void 0 !== this.video && (this.videoIsLoaded || (this.video.removeEventListener("canplaythrough", this.videoLoadedHandler), this.video.removeEventListener("error", this.videoErrorHandler), this.videoIsLoaded = !0, this.videoShouldPlay && this.play(), void 0 !== this.resizeHeight && void 0 !== this.resizeWidth && this.resize(this.resizeWidth, this.resizeHeight)))
    }, a.prototype._videoError = function(a) {
        void 0 !== this.video && (this.video.removeEventListener("canplaythrough", this.videoLoadedHandler), this.video.removeEventListener("error", this.videoErrorHandler), this.destroy())
    }, a
}), define("modules/ui/Hero", ["modules/helpers/DomElement", "modules/ui/VideoClip"], function(a, b) {
    function c(c) {
        this.element = c, this.videoClip = new b({
            element: this.element
        });
        var d = this;
        setTimeout(function() {
            a.hasClass(d.element, "hide") === !1 && d.videoClip.play()
        }, 1e3)
    }
    return c.prototype.destroy = function() {
        this.videoClip.destroy(), delete this.element, delete this.videoClip
    }, c.prototype.hide = function() {
        this.videoClip.pause(), a.addClass(this.element, "hide")
    }, c.prototype.show = function() {
        this.videoClip.play(), a.removeClass(this.element, "hide")
    }, c.prototype.resize = function(a, b) {
        this.element.style.height = b + "px", this.videoClip.resize(a + 4, b + 4)
    }, c
}), define("modules/ui/Map", ["modules/helpers/DomElement", "modules/helpers/GoogleAnalytics"], function(a, b) {
    function c(a, b) {
        var c = this;
        this.mapIsReady = !1, this.container = a, this.element = b, this.panelContent = document.getElementById("map-panel-content"), this.container.querySelector("button.close").addEventListener("click", this._closeButtonClicked.bind(this)), document.getElementById("coordinates-button").addEventListener("click", this._initMap.bind(this)), this.clusterSelectedHandler = this._clusterSelected.bind(this), window.clusterSelected = this.clusterSelectedHandler;

            e = new google.maps.Map(this.element, {

                disableDoubleClickZoom: !1,
                draggable: !0,
                keyboardShortcuts: !1,
                mapTypeControlOptions: {
                    mapTypeIds: google.maps.MapTypeId.ROADMAP
                },
                scrollwheel: !1,
                panControl: !1,
                zoomControl: !1,
                scaleControl: !1,
                streetViewControl: !1,
                zoom: 3,
                minZoom: 2
            });
        google.maps.event.addListener(e, "zoom_changed", function() {
            c._hidePanel()
        }), this.map = e, e.mapTypes.set("uncharted", new google.maps.StyledMapType([{
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#000000"
            }, {
                lightness: 40
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
                lightness: "-10"
            }, {
                color: "#3f3f3f"
            }]
        }, {
            featureType: "landscape",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{
                lightness: "-10"
            }, {
                color: "#3f3f3f"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{
                lightness: "-13"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 21
            }]
        }, {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#222222"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{
                lightness: "-23"
            }, {
                visibility: "on"
            }, {
                color: "#242424"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }], {
            name: "UNCHARTED WATERS"
        })), e.setMapTypeId("uncharted")
    }
    return c.prototype.destroy = function() {
        this.disable(), delete this.element, delete this.items
    }, c.prototype.resize = function(a, b) {
        this.container.style.height = b + "px", this.element.style.height = b + "px"
    }, c.prototype.setActiveLink = function(b) {
        b.indexOf("coordinates") === -1 ? (a.removeClass(document.body, "coordinates"), a.addClass(this.container, "hide"), this._hidePanel()) : (a.addClass(document.body, "coordinates"), a.removeClass(this.container, "hide"))
    }, c.prototype._initMap = function() {
        function c(a) {
            var b = new google.maps.MarkerImage(a.thumb, new google.maps.Size(36, 36), new google.maps.Point(0, 0), new google.maps.Point(18, 18), new google.maps.Size(36, 36)),
                c = new google.maps.Marker({
                    position: new google.maps.LatLng(a.latitude, a.longitude),
                    map: d.map,
                    title: a.id_str,
                    icon: b,
                    flat: !1
                });
            f.push(c)
        }
        if (!this.mapIsReady) {
            this.mapIsReady = !0, b.trackEvent("Uncharted Photos", "map launched", "");
            var d = this,
                e = JSON.parse(document.getElementById("map-data").innerHTML);
            this.markerData = e;
            for (var f = [], g = 0; g < e.length; g++) c(e[g]);
            var h = (new MarkerClusterer(this.map, f), document.createElement("div"));
            h.innerHTML = document.getElementById("map-controls").innerHTML, h.index = 1, this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(h);
            var i = h.querySelectorAll("button");
            i[0].addEventListener("click", function(a) {
                a.preventDefault(), d.map.setZoom(d.map.getZoom() + 1)
            }), i[1].addEventListener("click", function(a) {
                a.preventDefault(), d.map.setZoom(d.map.getZoom() - 1)
            }), a.removeElement(document.getElementById("map-overview-desktop"))
        }
    }, c.prototype._hidePanel = function() {
        var b = document.querySelectorAll(".map-cluster-icon");
        if (b)
            for (var c = 0, d = b.length; c < d; ++c) a.removeClass(b[c], "active");
        a.removeClass(this.container, "show-panel");
        var e = this;
        setTimeout(function() {
            google.maps.event.trigger(e.map, "resize")
        }, 500)
    }, c.prototype._showPanel = function(b) {
        for (var c = b.split("|"), d = "", e = 0, f = this.markerData.length; e < f; ++e)
            if (c.indexOf(this.markerData[e].id_str) > -1) {
                var g = this.markerData[e].image;
                g = g.replace("HTTPS://", "//"), g = g.replace("https://", "//"), g = g.replace("HTTP://", "//"), g = g.replace("http://", "//"), d += '<div class="instagram-map-post">', d += '<p class="photo"><a href="' + this.markerData[e].link + '" target="_blank"><img src="' + g + '" /></a><p>', d += '<p class="user"><a href="https://instagram.com/' + this.markerData[e].user_name + '" target="_blank">@' + this.markerData[e].user_name + '</a><a href="' + this.markerData[e].link + '" target="_blank"><i class="icon-instagram"></i></a></p>', d += '<p class="author"><a href="https://instagram.com/' + this.markerData[e].user_name + '" target="_blank">' + this.markerData[e].user_full + "</a></p>", d += '<p class="caption">' + this.markerData[e].caption + "</p>", d += "</div>"
            }
        d ? (this.panelContent.innerHTML = d, a.addClass(this.container, "show-panel")) : this._hidePanel()
    }, c.prototype._clusterSelected = function(c, d, e) {
        if (null !== c) {
            for (var f = a.hasClass(c, "active"), g = document.querySelectorAll(".map-cluster-icon"), h = 0, i = g.length; h < i; ++h) a.removeClass(g[h], "active");
            if (f) this._hidePanel();
            else {
                if (a.addClass(c, "active"), a.hasClass(this.container, "show-panel")) this.map.panTo(d);
                else {
                    var j = this;
                    setTimeout(function() {
                        google.maps.event.trigger(j.map, "resize"), j.map.panTo(d)
                    }, 500)
                }
                b.trackEvent("Uncharted Photos", "photo click", ""), this._showPanel(e)
            }
        }
    }, c.prototype._closeButtonClicked = function(a) {
        a.preventDefault(), this._hidePanel()
    }, c
}), define("modules/ui/MobileMenu", ["modules/helpers/DomElement"], function(a) {
    function b(a) {
        this.element = a, this.button = this.element.querySelector("button"), this.className = "show-menu", this.handler = this._change.bind(this)
    }
    return b.prototype.destroy = function() {
        this.hide(), this.disable(), delete this.element, delete this.button, delete this.className, delete this.handler
    }, b.prototype.disable = function() {
        this.button.removeEventListener("click", this.handler)
    }, b.prototype.enable = function() {
        this.button.addEventListener("click", this.handler)
    }, b.prototype.hide = function() {
        a.removeClass(this.element, this.className)
    }, b.prototype.show = function() {
        a.addClass(this.element, this.className)
    }, b.prototype.toggle = function() {
        a.toggleClass(this.element, this.className)
    }, b.prototype._change = function(a) {
        a.preventDefault(), this.toggle()
    }, b
}), define("modules/ui/SimpleMenu", ["modules/helpers/DomElement"], function(a) {
    function b(a) {
        this.element = a, this.items = this.element.querySelectorAll("li"), this.enable()
    }
    return b.prototype.destroy = function() {
        this.disable(), delete this.element, delete this.items
    }, b.prototype.disable = function() {}, b.prototype.enable = function() {}, b.prototype.setActiveLink = function(b) {
        var c, d, e;
        for (d = 0, e = this.items.length; d < e; ++d) c = this.items[d].querySelector("a"), b.indexOf(c.getAttribute("href")) > -1 ? a.addClass(this.items[d], "active") : (a.removeClass(this.items[d], "active"), a.removeClass(this.items[d], "current-menu-item"))
    }, b
}), define("modules/ui/VideoMenu", ["modules/helpers/DomElement", "modules/ui/VideoClip"], function(a, b) {
    function c(c) {
        this.element = c, this.currentItem = -1, this.items = [], this.links = [], this.videoClips = [];
        for (var d = this.element.querySelectorAll("li"), e = this.element.querySelectorAll("a"), f = 0, g = e.length; f < g; ++f) a.hasClass(d[f], "active") && (this.currentItem = f), this.items.push(d[f]), this.links.push(e[f]), this.videoClips.push(new b({
            element: e[f]
        }));
        var h = this;
        setTimeout(function() {
            h.currentItem > -1 && h.videoClips[h.currentItem].play()
        }, 1e3);
        var i = !1;
        try {
            document.createEvent("TouchEvent"), i = !0
        } catch (a) {
            i = !1
        }
        this.mouseIsEnabled = !i, this.mouseOverHandler = this._mouseOver.bind(this), this.mouseOutHandler = this._mouseOut.bind(this), this.enable()
    }
    return c.prototype.destroy = function() {
        this.disable();
        for (var a = 0, b = this.videoClips.length; a < b; ++a) this.videoClips[a].destroy();
        delete this.element, delete this.currentItem, delete this.items, delete this.links, delete this.mouseIsEnabled, delete this.mouseOverHandler, delete this.mouseOutHandler, delete this.videoClips
    }, c.prototype.disable = function() {
        if (this.mouseIsEnabled)
            for (var a = 0, b = this.links.length; a < b; ++a) this.links[a].removeEventListener("mouseover", this.mouseOverHandler), this.links[a].removeEventListener("mouseout", this.mouseOutHandler)
    }, c.prototype.enable = function() {
        if (this.mouseIsEnabled)
            for (var a = 0, b = this.links.length; a < b; ++a) this.links[a].addEventListener("mouseover", this.mouseOverHandler), this.links[a].addEventListener("mouseout", this.mouseOutHandler)
    }, c.prototype.hide = function() {
        a.addClass(this.element, "hide")
    }, c.prototype.show = function() {
        a.removeClass(this.element, "hide")
    }, c.prototype.resize = function(a, b) {
        var c, d;
        if (a < 900 || b < 550)
            for (a < 900 && (a = 900), b < 550 && (b = 550), this.element.removeAttribute("style"), c = 0, d = this.links.length; c < d; ++c) this.links[c].removeAttribute("style");
        else
            for (this.element.style.height = b + "px", c = 0, d = this.links.length; c < d; ++c) this.links[c].style.height = b + "px";
        for (c = 0, d = this.videoClips.length; c < d; ++c) this.videoClips[c].resize(a + 4, b + 4)
    }, c.prototype.setActiveItem = function(b) {
        if (this.currentItem !== b) {
            this.currentItem = b, this.currentItem !== -1 ? a.addClass(this.element, "active") : a.removeClass(this.element, "active");
            for (var c = 0, d = this.items.length; c < d; ++c) c === this.currentItem ? (a.addClass(this.items[c], "active"), this.videoClips[c].play()) : (a.removeClass(this.items[c], "active"), this.videoClips[c].pause())
        }
    }, c.prototype.setActiveLink = function(a) {
        for (var b = -1, c = 0, d = this.links.length; c < d; ++c)
            if (this.links[c].getAttribute("href") === a) {
                b = c;
                break
            }
        this.setActiveItem(b)
    }, c.prototype._mouseOver = function(a) {
        if (this.currentItem === -1) {
            var b = this.links.indexOf(a.target);
            this.videoClips[b].play()
        }
    }, c.prototype._mouseOut = function(a) {
        if (this.currentItem === -1) {
            var b = this.links.indexOf(a.target);
            this.videoClips[b].pause()
        }
    }, c
}), require(["modules/helpers/DomElement", "modules/helpers/SmoothScroll", "modules/helpers/StickyHoverFix", "modules/helpers/WindowListener", "modules/managers/StateManager", "modules/ui/Hero", "modules/ui/Map", "modules/ui/MobileMenu", "modules/ui/SimpleMenu", "modules/ui/VideoMenu"], function(a, b, c, d, e, f, g, h, i, j) {
    function k() {
        var a = o.currentItem,
            b = o.links;
        if (a > -1) {
            var c, d, e, f = a + 1 >= b.length ? 0 : a + 1,
                g = a - 1 < 0 ? b.length - 1 : a - 1,
                h = b[f].getAttribute("href"),
                i = b[g].getAttribute("href");
            if (e = document.querySelectorAll(".athlete-next-link a"))
                for (c = 0, d = e.length; c < d; ++c) e[c].setAttribute("href", h);
            if (e = document.querySelectorAll(".athlete-prev-link a"))
                for (c = 0, d = e.length; c < d; ++c) e[c].setAttribute("href", i)
        }
    }
    if (void 0 === window.isBadBrowser || window.isBadBrowser !== !0) {
        var l = document.documentElement.className,
            m = new RegExp("(^|\\s)no-js(\\s|$)");
        document.documentElement.className = l.replace(m, "$1js$2");
        var n = new f(document.getElementById("hero")),
            o = new j(document.getElementById("athletes-menu")),
            p = new i(document.getElementById("header__nav__links")),
            q = new g(document.getElementById("map-container"), document.getElementById("map")),
            r = (document.getElementById("main"), new h(document.getElementById("header")));
        r.enable(), document.querySelector("footer button").addEventListener("click", function(a) {
            a.preventDefault(), b(0)
        }), k();
        var s, t = document.body.getAttribute("data-athletes-url"),
            u = document.body.getAttribute("data-base-url"),
            v = {
                setActiveLink: function(b) {
                    r.hide(), clearTimeout(s), a.addClass(document.body, "transition"), s = setTimeout(function() {
                        clearTimeout(s), a.removeClass(document.body, "transition")
                    }, 1e3), b === t ? a.addClass(document.body, "athletes") : a.removeClass(document.body, "athletes"), 0 === b.indexOf(t) ? o.show() : o.hide(), b === u ? (a.addClass(document.body, "home"), n.show()) : (a.removeClass(document.body, "home"), n.hide())
                }
            },
            w = new e([o, p, q, v], function(a) {
                k()
            }),
            x = (new d(function(a) {
                o.resize(a.width, a.height), n.resize(a.width, a.height), q.resize(a.width, a.height), w.adjustSizeOfMain()
            }), document.getElementById("loading"));
        x && (a.addClass(x, "hide"), setTimeout(function() {
            a.removeElement(x)
        }, 1600))
    }
}), define("main", function() {});