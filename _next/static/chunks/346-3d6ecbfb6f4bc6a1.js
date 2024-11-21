(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [346], {
        7011: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return f
                }
            });
            var r = n(431),
                i = n(949),
                a = n(6006),
                o = n(7804),
                l = Object.defineProperty,
                s = (e, t, n) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t, n) => (s(e, "symbol" != typeof t ? t + "" : t, n), n);
            let c = (e, t) => (e % t + t) % t;
            class d extends o.EventDispatcher {
                constructor(e, t) {
                    super(), u(this, "object"), u(this, "domElement"), u(this, "enabled", !0), u(this, "target", new o.Vector3), u(this, "minDistance", 0), u(this, "maxDistance", 1 / 0), u(this, "minZoom", 0), u(this, "maxZoom", 1 / 0), u(this, "minPolarAngle", 0), u(this, "maxPolarAngle", Math.PI), u(this, "minAzimuthAngle", -1 / 0), u(this, "maxAzimuthAngle", 1 / 0), u(this, "enableDamping", !1), u(this, "dampingFactor", .05), u(this, "enableZoom", !0), u(this, "zoomSpeed", 1), u(this, "enableRotate", !0), u(this, "rotateSpeed", 1), u(this, "enablePan", !0), u(this, "panSpeed", 1), u(this, "screenSpacePanning", !0), u(this, "keyPanSpeed", 7), u(this, "autoRotate", !1), u(this, "autoRotateSpeed", 2), u(this, "reverseOrbit", !1), u(this, "keys", {
                        LEFT: "ArrowLeft",
                        UP: "ArrowUp",
                        RIGHT: "ArrowRight",
                        BOTTOM: "ArrowDown"
                    }), u(this, "mouseButtons", {
                        LEFT: o.MOUSE.ROTATE,
                        MIDDLE: o.MOUSE.DOLLY,
                        RIGHT: o.MOUSE.PAN
                    }), u(this, "touches", {
                        ONE: o.TOUCH.ROTATE,
                        TWO: o.TOUCH.DOLLY_PAN
                    }), u(this, "target0"), u(this, "position0"), u(this, "zoom0"), u(this, "_domElementKeyEvents", null), u(this, "getPolarAngle"), u(this, "getAzimuthalAngle"), u(this, "setPolarAngle"), u(this, "setAzimuthalAngle"), u(this, "getDistance"), u(this, "listenToKeyEvents"), u(this, "saveState"), u(this, "reset"), u(this, "update"), u(this, "connect"), u(this, "dispose"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => f.phi, this.getAzimuthalAngle = () => f.theta, this.setPolarAngle = e => {
                        let t = c(e, 2 * Math.PI),
                            r = f.phi;
                        r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let i = Math.abs(t - r);
                        2 * Math.PI - i < i && (t < r ? t += 2 * Math.PI : r += 2 * Math.PI), h.phi = t - r, n.update()
                    }, this.setAzimuthalAngle = e => {
                        let t = c(e, 2 * Math.PI),
                            r = f.theta;
                        r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let i = Math.abs(t - r);
                        2 * Math.PI - i < i && (t < r ? t += 2 * Math.PI : r += 2 * Math.PI), h.theta = t - r, n.update()
                    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = e => {
                        e.addEventListener("keydown", W), this._domElementKeyEvents = e
                    }, this.saveState = () => {
                        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
                    }, this.reset = () => {
                        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(r), n.update(), s = l.NONE
                    }, this.update = (() => {
                        let t = new o.Vector3,
                            i = new o.Quaternion().setFromUnitVectors(e.up, new o.Vector3(0, 1, 0)),
                            a = i.clone().invert(),
                            u = new o.Vector3,
                            c = new o.Quaternion,
                            g = 2 * Math.PI;
                        return function() {
                            let e = n.object.position;
                            t.copy(e).sub(n.target), t.applyQuaternion(i), f.setFromVector3(t), n.autoRotate && s === l.NONE && w(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (f.theta += h.theta * n.dampingFactor, f.phi += h.phi * n.dampingFactor) : (f.theta += h.theta, f.phi += h.phi);
                            let o = n.minAzimuthAngle,
                                B = n.maxAzimuthAngle;
                            return isFinite(o) && isFinite(B) && (o < -Math.PI ? o += g : o > Math.PI && (o -= g), B < -Math.PI ? B += g : B > Math.PI && (B -= g), o <= B ? f.theta = Math.max(o, Math.min(B, f.theta)) : f.theta = f.theta > (o + B) / 2 ? Math.max(o, f.theta) : Math.min(B, f.theta)), f.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, f.phi)), f.makeSafe(), f.radius *= p, f.radius = Math.max(n.minDistance, Math.min(n.maxDistance, f.radius)), !0 === n.enableDamping ? n.target.addScaledVector(m, n.dampingFactor) : n.target.add(m), t.setFromSpherical(f), t.applyQuaternion(a), e.copy(n.target).add(t), n.object.lookAt(n.target), !0 === n.enableDamping ? (h.theta *= 1 - n.dampingFactor, h.phi *= 1 - n.dampingFactor, m.multiplyScalar(1 - n.dampingFactor)) : (h.set(0, 0, 0), m.set(0, 0, 0)), p = 1, !!(A || u.distanceToSquared(n.object.position) > d || 8 * (1 - c.dot(n.object.quaternion)) > d) && (n.dispatchEvent(r), u.copy(n.object.position), c.copy(n.object.quaternion), A = !1, !0)
                        }
                    })(), this.connect = e => {
                        e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), n.domElement = e, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", Z), n.domElement.addEventListener("pointerdown", Q), n.domElement.addEventListener("pointercancel", X), n.domElement.addEventListener("wheel", Y)
                    }, this.dispose = () => {
                        var e, t, r, i, a, o;
                        null == (e = n.domElement) || e.removeEventListener("contextmenu", Z), null == (t = n.domElement) || t.removeEventListener("pointerdown", Q), null == (r = n.domElement) || r.removeEventListener("pointercancel", X), null == (i = n.domElement) || i.removeEventListener("wheel", Y), null == (a = n.domElement) || a.ownerDocument.removeEventListener("pointermove", j), null == (o = n.domElement) || o.ownerDocument.removeEventListener("pointerup", z), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", W)
                    };
                    let n = this,
                        r = {
                            type: "change"
                        },
                        i = {
                            type: "start"
                        },
                        a = {
                            type: "end"
                        },
                        l = {
                            NONE: -1,
                            ROTATE: 0,
                            DOLLY: 1,
                            PAN: 2,
                            TOUCH_ROTATE: 3,
                            TOUCH_PAN: 4,
                            TOUCH_DOLLY_PAN: 5,
                            TOUCH_DOLLY_ROTATE: 6
                        },
                        s = l.NONE,
                        d = 1e-6,
                        f = new o.Spherical,
                        h = new o.Spherical,
                        p = 1,
                        m = new o.Vector3,
                        A = !1,
                        g = new o.Vector2,
                        B = new o.Vector2,
                        C = new o.Vector2,
                        v = new o.Vector2,
                        b = new o.Vector2,
                        y = new o.Vector2,
                        E = new o.Vector2,
                        M = new o.Vector2,
                        S = new o.Vector2,
                        F = [],
                        I = {};

                    function R() {
                        return Math.pow(.95, n.zoomSpeed)
                    }

                    function w(e) {
                        n.reverseOrbit ? h.theta += e : h.theta -= e
                    }

                    function T(e) {
                        n.reverseOrbit ? h.phi += e : h.phi -= e
                    }
                    let D = (() => {
                            let e = new o.Vector3;
                            return function(t, n) {
                                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), m.add(e)
                            }
                        })(),
                        x = (() => {
                            let e = new o.Vector3;
                            return function(t, r) {
                                !0 === n.screenSpacePanning ? e.setFromMatrixColumn(r, 1) : (e.setFromMatrixColumn(r, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), m.add(e)
                            }
                        })(),
                        G = (() => {
                            let e = new o.Vector3;
                            return function(t, r) {
                                let i = n.domElement;
                                if (i && n.object instanceof o.PerspectiveCamera && n.object.isPerspectiveCamera) {
                                    let a = n.object.position;
                                    e.copy(a).sub(n.target);
                                    let o = e.length();
                                    D(2 * t * (o *= Math.tan(n.object.fov / 2 * Math.PI / 180)) / i.clientHeight, n.object.matrix), x(2 * r * o / i.clientHeight, n.object.matrix)
                                } else i && n.object instanceof o.OrthographicCamera && n.object.isOrthographicCamera ? (D(t * (n.object.right - n.object.left) / n.object.zoom / i.clientWidth, n.object.matrix), x(r * (n.object.top - n.object.bottom) / n.object.zoom / i.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
                            }
                        })();

                    function P(e) {
                        n.object instanceof o.PerspectiveCamera && n.object.isPerspectiveCamera ? p /= e : n.object instanceof o.OrthographicCamera && n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)), n.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
                    }

                    function H(e) {
                        n.object instanceof o.PerspectiveCamera && n.object.isPerspectiveCamera ? p *= e : n.object instanceof o.OrthographicCamera && n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)), n.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
                    }

                    function L(e) {
                        g.set(e.clientX, e.clientY)
                    }

                    function O(e) {
                        v.set(e.clientX, e.clientY)
                    }

                    function k() {
                        if (1 == F.length) g.set(F[0].pageX, F[0].pageY);
                        else {
                            let e = .5 * (F[0].pageX + F[1].pageX),
                                t = .5 * (F[0].pageY + F[1].pageY);
                            g.set(e, t)
                        }
                    }

                    function _() {
                        if (1 == F.length) v.set(F[0].pageX, F[0].pageY);
                        else {
                            let e = .5 * (F[0].pageX + F[1].pageX),
                                t = .5 * (F[0].pageY + F[1].pageY);
                            v.set(e, t)
                        }
                    }

                    function J() {
                        let e = F[0].pageX - F[1].pageX,
                            t = F[0].pageY - F[1].pageY;
                        E.set(0, Math.sqrt(e * e + t * t))
                    }

                    function N(e) {
                        if (1 == F.length) B.set(e.pageX, e.pageY);
                        else {
                            let t = $(e),
                                n = .5 * (e.pageX + t.x),
                                r = .5 * (e.pageY + t.y);
                            B.set(n, r)
                        }
                        C.subVectors(B, g).multiplyScalar(n.rotateSpeed);
                        let t = n.domElement;
                        t && (w(2 * Math.PI * C.x / t.clientHeight), T(2 * Math.PI * C.y / t.clientHeight)), g.copy(B)
                    }

                    function U(e) {
                        if (1 == F.length) b.set(e.pageX, e.pageY);
                        else {
                            let t = $(e),
                                n = .5 * (e.pageX + t.x),
                                r = .5 * (e.pageY + t.y);
                            b.set(n, r)
                        }
                        y.subVectors(b, v).multiplyScalar(n.panSpeed), G(y.x, y.y), v.copy(b)
                    }

                    function K(e) {
                        let t = $(e),
                            r = e.pageX - t.x,
                            i = e.pageY - t.y;
                        M.set(0, Math.sqrt(r * r + i * i)), S.set(0, Math.pow(M.y / E.y, n.zoomSpeed)), P(S.y), E.copy(M)
                    }

                    function Q(e) {
                        var t, r;
                        !1 !== n.enabled && (0 === F.length && (null == (t = n.domElement) || t.ownerDocument.addEventListener("pointermove", j), null == (r = n.domElement) || r.ownerDocument.addEventListener("pointerup", z)), F.push(e), "touch" === e.pointerType ? function(e) {
                            switch (q(e), F.length) {
                                case 1:
                                    switch (n.touches.ONE) {
                                        case o.TOUCH.ROTATE:
                                            if (!1 === n.enableRotate) return;
                                            k(), s = l.TOUCH_ROTATE;
                                            break;
                                        case o.TOUCH.PAN:
                                            if (!1 === n.enablePan) return;
                                            _(), s = l.TOUCH_PAN;
                                            break;
                                        default:
                                            s = l.NONE
                                    }
                                    break;
                                case 2:
                                    switch (n.touches.TWO) {
                                        case o.TOUCH.DOLLY_PAN:
                                            if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                            n.enableZoom && J(), n.enablePan && _(), s = l.TOUCH_DOLLY_PAN;
                                            break;
                                        case o.TOUCH.DOLLY_ROTATE:
                                            if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                            n.enableZoom && J(), n.enableRotate && k(), s = l.TOUCH_DOLLY_ROTATE;
                                            break;
                                        default:
                                            s = l.NONE
                                    }
                                    break;
                                default:
                                    s = l.NONE
                            }
                            s !== l.NONE && n.dispatchEvent(i)
                        }(e) : function(e) {
                            let t;
                            switch (e.button) {
                                case 0:
                                    t = n.mouseButtons.LEFT;
                                    break;
                                case 1:
                                    t = n.mouseButtons.MIDDLE;
                                    break;
                                case 2:
                                    t = n.mouseButtons.RIGHT;
                                    break;
                                default:
                                    t = -1
                            }
                            switch (t) {
                                case o.MOUSE.DOLLY:
                                    if (!1 === n.enableZoom) return;
                                    E.set(e.clientX, e.clientY), s = l.DOLLY;
                                    break;
                                case o.MOUSE.ROTATE:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enablePan) return;
                                        O(e), s = l.PAN
                                    } else {
                                        if (!1 === n.enableRotate) return;
                                        L(e), s = l.ROTATE
                                    }
                                    break;
                                case o.MOUSE.PAN:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enableRotate) return;
                                        L(e), s = l.ROTATE
                                    } else {
                                        if (!1 === n.enablePan) return;
                                        O(e), s = l.PAN
                                    }
                                    break;
                                default:
                                    s = l.NONE
                            }
                            s !== l.NONE && n.dispatchEvent(i)
                        }(e))
                    }

                    function j(e) {
                        !1 !== n.enabled && ("touch" === e.pointerType ? function(e) {
                            switch (q(e), s) {
                                case l.TOUCH_ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    N(e), n.update();
                                    break;
                                case l.TOUCH_PAN:
                                    if (!1 === n.enablePan) return;
                                    U(e), n.update();
                                    break;
                                case l.TOUCH_DOLLY_PAN:
                                    if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                    n.enableZoom && K(e), n.enablePan && U(e), n.update();
                                    break;
                                case l.TOUCH_DOLLY_ROTATE:
                                    if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                    n.enableZoom && K(e), n.enableRotate && N(e), n.update();
                                    break;
                                default:
                                    s = l.NONE
                            }
                        }(e) : function(e) {
                            if (!1 !== n.enabled) switch (s) {
                                case l.ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    ! function(e) {
                                        B.set(e.clientX, e.clientY), C.subVectors(B, g).multiplyScalar(n.rotateSpeed);
                                        let t = n.domElement;
                                        t && (w(2 * Math.PI * C.x / t.clientHeight), T(2 * Math.PI * C.y / t.clientHeight)), g.copy(B), n.update()
                                    }(e);
                                    break;
                                case l.DOLLY:
                                    if (!1 === n.enableZoom) return;
                                    M.set(e.clientX, e.clientY), S.subVectors(M, E), S.y > 0 ? P(R()) : S.y < 0 && H(R()), E.copy(M), n.update();
                                    break;
                                case l.PAN:
                                    if (!1 === n.enablePan) return;
                                    b.set(e.clientX, e.clientY), y.subVectors(b, v).multiplyScalar(n.panSpeed), G(y.x, y.y), v.copy(b), n.update()
                            }
                        }(e))
                    }

                    function z(e) {
                        var t, r, i;
                        V(e), 0 === F.length && (null == (t = n.domElement) || t.releasePointerCapture(e.pointerId), null == (r = n.domElement) || r.ownerDocument.removeEventListener("pointermove", j), null == (i = n.domElement) || i.ownerDocument.removeEventListener("pointerup", z)), n.dispatchEvent(a), s = l.NONE
                    }

                    function X(e) {
                        V(e)
                    }

                    function Y(e) {
                        !1 !== n.enabled && !1 !== n.enableZoom && (s === l.NONE || s === l.ROTATE) && (e.preventDefault(), n.dispatchEvent(i), e.deltaY < 0 ? H(R()) : e.deltaY > 0 && P(R()), n.update(), n.dispatchEvent(a))
                    }

                    function W(e) {
                        !1 !== n.enabled && !1 !== n.enablePan && function(e) {
                            let t = !1;
                            switch (e.code) {
                                case n.keys.UP:
                                    G(0, n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.BOTTOM:
                                    G(0, -n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.LEFT:
                                    G(n.keyPanSpeed, 0), t = !0;
                                    break;
                                case n.keys.RIGHT:
                                    G(-n.keyPanSpeed, 0), t = !0
                            }
                            t && (e.preventDefault(), n.update())
                        }(e)
                    }

                    function Z(e) {
                        !1 !== n.enabled && e.preventDefault()
                    }

                    function V(e) {
                        delete I[e.pointerId];
                        for (let t = 0; t < F.length; t++)
                            if (F[t].pointerId == e.pointerId) {
                                F.splice(t, 1);
                                return
                            }
                    }

                    function q(e) {
                        let t = I[e.pointerId];
                        void 0 === t && (t = new o.Vector2, I[e.pointerId] = t), t.set(e.pageX, e.pageY)
                    }

                    function $(e) {
                        let t = e.pointerId === F[0].pointerId ? F[1] : F[0];
                        return I[t.pointerId]
                    }
                    void 0 !== t && this.connect(t), this.update()
                }
            }
            let f = a.forwardRef(({
                makeDefault: e,
                camera: t,
                regress: n,
                domElement: o,
                enableDamping: l = !0,
                keyEvents: s = !1,
                onChange: u,
                onStart: c,
                onEnd: f,
                ...h
            }, p) => {
                let m = (0, i.z)(e => e.invalidate),
                    A = (0, i.z)(e => e.camera),
                    g = (0, i.z)(e => e.gl),
                    B = (0, i.z)(e => e.events),
                    C = (0, i.z)(e => e.setEvents),
                    v = (0, i.z)(e => e.set),
                    b = (0, i.z)(e => e.get),
                    y = (0, i.z)(e => e.performance),
                    E = t || A,
                    M = o || B.connected || g.domElement,
                    S = a.useMemo(() => new d(E), [E]);
                return (0, i.A)(() => {
                    S.enabled && S.update()
                }, -1), a.useEffect(() => (s && S.connect(!0 === s ? M : s), S.connect(M), () => void S.dispose()), [s, M, n, S, m]), a.useEffect(() => {
                    let e = e => {
                            m(), n && y.regress(), u && u(e)
                        },
                        t = e => {
                            c && c(e)
                        },
                        r = e => {
                            f && f(e)
                        };
                    return S.addEventListener("change", e), S.addEventListener("start", t), S.addEventListener("end", r), () => {
                        S.removeEventListener("start", t), S.removeEventListener("end", r), S.removeEventListener("change", e)
                    }
                }, [u, c, f, S, m, C]), a.useEffect(() => {
                    if (e) {
                        let e = b().controls;
                        return v({
                            controls: S
                        }), () => v({
                            controls: e
                        })
                    }
                }, [e, S]), a.createElement("primitive", (0, r.Z)({
                    ref: p,
                    object: S,
                    enableDamping: l
                }, h))
            })
        },
        1558: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return o
                }
            });
            var r = n(7804),
                i = n(6006),
                a = n(949);

            function o({
                all: e,
                scene: t,
                camera: n
            }) {
                let o = (0, a.z)(({
                        gl: e
                    }) => e),
                    l = (0, a.z)(({
                        camera: e
                    }) => e),
                    s = (0, a.z)(({
                        scene: e
                    }) => e);
                return i.useLayoutEffect(() => {
                    let i = [];
                    e && (t || s).traverse(e => {
                        !1 === e.visible && (i.push(e), e.visible = !0)
                    }), o.compile(t || s, n || l);
                    let a = new r.WebGLCubeRenderTarget(128),
                        u = new r.CubeCamera(.01, 1e5, a);
                    u.update(o, t || s), a.dispose(), i.forEach(e => e.visible = !1)
                }, []), null
            }
        },
        4454: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                L: function() {
                    return er
                }
            });
            var i = n(7804);
            let a = new WeakMap;
            class o extends i.Loader {
                constructor(e) {
                    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                        position: "POSITION",
                        normal: "NORMAL",
                        color: "COLOR",
                        uv: "TEX_COORD"
                    }, this.defaultAttributeTypes = {
                        position: "Float32Array",
                        normal: "Float32Array",
                        color: "Float32Array",
                        uv: "Float32Array"
                    }
                }
                setDecoderPath(e) {
                    return this.decoderPath = e, this
                }
                setDecoderConfig(e) {
                    return this.decoderConfig = e, this
                }
                setWorkerLimit(e) {
                    return this.workerLimit = e, this
                }
                load(e, t, n, r) {
                    let a = new i.FileLoader(this.manager);
                    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, e => {
                        let n = {
                            attributeIDs: this.defaultAttributeIDs,
                            attributeTypes: this.defaultAttributeTypes,
                            useUniqueIDs: !1
                        };
                        this.decodeGeometry(e, n).then(t).catch(r)
                    }, n, r)
                }
                decodeDracoFile(e, t, n, r) {
                    let i = {
                        attributeIDs: n || this.defaultAttributeIDs,
                        attributeTypes: r || this.defaultAttributeTypes,
                        useUniqueIDs: !!n
                    };
                    this.decodeGeometry(e, i).then(t)
                }
                decodeGeometry(e, t) {
                    let n;
                    for (let e in t.attributeTypes) {
                        let n = t.attributeTypes[e];
                        void 0 !== n.BYTES_PER_ELEMENT && (t.attributeTypes[e] = n.name)
                    }
                    let r = JSON.stringify(t);
                    if (a.has(e)) {
                        let t = a.get(e);
                        if (t.key === r) return t.promise;
                        if (0 === e.byteLength) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                    }
                    let i = this.workerNextTaskID++,
                        o = e.byteLength,
                        l = this._getWorker(i, o).then(r => (n = r, new Promise((r, a) => {
                            n._callbacks[i] = {
                                resolve: r,
                                reject: a
                            }, n.postMessage({
                                type: "decode",
                                id: i,
                                taskConfig: t,
                                buffer: e
                            }, [e])
                        }))).then(e => this._createGeometry(e.geometry));
                    return l.catch(() => !0).then(() => {
                        n && i && this._releaseTask(n, i)
                    }), a.set(e, {
                        key: r,
                        promise: l
                    }), l
                }
                _createGeometry(e) {
                    let t = new i.BufferGeometry;
                    e.index && t.setIndex(new i.BufferAttribute(e.index.array, 1));
                    for (let n = 0; n < e.attributes.length; n++) {
                        let r = e.attributes[n],
                            a = r.name,
                            o = r.array,
                            l = r.itemSize;
                        t.setAttribute(a, new i.BufferAttribute(o, l))
                    }
                    return t
                }
                _loadLibrary(e, t) {
                    let n = new i.FileLoader(this.manager);
                    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((t, r) => {
                        n.load(e, t, void 0, r)
                    })
                }
                preload() {
                    return this._initDecoder(), this
                }
                _initDecoder() {
                    if (this.decoderPending) return this.decoderPending;
                    let e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
                        t = [];
                    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(t => {
                        let n = t[0];
                        e || (this.decoderConfig.wasmBinary = t[1]);
                        let r = l.toString(),
                            i = ["/* draco decoder */", n, "", "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
                        this.workerSourceURL = URL.createObjectURL(new Blob([i]))
                    }), this.decoderPending
                }
                _getWorker(e, t) {
                    return this._initDecoder().then(() => {
                        if (this.workerPool.length < this.workerLimit) {
                            let e = new Worker(this.workerSourceURL);
                            e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                                type: "init",
                                decoderConfig: this.decoderConfig
                            }), e.onmessage = function(t) {
                                let n = t.data;
                                switch (n.type) {
                                    case "decode":
                                        e._callbacks[n.id].resolve(n);
                                        break;
                                    case "error":
                                        e._callbacks[n.id].reject(n);
                                        break;
                                    default:
                                        console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"')
                                }
                            }, this.workerPool.push(e)
                        } else this.workerPool.sort(function(e, t) {
                            return e._taskLoad > t._taskLoad ? -1 : 1
                        });
                        let n = this.workerPool[this.workerPool.length - 1];
                        return n._taskCosts[e] = t, n._taskLoad += t, n
                    })
                }
                _releaseTask(e, t) {
                    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                }
                debug() {
                    console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
                }
                dispose() {
                    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
                    return this.workerPool.length = 0, this
                }
            }

            function l() {
                let e, t;
                onmessage = function(n) {
                    let r = n.data;
                    switch (r.type) {
                        case "init":
                            e = r.decoderConfig, t = new Promise(function(t) {
                                e.onModuleLoaded = function(e) {
                                    t({
                                        draco: e
                                    })
                                }, DracoDecoderModule(e)
                            });
                            break;
                        case "decode":
                            let i = r.buffer,
                                a = r.taskConfig;
                            t.then(e => {
                                let t = e.draco,
                                    n = new t.Decoder,
                                    o = new t.DecoderBuffer;
                                o.Init(new Int8Array(i), i.byteLength);
                                try {
                                    let e = function(e, t, n, r) {
                                            let i, a;
                                            let o = r.attributeIDs,
                                                l = r.attributeTypes,
                                                s = t.GetEncodedGeometryType(n);
                                            if (s === e.TRIANGULAR_MESH) i = new e.Mesh, a = t.DecodeBufferToMesh(n, i);
                                            else if (s === e.POINT_CLOUD) i = new e.PointCloud, a = t.DecodeBufferToPointCloud(n, i);
                                            else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
                                            if (!a.ok() || 0 === i.ptr) throw Error("THREE.DRACOLoader: Decoding failed: " + a.error_msg());
                                            let u = {
                                                index: null,
                                                attributes: []
                                            };
                                            for (let n in o) {
                                                let a, s;
                                                let c = self[l[n]];
                                                if (r.useUniqueIDs) s = o[n], a = t.GetAttributeByUniqueId(i, s);
                                                else {
                                                    if (-1 === (s = t.GetAttributeId(i, e[o[n]]))) continue;
                                                    a = t.GetAttribute(i, s)
                                                }
                                                u.attributes.push(function(e, t, n, r, i, a) {
                                                    let o = a.num_components(),
                                                        l = n.num_points(),
                                                        s = l * o,
                                                        u = s * i.BYTES_PER_ELEMENT,
                                                        c = function(e, t) {
                                                            switch (t) {
                                                                case Float32Array:
                                                                    return e.DT_FLOAT32;
                                                                case Int8Array:
                                                                    return e.DT_INT8;
                                                                case Int16Array:
                                                                    return e.DT_INT16;
                                                                case Int32Array:
                                                                    return e.DT_INT32;
                                                                case Uint8Array:
                                                                    return e.DT_UINT8;
                                                                case Uint16Array:
                                                                    return e.DT_UINT16;
                                                                case Uint32Array:
                                                                    return e.DT_UINT32
                                                            }
                                                        }(e, i),
                                                        d = e._malloc(u);
                                                    t.GetAttributeDataArrayForAllPoints(n, a, c, u, d);
                                                    let f = new i(e.HEAPF32.buffer, d, s).slice();
                                                    return e._free(d), {
                                                        name: r,
                                                        array: f,
                                                        itemSize: o
                                                    }
                                                }(e, t, i, n, c, a))
                                            }
                                            return s === e.TRIANGULAR_MESH && (u.index = function(e, t, n) {
                                                let r = n.num_faces(),
                                                    i = 3 * r,
                                                    a = 4 * i,
                                                    o = e._malloc(a);
                                                t.GetTrianglesUInt32Array(n, a, o);
                                                let l = new Uint32Array(e.HEAPF32.buffer, o, i).slice();
                                                return e._free(o), {
                                                    array: l,
                                                    itemSize: 1
                                                }
                                            }(e, t, i)), e.destroy(i), u
                                        }(t, n, o, a),
                                        i = e.attributes.map(e => e.array.buffer);
                                    e.index && i.push(e.index.array.buffer), self.postMessage({
                                        type: "decode",
                                        id: r.id,
                                        geometry: e
                                    }, i)
                                } catch (e) {
                                    console.error(e), self.postMessage({
                                        type: "error",
                                        id: r.id,
                                        error: e.message
                                    })
                                } finally {
                                    t.destroy(o), t.destroy(n)
                                }
                            })
                    }
                }
            }
            let s = () => {
                let e;
                if (r) return r;
                let t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]),
                    n = new Uint8Array([32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74, 156, 154, 70, 167]);
                if ("object" != typeof WebAssembly) return {
                    supported: !1
                };
                let i = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
                WebAssembly.validate(t) && (i = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB");
                let a = WebAssembly.instantiate(function(e) {
                    let t = new Uint8Array(e.length);
                    for (let n = 0; n < e.length; ++n) {
                        let r = e.charCodeAt(n);
                        t[n] = r > 96 ? r - 71 : r > 64 ? r - 65 : r > 47 ? r + 4 : r > 46 ? 63 : 62
                    }
                    let r = 0;
                    for (let i = 0; i < e.length; ++i) t[r++] = t[i] < 60 ? n[t[i]] : (t[i] - 60) * 64 + t[++i];
                    return t.buffer.slice(0, r)
                }(i), {}).then(t => {
                    (e = t.instance).exports.__wasm_call_ctors()
                });

                function o(t, n, r, i, a, o) {
                    let l = e.exports.sbrk,
                        s = r + 3 & -4,
                        u = l(s * i),
                        c = l(a.length),
                        d = new Uint8Array(e.exports.memory.buffer);
                    d.set(a, c);
                    let f = t(u, r, i, c, a.length);
                    if (0 === f && o && o(u, s, i), n.set(d.subarray(u, u + r * i)), l(u - l(0)), 0 !== f) throw Error(`Malformed buffer data: ${f}`)
                }
                let l = {
                        0: "",
                        1: "meshopt_decodeFilterOct",
                        2: "meshopt_decodeFilterQuat",
                        3: "meshopt_decodeFilterExp",
                        NONE: "",
                        OCTAHEDRAL: "meshopt_decodeFilterOct",
                        QUATERNION: "meshopt_decodeFilterQuat",
                        EXPONENTIAL: "meshopt_decodeFilterExp"
                    },
                    s = {
                        0: "meshopt_decodeVertexBuffer",
                        1: "meshopt_decodeIndexBuffer",
                        2: "meshopt_decodeIndexSequence",
                        ATTRIBUTES: "meshopt_decodeVertexBuffer",
                        TRIANGLES: "meshopt_decodeIndexBuffer",
                        INDICES: "meshopt_decodeIndexSequence"
                    };
                return r = {
                    ready: a,
                    supported: !0,
                    decodeVertexBuffer(t, n, r, i, a) {
                        o(e.exports.meshopt_decodeVertexBuffer, t, n, r, i, e.exports[l[a]])
                    },
                    decodeIndexBuffer(t, n, r, i) {
                        o(e.exports.meshopt_decodeIndexBuffer, t, n, r, i)
                    },
                    decodeIndexSequence(t, n, r, i) {
                        o(e.exports.meshopt_decodeIndexSequence, t, n, r, i)
                    },
                    decodeGltfBuffer(t, n, r, i, a, u) {
                        o(e.exports[s[a]], t, n, r, i, e.exports[l[u]])
                    }
                }
            };

            function u(e, t) {
                if (t === i.TrianglesDrawMode) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                if (t !== i.TriangleFanDrawMode && t !== i.TriangleStripDrawMode) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e; {
                    let n = e.getIndex();
                    if (null === n) {
                        let t = [],
                            r = e.getAttribute("position");
                        if (void 0 === r) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (let e = 0; e < r.count; e++) t.push(e);
                        e.setIndex(t), n = e.getIndex()
                    }
                    let r = n.count - 2,
                        a = [];
                    if (n) {
                        if (t === i.TriangleFanDrawMode)
                            for (let e = 1; e <= r; e++) a.push(n.getX(0)), a.push(n.getX(e)), a.push(n.getX(e + 1));
                        else
                            for (let e = 0; e < r; e++) e % 2 == 0 ? (a.push(n.getX(e)), a.push(n.getX(e + 1)), a.push(n.getX(e + 2))) : (a.push(n.getX(e + 2)), a.push(n.getX(e + 1)), a.push(n.getX(e)))
                    }
                    a.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    let o = e.clone();
                    return o.setIndex(a), o.clearGroups(), o
                }
            }
            class c extends i.Loader {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new A(e)
                    }), this.register(function(e) {
                        return new M(e)
                    }), this.register(function(e) {
                        return new S(e)
                    }), this.register(function(e) {
                        return new F(e)
                    }), this.register(function(e) {
                        return new B(e)
                    }), this.register(function(e) {
                        return new C(e)
                    }), this.register(function(e) {
                        return new v(e)
                    }), this.register(function(e) {
                        return new b(e)
                    }), this.register(function(e) {
                        return new m(e)
                    }), this.register(function(e) {
                        return new y(e)
                    }), this.register(function(e) {
                        return new g(e)
                    }), this.register(function(e) {
                        return new E(e)
                    }), this.register(function(e) {
                        return new h(e)
                    }), this.register(function(e) {
                        return new I(e)
                    }), this.register(function(e) {
                        return new R(e)
                    })
                }
                load(e, t, n, r) {
                    let a;
                    let o = this;
                    a = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : i.LoaderUtils.extractUrlBase(e), this.manager.itemStart(e);
                    let l = function(t) {
                            r ? r(t) : console.error(t), o.manager.itemError(e), o.manager.itemEnd(e)
                        },
                        s = new i.FileLoader(this.manager);
                    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
                        try {
                            o.parse(n, a, function(n) {
                                t(n), o.manager.itemEnd(e)
                            }, l)
                        } catch (e) {
                            l(e)
                        }
                    }, n, l)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, n, r) {
                    let a;
                    let o = {},
                        l = {};
                    if ("string" == typeof e) a = JSON.parse(e);
                    else if (e instanceof ArrayBuffer) {
                        let t = i.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4)));
                        if (t === w) {
                            try {
                                o[f.KHR_BINARY_GLTF] = new D(e)
                            } catch (e) {
                                r && r(e);
                                return
                            }
                            a = JSON.parse(o[f.KHR_BINARY_GLTF].content)
                        } else a = JSON.parse(i.LoaderUtils.decodeText(new Uint8Array(e)))
                    } else a = e;
                    if (void 0 === a.asset || a.asset.version[0] < 2) {
                        r && r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let s = new q(a, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    s.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        let t = this.pluginCallbacks[e](s);
                        l[t.name] = t, o[t.name] = !0
                    }
                    if (a.extensionsUsed)
                        for (let e = 0; e < a.extensionsUsed.length; ++e) {
                            let t = a.extensionsUsed[e],
                                n = a.extensionsRequired || [];
                            switch (t) {
                                case f.KHR_MATERIALS_UNLIT:
                                    o[t] = new p;
                                    break;
                                case f.KHR_DRACO_MESH_COMPRESSION:
                                    o[t] = new x(a, this.dracoLoader);
                                    break;
                                case f.KHR_TEXTURE_TRANSFORM:
                                    o[t] = new G;
                                    break;
                                case f.KHR_MESH_QUANTIZATION:
                                    o[t] = new P;
                                    break;
                                default:
                                    n.indexOf(t) >= 0 && void 0 === l[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    s.setExtensions(o), s.setPlugins(l), s.parse(n, r)
                }
                parseAsync(e, t) {
                    let n = this;
                    return new Promise(function(r, i) {
                        n.parse(e, t, r, i)
                    })
                }
            }

            function d() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, n) {
                        e[t] = n
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let f = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_TEXTURE_AVIF: "EXT_texture_avif",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
                EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
            };
            class h {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let n = 0, r = t.length; n < r; n++) {
                        let r = t[n];
                        r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && e._addNodeRef(this.cache, r.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let n = this.parser,
                        r = "light:" + e,
                        a = n.cache.get(r);
                    if (a) return a;
                    let o = n.json,
                        l = o.extensions && o.extensions[this.name] || {},
                        s = l.lights || [],
                        u = s[e],
                        c = new i.Color(16777215);
                    void 0 !== u.color && c.fromArray(u.color);
                    let d = void 0 !== u.range ? u.range : 0;
                    switch (u.type) {
                        case "directional":
                            (t = new i.DirectionalLight(c)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new i.PointLight(c)).distance = d;
                            break;
                        case "spot":
                            (t = new i.SpotLight(c)).distance = d, u.spot = u.spot || {}, u.spot.innerConeAngle = void 0 !== u.spot.innerConeAngle ? u.spot.innerConeAngle : 0, u.spot.outerConeAngle = void 0 !== u.spot.outerConeAngle ? u.spot.outerConeAngle : Math.PI / 4, t.angle = u.spot.outerConeAngle, t.penumbra = 1 - u.spot.innerConeAngle / u.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + u.type)
                    }
                    return t.position.set(0, 0, 0), t.decay = 2, Y(t, u), void 0 !== u.intensity && (t.intensity = u.intensity), t.name = n.createUniqueName(u.name || "light_" + e), a = Promise.resolve(t), n.cache.add(r, a), a
                }
                getDependency(e, t) {
                    if ("light" === e) return this._loadLight(t)
                }
                createNodeAttachment(e) {
                    let t = this,
                        n = this.parser,
                        r = n.json,
                        i = r.nodes[e],
                        a = i.extensions && i.extensions[this.name] || {},
                        o = a.light;
                    return void 0 === o ? null : this._loadLight(o).then(function(e) {
                        return n._getNodeRef(t.cache, o, e)
                    })
                }
            }
            class p {
                constructor() {
                    this.name = f.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return i.MeshBasicMaterial
                }
                extendParams(e, t, n) {
                    let r = [];
                    e.color = new i.Color(1, 1, 1), e.opacity = 1;
                    let a = t.pbrMetallicRoughness;
                    if (a) {
                        if (Array.isArray(a.baseColorFactor)) {
                            let t = a.baseColorFactor;
                            e.color.fromArray(t), e.opacity = t[3]
                        }
                        void 0 !== a.baseColorTexture && r.push(n.assignTexture(e, "map", a.baseColorTexture, 3001))
                    }
                    return Promise.all(r)
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = r.extensions[this.name].emissiveStrength;
                    return void 0 !== i && (t.emissiveIntensity = i), Promise.resolve()
                }
            }
            class A {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        o = r.extensions[this.name];
                    if (void 0 !== o.clearcoatFactor && (t.clearcoat = o.clearcoatFactor), void 0 !== o.clearcoatTexture && a.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), void 0 !== o.clearcoatRoughnessFactor && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), void 0 !== o.clearcoatRoughnessTexture && a.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), void 0 !== o.clearcoatNormalTexture && (a.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), void 0 !== o.clearcoatNormalTexture.scale)) {
                        let e = o.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new i.Vector2(e, e)
                    }
                    return Promise.all(a)
                }
            }
            class g {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = r.extensions[this.name];
                    return void 0 !== a.iridescenceFactor && (t.iridescence = a.iridescenceFactor), void 0 !== a.iridescenceTexture && i.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), void 0 !== a.iridescenceIor && (t.iridescenceIOR = a.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== a.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), void 0 !== a.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), void 0 !== a.iridescenceThicknessTexture && i.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(i)
                }
            }
            class B {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [];
                    t.sheenColor = new i.Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    let o = r.extensions[this.name];
                    return void 0 !== o.sheenColorFactor && t.sheenColor.fromArray(o.sheenColorFactor), void 0 !== o.sheenRoughnessFactor && (t.sheenRoughness = o.sheenRoughnessFactor), void 0 !== o.sheenColorTexture && a.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, 3001)), void 0 !== o.sheenRoughnessTexture && a.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(a)
                }
            }
            class C {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = r.extensions[this.name];
                    return void 0 !== a.transmissionFactor && (t.transmission = a.transmissionFactor), void 0 !== a.transmissionTexture && i.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(i)
                }
            }
            class v {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        o = r.extensions[this.name];
                    t.thickness = void 0 !== o.thicknessFactor ? o.thicknessFactor : 0, void 0 !== o.thicknessTexture && a.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
                    let l = o.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = new i.Color(l[0], l[1], l[2]), Promise.all(a)
                }
            }
            class b {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = r.extensions[this.name];
                    return t.ior = void 0 !== i.ior ? i.ior : 1.5, Promise.resolve()
                }
            }
            class y {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        o = r.extensions[this.name];
                    t.specularIntensity = void 0 !== o.specularFactor ? o.specularFactor : 1, void 0 !== o.specularTexture && a.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
                    let l = o.specularColorFactor || [1, 1, 1];
                    return t.specularColor = new i.Color(l[0], l[1], l[2]), void 0 !== o.specularColorTexture && a.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, 3001)), Promise.all(a)
                }
            }
            class E {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_MATERIALS_ANISOTROPY
                }
                getMaterialType(e) {
                    let t = this.parser,
                        n = t.json.materials[e];
                    return n.extensions && n.extensions[this.name] ? i.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = r.extensions[this.name];
                    return void 0 !== a.anisotropyStrength && (t.anisotropy = a.anisotropyStrength), void 0 !== a.anisotropyRotation && (t.anisotropyRotation = a.anisotropyRotation), void 0 !== a.anisotropyTexture && i.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(i)
                }
            }
            class M {
                constructor(e) {
                    this.parser = e, this.name = f.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        n = t.json,
                        r = n.textures[e];
                    if (!r.extensions || !r.extensions[this.name]) return null;
                    let i = r.extensions[this.name],
                        a = t.options.ktx2Loader;
                    if (!a) {
                        if (!(n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, i.source, a)
                }
            }
            class S {
                constructor(e) {
                    this.parser = e, this.name = f.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        n = this.parser,
                        r = n.json,
                        i = r.textures[e];
                    if (!i.extensions || !i.extensions[t]) return null;
                    let a = i.extensions[t],
                        o = r.images[a.source],
                        l = n.textureLoader;
                    if (o.uri) {
                        let e = n.options.manager.getHandler(o.uri);
                        null !== e && (l = e)
                    }
                    return this.detectSupport().then(function(i) {
                        if (i) return n.loadTextureImage(e, a.source, l);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return n.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class F {
                constructor(e) {
                    this.parser = e, this.name = f.EXT_TEXTURE_AVIF, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        n = this.parser,
                        r = n.json,
                        i = r.textures[e];
                    if (!i.extensions || !i.extensions[t]) return null;
                    let a = i.extensions[t],
                        o = r.images[a.source],
                        l = n.textureLoader;
                    if (o.uri) {
                        let e = n.options.manager.getHandler(o.uri);
                        null !== e && (l = e)
                    }
                    return this.detectSupport().then(function(i) {
                        if (i) return n.loadTextureImage(e, a.source, l);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                        return n.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class I {
                constructor(e) {
                    this.name = f.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        n = t.bufferViews[e];
                    if (!n.extensions || !n.extensions[this.name]) return null; {
                        let e = n.extensions[this.name],
                            r = this.parser.getDependency("buffer", e.buffer),
                            i = this.parser.options.meshoptDecoder;
                        if (!i || !i.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return r.then(function(t) {
                            let n = e.byteOffset || 0,
                                r = e.byteLength || 0,
                                a = e.count,
                                o = e.byteStride,
                                l = new Uint8Array(t, n, r);
                            return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, l, e.mode, e.filter).then(function(e) {
                                return e.buffer
                            }) : i.ready.then(function() {
                                let t = new ArrayBuffer(a * o);
                                return i.decodeGltfBuffer(new Uint8Array(t), a, o, l, e.mode, e.filter), t
                            })
                        })
                    }
                }
            }
            class R {
                constructor(e) {
                    this.name = f.EXT_MESH_GPU_INSTANCING, this.parser = e
                }
                createNodeMesh(e) {
                    let t = this.parser.json,
                        n = t.nodes[e];
                    if (!n.extensions || !n.extensions[this.name] || void 0 === n.mesh) return null;
                    let r = t.meshes[n.mesh];
                    for (let e of r.primitives)
                        if (e.mode !== k.TRIANGLES && e.mode !== k.TRIANGLE_STRIP && e.mode !== k.TRIANGLE_FAN && void 0 !== e.mode) return null;
                    let a = n.extensions[this.name],
                        o = a.attributes,
                        l = [],
                        s = {};
                    for (let e in o) l.push(this.parser.getDependency("accessor", o[e]).then(t => (s[e] = t, s[e])));
                    return l.length < 1 ? null : (l.push(this.parser.createNodeMesh(e)), Promise.all(l).then(e => {
                        let t = e.pop(),
                            n = t.isGroup ? t.children : [t],
                            r = e[0].count,
                            a = [];
                        for (let e of n) {
                            let t = new i.Matrix4,
                                n = new i.Vector3,
                                o = new i.Quaternion,
                                l = new i.Vector3(1, 1, 1),
                                u = new i.InstancedMesh(e.geometry, e.material, r);
                            for (let e = 0; e < r; e++) s.TRANSLATION && n.fromBufferAttribute(s.TRANSLATION, e), s.ROTATION && o.fromBufferAttribute(s.ROTATION, e), s.SCALE && l.fromBufferAttribute(s.SCALE, e), u.setMatrixAt(e, t.compose(n, o, l));
                            for (let t in s) "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, s[t]);
                            i.Object3D.prototype.copy.call(u, e), this.parser.assignFinalMaterial(u), a.push(u)
                        }
                        return t.isGroup ? (t.clear(), t.add(...a), t) : a[0]
                    }))
                }
            }
            let w = "glTF",
                T = {
                    JSON: 1313821514,
                    BIN: 5130562
                };
            class D {
                constructor(e) {
                    this.name = f.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12);
                    if (this.header = {
                            magic: i.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== w) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let n = this.header.length - 12,
                        r = new DataView(e, 12),
                        a = 0;
                    for (; a < n;) {
                        let t = r.getUint32(a, !0);
                        a += 4;
                        let n = r.getUint32(a, !0);
                        if (a += 4, n === T.JSON) {
                            let n = new Uint8Array(e, 12 + a, t);
                            this.content = i.LoaderUtils.decodeText(n)
                        } else if (n === T.BIN) {
                            let n = 12 + a;
                            this.body = e.slice(n, n + t)
                        }
                        a += t
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class x {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = f.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let n = this.json,
                        r = this.dracoLoader,
                        i = e.extensions[this.name].bufferView,
                        a = e.extensions[this.name].attributes,
                        o = {},
                        l = {},
                        s = {};
                    for (let e in a) {
                        let t = K[e] || e.toLowerCase();
                        o[t] = a[e]
                    }
                    for (let t in e.attributes) {
                        let r = K[t] || t.toLowerCase();
                        if (void 0 !== a[t]) {
                            let i = n.accessors[e.attributes[t]],
                                a = _[i.componentType];
                            s[r] = a.name, l[r] = !0 === i.normalized
                        }
                    }
                    return t.getDependency("bufferView", i).then(function(e) {
                        return new Promise(function(t) {
                            r.decodeDracoFile(e, function(e) {
                                for (let t in e.attributes) {
                                    let n = e.attributes[t],
                                        r = l[t];
                                    void 0 !== r && (n.normalized = r)
                                }
                                t(e)
                            }, o, s)
                        })
                    })
                }
            }
            class G {
                constructor() {
                    this.name = f.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return (void 0 === t.texCoord || t.texCoord === e.channel) && void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class P {
                constructor() {
                    this.name = f.KHR_MESH_QUANTIZATION
                }
            }
            class H extends i.Interpolant {
                constructor(e, t, n, r) {
                    super(e, t, n, r)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        n = this.sampleValues,
                        r = this.valueSize,
                        i = e * r * 3 + r;
                    for (let e = 0; e !== r; e++) t[e] = n[i + e];
                    return t
                }
                interpolate_(e, t, n, r) {
                    let i = this.resultBuffer,
                        a = this.sampleValues,
                        o = this.valueSize,
                        l = 2 * o,
                        s = 3 * o,
                        u = r - t,
                        c = (n - t) / u,
                        d = c * c,
                        f = d * c,
                        h = e * s,
                        p = h - s,
                        m = -2 * f + 3 * d,
                        A = f - d,
                        g = 1 - m,
                        B = A - d + c;
                    for (let e = 0; e !== o; e++) {
                        let t = a[p + e + o],
                            n = a[p + e + l] * u,
                            r = a[h + e + o],
                            s = a[h + e] * u;
                        i[e] = g * t + B * n + m * r + A * s
                    }
                    return i
                }
            }
            let L = new i.Quaternion;
            class O extends H {
                interpolate_(e, t, n, r) {
                    let i = super.interpolate_(e, t, n, r);
                    return L.fromArray(i).normalize().toArray(i), i
                }
            }
            let k = {
                    FLOAT: 5126,
                    FLOAT_MAT3: 35675,
                    FLOAT_MAT4: 35676,
                    FLOAT_VEC2: 35664,
                    FLOAT_VEC3: 35665,
                    FLOAT_VEC4: 35666,
                    LINEAR: 9729,
                    REPEAT: 10497,
                    SAMPLER_2D: 35678,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    UNSIGNED_BYTE: 5121,
                    UNSIGNED_SHORT: 5123
                },
                _ = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                J = {
                    9728: i.NearestFilter,
                    9729: i.LinearFilter,
                    9984: i.NearestMipmapNearestFilter,
                    9985: i.LinearMipmapNearestFilter,
                    9986: i.NearestMipmapLinearFilter,
                    9987: i.LinearMipmapLinearFilter
                },
                N = {
                    33071: i.ClampToEdgeWrapping,
                    33648: i.MirroredRepeatWrapping,
                    10497: i.RepeatWrapping
                },
                U = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                K = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    ...i.REVISION.replace(/\D+/g, "") >= 152 ? {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv1",
                        TEXCOORD_2: "uv2",
                        TEXCOORD_3: "uv3"
                    } : {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv2"
                    },
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                Q = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                j = {
                    CUBICSPLINE: void 0,
                    LINEAR: i.InterpolateLinear,
                    STEP: i.InterpolateDiscrete
                },
                z = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function X(e, t, n) {
                for (let r in n.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r])
            }

            function Y(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function W(e) {
                let t = "",
                    n = Object.keys(e).sort();
                for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
                return t
            }

            function Z(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            let V = new i.Matrix4;
            class q {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new d, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let n = !1,
                        r = !1,
                        a = -1;
                    "undefined" != typeof navigator && void 0 !== navigator.userAgent && (n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), a = (r = navigator.userAgent.indexOf("Firefox") > -1) ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), "undefined" == typeof createImageBitmap || n || r && a < 98 ? this.textureLoader = new i.TextureLoader(this.options.manager) : this.textureLoader = new i.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new i.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let n = this,
                        r = this.json,
                        i = this.extensions;
                    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
                    }).then(function(t) {
                        let a = {
                            scene: t[0][r.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: r.asset,
                            parser: n,
                            userData: {}
                        };
                        X(i, a, r), Y(a, r), Promise.all(n._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(a)
                        })).then(function() {
                            e(a)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        n = this.json.meshes || [];
                    for (let n = 0, r = t.length; n < r; n++) {
                        let r = t[n].joints;
                        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0
                    }
                    for (let t = 0, r = e.length; t < r; t++) {
                        let r = e[t];
                        void 0 !== r.mesh && (this._addNodeRef(this.meshCache, r.mesh), void 0 !== r.skin && (n[r.mesh].isSkinnedMesh = !0)), void 0 !== r.camera && this._addNodeRef(this.cameraCache, r.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, n) {
                    if (e.refs[t] <= 1) return n;
                    let r = n.clone(),
                        i = (e, t) => {
                            let n = this.associations.get(e);
                            for (let [r, a] of (null != n && this.associations.set(t, n), e.children.entries())) i(a, t.children[r])
                        };
                    return i(n, r), r.name += "_instance_" + e.uses[t]++, r
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let n = 0; n < t.length; n++) {
                        let r = e(t[n]);
                        if (r) return r
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let n = [];
                    for (let r = 0; r < t.length; r++) {
                        let i = e(t[r]);
                        i && n.push(i)
                    }
                    return n
                }
                getDependency(e, t) {
                    let n = e + ":" + t,
                        r = this.cache.get(n);
                    if (!r) {
                        switch (e) {
                            case "scene":
                                r = this.loadScene(t);
                                break;
                            case "node":
                                r = this._invokeOne(function(e) {
                                    return e.loadNode && e.loadNode(t)
                                });
                                break;
                            case "mesh":
                                r = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                r = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                r = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                r = this.loadBuffer(t);
                                break;
                            case "material":
                                r = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                r = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                r = this.loadSkin(t);
                                break;
                            case "animation":
                                r = this._invokeOne(function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                });
                                break;
                            case "camera":
                                r = this.loadCamera(t);
                                break;
                            default:
                                if (!(r = this._invokeOne(function(n) {
                                        return n != this && n.getDependency && n.getDependency(e, t)
                                    }))) throw Error("Unknown type: " + e)
                        }
                        this.cache.add(n, r)
                    }
                    return r
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let n = this,
                            r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(r.map(function(t, r) {
                            return n.getDependency(e, r)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        n = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[f.KHR_BINARY_GLTF].body);
                    let r = this.options;
                    return new Promise(function(e, a) {
                        n.load(i.LoaderUtils.resolveURL(t.uri, r.path), e, void 0, function() {
                            a(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let n = t.byteLength || 0,
                            r = t.byteOffset || 0;
                        return e.slice(r, r + n)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        n = this.json,
                        r = this.json.accessors[e];
                    if (void 0 === r.bufferView && void 0 === r.sparse) {
                        let e = U[r.type],
                            t = _[r.componentType],
                            n = !0 === r.normalized,
                            a = new t(r.count * e);
                        return Promise.resolve(new i.BufferAttribute(a, e, n))
                    }
                    let a = [];
                    return void 0 !== r.bufferView ? a.push(this.getDependency("bufferView", r.bufferView)) : a.push(null), void 0 !== r.sparse && (a.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), a.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(a).then(function(e) {
                        let a, o;
                        let l = e[0],
                            s = U[r.type],
                            u = _[r.componentType],
                            c = u.BYTES_PER_ELEMENT,
                            d = c * s,
                            f = r.byteOffset || 0,
                            h = void 0 !== r.bufferView ? n.bufferViews[r.bufferView].byteStride : void 0,
                            p = !0 === r.normalized;
                        if (h && h !== d) {
                            let e = Math.floor(f / h),
                                n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count,
                                d = t.cache.get(n);
                            d || (a = new u(l, e * h, r.count * h / c), d = new i.InterleavedBuffer(a, h / c), t.cache.add(n, d)), o = new i.InterleavedBufferAttribute(d, s, f % h / c, p)
                        } else a = null === l ? new u(r.count * s) : new u(l, f, r.count * s), o = new i.BufferAttribute(a, s, p);
                        if (void 0 !== r.sparse) {
                            let t = U.SCALAR,
                                n = _[r.sparse.indices.componentType],
                                a = r.sparse.indices.byteOffset || 0,
                                c = r.sparse.values.byteOffset || 0,
                                d = new n(e[1], a, r.sparse.count * t),
                                f = new u(e[2], c, r.sparse.count * s);
                            null !== l && (o = new i.BufferAttribute(o.array.slice(), o.itemSize, o.normalized));
                            for (let e = 0, t = d.length; e < t; e++) {
                                let t = d[e];
                                if (o.setX(t, f[e * s]), s >= 2 && o.setY(t, f[e * s + 1]), s >= 3 && o.setZ(t, f[e * s + 2]), s >= 4 && o.setW(t, f[e * s + 3]), s >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return o
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        n = this.options,
                        r = t.textures[e],
                        i = r.source,
                        a = t.images[i],
                        o = this.textureLoader;
                    if (a.uri) {
                        let e = n.manager.getHandler(a.uri);
                        null !== e && (o = e)
                    }
                    return this.loadTextureImage(e, i, o)
                }
                loadTextureImage(e, t, n) {
                    let r = this,
                        a = this.json,
                        o = a.textures[e],
                        l = a.images[t],
                        s = (l.uri || l.bufferView) + ":" + o.sampler;
                    if (this.textureCache[s]) return this.textureCache[s];
                    let u = this.loadImageSource(t, n).then(function(t) {
                        t.flipY = !1, t.name = o.name || l.name || "", "" === t.name && "string" == typeof l.uri && !1 === l.uri.startsWith("data:image/") && (t.name = l.uri);
                        let n = (a.samplers || {})[o.sampler] || {};
                        return t.magFilter = J[n.magFilter] || i.LinearFilter, t.minFilter = J[n.minFilter] || i.LinearMipmapLinearFilter, t.wrapS = N[n.wrapS] || i.RepeatWrapping, t.wrapT = N[n.wrapT] || i.RepeatWrapping, r.associations.set(t, {
                            textures: e
                        }), t
                    }).catch(function() {
                        return null
                    });
                    return this.textureCache[s] = u, u
                }
                loadImageSource(e, t) {
                    let n = this.json,
                        r = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then(e => e.clone());
                    let a = n.images[e],
                        o = self.URL || self.webkitURL,
                        l = a.uri || "",
                        s = !1;
                    if (void 0 !== a.bufferView) l = this.getDependency("bufferView", a.bufferView).then(function(e) {
                        s = !0;
                        let t = new Blob([e], {
                            type: a.mimeType
                        });
                        return l = o.createObjectURL(t)
                    });
                    else if (void 0 === a.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let u = Promise.resolve(l).then(function(e) {
                        return new Promise(function(n, a) {
                            let o = n;
                            !0 === t.isImageBitmapLoader && (o = function(e) {
                                let t = new i.Texture(e);
                                t.needsUpdate = !0, n(t)
                            }), t.load(i.LoaderUtils.resolveURL(e, r.path), o, void 0, a)
                        })
                    }).then(function(e) {
                        var t;
                        return !0 === s && o.revokeObjectURL(l), e.userData.mimeType = a.mimeType || ((t = a.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                    }).catch(function(e) {
                        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), e
                    });
                    return this.sourceCache[e] = u, u
                }
                assignTexture(e, t, n, r) {
                    let i = this;
                    return this.getDependency("texture", n.index).then(function(a) {
                        if (!a) return null;
                        if (void 0 !== n.texCoord && n.texCoord > 0 && ((a = a.clone()).channel = n.texCoord), i.extensions[f.KHR_TEXTURE_TRANSFORM]) {
                            let e = void 0 !== n.extensions ? n.extensions[f.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                let t = i.associations.get(a);
                                a = i.extensions[f.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t)
                            }
                        }
                        return void 0 !== r && ("colorSpace" in a ? a.colorSpace = 3001 === r ? "srgb" : "srgb-linear" : a.encoding = r), e[t] = a, a
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        n = e.material,
                        r = void 0 === t.attributes.tangent,
                        a = void 0 !== t.attributes.color,
                        o = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let e = "PointsMaterial:" + n.uuid,
                            t = this.cache.get(e);
                        t || (t = new i.PointsMaterial, i.Material.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t
                    } else if (e.isLine) {
                        let e = "LineBasicMaterial:" + n.uuid,
                            t = this.cache.get(e);
                        t || (t = new i.LineBasicMaterial, i.Material.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t
                    }
                    if (r || a || o) {
                        let e = "ClonedMaterial:" + n.uuid + ":";
                        r && (e += "derivative-tangents:"), a && (e += "vertex-colors:"), o && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = n.clone(), a && (t.vertexColors = !0), o && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t
                    }
                    e.material = n
                }
                getMaterialType() {
                    return i.MeshStandardMaterial
                }
                loadMaterial(e) {
                    let t;
                    let n = this,
                        r = this.json,
                        a = this.extensions,
                        o = r.materials[e],
                        l = {},
                        s = [];
                    if ((o.extensions || {})[f.KHR_MATERIALS_UNLIT]) {
                        let e = a[f.KHR_MATERIALS_UNLIT];
                        t = e.getMaterialType(), s.push(e.extendParams(l, o, n))
                    } else {
                        let r = o.pbrMetallicRoughness || {};
                        if (l.color = new i.Color(1, 1, 1), l.opacity = 1, Array.isArray(r.baseColorFactor)) {
                            let e = r.baseColorFactor;
                            l.color.fromArray(e), l.opacity = e[3]
                        }
                        void 0 !== r.baseColorTexture && s.push(n.assignTexture(l, "map", r.baseColorTexture, 3001)), l.metalness = void 0 !== r.metallicFactor ? r.metallicFactor : 1, l.roughness = void 0 !== r.roughnessFactor ? r.roughnessFactor : 1, void 0 !== r.metallicRoughnessTexture && (s.push(n.assignTexture(l, "metalnessMap", r.metallicRoughnessTexture)), s.push(n.assignTexture(l, "roughnessMap", r.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), s.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, l)
                        })))
                    }!0 === o.doubleSided && (l.side = i.DoubleSide);
                    let u = o.alphaMode || z.OPAQUE;
                    if (u === z.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, u === z.MASK && (l.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && t !== i.MeshBasicMaterial && (s.push(n.assignTexture(l, "normalMap", o.normalTexture)), l.normalScale = new i.Vector2(1, 1), void 0 !== o.normalTexture.scale)) {
                        let e = o.normalTexture.scale;
                        l.normalScale.set(e, e)
                    }
                    return void 0 !== o.occlusionTexture && t !== i.MeshBasicMaterial && (s.push(n.assignTexture(l, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (l.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && t !== i.MeshBasicMaterial && (l.emissive = new i.Color().fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && t !== i.MeshBasicMaterial && s.push(n.assignTexture(l, "emissiveMap", o.emissiveTexture, 3001)), Promise.all(s).then(function() {
                        let r = new t(l);
                        return o.name && (r.name = o.name), Y(r, o), n.associations.set(r, {
                            materials: e
                        }), o.extensions && X(a, r, o), r
                    })
                }
                createUniqueName(e) {
                    let t = i.PropertyBinding.sanitizeNodeName(e || "");
                    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t)
                }
                loadGeometries(e) {
                    let t = this,
                        n = this.extensions,
                        r = this.primitiveCache,
                        a = [];
                    for (let o = 0, l = e.length; o < l; o++) {
                        let l = e[o],
                            s = function(e) {
                                let t;
                                let n = e.extensions && e.extensions[f.KHR_DRACO_MESH_COMPRESSION];
                                if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + W(n.attributes) : e.indices + ":" + W(e.attributes) + ":" + e.mode, void 0 !== e.targets)
                                    for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + W(e.targets[n]);
                                return t
                            }(l),
                            u = r[s];
                        if (u) a.push(u.promise);
                        else {
                            let e;
                            e = l.extensions && l.extensions[f.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return n[f.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
                                    return $(n, e, t)
                                })
                            }(l) : $(new i.BufferGeometry, l, t), r[s] = {
                                primitive: l,
                                promise: e
                            }, a.push(e)
                        }
                    }
                    return Promise.all(a)
                }
                loadMesh(e) {
                    let t = this,
                        n = this.json,
                        r = this.extensions,
                        a = n.meshes[e],
                        o = a.primitives,
                        l = [];
                    for (let e = 0, t = o.length; e < t; e++) {
                        var s;
                        let t = void 0 === o[e].material ? (void 0 === (s = this.cache).DefaultMaterial && (s.DefaultMaterial = new i.MeshStandardMaterial({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: i.FrontSide
                        })), s.DefaultMaterial) : this.getDependency("material", o[e].material);
                        l.push(t)
                    }
                    return l.push(t.loadGeometries(o)), Promise.all(l).then(function(n) {
                        let l = n.slice(0, n.length - 1),
                            s = n[n.length - 1],
                            c = [];
                        for (let n = 0, d = s.length; n < d; n++) {
                            let d;
                            let f = s[n],
                                h = o[n],
                                p = l[n];
                            if (h.mode === k.TRIANGLES || h.mode === k.TRIANGLE_STRIP || h.mode === k.TRIANGLE_FAN || void 0 === h.mode) !0 === (d = !0 === a.isSkinnedMesh ? new i.SkinnedMesh(f, p) : new i.Mesh(f, p)).isSkinnedMesh && d.normalizeSkinWeights(), h.mode === k.TRIANGLE_STRIP ? d.geometry = u(d.geometry, i.TriangleStripDrawMode) : h.mode === k.TRIANGLE_FAN && (d.geometry = u(d.geometry, i.TriangleFanDrawMode));
                            else if (h.mode === k.LINES) d = new i.LineSegments(f, p);
                            else if (h.mode === k.LINE_STRIP) d = new i.Line(f, p);
                            else if (h.mode === k.LINE_LOOP) d = new i.LineLoop(f, p);
                            else if (h.mode === k.POINTS) d = new i.Points(f, p);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + h.mode);
                            Object.keys(d.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let n = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === n.length) {
                                        e.morphTargetDictionary = {};
                                        for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(d, a), d.name = t.createUniqueName(a.name || "mesh_" + e), Y(d, a), h.extensions && X(r, d, h), t.assignFinalMaterial(d), c.push(d)
                        }
                        for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
                            meshes: e,
                            primitives: n
                        });
                        if (1 === c.length) return a.extensions && X(r, c[0], a), c[0];
                        let d = new i.Group;
                        a.extensions && X(r, d, a), t.associations.set(d, {
                            meshes: e
                        });
                        for (let e = 0, t = c.length; e < t; e++) d.add(c[e]);
                        return d
                    })
                }
                loadCamera(e) {
                    let t;
                    let n = this.json.cameras[e],
                        r = n[n.type];
                    if (!r) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === n.type ? t = new i.PerspectiveCamera(i.MathUtils.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : "orthographic" === n.type && (t = new i.OrthographicCamera(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Y(t, n), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        n = [];
                    for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
                    return void 0 !== t.inverseBindMatrices ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(e) {
                        let n = e.pop(),
                            r = [],
                            a = [];
                        for (let o = 0, l = e.length; o < l; o++) {
                            let l = e[o];
                            if (l) {
                                r.push(l);
                                let e = new i.Matrix4;
                                null !== n && e.fromArray(n.array, 16 * o), a.push(e)
                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[o])
                        }
                        return new i.Skeleton(r, a)
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        n = t.animations[e],
                        r = n.name ? n.name : "animation_" + e,
                        a = [],
                        o = [],
                        l = [],
                        s = [],
                        u = [];
                    for (let e = 0, t = n.channels.length; e < t; e++) {
                        let t = n.channels[e],
                            r = n.samplers[t.sampler],
                            i = t.target,
                            c = i.node,
                            d = void 0 !== n.parameters ? n.parameters[r.input] : r.input,
                            f = void 0 !== n.parameters ? n.parameters[r.output] : r.output;
                        void 0 !== i.node && (a.push(this.getDependency("node", c)), o.push(this.getDependency("accessor", d)), l.push(this.getDependency("accessor", f)), s.push(r), u.push(i))
                    }
                    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(s), Promise.all(u)]).then(function(e) {
                        let t = e[0],
                            n = e[1],
                            a = e[2],
                            o = e[3],
                            l = e[4],
                            s = [];
                        for (let e = 0, r = t.length; e < r; e++) {
                            let r;
                            let u = t[e],
                                c = n[e],
                                d = a[e],
                                f = o[e],
                                h = l[e];
                            if (void 0 === u) continue;
                            switch (u.updateMatrix(), Q[h.path]) {
                                case Q.weights:
                                    r = i.NumberKeyframeTrack;
                                    break;
                                case Q.rotation:
                                    r = i.QuaternionKeyframeTrack;
                                    break;
                                case Q.position:
                                case Q.scale:
                                default:
                                    r = i.VectorKeyframeTrack
                            }
                            let p = u.name ? u.name : u.uuid,
                                m = void 0 !== f.interpolation ? j[f.interpolation] : i.InterpolateLinear,
                                A = [];
                            Q[h.path] === Q.weights ? u.traverse(function(e) {
                                e.morphTargetInfluences && A.push(e.name ? e.name : e.uuid)
                            }) : A.push(p);
                            let g = d.array;
                            if (d.normalized) {
                                let e = Z(g.constructor),
                                    t = new Float32Array(g.length);
                                for (let n = 0, r = g.length; n < r; n++) t[n] = g[n] * e;
                                g = t
                            }
                            for (let e = 0, t = A.length; e < t; e++) {
                                let t = new r(A[e] + "." + Q[h.path], c.array, g, m);
                                "CUBICSPLINE" === f.interpolation && (t.createInterpolant = function(e) {
                                    let t = this instanceof i.QuaternionKeyframeTrack ? O : H;
                                    return new t(this.times, this.values, this.getValueSize() / 3, e)
                                }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), s.push(t)
                            }
                        }
                        return new i.AnimationClip(r, void 0, s)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        n = this,
                        r = t.nodes[e];
                    return void 0 === r.mesh ? null : n.getDependency("mesh", r.mesh).then(function(e) {
                        let t = n._getNodeRef(n.meshCache, r.mesh, e);
                        return void 0 !== r.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json,
                        n = t.nodes[e],
                        r = this._loadNodeShallow(e),
                        i = [],
                        a = n.children || [];
                    for (let e = 0, t = a.length; e < t; e++) i.push(this.getDependency("node", a[e]));
                    let o = void 0 === n.skin ? Promise.resolve(null) : this.getDependency("skin", n.skin);
                    return Promise.all([r, Promise.all(i), o]).then(function(e) {
                        let t = e[0],
                            n = e[1],
                            r = e[2];
                        null !== r && t.traverse(function(e) {
                            e.isSkinnedMesh && e.bind(r, V)
                        });
                        for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
                        return t
                    })
                }
                _loadNodeShallow(e) {
                    let t = this.json,
                        n = this.extensions,
                        r = this;
                    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
                    let a = t.nodes[e],
                        o = a.name ? r.createUniqueName(a.name) : "",
                        l = [],
                        s = r._invokeOne(function(t) {
                            return t.createNodeMesh && t.createNodeMesh(e)
                        });
                    return s && l.push(s), void 0 !== a.camera && l.push(r.getDependency("camera", a.camera).then(function(e) {
                        return r._getNodeRef(r.cameraCache, a.camera, e)
                    })), r._invokeAll(function(t) {
                        return t.createNodeAttachment && t.createNodeAttachment(e)
                    }).forEach(function(e) {
                        l.push(e)
                    }), this.nodeCache[e] = Promise.all(l).then(function(t) {
                        let l;
                        if ((l = !0 === a.isBone ? new i.Bone : t.length > 1 ? new i.Group : 1 === t.length ? t[0] : new i.Object3D) !== t[0])
                            for (let e = 0, n = t.length; e < n; e++) l.add(t[e]);
                        if (a.name && (l.userData.name = a.name, l.name = o), Y(l, a), a.extensions && X(n, l, a), void 0 !== a.matrix) {
                            let e = new i.Matrix4;
                            e.fromArray(a.matrix), l.applyMatrix4(e)
                        } else void 0 !== a.translation && l.position.fromArray(a.translation), void 0 !== a.rotation && l.quaternion.fromArray(a.rotation), void 0 !== a.scale && l.scale.fromArray(a.scale);
                        return r.associations.has(l) || r.associations.set(l, {}), r.associations.get(l).nodes = e, l
                    }), this.nodeCache[e]
                }
                loadScene(e) {
                    let t = this.extensions,
                        n = this.json.scenes[e],
                        r = this,
                        a = new i.Group;
                    n.name && (a.name = r.createUniqueName(n.name)), Y(a, n), n.extensions && X(t, a, n);
                    let o = n.nodes || [],
                        l = [];
                    for (let e = 0, t = o.length; e < t; e++) l.push(r.getDependency("node", o[e]));
                    return Promise.all(l).then(function(e) {
                        for (let t = 0, n = e.length; t < n; t++) a.add(e[t]);
                        return r.associations = (e => {
                            let t = new Map;
                            for (let [e, n] of r.associations)(e instanceof i.Material || e instanceof i.Texture) && t.set(e, n);
                            return e.traverse(e => {
                                let n = r.associations.get(e);
                                null != n && t.set(e, n)
                            }), t
                        })(a), a
                    })
                }
            }

            function $(e, t, n) {
                let r = t.attributes,
                    a = [];
                for (let t in r) {
                    let i = K[t] || t.toLowerCase();
                    i in e.attributes || a.push(function(t, r) {
                        return n.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(r, t)
                        })
                    }(r[t], i))
                }
                if (void 0 !== t.indices && !e.index) {
                    let r = n.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    a.push(r)
                }
                return Y(e, t), ! function(e, t, n) {
                    let r = t.attributes,
                        a = new i.Box3;
                    if (void 0 === r.POSITION) return; {
                        let e = n.json.accessors[r.POSITION],
                            t = e.min,
                            o = e.max;
                        if (void 0 !== t && void 0 !== o) {
                            if (a.set(new i.Vector3(t[0], t[1], t[2]), new i.Vector3(o[0], o[1], o[2])), e.normalized) {
                                let t = Z(_[e.componentType]);
                                a.min.multiplyScalar(t), a.max.multiplyScalar(t)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let o = t.targets;
                    if (void 0 !== o) {
                        let e = new i.Vector3,
                            t = new i.Vector3;
                        for (let r = 0, i = o.length; r < i; r++) {
                            let i = o[r];
                            if (void 0 !== i.POSITION) {
                                let r = n.json.accessors[i.POSITION],
                                    a = r.min,
                                    o = r.max;
                                if (void 0 !== a && void 0 !== o) {
                                    if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
                                        let e = Z(_[r.componentType]);
                                        t.multiplyScalar(e)
                                    }
                                    e.max(t)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        a.expandByVector(e)
                    }
                    e.boundingBox = a;
                    let l = new i.Sphere;
                    a.getCenter(l.center), l.radius = a.min.distanceTo(a.max) / 2, e.boundingSphere = l
                }(e, t, n), Promise.all(a).then(function() {
                    return void 0 !== t.targets ? function(e, t, n) {
                        let r = !1,
                            i = !1,
                            a = !1;
                        for (let e = 0, n = t.length; e < n; e++) {
                            let n = t[e];
                            if (void 0 !== n.POSITION && (r = !0), void 0 !== n.NORMAL && (i = !0), void 0 !== n.COLOR_0 && (a = !0), r && i && a) break
                        }
                        if (!r && !i && !a) return Promise.resolve(e);
                        let o = [],
                            l = [],
                            s = [];
                        for (let u = 0, c = t.length; u < c; u++) {
                            let c = t[u];
                            if (r) {
                                let t = void 0 !== c.POSITION ? n.getDependency("accessor", c.POSITION) : e.attributes.position;
                                o.push(t)
                            }
                            if (i) {
                                let t = void 0 !== c.NORMAL ? n.getDependency("accessor", c.NORMAL) : e.attributes.normal;
                                l.push(t)
                            }
                            if (a) {
                                let t = void 0 !== c.COLOR_0 ? n.getDependency("accessor", c.COLOR_0) : e.attributes.color;
                                s.push(t)
                            }
                        }
                        return Promise.all([Promise.all(o), Promise.all(l), Promise.all(s)]).then(function(t) {
                            let n = t[0],
                                o = t[1],
                                l = t[2];
                            return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = l), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, n) : e
                })
            }
            var ee = n(949);
            let et = null;

            function en(e, t, n) {
                return r => {
                    n && n(r), e && (et || (et = new o), et.setDecoderPath("string" == typeof e ? e : "https://www.gstatic.com/draco/versioned/decoders/1.5.5/"), r.setDRACOLoader(et)), t && r.setMeshoptDecoder("function" == typeof s ? s() : s)
                }
            }

            function er(e, t = !0, n = !0, r) {
                let i = (0, ee.D)(c, e, en(t, n, r));
                return i
            }
            er.preload = (e, t = !0, n = !0, r) => ee.D.preload(c, e, en(t, n, r)), er.clear = e => ee.D.clear(c, e)
        },
        3701: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var r = n(7804),
                i = n(8362);
            let a = 0,
                o = (0, i.Z)(e => (r.DefaultLoadingManager.onStart = (t, n, r) => {
                    e({
                        active: !0,
                        item: t,
                        loaded: n,
                        total: r,
                        progress: (n - a) / (r - a) * 100
                    })
                }, r.DefaultLoadingManager.onLoad = () => {
                    e({
                        active: !1
                    })
                }, r.DefaultLoadingManager.onError = t => e(e => ({
                    errors: [...e.errors, t]
                })), r.DefaultLoadingManager.onProgress = (t, n, r) => {
                    n === r && (a = r), e({
                        active: !0,
                        item: t,
                        loaded: n,
                        total: r,
                        progress: (n - a) / (r - a) * 100 || 100
                    })
                }, {
                    errors: [],
                    active: !1,
                    progress: 0,
                    item: "",
                    loaded: 0,
                    total: 0
                }))
        },
        5893: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return B
                }
            });
            var r, i, a = n(431),
                o = n(6006),
                l = n(3194),
                s = n(7804),
                u = n(949);
            let c = new s.Vector3,
                d = new s.Vector3,
                f = new s.Vector3;

            function h(e, t, n) {
                let r = c.setFromMatrixPosition(e.matrixWorld);
                r.project(t);
                let i = n.width / 2,
                    a = n.height / 2;
                return [r.x * i + i, -(r.y * a) + a]
            }
            let p = e => 1e-10 > Math.abs(e) ? 0 : e;

            function m(e, t, n = "") {
                let r = "matrix3d(";
                for (let n = 0; 16 !== n; n++) r += p(t[n] * e.elements[n]) + (15 !== n ? "," : ")");
                return n + r
            }
            let A = (r = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1], e => m(e, r)),
                g = (i = e => [1 / e, 1 / e, 1 / e, 1, -1 / e, -1 / e, -1 / e, -1, 1 / e, 1 / e, 1 / e, 1, 1, 1, 1, 1], (e, t) => m(e, i(t), "translate(-50%,-50%)")),
                B = o.forwardRef(({
                    children: e,
                    eps: t = .001,
                    style: n,
                    className: r,
                    prepend: i,
                    center: m,
                    fullscreen: B,
                    portal: C,
                    distanceFactor: v,
                    sprite: b = !1,
                    transform: y = !1,
                    occlude: E,
                    onOcclude: M,
                    castShadow: S,
                    receiveShadow: F,
                    material: I,
                    geometry: R,
                    zIndexRange: w = [16777271, 0],
                    calculatePosition: T = h,
                    as: D = "div",
                    wrapperClass: x,
                    pointerEvents: G = "auto",
                    ...P
                }, H) => {
                    let {
                        gl: L,
                        camera: O,
                        scene: k,
                        size: _,
                        raycaster: J,
                        events: N,
                        viewport: U
                    } = (0, u.z)(), [K] = o.useState(() => document.createElement(D)), Q = o.useRef(), j = o.useRef(null), z = o.useRef(0), X = o.useRef([0, 0]), Y = o.useRef(null), W = o.useRef(null), Z = (null == C ? void 0 : C.current) || N.connected || L.domElement.parentNode, V = o.useRef(null), q = o.useRef(!1), $ = o.useMemo(() => {
                        var e;
                        return E && "blending" !== E || Array.isArray(E) && E.length && (e = E[0]) && "object" == typeof e && "current" in e
                    }, [E]);
                    o.useLayoutEffect(() => {
                        let e = L.domElement;
                        E && "blending" === E ? (e.style.zIndex = `${Math.floor(w[0]/2)}`, e.style.position = "absolute", e.style.pointerEvents = "none") : (e.style.zIndex = null, e.style.position = null, e.style.pointerEvents = null)
                    }, [E]), o.useLayoutEffect(() => {
                        if (j.current) {
                            let e = Q.current = l.createRoot(K);
                            if (k.updateMatrixWorld(), y) K.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                            else {
                                let e = T(j.current, O, _);
                                K.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`
                            }
                            return Z && (i ? Z.prepend(K) : Z.appendChild(K)), () => {
                                Z && Z.removeChild(K), e.unmount()
                            }
                        }
                    }, [Z, y]), o.useLayoutEffect(() => {
                        x && (K.className = x)
                    }, [x]);
                    let ee = o.useMemo(() => y ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: _.width,
                            height: _.height,
                            transformStyle: "preserve-3d",
                            pointerEvents: "none"
                        } : {
                            position: "absolute",
                            transform: m ? "translate3d(-50%,-50%,0)" : "none",
                            ...B && {
                                top: -_.height / 2,
                                left: -_.width / 2,
                                width: _.width,
                                height: _.height
                            },
                            ...n
                        }, [n, m, B, _, y]),
                        et = o.useMemo(() => ({
                            position: "absolute",
                            pointerEvents: G
                        }), [G]);
                    o.useLayoutEffect(() => {
                        var t, i;
                        q.current = !1, y ? null == (t = Q.current) || t.render(o.createElement("div", {
                            ref: Y,
                            style: ee
                        }, o.createElement("div", {
                            ref: W,
                            style: et
                        }, o.createElement("div", {
                            ref: H,
                            className: r,
                            style: n,
                            children: e
                        })))) : null == (i = Q.current) || i.render(o.createElement("div", {
                            ref: H,
                            style: ee,
                            className: r,
                            children: e
                        }))
                    });
                    let en = o.useRef(!0);
                    (0, u.A)(e => {
                        if (j.current) {
                            O.updateMatrixWorld(), j.current.updateWorldMatrix(!0, !1);
                            let e = y ? X.current : T(j.current, O, _);
                            if (y || Math.abs(z.current - O.zoom) > t || Math.abs(X.current[0] - e[0]) > t || Math.abs(X.current[1] - e[1]) > t) {
                                let t = function(e, t) {
                                        let n = c.setFromMatrixPosition(e.matrixWorld),
                                            r = d.setFromMatrixPosition(t.matrixWorld),
                                            i = n.sub(r),
                                            a = t.getWorldDirection(f);
                                        return i.angleTo(a) > Math.PI / 2
                                    }(j.current, O),
                                    n = !1;
                                $ && (Array.isArray(E) ? n = E.map(e => e.current) : "blending" !== E && (n = [k]));
                                let r = en.current;
                                if (n) {
                                    let e = function(e, t, n, r) {
                                        let i = c.setFromMatrixPosition(e.matrixWorld),
                                            a = i.clone();
                                        a.project(t), n.setFromCamera(a, t);
                                        let o = n.intersectObjects(r, !0);
                                        if (o.length) {
                                            let e = o[0].distance,
                                                t = i.distanceTo(n.ray.origin);
                                            return t < e
                                        }
                                        return !0
                                    }(j.current, O, J, n);
                                    en.current = e && !t
                                } else en.current = !t;
                                r !== en.current && (M ? M(!en.current) : K.style.display = en.current ? "block" : "none");
                                let i = Math.floor(w[0] / 2),
                                    a = E ? $ ? [w[0], i] : [i - 1, 0] : w;
                                if (K.style.zIndex = `${function(e,t,n){if(t instanceof s.PerspectiveCamera||t instanceof s.OrthographicCamera){let r=c.setFromMatrixPosition(e.matrixWorld),i=d.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),l=n[1]-o*t.far;return Math.round(o*a+l)}}(j.current,O,a)}`, y) {
                                    let [e, t] = [_.width / 2, _.height / 2], n = O.projectionMatrix.elements[5] * t, {
                                        isOrthographicCamera: r,
                                        top: i,
                                        left: a,
                                        bottom: o,
                                        right: l
                                    } = O, s = A(O.matrixWorldInverse), u = r ? `scale(${n})translate(${p(-(l+a)/2)}px,${p((i+o)/2)}px)` : `translateZ(${n}px)`, c = j.current.matrixWorld;
                                    b && ((c = O.matrixWorldInverse.clone().transpose().copyPosition(c).scale(j.current.scale)).elements[3] = c.elements[7] = c.elements[11] = 0, c.elements[15] = 1), K.style.width = _.width + "px", K.style.height = _.height + "px", K.style.perspective = r ? "" : `${n}px`, Y.current && W.current && (Y.current.style.transform = `${u}${s}translate(${e}px,${t}px)`, W.current.style.transform = g(c, 1 / ((v || 10) / 400)))
                                } else {
                                    let t = void 0 === v ? 1 : function(e, t) {
                                        if (t instanceof s.OrthographicCamera) return t.zoom;
                                        if (!(t instanceof s.PerspectiveCamera)) return 1; {
                                            let n = c.setFromMatrixPosition(e.matrixWorld),
                                                r = d.setFromMatrixPosition(t.matrixWorld),
                                                i = t.fov * Math.PI / 180,
                                                a = n.distanceTo(r);
                                            return 1 / (2 * Math.tan(i / 2) * a)
                                        }
                                    }(j.current, O) * v;
                                    K.style.transform = `translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`
                                }
                                X.current = e, z.current = O.zoom
                            }
                        }
                        if (!$ && V.current && !q.current) {
                            if (y) {
                                if (Y.current) {
                                    let e = Y.current.children[0];
                                    if (null != e && e.clientWidth && null != e && e.clientHeight) {
                                        let {
                                            isOrthographicCamera: t
                                        } = O;
                                        if (t || R) P.scale && (Array.isArray(P.scale) ? P.scale instanceof s.Vector3 ? V.current.scale.copy(P.scale.clone().divideScalar(1)) : V.current.scale.set(1 / P.scale[0], 1 / P.scale[1], 1 / P.scale[2]) : V.current.scale.setScalar(1 / P.scale));
                                        else {
                                            let t = (v || 10) / 400,
                                                n = e.clientWidth * t,
                                                r = e.clientHeight * t;
                                            V.current.scale.set(n, r, 1)
                                        }
                                        q.current = !0
                                    }
                                }
                            } else {
                                let t = K.children[0];
                                if (null != t && t.clientWidth && null != t && t.clientHeight) {
                                    let e = 1 / U.factor,
                                        n = t.clientWidth * e,
                                        r = t.clientHeight * e;
                                    V.current.scale.set(n, r, 1), q.current = !0
                                }
                                V.current.lookAt(e.camera.position)
                            }
                        }
                    });
                    let er = o.useMemo(() => ({
                        vertexShader: y ? void 0 : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
                        fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
                    }), [y]);
                    return o.createElement("group", (0, a.Z)({}, P, {
                        ref: j
                    }), E && !$ && o.createElement("mesh", {
                        castShadow: S,
                        receiveShadow: F,
                        ref: V
                    }, R || o.createElement("planeGeometry", null), I || o.createElement("shaderMaterial", {
                        side: s.DoubleSide,
                        vertexShader: er.vertexShader,
                        fragmentShader: er.fragmentShader
                    })))
                })
        },
        949: function(e, t, n) {
            "use strict";
            let r, i, a;
            n.d(t, {
                A: function() {
                    return el
                },
                B: function() {
                    return T
                },
                D: function() {
                    return eu
                },
                E: function() {
                    return D
                },
                a: function() {
                    return R
                },
                b: function() {
                    return eg
                },
                c: function() {
                    return W
                },
                d: function() {
                    return eC
                },
                e: function() {
                    return E
                },
                i: function() {
                    return I
                },
                u: function() {
                    return w
                },
                z: function() {
                    return eo
                }
            });
            var o, l, s = n(7804),
                u = n(6006),
                c = n(4474),
                d = n(8362),
                f = n(4145),
                h = n.n(f),
                p = n(2820);
            let m = e => "object" == typeof e && "function" == typeof e.then,
                A = [];

            function g(e, t, n = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = e.length;
                if (t.length !== r) return !1;
                for (let i = 0; i < r; i++)
                    if (!n(e[i], t[i])) return !1;
                return !0
            }

            function B(e, t = null, n = !1, r = {}) {
                for (let i of (null === t && (t = [e]), A))
                    if (g(t, i.keys, i.equal)) {
                        if (n) return;
                        if (Object.prototype.hasOwnProperty.call(i, "error")) throw i.error;
                        if (Object.prototype.hasOwnProperty.call(i, "response")) return r.lifespan && r.lifespan > 0 && (i.timeout && clearTimeout(i.timeout), i.timeout = setTimeout(i.remove, r.lifespan)), i.response;
                        if (!n) throw i.promise
                    }
                let i = {
                    keys: t,
                    equal: r.equal,
                    remove: () => {
                        let e = A.indexOf(i); - 1 !== e && A.splice(e, 1)
                    },
                    promise: (m(e) ? e : e(...t)).then(e => {
                        i.response = e, r.lifespan && r.lifespan > 0 && (i.timeout = setTimeout(i.remove, r.lifespan))
                    }).catch(e => i.error = e)
                };
                if (A.push(i), !n) throw i.promise
            }
            let C = (e, t, n) => B(e, t, !1, n),
                v = (e, t, n) => void B(e, t, !0, n),
                b = e => {
                    if (void 0 === e || 0 === e.length) A.splice(0, A.length);
                    else {
                        let t = A.find(t => g(e, t.keys, t.equal));
                        t && t.remove()
                    }
                },
                y = {},
                E = e => void Object.assign(y, e),
                M = e => "colorSpace" in e || "outputColorSpace" in e,
                S = () => {
                    var e;
                    return null != (e = y.ColorManagement) ? e : null
                },
                F = e => e && e.isOrthographicCamera,
                I = e => e && e.hasOwnProperty("current"),
                R = "undefined" != typeof window && (null != (o = window.document) && o.createElement || (null == (l = window.navigator) ? void 0 : l.product) === "ReactNative") ? u.useLayoutEffect : u.useEffect;

            function w(e) {
                let t = u.useRef(e);
                return R(() => void(t.current = e), [e]), t
            }

            function T({
                set: e
            }) {
                return R(() => (e(new Promise(() => null)), () => e(!1)), [e]), null
            }
            class D extends u.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }
            D.getDerivedStateFromError = () => ({
                error: !0
            });
            let x = "__default",
                G = new Map,
                P = e => e && !!e.memoized && !!e.changes;

            function H(e) {
                var t;
                let n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
                return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
            }
            let L = e => {
                    var t;
                    return null == (t = e.__r3f) ? void 0 : t.root.getState()
                },
                O = {
                    obj: e => e === Object(e) && !O.arr(e) && "function" != typeof e,
                    fun: e => "function" == typeof e,
                    str: e => "string" == typeof e,
                    num: e => "number" == typeof e,
                    boo: e => "boolean" == typeof e,
                    und: e => void 0 === e,
                    arr: e => Array.isArray(e),
                    equ(e, t, {
                        arrays: n = "shallow",
                        objects: r = "reference",
                        strict: i = !0
                    } = {}) {
                        let a;
                        if (typeof e != typeof t || !!e != !!t) return !1;
                        if (O.str(e) || O.num(e)) return e === t;
                        let o = O.obj(e);
                        if (o && "reference" === r) return e === t;
                        let l = O.arr(e);
                        if (l && "reference" === n) return e === t;
                        if ((l || o) && e === t) return !0;
                        for (a in e)
                            if (!(a in t)) return !1;
                        if (o && "shallow" === n && "shallow" === r) {
                            for (a in i ? t : e)
                                if (!O.equ(e[a], t[a], {
                                        strict: i,
                                        objects: "reference"
                                    })) return !1
                        } else
                            for (a in i ? t : e)
                                if (e[a] !== t[a]) return !1;
                        if (O.und(a)) {
                            if (l && 0 === e.length && 0 === t.length || o && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                            if (e !== t) return !1
                        }
                        return !0
                    }
                };

            function k(e, t) {
                return e.__r3f = {
                    type: "",
                    root: null,
                    previousAttach: null,
                    memoizedProps: {},
                    eventCount: 0,
                    handlers: {},
                    objects: [],
                    parent: null,
                    ...t
                }, e
            }

            function _(e, t) {
                let n = e;
                if (!t.includes("-")) return {
                    target: n,
                    key: t
                }; {
                    let r = t.split("-"),
                        i = r.pop();
                    return {
                        target: n = r.reduce((e, t) => e[t], e),
                        key: i
                    }
                }
            }
            let J = /-\d+$/;

            function N(e, t, n) {
                if (O.str(n)) {
                    if (J.test(n)) {
                        let t = n.replace(J, ""),
                            {
                                target: r,
                                key: i
                            } = _(e, t);
                        Array.isArray(r[i]) || (r[i] = [])
                    }
                    let {
                        target: r,
                        key: i
                    } = _(e, n);
                    t.__r3f.previousAttach = r[i], r[i] = t
                } else t.__r3f.previousAttach = n(e, t)
            }

            function U(e, t, n) {
                var r, i;
                if (O.str(n)) {
                    let {
                        target: r,
                        key: i
                    } = _(e, n), a = t.__r3f.previousAttach;
                    void 0 === a ? delete r[i] : r[i] = a
                } else null == (r = t.__r3f) || null == r.previousAttach || r.previousAttach(e, t);
                null == (i = t.__r3f) || delete i.previousAttach
            }

            function K(e, {
                children: t,
                key: n,
                ref: r,
                ...i
            }, {
                children: a,
                key: o,
                ref: l,
                ...s
            } = {}, u = !1) {
                var c;
                let d = null != (c = null == e ? void 0 : e.__r3f) ? c : {},
                    f = Object.entries(i),
                    h = [];
                if (u) {
                    let e = Object.keys(s);
                    for (let t = 0; t < e.length; t++) i.hasOwnProperty(e[t]) || f.unshift([e[t], x + "remove"])
                }
                f.forEach(([t, n]) => {
                    var r;
                    if (null != (r = e.__r3f) && r.primitive && "object" === t || O.equ(n, s[t])) return;
                    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t)) return h.push([t, n, !0, []]);
                    let a = [];
                    for (let e in t.includes("-") && (a = t.split("-")), h.push([t, n, !1, a]), i) {
                        let n = i[e];
                        e.startsWith(`${t}-`) && h.push([e, n, !1, e.split("-")])
                    }
                });
                let p = { ...i
                };
                return d.memoizedProps && d.memoizedProps.args && (p.args = d.memoizedProps.args), d.memoizedProps && d.memoizedProps.attach && (p.attach = d.memoizedProps.attach), {
                    memoized: p,
                    changes: h
                }
            }

            function Q(e, t) {
                var n, r, i;
                let a = null != (n = e.__r3f) ? n : {},
                    o = a.root,
                    l = null != (r = null == o ? void 0 : null == o.getState ? void 0 : o.getState()) ? r : {},
                    {
                        memoized: u,
                        changes: c
                    } = P(t) ? t : K(e, t),
                    d = a.eventCount;
                e.__r3f && (e.__r3f.memoizedProps = u);
                for (let t = 0; t < c.length; t++) {
                    let [n, r, i, o] = c[t];
                    if (M(e)) {
                        let e = "srgb",
                            t = "srgb-linear";
                        "encoding" === n ? (n = "colorSpace", r = 3001 === r ? e : t) : "outputEncoding" === n && (n = "outputColorSpace", r = 3001 === r ? e : t)
                    }
                    let u = e,
                        d = u[n];
                    if (o.length && !((d = o.reduce((e, t) => e[t], e)) && d.set)) {
                        let [t, ...r] = o.reverse();
                        u = r.reverse().reduce((e, t) => e[t], e), n = t
                    }
                    if (r === x + "remove") {
                        if (u.constructor) {
                            let e = G.get(u.constructor);
                            e || (e = new u.constructor, G.set(u.constructor, e)), r = e[n]
                        } else r = 0
                    }
                    if (i) r ? a.handlers[n] = r : delete a.handlers[n], a.eventCount = Object.keys(a.handlers).length;
                    else if (d && d.set && (d.copy || d instanceof s.Layers)) {
                        if (Array.isArray(r)) d.fromArray ? d.fromArray(r) : d.set(...r);
                        else if (d.copy && r && r.constructor && d.constructor === r.constructor) d.copy(r);
                        else if (void 0 !== r) {
                            let e = d instanceof s.Color;
                            !e && d.setScalar ? d.setScalar(r) : d instanceof s.Layers && r instanceof s.Layers ? d.mask = r.mask : d.set(r), S() || l.linear || !e || d.convertSRGBToLinear()
                        }
                    } else if (u[n] = r, u[n] instanceof s.Texture && u[n].format === s.RGBAFormat && u[n].type === s.UnsignedByteType) {
                        let e = u[n];
                        M(e) && M(l.gl) ? e.colorSpace = l.gl.outputColorSpace : e.encoding = l.gl.outputEncoding
                    }
                    j(e)
                }
                if (a.parent && l.internal && e.raycast && d !== a.eventCount) {
                    let t = l.internal.interaction.indexOf(e);
                    t > -1 && l.internal.interaction.splice(t, 1), a.eventCount && l.internal.interaction.push(e)
                }
                let f = 1 === c.length && "onUpdate" === c[0][0];
                return !f && c.length && null != (i = e.__r3f) && i.parent && z(e), e
            }

            function j(e) {
                var t, n;
                let r = null == (t = e.__r3f) ? void 0 : null == (n = t.root) ? void 0 : null == n.getState ? void 0 : n.getState();
                r && 0 === r.internal.frames && r.invalidate()
            }

            function z(e) {
                null == e.onUpdate || e.onUpdate(e)
            }

            function X(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
            }

            function Y(e, t, n, r) {
                let i = n.get(t);
                i && (n.delete(t), 0 === n.size && (e.delete(r), i.target.releasePointerCapture(r)))
            }

            function W(e) {
                function t(e) {
                    return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
                        var n;
                        return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
                    }))
                }

                function n(t) {
                    let {
                        internal: n
                    } = e.getState();
                    for (let e of n.hovered.values())
                        if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                            let r = e.eventObject,
                                i = r.__r3f,
                                a = null == i ? void 0 : i.handlers;
                            if (n.hovered.delete(X(e)), null != i && i.eventCount) {
                                let n = { ...e,
                                    intersections: t
                                };
                                null == a.onPointerOut || a.onPointerOut(n), null == a.onPointerLeave || a.onPointerLeave(n)
                            }
                        }
                }

                function r(e, t) {
                    for (let n = 0; n < t.length; n++) {
                        let r = t[n].__r3f;
                        null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
                    }
                }
                return {
                    handlePointer: function(i) {
                        switch (i) {
                            case "onPointerLeave":
                            case "onPointerCancel":
                                return () => n([]);
                            case "onLostPointerCapture":
                                return t => {
                                    let {
                                        internal: r
                                    } = e.getState();
                                    "pointerId" in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
                                        r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId), n([]))
                                    })
                                }
                        }
                        return function(a) {
                            let {
                                onPointerMissed: o,
                                internal: l
                            } = e.getState();
                            l.lastEvent.current = a;
                            let u = "onPointerMove" === i,
                                c = "onClick" === i || "onContextMenu" === i || "onDoubleClick" === i,
                                d = function(t, n) {
                                    let r = e.getState(),
                                        i = new Set,
                                        a = [],
                                        o = n ? n(r.internal.interaction) : r.internal.interaction;
                                    for (let e = 0; e < o.length; e++) {
                                        let t = L(o[e]);
                                        t && (t.raycaster.camera = void 0)
                                    }
                                    r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                                    let l = o.flatMap(function(e) {
                                        let n = L(e);
                                        if (!n || !n.events.enabled || null === n.raycaster.camera) return [];
                                        if (void 0 === n.raycaster.camera) {
                                            var r;
                                            null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()), void 0 === n.raycaster.camera && (n.raycaster.camera = null)
                                        }
                                        return n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []
                                    }).sort((e, t) => {
                                        let n = L(e.object),
                                            r = L(t.object);
                                        return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                                    }).filter(e => {
                                        let t = X(e);
                                        return !i.has(t) && (i.add(t), !0)
                                    });
                                    for (let e of (r.events.filter && (l = r.events.filter(l, r)), l)) {
                                        let t = e.object;
                                        for (; t;) {
                                            var s;
                                            null != (s = t.__r3f) && s.eventCount && a.push({ ...e,
                                                eventObject: t
                                            }), t = t.parent
                                        }
                                    }
                                    if ("pointerId" in t && r.internal.capturedMap.has(t.pointerId))
                                        for (let e of r.internal.capturedMap.get(t.pointerId).values()) i.has(X(e.intersection)) || a.push(e.intersection);
                                    return a
                                }(a, u ? t : void 0),
                                f = c ? function(t) {
                                    let {
                                        internal: n
                                    } = e.getState(), r = t.offsetX - n.initialClick[0], i = t.offsetY - n.initialClick[1];
                                    return Math.round(Math.sqrt(r * r + i * i))
                                }(a) : 0;
                            "onPointerDown" === i && (l.initialClick = [a.offsetX, a.offsetY], l.initialHits = d.map(e => e.eventObject)), c && !d.length && f <= 2 && (r(a, l.interaction), o && o(a)), u && n(d),
                                function(t, r, i, a) {
                                    let o = e.getState();
                                    if (t.length) {
                                        let e = {
                                            stopped: !1
                                        };
                                        for (let l of t) {
                                            let u = L(l.object) || o,
                                                {
                                                    raycaster: c,
                                                    pointer: d,
                                                    camera: f,
                                                    internal: h
                                                } = u,
                                                p = new s.Vector3(d.x, d.y, 0).unproject(f),
                                                m = e => {
                                                    var t, n;
                                                    return null != (t = null == (n = h.capturedMap.get(e)) ? void 0 : n.has(l.eventObject)) && t
                                                },
                                                A = e => {
                                                    let t = {
                                                        intersection: l,
                                                        target: r.target
                                                    };
                                                    h.capturedMap.has(e) ? h.capturedMap.get(e).set(l.eventObject, t) : h.capturedMap.set(e, new Map([
                                                        [l.eventObject, t]
                                                    ])), r.target.setPointerCapture(e)
                                                },
                                                g = e => {
                                                    let t = h.capturedMap.get(e);
                                                    t && Y(h.capturedMap, l.eventObject, t, e)
                                                },
                                                B = {};
                                            for (let e in r) {
                                                let t = r[e];
                                                "function" != typeof t && (B[e] = t)
                                            }
                                            let C = { ...l,
                                                ...B,
                                                pointer: d,
                                                intersections: t,
                                                stopped: e.stopped,
                                                delta: i,
                                                unprojectedPoint: p,
                                                ray: c.ray,
                                                camera: f,
                                                stopPropagation() {
                                                    let i = "pointerId" in r && h.capturedMap.get(r.pointerId);
                                                    if ((!i || i.has(l.eventObject)) && (C.stopped = e.stopped = !0, h.hovered.size && Array.from(h.hovered.values()).find(e => e.eventObject === l.eventObject))) {
                                                        let e = t.slice(0, t.indexOf(l));
                                                        n([...e, l])
                                                    }
                                                },
                                                target: {
                                                    hasPointerCapture: m,
                                                    setPointerCapture: A,
                                                    releasePointerCapture: g
                                                },
                                                currentTarget: {
                                                    hasPointerCapture: m,
                                                    setPointerCapture: A,
                                                    releasePointerCapture: g
                                                },
                                                nativeEvent: r
                                            };
                                            if (a(C), !0 === e.stopped) break
                                        }
                                    }
                                }(d, a, f, function(e) {
                                    let t = e.eventObject,
                                        n = t.__r3f,
                                        o = null == n ? void 0 : n.handlers;
                                    if (null != n && n.eventCount) {
                                        if (u) {
                                            if (o.onPointerOver || o.onPointerEnter || o.onPointerOut || o.onPointerLeave) {
                                                let t = X(e),
                                                    n = l.hovered.get(t);
                                                n ? n.stopped && e.stopPropagation() : (l.hovered.set(t, e), null == o.onPointerOver || o.onPointerOver(e), null == o.onPointerEnter || o.onPointerEnter(e))
                                            }
                                            null == o.onPointerMove || o.onPointerMove(e)
                                        } else {
                                            let n = o[i];
                                            n ? (!c || l.initialHits.includes(t)) && (r(a, l.interaction.filter(e => !l.initialHits.includes(e))), n(e)) : c && l.initialHits.includes(t) && r(a, l.interaction.filter(e => !l.initialHits.includes(e)))
                                        }
                                    }
                                })
                        }
                    }
                }
            }
            let Z = e => !!(null != e && e.render),
                V = u.createContext(null),
                q = (e, t) => {
                    let n = (0, d.Z)((n, r) => {
                            let i;
                            let a = new s.Vector3,
                                o = new s.Vector3,
                                l = new s.Vector3;

                            function c(e = r().camera, t = o, n = r().size) {
                                let {
                                    width: i,
                                    height: u,
                                    top: c,
                                    left: d
                                } = n, f = i / u;
                                t instanceof s.Vector3 ? l.copy(t) : l.set(...t);
                                let h = e.getWorldPosition(a).distanceTo(l);
                                if (F(e)) return {
                                    width: i / e.zoom,
                                    height: u / e.zoom,
                                    top: c,
                                    left: d,
                                    factor: 1,
                                    distance: h,
                                    aspect: f
                                }; {
                                    let t = e.fov * Math.PI / 180,
                                        n = 2 * Math.tan(t / 2) * h,
                                        r = n * (i / u);
                                    return {
                                        width: r,
                                        height: n,
                                        top: c,
                                        left: d,
                                        factor: i / r,
                                        distance: h,
                                        aspect: f
                                    }
                                }
                            }
                            let d = e => n(t => ({
                                    performance: { ...t.performance,
                                        current: e
                                    }
                                })),
                                f = new s.Vector2,
                                h = {
                                    set: n,
                                    get: r,
                                    gl: null,
                                    camera: null,
                                    raycaster: null,
                                    events: {
                                        priority: 1,
                                        enabled: !0,
                                        connected: !1
                                    },
                                    xr: null,
                                    scene: null,
                                    invalidate: (t = 1) => e(r(), t),
                                    advance: (e, n) => t(e, n, r()),
                                    legacy: !1,
                                    linear: !1,
                                    flat: !1,
                                    controls: null,
                                    clock: new s.Clock,
                                    pointer: f,
                                    mouse: f,
                                    frameloop: "always",
                                    onPointerMissed: void 0,
                                    performance: {
                                        current: 1,
                                        min: .5,
                                        max: 1,
                                        debounce: 200,
                                        regress: () => {
                                            let e = r();
                                            i && clearTimeout(i), e.performance.current !== e.performance.min && d(e.performance.min), i = setTimeout(() => d(r().performance.max), e.performance.debounce)
                                        }
                                    },
                                    size: {
                                        width: 0,
                                        height: 0,
                                        top: 0,
                                        left: 0,
                                        updateStyle: !1
                                    },
                                    viewport: {
                                        initialDpr: 0,
                                        dpr: 0,
                                        width: 0,
                                        height: 0,
                                        top: 0,
                                        left: 0,
                                        aspect: 0,
                                        distance: 0,
                                        factor: 0,
                                        getCurrentViewport: c
                                    },
                                    setEvents: e => n(t => ({ ...t,
                                        events: { ...t.events,
                                            ...e
                                        }
                                    })),
                                    setSize: (e, t, i, a, l) => {
                                        let s = r().camera,
                                            u = {
                                                width: e,
                                                height: t,
                                                top: a || 0,
                                                left: l || 0,
                                                updateStyle: i
                                            };
                                        n(e => ({
                                            size: u,
                                            viewport: { ...e.viewport,
                                                ...c(s, o, u)
                                            }
                                        }))
                                    },
                                    setDpr: e => n(t => {
                                        let n = H(e);
                                        return {
                                            viewport: { ...t.viewport,
                                                dpr: n,
                                                initialDpr: t.viewport.initialDpr || n
                                            }
                                        }
                                    }),
                                    setFrameloop: (e = "always") => {
                                        let t = r().clock;
                                        t.stop(), t.elapsedTime = 0, "never" !== e && (t.start(), t.elapsedTime = 0), n(() => ({
                                            frameloop: e
                                        }))
                                    },
                                    previousRoot: void 0,
                                    internal: {
                                        active: !1,
                                        priority: 0,
                                        frames: 0,
                                        lastEvent: u.createRef(),
                                        interaction: [],
                                        hovered: new Map,
                                        subscribers: [],
                                        initialClick: [0, 0],
                                        initialHits: [],
                                        capturedMap: new Map,
                                        subscribe: (e, t, n) => {
                                            let i = r().internal;
                                            return i.priority = i.priority + (t > 0 ? 1 : 0), i.subscribers.push({
                                                ref: e,
                                                priority: t,
                                                store: n
                                            }), i.subscribers = i.subscribers.sort((e, t) => e.priority - t.priority), () => {
                                                let n = r().internal;
                                                null != n && n.subscribers && (n.priority = n.priority - (t > 0 ? 1 : 0), n.subscribers = n.subscribers.filter(t => t.ref !== e))
                                            }
                                        }
                                    }
                                };
                            return h
                        }),
                        r = n.getState(),
                        i = r.size,
                        a = r.viewport.dpr,
                        o = r.camera;
                    return n.subscribe(() => {
                        let {
                            camera: e,
                            size: t,
                            viewport: r,
                            gl: l,
                            set: s
                        } = n.getState();
                        if (t !== i || r.dpr !== a) {
                            var u;
                            i = t, a = r.dpr, e.manual || (F(e) ? (e.left = -(t.width / 2), e.right = t.width / 2, e.top = t.height / 2, e.bottom = -(t.height / 2)) : e.aspect = t.width / t.height, e.updateProjectionMatrix(), e.updateMatrixWorld()), l.setPixelRatio(r.dpr);
                            let n = null != (u = t.updateStyle) ? u : "undefined" != typeof HTMLCanvasElement && l.domElement instanceof HTMLCanvasElement;
                            l.setSize(t.width, t.height, n)
                        }
                        e !== o && (o = e, s(t => ({
                            viewport: { ...t.viewport,
                                ...t.viewport.getCurrentViewport(e)
                            }
                        })))
                    }), n.subscribe(t => e(t)), n
                },
                $ = new Set,
                ee = new Set,
                et = new Set;

            function en(e, t) {
                if (e.size)
                    for (let {
                            callback: n
                        } of e.values()) n(t)
            }

            function er(e, t) {
                switch (e) {
                    case "before":
                        return en($, t);
                    case "after":
                        return en(ee, t);
                    case "tail":
                        return en(et, t)
                }
            }

            function ei(e, t, n) {
                let o = t.clock.getDelta();
                for ("never" === t.frameloop && "number" == typeof e && (o = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), i = t.internal.subscribers, r = 0; r < i.length; r++)(a = i[r]).ref.current(a.store.getState(), o, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }

            function ea() {
                let e = u.useContext(V);
                if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
                return e
            }

            function eo(e = e => e, t) {
                return ea()(e, t)
            }

            function el(e, t = 0) {
                let n = ea(),
                    r = n.getState().internal.subscribe,
                    i = w(e);
                return R(() => r(i, t, n), [t, r, n]), null
            }

            function es(e, t) {
                return function(n, ...r) {
                    let i = new n;
                    return e && e(i), Promise.all(r.map(e => new Promise((n, r) => i.load(e, e => {
                        e.scene && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material)
                            }), t
                        }(e.scene)), n(e)
                    }, t, t => r(Error(`Could not load ${e}: ${t.message}`))))))
                }
            }

            function eu(e, t, n, r) {
                let i = Array.isArray(t) ? t : [t],
                    a = C(es(n, r), [e, ...i], {
                        equal: O.equ
                    });
                return Array.isArray(t) ? a : a[0]
            }
            eu.preload = function(e, t, n) {
                let r = Array.isArray(t) ? t : [t];
                return v(es(n), [e, ...r])
            }, eu.clear = function(e, t) {
                let n = Array.isArray(t) ? t : [t];
                return b([e, ...n])
            };
            let ec = new Map,
                {
                    invalidate: ed,
                    advance: ef
                } = function(e) {
                    let t, n, r, i = !1;

                    function a(o) {
                        for (let s of (n = requestAnimationFrame(a), i = !0, t = 0, er("before", o), e.values())) {
                            var l;
                            (r = s.store.getState()).internal.active && ("always" === r.frameloop || r.internal.frames > 0) && !(null != (l = r.gl.xr) && l.isPresenting) && (t += ei(o, r))
                        }
                        if (er("after", o), 0 === t) return er("tail", o), i = !1, cancelAnimationFrame(n)
                    }
                    return {
                        loop: a,
                        invalidate: function t(n, r = 1) {
                            var o;
                            if (!n) return e.forEach(e => t(e.store.getState()), r);
                            null != (o = n.gl.xr) && o.isPresenting || !n.internal.active || "never" === n.frameloop || (n.internal.frames = Math.min(60, n.internal.frames + r), i || (i = !0, requestAnimationFrame(a)))
                        },
                        advance: function(t, n = !0, r, i) {
                            if (n && er("before", t), r) ei(t, r, i);
                            else
                                for (let n of e.values()) ei(t, n.store.getState());
                            n && er("after", t)
                        }
                    }
                }(ec),
                {
                    reconciler: eh,
                    applyProps: ep
                } = function(e, t) {
                    function n(e, {
                        args: t = [],
                        attach: n,
                        ...r
                    }, i) {
                        let a, o = `${e[0].toUpperCase()}${e.slice(1)}`;
                        if ("primitive" === e) {
                            if (void 0 === r.object) throw Error("R3F: Primitives without 'object' are invalid!");
                            let t = r.object;
                            a = k(t, {
                                type: e,
                                root: i,
                                attach: n,
                                primitive: !0
                            })
                        } else {
                            let r = y[o];
                            if (!r) throw Error(`R3F: ${o} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                            if (!Array.isArray(t)) throw Error("R3F: The args prop must be an array!");
                            a = k(new r(...t), {
                                type: e,
                                root: i,
                                attach: n,
                                memoizedProps: {
                                    args: t
                                }
                            })
                        }
                        return void 0 === a.__r3f.attach && (a instanceof s.BufferGeometry ? a.__r3f.attach = "geometry" : a instanceof s.Material && (a.__r3f.attach = "material")), "inject" !== o && Q(a, r), a
                    }

                    function r(e, t) {
                        let n = !1;
                        if (t) {
                            var r, i;
                            null != (r = t.__r3f) && r.attach ? N(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.add(t), n = !0), n || null == (i = e.__r3f) || i.objects.push(t), t.__r3f || k(t, {}), t.__r3f.parent = e, z(t), j(t)
                        }
                    }

                    function i(e, t, n) {
                        let r = !1;
                        if (t) {
                            var i, a;
                            if (null != (i = t.__r3f) && i.attach) N(e, t, t.__r3f.attach);
                            else if (t.isObject3D && e.isObject3D) {
                                t.parent = e, t.dispatchEvent({
                                    type: "added"
                                });
                                let i = e.children.filter(e => e !== t),
                                    a = i.indexOf(n);
                                e.children = [...i.slice(0, a), t, ...i.slice(a)], r = !0
                            }
                            r || null == (a = e.__r3f) || a.objects.push(t), t.__r3f || k(t, {}), t.__r3f.parent = e, z(t), j(t)
                        }
                    }

                    function a(e, t, n = !1) {
                        e && [...e].forEach(e => o(t, e, n))
                    }

                    function o(e, t, n) {
                        if (t) {
                            var r, i, o, l, s;
                            t.__r3f && (t.__r3f.parent = null), null != (r = e.__r3f) && r.objects && (e.__r3f.objects = e.__r3f.objects.filter(e => e !== t)), null != (i = t.__r3f) && i.attach ? U(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.remove(t), null != (l = t.__r3f) && l.root && function(e, t) {
                                let {
                                    internal: n
                                } = e.getState();
                                n.interaction = n.interaction.filter(e => e !== t), n.initialHits = n.initialHits.filter(e => e !== t), n.hovered.forEach((e, r) => {
                                    (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                                }), n.capturedMap.forEach((e, r) => {
                                    Y(n.capturedMap, t, e, r)
                                })
                            }(t.__r3f.root, t));
                            let u = null == (o = t.__r3f) ? void 0 : o.primitive,
                                c = void 0 === n ? null !== t.dispose && !u : n;
                            u || (a(null == (s = t.__r3f) ? void 0 : s.objects, t, c), a(t.children, t, c)), delete t.__r3f, c && t.dispose && "Scene" !== t.type && (0, p.unstable_scheduleCallback)(p.unstable_IdlePriority, () => {
                                try {
                                    t.dispose()
                                } catch (e) {}
                            }), j(e)
                        }
                    }
                    let l = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters."),
                        u = h()({
                            createInstance: n,
                            removeChild: o,
                            appendChild: r,
                            appendInitialChild: r,
                            insertBefore: i,
                            supportsMutation: !0,
                            isPrimaryRenderer: !1,
                            supportsPersistence: !1,
                            supportsHydration: !1,
                            noTimeout: -1,
                            appendChildToContainer: (e, t) => {
                                if (!t) return;
                                let n = e.getState().scene;
                                n.__r3f && (n.__r3f.root = e, r(n, t))
                            },
                            removeChildFromContainer: (e, t) => {
                                t && o(e.getState().scene, t)
                            },
                            insertInContainerBefore: (e, t, n) => {
                                if (!t || !n) return;
                                let r = e.getState().scene;
                                r.__r3f && i(r, t, n)
                            },
                            getRootHostContext: () => null,
                            getChildHostContext: e => e,
                            finalizeInitialChildren(e) {
                                var t;
                                let n = null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                                return !!n.handlers
                            },
                            prepareUpdate(e, t, n, r) {
                                var i;
                                let a = null != (i = null == e ? void 0 : e.__r3f) ? i : {};
                                if (a.primitive && r.object && r.object !== e) return [!0]; {
                                    let {
                                        args: t = [],
                                        children: i,
                                        ...a
                                    } = r, {
                                        args: o = [],
                                        children: l,
                                        ...s
                                    } = n;
                                    if (!Array.isArray(t)) throw Error("R3F: the args prop must be an array!");
                                    if (t.some((e, t) => e !== o[t])) return [!0];
                                    let u = K(e, a, s, !0);
                                    return u.changes.length ? [!1, u] : null
                                }
                            },
                            commitUpdate(e, [t, i], a, l, s, u) {
                                t ? function(e, t, i, a) {
                                    var l;
                                    let s = null == (l = e.__r3f) ? void 0 : l.parent;
                                    if (!s) return;
                                    let u = n(t, i, e.__r3f.root);
                                    if (e.children) {
                                        for (let t of e.children) t.__r3f && r(u, t);
                                        e.children = e.children.filter(e => !e.__r3f)
                                    }
                                    if (e.__r3f.objects.forEach(e => r(u, e)), e.__r3f.objects = [], e.__r3f.autoRemovedBeforeAppend || o(s, e), u.parent && (u.__r3f.autoRemovedBeforeAppend = !0), r(s, u), u.raycast && u.__r3f.eventCount) {
                                        let e = u.__r3f.root.getState();
                                        e.internal.interaction.push(u)
                                    }[a, a.alternate].forEach(e => {
                                        null !== e && (e.stateNode = u, e.ref && ("function" == typeof e.ref ? e.ref(u) : e.ref.current = u))
                                    })
                                }(e, a, s, u) : Q(e, i)
                            },
                            commitMount(e, t, n, r) {
                                var i;
                                let a = null != (i = e.__r3f) ? i : {};
                                e.raycast && a.handlers && a.eventCount && e.__r3f.root.getState().internal.interaction.push(e)
                            },
                            getPublicInstance: e => e,
                            prepareForCommit: () => null,
                            preparePortalMount: e => k(e.getState().scene),
                            resetAfterCommit: () => {},
                            shouldSetTextContent: () => !1,
                            clearContainer: () => !1,
                            hideInstance(e) {
                                var t;
                                let {
                                    attach: n,
                                    parent: r
                                } = null != (t = e.__r3f) ? t : {};
                                n && r && U(r, e, n), e.isObject3D && (e.visible = !1), j(e)
                            },
                            unhideInstance(e, t) {
                                var n;
                                let {
                                    attach: r,
                                    parent: i
                                } = null != (n = e.__r3f) ? n : {};
                                r && i && N(i, e, r), (e.isObject3D && null == t.visible || t.visible) && (e.visible = !0), j(e)
                            },
                            createTextInstance: l,
                            hideTextInstance: l,
                            unhideTextInstance: l,
                            getCurrentEventPriority: () => t ? t() : c.DefaultEventPriority,
                            beforeActiveInstanceBlur: () => {},
                            afterActiveInstanceBlur: () => {},
                            detachDeletedInstance: () => {},
                            now: "undefined" != typeof performance && O.fun(performance.now) ? performance.now : O.fun(Date.now) ? Date.now : () => 0,
                            scheduleTimeout: O.fun(setTimeout) ? setTimeout : void 0,
                            cancelTimeout: O.fun(clearTimeout) ? clearTimeout : void 0
                        });
                    return {
                        reconciler: u,
                        applyProps: Q
                    }
                }(0, function() {
                    var e;
                    let t = "undefined" != typeof self && self || "undefined" != typeof window && window;
                    if (!t) return c.DefaultEventPriority;
                    let n = null == (e = t.event) ? void 0 : e.type;
                    switch (n) {
                        case "click":
                        case "contextmenu":
                        case "dblclick":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                            return c.DiscreteEventPriority;
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerenter":
                        case "pointerleave":
                        case "wheel":
                            return c.ContinuousEventPriority;
                        default:
                            return c.DefaultEventPriority
                    }
                }),
                em = {
                    objects: "shallow",
                    strict: !1
                },
                eA = (e, t) => {
                    let n = "function" == typeof e ? e(t) : e;
                    return Z(n) ? n : new s.WebGLRenderer({
                        powerPreference: "high-performance",
                        canvas: t,
                        antialias: !0,
                        alpha: !0,
                        ...e
                    })
                };

            function eg(e) {
                let t, n;
                let r = ec.get(e),
                    i = null == r ? void 0 : r.fiber,
                    a = null == r ? void 0 : r.store;
                r && console.warn("R3F.createRoot should only be called once!");
                let o = "function" == typeof reportError ? reportError : console.error,
                    l = a || q(ed, ef),
                    d = i || eh.createContainer(l, c.ConcurrentRoot, null, !1, null, "", o, null);
                r || ec.set(e, {
                    fiber: d,
                    store: l
                });
                let f = !1;
                return {
                    configure(r = {}) {
                        var i, a;
                        let {
                            gl: o,
                            size: u,
                            scene: c,
                            events: d,
                            onCreated: h,
                            shadows: p = !1,
                            linear: m = !1,
                            flat: A = !1,
                            legacy: g = !1,
                            orthographic: B = !1,
                            frameloop: C = "always",
                            dpr: v = [1, 2],
                            performance: b,
                            raycaster: y,
                            camera: E,
                            onPointerMissed: M
                        } = r, F = l.getState(), I = F.gl;
                        F.gl || F.set({
                            gl: I = eA(o, e)
                        });
                        let R = F.raycaster;
                        R || F.set({
                            raycaster: R = new s.Raycaster
                        });
                        let {
                            params: w,
                            ...T
                        } = y || {};
                        if (O.equ(T, R, em) || ep(R, { ...T
                            }), O.equ(w, R.params, em) || ep(R, {
                                params: { ...R.params,
                                    ...w
                                }
                            }), !F.camera || F.camera === n && !O.equ(n, E, em)) {
                            n = E;
                            let e = E instanceof s.Camera,
                                t = e ? E : B ? new s.OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new s.PerspectiveCamera(75, 0, .1, 1e3);
                            e || (t.position.z = 5, E && ep(t, E), F.camera || null != E && E.rotation || t.lookAt(0, 0, 0)), F.set({
                                camera: t
                            })
                        }
                        if (!F.scene) {
                            let e;
                            c instanceof s.Scene ? e = c : (e = new s.Scene, c && ep(e, c)), F.set({
                                scene: k(e)
                            })
                        }
                        if (!F.xr) {
                            let e = (e, t) => {
                                    let n = l.getState();
                                    "never" !== n.frameloop && ef(e, !0, n, t)
                                },
                                t = () => {
                                    let t = l.getState();
                                    t.gl.xr.enabled = t.gl.xr.isPresenting, t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null), t.gl.xr.isPresenting || ed(t)
                                },
                                n = {
                                    connect() {
                                        let e = l.getState().gl;
                                        e.xr.addEventListener("sessionstart", t), e.xr.addEventListener("sessionend", t)
                                    },
                                    disconnect() {
                                        let e = l.getState().gl;
                                        e.xr.removeEventListener("sessionstart", t), e.xr.removeEventListener("sessionend", t)
                                    }
                                };
                            "function" == typeof(null == (i = I.xr) ? void 0 : i.addEventListener) && n.connect(), F.set({
                                xr: n
                            })
                        }
                        if (I.shadowMap) {
                            let e = I.shadowMap.enabled,
                                t = I.shadowMap.type;
                            if (I.shadowMap.enabled = !!p, O.boo(p)) I.shadowMap.type = s.PCFSoftShadowMap;
                            else if (O.str(p)) {
                                let e = {
                                    basic: s.BasicShadowMap,
                                    percentage: s.PCFShadowMap,
                                    soft: s.PCFSoftShadowMap,
                                    variance: s.VSMShadowMap
                                };
                                I.shadowMap.type = null != (a = e[p]) ? a : s.PCFSoftShadowMap
                            } else O.obj(p) && Object.assign(I.shadowMap, p);
                            (e !== I.shadowMap.enabled || t !== I.shadowMap.type) && (I.shadowMap.needsUpdate = !0)
                        }
                        let D = S();
                        D && ("enabled" in D ? D.enabled = !g : "legacyMode" in D && (D.legacyMode = g)), ep(I, {
                            outputEncoding: m ? 3e3 : 3001,
                            toneMapping: A ? s.NoToneMapping : s.ACESFilmicToneMapping
                        }), F.legacy !== g && F.set(() => ({
                            legacy: g
                        })), F.linear !== m && F.set(() => ({
                            linear: m
                        })), F.flat !== A && F.set(() => ({
                            flat: A
                        })), !o || O.fun(o) || Z(o) || O.equ(o, I, em) || ep(I, o), d && !F.events.handlers && F.set({
                            events: d(l)
                        });
                        let x = function(e, t) {
                            if (t) return t;
                            if ("undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                                let {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: i
                                } = e.parentElement.getBoundingClientRect();
                                return {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: i
                                }
                            }
                            return "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                                width: e.width,
                                height: e.height,
                                top: 0,
                                left: 0
                            } : {
                                width: 0,
                                height: 0,
                                top: 0,
                                left: 0
                            }
                        }(e, u);
                        return O.equ(x, F.size, em) || F.setSize(x.width, x.height, x.updateStyle, x.top, x.left), v && F.viewport.dpr !== H(v) && F.setDpr(v), F.frameloop !== C && F.setFrameloop(C), F.onPointerMissed || F.set({
                            onPointerMissed: M
                        }), b && !O.equ(b, F.performance, em) && F.set(e => ({
                            performance: { ...e.performance,
                                ...b
                            }
                        })), t = h, f = !0, this
                    },
                    render(n) {
                        return f || this.configure(), eh.updateContainer(u.createElement(eB, {
                            store: l,
                            children: n,
                            onCreated: t,
                            rootElement: e
                        }), d, null, () => void 0), l
                    },
                    unmount() {
                        eC(e)
                    }
                }
            }

            function eB({
                store: e,
                children: t,
                onCreated: n,
                rootElement: r
            }) {
                return R(() => {
                    let t = e.getState();
                    t.set(e => ({
                        internal: { ...e.internal,
                            active: !0
                        }
                    })), n && n(t), e.getState().events.connected || null == t.events.connect || t.events.connect(r)
                }, []), u.createElement(V.Provider, {
                    value: e
                }, t)
            }

            function eC(e, t) {
                let n = ec.get(e),
                    r = null == n ? void 0 : n.fiber;
                if (r) {
                    let i = null == n ? void 0 : n.store.getState();
                    i && (i.internal.active = !1), eh.updateContainer(null, r, null, () => {
                        i && setTimeout(() => {
                            try {
                                var n, r, a, o;
                                null == i.events.disconnect || i.events.disconnect(), null == (n = i.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(), null == (a = i.gl) || null == a.forceContextLoss || a.forceContextLoss(), null != (o = i.gl) && o.xr && i.xr.disconnect(),
                                    function(e) {
                                        for (let t in e.dispose && "Scene" !== e.type && e.dispose(), e) null == t.dispose || t.dispose(), delete e[t]
                                    }(i), ec.delete(e), t && t(e)
                            } catch (e) {}
                        }, 500)
                    })
                }
            }
            eh.injectIntoDevTools({
                bundleType: 0,
                rendererPackageName: "@react-three/fiber",
                version: u.version
            }), u.unstable_act
        },
        5334: function(e, t, n) {
            "use strict";
            n.d(t, {
                Xz: function() {
                    return R
                }
            });
            var r = n(949),
                i = n(431),
                a = n(6006),
                o = n(7804),
                l = n(3021),
                s = n.n(l);
            let u = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                c = (e, t) => u.every(n => e[n] === t[n]);
            var d = Object.defineProperty,
                f = Object.defineProperties,
                h = Object.getOwnPropertyDescriptors,
                p = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                A = Object.prototype.propertyIsEnumerable,
                g = (e, t, n) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                B = (e, t) => {
                    for (var n in t || (t = {})) m.call(t, n) && g(e, n, t[n]);
                    if (p)
                        for (var n of p(t)) A.call(t, n) && g(e, n, t[n]);
                    return e
                },
                C = (e, t) => f(e, h(t));

            function v(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }
            let b = v(a.createContext(null));
            class y extends a.Component {
                render() {
                    return a.createElement(b.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }
            let {
                ReactCurrentOwner: E,
                ReactCurrentDispatcher: M
            } = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            n(4474), n(4145), n(2820);
            let S = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function F(e) {
                let {
                    handlePointer: t
                } = (0, r.c)(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, n) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(2 * (e.offsetY / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(S).reduce((e, n) => ({ ...e,
                        [n]: t(n)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: n,
                            internal: r
                        } = e.getState();
                        null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
                    },
                    connect: t => {
                        var n;
                        let {
                            set: r,
                            events: i
                        } = e.getState();
                        null == i.disconnect || i.disconnect(), r(e => ({
                            events: { ...e.events,
                                connected: t
                            }
                        })), Object.entries(null != (n = i.handlers) ? n : []).forEach(([e, n]) => {
                            let [r, i] = S[e];
                            t.addEventListener(r, n, {
                                passive: i
                            })
                        })
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: n
                        } = e.getState();
                        if (n.connected) {
                            var r;
                            Object.entries(null != (r = n.handlers) ? r : []).forEach(([e, t]) => {
                                if (n && n.connected instanceof HTMLElement) {
                                    let [r] = S[e];
                                    n.connected.removeEventListener(r, t)
                                }
                            }), t(e => ({
                                events: { ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
            let I = a.forwardRef(function({
                    children: e,
                    fallback: t,
                    resize: n,
                    style: l,
                    gl: u,
                    events: d = F,
                    eventSource: f,
                    eventPrefix: h,
                    shadows: p,
                    linear: m,
                    flat: A,
                    legacy: g,
                    orthographic: S,
                    frameloop: I,
                    dpr: R,
                    performance: w,
                    raycaster: T,
                    camera: D,
                    scene: x,
                    onPointerMissed: G,
                    onCreated: P,
                    ...H
                }, L) {
                    a.useMemo(() => (0, r.e)(o), []);
                    let O = function() {
                            let e = function() {
                                var e, t;
                                let n = function() {
                                        let e = a.useContext(b);
                                        if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                                        let t = a.useId(),
                                            n = a.useMemo(() => {
                                                for (let n of [null == E ? void 0 : E.current, e, null == e ? void 0 : e.alternate]) {
                                                    if (!n) continue;
                                                    let e = function e(t, n, r) {
                                                        if (!t) return;
                                                        if (!0 === r(t)) return t;
                                                        let i = n ? t.return : t.child;
                                                        for (; i;) {
                                                            let t = e(i, n, r);
                                                            if (t) return t;
                                                            i = n ? null : i.sibling
                                                        }
                                                    }(n, !1, e => {
                                                        let n = e.memoizedState;
                                                        for (; n;) {
                                                            if (n.memoizedState === t) return !0;
                                                            n = n.next
                                                        }
                                                    });
                                                    if (e) return e
                                                }
                                            }, [e, t]);
                                        return n
                                    }(),
                                    [r] = a.useState(() => new Map);
                                r.clear();
                                let i = n;
                                for (; i;) {
                                    let n = null == (e = i.type) ? void 0 : e._context;
                                    n && n !== b && !r.has(n) && r.set(n, null == (t = null == M ? void 0 : M.current) ? void 0 : t.readContext(v(n))), i = i.return
                                }
                                return r
                            }();
                            return a.useMemo(() => Array.from(e.keys()).reduce((t, n) => r => a.createElement(t, null, a.createElement(n.Provider, C(B({}, r), {
                                value: e.get(n)
                            }))), e => a.createElement(y, B({}, e))), [e])
                        }(),
                        [k, _] = function(e) {
                            var t;
                            let {
                                debounce: n,
                                scroll: r,
                                polyfill: i,
                                offsetSize: o
                            } = void 0 === e ? {
                                debounce: 0,
                                scroll: !1,
                                offsetSize: !1
                            } : e, l = i || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                            if (!l) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                            let [u, d] = (0, a.useState)({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                bottom: 0,
                                right: 0,
                                x: 0,
                                y: 0
                            }), f = (0, a.useRef)({
                                element: null,
                                scrollContainers: null,
                                resizeObserver: null,
                                lastBounds: u
                            }), h = n ? "number" == typeof n ? n : n.scroll : null, p = n ? "number" == typeof n ? n : n.resize : null, m = (0, a.useRef)(!1);
                            (0, a.useEffect)(() => (m.current = !0, () => void(m.current = !1)));
                            let [A, g, B] = (0, a.useMemo)(() => {
                                let e = () => {
                                    if (!f.current.element) return;
                                    let {
                                        left: e,
                                        top: t,
                                        width: n,
                                        height: r,
                                        bottom: i,
                                        right: a,
                                        x: l,
                                        y: s
                                    } = f.current.element.getBoundingClientRect(), u = {
                                        left: e,
                                        top: t,
                                        width: n,
                                        height: r,
                                        bottom: i,
                                        right: a,
                                        x: l,
                                        y: s
                                    };
                                    f.current.element instanceof HTMLElement && o && (u.height = f.current.element.offsetHeight, u.width = f.current.element.offsetWidth), Object.freeze(u), m.current && !c(f.current.lastBounds, u) && d(f.current.lastBounds = u)
                                };
                                return [e, p ? s()(e, p) : e, h ? s()(e, h) : e]
                            }, [d, o, h, p]);

                            function C() {
                                f.current.scrollContainers && (f.current.scrollContainers.forEach(e => e.removeEventListener("scroll", B, !0)), f.current.scrollContainers = null), f.current.resizeObserver && (f.current.resizeObserver.disconnect(), f.current.resizeObserver = null)
                            }

                            function v() {
                                f.current.element && (f.current.resizeObserver = new l(B), f.current.resizeObserver.observe(f.current.element), r && f.current.scrollContainers && f.current.scrollContainers.forEach(e => e.addEventListener("scroll", B, {
                                    capture: !0,
                                    passive: !0
                                })))
                            }
                            return t = !!r, (0, a.useEffect)(() => {
                                if (t) return window.addEventListener("scroll", B, {
                                    capture: !0,
                                    passive: !0
                                }), () => void window.removeEventListener("scroll", B, !0)
                            }, [B, t]), (0, a.useEffect)(() => (window.addEventListener("resize", g), () => void window.removeEventListener("resize", g)), [g]), (0, a.useEffect)(() => {
                                C(), v()
                            }, [r, B, g]), (0, a.useEffect)(() => C, []), [e => {
                                e && e !== f.current.element && (C(), f.current.element = e, f.current.scrollContainers = function e(t) {
                                    let n = [];
                                    if (!t || t === document.body) return n;
                                    let {
                                        overflow: r,
                                        overflowX: i,
                                        overflowY: a
                                    } = window.getComputedStyle(t);
                                    return [r, i, a].some(e => "auto" === e || "scroll" === e) && n.push(t), [...n, ...e(t.parentElement)]
                                }(e), v())
                            }, u, A]
                        }({
                            scroll: !0,
                            debounce: {
                                scroll: 50,
                                resize: 0
                            },
                            ...n
                        }),
                        J = a.useRef(null),
                        N = a.useRef(null);
                    a.useImperativeHandle(L, () => J.current);
                    let U = (0, r.u)(G),
                        [K, Q] = a.useState(!1),
                        [j, z] = a.useState(!1);
                    if (K) throw K;
                    if (j) throw j;
                    let X = a.useRef(null);
                    (0, r.a)(() => {
                        let t = J.current;
                        _.width > 0 && _.height > 0 && t && (X.current || (X.current = (0, r.b)(t)), X.current.configure({
                            gl: u,
                            events: d,
                            shadows: p,
                            linear: m,
                            flat: A,
                            legacy: g,
                            orthographic: S,
                            frameloop: I,
                            dpr: R,
                            performance: w,
                            raycaster: T,
                            camera: D,
                            scene: x,
                            size: _,
                            onPointerMissed: (...e) => null == U.current ? void 0 : U.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(f ? (0, r.i)(f) ? f.current : f : N.current), h && e.setEvents({
                                    compute: (e, t) => {
                                        let n = e[h + "X"],
                                            r = e[h + "Y"];
                                        t.pointer.set(n / t.size.width * 2 - 1, -(2 * (r / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == P || P(e)
                            }
                        }), X.current.render(a.createElement(O, null, a.createElement(r.E, {
                            set: z
                        }, a.createElement(a.Suspense, {
                            fallback: a.createElement(r.B, {
                                set: Q
                            })
                        }, e)))))
                    }), a.useEffect(() => {
                        let e = J.current;
                        if (e) return () => (0, r.d)(e)
                    }, []);
                    let Y = f ? "none" : "auto";
                    return a.createElement("div", (0, i.Z)({
                        ref: N,
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: Y,
                            ...l
                        }
                    }, H), a.createElement("div", {
                        ref: k,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, a.createElement("canvas", {
                        ref: J,
                        style: {
                            display: "block"
                        }
                    }, t)))
                }),
                R = a.forwardRef(function(e, t) {
                    return a.createElement(y, null, a.createElement(I, (0, i.Z)({}, e, {
                        ref: t
                    })))
                })
        },
        3021: function(e) {
            function t(e, t, n) {
                function r() {
                    var u = Date.now() - l;
                    u < t && u >= 0 ? i = setTimeout(r, t - u) : (i = null, n || (s = e.apply(o, a), o = a = null))
                }
                null == t && (t = 100);
                var i, a, o, l, s, u = function() {
                    o = this, a = arguments, l = Date.now();
                    var u = n && !i;
                    return i || (i = setTimeout(r, t)), u && (s = e.apply(o, a), o = a = null), s
                };
                return u.clear = function() {
                    i && (clearTimeout(i), i = null)
                }, u.flush = function() {
                    i && (s = e.apply(o, a), o = a = null, clearTimeout(i), i = null)
                }, u
            }
            t.debounce = t, e.exports = t
        },
        9527: function(e, t) {
            "use strict";
            /**
             * @license React
             * react-reconciler-constants.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            t.ConcurrentRoot = 1, t.ContinuousEventPriority = 4, t.DefaultEventPriority = 16, t.DiscreteEventPriority = 1
        },
        7704: function(e, t, n) {
            /**
             * @license React
             * react-reconciler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            e.exports = function(e) {
                "use strict";
                var t, r, i, a, o, l = {},
                    s = n(6006),
                    u = n(2820),
                    c = Object.assign;

                function d(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    h = Symbol.for("react.element"),
                    p = Symbol.for("react.portal"),
                    m = Symbol.for("react.fragment"),
                    A = Symbol.for("react.strict_mode"),
                    g = Symbol.for("react.profiler"),
                    B = Symbol.for("react.provider"),
                    C = Symbol.for("react.context"),
                    v = Symbol.for("react.forward_ref"),
                    b = Symbol.for("react.suspense"),
                    y = Symbol.for("react.suspense_list"),
                    E = Symbol.for("react.memo"),
                    M = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var S = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var F = Symbol.iterator;

                function I(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = F && e[F] || e["@@iterator"]) ? e : null
                }

                function R(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case m:
                            return "Fragment";
                        case p:
                            return "Portal";
                        case g:
                            return "Profiler";
                        case A:
                            return "StrictMode";
                        case b:
                            return "Suspense";
                        case y:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case C:
                            return (e.displayName || "Context") + ".Consumer";
                        case B:
                            return (e._context.displayName || "Context") + ".Provider";
                        case v:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case E:
                            return null !== (t = e.displayName || null) ? t : R(e.type) || "Memo";
                        case M:
                            t = e._payload, e = e._init;
                            try {
                                return R(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function w(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do 0 != (4098 & (t = e).flags) && (n = t.return), e = t.return; while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function T(e) {
                    if (w(e) !== e) throw Error(d(188))
                }

                function D(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = w(e))) throw Error(d(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var i = n.return;
                        if (null === i) break;
                        var a = i.alternate;
                        if (null === a) {
                            if (null !== (r = i.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (i.child === a.child) {
                            for (a = i.child; a;) {
                                if (a === n) return T(i), e;
                                if (a === r) return T(i), t;
                                a = a.sibling
                            }
                            throw Error(d(188))
                        }
                        if (n.return !== r.return) n = i, r = a;
                        else {
                            for (var o = !1, l = i.child; l;) {
                                if (l === n) {
                                    o = !0, n = i, r = a;
                                    break
                                }
                                if (l === r) {
                                    o = !0, r = i, n = a;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!o) {
                                for (l = a.child; l;) {
                                    if (l === n) {
                                        o = !0, n = a, r = i;
                                        break
                                    }
                                    if (l === r) {
                                        o = !0, r = a, n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!o) throw Error(d(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(d(190))
                    }
                    if (3 !== n.tag) throw Error(d(188));
                    return n.stateNode.current === n ? e : t
                }

                function x(e) {
                    return null !== (e = D(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            var n = e(t);
                            if (null !== n) return n;
                            t = t.sibling
                        }
                        return null
                    }(e) : null
                }
                var G, P = Array.isArray,
                    H = e.getPublicInstance,
                    L = e.getRootHostContext,
                    O = e.getChildHostContext,
                    k = e.prepareForCommit,
                    _ = e.resetAfterCommit,
                    J = e.createInstance,
                    N = e.appendInitialChild,
                    U = e.finalizeInitialChildren,
                    K = e.prepareUpdate,
                    Q = e.shouldSetTextContent,
                    j = e.createTextInstance,
                    z = e.scheduleTimeout,
                    X = e.cancelTimeout,
                    Y = e.noTimeout,
                    W = e.isPrimaryRenderer,
                    Z = e.supportsMutation,
                    V = e.supportsPersistence,
                    q = e.supportsHydration,
                    $ = e.getInstanceFromNode,
                    ee = e.preparePortalMount,
                    et = e.getCurrentEventPriority,
                    en = e.detachDeletedInstance,
                    er = e.supportsMicrotasks,
                    ei = e.scheduleMicrotask,
                    ea = e.supportsTestSelectors,
                    eo = e.findFiberRoot,
                    el = e.getBoundingRect,
                    es = e.getTextContent,
                    eu = e.isHiddenSubtree,
                    ec = e.matchAccessibilityRole,
                    ed = e.setFocusIfFocusable,
                    ef = e.setupIntersectionObserver,
                    eh = e.appendChild,
                    ep = e.appendChildToContainer,
                    em = e.commitTextUpdate,
                    eA = e.commitMount,
                    eg = e.commitUpdate,
                    eB = e.insertBefore,
                    eC = e.insertInContainerBefore,
                    ev = e.removeChild,
                    eb = e.removeChildFromContainer,
                    ey = e.resetTextContent,
                    eE = e.hideInstance,
                    eM = e.hideTextInstance,
                    eS = e.unhideInstance,
                    eF = e.unhideTextInstance,
                    eI = e.clearContainer,
                    eR = e.cloneInstance,
                    ew = e.createContainerChildSet,
                    eT = e.appendChildToContainerChildSet,
                    eD = e.finalizeContainerChildren,
                    ex = e.replaceContainerChildren,
                    eG = e.cloneHiddenInstance,
                    eP = e.cloneHiddenTextInstance,
                    eH = e.canHydrateInstance,
                    eL = e.canHydrateTextInstance,
                    eO = e.canHydrateSuspenseInstance,
                    ek = e.isSuspenseInstancePending,
                    e_ = e.isSuspenseInstanceFallback,
                    eJ = e.registerSuspenseInstanceRetry,
                    eN = e.getNextHydratableSibling,
                    eU = e.getFirstHydratableChild,
                    eK = e.getFirstHydratableChildWithinContainer,
                    eQ = e.getFirstHydratableChildWithinSuspenseInstance,
                    ej = e.hydrateInstance,
                    ez = e.hydrateTextInstance,
                    eX = e.hydrateSuspenseInstance,
                    eY = e.getNextHydratableInstanceAfterSuspenseInstance,
                    eW = e.commitHydratedContainer,
                    eZ = e.commitHydratedSuspenseInstance,
                    eV = e.clearSuspenseBoundary,
                    eq = e.clearSuspenseBoundaryFromContainer,
                    e$ = e.shouldDeleteUnhydratedTailInstances,
                    e0 = e.didNotMatchHydratedContainerTextInstance,
                    e1 = e.didNotMatchHydratedTextInstance;

                function e9(e) {
                    if (void 0 === G) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        G = t && t[1] || ""
                    }
                    return "\n" + G + e
                }
                var e2 = !1;

                function e8(e, t) {
                    if (!e || e2) return "";
                    e2 = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t) {
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(t.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            e()
                        }
                    } catch (t) {
                        if (t && r && "string" == typeof t.stack) {
                            for (var i = t.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, l = a.length - 1; 1 <= o && 0 <= l && i[o] !== a[l];) l--;
                            for (; 1 <= o && 0 <= l; o--, l--)
                                if (i[o] !== a[l]) {
                                    if (1 !== o || 1 !== l)
                                        do
                                            if (o--, 0 > --l || i[o] !== a[l]) {
                                                var s = "\n" + i[o].replace(" at new ", " at ");
                                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                            }
                                    while (1 <= o && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        e2 = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? e9(e) : ""
                }
                var e3 = Object.prototype.hasOwnProperty,
                    e4 = [],
                    e6 = -1;

                function e5(e) {
                    return {
                        current: e
                    }
                }

                function e7(e) {
                    0 > e6 || (e.current = e4[e6], e4[e6] = null, e6--)
                }

                function te(e, t) {
                    e4[++e6] = e.current, e.current = t
                }
                var tt = {},
                    tn = e5(tt),
                    tr = e5(!1),
                    ti = tt;

                function ta(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return tt;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var i, a = {};
                    for (i in n) a[i] = t[i];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function to(e) {
                    return null != (e = e.childContextTypes)
                }

                function tl() {
                    e7(tr), e7(tn)
                }

                function ts(e, t, n) {
                    if (tn.current !== tt) throw Error(d(168));
                    te(tn, t), te(tr, n)
                }

                function tu(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var i in r = r.getChildContext())
                        if (!(i in t)) throw Error(d(108, function(e) {
                            var t = e.type;
                            switch (e.tag) {
                                case 24:
                                    return "Cache";
                                case 9:
                                    return (t.displayName || "Context") + ".Consumer";
                                case 10:
                                    return (t._context.displayName || "Context") + ".Provider";
                                case 18:
                                    return "DehydratedFragment";
                                case 11:
                                    return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                                case 7:
                                    return "Fragment";
                                case 5:
                                    return t;
                                case 4:
                                    return "Portal";
                                case 3:
                                    return "Root";
                                case 6:
                                    return "Text";
                                case 16:
                                    return R(t);
                                case 8:
                                    return t === A ? "StrictMode" : "Mode";
                                case 22:
                                    return "Offscreen";
                                case 12:
                                    return "Profiler";
                                case 21:
                                    return "Scope";
                                case 13:
                                    return "Suspense";
                                case 19:
                                    return "SuspenseList";
                                case 25:
                                    return "TracingMarker";
                                case 1:
                                case 0:
                                case 17:
                                case 2:
                                case 14:
                                case 15:
                                    if ("function" == typeof t) return t.displayName || t.name || null;
                                    if ("string" == typeof t) return t
                            }
                            return null
                        }(e) || "Unknown", i));
                    return c({}, n, r)
                }

                function tc(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt, ti = tn.current, te(tn, e), te(tr, tr.current), !0
                }

                function td(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(d(169));
                    n ? (e = tu(e, t, ti), r.__reactInternalMemoizedMergedChildContext = e, e7(tr), e7(tn), te(tn, e)) : e7(tr), te(tr, n)
                }
                var tf = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 == (e >>>= 0) ? 32 : 31 - (th(e) / tp | 0) | 0
                    },
                    th = Math.log,
                    tp = Math.LN2,
                    tm = 64,
                    tA = 4194304;

                function tg(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function tB(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        i = e.suspendedLanes,
                        a = e.pingedLanes,
                        o = 268435455 & n;
                    if (0 !== o) {
                        var l = o & ~i;
                        0 !== l ? r = tg(l) : 0 != (a &= o) && (r = tg(a))
                    } else 0 != (o = n & ~i) ? r = tg(o) : 0 !== a && (r = tg(a));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (a = t & -t) || 16 === i && 0 != (4194240 & a))) return t;
                    if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - tf(t)), r |= e[n], t &= ~i;
                    return r
                }

                function tC(e) {
                    return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function tv(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function tb(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - tf(t)] = n
                }

                function ty(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - tf(n),
                            i = 1 << r;
                        i & t | e[r] & t && (e[r] |= t), n &= ~i
                    }
                }
                var tE = 0;

                function tM(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var tS = u.unstable_scheduleCallback,
                    tF = u.unstable_cancelCallback,
                    tI = u.unstable_shouldYield,
                    tR = u.unstable_requestPaint,
                    tw = u.unstable_now,
                    tT = u.unstable_ImmediatePriority,
                    tD = u.unstable_UserBlockingPriority,
                    tx = u.unstable_NormalPriority,
                    tG = u.unstable_IdlePriority,
                    tP = null,
                    tH = null,
                    tL = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    tO = null,
                    tk = !1,
                    t_ = !1;

                function tJ() {
                    if (!t_ && null !== tO) {
                        t_ = !0;
                        var e = 0,
                            t = tE;
                        try {
                            var n = tO;
                            for (tE = 1; e < n.length; e++) {
                                var r = n[e];
                                do r = r(!0); while (null !== r)
                            }
                            tO = null, tk = !1
                        } catch (t) {
                            throw null !== tO && (tO = tO.slice(e + 1)), tS(tT, tJ), t
                        } finally {
                            tE = t, t_ = !1
                        }
                    }
                    return null
                }
                var tN = f.ReactCurrentBatchConfig;

                function tU(e, t) {
                    if (tL(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (!e3.call(t, i) || !tL(e[i], t[i])) return !1
                    }
                    return !0
                }

                function tK(e, t) {
                    if (e && e.defaultProps)
                        for (var n in t = c({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var tQ = e5(null),
                    tj = null,
                    tz = null,
                    tX = null;

                function tY() {
                    tX = tz = tj = null
                }

                function tW(e, t, n) {
                    W ? (te(tQ, t._currentValue), t._currentValue = n) : (te(tQ, t._currentValue2), t._currentValue2 = n)
                }

                function tZ(e) {
                    var t = tQ.current;
                    e7(tQ), W ? e._currentValue = t : e._currentValue2 = t
                }

                function tV(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function tq(e, t) {
                    tj = e, tX = tz = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (r$ = !0), e.firstContext = null)
                }

                function t$(e) {
                    var t = W ? e._currentValue : e._currentValue2;
                    if (tX !== e) {
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === tz) {
                            if (null === tj) throw Error(d(308));
                            tz = e, tj.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else tz = tz.next = e
                    }
                    return t
                }
                var t0 = null,
                    t1 = !1;

                function t9(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function t2(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function t8(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function t3(e, t) {
                    var n = e.updateQueue;
                    null !== n && (n = n.shared, null !== iW && 0 != (1 & e.mode) && 0 == (2 & iY) ? (null === (e = n.interleaved) ? (t.next = t, null === t0 ? t0 = [n] : t0.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next, e.next = t), n.pending = t))
                }

                function t4(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n)
                    }
                }

                function t6(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var i = null,
                            a = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === a ? i = a = o : a = a.next = o, n = n.next
                            } while (null !== n);
                            null === a ? i = a = t : a = a.next = t
                        } else i = a = t;
                        n = {
                            baseState: r.baseState,
                            firstBaseUpdate: i,
                            lastBaseUpdate: a,
                            shared: r.shared,
                            effects: r.effects
                        }, e.updateQueue = n;
                        return
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function t5(e, t, n, r) {
                    var i = e.updateQueue;
                    t1 = !1;
                    var a = i.firstBaseUpdate,
                        o = i.lastBaseUpdate,
                        l = i.shared.pending;
                    if (null !== l) {
                        i.shared.pending = null;
                        var s = l,
                            u = s.next;
                        s.next = null, null === o ? a = u : o.next = u, o = s;
                        var d = e.alternate;
                        null !== d && (l = (d = d.updateQueue).lastBaseUpdate) !== o && (null === l ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = s)
                    }
                    if (null !== a) {
                        var f = i.baseState;
                        for (o = 0, d = u = s = null, l = a;;) {
                            var h = l.lane,
                                p = l.eventTime;
                            if ((r & h) === h) {
                                null !== d && (d = d.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        A = l;
                                    switch (h = t, p = n, A.tag) {
                                        case 1:
                                            if ("function" == typeof(m = A.payload)) {
                                                f = m.call(p, f, h);
                                                break e
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null == (h = "function" == typeof(m = A.payload) ? m.call(p, f, h) : m)) break e;
                                            f = c({}, f, h);
                                            break e;
                                        case 2:
                                            t1 = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (h = i.effects) ? i.effects = [l] : h.push(l))
                            } else p = {
                                eventTime: p,
                                lane: h,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === d ? (u = d = p, s = f) : d = d.next = p, o |= h;
                            if (null === (l = l.next)) {
                                if (null === (l = i.shared.pending)) break;
                                l = (h = l).next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
                            }
                        }
                        if (null === d && (s = f), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = d, null !== (t = i.shared.interleaved)) {
                            i = t;
                            do o |= i.lane, i = i.next; while (i !== t)
                        } else null === a && (i.shared.lanes = 0);
                        i9 |= o, e.lanes = o, e.memoizedState = f
                    }
                }

                function t7(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                i = r.callback;
                            if (null !== i) {
                                if (r.callback = null, r = n, "function" != typeof i) throw Error(d(191, i));
                                i.call(r)
                            }
                        }
                }
                var ne = (new s.Component).refs;

                function nt(e, t, n, r) {
                    t = e.memoizedState, n = null == (n = n(r, t)) ? t : c({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var nn = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && w(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ac(),
                            i = ad(e),
                            a = t8(r, i);
                        a.payload = t, null != n && (a.callback = n), t3(e, a), null !== (t = af(e, i, r)) && t4(t, e, i)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ac(),
                            i = ad(e),
                            a = t8(r, i);
                        a.tag = 1, a.payload = t, null != n && (a.callback = n), t3(e, a), null !== (t = af(e, i, r)) && t4(t, e, i)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = ac(),
                            r = ad(e),
                            i = t8(n, r);
                        i.tag = 2, null != t && (i.callback = t), t3(e, i), null !== (t = af(e, r, n)) && t4(t, e, r)
                    }
                };

                function nr(e, t, n, r, i, a, o) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || !tU(n, r) || !tU(i, a)
                }

                function ni(e, t, n) {
                    var r = !1,
                        i = tt,
                        a = t.contextType;
                    return "object" == typeof a && null !== a ? a = t$(a) : (i = to(t) ? ti : tn.current, a = (r = null != (r = t.contextTypes)) ? ta(e, i) : tt), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = nn, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function na(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nn.enqueueReplaceState(t, t.state, null)
                }

                function no(e, t, n, r) {
                    var i = e.stateNode;
                    i.props = n, i.state = e.memoizedState, i.refs = ne, t9(e);
                    var a = t.contextType;
                    "object" == typeof a && null !== a ? i.context = t$(a) : (a = to(t) ? ti : tn.current, i.context = ta(e, a)), i.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (nt(e, t, a, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && nn.enqueueReplaceState(i, i.state, null), t5(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4194308)
                }
                var nl = [],
                    ns = 0,
                    nu = null,
                    nc = 0,
                    nd = [],
                    nf = 0,
                    nh = null,
                    np = 1,
                    nm = "";

                function nA(e, t) {
                    nl[ns++] = nc, nl[ns++] = nu, nu = e, nc = t
                }

                function ng(e, t, n) {
                    nd[nf++] = np, nd[nf++] = nm, nd[nf++] = nh, nh = e;
                    var r = np;
                    e = nm;
                    var i = 32 - tf(r) - 1;
                    r &= ~(1 << i), n += 1;
                    var a = 32 - tf(t) + i;
                    if (30 < a) {
                        var o = i - i % 5;
                        a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, np = 1 << 32 - tf(t) + i | n << i | r, nm = a + e
                    } else np = 1 << a | n << i | r, nm = e
                }

                function nB(e) {
                    null !== e.return && (nA(e, 1), ng(e, 1, 0))
                }

                function nC(e) {
                    for (; e === nu;) nu = nl[--ns], nl[ns] = null, nc = nl[--ns], nl[ns] = null;
                    for (; e === nh;) nh = nd[--nf], nd[nf] = null, nm = nd[--nf], nd[nf] = null, np = nd[--nf], nd[nf] = null
                }
                var nv = null,
                    nb = null,
                    ny = !1,
                    nE = !1,
                    nM = null;

                function nS(e, t) {
                    var n = ak(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function nF(e, t) {
                    switch (e.tag) {
                        case 5:
                            return null !== (t = eH(t, e.type, e.pendingProps)) && (e.stateNode = t, nv = e, nb = eU(t), !0);
                        case 6:
                            return null !== (t = eL(t, e.pendingProps)) && (e.stateNode = t, nv = e, nb = null, !0);
                        case 13:
                            if (null !== (t = eO(t))) {
                                var n = null !== nh ? {
                                    id: np,
                                    overflow: nm
                                } : null;
                                return e.memoizedState = {
                                    dehydrated: t,
                                    treeContext: n,
                                    retryLane: 1073741824
                                }, (n = ak(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nv = e, nb = null, !0
                            }
                            return !1;
                        default:
                            return !1
                    }
                }

                function nI(e) {
                    return 0 != (1 & e.mode) && 0 == (128 & e.flags)
                }

                function nR(e) {
                    if (ny) {
                        var t = nb;
                        if (t) {
                            var n = t;
                            if (!nF(e, t)) {
                                if (nI(e)) throw Error(d(418));
                                t = eN(n);
                                var r = nv;
                                t && nF(e, t) ? nS(r, n) : (e.flags = -4097 & e.flags | 2, ny = !1, nv = e)
                            }
                        } else {
                            if (nI(e)) throw Error(d(418));
                            e.flags = -4097 & e.flags | 2, ny = !1, nv = e
                        }
                    }
                }

                function nw(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    nv = e
                }

                function nT(e) {
                    if (!q || e !== nv) return !1;
                    if (!ny) return nw(e), ny = !0, !1;
                    if (3 !== e.tag && (5 !== e.tag || e$(e.type) && !Q(e.type, e.memoizedProps))) {
                        var t = nb;
                        if (t) {
                            if (nI(e)) {
                                for (e = nb; e;) e = eN(e);
                                throw Error(d(418))
                            }
                            for (; t;) nS(e, t), t = eN(t)
                        }
                    }
                    if (nw(e), 13 === e.tag) {
                        if (!q) throw Error(d(316));
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(d(317));
                        nb = eY(e)
                    } else nb = nv ? eN(e.stateNode) : null;
                    return !0
                }

                function nD() {
                    q && (nb = nv = null, nE = ny = !1)
                }

                function nx(e) {
                    null === nM ? nM = [e] : nM.push(e)
                }

                function nG(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(d(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(d(147, e));
                            var i = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                                var t = i.refs;
                                t === ne && (t = i.refs = {}), null === e ? delete t[a] : t[a] = e
                            })._stringRef = a, t)
                        }
                        if ("string" != typeof e) throw Error(d(284));
                        if (!n._owner) throw Error(d(290, e))
                    }
                    return e
                }

                function nP(e, t) {
                    throw Error(d(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function nH(e) {
                    return (0, e._init)(e._payload)
                }

                function nL(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function i(e, t) {
                        return (e = aJ(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return (t.index = r, e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function o(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = aQ(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        var a = n.type;
                        return a === m ? c(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === M && nH(a) === t.type) ? ((r = i(t, n.props)).ref = nG(e, t, n), r.return = e, r) : ((r = aN(n.type, n.key, n.props, null, e.mode, r)).ref = nG(e, t, n), r.return = e, r)
                    }

                    function u(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = aj(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
                    }

                    function c(e, t, n, r, a) {
                        return null === t || 7 !== t.tag ? ((t = aU(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = aQ("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return (n = aN(t.type, t.key, t.props, null, e.mode, n)).ref = nG(e, null, t), n.return = e, n;
                                case p:
                                    return (t = aj(t, e.mode, n)).return = e, t;
                                case M:
                                    var r = t._init;
                                    return f(e, r(t._payload), n)
                            }
                            if (P(t) || I(t)) return (t = aU(t, e.mode, n, null)).return = e, t;
                            nP(e, t)
                        }
                        return null
                    }

                    function A(e, t, n, r) {
                        var i = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case h:
                                    return n.key === i ? s(e, t, n, r) : null;
                                case p:
                                    return n.key === i ? u(e, t, n, r) : null;
                                case M:
                                    return A(e, t, (i = n._init)(n._payload), r)
                            }
                            if (P(n) || I(n)) return null !== i ? null : c(e, t, n, r, null);
                            nP(e, n)
                        }
                        return null
                    }

                    function g(e, t, n, r, i) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case h:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case p:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case M:
                                    return g(e, t, n, (0, r._init)(r._payload), i)
                            }
                            if (P(r) || I(r)) return c(t, e = e.get(n) || null, r, i, null);
                            nP(t, r)
                        }
                        return null
                    }
                    return function l(s, u, c, B) {
                        if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                            switch (c.$$typeof) {
                                case h:
                                    e: {
                                        for (var C = c.key, v = u; null !== v;) {
                                            if (v.key === C) {
                                                if ((C = c.type) === m) {
                                                    if (7 === v.tag) {
                                                        n(s, v.sibling), (u = i(v, c.props.children)).return = s, s = u;
                                                        break e
                                                    }
                                                } else if (v.elementType === C || "object" == typeof C && null !== C && C.$$typeof === M && nH(C) === v.type) {
                                                    n(s, v.sibling), (u = i(v, c.props)).ref = nG(s, v, c), u.return = s, s = u;
                                                    break e
                                                }
                                                n(s, v);
                                                break
                                            }
                                            t(s, v), v = v.sibling
                                        }
                                        c.type === m ? ((u = aU(c.props.children, s.mode, B, c.key)).return = s, s = u) : ((B = aN(c.type, c.key, c.props, null, s.mode, B)).ref = nG(s, u, c), B.return = s, s = B)
                                    }
                                    return o(s);
                                case p:
                                    e: {
                                        for (v = c.key; null !== u;) {
                                            if (u.key === v) {
                                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                                    n(s, u.sibling), (u = i(u, c.children || [])).return = s, s = u;
                                                    break e
                                                }
                                                n(s, u);
                                                break
                                            }
                                            t(s, u), u = u.sibling
                                        }(u = aj(c, s.mode, B)).return = s,
                                        s = u
                                    }
                                    return o(s);
                                case M:
                                    return l(s, u, (v = c._init)(c._payload), B)
                            }
                            if (P(c)) return function(i, o, l, s) {
                                for (var u = null, c = null, d = o, h = o = 0, p = null; null !== d && h < l.length; h++) {
                                    d.index > h ? (p = d, d = null) : p = d.sibling;
                                    var m = A(i, d, l[h], s);
                                    if (null === m) {
                                        null === d && (d = p);
                                        break
                                    }
                                    e && d && null === m.alternate && t(i, d), o = a(m, o, h), null === c ? u = m : c.sibling = m, c = m, d = p
                                }
                                if (h === l.length) return n(i, d), ny && nA(i, h), u;
                                if (null === d) {
                                    for (; h < l.length; h++) null !== (d = f(i, l[h], s)) && (o = a(d, o, h), null === c ? u = d : c.sibling = d, c = d);
                                    return ny && nA(i, h), u
                                }
                                for (d = r(i, d); h < l.length; h++) null !== (p = g(d, i, h, l[h], s)) && (e && null !== p.alternate && d.delete(null === p.key ? h : p.key), o = a(p, o, h), null === c ? u = p : c.sibling = p, c = p);
                                return e && d.forEach(function(e) {
                                    return t(i, e)
                                }), ny && nA(i, h), u
                            }(s, u, c, B);
                            if (I(c)) return function(i, o, l, s) {
                                var u = I(l);
                                if ("function" != typeof u) throw Error(d(150));
                                if (null == (l = u.call(l))) throw Error(d(151));
                                for (var c = u = null, h = o, p = o = 0, m = null, B = l.next(); null !== h && !B.done; p++, B = l.next()) {
                                    h.index > p ? (m = h, h = null) : m = h.sibling;
                                    var C = A(i, h, B.value, s);
                                    if (null === C) {
                                        null === h && (h = m);
                                        break
                                    }
                                    e && h && null === C.alternate && t(i, h), o = a(C, o, p), null === c ? u = C : c.sibling = C, c = C, h = m
                                }
                                if (B.done) return n(i, h), ny && nA(i, p), u;
                                if (null === h) {
                                    for (; !B.done; p++, B = l.next()) null !== (B = f(i, B.value, s)) && (o = a(B, o, p), null === c ? u = B : c.sibling = B, c = B);
                                    return ny && nA(i, p), u
                                }
                                for (h = r(i, h); !B.done; p++, B = l.next()) null !== (B = g(h, i, p, B.value, s)) && (e && null !== B.alternate && h.delete(null === B.key ? p : B.key), o = a(B, o, p), null === c ? u = B : c.sibling = B, c = B);
                                return e && h.forEach(function(e) {
                                    return t(i, e)
                                }), ny && nA(i, p), u
                            }(s, u, c, B);
                            nP(s, c)
                        }
                        return "string" == typeof c && "" !== c || "number" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (u = i(u, c)).return = s, s = u) : (n(s, u), (u = aQ(c, s.mode, B)).return = s, s = u), o(s)) : n(s, u)
                    }
                }
                var nO = nL(!0),
                    nk = nL(!1),
                    n_ = {},
                    nJ = e5(n_),
                    nN = e5(n_),
                    nU = e5(n_);

                function nK(e) {
                    if (e === n_) throw Error(d(174));
                    return e
                }

                function nQ(e, t) {
                    te(nU, t), te(nN, e), te(nJ, n_), e = L(t), e7(nJ), te(nJ, e)
                }

                function nj() {
                    e7(nJ), e7(nN), e7(nU)
                }

                function nz(e) {
                    var t = nK(nU.current),
                        n = nK(nJ.current);
                    t = O(n, e.type, t), n !== t && (te(nN, e), te(nJ, t))
                }

                function nX(e) {
                    nN.current === e && (e7(nJ), e7(nN))
                }
                var nY = e5(0);

                function nW(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || ek(n) || e_(n))) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 != (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var nZ = [];

                function nV() {
                    for (var e = 0; e < nZ.length; e++) {
                        var t = nZ[e];
                        W ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null
                    }
                    nZ.length = 0
                }
                var nq = f.ReactCurrentDispatcher,
                    n$ = f.ReactCurrentBatchConfig,
                    n0 = 0,
                    n1 = null,
                    n9 = null,
                    n2 = null,
                    n8 = !1,
                    n3 = !1,
                    n4 = 0,
                    n6 = 0;

                function n5() {
                    throw Error(d(321))
                }

                function n7(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!tL(e[n], t[n])) return !1;
                    return !0
                }

                function re(e, t, n, r, i, a) {
                    if (n0 = a, n1 = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nq.current = null === e || null === e.memoizedState ? rL : rO, e = n(r, i), n3) {
                        a = 0;
                        do {
                            if (n3 = !1, n4 = 0, 25 <= a) throw Error(d(301));
                            a += 1, n2 = n9 = null, t.updateQueue = null, nq.current = rk, e = n(r, i)
                        } while (n3)
                    }
                    if (nq.current = rH, t = null !== n9 && null !== n9.next, n0 = 0, n2 = n9 = n1 = null, n8 = !1, t) throw Error(d(300));
                    return e
                }

                function rt() {
                    var e = 0 !== n4;
                    return n4 = 0, e
                }

                function rn() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === n2 ? n1.memoizedState = n2 = e : n2 = n2.next = e, n2
                }

                function rr() {
                    if (null === n9) {
                        var e = n1.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = n9.next;
                    var t = null === n2 ? n1.memoizedState : n2.next;
                    if (null !== t) n2 = t, n9 = e;
                    else {
                        if (null === e) throw Error(d(310));
                        e = {
                            memoizedState: (n9 = e).memoizedState,
                            baseState: n9.baseState,
                            baseQueue: n9.baseQueue,
                            queue: n9.queue,
                            next: null
                        }, null === n2 ? n1.memoizedState = n2 = e : n2 = n2.next = e
                    }
                    return n2
                }

                function ri(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function ra(e) {
                    var t = rr(),
                        n = t.queue;
                    if (null === n) throw Error(d(311));
                    n.lastRenderedReducer = e;
                    var r = n9,
                        i = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== i) {
                            var o = i.next;
                            i.next = a.next, a.next = o
                        }
                        r.baseQueue = i = a, n.pending = null
                    }
                    if (null !== i) {
                        a = i.next, r = r.baseState;
                        var l = o = null,
                            s = null,
                            u = a;
                        do {
                            var c = u.lane;
                            if ((n0 & c) === c) null !== s && (s = s.next = {
                                lane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                            else {
                                var f = {
                                    lane: c,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === s ? (l = s = f, o = r) : s = s.next = f, n1.lanes |= c, i9 |= c
                            }
                            u = u.next
                        } while (null !== u && u !== a);
                        null === s ? o = r : s.next = l, tL(r, t.memoizedState) || (r$ = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        i = e;
                        do a = i.lane, n1.lanes |= a, i9 |= a, i = i.next; while (i !== e)
                    } else null === i && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function ro(e) {
                    var t = rr(),
                        n = t.queue;
                    if (null === n) throw Error(d(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        i = n.pending,
                        a = t.memoizedState;
                    if (null !== i) {
                        n.pending = null;
                        var o = i = i.next;
                        do a = e(a, o.action), o = o.next; while (o !== i);
                        tL(a, t.memoizedState) || (r$ = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function rl() {}

                function rs(e, t) {
                    var n = n1,
                        r = rr(),
                        i = t(),
                        a = !tL(r.memoizedState, i);
                    if (a && (r.memoizedState = i, r$ = !0), r = r.queue, rC(rd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== n2 && 1 & n2.memoizedState.tag) {
                        if (n.flags |= 2048, rp(9, rc.bind(null, n, r, i, t), void 0, null), null === iW) throw Error(d(349));
                        0 != (30 & n0) || ru(n, t, i)
                    }
                    return i
                }

                function ru(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = n1.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n1.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function rc(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, rf(t) && af(e, 1, -1)
                }

                function rd(e, t, n) {
                    return n(function() {
                        rf(t) && af(e, 1, -1)
                    })
                }

                function rf(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !tL(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function rh(e) {
                    var t = rn();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: ri,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = rT.bind(null, n1, e), [t.memoizedState, e]
                }

                function rp(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = n1.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n1.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function rm() {
                    return rr().memoizedState
                }

                function rA(e, t, n, r) {
                    var i = rn();
                    n1.flags |= e, i.memoizedState = rp(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function rg(e, t, n, r) {
                    var i = rr();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== n9) {
                        var o = n9.memoizedState;
                        if (a = o.destroy, null !== r && n7(r, o.deps)) {
                            i.memoizedState = rp(t, n, a, r);
                            return
                        }
                    }
                    n1.flags |= e, i.memoizedState = rp(1 | t, n, a, r)
                }

                function rB(e, t) {
                    return rA(8390656, 8, e, t)
                }

                function rC(e, t) {
                    return rg(2048, 8, e, t)
                }

                function rv(e, t) {
                    return rg(4, 2, e, t)
                }

                function rb(e, t) {
                    return rg(4, 4, e, t)
                }

                function ry(e, t) {
                    return "function" == typeof t ? (t(e = e()), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function rE(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, rg(4, 4, ry.bind(null, t, e), n)
                }

                function rM() {}

                function rS(e, t) {
                    var n = rr();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && n7(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function rF(e, t) {
                    var n = rr();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && n7(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function rI(e, t) {
                    var n = tE;
                    tE = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = n$.transition;
                    n$.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        tE = n, n$.transition = r
                    }
                }

                function rR() {
                    return rr().memoizedState
                }

                function rw(e, t, n) {
                    var r = ad(e);
                    n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, rD(e) ? rx(t, n) : (rG(e, t, n), null !== (e = af(e, r, n = ac())) && rP(e, t, r))
                }

                function rT(e, t, n) {
                    var r = ad(e),
                        i = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rD(e)) rx(t, i);
                    else {
                        rG(e, t, i);
                        var a = e.alternate;
                        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                l = a(o, n);
                            if (i.hasEagerState = !0, i.eagerState = l, tL(l, o)) return
                        } catch (e) {} finally {}
                        null !== (e = af(e, r, n = ac())) && rP(e, t, r)
                    }
                }

                function rD(e) {
                    var t = e.alternate;
                    return e === n1 || null !== t && t === n1
                }

                function rx(e, t) {
                    n3 = n8 = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function rG(e, t, n) {
                    null !== iW && 0 != (1 & e.mode) && 0 == (2 & iY) ? (null === (e = t.interleaved) ? (n.next = n, null === t0 ? t0 = [t] : t0.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next, e.next = n), t.pending = n)
                }

                function rP(e, t, n) {
                    if (0 != (4194240 & n)) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n)
                    }
                }
                var rH = {
                        readContext: t$,
                        useCallback: n5,
                        useContext: n5,
                        useEffect: n5,
                        useImperativeHandle: n5,
                        useInsertionEffect: n5,
                        useLayoutEffect: n5,
                        useMemo: n5,
                        useReducer: n5,
                        useRef: n5,
                        useState: n5,
                        useDebugValue: n5,
                        useDeferredValue: n5,
                        useTransition: n5,
                        useMutableSource: n5,
                        useSyncExternalStore: n5,
                        useId: n5,
                        unstable_isNewReconciler: !1
                    },
                    rL = {
                        readContext: t$,
                        useCallback: function(e, t) {
                            return rn().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: t$,
                        useEffect: rB,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, rA(4194308, 4, ry.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return rA(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return rA(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = rn();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = rn();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = rw.bind(null, n1, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, rn().memoizedState = e
                        },
                        useState: rh,
                        useDebugValue: rM,
                        useDeferredValue: function(e) {
                            var t = rh(e),
                                n = t[0],
                                r = t[1];
                            return rB(function() {
                                var t = n$.transition;
                                n$.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n$.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            var e = rh(!1),
                                t = e[0];
                            return e = rI.bind(null, e[1]), rn().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = n1,
                                i = rn();
                            if (ny) {
                                if (void 0 === n) throw Error(d(407));
                                n = n()
                            } else {
                                if (n = t(), null === iW) throw Error(d(349));
                                0 != (30 & n0) || ru(r, t, n)
                            }
                            i.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return i.queue = a, rB(rd.bind(null, r, a, e), [e]), r.flags |= 2048, rp(9, rc.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = rn(),
                                t = iW.identifierPrefix;
                            if (ny) {
                                var n = nm,
                                    r = np;
                                t = ":" + t + "R" + (n = (r & ~(1 << 32 - tf(r) - 1)).toString(32) + n), 0 < (n = n4++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = n6++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    rO = {
                        readContext: t$,
                        useCallback: rS,
                        useContext: t$,
                        useEffect: rC,
                        useImperativeHandle: rE,
                        useInsertionEffect: rv,
                        useLayoutEffect: rb,
                        useMemo: rF,
                        useReducer: ra,
                        useRef: rm,
                        useState: function() {
                            return ra(ri)
                        },
                        useDebugValue: rM,
                        useDeferredValue: function(e) {
                            var t = ra(ri),
                                n = t[0],
                                r = t[1];
                            return rC(function() {
                                var t = n$.transition;
                                n$.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n$.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [ra(ri)[0], rr().memoizedState]
                        },
                        useMutableSource: rl,
                        useSyncExternalStore: rs,
                        useId: rR,
                        unstable_isNewReconciler: !1
                    },
                    rk = {
                        readContext: t$,
                        useCallback: rS,
                        useContext: t$,
                        useEffect: rC,
                        useImperativeHandle: rE,
                        useInsertionEffect: rv,
                        useLayoutEffect: rb,
                        useMemo: rF,
                        useReducer: ro,
                        useRef: rm,
                        useState: function() {
                            return ro(ri)
                        },
                        useDebugValue: rM,
                        useDeferredValue: function(e) {
                            var t = ro(ri),
                                n = t[0],
                                r = t[1];
                            return rC(function() {
                                var t = n$.transition;
                                n$.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n$.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [ro(ri)[0], rr().memoizedState]
                        },
                        useMutableSource: rl,
                        useSyncExternalStore: rs,
                        useId: rR,
                        unstable_isNewReconciler: !1
                    };

                function r_(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do n += function(e) {
                            switch (e.tag) {
                                case 5:
                                    return e9(e.type);
                                case 16:
                                    return e9("Lazy");
                                case 13:
                                    return e9("Suspense");
                                case 19:
                                    return e9("SuspenseList");
                                case 0:
                                case 2:
                                case 15:
                                    return e = e8(e.type, !1);
                                case 11:
                                    return e = e8(e.type.render, !1);
                                case 1:
                                    return e = e8(e.type, !0);
                                default:
                                    return ""
                            }
                        }(r), r = r.return; while (r);
                        var i = n
                    } catch (e) {
                        i = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: i
                    }
                }

                function rJ(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        })
                    }
                }
                var rN = "function" == typeof WeakMap ? WeakMap : Map;

                function rU(e, t, n) {
                    (n = t8(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        ae || (ae = !0, at = r), rJ(e, t)
                    }, n
                }

                function rK(e, t, n) {
                    (n = t8(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var i = t.value;
                        n.payload = function() {
                            return r(i)
                        }, n.callback = function() {
                            rJ(e, t)
                        }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                        rJ(e, t), "function" != typeof r && (null === an ? an = new Set([this]) : an.add(this));
                        var n = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }

                function rQ(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new rN;
                        var i = new Set;
                        r.set(t, i)
                    } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
                    i.has(n) || (i.add(n), e = aG.bind(null, e, t, n), t.then(e, e))
                }

                function rj(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function rz(e, t, n, r, i) {
                    return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = t8(-1, 1)).tag = 2, t3(n, t))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
                }

                function rX(e) {
                    e.flags |= 4
                }

                function rY(e, t) {
                    if (null !== e && e.child === t.child) return !0;
                    if (0 != (16 & t.flags)) return !1;
                    for (e = t.child; null !== e;) {
                        if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags)) return !1;
                        e = e.sibling
                    }
                    return !0
                }
                if (Z) t = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) N(e, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, r = function() {}, i = function(e, t, n, r, i) {
                    (e = e.memoizedProps) !== r && (n = K(t.stateNode, n, e, r, i, nK(nJ.current)), (t.updateQueue = n) && rX(t))
                }, a = function(e, t, n, r) {
                    n !== r && rX(t)
                };
                else if (V) {
                    t = function(e, n, r, i) {
                        for (var a = n.child; null !== a;) {
                            if (5 === a.tag) {
                                var o = a.stateNode;
                                r && i && (o = eG(o, a.type, a.memoizedProps, a)), N(e, o)
                            } else if (6 === a.tag) o = a.stateNode, r && i && (o = eP(o, a.memoizedProps, a)), N(e, o);
                            else if (4 !== a.tag) {
                                if (22 === a.tag && null !== a.memoizedState) null !== (o = a.child) && (o.return = a), t(e, a, !0, !0);
                                else if (null !== a.child) {
                                    a.child.return = a, a = a.child;
                                    continue
                                }
                            }
                            if (a === n) break;
                            for (; null === a.sibling;) {
                                if (null === a.return || a.return === n) return;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                    };
                    var rW = function(e, t, n, r) {
                        for (var i = t.child; null !== i;) {
                            if (5 === i.tag) {
                                var a = i.stateNode;
                                n && r && (a = eG(a, i.type, i.memoizedProps, i)), eT(e, a)
                            } else if (6 === i.tag) a = i.stateNode, n && r && (a = eP(a, i.memoizedProps, i)), eT(e, a);
                            else if (4 !== i.tag) {
                                if (22 === i.tag && null !== i.memoizedState) null !== (a = i.child) && (a.return = i), rW(e, i, !0, !0);
                                else if (null !== i.child) {
                                    i.child.return = i, i = i.child;
                                    continue
                                }
                            }
                            if (i === t) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === t) return;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                    };
                    r = function(e, t) {
                        var n = t.stateNode;
                        if (!rY(e, t)) {
                            var r = ew(e = n.containerInfo);
                            rW(r, t, !1, !1), n.pendingChildren = r, rX(t), eD(e, r)
                        }
                    }, i = function(e, n, r, i, a) {
                        var o = e.stateNode,
                            l = e.memoizedProps;
                        if ((e = rY(e, n)) && l === i) n.stateNode = o;
                        else {
                            var s = n.stateNode,
                                u = nK(nJ.current),
                                c = null;
                            l !== i && (c = K(s, r, l, i, a, u)), e && null === c ? n.stateNode = o : (U(o = eR(o, c, r, l, i, n, e, s), r, i, a, u) && rX(n), n.stateNode = o, e ? rX(n) : t(o, n, !1, !1))
                        }
                    }, a = function(e, t, n, r) {
                        n !== r ? (e = nK(nU.current), n = nK(nJ.current), t.stateNode = j(r, e, n, t), rX(t)) : t.stateNode = e.stateNode
                    }
                } else r = function() {}, i = function() {}, a = function() {};

                function rZ(e, t) {
                    if (!ny) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function rV(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
                    else
                        for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }
                var rq = f.ReactCurrentOwner,
                    r$ = !1;

                function r0(e, t, n, r) {
                    t.child = null === e ? nk(t, null, n, r) : nO(t, e.child, n, r)
                }

                function r1(e, t, n, r, i) {
                    n = n.render;
                    var a = t.ref;
                    return (tq(t, i), r = re(e, t, n, r, a, i), n = rt(), null === e || r$) ? (ny && n && nB(t), t.flags |= 1, r0(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ic(e, t, i))
                }

                function r9(e, t, n, r, i) {
                    if (null === e) {
                        var a = n.type;
                        return "function" != typeof a || a_(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = aN(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, r2(e, t, a, r, i))
                    }
                    if (a = e.child, 0 == (e.lanes & i)) {
                        var o = a.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : tU)(o, r) && e.ref === t.ref) return ic(e, t, i)
                    }
                    return t.flags |= 1, (e = aJ(a, r)).ref = t.ref, e.return = t, t.child = e
                }

                function r2(e, t, n, r, i) {
                    if (null !== e && tU(e.memoizedProps, r) && e.ref === t.ref) {
                        if (r$ = !1, 0 == (e.lanes & i)) return t.lanes = e.lanes, ic(e, t, i);
                        0 != (131072 & e.flags) && (r$ = !0)
                    }
                    return r4(e, t, n, r, i)
                }

                function r8(e, t, n) {
                    var r = t.pendingProps,
                        i = r.children,
                        a = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (0 == (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, te(i$, iq), iq |= n;
                        else {
                            if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null
                            }, t.updateQueue = null, te(i$, iq), iq |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null
                            }, r = null !== a ? a.baseLanes : n, te(i$, iq), iq |= r
                        }
                    } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, te(i$, iq), iq |= r;
                    return r0(e, t, i, n), t.child
                }

                function r3(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function r4(e, t, n, r, i) {
                    var a = to(n) ? ti : tn.current;
                    return (a = ta(t, a), tq(t, i), n = re(e, t, n, r, a, i), r = rt(), null === e || r$) ? (ny && r && nB(t), t.flags |= 1, r0(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ic(e, t, i))
                }

                function r6(e, t, n, r, i) {
                    if (to(n)) {
                        var a = !0;
                        tc(t)
                    } else a = !1;
                    if (tq(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), ni(t, n, r), no(t, n, r, i), r = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            l = t.memoizedProps;
                        o.props = l;
                        var s = o.context,
                            u = n.contextType;
                        u = "object" == typeof u && null !== u ? t$(u) : ta(t, u = to(n) ? ti : tn.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
                        d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== r || s !== u) && na(t, o, r, u), t1 = !1;
                        var f = t.memoizedState;
                        o.state = f, t5(t, r, o, i), s = t.memoizedState, l !== r || f !== s || tr.current || t1 ? ("function" == typeof c && (nt(t, n, c, r), s = t.memoizedState), (l = t1 || nr(t, n, l, r, f, s, u)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = l) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        o = t.stateNode, t2(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : tK(t.type, l), o.props = u, d = t.pendingProps, f = o.context, s = "object" == typeof(s = n.contextType) && null !== s ? t$(s) : ta(t, s = to(n) ? ti : tn.current);
                        var h = n.getDerivedStateFromProps;
                        (c = "function" == typeof h || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== d || f !== s) && na(t, o, r, s), t1 = !1, f = t.memoizedState, o.state = f, t5(t, r, o, i);
                        var p = t.memoizedState;
                        l !== d || f !== p || tr.current || t1 ? ("function" == typeof h && (nt(t, n, h, r), p = t.memoizedState), (u = t1 || nr(t, n, u, r, f, p, s) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, s), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = s, r = u) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return r5(e, t, n, r, a, i)
                }

                function r5(e, t, n, r, i, a) {
                    r3(e, t);
                    var o = 0 != (128 & t.flags);
                    if (!r && !o) return i && td(t, n, !1), ic(e, t, a);
                    r = t.stateNode, rq.current = t;
                    var l = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && o ? (t.child = nO(t, e.child, null, a), t.child = nO(t, null, l, a)) : r0(e, t, l, a), t.memoizedState = r.state, i && td(t, n, !0), t.child
                }

                function r7(e) {
                    var t = e.stateNode;
                    t.pendingContext ? ts(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ts(e, t.context, !1), nQ(e, t.containerInfo)
                }

                function ie(e, t, n, r, i) {
                    return nD(), nx(i), t.flags |= 256, r0(e, t, n, r), t.child
                }
                var it = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function ir(e) {
                    return {
                        baseLanes: e,
                        cachePool: null
                    }
                }

                function ii(e, t, n) {
                    var r, i, a, o, l, s, u, c, f, h, p, m, A, g, B = t.pendingProps,
                        C = nY.current,
                        v = !1,
                        b = 0 != (128 & t.flags);
                    if ((g = b) || (g = (null === e || null !== e.memoizedState) && 0 != (2 & C)), g ? (v = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (C |= 1), te(nY, 1 & C), null === e) return (nR(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated)) ? (0 == (1 & t.mode) ? t.lanes = 1 : e_(e) ? t.lanes = 8 : t.lanes = 1073741824, null) : (C = B.children, e = B.fallback, v ? (B = t.mode, v = t.child, C = {
                        mode: "hidden",
                        children: C
                    }, 0 == (1 & B) && null !== v ? (v.childLanes = 0, v.pendingProps = C) : v = aK(C, B, 0, null), e = aU(e, B, n, null), v.return = t, e.return = t, v.sibling = e, t.child = v, t.child.memoizedState = ir(n), t.memoizedState = it, e) : ia(t, C));
                    if (null !== (C = e.memoizedState) && null !== (g = C.dehydrated)) {
                        if (b) return 256 & t.flags ? (t.flags &= -257, io(e, t, n, Error(d(422)))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (v = B.fallback, C = t.mode, B = aK({
                            mode: "visible",
                            children: B.children
                        }, C, 0, null), v = aU(v, C, n, null), v.flags |= 2, B.return = t, v.return = t, B.sibling = v, t.child = B, 0 != (1 & t.mode) && nO(t, e.child, null, n), t.child.memoizedState = ir(n), t.memoizedState = it, v);
                        if (0 == (1 & t.mode)) t = io(e, t, n, null);
                        else if (e_(g)) t = io(e, t, n, Error(d(419)));
                        else if (B = 0 != (n & e.childLanes), r$ || B) {
                            if (null !== (B = iW)) {
                                switch (n & -n) {
                                    case 4:
                                        v = 2;
                                        break;
                                    case 16:
                                        v = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        v = 32;
                                        break;
                                    case 536870912:
                                        v = 268435456;
                                        break;
                                    default:
                                        v = 0
                                }
                                0 !== (B = 0 != (v & (B.suspendedLanes | n)) ? 0 : v) && B !== C.retryLane && (C.retryLane = B, af(e, B, -1))
                            }
                            aS(), t = io(e, t, n, Error(d(421)))
                        } else ek(g) ? (t.flags |= 128, t.child = e.child, eJ(g, t = aH.bind(null, e)), t = null) : (n = C.treeContext, q && (nb = eQ(g), nv = t, ny = !0, nM = null, nE = !1, null !== n && (nd[nf++] = np, nd[nf++] = nm, nd[nf++] = nh, np = n.id, nm = n.overflow, nh = t)), t = ia(t, t.pendingProps.children), t.flags |= 4096);
                        return t
                    }
                    return v ? (r = e, i = t, a = B.children, o = B.fallback, l = n, s = i.mode, u = (r = r.child).sibling, c = {
                        mode: "hidden",
                        children: a
                    }, 0 == (1 & s) && i.child !== r ? ((a = i.child).childLanes = 0, a.pendingProps = c, i.deletions = null) : (a = aJ(r, c)).subtreeFlags = 14680064 & r.subtreeFlags, null !== u ? o = aJ(u, o) : (o = aU(o, s, l, null), o.flags |= 2), o.return = i, a.return = i, a.sibling = o, i.child = a, B = o, v = t.child, C = e.child.memoizedState, v.memoizedState = null === C ? ir(n) : {
                        baseLanes: C.baseLanes | n,
                        cachePool: null
                    }, v.childLanes = e.childLanes & ~n, t.memoizedState = it, B) : (f = e, h = t, p = B.children, m = n, A = f.child, f = A.sibling, p = aJ(A, {
                        mode: "visible",
                        children: p
                    }), 0 == (1 & h.mode) && (p.lanes = m), p.return = h, p.sibling = null, null !== f && (null === (m = h.deletions) ? (h.deletions = [f], h.flags |= 16) : m.push(f)), n = h.child = p, t.memoizedState = null, n)
                }

                function ia(e, t) {
                    return (t = aK({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function io(e, t, n, r) {
                    return null !== r && nx(r), nO(t, e.child, null, n), e = ia(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
                }

                function il(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), tV(e.return, t, n)
                }

                function is(e, t, n, r, i) {
                    var a = e.memoizedState;
                    null === a ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: i
                    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
                }

                function iu(e, t, n) {
                    var r = t.pendingProps,
                        i = r.revealOrder,
                        a = r.tail;
                    if (r0(e, t, r.children, n), 0 != (2 & (r = nY.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && il(e, n, t);
                            else if (19 === e.tag) il(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (te(nY, r), 0 == (1 & t.mode)) t.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (i = null, n = t.child; null !== n;) null !== (e = n.alternate) && null === nW(e) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), is(t, !1, i, n, a);
                            break;
                        case "backwards":
                            for (n = null, i = t.child, t.child = null; null !== i;) {
                                if (null !== (e = i.alternate) && null === nW(e)) {
                                    t.child = i;
                                    break
                                }
                                e = i.sibling, i.sibling = n, n = i, i = e
                            }
                            is(t, !0, n, null, a);
                            break;
                        case "together":
                            is(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function ic(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), i9 |= t.lanes, 0 == (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(d(153));
                    if (null !== t.child) {
                        for (n = aJ(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = aJ(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                var id = !1,
                    ih = !1,
                    ip = "function" == typeof WeakSet ? WeakSet : Set,
                    im = null;

                function iA(e, t) {
                    var n = e.ref;
                    if (null !== n) {
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            ax(e, t, n)
                        } else n.current = null
                    }
                }

                function ig(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        ax(e, t, n)
                    }
                }
                var iB = !1;

                function iC(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var i = r = r.next;
                        do {
                            if ((i.tag & e) === e) {
                                var a = i.destroy;
                                i.destroy = void 0, void 0 !== a && ig(t, n, a)
                            }
                            i = i.next
                        } while (i !== r)
                    }
                }

                function iv(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ib(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e = 5 === e.tag ? H(n) : n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function iy(e, t, n) {
                    if (tH && "function" == typeof tH.onCommitFiberUnmount) try {
                        tH.onCommitFiberUnmount(tP, t)
                    } catch (e) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var r = e = e.next;
                                do {
                                    var i = r,
                                        a = i.destroy;
                                    i = i.tag, void 0 !== a && (0 != (2 & i) ? ig(t, n, a) : 0 != (4 & i) && ig(t, n, a)), r = r.next
                                } while (r !== e)
                            }
                            break;
                        case 1:
                            if (iA(t, n), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (e) {
                                ax(t, n, e)
                            }
                            break;
                        case 5:
                            iA(t, n);
                            break;
                        case 4:
                            Z ? iI(e, t, n) : V && V && (n = ew(t = t.stateNode.containerInfo), ex(t, n))
                    }
                }

                function iE(e, t, n) {
                    for (var r = t;;)
                        if (iy(e, r, n), null === r.child || Z && 4 === r.tag) {
                            if (r === t) break;
                            for (; null === r.sibling;) {
                                if (null === r.return || r.return === t) return;
                                r = r.return
                            }
                            r.sibling.return = r.return, r = r.sibling
                        } else r.child.return = r, r = r.child
                }

                function iM(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function iS(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || iM(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function iF(e) {
                    if (Z) {
                        e: {
                            for (var t = e.return; null !== t;) {
                                if (iM(t)) break e;
                                t = t.return
                            }
                            throw Error(d(160))
                        }
                        var n = t;
                        switch (n.tag) {
                            case 5:
                                t = n.stateNode, 32 & n.flags && (ey(t), n.flags &= -33), n = iS(e),
                                    function e(t, n, r) {
                                        var i = t.tag;
                                        if (5 === i || 6 === i) t = t.stateNode, n ? eB(r, t, n) : eh(r, t);
                                        else if (4 !== i && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            case 3:
                            case 4:
                                t = n.stateNode.containerInfo, n = iS(e),
                                    function e(t, n, r) {
                                        var i = t.tag;
                                        if (5 === i || 6 === i) t = t.stateNode, n ? eC(r, t, n) : ep(r, t);
                                        else if (4 !== i && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            default:
                                throw Error(d(161))
                        }
                    }
                }

                function iI(e, t, n) {
                    for (var r, i, a = t, o = !1;;) {
                        if (!o) {
                            o = a.return;
                            e: for (;;) {
                                if (null === o) throw Error(d(160));
                                switch (r = o.stateNode, o.tag) {
                                    case 5:
                                        i = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        r = r.containerInfo, i = !0;
                                        break e
                                }
                                o = o.return
                            }
                            o = !0
                        }
                        if (5 === a.tag || 6 === a.tag) iE(e, a, n), i ? eb(r, a.stateNode) : ev(r, a.stateNode);
                        else if (18 === a.tag) i ? eq(r, a.stateNode) : eV(r, a.stateNode);
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                r = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (iy(e, a, n), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === t) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === t) return;
                            4 === (a = a.return).tag && (o = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function iR(e, t) {
                    if (Z) {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                iC(3, t, t.return), iv(3, t), iC(5, t, t.return);
                                return;
                            case 1:
                            case 12:
                            case 17:
                                return;
                            case 5:
                                var n = t.stateNode;
                                if (null != n) {
                                    var r = t.memoizedProps;
                                    e = null !== e ? e.memoizedProps : r;
                                    var i = t.type,
                                        a = t.updateQueue;
                                    t.updateQueue = null, null !== a && eg(n, a, i, e, r, t)
                                }
                                return;
                            case 6:
                                if (null === t.stateNode) throw Error(d(162));
                                n = t.memoizedProps, em(t.stateNode, null !== e ? e.memoizedProps : n, n);
                                return;
                            case 3:
                                q && null !== e && e.memoizedState.isDehydrated && eW(t.stateNode.containerInfo);
                                return;
                            case 13:
                            case 19:
                                iw(t);
                                return
                        }
                        throw Error(d(163))
                    }
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            iC(3, t, t.return), iv(3, t), iC(5, t, t.return);
                            return;
                        case 12:
                        case 22:
                        case 23:
                            return;
                        case 13:
                        case 19:
                            iw(t);
                            return;
                        case 3:
                            q && null !== e && e.memoizedState.isDehydrated && eW(t.stateNode.containerInfo)
                    }
                    e: if (V) {
                        switch (t.tag) {
                            case 1:
                            case 5:
                            case 6:
                                break e;
                            case 3:
                            case 4:
                                ex((t = t.stateNode).containerInfo, t.pendingChildren);
                                break e
                        }
                        throw Error(d(163))
                    }
                }

                function iw(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new ip), t.forEach(function(t) {
                            var r = aL.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        })
                    }
                }

                function iT(e) {
                    for (; null !== im;) {
                        var t = im;
                        if (0 != (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 != (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ih || iv(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !ih) {
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var i = t.elementType === t.type ? n.memoizedProps : tK(t.type, n.memoizedProps);
                                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        }
                                        var a = t.updateQueue;
                                        null !== a && t7(t, a, r);
                                        break;
                                    case 3:
                                        var o = t.updateQueue;
                                        if (null !== o) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                    n = H(t.child.stateNode);
                                                    break;
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            t7(t, o, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        null === n && 4 & t.flags && eA(l, t.type, t.memoizedProps, t);
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                        break;
                                    case 13:
                                        if (q && null === t.memoizedState) {
                                            var s = t.alternate;
                                            if (null !== s) {
                                                var u = s.memoizedState;
                                                if (null !== u) {
                                                    var c = u.dehydrated;
                                                    null !== c && eZ(c)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(d(163))
                                }
                                ih || 512 & t.flags && ib(t)
                            } catch (e) {
                                ax(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            im = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, im = n;
                            break
                        }
                        im = t.return
                    }
                }

                function iD(e) {
                    for (; null !== im;) {
                        var t = im;
                        if (t === e) {
                            im = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, im = n;
                            break
                        }
                        im = t.return
                    }
                }

                function ix(e) {
                    for (; null !== im;) {
                        var t = im;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        iv(4, t)
                                    } catch (e) {
                                        ax(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var i = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            ax(t, i, e)
                                        }
                                    }
                                    var a = t.return;
                                    try {
                                        ib(t)
                                    } catch (e) {
                                        ax(t, a, e)
                                    }
                                    break;
                                case 5:
                                    var o = t.return;
                                    try {
                                        ib(t)
                                    } catch (e) {
                                        ax(t, o, e)
                                    }
                            }
                        } catch (e) {
                            ax(t, t.return, e)
                        }
                        if (t === e) {
                            im = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, im = l;
                            break
                        }
                        im = t.return
                    }
                }
                var iG = 0,
                    iP = 1,
                    iH = 2,
                    iL = 3,
                    iO = 4;
                if ("function" == typeof Symbol && Symbol.for) {
                    var ik = Symbol.for;
                    iG = ik("selector.component"), iP = ik("selector.has_pseudo_class"), iH = ik("selector.role"), iL = ik("selector.test_id"), iO = ik("selector.text")
                }

                function i_(e) {
                    var t = $(e);
                    if (null != t) {
                        if ("string" != typeof t.memoizedProps["data-testname"]) throw Error(d(364));
                        return t
                    }
                    if (null === (e = eo(e))) throw Error(d(362));
                    return e.stateNode.current
                }

                function iJ(e, t) {
                    switch (t.$$typeof) {
                        case iG:
                            if (e.type === t.value) return !0;
                            break;
                        case iP:
                            e: {
                                t = t.value,
                                e = [e, 0];
                                for (var n = 0; n < e.length;) {
                                    var r = e[n++],
                                        i = e[n++],
                                        a = t[i];
                                    if (5 !== r.tag || !eu(r)) {
                                        for (; null != a && iJ(r, a);) a = t[++i];
                                        if (i === t.length) {
                                            t = !0;
                                            break e
                                        }
                                        for (r = r.child; null !== r;) e.push(r, i), r = r.sibling
                                    }
                                }
                                t = !1
                            }
                            return t;
                        case iH:
                            if (5 === e.tag && ec(e.stateNode, t.value)) return !0;
                            break;
                        case iO:
                            if ((5 === e.tag || 6 === e.tag) && null !== (e = es(e)) && 0 <= e.indexOf(t.value)) return !0;
                            break;
                        case iL:
                            if (5 === e.tag && "string" == typeof(e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase()) return !0;
                            break;
                        default:
                            throw Error(d(365))
                    }
                    return !1
                }

                function iN(e) {
                    switch (e.$$typeof) {
                        case iG:
                            return "<" + (R(e.value) || "Unknown") + ">";
                        case iP:
                            return ":has(" + (iN(e) || "") + ")";
                        case iH:
                            return '[role="' + e.value + '"]';
                        case iO:
                            return '"' + e.value + '"';
                        case iL:
                            return '[data-testname="' + e.value + '"]';
                        default:
                            throw Error(d(365))
                    }
                }

                function iU(e, t) {
                    var n = [];
                    e = [e, 0];
                    for (var r = 0; r < e.length;) {
                        var i = e[r++],
                            a = e[r++],
                            o = t[a];
                        if (5 !== i.tag || !eu(i)) {
                            for (; null != o && iJ(i, o);) o = t[++a];
                            if (a === t.length) n.push(i);
                            else
                                for (i = i.child; null !== i;) e.push(i, a), i = i.sibling
                        }
                    }
                    return n
                }

                function iK(e, t) {
                    if (!ea) throw Error(d(363));
                    e = iU(e = i_(e), t), t = [], e = Array.from(e);
                    for (var n = 0; n < e.length;) {
                        var r = e[n++];
                        if (5 === r.tag) eu(r) || t.push(r.stateNode);
                        else
                            for (r = r.child; null !== r;) e.push(r), r = r.sibling
                    }
                    return t
                }
                var iQ = Math.ceil,
                    ij = f.ReactCurrentDispatcher,
                    iz = f.ReactCurrentOwner,
                    iX = f.ReactCurrentBatchConfig,
                    iY = 0,
                    iW = null,
                    iZ = null,
                    iV = 0,
                    iq = 0,
                    i$ = e5(0),
                    i0 = 0,
                    i1 = null,
                    i9 = 0,
                    i2 = 0,
                    i8 = 0,
                    i3 = null,
                    i4 = null,
                    i6 = 0,
                    i5 = 1 / 0;

                function i7() {
                    i5 = tw() + 500
                }
                var ae = !1,
                    at = null,
                    an = null,
                    ar = !1,
                    ai = null,
                    aa = 0,
                    ao = 0,
                    al = null,
                    as = -1,
                    au = 0;

                function ac() {
                    return 0 != (6 & iY) ? tw() : -1 !== as ? as : as = tw()
                }

                function ad(e) {
                    return 0 == (1 & e.mode) ? 1 : 0 != (2 & iY) && 0 !== iV ? iV & -iV : null !== tN.transition ? (0 === au && (e = tm, 0 == (4194240 & (tm <<= 1)) && (tm = 64), au = e), au) : 0 !== (e = tE) ? e : et()
                }

                function af(e, t, n) {
                    if (50 < ao) throw ao = 0, al = null, Error(d(185));
                    var r = ah(e, t);
                    return null === r ? null : (tb(r, t, n), (0 == (2 & iY) || r !== iW) && (r === iW && (0 == (2 & iY) && (i2 |= t), 4 === i0 && aB(r, iV)), ap(r, n), 1 === t && 0 === iY && 0 == (1 & e.mode) && (i7(), tk && tJ())), r)
                }

                function ah(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function ap(e, t) {
                    var n, r, i, a = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                            var o = 31 - tf(a),
                                l = 1 << o,
                                s = i[o]; - 1 === s ? (0 == (l & n) || 0 != (l & r)) && (i[o] = function(e, t) {
                                switch (e) {
                                    case 1:
                                    case 2:
                                    case 4:
                                        return t + 250;
                                    case 8:
                                    case 16:
                                    case 32:
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                        return t + 5e3;
                                    default:
                                        return -1
                                }
                            }(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
                        }
                    }(e, t);
                    var o = tB(e, e === iW ? iV : 0);
                    if (0 === o) null !== a && tF(a), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = o & -o, e.callbackPriority !== t) {
                        if (null != a && tF(a), 1 === t) {
                            0 === e.tag && (tk = !0), n = aC.bind(null, e), null === tO ? tO = [n] : tO.push(n), er ? ei(function() {
                                0 === iY && tJ()
                            }) : tS(tT, tJ), a = null
                        } else {
                            switch (tM(o)) {
                                case 1:
                                    a = tT;
                                    break;
                                case 4:
                                    a = tD;
                                    break;
                                case 16:
                                default:
                                    a = tx;
                                    break;
                                case 536870912:
                                    a = tG
                            }
                            r = a, i = am.bind(null, e), a = tS(r, i)
                        }
                        e.callbackPriority = t, e.callbackNode = a
                    }
                }

                function am(e, t) {
                    if (as = -1, au = 0, 0 != (6 & iY)) throw Error(d(327));
                    var n = e.callbackNode;
                    if (aT() && e.callbackNode !== n) return null;
                    var r = tB(e, e === iW ? iV : 0);
                    if (0 === r) return null;
                    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = aF(e, r);
                    else {
                        t = r;
                        var i = iY;
                        iY |= 2;
                        var a = aM();
                        for ((iW !== e || iV !== t) && (i7(), ay(e, t));;) try {
                            ! function() {
                                for (; null !== iZ && !tI();) aI(iZ)
                            }();
                            break
                        } catch (t) {
                            aE(e, t)
                        }
                        tY(), ij.current = a, iY = i, null !== iZ ? t = 0 : (iW = null, iV = 0, t = i0)
                    }
                    if (0 !== t) {
                        if (2 === t && 0 !== (i = tC(e)) && (r = i, t = aA(e, i)), 1 === t) throw n = i1, ay(e, 0), aB(e, r), ap(e, tw()), n;
                        if (6 === t) aB(e, r);
                        else {
                            if (i = e.current.alternate, 0 == (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var i = n[r],
                                                        a = i.getSnapshot;
                                                    i = i.value;
                                                    try {
                                                        if (!tL(a(), i)) return !1
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(i) && (2 === (t = aF(e, r)) && 0 !== (a = tC(e)) && (r = a, t = aA(e, a)), 1 === t)) throw n = i1, ay(e, 0), aB(e, r), ap(e, tw()), n;
                            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(d(345));
                                case 2:
                                case 5:
                                    aw(e, i4);
                                    break;
                                case 3:
                                    if (aB(e, r), (130023424 & r) === r && 10 < (t = i6 + 500 - tw())) {
                                        if (0 !== tB(e, 0)) break;
                                        if (((i = e.suspendedLanes) & r) !== r) {
                                            ac(), e.pingedLanes |= e.suspendedLanes & i;
                                            break
                                        }
                                        e.timeoutHandle = z(aw.bind(null, e, i4), t);
                                        break
                                    }
                                    aw(e, i4);
                                    break;
                                case 4:
                                    if (aB(e, r), (4194240 & r) === r) break;
                                    for (i = -1, t = e.eventTimes; 0 < r;) {
                                        var o = 31 - tf(r);
                                        a = 1 << o, (o = t[o]) > i && (i = o), r &= ~a
                                    }
                                    if (r = i, 10 < (r = (120 > (r = tw() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iQ(r / 1960)) - r)) {
                                        e.timeoutHandle = z(aw.bind(null, e, i4), r);
                                        break
                                    }
                                    aw(e, i4);
                                    break;
                                default:
                                    throw Error(d(329))
                            }
                        }
                    }
                    return ap(e, tw()), e.callbackNode === n ? am.bind(null, e) : null
                }

                function aA(e, t) {
                    var n = i3;
                    return e.current.memoizedState.isDehydrated && (ay(e, t).flags |= 256), 2 !== (e = aF(e, t)) && (t = i4, i4 = n, null !== t && ag(t)), e
                }

                function ag(e) {
                    null === i4 ? i4 = e : i4.push.apply(i4, e)
                }

                function aB(e, t) {
                    for (t &= ~i8, t &= ~i2, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - tf(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function aC(e) {
                    if (0 != (6 & iY)) throw Error(d(327));
                    aT();
                    var t = tB(e, 0);
                    if (0 == (1 & t)) return ap(e, tw()), null;
                    var n = aF(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = tC(e);
                        0 !== r && (t = r, n = aA(e, r))
                    }
                    if (1 === n) throw n = i1, ay(e, 0), aB(e, t), ap(e, tw()), n;
                    if (6 === n) throw Error(d(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, aw(e, i4), ap(e, tw()), null
                }

                function av(e) {
                    null !== ai && 0 === ai.tag && 0 == (6 & iY) && aT();
                    var t = iY;
                    iY |= 1;
                    var n = iX.transition,
                        r = tE;
                    try {
                        if (iX.transition = null, tE = 1, e) return e()
                    } finally {
                        tE = r, iX.transition = n, 0 == (6 & (iY = t)) && tJ()
                    }
                }

                function ab() {
                    iq = i$.current, e7(i$)
                }

                function ay(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (n !== Y && (e.timeoutHandle = Y, X(n)), null !== iZ)
                        for (n = iZ.return; null !== n;) {
                            var r = n;
                            switch (nC(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && tl();
                                    break;
                                case 3:
                                    nj(), e7(tr), e7(tn), nV();
                                    break;
                                case 5:
                                    nX(r);
                                    break;
                                case 4:
                                    nj();
                                    break;
                                case 13:
                                case 19:
                                    e7(nY);
                                    break;
                                case 10:
                                    tZ(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    ab()
                            }
                            n = n.return
                        }
                    if (iW = e, iZ = e = aJ(e.current, null), iV = iq = t, i0 = 0, i1 = null, i8 = i2 = i9 = 0, i4 = i3 = null, null !== t0) {
                        for (t = 0; t < t0.length; t++)
                            if (null !== (r = (n = t0[t]).interleaved)) {
                                n.interleaved = null;
                                var i = r.next,
                                    a = n.pending;
                                if (null !== a) {
                                    var o = a.next;
                                    a.next = i, r.next = o
                                }
                                n.pending = r
                            }
                        t0 = null
                    }
                    return e
                }

                function aE(e, t) {
                    for (;;) {
                        var n = iZ;
                        try {
                            if (tY(), nq.current = rH, n8) {
                                for (var r = n1.memoizedState; null !== r;) {
                                    var i = r.queue;
                                    null !== i && (i.pending = null), r = r.next
                                }
                                n8 = !1
                            }
                            if (n0 = 0, n2 = n9 = n1 = null, n3 = !1, n4 = 0, iz.current = null, null === n || null === n.return) {
                                i0 = 1, i1 = t, iZ = null;
                                break
                            }
                            e: {
                                var a = e,
                                    o = n.return,
                                    l = n,
                                    s = t;
                                if (t = iV, l.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                    var u = s,
                                        c = l,
                                        f = c.tag;
                                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var h = c.alternate;
                                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                    }
                                    var p = rj(o);
                                    if (null !== p) {
                                        p.flags &= -257, rz(p, o, l, a, t), 1 & p.mode && rQ(a, u, t), t = p, s = u;
                                        var m = t.updateQueue;
                                        if (null === m) {
                                            var A = new Set;
                                            A.add(s), t.updateQueue = A
                                        } else m.add(s);
                                        break e
                                    }
                                    if (0 == (1 & t)) {
                                        rQ(a, u, t), aS();
                                        break e
                                    }
                                    s = Error(d(426))
                                } else if (ny && 1 & l.mode) {
                                    var g = rj(o);
                                    if (null !== g) {
                                        0 == (65536 & g.flags) && (g.flags |= 256), rz(g, o, l, a, t), nx(s);
                                        break e
                                    }
                                }
                                a = s,
                                4 !== i0 && (i0 = 2),
                                null === i3 ? i3 = [a] : i3.push(a),
                                s = r_(s, l),
                                l = o;do {
                                    switch (l.tag) {
                                        case 3:
                                            l.flags |= 65536, t &= -t, l.lanes |= t;
                                            var B = rU(l, s, t);
                                            t6(l, B);
                                            break e;
                                        case 1:
                                            a = s;
                                            var C = l.type,
                                                v = l.stateNode;
                                            if (0 == (128 & l.flags) && ("function" == typeof C.getDerivedStateFromError || null !== v && "function" == typeof v.componentDidCatch && (null === an || !an.has(v)))) {
                                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                                var b = rK(l, a, t);
                                                t6(l, b);
                                                break e
                                            }
                                    }
                                    l = l.return
                                } while (null !== l)
                            }
                            aR(n)
                        } catch (e) {
                            t = e, iZ === n && null !== n && (iZ = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function aM() {
                    var e = ij.current;
                    return ij.current = rH, null === e ? rH : e
                }

                function aS() {
                    (0 === i0 || 3 === i0 || 2 === i0) && (i0 = 4), null === iW || 0 == (268435455 & i9) && 0 == (268435455 & i2) || aB(iW, iV)
                }

                function aF(e, t) {
                    var n = iY;
                    iY |= 2;
                    var r = aM();
                    for (iW === e && iV === t || ay(e, t);;) try {
                        ! function() {
                            for (; null !== iZ;) aI(iZ)
                        }();
                        break
                    } catch (t) {
                        aE(e, t)
                    }
                    if (tY(), iY = n, ij.current = r, null !== iZ) throw Error(d(261));
                    return iW = null, iV = 0, i0
                }

                function aI(e) {
                    var t = o(e.alternate, e, iq);
                    e.memoizedProps = e.pendingProps, null === t ? aR(e) : iZ = t, iz.current = null
                }

                function aR(e) {
                    var n = e;
                    do {
                        var o = n.alternate;
                        if (e = n.return, 0 == (32768 & n.flags)) {
                            if (null !== (o = function(e, n, o) {
                                    var l = n.pendingProps;
                                    switch (nC(n), n.tag) {
                                        case 2:
                                        case 16:
                                        case 15:
                                        case 0:
                                        case 11:
                                        case 7:
                                        case 8:
                                        case 12:
                                        case 9:
                                        case 14:
                                            return rV(n), null;
                                        case 1:
                                        case 17:
                                            return to(n.type) && tl(), rV(n), null;
                                        case 3:
                                            return l = n.stateNode, nj(), e7(tr), e7(tn), nV(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (null === e || null === e.child) && (nT(n) ? rX(n) : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024, null !== nM && (ag(nM), nM = null))), r(e, n), rV(n), null;
                                        case 5:
                                            nX(n), o = nK(nU.current);
                                            var s = n.type;
                                            if (null !== e && null != n.stateNode) i(e, n, s, l, o), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                                            else {
                                                if (!l) {
                                                    if (null === n.stateNode) throw Error(d(166));
                                                    return rV(n), null
                                                }
                                                if (e = nK(nJ.current), nT(n)) {
                                                    if (!q) throw Error(d(175));
                                                    e = ej(n.stateNode, n.type, n.memoizedProps, o, e, n, !nE), n.updateQueue = e, null !== e && rX(n)
                                                } else {
                                                    var u = J(s, l, o, e, n);
                                                    t(u, n, !1, !1), n.stateNode = u, U(u, s, l, o, e) && rX(n)
                                                }
                                                null !== n.ref && (n.flags |= 512, n.flags |= 2097152)
                                            }
                                            return rV(n), null;
                                        case 6:
                                            if (e && null != n.stateNode) a(e, n, e.memoizedProps, l);
                                            else {
                                                if ("string" != typeof l && null === n.stateNode) throw Error(d(166));
                                                if (e = nK(nU.current), o = nK(nJ.current), nT(n)) {
                                                    if (!q) throw Error(d(176));
                                                    if (e = n.stateNode, l = n.memoizedProps, (o = ez(e, l, n, !nE)) && null !== (s = nv)) switch (u = 0 != (1 & s.mode), s.tag) {
                                                        case 3:
                                                            e0(s.stateNode.containerInfo, e, l, u);
                                                            break;
                                                        case 5:
                                                            e1(s.type, s.memoizedProps, s.stateNode, e, l, u)
                                                    }
                                                    o && rX(n)
                                                } else n.stateNode = j(l, e, o, n)
                                            }
                                            return rV(n), null;
                                        case 13:
                                            if (e7(nY), l = n.memoizedState, ny && null !== nb && 0 != (1 & n.mode) && 0 == (128 & n.flags)) {
                                                for (e = nb; e;) e = eN(e);
                                                return nD(), n.flags |= 98560, n
                                            }
                                            if (null !== l && null !== l.dehydrated) {
                                                if (l = nT(n), null === e) {
                                                    if (!l) throw Error(d(318));
                                                    if (!q) throw Error(d(344));
                                                    if (!(e = null !== (e = n.memoizedState) ? e.dehydrated : null)) throw Error(d(317));
                                                    eX(e, n)
                                                } else nD(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                                return rV(n), null
                                            }
                                            if (null !== nM && (ag(nM), nM = null), 0 != (128 & n.flags)) return n.lanes = o, n;
                                            return l = null !== l, o = !1, null === e ? nT(n) : o = null !== e.memoizedState, l && !o && (n.child.flags |= 8192, 0 != (1 & n.mode) && (null === e || 0 != (1 & nY.current) ? 0 === i0 && (i0 = 3) : aS())), null !== n.updateQueue && (n.flags |= 4), rV(n), null;
                                        case 4:
                                            return nj(), r(e, n), null === e && ee(n.stateNode.containerInfo), rV(n), null;
                                        case 10:
                                            return tZ(n.type._context), rV(n), null;
                                        case 19:
                                            if (e7(nY), null === (s = n.memoizedState)) return rV(n), null;
                                            if (l = 0 != (128 & n.flags), null === (u = s.rendering)) {
                                                if (l) rZ(s, !1);
                                                else {
                                                    if (0 !== i0 || null !== e && 0 != (128 & e.flags))
                                                        for (e = n.child; null !== e;) {
                                                            if (null !== (u = nW(e))) {
                                                                for (n.flags |= 128, rZ(s, !1), null !== (e = u.updateQueue) && (n.updateQueue = e, n.flags |= 4), n.subtreeFlags = 0, e = o, l = n.child; null !== l;) o = l, s = e, o.flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = s, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, s = u.dependencies, o.dependencies = null === s ? null : {
                                                                    lanes: s.lanes,
                                                                    firstContext: s.firstContext
                                                                }), l = l.sibling;
                                                                return te(nY, 1 & nY.current | 2), n.child
                                                            }
                                                            e = e.sibling
                                                        }
                                                    null !== s.tail && tw() > i5 && (n.flags |= 128, l = !0, rZ(s, !1), n.lanes = 4194304)
                                                }
                                            } else {
                                                if (!l) {
                                                    if (null !== (e = nW(u))) {
                                                        if (n.flags |= 128, l = !0, null !== (e = e.updateQueue) && (n.updateQueue = e, n.flags |= 4), rZ(s, !0), null === s.tail && "hidden" === s.tailMode && !u.alternate && !ny) return rV(n), null
                                                    } else 2 * tw() - s.renderingStartTime > i5 && 1073741824 !== o && (n.flags |= 128, l = !0, rZ(s, !1), n.lanes = 4194304)
                                                }
                                                s.isBackwards ? (u.sibling = n.child, n.child = u) : (null !== (e = s.last) ? e.sibling = u : n.child = u, s.last = u)
                                            }
                                            if (null !== s.tail) return n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = tw(), n.sibling = null, e = nY.current, te(nY, l ? 1 & e | 2 : 1 & e), n;
                                            return rV(n), null;
                                        case 22:
                                        case 23:
                                            return ab(), l = null !== n.memoizedState, null !== e && null !== e.memoizedState !== l && (n.flags |= 8192), l && 0 != (1 & n.mode) ? 0 != (1073741824 & iq) && (rV(n), Z && 6 & n.subtreeFlags && (n.flags |= 8192)) : rV(n), null;
                                        case 24:
                                        case 25:
                                            return null
                                    }
                                    throw Error(d(156, n.tag))
                                }(o, n, iq))) {
                                iZ = o;
                                return
                            }
                        } else {
                            if (null !== (o = function(e, t) {
                                    switch (nC(t), t.tag) {
                                        case 1:
                                            return to(t.type) && tl(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 3:
                                            return nj(), e7(tr), e7(tn), nV(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 5:
                                            return nX(t), null;
                                        case 13:
                                            if (e7(nY), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                                if (null === t.alternate) throw Error(d(340));
                                                nD()
                                            }
                                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 19:
                                            return e7(nY), null;
                                        case 4:
                                            return nj(), null;
                                        case 10:
                                            return tZ(t.type._context), null;
                                        case 22:
                                        case 23:
                                            return ab(), null;
                                        default:
                                            return null
                                    }
                                }(o, n))) {
                                o.flags &= 32767, iZ = o;
                                return
                            }
                            if (null !== e) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                            else {
                                i0 = 6, iZ = null;
                                return
                            }
                        }
                        if (null !== (n = n.sibling)) {
                            iZ = n;
                            return
                        }
                        iZ = n = e
                    } while (null !== n);
                    0 === i0 && (i0 = 5)
                }

                function aw(e, t) {
                    var n = tE,
                        r = iX.transition;
                    try {
                        iX.transition = null, tE = 1,
                            function(e, t, n) {
                                do aT(); while (null !== ai);
                                if (0 != (6 & iY)) throw Error(d(327));
                                var r = e.finishedWork,
                                    i = e.finishedLanes;
                                if (null !== r) {
                                    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(d(177));
                                    e.callbackNode = null, e.callbackPriority = 0;
                                    var a = r.lanes | r.childLanes;
                                    if (function(e, t) {
                                            var n = e.pendingLanes & ~t;
                                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                            var r = e.eventTimes;
                                            for (e = e.expirationTimes; 0 < n;) {
                                                var i = 31 - tf(n),
                                                    a = 1 << i;
                                                t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
                                            }
                                        }(e, a), e === iW && (iZ = iW = null, iV = 0), 0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags) || ar || (ar = !0, o = tx, l = function() {
                                            return aT(), null
                                        }, tS(o, l)), a = 0 != (15990 & r.flags), 0 != (15990 & r.subtreeFlags) || a) {
                                        a = iX.transition, iX.transition = null;
                                        var o, l, s, u, c = tE;
                                        tE = 1;
                                        var f = iY;
                                        iY |= 4, iz.current = null,
                                            function(e, t) {
                                                for (k(e.containerInfo), im = t; null !== im;)
                                                    if (t = (e = im).child, 0 != (1028 & e.subtreeFlags) && null !== t) t.return = e, im = t;
                                                    else
                                                        for (; null !== im;) {
                                                            e = im;
                                                            try {
                                                                var n = e.alternate;
                                                                if (0 != (1024 & e.flags)) switch (e.tag) {
                                                                    case 0:
                                                                    case 11:
                                                                    case 15:
                                                                    case 5:
                                                                    case 6:
                                                                    case 4:
                                                                    case 17:
                                                                        break;
                                                                    case 1:
                                                                        if (null !== n) {
                                                                            var r = n.memoizedProps,
                                                                                i = n.memoizedState,
                                                                                a = e.stateNode,
                                                                                o = a.getSnapshotBeforeUpdate(e.elementType === e.type ? r : tK(e.type, r), i);
                                                                            a.__reactInternalSnapshotBeforeUpdate = o
                                                                        }
                                                                        break;
                                                                    case 3:
                                                                        Z && eI(e.stateNode.containerInfo);
                                                                        break;
                                                                    default:
                                                                        throw Error(d(163))
                                                                }
                                                            } catch (t) {
                                                                ax(e, e.return, t)
                                                            }
                                                            if (null !== (t = e.sibling)) {
                                                                t.return = e.return, im = t;
                                                                break
                                                            }
                                                            im = e.return
                                                        }
                                                n = iB, iB = !1
                                            }(e, r),
                                            function(e, t) {
                                                for (im = t; null !== im;) {
                                                    var n = (t = im).deletions;
                                                    if (null !== n)
                                                        for (var r = 0; r < n.length; r++) {
                                                            var i = n[r];
                                                            try {
                                                                var a = e;
                                                                Z ? iI(a, i, t) : iE(a, i, t);
                                                                var o = i.alternate;
                                                                null !== o && (o.return = null), i.return = null
                                                            } catch (e) {
                                                                ax(i, t, e)
                                                            }
                                                        }
                                                    if (n = t.child, 0 != (12854 & t.subtreeFlags) && null !== n) n.return = t, im = n;
                                                    else
                                                        for (; null !== im;) {
                                                            t = im;
                                                            try {
                                                                var l = t.flags;
                                                                if (32 & l && Z && ey(t.stateNode), 512 & l) {
                                                                    var s = t.alternate;
                                                                    if (null !== s) {
                                                                        var u = s.ref;
                                                                        null !== u && ("function" == typeof u ? u(null) : u.current = null)
                                                                    }
                                                                }
                                                                if (8192 & l) switch (t.tag) {
                                                                    case 13:
                                                                        if (null !== t.memoizedState) {
                                                                            var c = t.alternate;
                                                                            (null === c || null === c.memoizedState) && (i6 = tw())
                                                                        }
                                                                        break;
                                                                    case 22:
                                                                        var d = null !== t.memoizedState,
                                                                            f = t.alternate,
                                                                            h = null !== f && null !== f.memoizedState;
                                                                        if (n = t, Z) {
                                                                            e: if (r = n, i = d, a = null, Z)
                                                                                for (var p = r;;) {
                                                                                    if (5 === p.tag) {
                                                                                        if (null === a) {
                                                                                            a = p;
                                                                                            var m = p.stateNode;
                                                                                            i ? eE(m) : eS(p.stateNode, p.memoizedProps)
                                                                                        }
                                                                                    } else if (6 === p.tag) {
                                                                                        if (null === a) {
                                                                                            var A = p.stateNode;
                                                                                            i ? eM(A) : eF(A, p.memoizedProps)
                                                                                        }
                                                                                    } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === r) && null !== p.child) {
                                                                                        p.child.return = p, p = p.child;
                                                                                        continue
                                                                                    }
                                                                                    if (p === r) break;
                                                                                    for (; null === p.sibling;) {
                                                                                        if (null === p.return || p.return === r) break e;
                                                                                        a === p && (a = null), p = p.return
                                                                                    }
                                                                                    a === p && (a = null), p.sibling.return = p.return, p = p.sibling
                                                                                }
                                                                        }
                                                                        if (d && !h && 0 != (1 & n.mode)) {
                                                                            im = n;
                                                                            for (var g = n.child; null !== g;) {
                                                                                for (n = im = g; null !== im;) {
                                                                                    var B = (r = im).child;
                                                                                    switch (r.tag) {
                                                                                        case 0:
                                                                                        case 11:
                                                                                        case 14:
                                                                                        case 15:
                                                                                            iC(4, r, r.return);
                                                                                            break;
                                                                                        case 1:
                                                                                            iA(r, r.return);
                                                                                            var C = r.stateNode;
                                                                                            if ("function" == typeof C.componentWillUnmount) {
                                                                                                var v = r.return;
                                                                                                try {
                                                                                                    C.props = r.memoizedProps, C.state = r.memoizedState, C.componentWillUnmount()
                                                                                                } catch (e) {
                                                                                                    ax(r, v, e)
                                                                                                }
                                                                                            }
                                                                                            break;
                                                                                        case 5:
                                                                                            iA(r, r.return);
                                                                                            break;
                                                                                        case 22:
                                                                                            if (null !== r.memoizedState) {
                                                                                                iD(n);
                                                                                                continue
                                                                                            }
                                                                                    }
                                                                                    null !== B ? (B.return = r, im = B) : iD(n)
                                                                                }
                                                                                g = g.sibling
                                                                            }
                                                                        }
                                                                }
                                                                switch (4102 & l) {
                                                                    case 2:
                                                                        iF(t), t.flags &= -3;
                                                                        break;
                                                                    case 6:
                                                                        iF(t), t.flags &= -3, iR(t.alternate, t);
                                                                        break;
                                                                    case 4096:
                                                                        t.flags &= -4097;
                                                                        break;
                                                                    case 4100:
                                                                        t.flags &= -4097, iR(t.alternate, t);
                                                                        break;
                                                                    case 4:
                                                                        iR(t.alternate, t)
                                                                }
                                                            } catch (e) {
                                                                ax(t, t.return, e)
                                                            }
                                                            if (null !== (n = t.sibling)) {
                                                                n.return = t.return, im = n;
                                                                break
                                                            }
                                                            im = t.return
                                                        }
                                                }
                                            }(e, r, i), _(e.containerInfo), e.current = r, s = r, u = e, im = s,
                                            function e(t, n, r) {
                                                for (var i = 0 != (1 & t.mode); null !== im;) {
                                                    var a = im,
                                                        o = a.child;
                                                    if (22 === a.tag && i) {
                                                        var l = null !== a.memoizedState || id;
                                                        if (!l) {
                                                            var s = a.alternate,
                                                                u = null !== s && null !== s.memoizedState || ih;
                                                            s = id;
                                                            var c = ih;
                                                            if (id = l, (ih = u) && !c)
                                                                for (im = a; null !== im;) u = (l = im).child, 22 === l.tag && null !== l.memoizedState ? ix(a) : null !== u ? (u.return = l, im = u) : ix(a);
                                                            for (; null !== o;) im = o, e(o, n, r), o = o.sibling;
                                                            im = a, id = s, ih = c
                                                        }
                                                        iT(t, n, r)
                                                    } else 0 != (8772 & a.subtreeFlags) && null !== o ? (o.return = a, im = o) : iT(t, n, r)
                                                }
                                            }(s, u, i), tR(), iY = f, tE = c, iX.transition = a
                                    } else e.current = r;
                                    if (ar && (ar = !1, ai = e, aa = i), 0 === (a = e.pendingLanes) && (an = null), function(e) {
                                            if (tH && "function" == typeof tH.onCommitFiberRoot) try {
                                                tH.onCommitFiberRoot(tP, e, void 0, 128 == (128 & e.current.flags))
                                            } catch (e) {}
                                        }(r.stateNode, n), ap(e, tw()), null !== t)
                                        for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
                                    if (ae) throw ae = !1, e = at, at = null, e;
                                    0 != (1 & aa) && 0 !== e.tag && aT(), 0 != (1 & (a = e.pendingLanes)) ? e === al ? ao++ : (ao = 0, al = e) : ao = 0, tJ()
                                }
                            }(e, t, n)
                    } finally {
                        iX.transition = r, tE = n
                    }
                    return null
                }

                function aT() {
                    if (null !== ai) {
                        var e = tM(aa),
                            t = iX.transition,
                            n = tE;
                        try {
                            if (iX.transition = null, tE = 16 > e ? 16 : e, null === ai) var r = !1;
                            else {
                                if (e = ai, ai = null, aa = 0, 0 != (6 & iY)) throw Error(d(331));
                                var i = iY;
                                for (iY |= 4, im = e.current; null !== im;) {
                                    var a = im,
                                        o = a.child;
                                    if (0 != (16 & im.flags)) {
                                        var l = a.deletions;
                                        if (null !== l) {
                                            for (var s = 0; s < l.length; s++) {
                                                var u = l[s];
                                                for (im = u; null !== im;) {
                                                    var c = im;
                                                    switch (c.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            iC(8, c, a)
                                                    }
                                                    var f = c.child;
                                                    if (null !== f) f.return = c, im = f;
                                                    else
                                                        for (; null !== im;) {
                                                            var h = (c = im).sibling,
                                                                p = c.return;
                                                            if (! function e(t) {
                                                                    var n = t.alternate;
                                                                    null !== n && (t.alternate = null, e(n)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (n = t.stateNode) && en(n), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                                                                }(c), c === u) {
                                                                im = null;
                                                                break
                                                            }
                                                            if (null !== h) {
                                                                h.return = p, im = h;
                                                                break
                                                            }
                                                            im = p
                                                        }
                                                }
                                            }
                                            var m = a.alternate;
                                            if (null !== m) {
                                                var A = m.child;
                                                if (null !== A) {
                                                    m.child = null;
                                                    do {
                                                        var g = A.sibling;
                                                        A.sibling = null, A = g
                                                    } while (null !== A)
                                                }
                                            }
                                            im = a
                                        }
                                    }
                                    if (0 != (2064 & a.subtreeFlags) && null !== o) o.return = a, im = o;
                                    else
                                        for (; null !== im;) {
                                            if (a = im, 0 != (2048 & a.flags)) switch (a.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    iC(9, a, a.return)
                                            }
                                            var B = a.sibling;
                                            if (null !== B) {
                                                B.return = a.return, im = B;
                                                break
                                            }
                                            im = a.return
                                        }
                                }
                                var C = e.current;
                                for (im = C; null !== im;) {
                                    var v = (o = im).child;
                                    if (0 != (2064 & o.subtreeFlags) && null !== v) v.return = o, im = v;
                                    else
                                        for (o = C; null !== im;) {
                                            if (l = im, 0 != (2048 & l.flags)) try {
                                                switch (l.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        iv(9, l)
                                                }
                                            } catch (e) {
                                                ax(l, l.return, e)
                                            }
                                            if (l === o) {
                                                im = null;
                                                break
                                            }
                                            var b = l.sibling;
                                            if (null !== b) {
                                                b.return = l.return, im = b;
                                                break
                                            }
                                            im = l.return
                                        }
                                }
                                if (iY = i, tJ(), tH && "function" == typeof tH.onPostCommitFiberRoot) try {
                                    tH.onPostCommitFiberRoot(tP, e)
                                } catch (e) {}
                                r = !0
                            }
                            return r
                        } finally {
                            tE = n, iX.transition = t
                        }
                    }
                    return !1
                }

                function aD(e, t, n) {
                    t = r_(n, t), t = rU(e, t, 1), t3(e, t), t = ac(), null !== (e = ah(e, 1)) && (tb(e, 1, t), ap(e, t))
                }

                function ax(e, t, n) {
                    if (3 === e.tag) aD(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                aD(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === an || !an.has(r))) {
                                    e = r_(n, e), e = rK(t, e, 1), t3(t, e), e = ac(), null !== (t = ah(t, 1)) && (tb(t, 1, e), ap(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function aG(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = ac(), e.pingedLanes |= e.suspendedLanes & n, iW === e && (iV & n) === n && (4 === i0 || 3 === i0 && (130023424 & iV) === iV && 500 > tw() - i6 ? ay(e, 0) : i8 |= n), ap(e, t)
                }

                function aP(e, t) {
                    0 === t && (0 == (1 & e.mode) ? t = 1 : (t = tA, 0 == (130023424 & (tA <<= 1)) && (tA = 4194304)));
                    var n = ac();
                    null !== (e = ah(e, t)) && (tb(e, t, n), ap(e, n))
                }

                function aH(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), aP(e, n)
                }

                function aL(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                i = e.memoizedState;
                            null !== i && (n = i.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(d(314))
                    }
                    null !== r && r.delete(t), aP(e, n)
                }

                function aO(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function ak(e, t, n, r) {
                    return new aO(e, t, n, r)
                }

                function a_(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function aJ(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = ak(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function aN(e, t, n, r, i, a) {
                    var o = 2;
                    if (r = e, "function" == typeof e) a_(e) && (o = 1);
                    else if ("string" == typeof e) o = 5;
                    else e: switch (e) {
                        case m:
                            return aU(n.children, i, a, t);
                        case A:
                            o = 8, i |= 8;
                            break;
                        case g:
                            return (e = ak(12, n, t, 2 | i)).elementType = g, e.lanes = a, e;
                        case b:
                            return (e = ak(13, n, t, i)).elementType = b, e.lanes = a, e;
                        case y:
                            return (e = ak(19, n, t, i)).elementType = y, e.lanes = a, e;
                        case S:
                            return aK(n, i, a, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case B:
                                    o = 10;
                                    break e;
                                case C:
                                    o = 9;
                                    break e;
                                case v:
                                    o = 11;
                                    break e;
                                case E:
                                    o = 14;
                                    break e;
                                case M:
                                    o = 16, r = null;
                                    break e
                            }
                            throw Error(d(130, null == e ? e : typeof e, ""))
                    }
                    return (t = ak(o, n, t, i)).elementType = e, t.type = r, t.lanes = a, t
                }

                function aU(e, t, n, r) {
                    return (e = ak(7, e, r, t)).lanes = n, e
                }

                function aK(e, t, n, r) {
                    return (e = ak(22, e, r, t)).elementType = S, e.lanes = n, e.stateNode = {}, e
                }

                function aQ(e, t, n) {
                    return (e = ak(6, e, null, t)).lanes = n, e
                }

                function aj(e, t, n) {
                    return (t = ak(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function az(e, t, n, r, i) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Y, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tv(0), this.expirationTimes = tv(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tv(0), this.identifierPrefix = r, this.onRecoverableError = i, q && (this.mutableSourceEagerHydrationData = null)
                }

                function aX(e, t, n, r, i, a, o, l, s) {
                    return e = new az(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ak(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null
                    }, t9(a), e
                }

                function aY(e) {
                    if (!e) return tt;
                    e = e._reactInternals;
                    e: {
                        if (w(e) !== e || 1 !== e.tag) throw Error(d(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (to(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(d(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (to(n)) return tu(e, n, t)
                    }
                    return t
                }

                function aW(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(d(188));
                        throw Error(d(268, e = Object.keys(e).join(",")))
                    }
                    return null === (e = x(t)) ? null : e.stateNode
                }

                function aZ(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function aV(e, t) {
                    aZ(e, t), (e = e.alternate) && aZ(e, t)
                }

                function aq(e) {
                    return null === (e = x(e)) ? null : e.stateNode
                }

                function a$() {
                    return null
                }
                return o = function(e, t, n) {
                    if (null !== e) {
                        if (e.memoizedProps !== t.pendingProps || tr.current) r$ = !0;
                        else {
                            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return r$ = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            r7(t), nD();
                                            break;
                                        case 5:
                                            nz(t);
                                            break;
                                        case 1:
                                            to(t.type) && tc(t);
                                            break;
                                        case 4:
                                            nQ(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            tW(t, t.type._context, t.memoizedProps.value);
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) {
                                                if (null !== r.dehydrated) return te(nY, 1 & nY.current), t.flags |= 128, null;
                                                if (0 != (n & t.child.childLanes)) return ii(e, t, n);
                                                return te(nY, 1 & nY.current), null !== (e = ic(e, t, n)) ? e.sibling : null
                                            }
                                            te(nY, 1 & nY.current);
                                            break;
                                        case 19:
                                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                                if (r) return iu(e, t, n);
                                                t.flags |= 128
                                            }
                                            var i = t.memoizedState;
                                            if (null !== i && (i.rendering = null, i.tail = null, i.lastEffect = null), te(nY, nY.current), !r) return null;
                                            break;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, r8(e, t, n)
                                    }
                                    return ic(e, t, n)
                                }(e, t, n);
                            r$ = 0 != (131072 & e.flags)
                        }
                    } else r$ = !1, ny && 0 != (1048576 & t.flags) && ng(t, nc, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
                            var i = ta(t, tn.current);
                            tq(t, n), i = re(null, t, r, e, i, n);
                            var a = rt();
                            return t.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, to(r) ? (a = !0, tc(t)) : a = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, t9(t), i.updater = nn, t.stateNode = i, i._reactInternals = t, no(t, r, e, n), t = r5(null, t, r, !0, a, n)) : (t.tag = 0, ny && a && nB(t), r0(null, t, i, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
                                    if ("function" == typeof e) return a_(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === v) return 11;
                                        if (e === E) return 14
                                    }
                                    return 2
                                }(r), e = tK(r, e), i) {
                                    case 0:
                                        t = r4(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = r6(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = r1(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = r9(null, t, r, tK(r.type, e), n);
                                        break e
                                }
                                throw Error(d(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tK(r, i), r4(e, t, r, i, n);
                        case 1:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tK(r, i), r6(e, t, r, i, n);
                        case 3:
                            e: {
                                if (r7(t), null === e) throw Error(d(387));r = t.pendingProps,
                                i = (a = t.memoizedState).element,
                                t2(e, t),
                                t5(t, r, null, n);
                                var o = t.memoizedState;
                                if (r = o.element, q && a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: o.cache,
                                            transitions: o.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = ie(e, t, r, n, i = Error(d(423)));
                                        break e
                                    }
                                    if (r !== i) {
                                        t = ie(e, t, r, n, i = Error(d(424)));
                                        break e
                                    }
                                    for (q && (nb = eK(t.stateNode.containerInfo), nv = t, ny = !0, nM = null, nE = !1), n = nk(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (nD(), r === i) {
                                        t = ic(e, t, n);
                                        break e
                                    }
                                    r0(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return nz(t), null === e && nR(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, o = i.children, Q(r, i) ? o = null : null !== a && Q(r, a) && (t.flags |= 32), r3(e, t), r0(e, t, o, n), t.child;
                        case 6:
                            return null === e && nR(t), null;
                        case 13:
                            return ii(e, t, n);
                        case 4:
                            return nQ(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = nO(t, null, r, n) : r0(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tK(r, i), r1(e, t, r, i, n);
                        case 7:
                            return r0(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return r0(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, tW(t, r, o), null !== a) {
                                    if (tL(a.value, o)) {
                                        if (a.children === i.children && !tr.current) {
                                            t = ic(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var l = a.dependencies;
                                            if (null !== l) {
                                                o = a.child;
                                                for (var s = l.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === a.tag) {
                                                            (s = t8(-1, n & -n)).tag = 2;
                                                            var u = a.updateQueue;
                                                            if (null !== u) {
                                                                var c = (u = u.shared).pending;
                                                                null === c ? s.next = s : (s.next = c.next, c.next = s), u.pending = s
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), tV(a.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (o = a.return)) throw Error(d(341));
                                                o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), tV(o, n, t), o = a.sibling
                                            } else o = a.child;
                                            if (null !== o) o.return = a;
                                            else
                                                for (o = a; null !== o;) {
                                                    if (o === t) {
                                                        o = null;
                                                        break
                                                    }
                                                    if (null !== (a = o.sibling)) {
                                                        a.return = o.return, o = a;
                                                        break
                                                    }
                                                    o = o.return
                                                }
                                            a = o
                                        }
                                }
                                r0(e, t, i.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return i = t.type, r = t.pendingProps.children, tq(t, n), i = t$(i), r = r(i), t.flags |= 1, r0(e, t, r, n), t.child;
                        case 14:
                            return i = tK(r = t.type, t.pendingProps), i = tK(r.type, i), r9(e, t, r, i, n);
                        case 15:
                            return r2(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tK(r, i), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, to(r) ? (e = !0, tc(t)) : e = !1, tq(t, n), ni(t, r, i), no(t, r, i, n), r5(null, t, r, !0, e, n);
                        case 19:
                            return iu(e, t, n);
                        case 22:
                            return r8(e, t, n)
                    }
                    throw Error(d(156, t.tag))
                }, l.attemptContinuousHydration = function(e) {
                    13 === e.tag && (af(e, 134217728, ac()), aV(e, 134217728))
                }, l.attemptHydrationAtCurrentPriority = function(e) {
                    if (13 === e.tag) {
                        var t = ac(),
                            n = ad(e);
                        af(e, n, t), aV(e, n)
                    }
                }, l.attemptSynchronousHydration = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = tg(t.pendingLanes);
                                0 !== n && (ty(t, 1 | n), ap(t, tw()), 0 == (6 & iY) && (i7(), tJ()))
                            }
                            break;
                        case 13:
                            var r = ac();
                            av(function() {
                                return af(e, 1, r)
                            }), aV(e, 1)
                    }
                }, l.batchedUpdates = function(e, t) {
                    var n = iY;
                    iY |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (iY = n) && (i7(), tk && tJ())
                    }
                }, l.createComponentSelector = function(e) {
                    return {
                        $$typeof: iG,
                        value: e
                    }
                }, l.createContainer = function(e, t, n, r, i, a, o) {
                    return aX(e, t, !1, null, n, r, i, a, o)
                }, l.createHasPseudoClassSelector = function(e) {
                    return {
                        $$typeof: iP,
                        value: e
                    }
                }, l.createHydrationContainer = function(e, t, n, r, i, a, o, l, s) {
                    return (e = aX(n, r, !0, e, i, a, o, l, s)).context = aY(null), n = e.current, (a = t8(r = ac(), i = ad(n))).callback = null != t ? t : null, t3(n, a), e.current.lanes = i, tb(e, i, r), ap(e, r), e
                }, l.createPortal = function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: p,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }, l.createRoleSelector = function(e) {
                    return {
                        $$typeof: iH,
                        value: e
                    }
                }, l.createTestNameSelector = function(e) {
                    return {
                        $$typeof: iL,
                        value: e
                    }
                }, l.createTextSelector = function(e) {
                    return {
                        $$typeof: iO,
                        value: e
                    }
                }, l.deferredUpdates = function(e) {
                    var t = tE,
                        n = iX.transition;
                    try {
                        return iX.transition = null, tE = 16, e()
                    } finally {
                        tE = t, iX.transition = n
                    }
                }, l.discreteUpdates = function(e, t, n, r, i) {
                    var a = tE,
                        o = iX.transition;
                    try {
                        return iX.transition = null, tE = 1, e(t, n, r, i)
                    } finally {
                        tE = a, iX.transition = o, 0 === iY && i7()
                    }
                }, l.findAllNodes = iK, l.findBoundingRects = function(e, t) {
                    if (!ea) throw Error(d(363));
                    t = iK(e, t), e = [];
                    for (var n = 0; n < t.length; n++) e.push(el(t[n]));
                    for (t = e.length - 1; 0 < t; t--) {
                        n = e[t];
                        for (var r = n.x, i = r + n.width, a = n.y, o = a + n.height, l = t - 1; 0 <= l; l--)
                            if (t !== l) {
                                var s = e[l],
                                    u = s.x,
                                    c = u + s.width,
                                    f = s.y,
                                    h = f + s.height;
                                if (r >= u && a >= f && i <= c && o <= h) {
                                    e.splice(t, 1);
                                    break
                                }
                                if (r !== u || n.width !== s.width || h < a || f > o) {
                                    if (!(a !== f || n.height !== s.height || c < r || u > i)) {
                                        u > r && (s.width += u - r, s.x = r), c < i && (s.width = i - u), e.splice(t, 1);
                                        break
                                    }
                                } else {
                                    f > a && (s.height += f - a, s.y = a), h < o && (s.height = o - f), e.splice(t, 1);
                                    break
                                }
                            }
                    }
                    return e
                }, l.findHostInstance = aW, l.findHostInstanceWithNoPortals = function(e) {
                    return null === (e = null !== (e = D(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            if (4 !== t.tag) {
                                var n = e(t);
                                if (null !== n) return n
                            }
                            t = t.sibling
                        }
                        return null
                    }(e) : null) ? null : e.stateNode
                }, l.findHostInstanceWithWarning = function(e) {
                    return aW(e)
                }, l.flushControlled = function(e) {
                    var t = iY;
                    iY |= 1;
                    var n = iX.transition,
                        r = tE;
                    try {
                        iX.transition = null, tE = 1, e()
                    } finally {
                        tE = r, iX.transition = n, 0 === (iY = t) && (i7(), tJ())
                    }
                }, l.flushPassiveEffects = aT, l.flushSync = av, l.focusWithin = function(e, t) {
                    if (!ea) throw Error(d(363));
                    for (t = Array.from(t = iU(e = i_(e), t)), e = 0; e < t.length;) {
                        var n = t[e++];
                        if (!eu(n)) {
                            if (5 === n.tag && ed(n.stateNode)) return !0;
                            for (n = n.child; null !== n;) t.push(n), n = n.sibling
                        }
                    }
                    return !1
                }, l.getCurrentUpdatePriority = function() {
                    return tE
                }, l.getFindAllNodesFailureDescription = function(e, t) {
                    if (!ea) throw Error(d(363));
                    var n = 0,
                        r = [];
                    e = [i_(e), 0];
                    for (var i = 0; i < e.length;) {
                        var a = e[i++],
                            o = e[i++],
                            l = t[o];
                        if ((5 !== a.tag || !eu(a)) && (iJ(a, l) && (r.push(iN(l)), ++o > n && (n = o)), o < t.length))
                            for (a = a.child; null !== a;) e.push(a, o), a = a.sibling
                    }
                    if (n < t.length) {
                        for (e = []; n < t.length; n++) e.push(iN(t[n]));
                        return "findAllNodes was able to match part of the selector:\n  " + r.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
                    }
                    return null
                }, l.getPublicRootInstance = function(e) {
                    return (e = e.current).child ? 5 === e.child.tag ? H(e.child.stateNode) : e.child.stateNode : null
                }, l.injectIntoDevTools = function(e) {
                    if (e = {
                            bundleType: e.bundleType,
                            version: e.version,
                            rendererPackageName: e.rendererPackageName,
                            rendererConfig: e.rendererConfig,
                            overrideHookState: null,
                            overrideHookStateDeletePath: null,
                            overrideHookStateRenamePath: null,
                            overrideProps: null,
                            overridePropsDeletePath: null,
                            overridePropsRenamePath: null,
                            setErrorHandler: null,
                            setSuspenseHandler: null,
                            scheduleUpdate: null,
                            currentDispatcherRef: f.ReactCurrentDispatcher,
                            findHostInstanceByFiber: aq,
                            findFiberByHostInstance: e.findFiberByHostInstance || a$,
                            findHostInstancesForRefresh: null,
                            scheduleRefresh: null,
                            scheduleRoot: null,
                            setRefreshHandler: null,
                            getCurrentFiber: null,
                            reconcilerVersion: "18.0.0-fc46dba67-20220329"
                        }, "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) e = !1;
                    else {
                        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (t.isDisabled || !t.supportsFiber) e = !0;
                        else {
                            try {
                                tP = t.inject(e), tH = t
                            } catch (e) {}
                            e = !!t.checkDCE
                        }
                    }
                    return e
                }, l.isAlreadyRendering = function() {
                    return !1
                }, l.observeVisibleRects = function(e, t, n, r) {
                    if (!ea) throw Error(d(363));
                    var i = ef(e = iK(e, t), n, r).disconnect;
                    return {
                        disconnect: function() {
                            i()
                        }
                    }
                }, l.registerMutableSourceForHydration = function(e, t) {
                    var n = t._getVersion;
                    n = n(t._source), null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
                }, l.runWithPriority = function(e, t) {
                    var n = tE;
                    try {
                        return tE = e, t()
                    } finally {
                        tE = n
                    }
                }, l.shouldError = function() {
                    return null
                }, l.shouldSuspend = function() {
                    return !1
                }, l.updateContainer = function(e, t, n, r) {
                    var i = t.current,
                        a = ac(),
                        o = ad(i);
                    return n = aY(n), null === t.context ? t.context = n : t.pendingContext = n, (t = t8(a, o)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), t3(i, t), null !== (e = af(i, o, a)) && t4(e, i, o), o
                }, l
            }
        },
        4474: function(e, t, n) {
            "use strict";
            e.exports = n(9527)
        },
        4145: function(e, t, n) {
            "use strict";
            e.exports = n(7704)
        },
        6447: function(e, t) {
            "use strict";
            /**
             * @license React
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            function n(e, t) {
                var n = e.length;
                for (e.push(t); 0 < n;) {
                    var r = n - 1 >>> 1,
                        i = e[r];
                    if (0 < a(i, t)) e[r] = t, e[n] = i, n = r;
                    else break
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function i(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
                        var l = 2 * (r + 1) - 1,
                            s = e[l],
                            u = l + 1,
                            c = e[u];
                        if (0 > a(s, n)) u < i && 0 > a(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                        else if (u < i && 0 > a(c, n)) e[r] = c, e[u] = n, r = u;
                        else break
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var o, l = performance;
                t.unstable_now = function() {
                    return l.now()
                }
            } else {
                var s = Date,
                    u = s.now();
                t.unstable_now = function() {
                    return s.now() - u
                }
            }
            var c = [],
                d = [],
                f = 1,
                h = null,
                p = 3,
                m = !1,
                A = !1,
                g = !1,
                B = "function" == typeof setTimeout ? setTimeout : null,
                C = "function" == typeof clearTimeout ? clearTimeout : null,
                v = "undefined" != typeof setImmediate ? setImmediate : null;

            function b(e) {
                for (var t = r(d); null !== t;) {
                    if (null === t.callback) i(d);
                    else if (t.startTime <= e) i(d), t.sortIndex = t.expirationTime, n(c, t);
                    else break;
                    t = r(d)
                }
            }

            function y(e) {
                if (g = !1, b(e), !A) {
                    if (null !== r(c)) A = !0, G(E);
                    else {
                        var t = r(d);
                        null !== t && P(y, t.startTime - e)
                    }
                }
            }

            function E(e, n) {
                A = !1, g && (g = !1, C(F), F = -1), m = !0;
                var a = p;
                try {
                    for (b(n), h = r(c); null !== h && (!(h.expirationTime > n) || e && !w());) {
                        var o = h.callback;
                        if ("function" == typeof o) {
                            h.callback = null, p = h.priorityLevel;
                            var l = o(h.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof l ? h.callback = l : h === r(c) && i(c), b(n)
                        } else i(c);
                        h = r(c)
                    }
                    if (null !== h) var s = !0;
                    else {
                        var u = r(d);
                        null !== u && P(y, u.startTime - n), s = !1
                    }
                    return s
                } finally {
                    h = null, p = a, m = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var M = !1,
                S = null,
                F = -1,
                I = 5,
                R = -1;

            function w() {
                return !(t.unstable_now() - R < I)
            }

            function T() {
                if (null !== S) {
                    var e = t.unstable_now();
                    R = e;
                    var n = !0;
                    try {
                        n = S(!0, e)
                    } finally {
                        n ? o() : (M = !1, S = null)
                    }
                } else M = !1
            }
            if ("function" == typeof v) o = function() {
                v(T)
            };
            else if ("undefined" != typeof MessageChannel) {
                var D = new MessageChannel,
                    x = D.port2;
                D.port1.onmessage = T, o = function() {
                    x.postMessage(null)
                }
            } else o = function() {
                B(T, 0)
            };

            function G(e) {
                S = e, M || (M = !0, o())
            }

            function P(e, n) {
                F = B(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                A || m || (A = !0, G(E))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return p
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (p) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }, t.unstable_scheduleCallback = function(e, i, a) {
                var o = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 1073741823;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return l = a + l, e = {
                    id: f++,
                    callback: i,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: l,
                    sortIndex: -1
                }, a > o ? (e.sortIndex = a, n(d, e), null === r(c) && e === r(d) && (g ? (C(F), F = -1) : g = !0, P(y, a - o))) : (e.sortIndex = l, n(c, e), A || m || (A = !0, G(E))), e
            }, t.unstable_shouldYield = w, t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        },
        2820: function(e, t, n) {
            "use strict";
            e.exports = n(6447)
        },
        8362: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6006);
            let i = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                a = i ? r.useEffect : r.useLayoutEffect;

            function o(e) {
                let t = "function" == typeof e ? function(e) {
                        let t;
                        let n = new Set,
                            r = (e, r) => {
                                let i = "function" == typeof e ? e(t) : e;
                                if (i !== t) {
                                    let e = t;
                                    t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                                }
                            },
                            i = () => t,
                            a = (e, r = i, a = Object.is) => {
                                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                                let o = r(t);

                                function l() {
                                    let n = r(t);
                                    if (!a(o, n)) {
                                        let t = o;
                                        e(o = n, t)
                                    }
                                }
                                return n.add(l), () => n.delete(l)
                            },
                            o = {
                                setState: r,
                                getState: i,
                                subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
                                destroy: () => n.clear()
                            };
                        return t = e(r, i, o), o
                    }(e) : e,
                    n = (e = t.getState, n = Object.is) => {
                        let i;
                        let [, o] = (0, r.useReducer)(e => e + 1, 0), l = t.getState(), s = (0, r.useRef)(l), u = (0, r.useRef)(e), c = (0, r.useRef)(n), d = (0, r.useRef)(!1), f = (0, r.useRef)();
                        void 0 === f.current && (f.current = e(l));
                        let h = !1;
                        (s.current !== l || u.current !== e || c.current !== n || d.current) && (i = e(l), h = !n(f.current, i)), a(() => {
                            h && (f.current = i), s.current = l, u.current = e, c.current = n, d.current = !1
                        });
                        let p = (0, r.useRef)(l);
                        a(() => {
                            let e = () => {
                                    try {
                                        let e = t.getState(),
                                            n = u.current(e);
                                        c.current(f.current, n) || (s.current = e, f.current = n, o())
                                    } catch (e) {
                                        d.current = !0, o()
                                    }
                                },
                                n = t.subscribe(e);
                            return t.getState() !== p.current && e(), n
                        }, []);
                        let m = h ? i : f.current;
                        return (0, r.useDebugValue)(m), m
                    };
                return Object.assign(n, t), n[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    let e = [n, t];
                    return {
                        next() {
                            let t = e.length <= 0;
                            return {
                                value: e.shift(),
                                done: t
                            }
                        }
                    }
                }, n
            }
        },
        431: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        3731: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t, n) {
                return Math.max(e, Math.min(t, n))
            }
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            class a {
                advance(e) {
                    var t, n, r, a;
                    if (!this.isRunning) return;
                    let o = !1;
                    if (this.lerp) this.value = (n = this.value, r = this.to, (1 - (a = 1 - Math.exp(-60 * this.lerp * e))) * n + a * r), Math.round(this.value) === this.to && (this.value = this.to, o = !0);
                    else {
                        this.currentTime += e;
                        let t = i(0, this.currentTime / this.duration, 1);
                        o = t >= 1;
                        let n = o ? 1 : this.easing(t);
                        this.value = this.from + (this.to - this.from) * n
                    }
                    null == (t = this.onUpdate) || t.call(this, this.value, {
                        completed: o
                    }), o && this.stop()
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(e, t, {
                    lerp: n = .1,
                    duration: r = 1,
                    easing: i = e => e,
                    onUpdate: a
                }) {
                    this.from = this.value = e, this.to = t, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, this.onUpdate = a
                }
            }
            class o {
                constructor({
                    wrapper: e,
                    content: t,
                    autoResize: n = !0
                } = {}) {
                    if (this.resize = () => {
                            this.onWrapperResize(), this.onContentResize()
                        }, this.onWrapperResize = () => {
                            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                        }, this.onContentResize = () => {
                            this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
                        }, this.wrapper = e, this.content = t, n) {
                        var r;
                        let e;
                        let t = (r = this.resize, function() {
                            let t = arguments,
                                n = this;
                            clearTimeout(e), e = setTimeout(function() {
                                r.apply(n, t)
                            }, 250)
                        });
                        this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(t), this.contentResizeObserver.observe(this.content)
                    }
                    this.resize()
                }
                destroy() {
                    var e, t;
                    null == (e = this.wrapperResizeObserver) || e.disconnect(), null == (t = this.contentResizeObserver) || t.disconnect()
                }
                get limit() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            }
            class l {
                constructor() {
                    this.events = {}
                }
                emit(e, ...t) {
                    let n = this.events[e] || [];
                    for (let e = 0, r = n.length; e < r; e++) n[e](...t)
                }
                on(e, t) {
                    var n;
                    return (null == (n = this.events[e]) ? void 0 : n.push(t)) || (this.events[e] = [t]), () => {
                        var n;
                        this.events[e] = null == (n = this.events[e]) ? void 0 : n.filter(e => t !== e)
                    }
                }
                off(e, t) {
                    var n;
                    this.events[e] = null == (n = this.events[e]) ? void 0 : n.filter(e => t !== e)
                }
                destroy() {
                    this.events = {}
                }
            }
            class s {
                constructor(e, {
                    wheelMultiplier: t = 1,
                    touchMultiplier: n = 2,
                    normalizeWheel: r = !1
                }) {
                    this.onTouchStart = e => {
                        let {
                            clientX: t,
                            clientY: n
                        } = e.targetTouches ? e.targetTouches[0] : e;
                        this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
                            x: 0,
                            y: 0
                        }
                    }, this.onTouchMove = e => {
                        let {
                            clientX: t,
                            clientY: n
                        } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.touchMultiplier, i = -(n - this.touchStart.y) * this.touchMultiplier;
                        this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
                            x: r,
                            y: i
                        }, this.emitter.emit("scroll", {
                            deltaX: r,
                            deltaY: i,
                            event: e
                        })
                    }, this.onTouchEnd = e => {
                        this.emitter.emit("scroll", {
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: e
                        })
                    }, this.onWheel = e => {
                        let {
                            deltaX: t,
                            deltaY: n
                        } = e;
                        this.normalizeWheel && (t = i(-100, t, 100), n = i(-100, n, 100)), t *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit("scroll", {
                            deltaX: t,
                            deltaY: n,
                            event: e
                        })
                    }, this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.normalizeWheel = r, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new l, this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                on(e, t) {
                    return this.emitter.on(e, t)
                }
                destroy() {
                    this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
            }
            class u {
                constructor({
                    wrapper: e = window,
                    content: t = document.documentElement,
                    wheelEventsTarget: n = e,
                    smoothWheel: i = !0,
                    smoothTouch: u = !1,
                    syncTouch: c = !1,
                    syncTouchLerp: d = .1,
                    __iosNoInertiaSyncTouchLerp: f = .4,
                    touchInertiaMultiplier: h = 35,
                    duration: p,
                    easing: m = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                    lerp: A = p && .1,
                    infinite: g = !1,
                    orientation: B = "vertical",
                    gestureOrientation: C = "vertical",
                    touchMultiplier: v = 1,
                    wheelMultiplier: b = 1,
                    normalizeWheel: y = !1,
                    autoResize: E = !0
                } = {}) {
                    this.onVirtualScroll = ({
                        deltaX: e,
                        deltaY: t,
                        event: n
                    }) => {
                        if (n.ctrlKey) return;
                        let i = n.type.includes("touch"),
                            a = n.type.includes("wheel");
                        if ("vertical" === this.options.gestureOrientation && 0 === t || "horizontal" === this.options.gestureOrientation && 0 === e || i && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && t <= 0) return;
                        let o = n.composedPath();
                        if ((o = o.slice(0, o.indexOf(this.rootElement))).find(e => {
                                var t;
                                return (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent")) || i && (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-touch")) || a && (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-wheel")) || (null == (t = e.classList) ? void 0 : t.contains("lenis"))
                            })) return;
                        if (this.isStopped || this.isLocked) return void n.preventDefault();
                        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && i || this.options.smoothWheel && a, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        n.preventDefault();
                        let l = t;
                        "both" === this.options.gestureOrientation ? l = Math.abs(t) > Math.abs(e) ? t : e : "horizontal" === this.options.gestureOrientation && (l = e);
                        let s = i && this.options.syncTouch,
                            u = i && "touchend" === n.type && Math.abs(l) > 1;
                        u && (l = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + l, r({
                            programmatic: !1
                        }, s && {
                            lerp: u ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
                        }))
                    }, this.onScroll = () => {
                        if (!this.isScrolling) {
                            let e = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - e), this.emit()
                        }
                    }, window.lenisVersion = "1.0.23", e !== document.documentElement && e !== document.body || (e = window), this.options = {
                        wrapper: e,
                        content: t,
                        wheelEventsTarget: n,
                        smoothWheel: i,
                        smoothTouch: u,
                        syncTouch: c,
                        syncTouchLerp: d,
                        __iosNoInertiaSyncTouchLerp: f,
                        touchInertiaMultiplier: h,
                        duration: p,
                        easing: m,
                        lerp: A,
                        infinite: g,
                        gestureOrientation: C,
                        orientation: B,
                        touchMultiplier: v,
                        wheelMultiplier: b,
                        normalizeWheel: y,
                        autoResize: E
                    }, this.dimensions = new o({
                        wrapper: e,
                        content: t,
                        autoResize: E
                    }), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = i || u, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new a, this.emitter = new l, this.options.wrapper.addEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll = new s(n, {
                        touchMultiplier: v,
                        wheelMultiplier: b,
                        normalizeWheel: y
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                }
                destroy() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped")
                }
                on(e, t) {
                    return this.emitter.on(e, t)
                }
                off(e, t) {
                    return this.emitter.off(e, t)
                }
                setScroll(e) {
                    this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
                }
                resize() {
                    this.dimensions.resize()
                }
                emit() {
                    this.emitter.emit("scroll", this)
                }
                reset() {
                    this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
                }
                start() {
                    this.isStopped = !1, this.reset()
                }
                stop() {
                    this.isStopped = !0, this.animate.stop(), this.reset()
                }
                raf(e) {
                    let t = e - (this.time || e);
                    this.time = e, this.animate.advance(.001 * t)
                }
                scrollTo(e, {
                    offset: t = 0,
                    immediate: n = !1,
                    lock: r = !1,
                    duration: a = this.options.duration,
                    easing: o = this.options.easing,
                    lerp: l = !a && this.options.lerp,
                    onComplete: s = null,
                    force: u = !1,
                    programmatic: c = !0
                } = {}) {
                    if (!this.isStopped || u) {
                        if (["top", "left", "start"].includes(e)) e = 0;
                        else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                        else {
                            var d;
                            let n;
                            if ("string" == typeof e ? n = document.querySelector(e) : null != (d = e) && d.nodeType && (n = e), n) {
                                if (this.options.wrapper !== window) {
                                    let e = this.options.wrapper.getBoundingClientRect();
                                    t -= this.isHorizontal ? e.left : e.top
                                }
                                let r = n.getBoundingClientRect();
                                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof e) {
                            if (e += t, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = i(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.emit(), void(null == s || s());
                            if (!c) {
                                if (e === this.targetScroll) return;
                                this.targetScroll = e
                            }
                            this.animate.fromTo(this.animatedScroll, e, {
                                duration: a,
                                easing: o,
                                lerp: l,
                                onUpdate: (e, {
                                    completed: t
                                }) => {
                                    r && (this.isLocked = !0), this.isScrolling = !0, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), c && (this.targetScroll = e), t && (r && (this.isLocked = !1), requestAnimationFrame(() => {
                                        this.isScrolling = !1
                                    }), this.velocity = 0, null == s || s()), this.emit()
                                }
                            })
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? this.options.content : this.options.wrapper
                }
                get limit() {
                    return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                }
                get scroll() {
                    var e;
                    return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
                get isSmooth() {
                    return this.__isSmooth
                }
                set isSmooth(e) {
                    this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e), this.__isSmooth = e)
                }
                get isScrolling() {
                    return this.__isScrolling
                }
                set isScrolling(e) {
                    this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e), this.__isScrolling = e)
                }
                get isStopped() {
                    return this.__isStopped
                }
                set isStopped(e) {
                    this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e), this.__isStopped = e)
                }
                get className() {
                    let e = "lenis";
                    return this.isStopped && (e += " lenis-stopped"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
                }
            }
        },
        2982: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = function(e) {
                    return Array.prototype.slice.call(e)
                },
                i = function() {
                    var e = window.navigator.userAgent,
                        t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
                        n = !!e.match(/WebKit/i);
                    return t && n && !e.match(/CriOS/i)
                },
                a = {
                    scale: 1.5,
                    speed: 1.5,
                    wrapperClass: null,
                    willChange: !1,
                    externalRAF: !1
                },
                o = function(e, t) {
                    var n = this;
                    if (this.element = e, this.wrapper = document.createElement("div"), this.options = Object.assign({}, a, t), this.updateOptions(), this.vh = document.documentElement.clientHeight, this.isVisible = !1, this.damp = this.calcDamp(document.documentElement.clientWidth), this.elementTagName = e.tagName.toLowerCase(), "img" === this.elementTagName) {
                        var r = e.getAttribute("src");
                        if (!r) return;
                        (async function(e) {
                            var t = new Image;
                            return t.src = e, await t.decode(), t
                        })(r).then(function() {
                            n.createParallax()
                        })
                    } else this.createParallax()
                };
            o.prototype.createParallax = function() {
                this.setStyle(!0), this.wrapElement(), i() || this.createObserver()
            }, o.prototype.updateOptions = function() {
                var e = this.element.getAttribute("data-u-scale"),
                    t = this.element.getAttribute("data-u-speed"),
                    n = this.element.getAttribute("data-u-willchange");
                null !== e && (this.options.scale = Number(e)), null !== t && (this.options.speed = Number(t)), null !== n && (this.options.willChange = !0)
            }, o.prototype.setStyle = function(e) {
                void 0 === e && (e = !1);
                var t = this.element.clientHeight,
                    n = this.element.clientWidth,
                    r = window.getComputedStyle(this.element),
                    i = "absolute" === r.position,
                    a = this.wrapper.style,
                    o = this.element.style,
                    l = this.options.scale;
                i && "0px" !== r.marginRight && "0px" !== r.marginLeft && r.marginLeft === r.marginRight && (a.margin = "auto"), "0px" === r.marginTop && "0px" === r.marginBottom || (a.marginTop = r.marginTop, a.marginBottom = r.marginBottom, o.marginTop = "0", o.marginBottom = "0"), "auto" !== r.inset && (a.top = r.top, a.right = r.right, a.bottom = r.bottom, a.left = r.left, o.top = "0", o.right = "0", o.bottom = "0", o.left = "0"), "none" !== r.transform && (a.transform = r.transform), "auto" !== r.zIndex && (a.zIndex = r.zIndex), a.position = i ? "absolute" : "relative", "auto" !== r.gridArea && "auto / auto / auto / auto" !== r.gridArea && (a.gridArea = r.gridArea, o.gridArea = "auto"), e && (a.width = "100%", a.overflow = "hidden", o.display = "block", o.overflow = "hidden", o.backfaceVisibility = "hidden", "0px" !== r.padding && (o.padding = "0"), "img" === this.elementTagName ? o.objectFit = "cover" : "video" !== this.elementTagName && (o.backgroundPosition = "center")), "0px" !== r.borderRadius && (a.borderRadius = r.borderRadius, a.isolation || (a.isolation = "isolate"), "0px" !== r.marginLeft && (a.marginLeft = r.marginLeft, o.marginLeft = "0"), "0px" !== r.marginRight && (a.marginRight = r.marginRight, o.marginRight = "0"), a.width = n + "px"), i && (a.width = n + "px", o.width = "100%"), "none" !== r.maxHeight && (a.maxHeight = r.maxHeight, o.maxHeight = "none"), "0px" !== r.minHeight && (a.minHeight = r.minHeight, o.minHeight = "none"), o.width = n + "px", a.setProperty("height", t + "px", "important"), o.setProperty("height", t * l + "px", "important"), this.wrapperHeight = t, this.overflow = Math.floor(10 * (t - t * l)) / 10
            }, o.prototype.wrapElement = function() {
                var e = this.element.getAttribute("data-u-wrapper-class") || this.options.wrapperClass;
                e && this.wrapper.classList.add(e);
                var t = this.element.closest("picture"),
                    n = null !== t ? t : this.element,
                    r = n.parentNode;
                null !== r && r.insertBefore(this.wrapper, n), this.wrapper.appendChild(n)
            }, o.prototype.checkVisible = function() {
                var e = this.wrapper.getBoundingClientRect();
                e.bottom > 0 && e.top < window.innerHeight ? this.onEnter() : this.onLeave()
            }, o.prototype.createObserver = function() {
                var e = this;
                this.observer = new IntersectionObserver(function(t) {
                    t[0].isIntersecting ? e.onEnter() : e.onLeave()
                }, {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                }), this.observer.observe(this.wrapper)
            }, o.prototype.onEnter = function() {
                var e = this.element.style,
                    t = "transform";
                this.options.willChange && e.willChange !== t && (e.willChange = t), this.isVisible = !0
            }, o.prototype.onLeave = function() {
                var e = this.element;
                this.options.willChange && "transform" === e.style.willChange && (e.style.willChange = ""), this.isVisible = !1
            }, o.prototype.calcTranslateValue = function() {
                var e = window.pageYOffset;
                e < 0 && (e = 0);
                var t = this.wrapper.getBoundingClientRect().top + e,
                    n = (e + this.vh - t) / ((this.vh + this.wrapperHeight) / 100),
                    r = this.overflow,
                    i = this.options.speed;
                return Number((r * (1 - Math.min(100, Math.max(0, n)) / 100) * i * this.damp - (r * i - r) / 2).toFixed(4))
            }, o.prototype.calcDamp = function(e) {
                var t = this.options.scale,
                    n = this.options.speed;
                return (n >= 1.4 || t >= 1.4) && e <= 1e3 ? (t < 1 && (t = 1), n < 1 && (n = 1), Math.floor(100 * Math.max(.5, Math.min(1, 1.2 - (1 - (e / 1e3 + (3 - (t + n))))))) / 100) : 1
            }, o.prototype.applyParallax = function() {
                this.element.style.transform = "translate3d(0 , " + this.calcTranslateValue() + "px , 0)"
            }, o.prototype.animate = function() {
                i() && this.checkVisible(), window.pageYOffset < 0 || this.isVisible && this.applyParallax()
            }, o.prototype.reset = function() {
                this.damp = this.calcDamp(window.innerWidth);
                var e = this.wrapper.style,
                    t = this.element.style;
                this.vh = document.documentElement.clientHeight, e.width = "", e.position = "", e.height = "100%", t.width = "", "img" === this.elementTagName && "absolute" === e.position && (e.height = "100%"), "" === e.gridArea ? t.height = "" : t.height = "100%", "0px" !== e.margin && (e.margin = "", t.margin = ""), "auto" !== e.inset && (e.top = "", e.right = "", e.bottom = "", e.left = "", t.top = "", t.right = "", t.bottom = "", t.left = ""), "none" !== e.transform && (e.transform = "", t.transform = ""), "auto" !== e.zIndex && (e.zIndex = ""), "0px" !== e.borderRadius && (e.borderRadius = "", e.isolation = ""), this.setStyle(), this.applyParallax()
            }, o.prototype.destroy = function() {
                var e;
                this.observer && this.observer.disconnect(), this.wrapper.removeAttribute("style"), this.element.removeAttribute("style"), (e = this.wrapper).replaceWith.apply(e, this.wrapper.childNodes)
            };
            var l = function(e, t) {
                var n, i;
                if (!e) throw Error("Argument 'elements' cannot be null.");
                this.instances = [], this.externalRAF = t && t.externalRAF || !1, this.onResizeEvent = this.resize.bind(this), n = "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]"), i = "undefined" != typeof Element && Element.prototype.closest, n && i && "IntersectionObserver" in window && this.init(Array.isArray(e) ? e : "string" == typeof e ? r(document.querySelectorAll(e)) : e instanceof HTMLElement ? [e] : e instanceof NodeList || e instanceof HTMLCollection ? r(e) : [e], t)
            };
            l.prototype.init = function(e, t) {
                this.instances = e.map(function(e) {
                    return new o(e, t)
                }), this.externalRAF || this.animate(), navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) ? window.addEventListener("orientationchange", this.onResizeEvent) : window.addEventListener("resize", this.onResizeEvent)
            }, l.prototype.animate = function() {
                this.instances.forEach(function(e) {
                    e.animate()
                }), this.externalRAF || (this.requestId = window.requestAnimationFrame(this.animate.bind(this)))
            }, l.prototype.reset = function() {
                this.instances.forEach(function(e) {
                    e.reset()
                })
            }, l.prototype.resize = function() {
                clearTimeout(this.timer), this.timer = window.setTimeout(this.reset.bind(this), 500), this.reset.bind(this)
            }, l.prototype.destroy = function() {
                this.requestId && window.cancelAnimationFrame(this.requestId), window.removeEventListener("resize", this.onResizeEvent), window.removeEventListener("orientationchange", this.onResizeEvent), this.instances.forEach(function(e) {
                    e.destroy()
                })
            }
        }
    }
]);