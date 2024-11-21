(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        761: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 8846)), Promise.resolve().then(n.bind(n, 839)), Promise.resolve().then(n.bind(n, 9020)), Promise.resolve().then(n.bind(n, 7204)), Promise.resolve().then(n.bind(n, 8387)), Promise.resolve().then(n.bind(n, 4473)), Promise.resolve().then(n.bind(n, 9725)), Promise.resolve().then(n.bind(n, 2019)), Promise.resolve().then(n.bind(n, 7757)), Promise.resolve().then(n.bind(n, 7702)), Promise.resolve().then(n.bind(n, 1773)), Promise.resolve().then(n.bind(n, 9992)), Promise.resolve().then(n.t.bind(n, 5992, 23))
        },
        2235: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(6006),
                s = n(226);

            function i(e) {
                let {
                    children: t
                } = e, n = (0, a.useRef)(null);
                return (0, a.useLayoutEffect)(() => {
                    let e = s.ZP.quickTo(n.current, "x", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        }),
                        t = s.ZP.quickTo(n.current, "y", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    n.current.addEventListener("mousemove", a => {
                        let {
                            clientX: s,
                            clientY: i
                        } = a, {
                            height: r,
                            width: l,
                            left: o,
                            top: c
                        } = n.current.getBoundingClientRect();
                        e(s - (o + l / 2)), t(i - (c + r / 2))
                    }), n.current.addEventListener("mouseleave", n => {
                        e(0), t(0)
                    })
                }, []), a.cloneElement(t, {
                    ref: n
                })
            }
        },
        7204: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(9268),
                s = n(6006),
                i = n(8846),
                r = n(9770);
            t.default = () => {
                let {
                    dispatch: e,
                    menuIsOpen: t
                } = (0, s.useContext)(i.GlobalContext);
                return "open" !== t ? null : (0, a.jsx)("div", {
                    onClick: () => {
                        switch (t) {
                            case "unset":
                            case "closed":
                            case "linkClicked_close":
                                (0, r.zi)(e);
                                break;
                            case "open":
                                (0, r.wz)(e)
                        }
                    },
                    className: "fixed w-screen h-screen bg-[#000]/30 top-0 left-0 z-[690] "
                })
            }
        },
        8387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n(9268),
                s = n(6006),
                i = n(226),
                r = n(8452),
                l = n.n(r),
                o = n(7743),
                c = n(8846),
                u = n(9770),
                d = n(8935),
                x = n.n(d),
                f = n(8453),
                m = n(6008);
            let h = {
                    initial: {
                        x: "calc(100% + 100px)"
                    },
                    enter: {
                        x: "0",
                        transition: {
                            duration: .8,
                            ease: [.76, 0, .24, 1]
                        }
                    },
                    exit: {
                        x: "calc(100% + 100px)",
                        transition: {
                            duration: .8,
                            ease: [.76, 0, .24, 1]
                        }
                    }
                },
                p = {
                    initial: {
                        x: 80
                    },
                    enter: e => ({
                        x: 0,
                        transition: {
                            duration: .8,
                            ease: [.76, 0, .24, 1],
                            delay: .05 * e
                        }
                    }),
                    exit: e => ({
                        x: 80,
                        transition: {
                            duration: .8,
                            ease: [.76, 0, .24, 1],
                            delay: .05 * e
                        }
                    })
                },
                v = {
                    open: {
                        scale: 1,
                        transition: {
                            duration: .3
                        }
                    },
                    closed: {
                        scale: 0,
                        transition: {
                            duration: .4
                        }
                    }
                };
            var b = n(874),
                w = n.n(b),
                y = n(5846),
                g = n.n(y);

            function j(e) {
                let {
                    data: t,
                    isActive: n,
                    setSelectedIndicator: r,
                    linkRef: l,
                    socialLink: o
                } = e, d = (0, s.useRef)(null), {
                    menuIsOpen: x,
                    dispatch: m
                } = (0, s.useContext)(c.GlobalContext), h = e => {
                    switch (x) {
                        case "unset":
                        case "closed":
                        case "linkClicked_close":
                            (0, u.zi)(m);
                            break;
                        case "open":
                            (0, u.wz)(m)
                    }
                    o || (0, u.xe)(m, !0, e)
                };
                (0, s.useLayoutEffect)(() => {
                    let e = null == l ? void 0 : l.current,
                        t = d.current;
                    i.ZP.timeline();
                    let n = () => {
                            i.ZP.timeline().fromTo(t, {
                                width: "0%",
                                left: "0%",
                                delay: 0
                            }, {
                                width: "100%",
                                duration: .2
                            }), i.ZP.timeline().add("midway")
                        },
                        a = () => {
                            i.ZP.fromTo(t, {
                                width: "100%",
                                left: "0%"
                            }, {
                                width: "0%",
                                left: "100%",
                                duration: .2,
                                immediateRender: !1
                            })
                        };
                    return null == e || e.addEventListener("mouseenter", n), null == e || e.addEventListener("mouseleave", a), () => {
                        null == e || e.removeEventListener("mouseenter", n), null == e || e.removeEventListener("mouseleave", a)
                    }
                }, []);
                let {
                    title: b,
                    href: y,
                    index: j
                } = t;
                return (0, a.jsxs)(f.E.div, {
                    className: w().link,
                    onMouseEnter: () => {
                        r && r(y)
                    },
                    custom: j,
                    variants: p,
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    children: [(0, a.jsx)(f.E.div, {
                        variants: v,
                        animate: n ? "open" : "closed",
                        className: w().indicator
                    }), o ? (0, a.jsxs)(g(), {
                        ref: l,
                        target: o ? "_blank" : "_self",
                        onClick: () => h(y),
                        href: o && y,
                        children: [b, (0, a.jsx)("div", {
                            ref: d,
                            className: "bg-primary text-primary relative left-0 w-0 h-[2px] mt-[0.3px] lineLink"
                        })]
                    }) : (0, a.jsxs)("p", {
                        ref: l,
                        onClick: () => h(y),
                        children: [b, (0, a.jsx)("div", {
                            ref: d,
                            className: "bg-primary text-primary relative left-0 w-0 h-[2px] mt-[0.3px] lineLink"
                        })]
                    })]
                })
            }
            var _ = n(1473),
                P = n.n(_);

            function N() {
                let e = "M100 0 L200 0 L200 ".concat(window.innerHeight, " L100 ").concat(window.innerHeight, " Q-100 ").concat(window.innerHeight / 2, " 100 0"),
                    t = "M100 0 L200 0 L200 ".concat(window.innerHeight, " L100 ").concat(window.innerHeight, " Q100 ").concat(window.innerHeight / 2, " 100 0");
                return (0, a.jsx)("svg", {
                    className: P().svgCurve,
                    children: (0, a.jsx)(f.E.path, {
                        variants: {
                            initial: {
                                d: e
                            },
                            enter: {
                                d: t,
                                transition: {
                                    duration: 1,
                                    ease: [.76, 0, .24, 1]
                                }
                            },
                            exit: {
                                d: e,
                                transition: {
                                    duration: .8,
                                    ease: [.76, 0, .24, 1]
                                }
                            }
                        },
                        initial: "initial",
                        animate: "enter",
                        exit: "exit"
                    })
                })
            }
            let k = [{
                title: "Twitter",
                href: "https://twitter.com/AkogunOyindamo3"
            }, {
                title: "Github",
                href: "https://github.com/damoski2"
            }, {
                title: "LinkedIn",
                href: "https://www.linkedin.com/in/oyindacodes/"
            }];
            var L = () => {
                let e = (0, s.useRef)([]);
                3 !== e.current.length && (e.current = [, , , ].fill(null).map((t, n) => e.current[n] || (0, s.createRef)()));
                let t = (0, m.usePathname)(),
                    [n, i] = (0, s.useState)(t);
                return (0, a.jsxs)("div", {
                    className: "md:block hidden",
                    children: [(0, a.jsx)("div", {
                        className: x().intouch,
                        children: (0, a.jsx)("p", {
                            children: "Get in touch"
                        })
                    }), (0, a.jsx)("div", {
                        className: "flex items-center gap-[30px]",
                        children: k.map((t, n) => (0, a.jsx)(j, {
                            linkRef: e.current[n],
                            data: { ...t,
                                index: n
                            },
                            socialLink: !0
                        }, n))
                    })]
                })
            };
            let Z = [{
                title: "Home",
                href: "/index.html"
            }, {
                title: "Work",
                href: "/works.html"
            }, {
                title: "About",
                href: "/about.html"
            }];

            function E() {
                let e = (0, s.useRef)([]);
                3 !== e.current.length && (e.current = [, , , ].fill(null).map((t, n) => e.current[n] || (0, s.createRef)()));
                let t = (0, m.usePathname)(),
                    [n, i] = (0, s.useState)(t);
                return (0, a.jsxs)(f.E.div, {
                    variants: h,
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    className: x().menu,
                    children: [(0, a.jsxs)("div", {
                        className: x().body,
                        children: [(0, a.jsxs)("div", {
                            onMouseLeave: () => {
                                i(t)
                            },
                            className: x().nav,
                            children: [(0, a.jsx)("div", {
                                className: x().header,
                                children: (0, a.jsx)("p", {
                                    children: "Navigation"
                                })
                            }), Z.map((t, s) => (0, a.jsx)(j, {
                                linkRef: e.current[s],
                                data: { ...t,
                                    index: s
                                },
                                isActive: n == t.href,
                                setSelectedIndicator: i
                            }, s))]
                        }), (0, a.jsx)(L, {})]
                    }), (0, a.jsx)(N, {})]
                })
            }
            var C = n(2235),
                M = () => {
                    let {
                        dispatch: e,
                        menuIsOpen: t,
                        projectScreenShow: n
                    } = (0, s.useContext)(c.GlobalContext);
                    return ((0, s.useLayoutEffect)(() => {
                        i.ZP.fromTo(".hambutton", {
                            translateX: 400,
                            opacity: 0
                        }, {
                            translateX: 0,
                            opacity: 1,
                            duration: .5,
                            ease: "ease3.inOut",
                            delay: .5
                        })
                    }, []), n) ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: l().main,
                            children: (0, a.jsx)("div", {
                                className: l().header,
                                children: (0, a.jsx)(C.Z, {
                                    children: (0, a.jsx)("div", {
                                        onClick: () => {
                                            switch (t) {
                                                case "unset":
                                                case "closed":
                                                case "linkClicked_close":
                                                    (0, u.zi)(e);
                                                    break;
                                                case "open":
                                                    (0, u.wz)(e)
                                            }
                                        },
                                        className: "".concat(l().button, " hambutton"),
                                        children: (0, a.jsx)(C.Z, {
                                            children: (0, a.jsx)("div", {
                                                className: "".concat(l().burger, " ").concat("open" === t ? l().burgerActive : "")
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)(o.M, {
                            mode: "wait",
                            children: "open" === t && (0, a.jsx)(E, {})
                        })]
                    })
                }
        },
        839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n(9268),
                s = n(6006),
                i = n(226),
                r = n(4136),
                l = n(5984),
                o = n(2685),
                c = e => {
                    let [t, n] = (0, s.useState)("unactive"), [a, i] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        let t = window.matchMedia("(min-width: ".concat(e, "px)"));
                        t.matches ? (n("true"), i(!0)) : (n("false"), i(!1));
                        let a = e => {
                            n(e.matches)
                        };
                        return t.addEventListener("change", a), () => {
                            t.removeEventListener("change", a)
                        }
                    }, []), {
                        isMobile: t,
                        isMobileBool: a
                    }
                },
                u = e => {
                    let {
                        setIsLoading: t,
                        isLoading: n
                    } = e, {
                        isMobileBool: u
                    } = c("1028"), {
                        isMobileBool: d
                    } = c("768"), {
                        isMobileBool: x
                    } = c("640"), {
                        isMobileBool: f
                    } = c("450"), {
                        isMobileBool: m
                    } = (0, o.Z)("1028"), {
                        isMobileBool: h
                    } = (0, o.Z)("768"), {
                        isMobileBool: p
                    } = (0, o.Z)("640"), {
                        isMobileBool: v
                    } = (0, o.Z)("450");
                    return (0, s.useLayoutEffect)(() => {
                        let e = i.ZP.timeline(),
                            n = new l.Z(".aquadevfull", {
                                types: "lines, words, chars"
                            });
                        i.ZP.to(n.chars, {
                            duration: 1,
                            transform: "translateY(-100%)",
                            ease: r.Lp.easeInOut,
                            stagger: .01,
                            delay: .3
                        }), i.ZP.to(".aquadevshort", {
                            duration: 1,
                            transform: "translateY(0%)",
                            ease: r.Lp.easeInOut,
                            stagger: .01,
                            delay: .3
                        }), i.ZP.to(".textcnt", {
                            overflow: "visible",
                            delay: 1.4
                        }), i.ZP.to(".aquadevshort", {
                            gap: "0px",
                            delay: .9,
                            ease: r.Lp.easeInOut,
                            duration: 1
                        }), i.ZP.to(".aquadevshort", {}), !0 === u && !1 === m && i.ZP.to(".textcnt", 1, {
                            scale: .2,
                            top: "49",
                            left: "82.6",
                            ease: r.Lp.easeOut,
                            delay: 2
                        }), !0 === x && !1 === p && !1 === u && i.ZP.to(".textcnt", 1, {
                            scale: .25,
                            top: "41",
                            left: "58",
                            ease: r.Lp.easeOut,
                            delay: 2
                        }), !0 === f && !1 === v && !1 === x && i.ZP.to(".textcnt", 1, {
                            scale: .34,
                            top: "44",
                            left: "34",
                            ease: r.Lp.easeOut,
                            delay: 2
                        }), !0 === v && !1 === f && i.ZP.to(".textcnt", 1, {
                            scale: .45,
                            top: "48",
                            left: "33",
                            ease: r.Lp.easeOut,
                            delay: 2
                        }), i.ZP.to(".blinderleft", {
                            duration: 1,
                            transform: "translateX(-100%)",
                            ease: r.zO.easeInOut,
                            stagger: .01,
                            delay: 2.2
                        }), i.ZP.to(".blinderright", {
                            duration: 1,
                            transform: "translateX(100%)",
                            ease: r.zO.easeInOut,
                            stagger: .01,
                            delay: 2.2
                        }), i.ZP.to(".textcnt", 1, {
                            display: "none",
                            delay: 2
                        }), e.to(".loaderrevamp", {
                            display: "none",
                            delay: 2.6
                        }).call(() => {
                            t("false")
                        })
                    }, [u, m, x, p, f, v]), (0, a.jsx)("div", {
                        className: "loaderrevamp fixed w-full h-full flex flex-col z-[1000]",
                        children: (0, a.jsxs)("div", {
                            className: "relative",
                            children: [(0, a.jsx)("div", {
                                className: "h-[50vh] bg-neutral w-full blinderleft"
                            }), (0, a.jsx)("div", {
                                className: "h-[50vh] bg-neutral w-full blinderright"
                            }), (0, a.jsxs)("div", {
                                className: "absolute top-[50%] left-[50%] flex flex-col textcnt  overflow-hidden lg:h-[190px] md:h-[140px] h-[80px] -translate-x-[50%] -translate-y-[50%] z-[10001] ",
                                children: [(0, a.jsx)("h4", {
                                    className: " lg:text-[90px] md:text-[70px] sm:text-[60px] xs:text-[45px] text-[32px] text-primary font-NeueMontreal-Medium text-center aquadevfull",
                                    children: "AQUA DEV"
                                }), (0, a.jsxs)("h4", {
                                    className: " lg:text-[100px] sm:text-[80px] xs:text-[56px] text-[45px] text-primary font-NeueMontreal-Medium text-center aquadevshort absolute translate-y-[200%] self-center flex flex-row lg:gap-[190px] sm:gap-[100px] gap-[80px]",
                                    children: [(0, a.jsx)("span", {
                                        children: "A"
                                    }), (0, a.jsx)("span", {
                                        children: "D"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                d = n(3565),
                x = n(9770),
                f = e => {
                    let {
                        children: t
                    } = e;
                    ! function() {
                        {
                            let e = localStorage.getItem("isFirstVisit");
                            e || localStorage.setItem("isFirstVisit", "true")
                        }
                    }();
                    let {
                        isLoading: n,
                        dispatch: s
                    } = (0, d.Z)();
                    return "true" === n ? (0, a.jsx)(u, {
                        isLoading: n,
                        setIsLoading: e => (0, x.PA)(e, s)
                    }) : "noshow" === n ? null : t
                }
        },
        4473: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(9268),
                s = n(6006),
                i = n(226),
                r = n(7890),
                l = n.n(r);
            t.default = () => {
                let [e, t] = (0, s.useState)("https://res.cloudinary.com/djzrwukp0/video/upload/v1709405032/audio/jp2ysqonzeljbnqqirrl.mp3"), [n, r] = (0, s.useState)(!1);
                return (0, s.useLayoutEffect)(() => {
                    switch (n) {
                        case !0:
                            i.ZP.to(".onCtrl", {
                                opacity: 1,
                                ease: "power3.out",
                                duration: .4
                            }), i.ZP.to(".offCtrl", {
                                opacity: 0,
                                ease: "power3.out",
                                duration: .4
                            });
                            return;
                        case !1:
                            i.ZP.to(".onCtrl", {
                                opacity: 0,
                                ease: "power3.out",
                                duration: .4
                            }), i.ZP.to(".offCtrl", {
                                opacity: 1,
                                ease: "power3.out",
                                duration: .4
                            });
                            return
                    }
                }, [n]), (0, s.useLayoutEffect)(() => {
                    i.ZP.fromTo(".musicplayer", {
                        translateX: -400,
                        opacity: 0
                    }, {
                        translateX: 0,
                        opacity: 1,
                        duration: .5,
                        ease: "ease3.inOut",
                        delay: .5
                    })
                }, []), (0, a.jsxs)("div", {
                    onClick: () => r(!n),
                    className: "cursor-pointer musicplayer mix-blend-difference fixed md:text-[16px] text-[12px] uppercase font-NeueMontreal-Medium text-primary md:bottom-[60px] bottom-[40px] -left-[4px] lg:left-[40px] sm:left-[26px]  -rotate-90 flex gap-[12px] z-[701]",
                    children: [(0, a.jsx)(l(), {
                        loop: !0,
                        volume: .3,
                        src: e,
                        playing: n
                    }), (0, a.jsx)("p", {
                        className: "opacity-[0.3] hover:opacity-[1] ease-in-out duration-300 ",
                        children: "Sound"
                    }), (0, a.jsxs)("div", {
                        className: "flex items-start flex-col h-[24px] relative ",
                        children: [(0, a.jsx)("span", {
                            className: "w-fit onCtrl absolute",
                            children: "on"
                        }), (0, a.jsx)("span", {
                            className: "w-fit offCtrl absolute",
                            children: "Off"
                        })]
                    })]
                })
            }
        },
        9020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n(9268),
                s = n(8846),
                i = n(9770);
            let r = () => {
                localStorage.removeItem("isFirstVisit")
            };
            var l = n(6008),
                o = n(6006),
                c = n(2235),
                u = () => {
                    let [e, t] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let e = window.matchMedia("(max-width: 500px)");
                        t(e.matches);
                        let n = e => {
                            t(e.matches)
                        };
                        return e.addEventListener("change", n), () => {
                            e.removeEventListener("change", n)
                        }
                    }, []), {
                        isMobile: e
                    }
                },
                d = e => {
                    let {
                        isOpen: t
                    } = e, [n, s] = (0, o.useState)(new Date), [i, r] = (0, o.useState)(""), [l, c] = (0, o.useState)("");
                    return ((0, o.useEffect)(() => {
                        let e = setInterval(function() {
                            s(new Date);
                            let e = new Date,
                                t = e.getHours();
                            e.getMinutes(), t >= 12 ? c("PM") : c("AM"), r(n.toLocaleTimeString().substring(0, 5))
                        }, 1e3);
                        return () => {
                            clearInterval(e)
                        }
                    }), i) ? (0, a.jsxs)("p", {
                        className: "w-[100px] text-secondary mix-blend-difference font-NeueMontreal-Regular text-center bg-[#fff] px-4 py-2 text-[14px] z-[300]",
                        children: [i, " ", l]
                    }) : null
                },
                x = () => {
                    (0, l.usePathname)();
                    let {
                        isMobile: e
                    } = u(), {
                        dispatch: t,
                        menuIsOpen: n,
                        projectScreenShow: x
                    } = (0, o.useContext)(s.GlobalContext);
                    return (0, o.useEffect)(() => (window.addEventListener("beforeunload", r), () => {
                        window.removeEventListener("beforeunload", r)
                    }), []), (0, a.jsxs)("nav", {
                        className: "navCnt flex-row items-center z-[500] justify-between ".concat(x ? "hidden" : "flex", " flex-shrink mix-blend-difference h-[90px] fixed w-full top-0 right-0 px-5 lg:px-[70px] sm:px-[45px]"),
                        children: [(0, a.jsx)(c.Z, {
                            children: (0, a.jsx)("span", {
                                onClick: () => (0, i.xe)(t, !0, "/"),
                                children: (0, a.jsx)("div", {
                                    className: "w-fit flex z-30 ad-logo",
                                    children: (0, a.jsx)("p", {
                                        className: "text-[20px] text-white mix-blend-difference",
                                        children: "AD"
                                    })
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "md:min-w-[100px] w-fit z-30 mix-blend-difference",
                            children: (0, a.jsx)(d, {
                                isOpen: n
                            })
                        })]
                    })
                }
        },
        5992: function() {},
        8452: function(e) {
            e.exports = {
                header: "styles_header__wy7V7",
                button: "styles_button__OIfsK",
                burger: "styles_burger__ah8ak",
                burgerActive: "styles_burgerActive__52TX_"
            }
        },
        1473: function(e) {
            e.exports = {
                svgCurve: "styles_svgCurve__EsZUC"
            }
        },
        874: function(e) {
            e.exports = {
                link: "style_link__IaPxk",
                indicator: "style_indicator__GThV6"
            }
        },
        8935: function(e) {
            e.exports = {
                menu: "style_menu__BOloa",
                body: "style_body__hUwS9",
                nav: "style_nav__HWqZK",
                header: "style_header__UP5Hc",
                intouch: "style_intouch__r_Chx"
            }
        }
    },
    function(e) {
        e.O(0, [224, 845, 482, 541, 253, 698, 744], function() {
            return e(e.s = 761)
        }), _N_E = e.O()
    }
]);