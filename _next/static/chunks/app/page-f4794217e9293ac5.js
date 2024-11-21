(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1592: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 8517))
        },
        2235: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var l = s(6006),
                r = s(226);

            function n(e) {
                let {
                    children: t
                } = e, s = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)(() => {
                    let e = r.ZP.quickTo(s.current, "x", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        }),
                        t = r.ZP.quickTo(s.current, "y", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    s.current.addEventListener("mousemove", l => {
                        let {
                            clientX: r,
                            clientY: n
                        } = l, {
                            height: i,
                            width: o,
                            left: a,
                            top: c
                        } = s.current.getBoundingClientRect();
                        e(r - (a + o / 2)), t(n - (c + i / 2))
                    }), s.current.addEventListener("mouseleave", s => {
                        e(0), t(0)
                    })
                }, []), l.cloneElement(t, {
                    ref: s
                })
            }
        },
        8517: function(e, t, s) {
            "use strict";
            let l, r;
            s.r(t), s.d(t, {
                default: function() {
                    return eR
                }
            });
            var n = s(9268),
                i = s(6006),
                o = s(3607),
                a = s(9770),
                c = s(2685),
                x = s(3565),
                u = s(6394),
                d = s.n(u),
                p = s(8074),
                f = s(5846),
                h = s.n(f),
                g = s(2235),
                m = s(5214),
                A = () => {
                    let [e, t] = (0, i.useState)({
                        x: null,
                        y: null
                    }), s = e => {
                        t({
                            x: e.clientX,
                            y: e.clientY
                        })
                    };
                    return (0, i.useEffect)(() => (window.addEventListener("mousemove", s), () => window.removeEventListener("mousemove", s)), []), e
                },
                v = s(7214),
                w = s.n(v),
                y = s(226);
            let E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    y.ZP.from(e, {
                        opacity: 0,
                        y: 50,
                        duration: t,
                        delay: s,
                        ease: "power2.inOut"
                    })
                },
                N = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    y.ZP.from(e, {
                        opacity: 0,
                        y: -50,
                        duration: t,
                        delay: s,
                        ease: "power2.inOut"
                    })
                };
            var j, L, b, O, M, k, B, P, T = s(8453),
                D = s(4136),
                Z = function() {
                    return "undefined" != typeof window
                },
                z = function() {
                    return j || Z() && (j = window.gsap) && j.registerPlugin && j
                },
                S = function(e) {
                    return "string" == typeof e
                },
                R = function(e) {
                    return "function" == typeof e
                },
                I = function(e, t) {
                    var s = "x" === t ? "Width" : "Height",
                        l = "scroll" + s,
                        r = "client" + s;
                    return e === b || e === O || e === M ? Math.max(O[l], M[l]) - (b["inner" + s] || O[r] || M[r]) : e[l] - e["offset" + s]
                },
                C = function(e, t) {
                    var s = "scroll" + ("x" === t ? "Left" : "Top");
                    return e === b && (null != e.pageXOffset ? s = "page" + t.toUpperCase() + "Offset" : e = null != O[s] ? O : M),
                        function() {
                            return e[s]
                        }
                },
                _ = function(e, t, s, l) {
                    if (R(e) && (e = e(t, s, l)), "object" != typeof e) return S(e) && "max" !== e && "=" !== e.charAt(1) ? {
                        x: e,
                        y: e
                    } : {
                        y: e
                    };
                    if (e.nodeType) return {
                        y: e,
                        x: e
                    };
                    var r, n = {};
                    for (r in e) n[r] = "onAutoKill" !== r && R(e[r]) ? e[r](t, s, l) : e[r];
                    return n
                },
                W = function(e, t) {
                    if (!(e = k(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
                        x: 0,
                        y: 0
                    };
                    var s = e.getBoundingClientRect(),
                        l = !t || t === b || t === M,
                        r = l ? {
                            top: O.clientTop - (b.pageYOffset || O.scrollTop || M.scrollTop || 0),
                            left: O.clientLeft - (b.pageXOffset || O.scrollLeft || M.scrollLeft || 0)
                        } : t.getBoundingClientRect(),
                        n = {
                            x: s.left - r.left,
                            y: s.top - r.top
                        };
                    return !l && t && (n.x += C(t, "x")(), n.y += C(t, "y")()), n
                },
                Y = function(e, t, s, l, r) {
                    return isNaN(e) || "object" == typeof e ? S(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - r : "max" === e ? I(t, s) - r : Math.min(I(t, s), W(e, t)[s] - r) : parseFloat(e) - r
                },
                H = function() {
                    j = z(), Z() && j && "undefined" != typeof document && document.body && (b = window, M = document.body, O = document.documentElement, k = j.utils.toArray, j.config({
                        autoKillThreshold: 7
                    }), B = j.config(), L = 1)
                },
                X = {
                    version: "3.12.2",
                    name: "scrollTo",
                    rawVars: 1,
                    register: function(e) {
                        j = e, H()
                    },
                    init: function(e, t, s, l, r) {
                        L || H();
                        var n = j.getProperty(e, "scrollSnapType");
                        this.isWin = e === b, this.target = e, this.tween = s, t = _(t, l, e, r), this.vars = t, this.autoKill = !!t.autoKill, this.getX = C(e, "x"), this.getY = C(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), P || (P = j.core.globals().ScrollTrigger), "smooth" === j.getProperty(e, "scrollBehavior") && j.set(e, {
                            scrollBehavior: "auto"
                        }), n && "none" !== n && (this.snap = 1, this.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (this.add(this, "x", this.x, Y(t.x, e, "x", this.x, t.offsetX || 0), l, r), this._props.push("scrollTo_x")) : this.skipX = 1, null != t.y ? (this.add(this, "y", this.y, Y(t.y, e, "y", this.y, t.offsetY || 0), l, r), this._props.push("scrollTo_y")) : this.skipY = 1
                    },
                    render: function(e, t) {
                        for (var s, l, r, n, i, o = t._pt, a = t.target, c = t.tween, x = t.autoKill, u = t.xPrev, d = t.yPrev, p = t.isWin, f = t.snap, h = t.snapInline; o;) o.r(e, o.d), o = o._next;
                        s = p || !t.skipX ? t.getX() : u, r = (l = p || !t.skipY ? t.getY() : d) - d, n = s - u, i = B.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), x && (!t.skipX && (n > i || n < -i) && s < I(a, "x") && (t.skipX = 1), !t.skipY && (r > i || r < -i) && l < I(a, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), p ? b.scrollTo(t.skipX ? s : t.x, t.skipY ? l : t.y) : (t.skipY || (a.scrollTop = t.y), t.skipX || (a.scrollLeft = t.x)), f && (1 === e || 0 === e) && (l = a.scrollTop, s = a.scrollLeft, h ? a.style.scrollSnapType = h : a.style.removeProperty("scroll-snap-type"), a.scrollTop = l + 1, a.scrollLeft = s + 1, a.scrollTop = l, a.scrollLeft = s), t.xPrev = t.x, t.yPrev = t.y, P && P.update()
                    },
                    kill: function(e) {
                        var t = "scrollTo" === e;
                        (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
                    }
                };
            X.max = I, X.getOffset = W, X.buildGetter = C, z() && j.registerPlugin(X);
            var Q = s(6167),
                G = s(5984);
            y.ZP.registerPlugin(Q.i, X);
            var V = () => {
                    let e;
                    let {
                        isLoading: t,
                        dispatch: s
                    } = (0, x.Z)(), l = (0, i.useRef)([]), r = (0, i.useRef)(null), o = (0, i.useRef)(null), u = (0, i.useRef)(null), {
                        isMobile: f
                    } = (0, c.Z)("768"), {
                        isMobile: v
                    } = (0, c.Z)("450"), {
                        isMobile: j
                    } = (0, c.Z)("640"), [L, b] = (0, i.useState)(!1);
                    (0, i.useMemo)(() => "unactive" === f || "false" === f ? "hover" : "scroll", [f]);
                    let {
                        x: O,
                        y: M
                    } = A(), k = (0, i.useMemo)(() => L ? 330 : 0, [L]);
                    (0, i.useLayoutEffect)(() => {
                        let e = document.querySelector(".circcirc");
                        null == e || e.addEventListener("mouseenter", function(e) {
                            y.Q3.to(this, .3, {
                                height: 130,
                                width: 130
                            }), y.Q3.to(".circcirc", .3, {
                                scale: 1.1
                            })
                        }), null == e || e.addEventListener("mouseleave", function(e) {
                            y.Q3.to(this, .3, {
                                height: 110,
                                width: 110
                            }), y.Q3.to(".circcirc, .circpointer", .3, {
                                scale: 1,
                                x: 0,
                                y: 0
                            })
                        })
                    }, []), (0, i.useLayoutEffect)(() => {
                        y.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".circcnt",
                                scrub: .2,
                                start: "top+=360% top+=62%",
                                end: "top+=700%"
                            }
                        }).to(".circcnt", {
                            rotation: 360 * .7,
                            duration: 1,
                            ease: "none"
                        })
                    }, []), (0, i.useLayoutEffect)(() => {
                        ! function() {
                            if (window.innerWidth < 590) {
                                let e = new G.Z(".multi", {
                                    types: "lines, words, chars"
                                });
                                y.ZP.to(e.chars, {
                                    opacity: 1,
                                    translateY: "-100%",
                                    ease: "power3.out",
                                    delay: 0,
                                    duration: .3,
                                    stagger: .02
                                });
                                return
                            } {
                                let e = new G.Z(".multi", {
                                        types: "lines, words, chars"
                                    }),
                                    t = new G.Z(".disciplinary", {
                                        types: "lines, words, chars"
                                    }),
                                    s = new G.Z(".developer", {
                                        types: "lines, words, chars"
                                    });
                                y.ZP.to(e.chars, {
                                    opacity: 1,
                                    translateY: "-100%",
                                    ease: "power3.out",
                                    delay: 0,
                                    duration: .3,
                                    stagger: .02
                                }), y.ZP.to(t.chars, {
                                    opacity: 1,
                                    translateY: "-100%",
                                    ease: "power3.out",
                                    delay: .2,
                                    duration: .3,
                                    stagger: .02
                                }), y.ZP.to(s.chars, {
                                    opacity: 1,
                                    translateY: "-100%",
                                    ease: "power3.out",
                                    delay: .4,
                                    duration: .3,
                                    stagger: .02
                                })
                            }
                        }()
                    }, [f]), (0, i.useLayoutEffect)(() => {
                        E(".circouttercnt", 1, .4), N(".availabletext", .6, .9)
                    }, []), (0, i.useLayoutEffect)(() => {
                        let e = new G.Z(".gooddesign", {
                                types: "lines, words"
                            }),
                            t = new G.Z(".scrollhover", {
                                types: "lines, words"
                            });
                        y.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .7,
                            duration: .3
                        }), y.ZP.to(t.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .5,
                            duration: 1
                        }), y.ZP.fromTo(".heroPointer", {
                            translateX: 30,
                            opacity: 0
                        }, {
                            translateX: 0,
                            opacity: 1,
                            duration: .5,
                            ease: "ease3.inOut",
                            delay: .5
                        }), y.ZP.fromTo(".herodash", {
                            translateX: 30,
                            opacity: 0
                        }, {
                            translateX: 0,
                            opacity: 1,
                            duration: .5,
                            ease: "ease3.inOut",
                            delay: .5
                        })
                    }, [f]), (0, i.useLayoutEffect)(() => {
                        var e = document.querySelector("multi");
                        let t = y.ZP.timeline({
                            paused: !0
                        });
                        t.to(e, {
                            x: "".concat("-", "66.67%"),
                            duration: 5,
                            ease: "none",
                            repeat: -1
                        })
                    }, [f]);
                    let B = e => {
                            let t = [];
                            return e.split("").forEach((e, s) => {
                                t.push((0, n.jsx)("span", {
                                    ref: e => {
                                        var t;
                                        null == l || null === (t = l.current) || void 0 === t || t.push(e)
                                    },
                                    children: e
                                }, e + "_" + s))
                            }), t
                        },
                        P = () => {
                            y.ZP.to(l.current, {
                                scrollTrigger: {
                                    trigger: ".multi",
                                    scrub: !0,
                                    start: j ? "top top+=24%" : "top top+=34%",
                                    end: "+=".concat(window.innerHeight / 3)
                                },
                                opacity: 1,
                                ease: "none",
                                stagger: .1
                            })
                        };
                    return (0, i.useLayoutEffect)(() => {
                        P()
                    }, [f, j]), (0, i.useLayoutEffect)(() => {
                        let e = null == o ? void 0 : o.current,
                            t = null == u ? void 0 : u.current,
                            s = () => {
                                y.ZP.timeline().fromTo(t, {
                                    width: "0%",
                                    left: "0%",
                                    delay: 0
                                }, {
                                    width: "100%",
                                    duration: .2
                                }), y.ZP.timeline().add("midway")
                            },
                            l = () => {
                                y.ZP.fromTo(t, {
                                    width: "100%",
                                    left: "0%"
                                }, {
                                    width: "0%",
                                    left: "100%",
                                    duration: .2,
                                    immediateRender: !1
                                })
                            };
                        return null == e || e.addEventListener("mouseenter", s), null == e || e.addEventListener("mouseleave", l), () => {
                            null == e || e.removeEventListener("mouseenter", s), null == e || e.removeEventListener("mouseleave", l)
                        }
                    }, []), (0, n.jsxs)("div", {
                        className: "".concat(w().main, " heroupgrade"),
                        children: ["true" === f && (0, n.jsxs)("p", {
                            className: "text-[15px] flex flex-row items-center uppercase justify-center gap-[3px] left-[0] absolute md:top-[335px] sm:top-56 xs:top-48 top-[168px] px-5 lg:px-[70px] sm:px-[45px] ",
                            children: [(0, n.jsx)("span", {
                                className: "scrollhover",
                                children: "01//04 — scroll"
                            }), (0, n.jsx)(g.Z, {
                                children: (0, n.jsx)(d(), {
                                    src: m.MA,
                                    alt: "left pointer",
                                    className: "heroPointer rotate-90"
                                })
                            })]
                        }), "true" !== f && (0, n.jsxs)("p", {
                            className: "text-[15px] flex flex-row items-center uppercase justify-center gap-[3px] left-[0] absolute md:top-[335px] top-56 px-5 lg:px-[70px] sm:px-[45px] ",
                            children: [(0, n.jsx)("span", {
                                className: "scrollhover",
                                children: "01//04 — hover"
                            }), (0, n.jsx)(g.Z, {
                                children: (0, n.jsx)(d(), {
                                    src: m.MA,
                                    alt: "left pointer",
                                    className: "heroPointer"
                                })
                            })]
                        }), (0, n.jsx)(h(), {
                            href: "mailto:hello@aquadev.site",
                            target: "_blank",
                            ref: o,
                            className: "",
                            children: (0, n.jsx)("div", {
                                className: "w-fit z-[501] overflow-hidden h-[30px] relative top-[5.3%] font-NeueMontreal-Regular uppercase left-[50%] -translate-x-[50%] -translate-y-[50%] lg:block hidden",
                                children: (0, n.jsx)(p.Ak, {
                                    title: "current creative developer @twelvetwenty",
                                    id: 4,
                                    link: "https://twelvetwentystudio.com/",
                                    customClass: "w-fit text-[15px]"
                                })
                            })
                        }), "false" === f && (0, n.jsx)(T.E.div, {
                            className: w().mask,
                            animate: {
                                WebkitMaskPosition: "".concat(O - k / 2, "px ").concat(M - k / 2, "px"),
                                WebkitMaskSize: "".concat(k, "px")
                            },
                            transition: {
                                type: "tween",
                                ease: "backOut",
                                duration: .5
                            },
                            style: {
                                display: "flex"
                            },
                            children: (0, n.jsxs)("div", {
                                className: "relative -left-[2%] h-fit px-5 lg:px-[70px] sm:px-[45px]",
                                onMouseEnter: () => {
                                    b(!0), (0, a.ui)(s, !0)
                                },
                                onMouseLeave: () => {
                                    b(!1), (0, a.ui)(s, !1)
                                },
                                children: [(0, n.jsx)("p", {
                                    className: "text-[13px] w-fit font-NeueMontreal-Bold tracking-[3px] uppercase relative md:left-64 self-center md:self-auto text-primary",
                                    children: "Aqua_dev"
                                }), (0, n.jsx)("h1", {
                                    className: "flex items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary sm:relative sm:left-[22%] multi",
                                    children: (0, n.jsx)("span", {
                                        className: "marquee",
                                        children: "TALENTED"
                                    })
                                }), (0, n.jsx)("h1", {
                                    className: "whitespace-nowrap uppercase flex text-center items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary disciplinary",
                                    children: "innovative"
                                }), (0, n.jsxs)("h1", {
                                    className: "text-primary relative sm:left-[22%] w-fit xl:flex xl:flex-row xl:items-center",
                                    children: [(0, n.jsx)("span", {
                                        className: "sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary developer",
                                        children: "DEVELOPER"
                                    }), (0, n.jsx)("span", {
                                        className: "text-[15px] font-NeueMontreal-Medium uppercase ml-[27px] xl:block hidden gooddesign",
                                        children: "IF THE PAY IS HONEST"
                                    })]
                                })]
                            })
                        }), "true" === f && (0, n.jsx)("div", {
                            className: w().body,
                            ref: r,
                            children: (0, n.jsx)("h1", {
                                className: "font-NeueMontreal-Bold xs:text-center sm:text-left xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[66px] xxs:text-[54px] xl:leading-[100px] lg:leading-[90px] xs:leading-[69px] xxs:leading-[58px] sm:leading-[72px] text-neutral  multi ".concat(w().herobody),
                                children: (e = [], (v ? "RENOWNED CREATIVE ENGINNER" : "MULTI DISCIPLINED DEVELOPER").split(" ").forEach((t, s) => {
                                    let l = B(t);
                                    e.push((0, n.jsx)("p", {
                                        children: l
                                    }, t + "_" + s))
                                }), e)
                            })
                        }), " ", "false" === f && (0, n.jsx)("div", {
                            className: w().body,
                            children: (0, n.jsxs)("div", {
                                className: "relative",
                                children: [(0, n.jsx)("p", {
                                    className: "text-[13px] w-fit font-NeueMontreal-Bold tracking-[3px] uppercase relative md:left-[152px] px-5 lg:px-[70px] sm:px-[45px] self-center md:self-auto text-neutral",
                                    children: "AD"
                                }), (0, n.jsxs)("h1", {
                                    className: "flex items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral sm:relative sm:left-[18%] multi",
                                    children: [(0, n.jsx)("span", {
                                        className: "marquee",
                                        children: "MULTI"
                                    }), "false" === f && (0, n.jsx)("svg", {
                                        className: "xl:w-[66px] xl:h-[17px] lg:w-[40px] lg:h-[11px] md:w-[40px] md:h-[8px] w-[32px] h-[6px] ml-3 herodash ",
                                        viewBox: "0 0 66 17",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, n.jsx)("path", {
                                            d: "M0.844688 0.479999H33.4847V16.92H0.844688V0.479999ZM32.64 0.479999H65.28V16.92H32.64V0.479999Z",
                                            fill: "#000"
                                        })
                                    })]
                                }), (0, n.jsx)("h1", {
                                    className: "whitespace-nowrap flex text-center items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral disciplinary",
                                    children: "DISCIPLINED"
                                }), (0, n.jsxs)("h1", {
                                    className: "text-neutral relative sm:left-[18%] w-fit xl:flex xl:flex-row xl:items-center",
                                    children: [(0, n.jsx)("span", {
                                        className: "sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral developer",
                                        children: "DEVELOPER"
                                    }), (0, n.jsx)("span", {
                                        className: "text-[15px] font-NeueMontreal-Medium uppercase ml-[27px] xl:block hidden gooddesign",
                                        children: "GOOD DESIGN IS HONEST"
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-full flex items-center justify-center relative z-[500] md:-top-[250px] -top-[300px] circouttercnt",
                            onClick: () => {
                                document.querySelector("#landingabout"), y.ZP.to(window, {
                                    duration: 2,
                                    scrollTo: {
                                        y: "true" === f ? 400 : 600
                                    },
                                    ease: D.Lp.easeInOut
                                })
                            },
                            children: (0, n.jsx)(g.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex self-center flex-row relative h-[230px] w-[230px] justify-center items-center circcnt",
                                    children: [(0, n.jsx)(g.Z, {
                                        children: (0, n.jsx)("svg", {
                                            className: "circcirc absolute",
                                            id: "demo",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "false" === v ? "120" : "100",
                                            height: "false" === v ? "120" : "100",
                                            viewBox: "0 0 100 100",
                                            children: (0, n.jsx)("circle", {
                                                id: "test",
                                                stroke: "black",
                                                "stroke-width": "2",
                                                fill: "none",
                                                cx: "50",
                                                cy: "50",
                                                r: "40"
                                            })
                                        })
                                    }), (0, n.jsx)(g.Z, {
                                        children: (0, n.jsx)("svg", {
                                            className: "circcirc absolute",
                                            id: "demo",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "false" === v ? "120" : "100",
                                            height: "false" === v ? "120" : "100",
                                            viewBox: "0 0 100 100",
                                            children: (0, n.jsx)("circle", {
                                                id: "test",
                                                stroke: "black",
                                                "stroke-width": "2",
                                                fill: "none",
                                                cx: "50",
                                                cy: "50",
                                                r: "40"
                                            })
                                        })
                                    }), (0, n.jsx)(g.Z, {
                                        children: (0, n.jsx)(d(), {
                                            src: m.a8,
                                            alt: "hero pointer down circpointer",
                                            className: "xs:w-[29px] w-[35px]"
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                K = s(2915),
                F = s(789),
                U = s(2864);
            let q = new WeakMap;

            function J({
                target: e,
                contentRect: t,
                borderBoxSize: s
            }) {
                var l;
                null === (l = q.get(e)) || void 0 === l || l.forEach(l => {
                    l({
                        target: e,
                        contentSize: t,
                        get size() {
                            return function(e, t) {
                                if (t) {
                                    let {
                                        inlineSize: e,
                                        blockSize: s
                                    } = t[0];
                                    return {
                                        width: e,
                                        height: s
                                    }
                                }
                                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                }
                            }(e, s)
                        }
                    })
                })
            }

            function $(e) {
                e.forEach(J)
            }
            let ee = new Set;
            var et = s(2581),
                es = s(1977);
            let el = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                er = () => ({
                    time: 0,
                    x: el(),
                    y: el()
                }),
                en = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function ei(e, t, s, l) {
                let r = s[t],
                    {
                        length: n,
                        position: i
                    } = en[t],
                    o = r.current,
                    a = s.time;
                r.current = e["scroll" + i], r.scrollLength = e["scroll" + n] - e["client" + n], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = (0, et.Y)(0, r.scrollLength, r.current);
                let c = l - a;
                r.velocity = c > 50 ? 0 : (0, es.R)(r.current - o, c)
            }
            let eo = {
                    Enter: [
                        [0, 1],
                        [1, 1]
                    ],
                    Exit: [
                        [0, 0],
                        [1, 0]
                    ],
                    Any: [
                        [1, 0],
                        [0, 1]
                    ],
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                ea = {
                    start: 0,
                    center: .5,
                    end: 1
                };

            function ec(e, t, s = 0) {
                let l = 0;
                if (void 0 !== ea[e] && (e = ea[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? l = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? l = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? l = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (l = t * e), s + l
            }
            let ex = [0, 0];
            var eu = s(5340),
                ed = s(7534);
            let ep = {
                x: 0,
                y: 0
            };
            var ef = s(1253);
            let eh = new WeakMap,
                eg = new WeakMap,
                em = new WeakMap,
                eA = e => e === document.documentElement ? window : e;
            var ev = s(3398);

            function ew(e, t) {
                (0, U.K)(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
            }
            let ey = () => ({
                scrollX: (0, K.BX)(0),
                scrollY: (0, K.BX)(0),
                scrollXProgress: (0, K.BX)(0),
                scrollYProgress: (0, K.BX)(0)
            });

            function eE({
                container: e,
                target: t,
                layoutEffect: s = !0,
                ...n
            } = {}) {
                let o = (0, F.h)(ey),
                    a = s ? ev.L : i.useEffect;
                return a(() => (ew("target", t), ew("container", e), function(e, {
                    container: t = document.documentElement,
                    ...s
                } = {}) {
                    let n = em.get(t);
                    n || (n = new Set, em.set(t, n));
                    let i = er(),
                        o = function(e, t, s, l = {}) {
                            return {
                                measure: () => (function(e, t = e, s) {
                                    if (s.x.targetOffset = 0, s.y.targetOffset = 0, t !== e) {
                                        let l = t;
                                        for (; l && l !== e;) s.x.targetOffset += l.offsetLeft, s.y.targetOffset += l.offsetTop, l = l.offsetParent
                                    }
                                    s.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, s.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, s.x.containerLength = e.clientWidth, s.y.containerLength = e.clientHeight
                                })(e, l.target, s),
                                update: t => {
                                    ei(e, "x", s, t), ei(e, "y", s, t), s.time = t, (l.offset || l.target) && function(e, t, s) {
                                        let {
                                            offset: l = eo.All
                                        } = s, {
                                            target: r = e,
                                            axis: n = "y"
                                        } = s, i = "y" === n ? "height" : "width", o = r !== e ? function(e, t) {
                                            let s = {
                                                    x: 0,
                                                    y: 0
                                                },
                                                l = e;
                                            for (; l && l !== t;)
                                                if (l instanceof HTMLElement) s.x += l.offsetLeft, s.y += l.offsetTop, l = l.offsetParent;
                                                else if (l instanceof SVGGraphicsElement && "getBBox" in l) {
                                                let {
                                                    top: e,
                                                    left: t
                                                } = l.getBBox();
                                                for (s.x += t, s.y += e; l && "svg" !== l.tagName;) l = l.parentNode
                                            }
                                            return s
                                        }(r, e) : ep, a = r === e ? {
                                            width: e.scrollWidth,
                                            height: e.scrollHeight
                                        } : {
                                            width: r.clientWidth,
                                            height: r.clientHeight
                                        }, c = {
                                            width: e.clientWidth,
                                            height: e.clientHeight
                                        };
                                        t[n].offset.length = 0;
                                        let x = !t[n].interpolate,
                                            u = l.length;
                                        for (let e = 0; e < u; e++) {
                                            let s = function(e, t, s, l) {
                                                let r = Array.isArray(e) ? e : ex,
                                                    n = 0;
                                                return "number" == typeof e ? r = [e, e] : "string" == typeof e && (r = (e = e.trim()).includes(" ") ? e.split(" ") : [e, ea[e] ? e : "0"]), ec(r[0], s, l) - ec(r[1], t)
                                            }(l[e], c[i], a[i], o[n]);
                                            x || s === t[n].interpolatorOffsets[e] || (x = !0), t[n].offset[e] = s
                                        }
                                        x && (t[n].interpolate = (0, eu.s)(t[n].offset, (0, ed.Y)(l)), t[n].interpolatorOffsets = [...t[n].offset]), t[n].progress = t[n].interpolate(t[n].current)
                                    }(e, s, l)
                                },
                                notify: () => t(s)
                            }
                        }(t, e, i, s);
                    if (n.add(o), !eh.has(t)) {
                        let e = () => {
                                for (let e of n) e.measure()
                            },
                            s = () => {
                                for (let e of n) e.update(ef.frameData.timestamp)
                            },
                            i = () => {
                                for (let e of n) e.notify()
                            },
                            o = () => {
                                ef.Wi.read(e, !1, !0), ef.Wi.update(s, !1, !0), ef.Wi.update(i, !1, !0)
                            };
                        eh.set(t, o);
                        let a = eA(t);
                        window.addEventListener("resize", o, {
                            passive: !0
                        }), t !== document.documentElement && eg.set(t, "function" == typeof t ? (ee.add(t), r || (r = () => {
                            let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                },
                                t = {
                                    target: window,
                                    size: e,
                                    contentSize: e
                                };
                            ee.forEach(e => e(t))
                        }, window.addEventListener("resize", r)), () => {
                            ee.delete(t), !ee.size && r && (r = void 0)
                        }) : function(e, t) {
                            l || "undefined" == typeof ResizeObserver || (l = new ResizeObserver($));
                            let s = function(e, t, s) {
                                var l;
                                if ("string" == typeof e) {
                                    let r = document;
                                    t && ((0, U.k)(!!t.current, "Scope provided, but no element detected."), r = t.current), s ? (null !== (l = s[e]) && void 0 !== l || (s[e] = r.querySelectorAll(e)), e = s[e]) : e = r.querySelectorAll(e)
                                } else e instanceof Element && (e = [e]);
                                return Array.from(e || [])
                            }(e);
                            return s.forEach(e => {
                                let s = q.get(e);
                                s || (s = new Set, q.set(e, s)), s.add(t), null == l || l.observe(e)
                            }), () => {
                                s.forEach(e => {
                                    let s = q.get(e);
                                    null == s || s.delete(t), (null == s ? void 0 : s.size) || null == l || l.unobserve(e)
                                })
                            }
                        }(t, o)), a.addEventListener("scroll", o, {
                            passive: !0
                        })
                    }
                    let a = eh.get(t);
                    return ef.Wi.read(a, !1, !0), () => {
                        var e;
                        (0, ef.Pn)(a);
                        let s = em.get(t);
                        if (!s || (s.delete(o), s.size)) return;
                        let l = eh.get(t);
                        eh.delete(t), l && (eA(t).removeEventListener("scroll", l), null === (e = eg.get(t)) || void 0 === e || e(), window.removeEventListener("resize", l))
                    }
                }(({
                    x: e,
                    y: t
                }) => {
                    o.scrollX.set(e.current), o.scrollXProgress.set(e.progress), o.scrollY.set(t.current), o.scrollYProgress.set(t.progress)
                }, { ...n,
                    container: (null == e ? void 0 : e.current) || void 0,
                    target: (null == t ? void 0 : t.current) || void 0
                })), []), o
            }
            let eN = e => "object" == typeof e && e.mix,
                ej = e => eN(e) ? e.mix : void 0;
            var eL = s(9061);

            function eb(e, t) {
                let s = function(e) {
                        let t = (0, F.h)(() => (0, K.BX)(e)),
                            {
                                isStatic: s
                            } = (0, i.useContext)(eL._);
                        if (s) {
                            let [, s] = (0, i.useState)(e);
                            (0, i.useEffect)(() => t.on("change", s), [])
                        }
                        return t
                    }(t()),
                    l = () => s.set(t());
                return l(), (0, ev.L)(() => {
                    let t = () => ef.Wi.update(l, !1, !0),
                        s = e.map(e => e.on("change", t));
                    return () => {
                        s.forEach(e => e()), (0, ef.Pn)(l)
                    }
                }), s
            }

            function eO(e, t) {
                let s = (0, F.h)(() => []);
                return eb(e, () => {
                    s.length = 0;
                    let l = e.length;
                    for (let t = 0; t < l; t++) s[t] = e[t].get();
                    return t(s)
                })
            }
            var eM = s(982),
                ek = s(40),
                eB = () => {
                    let e = (0, i.useRef)(null),
                        t = (0, i.useRef)(null),
                        {
                            scrollYProgress: s
                        } = eE({
                            target: e,
                            offset: ["start 0.95", "start 0.35"]
                        }),
                        {
                            scrollYProgress: l
                        } = eE({
                            target: t,
                            offset: ["start 0.75", "start 0.15"]
                        }),
                        r = ek.HD.split(" "),
                        o = ek.Fe.split(" ");
                    return (0, n.jsxs)("div", {
                        className: "lg:mt-[73px] lg:mb-[300px] md:mb-[100px] relative lg:top-0 -top-[120px]",
                        children: [(0, n.jsx)(T.E.h2, {
                            style: {
                                opacity: s
                            },
                            ref: e,
                            className: "text-left max-w-[1152px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.25] md:leading-[28px] leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal",
                            children: r.map((e, t) => {
                                let l;
                                let i = t / r.length,
                                    o = i + 1 / r.length;
                                switch (e.toUpperCase()) {
                                    case "TALENTED":
                                    case "MODERN":
                                    case "BLENDING":
                                    case "TECH":
                                    case "TO":
                                    case "EXPERIENCES.":
                                    case "DEVELOPER":
                                    case "-":
                                        l = !0;
                                        break;
                                    default:
                                        l = null
                                }
                                return (0, n.jsx)(eP, {
                                    shift: l,
                                    range: [i, o],
                                    progress: s,
                                    children: e
                                }, t)
                            })
                        }), (0, n.jsx)(T.E.h2, {
                            style: {
                                opacity: l
                            },
                            ref: t,
                            className: "text-left max-w-[1152px] mt-[67px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.25] md:leading-[36px] leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal",
                            children: o.map((e, t) => {
                                let s;
                                let r = t / o.length,
                                    i = r + 1 / o.length;
                                switch (e.toUpperCase()) {
                                    case "GUITAR":
                                    case "PLAYED":
                                    case "I":
                                    case "WEB":
                                        s = !0;
                                        break;
                                    default:
                                        s = null
                                }
                                return (0, n.jsx)(eP, {
                                    shift: s,
                                    range: [r, i],
                                    progress: l,
                                    children: e
                                }, t)
                            })
                        })]
                    })
                };
            let eP = e => {
                let {
                    children: t,
                    range: s,
                    progress: l,
                    shift: r
                } = e, o = function(e, t, s, l) {
                    if ("function" == typeof e) return function(e) {
                        K.S1.current = [], e();
                        let t = eb(K.S1.current, e);
                        return K.S1.current = void 0, t
                    }(e);
                    let r = "function" == typeof t ? t : function(...e) {
                        let t = !Array.isArray(e[0]),
                            s = t ? 0 : -1,
                            l = e[0 + s],
                            r = e[1 + s],
                            n = e[2 + s],
                            i = e[3 + s],
                            o = (0, eu.s)(r, n, {
                                mixer: ej(n[0]),
                                ...i
                            });
                        return t ? o(l) : o
                    }(t, s, void 0);
                    return Array.isArray(e) ? eO(e, r) : eO([e], ([e]) => r(e))
                }(l, s, [0, 1]), a = () => {
                    if (!r) return "";
                    switch (t.toUpperCase()) {
                        case "TALENTED":
                        case "WEB":
                            return "ml-[40px]";
                        case "MODERN":
                            return "ml-[10px]";
                        case "BLENDING":
                            return "md:ml-[20px]";
                        case "TECH":
                            return "md:ml-[40px]";
                        case "TO":
                        default:
                            return "";
                        case "EXPERIENCES.":
                        case "GUITAR":
                        case "DEVELOPER":
                            return "font-NeueMontreal-Bold";
                        case "-":
                            return "lineexpand ml-[20px] mr-[20px] my-0 items-center flex justify-center"
                    }
                };
                return (0, i.useLayoutEffect)(() => {
                    y.ZP.to(".shuriken", {
                        rotation: 324,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: ".shuriken",
                            start: "top top+=80%",
                            scrub: 1
                        }
                    }), y.ZP.to(".lineexpand", {
                        scaleX: 3,
                        duration: 9,
                        scrollTrigger: {
                            trigger: ".lineexpand",
                            start: "top top+=70%",
                            end: "top top+=10%",
                            scrub: 1
                        }
                    })
                }, []), (0, n.jsxs)("div", {
                    className: "flex relative items-center",
                    children: ["MODERN" === t.toUpperCase() && (0, n.jsx)(g.Z, {
                        children: (0, n.jsx)(d(), {
                            className: "m-0 shuriken",
                            src: eM.Z,
                            alt: "shurikenicon"
                        })
                    }), (0, n.jsxs)("span", {
                        className: "mr-3 relative ".concat(a()),
                        children: [(0, n.jsx)("span", {
                            className: "absolute opacity-[0.3] ".concat(a()),
                            children: t
                        }), (0, n.jsx)(T.E.span, {
                            className: "".concat(a()),
                            style: {
                                opacity: o
                            },
                            children: t
                        })]
                    })]
                })
            };
            var eT = s(8228),
                eD = s(4924),
                eZ = () => {
                    let e = (0, i.useRef)(null),
                        {
                            dispatch: t
                        } = (0, x.Z)();
                    (0, i.useLayoutEffect)(() => {
                        let e = new G.Z(".services", {
                            types: "lines, words"
                        });
                        y.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".services",
                                start: "top top+=90%"
                            }
                        }), y.ZP.to(".projectLineservice", {
                            width: "100%",
                            duration: 1.7,
                            ease: D.Lp.easeInOut,
                            scrollTrigger: {
                                trigger: ".projectLineservice",
                                start: "top top+=90%",
                                end: "top top"
                            }
                        })
                    }, []);
                    let s = t => {
                        e.current.style.opacity = t ? .8 : 0
                    };
                    return (0, n.jsxs)("div", {
                        className: "lg:mb-0 ",
                        children: [(0, n.jsxs)("div", {
                            className: "lg:mb-[119px] sm:mb-[60px] mb-[40px]",
                            children: [(0, n.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, n.jsx)("h2", {
                                    className: "text-[18px] uppercase font-NeueMontreal-Regular services",
                                    children: "Services"
                                }), (0, n.jsx)(p._p, {
                                    title: "MORE ABOUT ME",
                                    id: 2,
                                    onPress: () => (0, a.xe)(t, !0, "/about"),
                                    customClass: "h-[33px] leading-[30px]",
                                    showIcon: !0
                                })]
                            }), (0, n.jsx)("div", {
                                className: "projectLineservice h-[1.5px] w-0 bg-[#000] mt-[22px]"
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "w-full flex flex-col md:gap-[67px] gap-[30px]",
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(p.u0, {
                                    characterStyle: "text-left font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw]",
                                    setBackground: s,
                                    children: (0, n.jsx)("p", {
                                        children: "CREATIVE"
                                    })
                                }), (0, n.jsx)("p", {
                                    className: "text-left font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw] relative inline-flex",
                                    children: "DEVELOPMENT"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "self-end w-fit text-right",
                                children: [(0, n.jsx)(p.u0, {
                                    characterStyle: "text-left font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw]",
                                    setBackground: s,
                                    children: (0, n.jsx)("p", {
                                        children: "FRONT END"
                                    })
                                }), (0, n.jsx)("p", {
                                    className: "text-left self-end font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw] relative inline-flex",
                                    children: "ENGINEERING"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "w-fit",
                                children: [(0, n.jsx)(p.u0, {
                                    characterStyle: "text-left font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw]",
                                    setBackground: s,
                                    children: (0, n.jsx)("p", {
                                        children: "MOBILE"
                                    })
                                }), (0, n.jsx)("p", {
                                    className: "text-left self-end font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw] relative inline-flex",
                                    children: "DEVELOPMENT"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "self-end w-fit text-right",
                                children: [(0, n.jsx)(p.u0, {
                                    characterStyle: "text-left font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw]",
                                    setBackground: s,
                                    children: (0, n.jsx)("p", {
                                        children: "BACK END"
                                    })
                                }), (0, n.jsx)("p", {
                                    className: "text-left self-end font-Clash-Grotesk-Medium text-[9vw] leading-[7.5vw] relative inline-flex",
                                    children: "DEVELOPMENT"
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "fixed w-screen h-screen bg-[#000] left-0 top-0 pointer-events-none z-[790] opacity-0",
                            style: {
                                transition: "opacity 0.5s ease"
                            },
                            ref: e
                        })]
                    })
                },
                ez = s(3113),
                eS = s(1852);

            function eR() {
                let {
                    dispatch: e,
                    project: t,
                    projectScreenShow: s,
                    sectionToScroll: l
                } = (0, x.Z)();
                return ((0, i.useLayoutEffect)(() => {
                    let t;
                    if (!s && l) {
                        let s = document.getElementById(l);
                        s && (t = setTimeout(() => {
                            s.scrollIntoView({
                                behavior: "smooth"
                            }), (0, a.w3)(e, null)
                        }, 1e3))
                    }
                    return () => {
                        clearTimeout(t)
                    }
                }, [s]), s) ? (0, n.jsx)(ez.Z, {
                    project: t,
                    closePopup: () => {
                        (0, a.Vk)(e)
                    }
                }) : (0, n.jsx)(eS.Z, {
                    children: (0, n.jsxs)("main", {
                        className: " ",
                        children: [(0, n.jsx)(V, {}), (0, n.jsxs)("div", {
                            className: "top-20 bottom-0 w-full px-5 lg:px-[70px] sm:px-[45px] relative",
                            children: [(0, n.jsx)(eB, {}), (0, n.jsx)(eT.Z, {}), (0, n.jsx)(eZ, {}), (0, n.jsx)(eD.Z, {}), (0, n.jsx)(o.Z, {})]
                        })]
                    })
                })
            }
        },
        5214: function(e, t, s) {
            "use strict";
            s.d(t, {
                _2: function() {
                    return n
                },
                io: function() {
                    return i
                },
                MA: function() {
                    return l
                },
                a8: function() {
                    return r
                }
            });
            var l = {
                    src: "/_next/static/media/hero-pointer.e78bf8e2.svg",
                    height: 11,
                    width: 11,
                    blurWidth: 0,
                    blurHeight: 0
                },
                r = {
                    src: "/_next/static/media/hero-pointer-down.afdacced.svg",
                    height: 42,
                    width: 42,
                    blurWidth: 0,
                    blurHeight: 0
                },
                n = {
                    src: "/_next/static/media/about-cover.331a0471.jpg",
                    height: 2811,
                    width: 4211,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAgIDAQAAAAAAAAAAAAABAwAEAhEGMXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAwDAQACEQMRAD8AnFVqLnHnIdSQc6+BKngEMBOQ7O9Eej7ERDVzhN//2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                i = {
                    src: "/_next/static/media/about_self.1191b713.jpg",
                    height: 1920,
                    width: 1440,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAAABgEFAAAAAAAAAAAAAAAAAQIDBBEFEiEiYZH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKODmpsnKvMTm0oSTepBERWfKrvvbwAATGf/2Q==",
                    blurWidth: 6,
                    blurHeight: 8
                }
        },
        7214: function(e) {
            e.exports = {
                main: "landing_main__6aiEQ",
                mask: "landing_mask__ur_og",
                body: "landing_body__Lt8sp",
                herobody: "landing_herobody__vyOks",
                multi: "landing_multi__Fze7C",
                line: "landing_line__BkXLD"
            }
        },
        982: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/shuriken.1d0f49fc.svg",
                height: 36,
                width: 36,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [224, 845, 541, 405, 253, 698, 744], function() {
            return e(e.s = 1592)
        }), _N_E = e.O()
    }
]);