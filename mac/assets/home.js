!function(e, t) {
    function n(e) {
        var t = he[e] = {};
        return K.each(e.split(te), function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(me, "-$1").toLowerCase();
            if ("string" == typeof (r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ge.test(r) ? K.parseJSON(r) : r)
                } catch (e) {}
                K.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function i(e) {
        var t;
        for (t in e)
            if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function o() {
        return !1
    }
    function a() {
        return !0
    }
    function s(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function l(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    function u(e, t, n) {
        if (t = t || 0,
        K.isFunction(t))
            return K.grep(e, function(e, r) {
                return !!t.call(e, r, e) === n
            });
        if (t.nodeType)
            return K.grep(e, function(e, r) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var r = K.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (Oe.test(t))
                return K.filter(t, r, !n);
            t = K.filter(t, r)
        }
        return K.grep(e, function(e, r) {
            return K.inArray(e, t) >= 0 === n
        })
    }
    function c(e) {
        var t = Re.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function p(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, r, i, o = K._data(e), a = K._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; r < i; r++)
                        K.event.add(t, n, s[n][r])
            }
            a.data && (a.data = K.extend({}, a.data))
        }
    }
    function d(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
        K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ve.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(K.expando))
    }
    function h(e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function g(e) {
        Ve.test(e.type) && (e.defaultChecked = e.checked)
    }
    function m(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = mt.length; i--; )
            if ((t = mt[i] + n)in e)
                return t;
        return r
    }
    function y(e, t) {
        return e = t || e,
        "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }
    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            n = e[o],
            n.style && (i[o] = K._data(n, "olddisplay"),
            t ? (i[o] || "none" !== n.style.display || (n.style.display = ""),
            "" === n.style.display && y(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nt(n, "display"),
            i[o] || "none" === r || K._data(n, "olddisplay", r)));
        for (o = 0; o < a; o++)
            n = e[o],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
        return e
    }
    function x(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function b(e, t, n, r) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; i < 4; i += 2)
            "margin" === n && (o += K.css(e, n + gt[i], !0)),
            r ? ("content" === n && (o -= parseFloat(nt(e, "padding" + gt[i])) || 0),
            "margin" !== n && (o -= parseFloat(nt(e, "border" + gt[i] + "Width")) || 0)) : (o += parseFloat(nt(e, "padding" + gt[i])) || 0,
            "padding" !== n && (o += parseFloat(nt(e, "border" + gt[i] + "Width")) || 0));
        return o
    }
    function w(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight
          , i = !0
          , o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (r <= 0) {
            if (r = nt(e, t),
            (r < 0 || null == r) && (r = e.style[t]),
            ct.test(r))
                return r;
            i = o && (K.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + b(e, t, n || (o ? "border" : "content"), i) + "px"
    }
    function T(e) {
        if (pt[e])
            return pt[e];
        var t = K("<" + e + ">").appendTo(W.body)
          , n = t.css("display");
        return t.remove(),
        "none" !== n && "" !== n || (rt = W.body.appendChild(rt || K.extend(W.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        it && rt.createElement || (it = (rt.contentWindow || rt.contentDocument).document,
        it.write("<!doctype html><html><body>"),
        it.close()),
        t = it.body.appendChild(it.createElement(e)),
        n = nt(t, "display"),
        W.body.removeChild(rt)),
        pt[e] = n,
        n
    }
    function N(e, t, n, r) {
        var i;
        if (K.isArray(t))
            K.each(t, function(t, i) {
                n || xt.test(e) ? r(e, i) : N(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== K.type(t))
            r(e, t);
        else
            for (i in t)
                N(e + "[" + i + "]", t[i], n, r)
    }
    function C(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i, o, a = t.toLowerCase().split(te), s = 0, l = a.length;
            if (K.isFunction(n))
                for (; s < l; s++)
                    r = a[s],
                    o = /^\+/.test(r),
                    o && (r = r.substr(1) || "*"),
                    i = e[r] = e[r] || [],
                    i[o ? "unshift" : "push"](n)
        }
    }
    function k(e, n, r, i, o, a) {
        o = o || n.dataTypes[0],
        a = a || {},
        a[o] = !0;
        for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === Mt; u < c && (f || !s); u++)
            "string" == typeof (s = l[u](n, r, i)) && (!f || a[s] ? s = t : (n.dataTypes.unshift(s),
            s = k(e, n, r, i, s, a)));
        return !f && s || a["*"] || (s = k(e, n, r, i, "*", a)),
        s
    }
    function E(e, n) {
        var r, i, o = K.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && K.extend(!0, e, i)
    }
    function S(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (o in c)
            o in r && (n[c[o]] = r[o]);
        for (; "*" === u[0]; )
            u.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (o in l)
                if (l[o] && l[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0]in r)
            a = u[0];
        else {
            for (o in r) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        if (a)
            return a !== u[0] && u.unshift(a),
            r[a]
    }
    function j(e, t) {
        var n, r, i, o, a = e.dataTypes.slice(), s = a[0], l = {}, u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        a[1])
            for (n in e.converters)
                l[n.toLowerCase()] = e.converters[n];
        for (; i = a[++u]; )
            if ("*" !== i) {
                if ("*" !== s && s !== i) {
                    if (!(n = l[s + " " + i] || l["* " + i]))
                        for (r in l)
                            if (o = r.split(" "),
                            o[1] === i && (n = l[s + " " + o[0]] || l["* " + o[0]])) {
                                !0 === n ? n = l[r] : !0 !== l[r] && (i = o[0],
                                a.splice(u--, 0, i));
                                break
                            }
                    if (!0 !== n)
                        if (n && e.throws)
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: n ? e : "No conversion from " + s + " to " + i
                                }
                            }
                }
                s = i
            }
        return {
            state: "success",
            data: t
        }
    }
    function A() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    function D() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function L() {
        return setTimeout(function() {
            Xt = t
        }, 0),
        Xt = K.now()
    }
    function H(e, t) {
        K.each(t, function(t, n) {
            for (var r = (Qt[t] || []).concat(Qt["*"]), i = 0, o = r.length; i < o; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }
    function F(e, t, n) {
        var r, i = 0, o = Gt.length, a = K.Deferred().always(function() {
            delete s.elem
        }), s = function() {
            for (var t = Xt || L(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, o = l.tweens.length; i < o; i++)
                l.tweens[i].run(r);
            return a.notifyWith(e, [l, r, n]),
            r < 1 && o ? n : (a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xt || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n, r) {
                var i = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(t) {
                for (var n = 0, r = t ? l.tweens.length : 0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                this
            }
        }), u = l.props;
        for (_(u, l.opts.specialEasing); i < o; i++)
            if (r = Gt[i].call(l, e, u, l.opts))
                return r;
        return H(l, u),
        K.isFunction(l.opts.start) && l.opts.start.call(e, l),
        K.fx.timer(K.extend(s, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function _(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = K.camelCase(n),
            i = t[r],
            o = e[n],
            K.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = K.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function M(e, t, n) {
        var r, i, o, a, s, l, u, c, f = this, p = e.style, d = {}, h = [], g = e.nodeType && y(e);
        n.queue || (u = K._queueHooks(e, "fx"),
        null == u.unqueued && (u.unqueued = 0,
        c = u.empty.fire,
        u.empty.fire = function() {
            u.unqueued || c()
        }
        ),
        u.unqueued++,
        f.always(function() {
            f.always(function() {
                u.unqueued--,
                K.queue(e, "fx").length || u.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        K.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r],
            Jt.exec(o)) {
                if (delete t[r],
                o === (g ? "hide" : "show"))
                    continue;
                h.push(r)
            }
        if (a = h.length)
            for (s = K._data(e, "fxshow") || K._data(e, "fxshow", {}),
            g ? K(e).show() : f.done(function() {
                K(e).hide()
            }),
            f.done(function() {
                var t;
                K.removeData(e, "fxshow", !0);
                for (t in d)
                    K.style(e, t, d[t])
            }),
            r = 0; r < a; r++)
                i = h[r],
                l = f.createTween(i, g ? s[i] : 0),
                d[i] = s[i] || K.style(e, i),
                i in s || (s[i] = l.start,
                g && (l.end = l.start,
                l.start = "width" === i || "height" === i ? 1 : 0))
    }
    function O(e, t, n, r, i) {
        return new O.prototype.init(e,t,n,r,i)
    }
    function q(e, t) {
        for (var n, r = {
            height: e
        }, i = 0; i < 4; i += 2 - t)
            n = gt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function B(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var R, P, W = e.document, $ = e.location, I = e.navigator, z = e.jQuery, X = e.$, U = Array.prototype.push, J = Array.prototype.slice, Y = Array.prototype.indexOf, V = Object.prototype.toString, G = Object.prototype.hasOwnProperty, Q = String.prototype.trim, K = function(e, t) {
        return new K.fn.init(e,t,R)
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ee = /\S/, te = /\s+/, ne = ee.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g, re = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, oe = /^[\],:{}\s]*$/, ae = /(?:^|:|,)(?:\s*\[)+/g, se = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ue = /^-ms-/, ce = /-([\da-z])/gi, fe = function(e, t) {
        return (t + "").toUpperCase()
    }, pe = function() {
        W.addEventListener ? (W.removeEventListener("DOMContentLoaded", pe, !1),
        K.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", pe),
        K.ready())
    }, de = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function(e, n, r) {
            var i, o, a;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if ("string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : re.exec(e)) || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1])
                    return n = n instanceof K ? n[0] : n,
                    a = n && n.nodeType ? n.ownerDocument || n : W,
                    e = K.parseHTML(i[1], a, !0),
                    ie.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0),
                    K.merge(this, e);
                if ((o = W.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = W,
                this.selector = e,
                this
            }
            return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = K.merge(this.constructor(), e);
            return r.prevObject = this,
            r.context = this.context,
            "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        ready: function(e) {
            return K.ready.promise().done(e),
            this
        },
        eq: function(e) {
            return e = +e,
            -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments), "slice", J.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    },
    K.fn.init.prototype = K.fn,
    K.extend = K.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || K.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); l < u; l++)
            if (null != (e = arguments[l]))
                for (n in e)
                    r = s[n],
                    i = e[n],
                    s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1,
                    a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {},
                    s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    }
    ,
    K.extend({
        noConflict: function(t) {
            return e.$ === K && (e.$ = X),
            t && e.jQuery === K && (e.jQuery = z),
            K
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--K.readyWait : !K.isReady) {
                if (!W.body)
                    return setTimeout(K.ready, 1);
                K.isReady = !0,
                !0 !== e && --K.readyWait > 0 || (P.resolveWith(W, [K]),
                K.fn.trigger && K(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === K.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : de[V.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e))
                return !1;
            try {
                if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            var n;
            for (n in e)
                ;
            return n === t || G.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t,
            t = 0),
            t = t || W,
            (r = ie.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []),
            K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = K.trim(t),
            e.JSON && e.JSON.parse ? e.JSON.parse(t) : oe.test(t.replace(se, "@").replace(le, "]").replace(ae, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n)
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (e) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && ee.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(ue, "ms-").replace(ce, fe)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(e, n, r) {
            var i, o = 0, a = e.length, s = a === t || K.isFunction(e);
            if (r)
                if (s) {
                    for (i in e)
                        if (!1 === n.apply(e[i], r))
                            break
                } else
                    for (; o < a && !1 !== n.apply(e[o++], r); )
                        ;
            else if (s) {
                for (i in e)
                    if (!1 === n.call(e[i], i, e[i]))
                        break
            } else
                for (; o < a && !1 !== n.call(e[o], o, e[o++]); )
                    ;
            return e
        },
        trim: Q ? function(e) {
            return null == e ? "" : Q.call(e)
        }
        : function(e) {
            return null == e ? "" : e.toString().replace(ne, "")
        }
        ,
        makeArray: function(e, t) {
            var n, r = t || [];
            return null != e && (n = K.type(e),
            null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (Y)
                    return Y.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r)
                for (; o < r; o++)
                    e[i++] = n[o];
            else
                for (; n[o] !== t; )
                    e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; o < a; o++)
                r = !!t(e[o], o),
                n !== r && i.push(e[o]);
            return i
        },
        map: function(e, n, r) {
            var i, o, a = [], s = 0, l = e.length;
            if (e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e)))
                for (; s < l; s++)
                    null != (i = n(e[s], s, r)) && (a[a.length] = i);
            else
                for (o in e)
                    null != (i = n(e[o], o, r)) && (a[a.length] = i);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n],
            n = e,
            e = r),
            K.isFunction(e) ? (i = J.call(arguments, 2),
            o = function() {
                return e.apply(n, i.concat(J.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || o.guid || K.guid++,
            o) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l, u = null == r, c = 0, f = e.length;
            if (r && "object" == typeof r) {
                for (c in r)
                    K.access(e, n, c, r[c], 1, a, i);
                o = 1
            } else if (i !== t) {
                if (l = s === t && K.isFunction(i),
                u && (l ? (l = n,
                n = function(e, t, n) {
                    return l.call(K(e), n)
                }
                ) : (n.call(e, i),
                n = null)),
                n)
                    for (; c < f; c++)
                        n(e[c], r, l ? i.call(e[c], c, n(e[c], r)) : i, s);
                o = 1
            }
            return o ? e : u ? n.call(e) : f ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    K.ready.promise = function(t) {
        if (!P)
            if (P = K.Deferred(),
            "complete" === W.readyState || "loading" !== W.readyState && W.addEventListener)
                setTimeout(K.ready, 1);
            else if (W.addEventListener)
                W.addEventListener("DOMContentLoaded", pe, !1),
                e.addEventListener("load", K.ready, !1);
            else {
                W.attachEvent("onreadystatechange", pe),
                e.attachEvent("onload", K.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && W.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!K.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        K.ready()
                    }
                }()
            }
        return P.promise(t)
    }
    ,
    K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    }),
    R = K(W);
    var he = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || n(e) : K.extend({}, e);
        var r, i, o, a, s, l, u = [], c = !e.once && [], f = function(t) {
            for (r = e.memory && t,
            i = !0,
            l = a || 0,
            a = 0,
            s = u.length,
            o = !0; u && l < s; l++)
                if (!1 === u[l].apply(t[0], t[1]) && e.stopOnFalse) {
                    r = !1;
                    break
                }
            o = !1,
            u && (c ? c.length && f(c.shift()) : r ? u = [] : p.disable())
        }, p = {
            add: function() {
                if (u) {
                    var t = u.length;
                    !function t(n) {
                        K.each(n, function(n, r) {
                            !K.isFunction(r) || e.unique && p.has(r) ? r && r.length && t(r) : u.push(r)
                        })
                    }(arguments),
                    o ? s = u.length : r && (a = t,
                    f(r))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, function(e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        o && (n <= s && s--,
                        n <= l && l--)
                }),
                this
            },
            has: function(e) {
                return K.inArray(e, u) > -1
            },
            empty: function() {
                return u = [],
                this
            },
            disable: function() {
                return u = c = r = t,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !u || i && !c || (o ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    K.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return K.Deferred(function(n) {
                        K.each(t, function(t, r) {
                            var o = r[0]
                              , a = e[t];
                            i[r[1]](K.isFunction(a) ? function() {
                                var e = a.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                            }
                            : n[o])
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return "object" == typeof e ? K.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            K.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = a.fire,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = J.call(arguments), a = o.length, s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, l = 1 === s ? e : K.Deferred(), u = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? J.call(arguments) : i,
                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); i < a; i++)
                    o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o),
            l.promise()
        }
    }),
    K.support = function() {
        var t, n, r, i, o, a, s, l, u, c, f, p = W.createElement("div");
        if (p.setAttribute("className", "t"),
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = p.getElementsByTagName("*"),
        r = p.getElementsByTagName("a")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        !n || !n.length || !r)
            return {};
        i = W.createElement("select"),
        o = i.appendChild(W.createElement("option")),
        a = p.getElementsByTagName("input")[0],
        t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        a.checked = !0,
        t.noCloneChecked = a.cloneNode(!0).checked,
        i.disabled = !0,
        t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (e) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", f = function() {
            t.noCloneEvent = !1
        }
        ),
        p.cloneNode(!0).fireEvent("onclick"),
        p.detachEvent("onclick", f)),
        a = W.createElement("input"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        t.radioValue = "t" === a.value,
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        p.appendChild(a),
        s = W.createDocumentFragment(),
        s.appendChild(p.lastChild),
        t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = a.checked,
        s.removeChild(a),
        s.appendChild(p),
        p.attachEvent)
            for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                l = "on" + u,
                c = l in p,
                c || (p.setAttribute(l, "return;"),
                c = "function" == typeof p[l]),
                t[u + "Bubbles"] = c;
        return K(function() {
            var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;", s = W.getElementsByTagName("body")[0];
            s && (n = W.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            s.insertBefore(n, s.firstChild),
            r = W.createElement("div"),
            n.appendChild(r),
            r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            i = r.getElementsByTagName("td"),
            i[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            c = 0 === i[0].offsetHeight,
            i[0].style.display = "",
            i[1].style.display = "none",
            t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight,
            r.innerHTML = "",
            r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = 4 === r.offsetWidth,
            t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop,
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width,
            o = W.createElement("div"),
            o.style.cssText = r.style.cssText = a,
            o.style.marginRight = o.style.width = "0",
            r.style.width = "1px",
            r.appendChild(o),
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)),
            void 0 !== r.style.zoom && (r.innerHTML = "",
            r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === r.offsetWidth,
            r.style.display = "block",
            r.style.overflow = "visible",
            r.innerHTML = "<div></div>",
            r.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== r.offsetWidth,
            n.style.zoom = 1),
            s.removeChild(n),
            n = r = i = o = null)
        }),
        s.removeChild(p),
        n = r = i = o = a = s = p = null,
        t
    }();
    var ge = /^(?:\{.*\}|\[.*\])$/
      , me = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando]) && !i(e)
        },
        data: function(e, n, r, i) {
            if (K.acceptData(e)) {
                var o, a, s = K.expando, l = "string" == typeof n, u = e.nodeType, c = u ? K.cache : e, f = u ? e[s] : e[s] && s;
                if (f && c[f] && (i || c[f].data) || !l || r !== t)
                    return f || (u ? e[s] = f = K.deletedIds.pop() || ++K.uuid : f = s),
                    c[f] || (c[f] = {},
                    u || (c[f].toJSON = K.noop)),
                    "object" != typeof n && "function" != typeof n || (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)),
                    o = c[f],
                    i || (o.data || (o.data = {}),
                    o = o.data),
                    r !== t && (o[K.camelCase(n)] = r),
                    l ? null == (a = o[n]) && (a = o[K.camelCase(n)]) : a = o,
                    a
            }
        },
        removeData: function(e, t, n) {
            if (K.acceptData(e)) {
                var r, o, a, s = e.nodeType, l = s ? K.cache : e, u = s ? e[K.expando] : K.expando;
                if (l[u]) {
                    if (t && (r = n ? l[u] : l[u].data)) {
                        K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t),
                        t = t in r ? [t] : t.split(" ")));
                        for (o = 0,
                        a = t.length; o < a; o++)
                            delete r[t[o]];
                        if (!(n ? i : K.isEmptyObject)(r))
                            return
                    }
                    (n || (delete l[u].data,
                    i(l[u]))) && (s ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return K.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }),
    K.fn.extend({
        data: function(e, n) {
            var i, o, a, s, l, u = this[0], c = 0, f = null;
            if (e === t) {
                if (this.length && (f = K.data(u),
                1 === u.nodeType && !K._data(u, "parsedAttrs"))) {
                    for (a = u.attributes,
                    l = a.length; c < l; c++)
                        s = a[c].name,
                        0 === s.indexOf("data-") && (s = K.camelCase(s.substring(5)),
                        r(u, s, f[s]));
                    K._data(u, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e)
            }) : (i = e.split(".", 2),
            i[1] = i[1] ? "." + i[1] : "",
            o = i[1] + "!",
            K.access(this, function(n) {
                if (n === t)
                    return f = this.triggerHandler("getData" + o, [i[0]]),
                    f === t && u && (f = K.data(u, e),
                    f = r(u, e, f)),
                    f === t && i[1] ? this.data(i[0]) : f;
                i[1] = n,
                this.each(function() {
                    var t = K(this);
                    t.triggerHandler("setData" + o, i),
                    K.data(this, e, n),
                    t.triggerHandler("changeData" + o, i)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                K.removeData(this, e)
            })
        }
    }),
    K.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = K._data(e, t),
                n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t)
              , r = n.shift()
              , i = K._queueHooks(e, t)
              , o = function() {
                K.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift()),
            r && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            r.call(e, o, i)),
            !n.length && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    K.removeData(e, t + "queue", !0),
                    K.removeData(e, n, !0)
                })
            })
        }
    }),
    K.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = K.queue(this, e, n);
                K._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = K.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e,
            e = t),
            e = e || "fx"; s--; )
                (r = K._data(a[s], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var ye, ve, xe, be = /[\t\r\n]/g, we = /\r/g, Te = /^(?:button|input)$/i, Ne = /^(?:button|input|object|select|textarea)$/i, Ce = /^a(?:rea|)$/i, ke = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Ee = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = K.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a, s;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(te),
                n = 0,
                r = this.length; n < r; n++)
                    if (i = this[n],
                    1 === i.nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ",
                            a = 0,
                            s = t.length; a < s; a++)
                                ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                            i.className = K.trim(o)
                        } else
                            i.className = e;
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, a, s, l;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(te),
                s = 0,
                l = this.length; s < l; s++)
                    if (i = this[s],
                    1 === i.nodeType && i.className) {
                        for (r = (" " + i.className + " ").replace(be, " "),
                        o = 0,
                        a = n.length; o < a; o++)
                            for (; r.indexOf(" " + n[o] + " ") > -1; )
                                r = r.replace(" " + n[o] + " ", " ");
                        i.className = e ? K.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "boolean" == typeof t;
            return K.isFunction(e) ? this.each(function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, a = K(this), s = t, l = e.split(te); i = l[o++]; )
                        s = r ? s : !a.hasClass(i),
                        a[s ? "addClass" : "removeClass"](i);
                else
                    "undefined" !== n && "boolean" !== n || (this.className && K._data(this, "__className__", this.className),
                    this.className = this.className || !1 === e ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(be, " ").indexOf(t) > -1)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)
                    return i = K.isFunction(e),
                    this.each(function(r) {
                        var o, a = K(this);
                        1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set"in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o)
                    return (n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()]) && "get"in n && (r = n.get(o, "value")) !== t ? r : (r = o.value,
                    "string" == typeof r ? r.replace(we, "") : null == r ? "" : r)
            }
        }
    }),
    K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
                    if (o < 0)
                        return null;
                    for (n = l ? o : 0,
                    r = l ? o + 1 : s.length; n < r; n++)
                        if (i = s[n],
                        i.selected && (K.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                            if (t = K(i).val(),
                            l)
                                return t;
                            a.push(t)
                        }
                    return l && !a.length && s.length ? K(s[o]).val() : a
                },
                set: function(e, t) {
                    var n = K.makeArray(t);
                    return K(e).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l)
                return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : void 0 === e.getAttribute ? K.prop(e, n, r) : (s = 1 !== l || !K.isXMLDoc(e),
                s && (n = n.toLowerCase(),
                a = K.attrHooks[n] || (ke.test(n) ? ve : ye)),
                r !== t ? null === r ? void K.removeAttr(e, n) : a && "set"in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r),
                r) : a && "get"in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n),
                null === o ? t : o))
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a = 0;
            if (t && 1 === e.nodeType)
                for (r = t.split(te); a < r.length; a++)
                    (i = r[a]) && (n = K.propFix[i] || i,
                    o = ke.test(i),
                    o || K.attr(e, i, ""),
                    e.removeAttribute(Ee ? i : n),
                    o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Te.test(e.nodeName) && e.parentNode)
                        K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return ye && K.nodeName(e, "button") ? ye.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (ye && K.nodeName(e, "button"))
                        return ye.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return a = 1 !== s || !K.isXMLDoc(e),
                a && (n = K.propFix[n] || n,
                o = K.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Ne.test(e.nodeName) || Ce.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    ve = {
        get: function(e, n) {
            var r, i = K.prop(e, n);
            return !0 === i || "boolean" != typeof i && (r = e.getAttributeNode(n)) && !1 !== r.nodeValue ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return !1 === t ? K.removeAttr(e, n) : (r = K.propFix[n] || n,
            r in e && (e[r] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    Ee || (xe = {
        name: !0,
        id: !0,
        coords: !0
    },
    ye = K.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n),
            r && (xe[n] ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = W.createAttribute(n),
            e.setAttributeNode(r)),
            r.value = t + ""
        }
    },
    K.each(["width", "height"], function(e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            set: function(e, n) {
                if ("" === n)
                    return e.setAttribute(t, "auto"),
                    n
            }
        })
    }),
    K.attrHooks.contenteditable = {
        get: ye.get,
        set: function(e, t, n) {
            "" === t && (t = "false"),
            ye.set(e, t, n)
        }
    }),
    K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
        K.attrHooks[n] = K.extend(K.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    }),
    K.support.style || (K.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }),
    K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    K.support.enctype || (K.propFix.enctype = "encoding"),
    K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }),
    K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(e, t) {
                if (K.isArray(t))
                    return e.checked = K.inArray(K(e).val(), t) >= 0
            }
        })
    });
    var Se = /^(?:textarea|input|select)$/i
      , je = /^([^\.]*|)(?:\.(.+)|)$/
      , Ae = /(?:^|\s)hover(\.\S+|)\b/
      , De = /^key/
      , Le = /^(?:mouse|contextmenu)|click/
      , He = /^(?:focusinfocus|focusoutblur)$/
      , Fe = function(e) {
        return K.event.special.hover ? e : e.replace(Ae, "mouseenter$1 mouseleave$1")
    };
    K.event = {
        add: function(e, n, r, i, o) {
            var a, s, l, u, c, f, p, d, h, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                for (r.handler && (h = r,
                r = h.handler,
                o = h.selector),
                r.guid || (r.guid = K.guid++),
                l = a.events,
                l || (a.events = l = {}),
                s = a.handle,
                s || (a.handle = s = function(e) {
                    return void 0 === K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments)
                }
                ,
                s.elem = e),
                n = K.trim(Fe(n)).split(" "),
                u = 0; u < n.length; u++)
                    c = je.exec(n[u]) || [],
                    f = c[1],
                    p = (c[2] || "").split(".").sort(),
                    m = K.event.special[f] || {},
                    f = (o ? m.delegateType : m.bindType) || f,
                    m = K.event.special[f] || {},
                    d = K.extend({
                        type: f,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        namespace: p.join(".")
                    }, h),
                    g = l[f],
                    g || (g = l[f] = [],
                    g.delegateCount = 0,
                    m.setup && !1 !== m.setup.call(e, i, p, s) || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))),
                    m.add && (m.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    o ? g.splice(g.delegateCount++, 0, d) : g.push(d),
                    K.event.global[f] = !0;
                e = null
            }
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, p, d, h, g, m = K.hasData(e) && K._data(e);
            if (m && (p = m.events)) {
                for (t = K.trim(Fe(t || "")).split(" "),
                o = 0; o < t.length; o++)
                    if (a = je.exec(t[o]) || [],
                    s = l = a[1],
                    u = a[2],
                    s) {
                        for (d = K.event.special[s] || {},
                        s = (r ? d.delegateType : d.bindType) || s,
                        h = p[s] || [],
                        c = h.length,
                        u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        f = 0; f < h.length; f++)
                            g = h[f],
                            !i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1),
                            g.selector && h.delegateCount--,
                            d.remove && d.remove.call(e, g));
                        0 === h.length && c !== h.length && (d.teardown && !1 !== d.teardown.call(e, u, m.handle) || K.removeEvent(e, s, m.handle),
                        delete p[s])
                    } else
                        for (s in p)
                            K.event.remove(e, s + t[o], n, r, !0);
                K.isEmptyObject(p) && (delete m.handle,
                K.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, i, o) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var a, s, l, u, c, f, p, d, h, g, m = n.type || n, y = [];
                if (!He.test(m + K.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1),
                s = !0),
                m.indexOf(".") >= 0 && (y = m.split("."),
                m = y.shift(),
                y.sort()),
                i && !K.event.customEvent[m] || K.event.global[m]))
                    if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(m,n) : new K.Event(m),
                    n.type = m,
                    n.isTrigger = !0,
                    n.exclusive = s,
                    n.namespace = y.join("."),
                    n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    f = m.indexOf(":") < 0 ? "on" + m : "",
                    i) {
                        if (n.result = t,
                        n.target || (n.target = i),
                        r = null != r ? K.makeArray(r) : [],
                        r.unshift(n),
                        p = K.event.special[m] || {},
                        !p.trigger || !1 !== p.trigger.apply(i, r)) {
                            if (h = [[i, p.bindType || m]],
                            !o && !p.noBubble && !K.isWindow(i)) {
                                for (g = p.delegateType || m,
                                u = He.test(g + m) ? i : i.parentNode,
                                c = i; u; u = u.parentNode)
                                    h.push([u, g]),
                                    c = u;
                                c === (i.ownerDocument || W) && h.push([c.defaultView || c.parentWindow || e, g])
                            }
                            for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
                                u = h[l][0],
                                n.type = h[l][1],
                                d = (K._data(u, "events") || {})[n.type] && K._data(u, "handle"),
                                d && d.apply(u, r),
                                (d = f && u[f]) && K.acceptData(u) && !1 === d.apply(u, r) && n.preventDefault();
                            return n.type = m,
                            o || n.isDefaultPrevented() || p._default && !1 !== p._default.apply(i.ownerDocument, r) || "click" === m && K.nodeName(i, "a") || !K.acceptData(i) || f && i[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !K.isWindow(i) && (c = i[f],
                            c && (i[f] = null),
                            K.event.triggered = m,
                            i[m](),
                            K.event.triggered = t,
                            c && (i[f] = c)),
                            n.result
                        }
                    } else {
                        a = K.cache;
                        for (l in a)
                            a[l].events && a[l].events[m] && K.event.trigger(n, r, a[l].handle.elem, !0)
                    }
            }
        },
        dispatch: function(n) {
            n = K.event.fix(n || e.event);
            var r, i, o, a, s, l, u, c, f, p, d = (K._data(this, "events") || {})[n.type] || [], h = d.delegateCount, g = [].slice.call(arguments), m = !n.exclusive && !n.namespace, y = K.event.special[n.type] || {}, v = [];
            if (g[0] = n,
            n.delegateTarget = this,
            !y.preDispatch || !1 !== y.preDispatch.call(this, n)) {
                if (h && (!n.button || "click" !== n.type))
                    for (a = K(this),
                    a.context = this,
                    o = n.target; o != this; o = o.parentNode || this)
                        if (!0 !== o.disabled || "click" !== n.type) {
                            for (l = {},
                            c = [],
                            a[0] = o,
                            r = 0; r < h; r++)
                                f = d[r],
                                p = f.selector,
                                l[p] === t && (l[p] = a.is(p)),
                                l[p] && c.push(f);
                            c.length && v.push({
                                elem: o,
                                matches: c
                            })
                        }
                for (d.length > h && v.push({
                    elem: this,
                    matches: d.slice(h)
                }),
                r = 0; r < v.length && !n.isPropagationStopped(); r++)
                    for (u = v[r],
                    n.currentTarget = u.elem,
                    i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++)
                        f = u.matches[i],
                        (m || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data,
                        n.handleObj = f,
                        (s = ((K.event.special[f.origType] || {}).handle || f.handler).apply(u.elem, g)) !== t && (n.result = s,
                        !1 === s && (n.preventDefault(),
                        n.stopPropagation())));
                return y.postDispatch && y.postDispatch.call(this, n),
                n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || W,
                i = r.documentElement,
                o = r.body,
                e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0),
                e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[K.expando])
                return e;
            var t, n, r = e, i = K.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = K.Event(r),
            t = o.length; t; )
                n = o[--t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || W),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        special: {
            ready: {
                setup: K.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    K.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    K.event.handle = K.event.dispatch,
    K.removeEvent = W.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    K.Event = function(e, t) {
        if (!(this instanceof K.Event))
            return new K.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e,
        t && K.extend(this, t),
        this.timeStamp = e && e.timeStamp || K.now(),
        this[K.expando] = !0
    }
    ,
    K.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a,
            this.stopPropagation()
        },
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o
    },
    K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                o.selector;
                return i && (i === r || K.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    K.support.submitBubbles || (K.event.special.submit = {
        setup: function() {
            if (K.nodeName(this, "form"))
                return !1;
            K.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                K._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (K.nodeName(this, "form"))
                return !1;
            K.event.remove(this, "._submit")
        }
    }),
    K.support.changeBubbles || (K.event.special.change = {
        setup: function() {
            if (Se.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (K.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                K.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    K.event.simulate("change", this, e, !0)
                })),
                !1;
            K.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Se.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0)
                }),
                K._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return K.event.remove(this, "._change"),
            Se.test(this.nodeName)
        }
    }),
    K.support.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        };
        K.event.special[t] = {
            setup: function() {
                0 == n++ && W.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 == --n && W.removeEventListener(e, r, !0)
            }
        }
    }),
    K.fn.extend({
        on: function(e, n, r, i, a) {
            var s, l;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (l in e)
                    this.on(l, n, r, e[l], a);
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            !1 === i)
                i = o;
            else if (!i)
                return this;
            return 1 === a && (s = i,
            i = function(e) {
                return K().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = K.guid++)),
            this.each(function() {
                K.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, a;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (a in e)
                    this.off(a, n, e[a]);
                return this
            }
            return !1 !== n && "function" != typeof n || (r = n,
            n = t),
            !1 === r && (r = o),
            this.each(function() {
                K.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return K(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return K(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                K.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return K.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || K.guid++
              , r = 0
              , i = function(n) {
                var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                return K._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
            };
            for (i.guid = n; r < t.length; )
                t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        K.fn[t] = function(e, n) {
            return null == n && (n = e,
            e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
        ,
        De.test(t) && (K.event.fixHooks[t] = K.event.keyHooks),
        Le.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
    }),
    function(e, t) {
        function n(e, t, n, r) {
            for (var i = 0, o = t.length; i < o; i++)
                re(e, t[i], n, r)
        }
        function r(e, t, r, i, o, a) {
            var s, l = ie.setFilters[t.toLowerCase()];
            return l || re.error(t),
            !e && (s = o) || n(e || "*", i, s = [], o),
            s.length > 0 ? l(s, r, a) : []
        }
        function i(e, i, o, a, s) {
            for (var l, u, c, f, p, d, h, g, m = 0, y = s.length, v = $.POS, x = new RegExp("^" + v.source + "(?!" + N + ")","i"), b = function() {
                for (var e = 1, n = arguments.length - 2; e < n; e++)
                    arguments[e] === t && (l[e] = t)
            }; m < y; m++) {
                for (v.exec(""),
                e = s[m],
                f = [],
                c = 0,
                p = a; l = v.exec(e); )
                    (g = v.lastIndex = l.index + l[0].length) > c && (h = e.slice(c, l.index),
                    c = g,
                    d = [i],
                    H.test(h) && (p && (d = p),
                    p = a),
                    (u = B.test(h)) && (h = h.slice(0, -5).replace(H, "$&*")),
                    l.length > 1 && l[0].replace(x, b),
                    p = r(h, l[1], l[2], d, p, u));
                p ? (f = f.concat(p),
                (h = e.slice(c)) && ")" !== h ? H.test(h) ? n(h, f, o, a) : re(h, i, o, a ? a.concat(p) : p) : w.apply(o, f)) : re(e, i, o, a)
            }
            return 1 === y ? o : re.uniqueSort(o)
        }
        function o(e, t, n) {
            for (var r, i, o, a = [], s = 0, l = _.exec(e), u = !l.pop() && !l.pop(), c = u && e.match(F) || [""], f = ie.preFilter, p = ie.filter, d = !n && t !== g; null != (i = c[s]) && u; s++)
                for (a.push(r = []),
                d && (i = " " + i); i; ) {
                    u = !1,
                    (l = H.exec(i)) && (i = i.slice(l[0].length),
                    u = r.push({
                        part: l.pop().replace(L, " "),
                        captures: l
                    }));
                    for (o in p)
                        !(l = $[o].exec(i)) || f[o] && !(l = f[o](l, t, n)) || (i = i.slice(l.shift().length),
                        u = r.push({
                            part: o,
                            captures: l
                        }));
                    if (!u)
                        break
                }
            return u || re.error(e),
            a
        }
        function a(e, t, n) {
            var r = t.dir
              , i = x++;
            return e || (e = function(e) {
                return e === n
            }
            ),
            t.first ? function(t, n) {
                for (; t = t[r]; )
                    if (1 === t.nodeType)
                        return e(t, n) && t
            }
            : function(t, n) {
                for (var o, a = i + "." + f, s = a + "." + c; t = t[r]; )
                    if (1 === t.nodeType) {
                        if ((o = t[T]) === s)
                            return t.sizset;
                        if ("string" == typeof o && 0 === o.indexOf(a)) {
                            if (t.sizset)
                                return t
                        } else {
                            if (t[T] = s,
                            e(t, n))
                                return t.sizset = !0,
                                t;
                            t.sizset = !1
                        }
                    }
            }
        }
        function s(e, t) {
            return e ? function(n, r) {
                var i = t(n, r);
                return i && e(!0 === i ? n : i, r)
            }
            : t
        }
        function l(e, t, n) {
            for (var r, i, o = 0; r = e[o]; o++)
                ie.relative[r.part] ? i = a(i, ie.relative[r.part], t) : (r.captures.push(t, n),
                i = s(i, ie.filter[r.part].apply(null, r.captures)));
            return i
        }
        function u(e) {
            return function(t, n) {
                for (var r, i = 0; r = e[i]; i++)
                    if (r(t, n))
                        return !0;
                return !1
            }
        }
        var c, f, p, d, h, g = e.document, m = g.documentElement, y = !1, v = !0, x = 0, b = [].slice, w = [].push, T = ("sizcache" + Math.random()).replace(".", ""), N = "[\\x20\\t\\r\\n\\f]", C = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", k = C.replace("w", "w#"), E = "\\[" + N + "*(" + C + ")" + N + "*(?:([*^$|!~]?=)" + N + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + k + ")|)|)" + N + "*\\]", S = ":(" + C + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)", j = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)", A = N + "*([\\x20\\t\\r\\n\\f>+~])" + N + "*", D = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + E + "|" + S.replace(2, 7) + "|[^\\\\(),])+", L = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$","g"), H = new RegExp("^" + A), F = new RegExp(D + "?(?=" + N + "*,|$)","g"), _ = new RegExp("^(?:(?!,)(?:(?:^|,)" + N + "*" + D + ")*?|" + N + "*(.*?))(\\)|$)"), M = new RegExp(D.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + A,"g"), O = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, q = /[\x20\t\r\n\f]*[+~]/, B = /:not\($/, R = /h\d/i, P = /input|select|textarea|button/i, W = /\\(?!\\)/g, $ = {
            ID: new RegExp("^#(" + C + ")"),
            CLASS: new RegExp("^\\.(" + C + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + C + ")['\"]?\\]"),
            TAG: new RegExp("^(" + C.replace("[-", "[-\\*") + ")"),
            ATTR: new RegExp("^" + E),
            PSEUDO: new RegExp("^" + S),
            CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)","i"),
            POS: new RegExp(j,"ig"),
            needsContext: new RegExp("^" + N + "*[>+~]|" + j,"i")
        }, I = {}, z = [], X = {}, U = [], J = function(e) {
            return e.sizzleFilter = !0,
            e
        }, Y = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }, V = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }, G = function(e) {
            var t = !1
              , n = g.createElement("div");
            try {
                t = e(n)
            } catch (e) {}
            return n = null,
            t
        }, Q = G(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t
        }), Z = G(function(e) {
            e.id = T + 0,
            e.innerHTML = "<a name='" + T + "'></a><div name='" + T + "'></div>",
            m.insertBefore(e, m.firstChild);
            var t = g.getElementsByName && g.getElementsByName(T).length === 2 + g.getElementsByName(T + 0).length;
            return h = !g.getElementById(T),
            m.removeChild(e),
            t
        }), ee = G(function(e) {
            return e.appendChild(g.createComment("")),
            0 === e.getElementsByTagName("*").length
        }), te = G(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && void 0 !== e.firstChild.getAttribute && "#" === e.firstChild.getAttribute("href")
        }), ne = G(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !(!e.getElementsByClassName || 0 === e.getElementsByClassName("e").length) && (e.lastChild.className = "e",
            1 !== e.getElementsByClassName("e").length)
        }), re = function(e, t, n, r) {
            n = n || [],
            t = t || g;
            var i, o, a, s, l = t.nodeType;
            if (1 !== l && 9 !== l)
                return [];
            if (!e || "string" != typeof e)
                return n;
            if (!(a = oe(t)) && !r && (i = O.exec(e)))
                if (s = i[1]) {
                    if (9 === l) {
                        if (!(o = t.getElementById(s)) || !o.parentNode)
                            return n;
                        if (o.id === s)
                            return n.push(o),
                            n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && ae(t, o) && o.id === s)
                        return n.push(o),
                        n
                } else {
                    if (i[2])
                        return w.apply(n, b.call(t.getElementsByTagName(e), 0)),
                        n;
                    if ((s = i[3]) && ne && t.getElementsByClassName)
                        return w.apply(n, b.call(t.getElementsByClassName(s), 0)),
                        n
                }
            return ue(e, t, n, r, a)
        }, ie = re.selectors = {
            cacheLength: 50,
            match: $,
            order: ["ID", "TAG"],
            attrHandle: {},
            createPseudo: J,
            find: {
                ID: h ? function(e, t, n) {
                    if (void 0 !== t.getElementById && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(e, n, r) {
                    if (void 0 !== n.getElementById && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || void 0 !== i.getAttributeNode && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }
                ,
                TAG: ee ? function(e, t) {
                    if (void 0 !== t.getElementsByTagName)
                        return t.getElementsByTagName(e)
                }
                : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var r, i = [], o = 0; r = n[o]; o++)
                            1 === r.nodeType && i.push(r);
                        return i
                    }
                    return n
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(W, ""),
                    e[3] = (e[4] || e[5] || "").replace(W, ""),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1] ? (e[2] || re.error(e[0]),
                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])),
                    e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = e[4];
                    return $.CHILD.test(e[0]) ? null : (n && (t = _.exec(n)) && t.pop() && (e[0] = e[0].slice(0, t[0].length - n.length - 1),
                    n = t[0].slice(0, -1)),
                    e.splice(2, 3, n || e[3]),
                    e)
                }
            },
            filter: {
                ID: h ? function(e) {
                    return e = e.replace(W, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                : function(e) {
                    return e = e.replace(W, ""),
                    function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0
                    }
                    : (e = e.replace(W, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = I[e];
                    return t || (t = I[e] = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)"),
                    z.push(e),
                    z.length > ie.cacheLength && delete I[z.shift()]),
                    function(e) {
                        return t.test(e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                },
                ATTR: function(e, t, n) {
                    return t ? function(r) {
                        var i = re.attr(r, e)
                          , o = i + "";
                        if (null == i)
                            return "!=" === t;
                        switch (t) {
                        case "=":
                            return o === n;
                        case "!=":
                            return o !== n;
                        case "^=":
                            return n && 0 === o.indexOf(n);
                        case "*=":
                            return n && o.indexOf(n) > -1;
                        case "$=":
                            return n && o.substr(o.length - n.length) === n;
                        case "~=":
                            return (" " + o + " ").indexOf(n) > -1;
                        case "|=":
                            return o === n || o.substr(0, n.length + 1) === n + "-"
                        }
                    }
                    : function(t) {
                        return null != re.attr(t, e)
                    }
                },
                CHILD: function(e, t, n, r) {
                    if ("nth" === e) {
                        var i = x++;
                        return function(e) {
                            var t, o, a = 0, s = e;
                            if (1 === n && 0 === r)
                                return !0;
                            if ((t = e.parentNode) && (t[T] !== i || !e.sizset)) {
                                for (s = t.firstChild; s && (1 !== s.nodeType || (s.sizset = ++a,
                                s !== e)); s = s.nextSibling)
                                    ;
                                t[T] = i
                            }
                            return o = e.sizset - r,
                            0 === n ? 0 === o : o % n == 0 && o / n >= 0
                        }
                    }
                    return function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            for (; n = n.previousSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            if ("first" === e)
                                return !0;
                            n = t;
                        case "last":
                            for (; n = n.nextSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t, n, r) {
                    var i = ie.pseudos[e] || ie.pseudos[e.toLowerCase()];
                    return i || re.error("unsupported pseudo: " + e),
                    i.sizzleFilter ? i(t, n, r) : i
                }
            },
            pseudos: {
                not: J(function(e, t, n) {
                    var r = le(e.replace(L, "$1"), t, n);
                    return function(e) {
                        return !r(e)
                    }
                }),
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                parent: function(e) {
                    return !ie.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    for (e = e.firstChild; e; ) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)
                            return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                contains: J(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || se(t)).indexOf(e) > -1
                    }
                }),
                has: J(function(e) {
                    return function(t) {
                        return re(e, t).length > 0
                    }
                }),
                header: function(e) {
                    return R.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                },
                radio: Y("radio"),
                checkbox: Y("checkbox"),
                file: Y("file"),
                password: Y("password"),
                image: Y("image"),
                submit: V("submit"),
                reset: V("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return P.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !(!e.type && !e.href)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t, n) {
                    return n ? e.slice(1) : [e[0]]
                },
                last: function(e, t, n) {
                    var r = e.pop();
                    return n ? e : [r]
                },
                even: function(e, t, n) {
                    for (var r = [], i = n ? 1 : 0, o = e.length; i < o; i += 2)
                        r.push(e[i]);
                    return r
                },
                odd: function(e, t, n) {
                    for (var r = [], i = n ? 0 : 1, o = e.length; i < o; i += 2)
                        r.push(e[i]);
                    return r
                },
                lt: function(e, t, n) {
                    return n ? e.slice(+t) : e.slice(0, +t)
                },
                gt: function(e, t, n) {
                    return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                },
                eq: function(e, t, n) {
                    var r = e.splice(+t, 1);
                    return n ? e : r
                }
            }
        };
        ie.setFilters.nth = ie.setFilters.eq,
        ie.filters = ie.pseudos,
        te || (ie.attrHandle = {
            href: function(e) {
                return e.getAttribute("href", 2)
            },
            type: function(e) {
                return e.getAttribute("type")
            }
        }),
        Z && (ie.order.push("NAME"),
        ie.find.NAME = function(e, t) {
            if (void 0 !== t.getElementsByName)
                return t.getElementsByName(e)
        }
        ),
        ne && (ie.order.splice(1, 0, "CLASS"),
        ie.find.CLASS = function(e, t, n) {
            if (void 0 !== t.getElementsByClassName && !n)
                return t.getElementsByClassName(e)
        }
        );
        try {
            b.call(m.childNodes, 0)[0].nodeType
        } catch (e) {
            b = function(e) {
                for (var t, n = []; t = this[e]; e++)
                    n.push(t);
                return n
            }
        }
        var oe = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
          , ae = re.contains = m.compareDocumentPosition ? function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        }
        : m.contains ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e
              , r = t.parentNode;
            return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
        }
        : function(e, t) {
            for (; t = t.parentNode; )
                if (t === e)
                    return !0;
            return !1
        }
          , se = re.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += se(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += se(t);
            return n
        }
        ;
        re.attr = function(e, t) {
            var n, r = oe(e);
            return r || (t = t.toLowerCase()),
            ie.attrHandle[t] ? ie.attrHandle[t](e) : Q || r ? e.getAttribute(t) : (n = e.getAttributeNode(t),
            n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
        }
        ,
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        [0, 0].sort(function() {
            return v = 0
        }),
        m.compareDocumentPosition ? p = function(e, t) {
            return e === t ? (y = !0,
            0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        }
        : (p = function(e, t) {
            if (e === t)
                return y = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], o = [], a = e.parentNode, s = t.parentNode, l = a;
            if (a === s)
                return d(e, t);
            if (!a)
                return -1;
            if (!s)
                return 1;
            for (; l; )
                i.unshift(l),
                l = l.parentNode;
            for (l = s; l; )
                o.unshift(l),
                l = l.parentNode;
            n = i.length,
            r = o.length;
            for (var u = 0; u < n && u < r; u++)
                if (i[u] !== o[u])
                    return d(i[u], o[u]);
            return u === n ? d(e, o[u], -1) : d(i[u], t, 1)
        }
        ,
        d = function(e, t, n) {
            if (e === t)
                return n;
            for (var r = e.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        ),
        re.uniqueSort = function(e) {
            var t, n = 1;
            if (p && (y = v,
            e.sort(p),
            y))
                for (; t = e[n]; n++)
                    t === e[n - 1] && e.splice(n--, 1);
            return e
        }
        ;
        var le = re.compile = function(e, t, n) {
            var r, i, a, s = X[e];
            if (s && s.context === t)
                return s;
            for (i = o(e, t, n),
            a = 0; r = i[a]; a++)
                i[a] = l(r, t, n);
            return s = X[e] = u(i),
            s.context = t,
            s.runs = s.dirruns = 0,
            U.push(e),
            U.length > ie.cacheLength && delete X[U.shift()],
            s
        }
        ;
        re.matches = function(e, t) {
            return re(e, null, null, t)
        }
        ,
        re.matchesSelector = function(e, t) {
            return re(t, null, null, [e]).length > 0
        }
        ;
        var ue = function(e, t, n, r, o) {
            e = e.replace(L, "$1");
            var a, s, l, u, p, d, h, g, m, y = e.match(F), v = e.match(M), x = t.nodeType;
            if ($.POS.test(e))
                return i(e, t, n, r, y);
            if (r)
                a = b.call(r, 0);
            else if (y && 1 === y.length) {
                if (v.length > 1 && 9 === x && !o && (y = $.ID.exec(v[0]))) {
                    if (!(t = ie.find.ID(y[1], t, o)[0]))
                        return n;
                    e = e.slice(v.shift().length)
                }
                for (g = (y = q.exec(v[0])) && !y.index && t.parentNode || t,
                m = v.pop(),
                d = m.split(":not")[0],
                l = 0,
                u = ie.order.length; l < u; l++)
                    if (h = ie.order[l],
                    y = $[h].exec(d)) {
                        if (null == (a = ie.find[h]((y[1] || "").replace(W, ""), g, o)))
                            continue;
                        d === m && ((e = e.slice(0, e.length - m.length) + d.replace($[h], "")) || w.apply(n, b.call(a, 0)));
                        break
                    }
            }
            if (e)
                for (s = le(e, t, o),
                f = s.dirruns++,
                null == a && (a = ie.find.TAG("*", q.test(e) && t.parentNode || t)),
                l = 0; p = a[l]; l++)
                    c = s.runs++,
                    s(p, t) && n.push(p);
            return n
        };
        g.querySelectorAll && function() {
            var e, t = ue, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [], o = [":active"], a = m.matchesSelector || m.mozMatchesSelector || m.webkitMatchesSelector || m.oMatchesSelector || m.msMatchesSelector;
            G(function(e) {
                e.innerHTML = "<select><option selected></option></select>",
                e.querySelectorAll("[selected]").length || i.push("\\[" + N + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || i.push(":checked")
            }),
            G(function(e) {
                e.innerHTML = "<p test=''></p>",
                e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + N + "*(?:\"\"|'')"),
                e.innerHTML = "<input type='hidden'>",
                e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }),
            i = i.length && new RegExp(i.join("|")),
            ue = function(e, r, o, a, s) {
                if (!(a || s || i && i.test(e)))
                    if (9 === r.nodeType)
                        try {
                            return w.apply(o, b.call(r.querySelectorAll(e), 0)),
                            o
                        } catch (e) {}
                    else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                        var l = r.getAttribute("id")
                          , u = l || T
                          , c = q.test(e) && r.parentNode || r;
                        l ? u = u.replace(n, "\\$&") : r.setAttribute("id", u);
                        try {
                            return w.apply(o, b.call(c.querySelectorAll(e.replace(F, "[id='" + u + "'] $&")), 0)),
                            o
                        } catch (e) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                return t(e, r, o, a, s)
            }
            ,
            a && (G(function(t) {
                e = a.call(t, "div");
                try {
                    a.call(t, "[test!='']:sizzle"),
                    o.push(ie.match.PSEUDO)
                } catch (e) {}
            }),
            o = new RegExp(o.join("|")),
            re.matchesSelector = function(t, n) {
                if (n = n.replace(r, "='$1']"),
                !(oe(t) || o.test(n) || i && i.test(n)))
                    try {
                        var s = a.call(t, n);
                        if (s || e || t.document && 11 !== t.document.nodeType)
                            return s
                    } catch (e) {}
                return re(n, null, null, [t]).length > 0
            }
            )
        }(),
        re.attr = K.attr,
        K.find = re,
        K.expr = re.selectors,
        K.expr[":"] = K.expr.pseudos,
        K.unique = re.uniqueSort,
        K.text = re.getText,
        K.isXMLDoc = re.isXML,
        K.contains = re.contains
    }(e);
    var _e = /Until$/
      , Me = /^(?:parents|prev(?:Until|All))/
      , Oe = /^.[^:#\[\.,]*$/
      , qe = K.expr.match.needsContext
      , Be = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.fn.extend({
        find: function(e) {
            var t, n, r, i, o, a, s = this;
            if ("string" != typeof e)
                return K(e).filter(function() {
                    for (t = 0,
                    n = s.length; t < n; t++)
                        if (K.contains(s[t], this))
                            return !0
                });
            for (a = this.pushStack("", "find", e),
            t = 0,
            n = this.length; t < n; t++)
                if (r = a.length,
                K.find(e, this[t], a),
                t > 0)
                    for (i = r; i < a.length; i++)
                        for (o = 0; o < r; o++)
                            if (a[o] === a[i]) {
                                a.splice(i--, 1);
                                break
                            }
            return a
        },
        has: function(e) {
            var t, n = K(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (K.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? qe.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = qe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                    if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return o = o.length > 1 ? K.unique(o) : o,
            this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e)
              , r = K.merge(this.get(), n);
            return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    K.fn.andSelf = K.fn.addBack,
    K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return l(e, "nextSibling")
        },
        prev: function(e) {
            return l(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return _e.test(e) || (r = n),
            r && "string" == typeof r && (i = K.filter(r, i)),
            i = this.length > 1 && !Be[e] ? K.unique(i) : i,
            this.length > 1 && Me.test(e) && (i = i.reverse()),
            this.pushStack(i, e, J.call(arguments).join(","))
        }
    }),
    K.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r)); )
                1 === o.nodeType && i.push(o),
                o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Pe = / jQuery\d+="(?:null|\d+)"/g
      , We = /^\s+/
      , $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Ie = /<([\w:]+)/
      , ze = /<tbody/i
      , Xe = /<|&#?\w+;/
      , Ue = /<(?:script|style|link)/i
      , Je = /<(?:script|object|embed|option|style)/i
      , Ye = new RegExp("<(?:" + Re + ")[\\s/>]","i")
      , Ve = /^(?:checkbox|radio)$/
      , Ge = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Qe = /\/(java|ecma)script/i
      , Ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , et = c(W)
      , tt = et.appendChild(W.createElement("div"));
    Ze.optgroup = Ze.option,
    Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead,
    Ze.th = Ze.td,
    K.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]),
    K.fn.extend({
        text: function(e) {
            return K.access(this, function(e) {
                return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return K.isFunction(e) ? this.each(function(t) {
                K(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = K(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = K.isFunction(e);
            return this.each(function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType || this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType || this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!s(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!s(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)
                e && !K.filter(e, [n]).length || (t || 1 !== n.nodeType || (K.cleanData(n.getElementsByTagName("*")),
                K.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                    e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return K.clone(this, e, t)
            })
        },
        html: function(e) {
            return K.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(Pe, "") : t;
                if ("string" == typeof e && !Ue.test(e) && (K.support.htmlSerialize || !Ye.test(e)) && (K.support.leadingWhitespace || !We.test(e)) && !Ze[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace($e, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {},
                            1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                var n = K(this)
                  , r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : ("string" != typeof e && (e = K(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                K(this).remove(),
                t ? K(t).before(e) : K(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, o, a, s, l = 0, u = e[0], c = [], p = this.length;
            if (!K.support.checkClone && p > 1 && "string" == typeof u && Ge.test(u))
                return this.each(function() {
                    K(this).domManip(e, n, r)
                });
            if (K.isFunction(u))
                return this.each(function(i) {
                    var o = K(this);
                    e[0] = u.call(this, i, n ? o.html() : t),
                    o.domManip(e, n, r)
                });
            if (this[0]) {
                if (i = K.buildFragment(e, this, c),
                a = i.fragment,
                o = a.firstChild,
                1 === a.childNodes.length && (a = o),
                o)
                    for (n = n && K.nodeName(o, "tr"),
                    s = i.cacheable || p - 1; l < p; l++)
                        r.call(n && K.nodeName(this[l], "table") ? f(this[l], "tbody") : this[l], l === s ? a : K.clone(a, !0, !0));
                a = o = null,
                c.length && K.each(c, function(e, t) {
                    t.src ? K.ajax ? K.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ke, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    K.buildFragment = function(e, n, r) {
        var i, o, a, s = e[0];
        return n = n || W,
        n = (n[0] || n).ownerDocument || n[0] || n,
        void 0 === n.createDocumentFragment && (n = W),
        !(1 === e.length && "string" == typeof s && s.length < 512 && n === W && "<" === s.charAt(0)) || Je.test(s) || !K.support.checkClone && Ge.test(s) || !K.support.html5Clone && Ye.test(s) || (o = !0,
        i = K.fragments[s],
        a = i !== t),
        i || (i = n.createDocumentFragment(),
        K.clean(e, n, i, r),
        o && (K.fragments[s] = a && i)),
        {
            fragment: i,
            cacheable: o
        }
    }
    ,
    K.fragments = {},
    K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        K.fn[e] = function(n) {
            var r, i = 0, o = [], a = K(n), s = a.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s)
                return a[t](this[0]),
                this;
            for (; i < s; i++)
                r = (i > 0 ? this.clone(!0) : this).get(),
                K(a[i])[t](r),
                o = o.concat(r);
            return this.pushStack(o, e, a.selector)
        }
    }),
    K.extend({
        clone: function(e, t, n) {
            var r, i, o, a;
            if (K.support.html5Clone || K.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML,
            tt.removeChild(a = tt.firstChild)),
            !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                for (d(e, a),
                r = h(e),
                i = h(a),
                o = 0; r[o]; ++o)
                    i[o] && d(r[o], i[o]);
            if (t && (p(e, a),
            n))
                for (r = h(e),
                i = h(a),
                o = 0; r[o]; ++o)
                    p(r[o], i[o]);
            return r = i = null,
            a
        },
        clean: function(e, t, n, r) {
            var i, o, a, s, l, u, f, p, d, h, m, y = 0, v = [];
            for (t && void 0 !== t.createDocumentFragment || (t = W),
            o = t === W && et; null != (a = e[y]); y++)
                if ("number" == typeof a && (a += ""),
                a) {
                    if ("string" == typeof a)
                        if (Xe.test(a)) {
                            for (o = o || c(t),
                            f = f || o.appendChild(t.createElement("div")),
                            a = a.replace($e, "<$1></$2>"),
                            s = (Ie.exec(a) || ["", ""])[1].toLowerCase(),
                            l = Ze[s] || Ze._default,
                            u = l[0],
                            f.innerHTML = l[1] + a + l[2]; u--; )
                                f = f.lastChild;
                            if (!K.support.tbody)
                                for (p = ze.test(a),
                                d = "table" !== s || p ? "<table>" !== l[1] || p ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes,
                                i = d.length - 1; i >= 0; --i)
                                    K.nodeName(d[i], "tbody") && !d[i].childNodes.length && d[i].parentNode.removeChild(d[i]);
                            !K.support.leadingWhitespace && We.test(a) && f.insertBefore(t.createTextNode(We.exec(a)[0]), f.firstChild),
                            a = f.childNodes,
                            f = o.lastChild
                        } else
                            a = t.createTextNode(a);
                    a.nodeType ? v.push(a) : v = K.merge(v, a)
                }
            if (f && (o.removeChild(f),
            a = f = o = null),
            !K.support.appendChecked)
                for (y = 0; null != (a = v[y]); y++)
                    K.nodeName(a, "input") ? g(a) : void 0 !== a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), g);
            if (n)
                for (h = function(e) {
                    if (!e.type || Qe.test(e.type))
                        return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                }
                ,
                y = 0; null != (a = v[y]); y++)
                    K.nodeName(a, "script") && h(a) || (n.appendChild(a),
                    void 0 !== a.getElementsByTagName && (m = K.grep(K.merge([], a.getElementsByTagName("script")), h),
                    v.splice.apply(v, [y + 1, 0].concat(m)),
                    y += m.length));
            return v
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = K.expando, l = K.cache, u = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++)
                if ((t || K.acceptData(i)) && (r = i[s],
                n = r && l[r])) {
                    if (n.events)
                        for (o in n.events)
                            c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                    l[r] && (delete l[r],
                    u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null,
                    K.deletedIds.push(r))
                }
        }
    }),
    function() {
        var e, t;
        K.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ,
        e = K.uaMatch(I.userAgent),
        t = {},
        e.browser && (t[e.browser] = !0,
        t.version = e.version),
        t.webkit && (t.safari = !0),
        K.browser = t,
        K.sub = function() {
            function e(t, n) {
                return new e.fn.init(t,n)
            }
            K.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function(n, r) {
                return r && r instanceof K && !(r instanceof e) && (r = e(r)),
                K.fn.init.call(this, n, r, t)
            }
            ,
            e.fn.init.prototype = e.fn;
            var t = e(W);
            return e
        }
    }();
    var nt, rt, it, ot = /alpha\([^)]*\)/i, at = /opacity=([^)]*)/, st = /^(top|right|bottom|left)$/, lt = /^margin/, ut = new RegExp("^(" + Z + ")(.*)$","i"), ct = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i"), ft = new RegExp("^([-+])=(" + Z + ")","i"), pt = {}, dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ht = {
        letterSpacing: 0,
        fontWeight: 400,
        lineHeight: 1
    }, gt = ["Top", "Right", "Bottom", "Left"], mt = ["Webkit", "O", "Moz", "ms"], yt = K.fn.toggle;
    K.fn.extend({
        css: function(e, n) {
            return K.access(this, function(e, n, r) {
                return r !== t ? K.style(e, n, r) : K.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? yt.apply(this, arguments) : this.each(function() {
                (n ? e : y(this)) ? K(this).show() : K(this).hide()
            })
        }
    }),
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = K.camelCase(n), u = e.style;
                if (n = K.cssProps[l] || (K.cssProps[l] = m(u, l)),
                s = K.cssHooks[n] || K.cssHooks[l],
                r === t)
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (!(a = typeof r,
                "string" === a && (o = ft.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)),
                a = "number"),
                null == r || "number" === a && isNaN(r) || ("number" !== a || K.cssNumber[l] || (r += "px"),
                s && "set"in s && (r = s.set(e, r, i)) === t)))
                    try {
                        u[n] = r
                    } catch (e) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = K.camelCase(n);
            return n = K.cssProps[l] || (K.cssProps[l] = m(e.style, l)),
            s = K.cssHooks[n] || K.cssHooks[l],
            s && "get"in s && (o = s.get(e, !0, i)),
            o === t && (o = nt(e, n)),
            "normal" === o && n in ht && (o = ht[n]),
            r || i !== t ? (a = parseFloat(o),
            r || K.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t)
                o[i] = e.style[i],
                e.style[i] = t[i];
            r = n.call(e);
            for (i in t)
                e.style[i] = o[i];
            return r
        }
    }),
    e.getComputedStyle ? nt = function(e, t) {
        var n, r, i, o, a = getComputedStyle(e, null), s = e.style;
        return a && (n = a[t],
        "" !== n || K.contains(e.ownerDocument.documentElement, e) || (n = K.style(e, t)),
        ct.test(n) && lt.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = n,
        n = a.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        n
    }
    : W.documentElement.currentStyle && (nt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == i && o && o[t] && (i = o[t]),
        ct.test(i) && !st.test(t) && (n = o.left,
        r = e.runtimeStyle && e.runtimeStyle.left,
        r && (e.runtimeStyle.left = e.currentStyle.left),
        o.left = "fontSize" === t ? "1em" : i,
        i = o.pixelLeft + "px",
        o.left = n,
        r && (e.runtimeStyle.left = r)),
        "" === i ? "auto" : i
    }
    ),
    K.each(["height", "width"], function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return 0 !== e.offsetWidth || "none" !== nt(e, "display") ? w(e, t, r) : K.swap(e, dt, function() {
                        return w(e, t, r)
                    })
            },
            set: function(e, n, r) {
                return x(e, n, r ? b(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }),
    K.support.opacity || (K.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            t >= 1 && "" === K.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }),
    K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(e, t) {
                return K.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return nt(e, "marginRight")
                })
            }
        }),
        !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = nt(e, t);
                        return ct.test(r) ? K(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }),
    K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nt(e, "display"))
    }
    ,
    K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }
    ),
    K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [n], o = {};
                for (r = 0; r < 4; r++)
                    o[e + gt[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        lt.test(e) || (K.cssHooks[e + t].set = x)
    });
    var vt = /%20/g
      , xt = /\[\]$/
      , bt = /\r?\n/g
      , wt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , Tt = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Tt.test(this.nodeName) || wt.test(this.type))
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(bt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(bt, "\r\n")
                }
            }).get()
        }
    }),
    K.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(e) || e.jquery && !K.isPlainObject(e))
            K.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (r in e)
                N(r, e[r], n, o);
        return i.join("&").replace(vt, "+")
    }
    ;
    var Nt, Ct, kt = /#.*$/, Et = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, St = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, jt = /^(?:GET|HEAD)$/, At = /^\/\//, Dt = /\?/, Lt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Ht = /([?&])_=[^&]*/, Ft = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _t = K.fn.load, Mt = {}, Ot = {}, qt = ["*/"] + ["*"];
    try {
        Nt = $.href
    } catch (e) {
        Nt = W.createElement("a"),
        Nt.href = "",
        Nt = Nt.href
    }
    Ct = Ft.exec(Nt.toLowerCase()) || [],
    K.fn.load = function(e, n, r) {
        if ("string" != typeof e && _t)
            return _t.apply(this, arguments);
        if (!this.length)
            return this;
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        K.isFunction(n) ? (r = n,
        n = t) : "object" == typeof n && (o = "POST"),
        K.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && s.each(r, a || [e.responseText, t, e])
            }
        }).done(function(e) {
            a = arguments,
            s.html(i ? K("<div>").append(e.replace(Lt, "")).find(i) : e)
        }),
        this
    }
    ,
    K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    K.each(["get", "post"], function(e, n) {
        K[n] = function(e, r, i, o) {
            return K.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            K.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }),
    K.extend({
        getScript: function(e, n) {
            return K.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? E(e, K.ajaxSettings) : (t = e,
            e = K.ajaxSettings),
            E(e, t),
            e
        },
        ajaxSettings: {
            url: Nt,
            isLocal: St.test(Ct[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": qt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: C(Mt),
        ajaxTransport: C(Ot),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                var u, f, v, x, w, N = n;
                2 !== b && (b = 2,
                l && clearTimeout(l),
                s = t,
                o = a || "",
                T.readyState = e > 0 ? 4 : 0,
                r && (x = S(p, T, r)),
                e >= 200 && e < 300 || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"),
                w && (K.lastModified[i] = w),
                (w = T.getResponseHeader("Etag")) && (K.etag[i] = w)),
                304 === e ? (N = "notmodified",
                u = !0) : (u = j(p, x),
                N = u.state,
                f = u.data,
                v = u.error,
                u = !v)) : (v = N,
                N && !e || (N = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = "" + (n || N),
                u ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]),
                T.statusCode(y),
                y = t,
                c && h.trigger("ajax" + (u ? "Success" : "Error"), [T, p, u ? f : v]),
                m.fireWith(d, [T, N]),
                c && (h.trigger("ajaxComplete", [T, p]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var i, o, a, s, l, u, c, f, p = K.ajaxSetup({}, n), d = p.context || p, h = d !== p && (d.nodeType || d instanceof K) ? K(d) : K.event, g = K.Deferred(), m = K.Callbacks("once memory"), y = p.statusCode || {}, v = {}, x = {}, b = 0, w = "canceled", T = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!b) {
                        var n = e.toLowerCase();
                        e = x[n] = x[n] || e,
                        v[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; n = Et.exec(o); )
                                a[n[1].toLowerCase()] = n[2];
                        n = a[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || w,
                    s && s.abort(e),
                    r(0, e),
                    this
                }
            };
            if (g.promise(T),
            T.success = T.done,
            T.error = T.fail,
            T.complete = m.add,
            T.statusCode = function(e) {
                if (e) {
                    var t;
                    if (b < 2)
                        for (t in e)
                            y[t] = [y[t], e[t]];
                    else
                        t = e[T.status],
                        T.always(t)
                }
                return this
            }
            ,
            p.url = ((e || p.url) + "").replace(kt, "").replace(At, Ct[1] + "//"),
            p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(te),
            null == p.crossDomain && (u = Ft.exec(p.url.toLowerCase()),
            p.crossDomain = !(!u || u[1] == Ct[1] && u[2] == Ct[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Ct[3] || ("http:" === Ct[1] ? 80 : 443)))),
            p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)),
            k(Mt, p, n, T),
            2 === b)
                return T;
            if (c = p.global,
            p.type = p.type.toUpperCase(),
            p.hasContent = !jt.test(p.type),
            c && 0 == K.active++ && K.event.trigger("ajaxStart"),
            !p.hasContent && (p.data && (p.url += (Dt.test(p.url) ? "&" : "?") + p.data,
            delete p.data),
            i = p.url,
            !1 === p.cache)) {
                var N = K.now()
                  , C = p.url.replace(Ht, "$1_=" + N);
                p.url = C + (C === p.url ? (Dt.test(p.url) ? "&" : "?") + "_=" + N : "")
            }
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            p.ifModified && (i = i || p.url,
            K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]),
            K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || 2 === b))
                return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](p[f]);
            if (s = k(Ot, p, n, T)) {
                T.readyState = 1,
                c && h.trigger("ajaxSend", [T, p]),
                p.async && p.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    s.send(v, r)
                } catch (e) {
                    if (!(b < 2))
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Bt = []
      , Rt = /\?/
      , Pt = /(=)\?(?=&|$)|\?\?/
      , Wt = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || K.expando + "_" + Wt++;
            return this[e] = !0,
            e
        }
    }),
    K.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.data, u = n.url, c = !1 !== n.jsonp, f = c && Pt.test(u), p = c && !f && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(l);
        if ("jsonp" === n.dataTypes[0] || f || p)
            return o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            a = e[o],
            f ? n.url = u.replace(Pt, "$1" + o) : p ? n.data = l.replace(Pt, "$1" + o) : c && (n.url += (Rt.test(u) ? "&" : "?") + n.jsonp + "=" + o),
            n.converters["script json"] = function() {
                return s || K.error(o + " was not called"),
                s[0]
            }
            ,
            n.dataTypes[0] = "json",
            e[o] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                e[o] = a,
                n[o] && (n.jsonpCallback = r.jsonpCallback,
                Bt.push(o)),
                s && K.isFunction(a) && a(s[0]),
                s = a = t
            }),
            "script"
    }),
    K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e),
                e
            }
        }
    }),
    K.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    K.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
            return {
                send: function(i, o) {
                    n = W.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        r && n.parentNode && r.removeChild(n),
                        n = t,
                        i || o(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var $t, It = !!e.ActiveXObject && function() {
        for (var e in $t)
            $t[e](0, 1)
    }
    , zt = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && A() || D()
    }
    : A,
    function(e) {
        K.extend(K.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(K.ajaxSettings.xhr()),
    K.support.ajax && K.ajaxTransport(function(n) {
        if (!n.crossDomain || K.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            l.setRequestHeader(s, i[s])
                    } catch (e) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, f, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t,
                                a && (l.onreadystatechange = K.noop,
                                It && delete $t[a]),
                                i)
                                    4 !== l.readyState && l.abort();
                                else {
                                    s = l.status,
                                    c = l.getAllResponseHeaders(),
                                    f = {},
                                    p = l.responseXML,
                                    p && p.documentElement && (f.xml = p);
                                    try {
                                        f.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        u = l.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                        } catch (e) {
                            i || o(-1, e)
                        }
                        f && o(s, u, f, c)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r, 0) : (a = ++zt,
                    It && ($t || ($t = {},
                    K(e).unload(It)),
                    $t[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var Xt, Ut, Jt = /^(?:toggle|show|hide)$/, Yt = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$","i"), Vt = /queueHooks$/, Gt = [M], Qt = {
        "*": [function(e, t) {
            var n, r, i, o = this.createTween(e, t), a = Yt.exec(t), s = o.cur(), l = +s || 0, u = 1;
            if (a) {
                if (n = +a[2],
                "px" !== (r = a[3] || (K.cssNumber[e] ? "" : "px")) && l) {
                    l = K.css(o.elem, e, !0) || n || 1;
                    do {
                        i = u = u || ".5",
                        l /= u,
                        K.style(o.elem, e, l + r),
                        u = o.cur() / s
                    } while (1 !== u && u !== i)
                }
                o.unit = r,
                o.start = l,
                o.end = a[1] ? l + (a[1] + 1) * n : n
            }
            return o
        }
        ]
    };
    K.Animation = K.extend(F, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                Qt[n] = Qt[n] || [],
                Qt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gt.unshift(e) : Gt.push(e)
        }
    }),
    K.Tween = O,
    O.prototype = {
        constructor: O,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration),
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : O.propHooks._default.set(this),
            this
        }
    },
    O.prototype.init.prototype = O.prototype,
    O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    K.each(["toggle", "show", "hide"], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(r, i, o) {
            return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(q(t, !0), r, i, o)
        }
    }),
    K.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(y).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = K.isEmptyObject(e)
              , o = K.speed(t, n, r)
              , a = function() {
                var t = F(this, K.extend({}, e), o);
                i && t.stop(!0)
            };
            return i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = K.timers
                  , a = K._data(this);
                if (n)
                    a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a)
                        a[n] && a[n].stop && Vt.test(n) && i(a[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1));
                !t && r || K.dequeue(this, e)
            })
        }
    }),
    K.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            K.isFunction(r.old) && r.old.call(this),
            r.queue && K.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    K.timers = [],
    K.fx = O.prototype.init,
    K.fx.tick = function() {
        for (var e, t = K.timers, n = 0; n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || K.fx.stop()
    }
    ,
    K.fx.timer = function(e) {
        e() && K.timers.push(e) && !Ut && (Ut = setInterval(K.fx.tick, K.fx.interval))
    }
    ,
    K.fx.interval = 13,
    K.fx.stop = function() {
        clearInterval(Ut),
        Ut = null
    }
    ,
    K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    K.fx.step = {},
    K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var Kt = /^(?:body|html)$/i;
    K.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                K.offset.setOffset(this, e, t)
            });
        var n, r, i, o, a, s, l, u, c, f, p = this[0], d = p && p.ownerDocument;
        if (d)
            return (i = d.body) === p ? K.offset.bodyOffset(p) : (r = d.documentElement,
            K.contains(r, p) ? (n = p.getBoundingClientRect(),
            o = B(d),
            a = r.clientTop || i.clientTop || 0,
            s = r.clientLeft || i.clientLeft || 0,
            l = o.pageYOffset || r.scrollTop,
            u = o.pageXOffset || r.scrollLeft,
            c = n.top + l - a,
            f = n.left + u - s,
            {
                top: c,
                left: f
            }) : {
                top: 0,
                left: 0
            })
    }
    ,
    K.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0,
            n += parseFloat(K.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = K.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = K(e), s = a.offset(), l = K.css(e, "top"), u = K.css(e, "left"), c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [l, u]) > -1, f = {}, p = {};
            c ? (p = a.position(),
            i = p.top,
            o = p.left) : (i = parseFloat(l) || 0,
            o = parseFloat(u) || 0),
            K.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + i),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : a.css(f)
        }
    },
    K.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0]
                  , t = this.offsetParent()
                  , n = this.offset()
                  , r = Kt.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
                return n.top -= parseFloat(K.css(e, "marginTop")) || 0,
                n.left -= parseFloat(K.css(e, "marginLeft")) || 0,
                r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0,
                r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0,
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || W.body; e && !Kt.test(e.nodeName) && "static" === K.css(e, "position"); )
                    e = e.offsetParent;
                return e || W.body
            })
        }
    }),
    K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        K.fn[e] = function(i) {
            return K.access(this, function(e, i, o) {
                var a = B(e);
                if (o === t)
                    return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
                a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o
            }, e, i, arguments.length, null)
        }
    }),
    K.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        K.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            K.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (!0 === i || !0 === o ? "margin" : "border");
                return K.access(this, function(n, r, i) {
                    var o;
                    return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s)
                }, n, a ? i : t, a)
            }
        })
    }),
    e.jQuery = e.$ = K,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K
    })
}(window),
function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e),
    t = !0),
    "object" == typeof exports && (module.exports = e(),
    t = !0),
    !t) {
        var n = window.Cookies
          , r = window.Cookies = e();
        r.noConflict = function() {
            return window.Cookies = n,
            r
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                t[r] = n[r]
        }
        return t
    }
    function t(n) {
        function r(t, i, o) {
            var a;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (o = e({
                        path: "/"
                    }, r.defaults, o),
                    "number" == typeof o.expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires),
                        o.expires = s
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        a = JSON.stringify(i),
                        /^[\{\[]/.test(a) && (i = a)
                    } catch (e) {}
                    i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    t = encodeURIComponent(String(t)),
                    t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                    t = t.replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var u in o)
                        o[u] && (l += "; " + u,
                        !0 !== o[u] && (l += "=" + o[u]));
                    return document.cookie = t + "=" + i + l
                }
                t || (a = {});
                for (var c = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < c.length; p++) {
                    var d = c[p].split("=")
                      , h = d.slice(1).join("=");
                    '"' === h.charAt(0) && (h = h.slice(1, -1));
                    try {
                        var g = d[0].replace(f, decodeURIComponent);
                        if (h = n.read ? n.read(h, g) : n(h, g) || h.replace(f, decodeURIComponent),
                        this.json)
                            try {
                                h = JSON.parse(h)
                            } catch (e) {}
                        if (t === g) {
                            a = h;
                            break
                        }
                        t || (a[g] = h)
                    } catch (e) {}
                }
                return a
            }
        }
        return r.set = r,
        r.get = function(e) {
            return r.call(r, e)
        }
        ,
        r.getJSON = function() {
            return r.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        r.defaults = {},
        r.remove = function(t, n) {
            r(t, "", e(n, {
                expires: -1
            }))
        }
        ,
        r.withConverter = t,
        r
    }
    return t(function() {})
}),
function() {
    var e = function(e) {
        document.write(" <script src=" + e + " > <\/script>")
    }
      , t = function() {
        var e = document.createElement("div").style;
        for (var t in e)
            if (-1 != t.toLowerCase().indexOf("animation"))
                return !0;
        return !1
    }();
    navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("rv:11") > -1 ? (document.body.className += " ie",
    $(".page").addClass("ani"),
    t || (document.body.className += " not_css3")) : (e("assets/js/three.js"),
    e("assets/js/CSS3DRenderer.js"),
    e("assets/js/CanvasRenderer.js"),
    e("assets/js/Projector.js"),
    e("assets/js/index.js"))
}(),
function(e) {
    xla = e.xla || (e.xla = []),
    xla.push({
        type: "config",
        appid: 20034,
        secret: "74935fb3c29fb93e71d90a86c4bf14a6"
    });
    var t = document.createElement("script");
    t.type = "text/javascript",
    t.async = !0,
    t.src = "assets/xla.min.js";
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n),
    e.XL_Stat = {
        navigation: function(e) {
            xla.push({
                type: "event",
                category: "navgation",
                action: "mac_home_navgation_click",
                extdata: {
                    button: e
                }
            })
        },
        download: function(e) {
            xla.push({
                type: "event",
                category: "download",
                action: "mac_home_download",
                extdata: {
                    button: e
                }
            })
        }
    }
}(window),
function(e, t) {
    var n = e(".btn_download")
      , r = e(".version");
    e.ajax({
        url: "//static-xl9-ssl.xunlei.com/json/mac_download_url.json",
        dataType: "jsonp",
        jsonpCallback: "xl_mac_download_url_callback",
        timeout: 1e4
    }).done(function(e) {
        n.attr("href", e.url),
        r.text(e.version),
        t.Cookies.set("download_url", e.url, {
            domain: ".mac.xunlei.com",
            expires: 365
        })
    }).fail(function() {
        t.Cookies.get("download_url", {
            domain: ".mac.xunlei.com"
        }) ? n.attr("href", data.url) : n.attr("href", "http://down.sandai.net/mac/thunder_3.0.8.2844.dmg")
    })
}(jQuery, window);
