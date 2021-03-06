THREE.CSS3DObject = function(e) {
    THREE.Object3D.call(this),
    this.element = e,
    this.element.style.position = "absolute",
    this.addEventListener("removed", function(e) {
        null !== this.element.parentNode && this.element.parentNode.removeChild(this.element)
    })
}
,
THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype),
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject,
THREE.CSS3DSprite = function(e) {
    THREE.CSS3DObject.call(this, e)
}
,
THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype),
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite,
THREE.CSS3DRenderer = function() {
    var e, t, r, s, n = new THREE.Matrix4, o = {
        camera: {
            fov: 0,
            style: ""
        },
        objects: {}
    }, l = document.createElement("div");
    l.style.overflow = "hidden",
    l.style.WebkitTransformStyle = "preserve-3d",
    l.style.MozTransformStyle = "preserve-3d",
    l.style.oTransformStyle = "preserve-3d",
    l.style.transformStyle = "preserve-3d",
    this.domElement = l;
    var a = document.createElement("div");
    a.style.WebkitTransformStyle = "preserve-3d",
    a.style.MozTransformStyle = "preserve-3d",
    a.style.oTransformStyle = "preserve-3d",
    a.style.transformStyle = "preserve-3d",
    l.appendChild(a),
    this.setClearColor = function() {}
    ,
    this.getSize = function() {
        return {
            width: e,
            height: t
        }
    }
    ,
    this.setSize = function(n, o) {
        e = n,
        t = o,
        r = e / 2,
        s = t / 2,
        l.style.width = n + "px",
        l.style.height = o + "px",
        a.style.width = n + "px",
        a.style.height = o + "px"
    }
    ;
    var i = function(e) {
        return Math.abs(e) < 1e-6 ? 0 : e
    }
      , c = function(e) {
        var t = e.elements;
        return "matrix3d(" + i(t[0]) + "," + i(-t[1]) + "," + i(t[2]) + "," + i(t[3]) + "," + i(t[4]) + "," + i(-t[5]) + "," + i(t[6]) + "," + i(t[7]) + "," + i(t[8]) + "," + i(-t[9]) + "," + i(t[10]) + "," + i(t[11]) + "," + i(t[12]) + "," + i(-t[13]) + "," + i(t[14]) + "," + i(t[15]) + ")"
    }
      , p = function(e) {
        var t = e.elements;
        return "translate3d(-50%,-50%,0) matrix3d(" + i(t[0]) + "," + i(t[1]) + "," + i(t[2]) + "," + i(t[3]) + "," + i(-t[4]) + "," + i(-t[5]) + "," + i(-t[6]) + "," + i(-t[7]) + "," + i(t[8]) + "," + i(t[9]) + "," + i(t[10]) + "," + i(t[11]) + "," + i(t[12]) + "," + i(t[13]) + "," + i(t[14]) + "," + i(t[15]) + ")"
    }
      , d = function(e, t) {
        if (e instanceof THREE.CSS3DObject) {
            var r;
            e instanceof THREE.CSS3DSprite ? (n.copy(t.matrixWorldInverse),
            n.transpose(),
            n.copyPosition(e.matrixWorld),
            n.scale(e.scale),
            n.elements[3] = 0,
            n.elements[7] = 0,
            n.elements[11] = 0,
            n.elements[15] = 1,
            r = p(n)) : r = p(e.matrixWorld);
            var s = e.element
              , l = o.objects[e.id];
            void 0 !== l && l === r || (s.style.WebkitTransform = r,
            s.style.MozTransform = r,
            s.style.oTransform = r,
            s.style.transform = r,
            o.objects[e.id] = r),
            s.parentNode !== a && a.appendChild(s)
        }
        for (var i = 0, c = e.children.length; i < c; i++)
            d(e.children[i], t)
    };
    this.render = function(e, n) {
        var i = .5 / Math.tan(THREE.Math.degToRad(.5 * n.fov)) * t;
        o.camera.fov !== i && (l.style.WebkitPerspective = i + "px",
        l.style.MozPerspective = i + "px",
        l.style.oPerspective = i + "px",
        l.style.perspective = i + "px",
        o.camera.fov = i),
        e.updateMatrixWorld(),
        null === n.parent && n.updateMatrixWorld(),
        n.matrixWorldInverse.getInverse(n.matrixWorld);
        var p = "translate3d(0,0," + i + "px)" + c(n.matrixWorldInverse) + " translate3d(" + r + "px," + s + "px, 0)";
        o.camera.style !== p && (a.style.WebkitTransform = p,
        a.style.MozTransform = p,
        a.style.oTransform = p,
        a.style.transform = p,
        o.camera.style = p),
        d(e, n)
    }
}
;
