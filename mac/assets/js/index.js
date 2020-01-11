!function () {
    function x(x, t) {
        var y = new Image;
        return y.onload = function () {
            t.load++
        }
            ,
            y.src = x,
            y
    }
    function t(x, t, y) {
        return y >= x && y <= t || y >= t && y <= x
    }
    function y(x, t, y) {
        return t ? {
            x: x.x + (t.x - x.x) * y,
            y: x.y + (t.y - x.y) * y
        } : x
    }
    function e(x, y, n) {
        this.startP = x,
            this.startP.x += 30,
            this.endP = y,
            this.endP.x += 30,
            this.startT = Math.ceil(20 * Math.random()),
            this.dur = Math.ceil(50 * Math.random()),
            this.curP = {
                x: this.startP.x,
                y: this.startP.y
            },
            this.isEnd = !1,
            this.lWidth = n,
            this.opc = 1,
            "function" != typeof this.draw && (e.prototype.draw = function (x) {
                x.save(),
                    x.globalAlpha = this.opc,
                    x.lineWidth = this.lWidth,
                    x.strokeStyle = "#196597",
                    x.beginPath(),
                    x.moveTo(this.startP.x, this.startP.y),
                    x.lineTo(this.curP.x, this.curP.y),
                    x.stroke(),
                    x.restore()
            }
            ),
            "function" != typeof this.move && (e.prototype.move = function () {
                this.isEnd || (this.curP.x += (this.endP.x - this.startP.x) / this.dur,
                    this.curP.y += (this.endP.y - this.startP.y) / this.dur,
                    t(this.startP.x, this.endP.x, this.curP.x) || t(this.startP.y, this.endP.y, this.curP.y) || (this.curP.x = this.endP.x,
                        this.curP.y = this.endP.y,
                        this.isEnd = !0))
            }
            )
    }
    function n() {
        var x = document.createElement("canvas");
        x.width = 16,
            x.height = 16;
        var t = x.getContext("2d")
            , y = t.createRadialGradient(x.width / 2, x.height / 2, 0, x.width / 2, x.height / 2, x.width / 2);
        return y.addColorStop(0, "rgba(255,255,255,1)"),
            y.addColorStop(1, "rgba(255,255,255,0)"),
            t.fillStyle = y,
            t.fillRect(0, 0, x.width, x.height),
            x
    }
    function i(x, t) {
        this.points = x,
            this.ctx = t,
            this.timer = 0,
            this.curLines = [],
            this.endNum = 0;
        "function" != typeof this.draw && (i.prototype.draw = function () {
            this.ctx.save(),
                this.ctx.globalAlpha = .6,
                this.ctx.lineWidth = 1,
                this.ctx.strokeStyle = "#fff";
            for (var x = 0; x < this.curLines.length; x++) {
                var t = this.curLines[x]
                    , e = this.points[t.curLine].line
                    , n = t.curPoint.length
                    , i = 0;
                if (n >= 5) {
                    i = n - 4;
                    var r = e[t.curPoint[0]]
                        , s = e[t.curPoint[1]];
                    if (r && s) {
                        var a = y(e[t.curPoint[0]], e[t.curPoint[1]], t.curPro);
                        this.ctx.save(),
                            this.ctx.globalAlpha = .5 * (1 - t.curPoint),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(a.x, a.y),
                            this.ctx.lineTo(s.x, s.y),
                            this.ctx.stroke(),
                            this.ctx.restore()
                    }
                }
                for (var o = i; o < n - 2; o++) {
                    var c = e[t.curPoint[o]];
                    if (c) {
                        this.ctx.beginPath(),
                            this.ctx.moveTo(c.x, c.y);
                        var h = e[t.curPoint[o + 1]];
                        h && this.ctx.lineTo(h.x, h.y),
                            this.ctx.stroke()
                    }
                }
                var d = e[t.curPoint[n - 2]];
                if (d) {
                    this.ctx.beginPath(),
                        this.ctx.moveTo(d.x, d.y);
                    var p = y(e[t.curPoint[n - 2]], e[t.curPoint[n - 1]], t.curPro);
                    this.ctx.lineTo(p.x, p.y),
                        this.ctx.stroke()
                }
            }
            this.ctx.restore()
        }
        ),
            "function" != typeof this.nextFps && (i.prototype.nextFps = function () {
                for (var x = 0, t = this.points.length; x < t; x++)
                    10 * this.points[x].star == this.timer && this.curLines.push({
                        curLine: x,
                        curPoint: [0, 1],
                        curPro: 0
                    });
                for (var x = 0; x < this.curLines.length; x++) {
                    var y = this.curLines[x];
                    y.curPro = Math.min(1, y.curPro + .1),
                        1 == y.curPro && (y.curPro = 0,
                            y.curPoint.push(y.curPoint[y.curPoint.length - 1] + 1),
                            y.curPoint.length > 5 && y.curPoint.splice(0, 1),
                            this.points[y.curLine].line.length - 1 < y.curPoint[0] && (this.curLines.splice(x, 1),
                                x -= 1,
                                this.endNum++))
                }
                this.timer++ ,
                    this.endNum == this.points.length && (this.endNum = 0,
                        this.timer = 0,
                        this.curLines = [])
            }
            )
    }
    function r() {
        requestAnimationFrame(r);
        for (var x = 0, t = xx.length; x < t; x++)
            xx[x].pos.z -= xx[x].speed,
                xx[x].star.position.z = xx[x].pos.z,
                xx[x].pos.z < -1 * C && (xx[x].pos.z = C);
        if (l.clearRect(0, 0, p.width, p.height),
            V.load >= V.num) {
            $("#page1").addClass("show"),
                l.save();
            for (var x = 0; x < v.ani.length; x++) {
                var y = v.ani[x];
                if (!y.end) {
                    switch (!0) {
                        case 0 == x:
                            y.cp[3] = Math.min(y.cp[3] + 20, y.sp[3]),
                                y.cp[1] = y.sp[1] + y.sp[3] - y.cp[3],
                                l.drawImage(v, y.cp[0], y.cp[1], y.cp[2], y.cp[3], y.cp[0], y.cp[1], y.cp[2], y.cp[3]),
                                y.cp[3] == y.sp[3] && (y.end = !0);
                            break;
                        case 1 == x:
                            y.cp[2] = Math.min(y.cp[2] + 30, y.sp[2]),
                                l.drawImage(v, y.cp[0], y.cp[1], y.cp[2], y.cp[3], y.cp[0], y.cp[1], y.cp[2], y.cp[3]),
                                y.cp[2] == y.sp[2] && (y.end = !0);
                            break;
                        case 2 == x:
                            y.cp[3] = Math.min(y.cp[3] + 30, y.sp[3]),
                                l.drawImage(v, y.cp[0], y.cp[1], y.cp[2], y.cp[3], y.cp[0], y.cp[1], y.cp[2], y.cp[3]),
                                y.cp[3] == y.sp[3] && (y.end = !0);
                            break;
                        case 3 == x:
                            y.cp[2] = Math.min(y.cp[2] + 40, y.sp[2]),
                                y.cp[0] = y.sp[0] + y.sp[2] - y.cp[2],
                                l.drawImage(v, y.cp[0], y.cp[1], y.cp[2], y.cp[3], y.cp[0], y.cp[1], y.cp[2], y.cp[3]),
                                y.cp[2] == y.sp[2] && (y.end = !0);
                            break;
                        case 4 == x:
                            y.cp[3] = Math.min(y.cp[3] + 10, y.sp[3]),
                                y.cp[1] = y.sp[1] + y.sp[3] - y.cp[3],
                                l.drawImage(v, y.cp[0], y.cp[1], y.cp[2], y.cp[3], y.cp[0], y.cp[1], y.cp[2], y.cp[3]),
                                y.cp[3] == y.sp[3] && (y.end = !0)
                    }
                    break
                }
                l.drawImage(v, y.sp[0], y.sp[1], y.sp[2], y.sp[3], y.sp[0], y.sp[1], y.sp[2], y.sp[3])
            }
            if (l.restore(),
                J < 120)
                for (var x = 0; x < O.length; x++)
                    O[x].startT <= J && (J > 40 && (O[x].opc = Math.max(0, O[x].opc - .02)),
                        O[x].move(),
                        O[x].draw(l));
            if (J > 40 && (w.opc = Math.min(1, w.opc + .02),
                l.save(),
                l.globalAlpha = w.opc,
                l.drawImage(w, 0, 0),
                l.restore(),
                J > 120)) {
                nx % 4 == 0 && (f++ ,
                    f < 188 ? (P = f < 94 ? Math.min(1, P + .04) : Math.max(0, P - .04),
                        l.save(),
                        l.globalAlpha = P,
                        l.drawImage(u, 0, 0),
                        l.drawImage(g, 0, 0),
                        l.drawImage(m, 0, 0),
                        l.restore()) : (f = 0,
                            P = 0)),
                    A.clearRect(0, 0, W.width, W.height),
                    z.clearRect(0, 0, S.width, S.height),
                    q.clearRect(0, 0, D.width, D.height);
                for (var x = 0; x < rx.length; x++)
                    nx % 4 == x && (rx[x].draw(),
                        rx[x].nextFps())
            }
            J < 200 && J++
        }
        s()
    }
    function s() {
        Math.abs(G - B) > .1 ? B += .1 * (G - B) : B = G,
            ix = Math.round((B - 90) / 90 * 100 % 800),
            I(),
            Z = Math.round((B - 90) / 90 * b / 5 % b * 8),
            M(),
            X += .1 * (N - X),
            Y += .1 * (F - Y),
            j = THREE.Math.degToRad(B + X),
            U.x = Math.cos(j),
            U.y = Math.cos(THREE.Math.degToRad(90 - Y)),
            U.z = Math.sin(j),
            a.lookAt(U),
            c.render(o, a),
            css3Renderer.render(h, a)
    }
    var a, o, c, h, css3Renderer, p, l, w, u, g, m, v, f, P, b, E, M, C, T, R, k, H, I, L, W, A, S, z, D, q, _ = !1, B = 90, X = 0, N = 0, Y = 0, F = 0, j = 0, G = B, U = new THREE.Vector3, O = [], V = {
        load: 0,
        num: 5
    }, J = 0, K = [], Q = [], Z = 0, xx = [], tx = [], yx = [], ex = [], nx = 4, ix = 0, rx = [], sx = !1, ax = {
        mouseDown: function (x) {
            x.preventDefault(),
                _ = !0,
                onPointerDownPointerX = x.clientX,
                onPointerDownLon = G
        },
        mouseMove: function (x) {
            var t = x.clientX
                , y = x.clientY;
            if (!0 === _) {
                G = onPointerDownLon + .1 * (onPointerDownPointerX - t);
                var e = (onPointerDownPointerX - t) / window.innerWidth * 40;
                H.css({
                    transform: "perspective(400px) rotateY(" + e + "deg)",
                    transition: "none"
                })
            }
            N = (t - window.innerWidth / 2) / window.innerWidth / 2 * 20,
                F = (y - window.innerHeight / 2) / window.innerHeight / 2 * -20
        },
        mouseUp: function (x) {
            _ = !1,
                G = 90 * Math.round(G / 90),
                H.css({
                    transform: "perspective(400px) rotateY(0deg)",
                    transition: "transform .3s"
                })
        },
        mouseWheel: function (x) {
            sx || (sx = !0,
                setTimeout(function () {
                    sx = !1
                }, 1500),
                x.wheelDeltaY < 0 || x.wheelDeltaX < 0 ? G = 90 * Math.round((G + 90) / 90) : (x.wheelDeltaY > 0 || x.wheelDeltaX > 0) && (G = 90 * Math.round((G - 90) / 90)))
        },
        resize: function (x) {
            a.aspect = window.innerWidth / window.innerHeight,
                a.updateProjectionMatrix(),
                c.setSize(window.innerWidth, window.innerHeight),
                css3Renderer.setSize(window.innerWidth, window.innerHeight),
                b = 1 * window.innerHeight;
            var t = window.innerWidth / 2;
            K = [t - 4 * b, t - 3 * b, t - 2 * b, t - b, t, t + b, t + 2 * b, t + 3 * b],
                Q = [t - 4 * b, t - 3 * b, t - 2 * b, t - b, t, t + b, t + 2 * b, t + 3 * b],
                E.css({
                    width: b,
                    margin: "0 0 0 -" + b / 2 + "px"
                })
        }
    };
    !function () {
        var t, mainContainer;
        a = new THREE.PerspectiveCamera(92, window.innerWidth / window.innerHeight, 1, 1e4),
            o = new THREE.Scene;
        try {
            c = new THREE.WebGLRenderer({
                alpha: !0
            })
        } catch (x) {
            return document.body.className += " ie",
                void $(".page").addClass("ani")
        }
        h = new THREE.Scene,
            css3Renderer = new THREE.CSS3DRenderer,
            t = document.getElementById("star_container"),
            mainContainer = document.getElementById("main_container");
        var f = new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(n())
        });
        C = 400;
        for (var P = 0; P < 400; P++) {
            var _ = new THREE.Sprite(f)
                , B = {
                    x: Math.random() * C - .5 * C,
                    y: Math.random() * C - .5 * C,
                    z: Math.random() * C * 2 - 1 * C
                }
                , X = 1 * Math.random() + .6;
            xx.push({
                star: _,
                pos: B,
                speed: X
            }),
                o.add(_),
                _.position.x = B.x,
                _.position.y = B.y,
                _.position.z = B.z
        }
        c.setPixelRatio(window.devicePixelRatio),
            c.setSize(window.innerWidth, window.innerHeight),
            t.appendChild(c.domElement),
            T = $(".page");
        for (var N = [{
            position: [0, 0, 600],
            rotation: [0, Math.PI, 0]
        }, {
            position: [-600, 0, 0],
            rotation: [0, Math.PI / 2, 0]
        }, {
            position: [0, 0, -600],
            rotation: [0, 0, 0]
        }, {
            position: [600, 0, 0],
            rotation: [0, -Math.PI / 2, 0]
        }], P = 0; P < N.length; P++) {
            var Y = N[P]
                , F = T.eq(P)[0];
            F.style.width = "1024px",
                F.style.height = "1024px";
            var j = new THREE.CSS3DObject(F);
            j.position.fromArray(Y.position),
                j.rotation.fromArray(Y.rotation),
                h.add(j)
        }
        console.log(mainContainer);
        css3Renderer.setSize(window.innerWidth, window.innerHeight),
            mainContainer.appendChild(css3Renderer.domElement),
            O = [new e({
                x: 30,
                y: 85
            }, {
                x: 45,
                y: 86
            }, 1), new e({
                x: 45,
                y: 86
            }, {
                x: 116,
                y: 111
            }, 1), new e({
                x: 116,
                y: 111
            }, {
                x: 153,
                y: 104
            }, 1), new e({
                x: 153,
                y: 104
            }, {
                x: 192,
                y: 126
            }, 1), new e({
                x: 192,
                y: 126
            }, {
                x: 225,
                y: 162
            }, 1), new e({
                x: 225,
                y: 162
            }, {
                x: 286,
                y: 116
            }, 1), new e({
                x: 286,
                y: 116
            }, {
                x: 395,
                y: 56
            }, 1), new e({
                x: 395,
                y: 56
            }, {
                x: 485,
                y: 21
            }, 1), new e({
                x: 485,
                y: 21
            }, {
                x: 417,
                y: 154
            }, 1), new e({
                x: 417,
                y: 154
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 374,
                y: 229
            }, {
                x: 413,
                y: 236
            }, 1), new e({
                x: 413,
                y: 236
            }, {
                x: 470,
                y: 256
            }, 1), new e({
                x: 470,
                y: 256
            }, {
                x: 514,
                y: 279
            }, 1), new e({
                x: 413,
                y: 236
            }, {
                x: 405,
                y: 298
            }, 1), new e({
                x: 514,
                y: 279
            }, {
                x: 471,
                y: 287
            }, 1), new e({
                x: 471,
                y: 287
            }, {
                x: 405,
                y: 298
            }, 1), new e({
                x: 405,
                y: 298
            }, {
                x: 313,
                y: 323
            }, 1), new e({
                x: 471,
                y: 287
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 313,
                y: 323
            }, {
                x: 388,
                y: 489
            }, 1), new e({
                x: 388,
                y: 489
            }, {
                x: 303,
                y: 404
            }, 1), new e({
                x: 303,
                y: 404
            }, {
                x: 211,
                y: 354
            }, 1), new e({
                x: 211,
                y: 354
            }, {
                x: 150,
                y: 298
            }, 1), new e({
                x: 150,
                y: 298
            }, {
                x: 131,
                y: 246
            }, 1), new e({
                x: 131,
                y: 246
            }, {
                x: 136,
                y: 185
            }, 1), new e({
                x: 136,
                y: 185
            }, {
                x: 132,
                y: 160
            }, 1), new e({
                x: 132,
                y: 160
            }, {
                x: 103,
                y: 122
            }, 1), new e({
                x: 103,
                y: 122
            }, {
                x: 30,
                y: 85
            }, 1), new e({
                x: 116,
                y: 111
            }, {
                x: 102,
                y: 122
            }, 1), new e({
                x: 132,
                y: 160
            }, {
                x: 153,
                y: 104
            }, 1), new e({
                x: 132,
                y: 160
            }, {
                x: 225,
                y: 162
            }, 1), new e({
                x: 192,
                y: 126
            }, {
                x: 131,
                y: 246
            }, 1), new e({
                x: 192,
                y: 126
            }, {
                x: 103,
                y: 122
            }, 1), new e({
                x: 225,
                y: 162
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 374,
                y: 229
            }, {
                x: 313,
                y: 323
            }, 1), new e({
                x: 131,
                y: 246
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 225,
                y: 162
            }, {
                x: 150,
                y: 298
            }, 1), new e({
                x: 153,
                y: 104
            }, {
                x: 211,
                y: 354
            }, 1), new e({
                x: 303,
                y: 404
            }, {
                x: 313,
                y: 323
            }, 1), new e({
                x: 313,
                y: 323
            }, {
                x: 211,
                y: 354
            }, 1), new e({
                x: 313,
                y: 323
            }, {
                x: 211,
                y: 354
            }, 1), new e({
                x: 225,
                y: 162
            }, {
                x: 303,
                y: 404
            }, 1), new e({
                x: 211,
                y: 354
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 150,
                y: 298
            }, {
                x: 514,
                y: 279
            }, 1), new e({
                x: 211,
                y: 354
            }, {
                x: 485,
                y: 21
            }, 1), new e({
                x: 150,
                y: 298
            }, {
                x: 485,
                y: 21
            }, 1), new e({
                x: 132,
                y: 160
            }, {
                x: 313,
                y: 323
            }, 1), new e({
                x: 286,
                y: 116
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 395,
                y: 56
            }, {
                x: 417,
                y: 154
            }, 1), new e({
                x: 395,
                y: 56
            }, {
                x: 374,
                y: 229
            }, 1), new e({
                x: 417,
                y: 154
            }, {
                x: 225,
                y: 162
            }, 1), new e({
                x: 286,
                y: 116
            }, {
                x: 417,
                y: 154
            }, 1)],
            p = document.getElementById("birdCvs"),
            p.setAttribute("width", 547),
            p.setAttribute("height", 578),
            l = p.getContext("2d"),
            w = x("assets/img/bird/bird.png", V),
            w.opc = 0,
            u = x("assets/img/bird/b_line.png", V),
            g = x("assets/img/bird/b_dots.png", V),
            m = x("assets/img/bird/b_shadow.png", V),
            v = x("assets/img/bird/b_border.png", V),
            v.ani = [{
                sp: [0, 118, 2, 231],
                cp: [0, 348, 2, 1],
                end: !1
            }, {
                sp: [2, 118, 456, 2],
                cp: [2, 118, 1, 2],
                end: !1
            }, {
                sp: [458, 118, 2, 460],
                cp: [458, 118, 2, 1],
                end: !1
            }, {
                sp: [2, 576, 456, 2],
                cp: [457, 576, 1, 2],
                end: !1
            }, {
                sp: [0, 513, 2, 65],
                cp: [0, 577, 2, 1],
                end: !1
            }],
            E = $(".page_bg"),
            b = 1 * window.innerHeight;
        var U = window.innerWidth / 2;
        K = [U - 4 * b, U - 3 * b, U - 2 * b, U - b, U, U + b, U + 2 * b, U + 3 * b],
            Q = [U - 4 * b, U - 3 * b, U - 2 * b, U - b, U, U + b, U + 2 * b, U + 3 * b],
            E.css({
                width: b,
                margin: "0 0 0 -" + b / 2 + "px"
            }),
            M = function () {
                for (var x = 0; x < E.length; x++)
                    Q[x] = K[x] - Z,
                        Q[x] < window.innerWidth / 2 - 3 * b && (Q[x] += 8 * b),
                        Q[x] > window.innerWidth / 2 + 5 * b && (Q[x] -= 8 * b),
                        Q[x],
                        E.eq(x).css({
                            left: Q[x]
                        })
            }
            ,
            tx = [0, 100, 200, 300, 400, 500, 600, 700],
            yx = [0, 100, 200, 300, 400, 500, 600, 700],
            ex = [0, .4, .6, .8, 1, .8, .6, .4, 0],
            R = $("#pageBtns").find("a"),
            k = $("#degree"),
            H = $(".btn_download"),
            I = function () {
                for (var x = 0; x < R.length; x++) {
                    yx[x] = tx[x] - ix,
                        yx[x] < 0 && (yx[x] += 800),
                        yx[x] > 800 && (yx[x] -= 800);
                    var t = yx[x];
                    switch (!0) {
                        case t < 50 || t > 750:
                            ex[x] = 0;
                            break;
                        case t >= 50 && t < 150 || t > 650 && t <= 750:
                            ex[x] = .4;
                            break;
                        case t >= 150 && t < 250 || t > 550 && t <= 650:
                            ex[x] = .6;
                            break;
                        case t >= 250 && t < 350 || t > 450 && t <= 550:
                            ex[x] = .8;
                            break;
                        case t >= 350 && t < 450:
                            ex[x] = 1,
                                R.eq(x).hasClass("cur") || (R.removeClass("cur"),
                                    R.eq(x).addClass("cur")),
                                nx = x
                    }
                    R.eq(x).css({
                        left: yx[x],
                        opacity: ex[x]
                    })
                }
                T.removeClass("ani").eq(nx % 4).addClass("ani"),
                    k.css({
                        transform: "translate( " + -1.2 * ix + "px, 0px )"
                    });
                var y = ((G - 90) % 360 + 360) % 360;
                if (y % 90 == 0)
                    T.eq((nx + 1) % 4).css("opacity", .3),
                        T.eq((nx + 3) % 4).css("opacity", .3);
                else if (y % 90 < 45) {
                    var e = .3 + y % 45 / 45 * .7;
                    T.eq((nx + 1) % 4).css("opacity", e)
                } else {
                    var e = 1 - y % 45 / 45 * .7;
                    T.eq((nx + 3) % 4).css("opacity", e)
                }
                T.eq(nx % 4).css("opacity", 1)
            }
            ,
            L = function (x) {
                G = 90 * Math.round(G / 90),
                    yx[x] >= 400 ? G += (x + R.length - nx) % R.length * 90 : G -= (R.length + nx - x) % R.length * 90,
                    ix = (G - 90) / 90 * 100 % 800,
                    I()
            }
            ,
            W = document.getElementById("sphereCvs"),
            W.setAttribute("width", 502),
            W.setAttribute("height", 501),
            A = W.getContext("2d"),
            S = document.getElementById("rocketCvs"),
            S.setAttribute("width", 381),
            S.setAttribute("height", 375),
            z = S.getContext("2d"),
            D = document.getElementById("cameraCvs"),
            D.setAttribute("width", 433),
            D.setAttribute("height", 320),
            q = D.getContext("2d"),
            rx = [new i([{
                line: [{
                    x: 282,
                    y: 233
                }, {
                    x: 259,
                    y: 218
                }, {
                    x: 237,
                    y: 187
                }, {
                    x: 223,
                    y: 157
                }, {
                    x: 222,
                    y: 125
                }, {
                    x: 206,
                    y: 112
                }, {
                    x: 182,
                    y: 104
                }, {
                    x: 146,
                    y: 111
                }, {
                    x: 114,
                    y: 100
                }, {
                    x: 96,
                    y: 94
                }, {
                    x: 74,
                    y: 86
                }, {
                    x: 62,
                    y: 85
                }],
                star: 0
            }, {
                line: [{
                    x: 223,
                    y: 157
                }, {
                    x: 191,
                    y: 166
                }, {
                    x: 163,
                    y: 159
                }, {
                    x: 145,
                    y: 138
                }, {
                    x: 132,
                    y: 122
                }, {
                    x: 116,
                    y: 114
                }, {
                    x: 99,
                    y: 105
                }, {
                    x: 77,
                    y: 93
                }, {
                    x: 62,
                    y: 85
                }],
                star: 3
            }, {
                line: [{
                    x: 259,
                    y: 218
                }, {
                    x: 224,
                    y: 218
                }, {
                    x: 186,
                    y: 205
                }, {
                    x: 166,
                    y: 185
                }],
                star: 1
            }, {
                line: [{
                    x: 224,
                    y: 218
                }, {
                    x: 212,
                    y: 238
                }, {
                    x: 194,
                    y: 258
                }, {
                    x: 170,
                    y: 270
                }],
                star: 2
            }, {
                line: [{
                    x: 282,
                    y: 233
                }, {
                    x: 259,
                    y: 263
                }, {
                    x: 222,
                    y: 265
                }, {
                    x: 205,
                    y: 291
                }, {
                    x: 180,
                    y: 297
                }],
                star: 0
            }, {
                line: [{
                    x: 259,
                    y: 263
                }, {
                    x: 261,
                    y: 306
                }, {
                    x: 241,
                    y: 323
                }, {
                    x: 218,
                    y: 334
                }],
                star: 1
            }, {
                line: [{
                    x: 261,
                    y: 306
                }, {
                    x: 264,
                    y: 339
                }, {
                    x: 268,
                    y: 365
                }],
                star: 2
            }, {
                line: [{
                    x: 282,
                    y: 233
                }, {
                    x: 309,
                    y: 246
                }, {
                    x: 308,
                    y: 272
                }, {
                    x: 325,
                    y: 289
                }, {
                    x: 319,
                    y: 315
                }, {
                    x: 315,
                    y: 346
                }, {
                    x: 334,
                    y: 360
                }, {
                    x: 355,
                    y: 387
                }, {
                    x: 365,
                    y: 409
                }],
                star: 0
            }, {
                line: [{
                    x: 365,
                    y: 409
                }, {
                    x: 352,
                    y: 421
                }, {
                    x: 370,
                    y: 441
                }, {
                    x: 387,
                    y: 457
                }, {
                    x: 404,
                    y: 476
                }, {
                    x: 418,
                    y: 489
                }],
                star: 9
            }, {
                line: [{
                    x: 365,
                    y: 409
                }, {
                    x: 390,
                    y: 420
                }, {
                    x: 397,
                    y: 443
                }, {
                    x: 410,
                    y: 464
                }, {
                    x: 418,
                    y: 489
                }],
                star: 9
            }, {
                line: [{
                    x: 316,
                    y: 345
                }, {
                    x: 289,
                    y: 351
                }, {
                    x: 268,
                    y: 365
                }],
                star: 5
            }, {
                line: [{
                    x: 282,
                    y: 233
                }, {
                    x: 296,
                    y: 207
                }, {
                    x: 303,
                    y: 170
                }, {
                    x: 316,
                    y: 116
                }],
                star: 0
            }, {
                line: [{
                    x: 342,
                    y: 180
                }, {
                    x: 333,
                    y: 142
                }, {
                    x: 366,
                    y: 129
                }, {
                    x: 365,
                    y: 87
                }],
                star: 2
            }, {
                line: [{
                    x: 296,
                    y: 207
                }, {
                    x: 342,
                    y: 180
                }, {
                    x: 372,
                    y: 159
                }],
                star: 1
            }, {
                line: [{
                    x: 342,
                    y: 180
                }, {
                    x: 376,
                    y: 197
                }, {
                    x: 407,
                    y: 181
                }, {
                    x: 434,
                    y: 181
                }, {
                    x: 447,
                    y: 155
                }, {
                    x: 461,
                    y: 143
                }, {
                    x: 472,
                    y: 125
                }],
                star: 2
            }, {
                line: [{
                    x: 373,
                    y: 159
                }, {
                    x: 407,
                    y: 137
                }, {
                    x: 394,
                    y: 108
                }, {
                    x: 395,
                    y: 75
                }, {
                    x: 425,
                    y: 56
                }, {
                    x: 456,
                    y: 46
                }, {
                    x: 483,
                    y: 32
                }, {
                    x: 513,
                    y: 22
                }],
                star: 3
            }, {
                line: [{
                    x: 407,
                    y: 137
                }, {
                    x: 433,
                    y: 113
                }, {
                    x: 456,
                    y: 88
                }, {
                    x: 480,
                    y: 85
                }, {
                    x: 489,
                    y: 63
                }, {
                    x: 503,
                    y: 46
                }, {
                    x: 513,
                    y: 22
                }],
                star: 4
            }, {
                line: [{
                    x: 309,
                    y: 245
                }, {
                    x: 345,
                    y: 258
                }, {
                    x: 373,
                    y: 241
                }, {
                    x: 404,
                    y: 229
                }],
                star: 1
            }, {
                line: [{
                    x: 345,
                    y: 259
                }, {
                    x: 384,
                    y: 274
                }, {
                    x: 369,
                    y: 312
                }, {
                    x: 344,
                    y: 324
                }],
                star: 2
            }, {
                line: [{
                    x: 384,
                    y: 274
                }, {
                    x: 414,
                    y: 277
                }, {
                    x: 449,
                    y: 279
                }, {
                    x: 465,
                    y: 293
                }, {
                    x: 499,
                    y: 286
                }, {
                    x: 544,
                    y: 279
                }],
                star: 3
            }, {
                line: [{
                    x: 413,
                    y: 276
                }, {
                    x: 424,
                    y: 251
                }, {
                    x: 456,
                    y: 258
                }, {
                    x: 501,
                    y: 256
                }, {
                    x: 521,
                    y: 268
                }, {
                    x: 544,
                    y: 279
                }],
                star: 4
            }], l), new i([{
                line: [{
                    x: 239,
                    y: 212
                }, {
                    x: 209,
                    y: 251
                }, {
                    x: 238,
                    y: 289
                }, {
                    x: 286,
                    y: 275
                }, {
                    x: 283,
                    y: 226
                }, {
                    x: 239,
                    y: 212
                }],
                star: 0
            }, {
                line: [{
                    x: 250,
                    y: 250
                }, {
                    x: 239,
                    y: 212
                }, {
                    x: 224,
                    y: 165
                }, {
                    x: 213,
                    y: 129
                }, {
                    x: 206,
                    y: 107
                }, {
                    x: 226,
                    y: 90
                }, {
                    x: 253,
                    y: 82
                }],
                star: 0
            }, {
                line: [{
                    x: 250,
                    y: 250
                }, {
                    x: 283,
                    y: 229
                }, {
                    x: 323,
                    y: 198
                }, {
                    x: 355,
                    y: 177
                }, {
                    x: 373,
                    y: 163
                }, {
                    x: 395,
                    y: 179
                }, {
                    x: 413,
                    y: 198
                }],
                star: 0
            }, {
                line: [{
                    x: 250,
                    y: 250
                }, {
                    x: 286,
                    y: 275
                }, {
                    x: 323,
                    y: 302
                }, {
                    x: 354,
                    y: 327
                }, {
                    x: 372,
                    y: 339
                }, {
                    x: 366,
                    y: 364
                }, {
                    x: 352,
                    y: 387
                }],
                star: 0
            }, {
                line: [{
                    x: 250,
                    y: 250
                }, {
                    x: 238,
                    y: 289
                }, {
                    x: 224,
                    y: 336
                }, {
                    x: 211,
                    y: 371
                }, {
                    x: 205,
                    y: 393
                }, {
                    x: 178,
                    y: 395
                }, {
                    x: 153,
                    y: 389
                }],
                star: 0
            }, {
                line: [{
                    x: 250,
                    y: 250
                }, {
                    x: 209,
                    y: 251
                }, {
                    x: 163,
                    y: 250
                }, {
                    x: 124,
                    y: 249
                }, {
                    x: 100,
                    y: 249
                }, {
                    x: 91,
                    y: 227
                }, {
                    x: 92,
                    y: 196
                }],
                star: 0
            }, {
                line: [{
                    x: 224,
                    y: 336
                }, {
                    x: 176,
                    y: 340
                }, {
                    x: 135,
                    y: 334
                }, {
                    x: 107,
                    y: 320
                }, {
                    x: 90,
                    y: 301
                }],
                star: 2
            }, {
                line: [{
                    x: 224,
                    y: 336
                }, {
                    x: 260,
                    y: 366
                }, {
                    x: 297,
                    y: 387
                }, {
                    x: 329,
                    y: 391
                }, {
                    x: 352,
                    y: 387
                }],
                star: 2
            }, {
                line: [{
                    x: 323,
                    y: 302
                }, {
                    x: 313,
                    y: 348
                }, {
                    x: 293,
                    y: 388
                }, {
                    x: 272,
                    y: 410
                }, {
                    x: 253,
                    y: 421
                }],
                star: 2
            }, {
                line: [{
                    x: 323,
                    y: 302
                }, {
                    x: 365,
                    y: 277
                }, {
                    x: 394,
                    y: 250
                }, {
                    x: 411,
                    y: 223
                }, {
                    x: 413,
                    y: 198
                }],
                star: 2
            }, {
                line: [{
                    x: 323,
                    y: 198
                }, {
                    x: 364,
                    y: 224
                }, {
                    x: 394,
                    y: 250
                }, {
                    x: 411,
                    y: 277
                }, {
                    x: 411,
                    y: 305
                }],
                star: 2
            }, {
                line: [{
                    x: 323,
                    y: 198
                }, {
                    x: 312,
                    y: 152
                }, {
                    x: 296,
                    y: 114
                }, {
                    x: 269,
                    y: 90
                }, {
                    x: 253,
                    y: 82
                }],
                star: 2
            }, {
                line: [{
                    x: 223,
                    y: 164
                }, {
                    x: 260,
                    y: 135
                }, {
                    x: 296,
                    y: 114
                }, {
                    x: 327,
                    y: 109
                }, {
                    x: 349,
                    y: 113
                }],
                star: 2
            }, {
                line: [{
                    x: 223,
                    y: 164
                }, {
                    x: 175,
                    y: 162
                }, {
                    x: 136,
                    y: 167
                }, {
                    x: 107,
                    y: 180
                }, {
                    x: 92,
                    y: 196
                }],
                star: 2
            }, {
                line: [{
                    x: 163,
                    y: 250
                }, {
                    x: 144,
                    y: 205
                }, {
                    x: 136,
                    y: 167
                }, {
                    x: 140,
                    y: 134
                }, {
                    x: 151,
                    y: 114
                }],
                star: 2
            }, {
                line: [{
                    x: 163,
                    y: 250
                }, {
                    x: 144,
                    y: 295
                }, {
                    x: 135,
                    y: 334
                }, {
                    x: 140,
                    y: 368
                }, {
                    x: 153,
                    y: 389
                }],
                star: 2
            }], A), new i([{
                line: [{
                    x: 365,
                    y: 5
                }, {
                    x: 333,
                    y: 2
                }, {
                    x: 304,
                    y: 9
                }, {
                    x: 264,
                    y: 18
                }, {
                    x: 221,
                    y: 39
                }, {
                    x: 168,
                    y: 64
                }, {
                    x: 156,
                    y: 78
                }, {
                    x: 132,
                    y: 110
                }, {
                    x: 114,
                    y: 137
                }, {
                    x: 81,
                    y: 147
                }, {
                    x: 46,
                    y: 177
                }, {
                    x: 30,
                    y: 225
                }],
                star: 0
            }, {
                line: [{
                    x: 365,
                    y: 5
                }, {
                    x: 335,
                    y: 13
                }, {
                    x: 335,
                    y: 25
                }, {
                    x: 293,
                    y: 45
                }, {
                    x: 251,
                    y: 45
                }, {
                    x: 216,
                    y: 79
                }, {
                    x: 181,
                    y: 114
                }, {
                    x: 148,
                    y: 135
                }, {
                    x: 114,
                    y: 137
                }],
                star: 0
            }, {
                line: [{
                    x: 216,
                    y: 79
                }, {
                    x: 215,
                    y: 102
                }, {
                    x: 220,
                    y: 132
                }, {
                    x: 194,
                    y: 146
                }, {
                    x: 174,
                    y: 166
                }, {
                    x: 141,
                    y: 179
                }, {
                    x: 116,
                    y: 180
                }, {
                    x: 83,
                    y: 192
                }, {
                    x: 60,
                    y: 210
                }, {
                    x: 30,
                    y: 225
                }],
                star: 5
            }, {
                line: [{
                    x: 171,
                    y: 168
                }, {
                    x: 164,
                    y: 191
                }, {
                    x: 166,
                    y: 231
                }, {
                    x: 134,
                    y: 240
                }, {
                    x: 98,
                    y: 246
                }],
                star: 9
            }, {
                line: [{
                    x: 365,
                    y: 5
                }, {
                    x: 377,
                    y: 31
                }, {
                    x: 376,
                    y: 60
                }, {
                    x: 359,
                    y: 117
                }, {
                    x: 345,
                    y: 156
                }, {
                    x: 331,
                    y: 186
                }, {
                    x: 302,
                    y: 217
                }, {
                    x: 269,
                    y: 225
                }, {
                    x: 243,
                    y: 263
                }, {
                    x: 241,
                    y: 293
                }, {
                    x: 215,
                    y: 309
                }, {
                    x: 162,
                    y: 309
                }, {
                    x: 153,
                    y: 321
                }, {
                    x: 137,
                    y: 347
                }],
                star: 0
            }, {
                line: [{
                    x: 377,
                    y: 31
                }, {
                    x: 342,
                    y: 65
                }, {
                    x: 331,
                    y: 86
                }, {
                    x: 330,
                    y: 103
                }, {
                    x: 319,
                    y: 138
                }, {
                    x: 316,
                    y: 180
                }, {
                    x: 301,
                    y: 217
                }],
                star: 1
            }, {
                line: [{
                    x: 319,
                    y: 138
                }, {
                    x: 296,
                    y: 160
                }, {
                    x: 271,
                    y: 162
                }, {
                    x: 245,
                    y: 192
                }, {
                    x: 240,
                    y: 210
                }, {
                    x: 198,
                    y: 229
                }, {
                    x: 180,
                    y: 271
                }, {
                    x: 160,
                    y: 294
                }],
                star: 5
            }, {
                line: [{
                    x: 240,
                    y: 210
                }, {
                    x: 221,
                    y: 253
                }, {
                    x: 206,
                    y: 280
                }, {
                    x: 175,
                    y: 311
                }, {
                    x: 165,
                    y: 332
                }, {
                    x: 161,
                    y: 346
                }],
                star: 9
            }, {
                line: [{
                    x: 74,
                    y: 263
                }, {
                    x: 38,
                    y: 289
                }, {
                    x: 15,
                    y: 326
                }, {
                    x: 3,
                    y: 372
                }],
                star: 15
            }, {
                line: [{
                    x: 74,
                    y: 263
                }, {
                    x: 83,
                    y: 276
                }, {
                    x: 78,
                    y: 297
                }, {
                    x: 65,
                    y: 316
                }, {
                    x: 54,
                    y: 339
                }, {
                    x: 31,
                    y: 362
                }],
                star: 15
            }, {
                line: [{
                    x: 112,
                    y: 297
                }, {
                    x: 101,
                    y: 312
                }, {
                    x: 78,
                    y: 335
                }, {
                    x: 31,
                    y: 362
                }, {
                    x: 3,
                    y: 372
                }],
                star: 15
            }, {
                line: [{
                    x: 112,
                    y: 297
                }, {
                    x: 92,
                    y: 296
                }, {
                    x: 78,
                    y: 297
                }, {
                    x: 49,
                    y: 306
                }, {
                    x: 30,
                    y: 339
                }, {
                    x: 14,
                    y: 355
                }],
                star: 15
            }], z), new i([{
                line: [{
                    x: 92,
                    y: 15
                }, {
                    x: 71,
                    y: 27
                }, {
                    x: 71,
                    y: 50
                }, {
                    x: 93,
                    y: 65
                }, {
                    x: 117,
                    y: 48
                }, {
                    x: 113,
                    y: 27
                }, {
                    x: 92,
                    y: 15
                }],
                star: 0
            }, {
                line: [{
                    x: 42,
                    y: 64
                }, {
                    x: 24,
                    y: 77
                }, {
                    x: 27,
                    y: 101
                }, {
                    x: 45,
                    y: 112
                }, {
                    x: 67,
                    y: 98
                }, {
                    x: 66,
                    y: 75
                }, {
                    x: 42,
                    y: 64
                }],
                star: 4
            }, {
                line: [{
                    x: 92,
                    y: 111
                }, {
                    x: 72,
                    y: 123
                }, {
                    x: 72,
                    y: 145
                }, {
                    x: 92,
                    y: 158
                }, {
                    x: 110,
                    y: 151
                }, {
                    x: 118,
                    y: 129
                }, {
                    x: 92,
                    y: 111
                }],
                star: 8
            }, {
                line: [{
                    x: 144,
                    y: 67
                }, {
                    x: 121,
                    y: 76
                }, {
                    x: 118,
                    y: 98
                }, {
                    x: 136,
                    y: 115
                }, {
                    x: 157,
                    y: 107
                }, {
                    x: 162,
                    y: 82
                }, {
                    x: 144,
                    y: 67
                }],
                star: 12
            }, {
                line: [{
                    x: 104,
                    y: 3
                }, {
                    x: 72,
                    y: 9
                }, {
                    x: 47,
                    y: 15
                }, {
                    x: 25,
                    y: 37
                }, {
                    x: 12,
                    y: 60
                }, {
                    x: 11,
                    y: 88
                }, {
                    x: 13,
                    y: 115
                }, {
                    x: 28,
                    y: 139
                }, {
                    x: 48,
                    y: 160
                }, {
                    x: 74,
                    y: 169
                }, {
                    x: 107,
                    y: 174
                }, {
                    x: 135,
                    y: 161
                }, {
                    x: 154,
                    y: 149
                }, {
                    x: 168,
                    y: 124
                }, {
                    x: 175,
                    y: 96
                }, {
                    x: 174,
                    y: 70
                }, {
                    x: 166,
                    y: 48
                }, {
                    x: 155,
                    y: 27
                }, {
                    x: 131,
                    y: 15
                }, {
                    x: 104,
                    y: 3
                }],
                star: 0
            }, {
                line: [{
                    x: 270,
                    y: 18
                }, {
                    x: 250,
                    y: 40
                }, {
                    x: 262,
                    y: 60
                }, {
                    x: 281,
                    y: 64
                }, {
                    x: 294,
                    y: 54
                }, {
                    x: 293,
                    y: 30
                }, {
                    x: 270,
                    y: 18
                }],
                star: 0
            }, {
                line: [{
                    x: 213,
                    y: 68
                }, {
                    x: 203,
                    y: 91
                }, {
                    x: 216,
                    y: 110
                }, {
                    x: 241,
                    y: 107
                }, {
                    x: 250,
                    y: 87
                }, {
                    x: 238,
                    y: 67
                }, {
                    x: 213,
                    y: 68
                }],
                star: 4
            }, {
                line: [{
                    x: 266,
                    y: 112
                }, {
                    x: 251,
                    y: 128
                }, {
                    x: 256,
                    y: 150
                }, {
                    x: 277,
                    y: 157
                }, {
                    x: 297,
                    y: 141
                }, {
                    x: 290,
                    y: 120
                }, {
                    x: 266,
                    y: 112
                }],
                star: 8
            }, {
                line: [{
                    x: 321,
                    y: 67
                }, {
                    x: 301,
                    y: 78
                }, {
                    x: 302,
                    y: 104
                }, {
                    x: 326,
                    y: 113
                }, {
                    x: 340,
                    y: 99
                }, {
                    x: 341,
                    y: 81
                }, {
                    x: 321,
                    y: 67
                }],
                star: 12
            }, {
                line: [{
                    x: 284,
                    y: 2
                }, {
                    x: 254,
                    y: 7
                }, {
                    x: 228,
                    y: 14
                }, {
                    x: 206,
                    y: 35
                }, {
                    x: 193,
                    y: 57
                }, {
                    x: 191,
                    y: 86
                }, {
                    x: 193,
                    y: 114
                }, {
                    x: 207,
                    y: 147
                }, {
                    x: 227,
                    y: 168
                }, {
                    x: 263,
                    y: 170
                }, {
                    x: 297,
                    y: 168
                }, {
                    x: 316,
                    y: 160
                }, {
                    x: 335,
                    y: 147
                }, {
                    x: 348,
                    y: 123
                }, {
                    x: 356,
                    y: 96
                }, {
                    x: 355,
                    y: 69
                }, {
                    x: 347,
                    y: 48
                }, {
                    x: 336,
                    y: 27
                }, {
                    x: 312,
                    y: 14
                }, {
                    x: 284,
                    y: 2
                }],
                star: 0
            }, {
                line: [{
                    x: 8,
                    y: 193
                }, {
                    x: 18,
                    y: 179
                }, {
                    x: 33,
                    y: 175
                }, {
                    x: 46,
                    y: 176
                }, {
                    x: 64,
                    y: 191
                }, {
                    x: 99,
                    y: 198
                }, {
                    x: 145,
                    y: 197
                }, {
                    x: 168,
                    y: 173
                }, {
                    x: 207,
                    y: 147
                }],
                star: 0
            }, {
                line: [{
                    x: 8,
                    y: 193
                }, {
                    x: 31,
                    y: 201
                }, {
                    x: 48,
                    y: 206
                }, {
                    x: 73,
                    y: 219
                }, {
                    x: 112,
                    y: 224
                }, {
                    x: 149,
                    y: 240
                }, {
                    x: 175,
                    y: 251
                }, {
                    x: 207,
                    y: 248
                }, {
                    x: 220,
                    y: 289
                }, {
                    x: 236,
                    y: 318
                }],
                star: 0
            }, {
                line: [{
                    x: 58,
                    y: 312
                }, {
                    x: 71,
                    y: 291
                }, {
                    x: 108,
                    y: 259
                }, {
                    x: 149,
                    y: 240
                }, {
                    x: 181,
                    y: 217
                }, {
                    x: 209,
                    y: 207
                }, {
                    x: 249,
                    y: 190
                }, {
                    x: 278,
                    y: 218
                }, {
                    x: 294,
                    y: 247
                }, {
                    x: 314,
                    y: 258
                }, {
                    x: 344,
                    y: 258
                }, {
                    x: 364,
                    y: 273
                }, {
                    x: 389,
                    y: 281
                }, {
                    x: 403,
                    y: 299
                }, {
                    x: 429,
                    y: 312
                }],
                star: 2
            }, {
                line: [{
                    x: 58,
                    y: 312
                }, {
                    x: 85,
                    y: 313
                }, {
                    x: 122,
                    y: 309
                }, {
                    x: 163,
                    y: 315
                }, {
                    x: 174,
                    y: 282
                }, {
                    x: 207,
                    y: 248
                }, {
                    x: 240,
                    y: 233
                }, {
                    x: 278,
                    y: 218
                }, {
                    x: 305,
                    y: 206
                }, {
                    x: 325,
                    y: 191
                }, {
                    x: 343,
                    y: 176
                }, {
                    x: 361,
                    y: 161
                }, {
                    x: 381,
                    y: 150
                }, {
                    x: 398,
                    y: 129
                }, {
                    x: 427,
                    y: 116
                }],
                star: 2
            }, {
                line: [{
                    x: 344,
                    y: 258
                }, {
                    x: 369,
                    y: 234
                }, {
                    x: 400,
                    y: 203
                }, {
                    x: 418,
                    y: 186
                }, {
                    x: 428,
                    y: 155
                }],
                star: 12
            }, {
                line: [{
                    x: 361,
                    y: 161
                }, {
                    x: 382,
                    y: 181
                }, {
                    x: 400,
                    y: 203
                }, {
                    x: 425,
                    y: 240
                }],
                star: 13
            }], q)],
            R.on("mousedown", function (x) {
                x.stopPropagation(),
                    L(R.index(this))
            }),
            $(".page_prev").on("click", function (x) {
                L((nx + R.length - 1) % R.length)
            }),
            $(".page_next").on("click", function (x) {
                L((nx + 1) % R.length)
            }),
            document.addEventListener("keyup", function (x) {
                var t = G % 90;
                37 == x.keyCode && L(t < 45 && 0 != t ? nx : (nx + R.length - 1) % R.length),
                    39 == x.keyCode && L(t >= 45 && 0 != t ? nx : (nx + 1) % R.length)
            }, !1),
            document.addEventListener("mousedown", ax.mouseDown, !1),
            document.addEventListener("mousemove", ax.mouseMove, !1),
            document.addEventListener("mouseup", ax.mouseUp, !1),
            document.addEventListener("mousewheel", ax.mouseWheel, !1),
            window.addEventListener("resize", ax.resize, !1),
            s(),
            $(".load_wp").animate({
                opacity: 0
            }, 600, function () {
                $(this).hide(),
                    r()
            })
            // debugger;
        mainContainer.removeChild(mainContainer.children[0]);
    }()
}();
