(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        3607: function(e, t, i) {
            "use strict";
            var s = i(9268),
                r = i(8074),
                n = i(2685),
                l = i(3565),
                o = i(5846),
                a = i.n(o),
                h = i(6008);
            t.Z = () => {
                let e = (0, h.usePathname)(),
                    {
                        dispatch: t
                    } = (0, l.Z)(),
                    {
                        isMobileBool: i
                    } = (0, n.Z)("768");
                return (0, s.jsxs)("footer", {
                    className: "relative ".concat("/about" === e ? "top-[50px]" : "top-[30px]", " ").concat("/about" !== e ? "mb-[40px]" : "mb-[100px]", " lg:mt-[200px] mt-[150px] bottom-4 flex big:flex-row flex-col lg:block"),
                    children: [(0, s.jsxs)("div", {
                        className: " flex lg:flex-row flex-col-reverse gap-[22px]",
                        children: [(0, s.jsx)(a(), {
                            className: "text-[18px] text-[#000] flex whitespace-nowrap",
                            href: "",
                            target: "_blank",
                            children: "ReMade By Lasan kanda and the papu"
                        }), (0, s.jsx)("div", {
                            className: "lg:flex hidden  w-full h-[14px] relative border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-[#000]"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "w-full flex md:flex-row flex-col lg:absolute big:justify-end justify-between right-0 md:gap-[60px] gap-[13px]",
                        children: [" ", (0, s.jsxs)("div", {
                            className: "flex flex-row md:justify-end justify-normal lg:relative md:-top-10 lg:gap-[69px] md:gap-[40px] gap-[13px]",
                            children: [(0, s.jsx)(r.Ak, {
                                title: i ? "TW" : "Twitter",
                                id: 3,
                                link: "https://twitter.com/AkogunOyindamo3/",
                                customClass: "w-fit text-[18px]"
                            }), (0, s.jsx)(r.Ak, {
                                title: i ? "LN" : "LinkedIn",
                                id: 4,
                                link: "https://www.linkedin.com/in/oyindacodes/",
                                customClass: "w-fit text-[18px]"
                            }), (0, s.jsx)(r.Ak, {
                                title: i ? "GH" : "Github",
                                id: 5,
                                link: "https://github.com/damoski2/",
                                customClass: "w-fit text-[18px]"
                            })]
                        }), (0, s.jsxs)("p", {
                            className: "text-[18px] lg:relative md:-top-10 md:mt-0 mt-0",
                            children: ["Aquadev Portfolio \xa9", new Date().getFullYear()]
                        })]
                    })]
                })
            }
        },
        4924: function(e, t, i) {
            "use strict";
            var s = i(9268),
                r = i(6006),
                n = i(226),
                l = i(4136),
                o = i(5984),
                a = i(8074),
                h = i(9770),
                d = i(3565),
                c = i(6008);
            t.Z = () => {
                let e = (0, c.usePathname)(),
                    t = (0, r.useRef)(null),
                    i = (0, r.useRef)(null),
                    p = (0, r.useRef)(null),
                    {
                        dispatch: u
                    } = (0, d.Z)();
                return (0, r.useLayoutEffect)(() => {
                    let e = null == t ? void 0 : t.current,
                        s = null == i ? void 0 : i.current;
                    n.ZP.to(e, {
                        left: "0%",
                        duration: .9,
                        ease: "circ3.out",
                        delay: .4,
                        scrollTrigger: {
                            trigger: e,
                            start: "top top+=80%"
                        }
                    }), n.ZP.to(s, {
                        left: "-180%",
                        duration: .9,
                        ease: "circ3.out",
                        delay: .4,
                        scrollTrigger: {
                            trigger: s,
                            start: "top top+=80%"
                        }
                    })
                }, []), (0, r.useLayoutEffect)(() => {
                    let e = null == p ? void 0 : p.current,
                        s = null == t ? void 0 : t.current,
                        r = null == i ? void 0 : i.current,
                        l = () => {
                            n.ZP.to(s, {
                                left: "100%",
                                duration: .9,
                                ease: "circ3.out"
                            }), n.ZP.to(r, {
                                left: "0%",
                                width: "100%",
                                duration: .9,
                                ease: "circ3.out"
                            })
                        },
                        o = () => {
                            n.ZP.to(r, {
                                width: "0%",
                                left: "-180%",
                                duration: .9,
                                ease: "circ3.out",
                                immediateRender: !1
                            }), n.ZP.to(s, {
                                width: "100%",
                                left: "0%",
                                duration: .9,
                                ease: "circ3.out",
                                immediateRender: !1
                            })
                        };
                    return null == e || e.addEventListener("mouseenter", l), null == e || e.addEventListener("mouseleave", o), () => {
                        null == e || e.removeEventListener("mouseenter", l), null == e || e.removeEventListener("mouseleave", o)
                    }
                }, []), (0, r.useLayoutEffect)(() => {
                    n.ZP.timeline();
                    let e = new o.Z(".sayhi", {
                            types: "lines, words, chars"
                        }),
                        t = new o.Z(".contact", {
                            types: "lines, words"
                        }),
                        i = new o.Z(".wannaworksubheading", {
                            types: "lines, words"
                        });
                    n.ZP.to(i.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        scrollTrigger: {
                            trigger: ".wannaworksubheading",
                            start: "top top+=90%"
                        }
                    }), n.ZP.to(t.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        scrollTrigger: {
                            trigger: ".contact",
                            start: "top top+=90%"
                        }
                    }), n.ZP.to(e.chars, {
                        opacity: 1,
                        translateY: "-100%",
                        ease: "power3.out",
                        delay: .2,
                        duration: .6,
                        stagger: .08,
                        scrollTrigger: {
                            trigger: ".sayhi",
                            start: "top top+=80%"
                        }
                    }), n.ZP.to(".projectLinewannawork", {
                        width: "100%",
                        duration: 1.7,
                        ease: l.Lp.easeInOut,
                        scrollTrigger: {
                            trigger: ".projectLinewannawork",
                            start: "top top+=90%",
                            end: "top top"
                        }
                    })
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                        className: "lg:mb-[130px] sm:mb-[60px] mb-[40px] md:mt-[200px] ".concat("/" === e ? "mt-[100px]" : "mt-[200px]"),
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, s.jsx)("h2", {
                                className: "text-[18px] uppercase font-NeueMontreal-Regular contact",
                                children: "Contact"
                            }), (0, s.jsx)(a._p, {
                                title: "",
                                id: 2,
                                onPress: () => (0, h.xe)(u, !0, "/about"),
                                customClass: "h-[33px] leading-[30px]",
                                showIcon: !1
                            })]
                        }), (0, s.jsx)("div", {
                            className: "projectLinewannawork h-[2px] w-0 bg-[#000] mt-[22px]"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "lg:mt-[236px] mt-[30px]",
                        children: [(0, s.jsx)("p", {
                            className: "text-center wannaworksubheading",
                            children: "WANT TO WORK TOGETHER?"
                        }), (0, s.jsx)("h1", {
                            className: "text-[11vw] font-Clash-Grotesk-Bold text-center leading-[11vw] my-9 sayhi",
                            children: "SAY HI!"
                        }), (0, s.jsxs)("h1", {
                            onClick: e => {
                                window.location.href = "mailto:hello@aquadev.site", e.preventDefault()
                            },
                            ref: p,
                            className: "w-fit overflow-y-hidden overflow-x-hidden text-[7.9vw] leading-normal  mx-auto text-center relative font-Clash-Grotesk-Medium uppercase",
                            children: [(0, s.jsx)("span", {
                                className: "mailSpan text-center",
                                children: "hello@aquadev.site"
                            }), (0, s.jsx)("div", {
                                ref: t,
                                className: "-left-[180%] xl:top-[170px] lg:top-[120px] md:top-[80px] mt-3 absolute bottom-0 w-full md:h-[8px] h-1 bg-neutral"
                            }), (0, s.jsx)("div", {
                                ref: i,
                                className: "-left-[360%] xl:top-[170px] lg:top-[120px] md:top-[80px] absolute bottom-0 w-full mt-3 md:h-[8px] h-1 bg-neutral"
                            })]
                        })]
                    })]
                })
            }
        },
        8228: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return y
                }
            });
            var s = i(9268),
                r = i(40),
                n = i(226),
                l = i(4136),
                o = i(6394),
                a = i.n(o),
                h = i(6008),
                d = i(6006),
                c = i(5984),
                p = i(2982),
                u = i(9770),
                m = i(3565),
                x = {
                    src: "/_next/static/media/ganerly.6b9a94f2.gif",
                    height: 444,
                    width: 800,
                    blurWidth: 0,
                    blurHeight: 0
                },
                g = {
                    src: "/_next/static/media/sebastian.0f9ad21c.gif",
                    height: 444,
                    width: 800,
                    blurWidth: 0,
                    blurHeight: 0
                },
                f = {
                    src: "/_next/static/media/shopaxagif.81c4101b.gif",
                    height: 325,
                    width: 600,
                    blurWidth: 0,
                    blurHeight: 0
                },
                v = {
                    src: "/_next/static/media/volve.20afbb20.gif",
                    height: 219,
                    width: 400,
                    blurWidth: 0,
                    blurHeight: 0
                },
                w = i(8074),
                y = () => {
                    let e = (0, h.usePathname)(),
                        t = (0, d.useRef)(null),
                        i = (0, d.useRef)(null),
                        o = (0, d.useRef)(null),
                        {
                            dispatch: y
                        } = (0, m.Z)(),
                        [b, j] = (0, d.useState)(r.LD);
                    (0, d.useLayoutEffect)(() => {
                        new p.Z(".ukiyo"), n.ZP.to(".projectLine", {
                            width: "100%",
                            duration: 1.7,
                            ease: l.Lp.easeInOut,
                            scrollTrigger: {
                                trigger: ".projectLine",
                                start: "top top+=90%",
                                end: "top top"
                            }
                        })
                    }, []), (0, d.useLayoutEffect)(() => {
                        let e = e => {
                                let t = parseInt(e.getAttribute("data-scroll-speed"), 10);
                                return {
                                    update: i => {
                                        e.style.transform = "translateY(".concat(-(i / t), "px)")
                                    }
                                }
                            },
                            t = [];
                        document.querySelectorAll("[data-scroll-speed]").forEach(i => {
                            t.push(e(i))
                        });
                        let i = () => {
                            let e = window.scrollY || document.documentElement.scrollTop;
                            t.forEach(t => {
                                t.update(e)
                            })
                        };
                        return window.addEventListener("scroll", i), () => {
                            window.removeEventListener("scroll", i)
                        }
                    }, []), (0, d.useLayoutEffect)(() => {
                        let e = new c.Z(".HeadSpan1", {
                                types: "lines, words"
                            }),
                            t = new c.Z(".HeadSpan2", {
                                types: "lines, words"
                            }),
                            i = new c.Z(".HeadSpan3", {
                                types: "lines, words"
                            }),
                            s = new c.Z(".HeadSpan4", {
                                types: "lines, words"
                            }),
                            r = new c.Z(".HeadSpan5", {
                                types: "lines, words"
                            }),
                            l = new c.Z(".HeadSpan6", {
                                types: "lines, words"
                            }),
                            o = new c.Z(".HeadSpan7", {
                                types: "lines, words"
                            }),
                            a = new c.Z(".HeadSpan8", {
                                types: "lines, words"
                            }),
                            h = new c.Z(".selectedwork", {
                                types: "lines, words"
                            }),
                            d = new c.Z(".portfolio", {
                                types: "lines, words"
                            });
                        n.ZP.to(d.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".portfolio",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(h.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".selectedwork",
                                start: "top top+=80%"
                            }
                        }), n.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan1",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(t.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan2",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(i.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan3",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(s.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan4",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(r.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan5",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(l.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan6",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(o.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan7",
                                start: "top top+=90%"
                            }
                        }), n.ZP.to(a.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan8",
                                start: "top top+=90%"
                            }
                        })
                    }, []), (0, d.useLayoutEffect)(() => {
                        let e = null == t ? void 0 : t.current,
                            s = null == i ? void 0 : i.current,
                            r = null == o ? void 0 : o.current,
                            l = () => {
                                n.ZP.timeline().to(s, {
                                    left: "100%",
                                    duration: .9,
                                    ease: "power4.out"
                                }), n.ZP.timeline().to(r, {
                                    left: "0%",
                                    width: "100%",
                                    duration: .9,
                                    ease: "power4.out"
                                }), n.ZP.timeline().add("midway")
                            },
                            a = () => {
                                n.ZP.to(r, {
                                    width: "0%",
                                    left: "-180%",
                                    duration: .9,
                                    ease: "power4.out",
                                    immediateRender: !1
                                }), n.ZP.to(s, {
                                    width: "100%",
                                    left: "0%",
                                    duration: .9,
                                    ease: "power4.out",
                                    immediateRender: !1
                                })
                            };
                        return null == e || e.addEventListener("mouseenter", l), null == e || e.addEventListener("mouseleave", a), () => {
                            null == e || e.removeEventListener("mouseenter", l), null == e || e.removeEventListener("mouseleave", a)
                        }
                    }, []);
                    let S = (e, t) => {
                        (0, u.eL)(y), (0, u.UL)(y, e), (0, u.w3)(y, t)
                    };
                    return (0, s.jsxs)("div", {
                        className: "lg:mb-[300px] mb-[100px]",
                        children: [(0, s.jsxs)("div", {
                            className: " ".concat("/works.html" === e && "hidden", " lg:mb-[119px] sm:mb-[60px] mb-[40px]"),
                            children: [(0, s.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-[18px] uppercase font-NeueMontreal-Regular portfolio",
                                    children: "Portfolio"
                                }), (0, s.jsx)(w._p, {
                                    title: "SEE ALL PROJECTS",
                                    id: 1,
                                    onPress: () => (0, u.xe)(y, !0, "/works.html"),
                                    customClass: "h-[33px] leading-[30px]",
                                    showIcon: !0
                                })]
                            }), (0, s.jsx)("div", {
                                className: "projectLine h-[1.5px] w-0 bg-[#000] mt-[22px]"
                            })]
                        }), (0, s.jsx)("h1", {
                            className: "".concat("/works.html" === e && "hidden", " text-center font-Clash-Grotesk-Medium text-[9vw] lg:mb-[120px] sm:mb-[60px] mb-[40px] selectedwork"),
                            children: "SELECTED WORKS"
                        }), (0, s.jsxs)("div", {
                            id: "proj1",
                            className: "relative flex lg:flex-row lg:justify-between flex-col cursor-proj-img view",
                            onClick: () => S(b[0], "proj1"),
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan1 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: b[0].name.substring(0, 4)
                                }), (0, s.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan2 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: [" ", b[0].name.substring(4, r.LD[0].name.length)]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "absolute w-[35vw] left-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "11",
                                children: (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, s.jsx)(a(), {
                                        src: b[0].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, s.jsx)(a(), {
                                            className: "",
                                            src: x,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-left font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:left-9 left-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: b[0].shortDescription
                            })]
                        }), (0, s.jsxs)("div", {
                            id: "proj2",
                            className: "relative flex lg:flex-row-reverse lg:justify-between lg:mt-[300px] md:mt-[150px] mt-[80px] flex-col cursor-proj-img view mb-[100px]",
                            onClick: () => S(b[1], "proj2"),
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan3 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: b[1].name.substring(0, 4)
                                }), (0, s.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan4 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0  ",
                                    children: [" ", b[1].name.substring(4, r.LD[1].name.length)]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "absolute w-[35vw] right-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "11",
                                children: (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, s.jsx)(a(), {
                                        src: b[1].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, s.jsx)(a(), {
                                            className: "",
                                            src: g,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-right font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:right-9 right-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: b[1].shortDescription
                            })]
                        }), (0, s.jsxs)("div", {
                            id: "proj3",
                            className: "relative flex lg:flex-row lg:justify-between flex-col cursor-proj-img view lg:mt-[300px] md:mt-[150px] mt-[80px]",
                            onClick: () => S(b[2], "proj3"),
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan5 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: b[2].name.substring(0, 4)
                                }), (0, s.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan6 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: [" ", b[2].name.substring(4, r.LD[2].name.length)]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "absolute w-[35vw] left-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "11",
                                children: (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, s.jsx)(a(), {
                                        src: b[2].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, s.jsx)(a(), {
                                            className: "",
                                            src: f,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-left font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:left-9 left-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: b[2].shortDescription
                            })]
                        }), (0, s.jsxs)("div", {
                            id: "proj4",
                            className: "relative flex lg:flex-row-reverse lg:justify-between lg:mt-[300px] md:mt-[150px] mt-[80px] flex-col cursor-proj-img view mb-[100px]",
                            onClick: () => S(b[4], "proj4"),
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan7 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: b[4].name.substring(0, 2)
                                }), (0, s.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan8 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0  ",
                                    children: [" ", b[4].name.substring(2, r.LD[4].name.length)]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "absolute w-[35vw] right-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "15",
                                children: (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, s.jsx)(a(), {
                                        src: b[4].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, s.jsx)(a(), {
                                            className: "",
                                            src: v,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-right font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:right-9 right-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: b[4].shortDescription
                            })]
                        })]
                    })
                }
        },
        3113: function(e, t, i) {
            "use strict";
            var s = i(9268),
                r = i(6006),
                n = i(6394),
                l = i.n(n),
                o = i(5846),
                a = i.n(o),
                h = i(226),
                d = i(5984);
            i(2216);
            var c = i(6167),
                p = i(3565);
            h.ZP.registerPlugin(c.Z), t.Z = e => {
                let {
                    project: t,
                    closePopup: i
                } = e, {
                    projectScreenShow: n
                } = (0, p.Z)(), o = (0, r.useRef)(null), c = (0, r.useRef)(null), u = (0, r.useRef)(null), m = (0, r.useRef)(null), x = (0, r.useRef)(null), g = (0, r.useRef)(null);
                return (0, r.useLayoutEffect)(() => {
                    h.ZP.fromTo(".projScreen", {
                        display: "none",
                        opacity: 0
                    }, {
                        display: "block",
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out"
                    })
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e = null == o ? void 0 : o.current,
                        t = null == u ? void 0 : u.current,
                        i = () => {
                            h.ZP.timeline().fromTo(t, {
                                width: "0%",
                                left: "0%",
                                delay: 0
                            }, {
                                width: "100%",
                                duration: .2
                            }), h.ZP.timeline().add("midway")
                        },
                        s = () => {
                            h.ZP.fromTo(t, {
                                width: "100%",
                                left: "0%"
                            }, {
                                width: "0%",
                                left: "100%",
                                duration: .2,
                                immediateRender: !1
                            })
                        };
                    return null == e || e.addEventListener("mouseenter", i), null == e || e.addEventListener("mouseleave", s), () => {
                        null == e || e.removeEventListener("mouseenter", i), null == e || e.removeEventListener("mouseleave", s)
                    }
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e = null == c ? void 0 : c.current,
                        t = null == x ? void 0 : x.current,
                        i = () => {
                            h.ZP.timeline().fromTo(t, {
                                width: "0%",
                                left: "0%",
                                delay: 0
                            }, {
                                width: "100%",
                                duration: .2
                            }), h.ZP.timeline().add("midway")
                        },
                        s = () => {
                            h.ZP.fromTo(t, {
                                width: "100%",
                                left: "0%"
                            }, {
                                width: "0%",
                                left: "100%",
                                duration: .2,
                                immediateRender: !1
                            })
                        };
                    return null == e || e.addEventListener("mouseenter", i), null == e || e.addEventListener("mouseleave", s), () => {
                        null == e || e.removeEventListener("mouseenter", i), null == e || e.removeEventListener("mouseleave", s)
                    }
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e = null == m ? void 0 : m.current,
                        t = null == g ? void 0 : g.current,
                        i = () => {
                            h.ZP.timeline().fromTo(t, {
                                width: "0%",
                                left: "0%",
                                delay: 0
                            }, {
                                width: "100%",
                                duration: .2
                            }), h.ZP.timeline().add("midway")
                        },
                        s = () => {
                            h.ZP.fromTo(t, {
                                width: "100%",
                                left: "0%"
                            }, {
                                width: "0%",
                                left: "100%",
                                duration: .2,
                                immediateRender: !1
                            })
                        };
                    return null == e || e.addEventListener("mouseenter", i), null == e || e.addEventListener("mouseleave", s), () => {
                        null == e || e.removeEventListener("mouseenter", i), null == e || e.removeEventListener("mouseleave", s)
                    }
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e = new d.Z(".descParaProj", {
                        types: "lines, words"
                    });
                    h.ZP.fromTo(e.words, {
                        opacity: .15
                    }, {
                        opacity: 1,
                        stagger: .06
                    })
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e;
                    let t = document.querySelector(".container"),
                        i = h.ZP.context(() => {
                            let i = h.ZP.utils.toArray(".container .pin");
                            e = setTimeout(() => {
                                h.ZP.to(i, {
                                    xPercent: -100 * (i.length - 1),
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: ".container",
                                        pin: !0,
                                        scrub: 1,
                                        end: () => "+=".concat(t.offsetWidth)
                                    }
                                })
                            })
                        });
                    return () => {
                        i.revert(), clearTimeout(e)
                    }
                }, [n]), (0, r.useLayoutEffect)(() => {
                    let e;
                    let t = h.ZP.matchMedia();
                    return t.add({
                        isMobile: "(max-width: 768px)",
                        isDesktop: "(min-width: 769px)"
                    }, t => {
                        let {
                            isDesktop: i,
                            isMobile: s
                        } = t.conditions;
                        e = setTimeout(() => {
                            h.ZP.from(".projLine", {
                                width: "0",
                                duration: .9,
                                delay: .4,
                                ease: "power4.out",
                                scrollTrigger: i ? {
                                    trigger: ".projLine",
                                    start: "top top+=80%"
                                } : {
                                    trigger: ".projLine",
                                    start: "top top+=60%"
                                }
                            })
                        }, 1300)
                    }), () => {
                        t.revert(), clearTimeout(e)
                    }
                }, []), (0, s.jsxs)("div", {
                    className: "projScreen bg-neutral  z-[300]",
                    children: [(0, s.jsxs)("div", {
                        className: "wrapper px-5 lg:px-[70px] sm:px-[45px] z-[300]",
                        children: [(0, s.jsxs)("div", {
                            className: "flex lg:flex-row justify-between items-center h-[70px] z-[100] mt-3 text-primary fixed left-0 right-0 px-5 lg:px-[70px] sm:px-[45px]",
                            children: [(0, s.jsx)("p", {
                                className: "md:block hidden mix-blend-difference",
                                children: null == t ? void 0 : t.name
                            }), (0, s.jsx)(a(), {
                                href: t.livelink,
                                target: "_blank",
                                className: "md:block hidden mix-blend-difference",
                                children: (0, s.jsxs)("p", {
                                    ref: o,
                                    className: "w-fit overflow-x-hidden relative top-3 h-[50px]",
                                    children: [(0, s.jsx)("span", {
                                        className: "w-fit ",
                                        children: "view live link"
                                    }), (0, s.jsx)("div", {
                                        ref: u,
                                        className: "relative left-0 w-0 h-[2px] mt-[0.3px] bg-primary"
                                    })]
                                })
                            }), (0, s.jsx)("p", {
                                className: "mix-blend-difference",
                                children: null == t ? void 0 : t.name
                            }), (0, s.jsxs)("p", {
                                className: "w-fit overflow-x-hidden relative top-3 h-[50px]",
                                ref: c,
                                onClick: () => {
                                    h.ZP.to(".projScreen", {
                                        display: "none",
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power4.in"
                                    }).then(() => {
                                        i()
                                    })
                                },
                                children: [(0, s.jsx)("span", {
                                    className: "w-fit ",
                                    children: "Close"
                                }), (0, s.jsx)("div", {
                                    ref: x,
                                    className: "relative left-0 w-0 h-[2px] mt-[0.3px] bg-primary"
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "container",
                            children: null == t ? void 0 : t.img.map((e, i) => (0, s.jsx)("div", {
                                className: "px-10 w-screen h-screen py-10 pin sec".concat(i + 1, " "),
                                children: (0, s.jsx)(l(), {
                                    className: "singleImg h-full ".concat(1 === t.id ? "w-[70vw]" : "w-[72vw] min-w-[72vw] mx-auto", " self-center pt-[150px]  "),
                                    alt: "",
                                    src: e
                                })
                            }, i))
                        })]
                    }), (0, s.jsx)("div", {
                        className: "z-[300] px-5 lg:px-[70px] sm:px-[45px] py-[40px] md:mt-0 pt-[100px] md:bg-primary bg-neutral",
                        children: (0, s.jsxs)("div", {
                            className: " w-full flex flex-col text-primary md:text-neutral justify-between h-full md:gap-[30px] gap-[120px]",
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("h4", {
                                    className: " descParaProj sm:text-[44px] text-[28px] font-NeueMontreal-Medium uppercase overflow-hidden",
                                    children: null == t ? void 0 : t.description
                                }), (0, s.jsx)(a(), {
                                    href: t.livelink,
                                    className: "md:hidden block mt-3",
                                    children: (0, s.jsxs)("p", {
                                        ref: m,
                                        className: "w-fit overflow-x-hidden relative top-3 h-[50px]",
                                        children: [(0, s.jsx)("span", {
                                            className: "w-fit text-[20px]",
                                            children: "Visit live link"
                                        }), (0, s.jsx)("div", {
                                            ref: g,
                                            className: "relative left-0 w-0 h-[2px] mt-[0.3px] bg-primary"
                                        })]
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "big:text-[22px] text-[20px] flex flex-col gap-7",
                                children: [(0, s.jsx)("p", {
                                    className: "uppercase",
                                    children: "Project Info"
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[2px] md:bg-neutral bg-primary projLine"
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between items-center",
                                    children: [(0, s.jsx)("p", {
                                        children: "Role"
                                    }), (0, s.jsx)("p", {
                                        children: null == t ? void 0 : t.role
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[2px] md:bg-neutral bg-primary projLine"
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between items-center",
                                    children: [(0, s.jsx)("p", {
                                        children: "Year"
                                    }), (0, s.jsx)("p", {
                                        children: null == t ? void 0 : t.year
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[2px] md:bg-neutral bg-primary projLine"
                                })]
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "flex flex-col gap-[30px] mt-[30px] md:hidden px-5 lg:px-[70px] sm:px-[45px]",
                        children: null == t ? void 0 : t.img.map((e, t) => (0, s.jsx)(l(), {
                            className: "singleImg self-center sec".concat(t + 1, " pin "),
                            alt: "",
                            src: e
                        }, t))
                    })]
                })
            }
        },
        1852: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return a
                }
            });
            var s = i(6006),
                r = i(3731),
                n = i(226),
                l = i(6167),
                o = i(2685);

            function a(e) {
                let {
                    children: t
                } = e, {
                    isMobileBool: i
                } = (0, o.Z)("768");
                return (0, s.useEffect)(() => {
                    if (i) return;
                    let e = new r.Z({
                        easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                        lerp: .031,
                        duration: 1.2,
                        syncTouch: !1,
                        smoothTouch: !1
                    });
                    e.on("scroll", l.i.update), n.ZP.ticker.add(t => {
                        e.raf(1e3 * t)
                    }), n.ZP.ticker.lagSmoothing(0)
                }, []), t
            }
        },
        8074: function(e, t, i) {
            "use strict";
            i.d(t, {
                _p: function() {
                    return s.default
                },
                Ak: function() {
                    return r.default
                },
                u0: function() {
                    return n.default
                }
            }), i(9268), i(6006), i(9725), i(2019), i(7757);
            var s = i(7702),
                r = i(1773),
                n = i(9992)
        },
        2216: function() {},
        3731: function(e, t, i) {
            "use strict";

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function r(e, t, i) {
                return Math.max(e, Math.min(t, i))
            }
            i.d(t, {
                Z: function() {
                    return h
                }
            });
            class n {
                advance(e) {
                    var t, i, s, n;
                    if (!this.isRunning) return;
                    let l = !1;
                    if (this.lerp) this.value = (i = this.value, s = this.to, (1 - (n = 1 - Math.exp(-60 * this.lerp * e))) * i + n * s), Math.round(this.value) === this.to && (this.value = this.to, l = !0);
                    else {
                        this.currentTime += e;
                        let t = r(0, this.currentTime / this.duration, 1);
                        l = t >= 1;
                        let i = l ? 1 : this.easing(t);
                        this.value = this.from + (this.to - this.from) * i
                    }
                    null == (t = this.onUpdate) || t.call(this, this.value, {
                        completed: l
                    }), l && this.stop()
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(e, t, {
                    lerp: i = .1,
                    duration: s = 1,
                    easing: r = e => e,
                    onUpdate: n
                }) {
                    this.from = this.value = e, this.to = t, this.lerp = i, this.duration = s, this.easing = r, this.currentTime = 0, this.isRunning = !0, this.onUpdate = n
                }
            }
            class l {
                constructor({
                    wrapper: e,
                    content: t,
                    autoResize: i = !0
                } = {}) {
                    if (this.resize = () => {
                            this.onWrapperResize(), this.onContentResize()
                        }, this.onWrapperResize = () => {
                            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                        }, this.onContentResize = () => {
                            this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
                        }, this.wrapper = e, this.content = t, i) {
                        var s;
                        let e;
                        let t = (s = this.resize, function() {
                            let t = arguments,
                                i = this;
                            clearTimeout(e), e = setTimeout(function() {
                                s.apply(i, t)
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
            class o {
                constructor() {
                    this.events = {}
                }
                emit(e, ...t) {
                    let i = this.events[e] || [];
                    for (let e = 0, s = i.length; e < s; e++) i[e](...t)
                }
                on(e, t) {
                    var i;
                    return (null == (i = this.events[e]) ? void 0 : i.push(t)) || (this.events[e] = [t]), () => {
                        var i;
                        this.events[e] = null == (i = this.events[e]) ? void 0 : i.filter(e => t !== e)
                    }
                }
                off(e, t) {
                    var i;
                    this.events[e] = null == (i = this.events[e]) ? void 0 : i.filter(e => t !== e)
                }
                destroy() {
                    this.events = {}
                }
            }
            class a {
                constructor(e, {
                    wheelMultiplier: t = 1,
                    touchMultiplier: i = 2,
                    normalizeWheel: s = !1
                }) {
                    this.onTouchStart = e => {
                        let {
                            clientX: t,
                            clientY: i
                        } = e.targetTouches ? e.targetTouches[0] : e;
                        this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                            x: 0,
                            y: 0
                        }
                    }, this.onTouchMove = e => {
                        let {
                            clientX: t,
                            clientY: i
                        } = e.targetTouches ? e.targetTouches[0] : e, s = -(t - this.touchStart.x) * this.touchMultiplier, r = -(i - this.touchStart.y) * this.touchMultiplier;
                        this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                            x: s,
                            y: r
                        }, this.emitter.emit("scroll", {
                            deltaX: s,
                            deltaY: r,
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
                            deltaY: i
                        } = e;
                        this.normalizeWheel && (t = r(-100, t, 100), i = r(-100, i, 100)), t *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                            deltaX: t,
                            deltaY: i,
                            event: e
                        })
                    }, this.element = e, this.wheelMultiplier = t, this.touchMultiplier = i, this.normalizeWheel = s, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new o, this.element.addEventListener("wheel", this.onWheel, {
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
            class h {
                constructor({
                    wrapper: e = window,
                    content: t = document.documentElement,
                    wheelEventsTarget: i = e,
                    smoothWheel: r = !0,
                    smoothTouch: h = !1,
                    syncTouch: d = !1,
                    syncTouchLerp: c = .1,
                    __iosNoInertiaSyncTouchLerp: p = .4,
                    touchInertiaMultiplier: u = 35,
                    duration: m,
                    easing: x = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                    lerp: g = m && .1,
                    infinite: f = !1,
                    orientation: v = "vertical",
                    gestureOrientation: w = "vertical",
                    touchMultiplier: y = 1,
                    wheelMultiplier: b = 1,
                    normalizeWheel: j = !1,
                    autoResize: S = !0
                } = {}) {
                    this.onVirtualScroll = ({
                        deltaX: e,
                        deltaY: t,
                        event: i
                    }) => {
                        if (i.ctrlKey) return;
                        let r = i.type.includes("touch"),
                            n = i.type.includes("wheel");
                        if ("vertical" === this.options.gestureOrientation && 0 === t || "horizontal" === this.options.gestureOrientation && 0 === e || r && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && t <= 0) return;
                        let l = i.composedPath();
                        if ((l = l.slice(0, l.indexOf(this.rootElement))).find(e => {
                                var t;
                                return (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent")) || r && (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-touch")) || n && (null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-wheel")) || (null == (t = e.classList) ? void 0 : t.contains("lenis"))
                            })) return;
                        if (this.isStopped || this.isLocked) return void i.preventDefault();
                        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && r || this.options.smoothWheel && n, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        i.preventDefault();
                        let o = t;
                        "both" === this.options.gestureOrientation ? o = Math.abs(t) > Math.abs(e) ? t : e : "horizontal" === this.options.gestureOrientation && (o = e);
                        let a = r && this.options.syncTouch,
                            h = r && "touchend" === i.type && Math.abs(o) > 1;
                        h && (o = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + o, s({
                            programmatic: !1
                        }, a && {
                            lerp: h ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
                        }))
                    }, this.onScroll = () => {
                        if (!this.isScrolling) {
                            let e = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - e), this.emit()
                        }
                    }, window.lenisVersion = "1.0.23", e !== document.documentElement && e !== document.body || (e = window), this.options = {
                        wrapper: e,
                        content: t,
                        wheelEventsTarget: i,
                        smoothWheel: r,
                        smoothTouch: h,
                        syncTouch: d,
                        syncTouchLerp: c,
                        __iosNoInertiaSyncTouchLerp: p,
                        touchInertiaMultiplier: u,
                        duration: m,
                        easing: x,
                        lerp: g,
                        infinite: f,
                        gestureOrientation: w,
                        orientation: v,
                        touchMultiplier: y,
                        wheelMultiplier: b,
                        normalizeWheel: j,
                        autoResize: S
                    }, this.dimensions = new l({
                        wrapper: e,
                        content: t,
                        autoResize: S
                    }), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = r || h, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new n, this.emitter = new o, this.options.wrapper.addEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll = new a(i, {
                        touchMultiplier: y,
                        wheelMultiplier: b,
                        normalizeWheel: j
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
                    immediate: i = !1,
                    lock: s = !1,
                    duration: n = this.options.duration,
                    easing: l = this.options.easing,
                    lerp: o = !n && this.options.lerp,
                    onComplete: a = null,
                    force: h = !1,
                    programmatic: d = !0
                } = {}) {
                    if (!this.isStopped || h) {
                        if (["top", "left", "start"].includes(e)) e = 0;
                        else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                        else {
                            var c;
                            let i;
                            if ("string" == typeof e ? i = document.querySelector(e) : null != (c = e) && c.nodeType && (i = e), i) {
                                if (this.options.wrapper !== window) {
                                    let e = this.options.wrapper.getBoundingClientRect();
                                    t -= this.isHorizontal ? e.left : e.top
                                }
                                let s = i.getBoundingClientRect();
                                e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof e) {
                            if (e += t, e = Math.round(e), this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : e = r(0, e, this.limit), i) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.emit(), void(null == a || a());
                            if (!d) {
                                if (e === this.targetScroll) return;
                                this.targetScroll = e
                            }
                            this.animate.fromTo(this.animatedScroll, e, {
                                duration: n,
                                easing: l,
                                lerp: o,
                                onUpdate: (e, {
                                    completed: t
                                }) => {
                                    s && (this.isLocked = !0), this.isScrolling = !0, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), d && (this.targetScroll = e), t && (s && (this.isLocked = !1), requestAnimationFrame(() => {
                                        this.isScrolling = !1
                                    }), this.velocity = 0, null == a || a()), this.emit()
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
        2982: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return o
                }
            });
            var s = function(e) {
                    return Array.prototype.slice.call(e)
                },
                r = function() {
                    var e = window.navigator.userAgent,
                        t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
                        i = !!e.match(/WebKit/i);
                    return t && i && !e.match(/CriOS/i)
                },
                n = {
                    scale: 1.5,
                    speed: 1.5,
                    wrapperClass: null,
                    willChange: !1,
                    externalRAF: !1
                },
                l = function(e, t) {
                    var i = this;
                    if (this.element = e, this.wrapper = document.createElement("div"), this.options = Object.assign({}, n, t), this.updateOptions(), this.vh = document.documentElement.clientHeight, this.isVisible = !1, this.damp = this.calcDamp(document.documentElement.clientWidth), this.elementTagName = e.tagName.toLowerCase(), "img" === this.elementTagName) {
                        var s = e.getAttribute("src");
                        if (!s) return;
                        (async function(e) {
                            var t = new Image;
                            return t.src = e, await t.decode(), t
                        })(s).then(function() {
                            i.createParallax()
                        })
                    } else this.createParallax()
                };
            l.prototype.createParallax = function() {
                this.setStyle(!0), this.wrapElement(), r() || this.createObserver()
            }, l.prototype.updateOptions = function() {
                var e = this.element.getAttribute("data-u-scale"),
                    t = this.element.getAttribute("data-u-speed"),
                    i = this.element.getAttribute("data-u-willchange");
                null !== e && (this.options.scale = Number(e)), null !== t && (this.options.speed = Number(t)), null !== i && (this.options.willChange = !0)
            }, l.prototype.setStyle = function(e) {
                void 0 === e && (e = !1);
                var t = this.element.clientHeight,
                    i = this.element.clientWidth,
                    s = window.getComputedStyle(this.element),
                    r = "absolute" === s.position,
                    n = this.wrapper.style,
                    l = this.element.style,
                    o = this.options.scale;
                r && "0px" !== s.marginRight && "0px" !== s.marginLeft && s.marginLeft === s.marginRight && (n.margin = "auto"), "0px" === s.marginTop && "0px" === s.marginBottom || (n.marginTop = s.marginTop, n.marginBottom = s.marginBottom, l.marginTop = "0", l.marginBottom = "0"), "auto" !== s.inset && (n.top = s.top, n.right = s.right, n.bottom = s.bottom, n.left = s.left, l.top = "0", l.right = "0", l.bottom = "0", l.left = "0"), "none" !== s.transform && (n.transform = s.transform), "auto" !== s.zIndex && (n.zIndex = s.zIndex), n.position = r ? "absolute" : "relative", "auto" !== s.gridArea && "auto / auto / auto / auto" !== s.gridArea && (n.gridArea = s.gridArea, l.gridArea = "auto"), e && (n.width = "100%", n.overflow = "hidden", l.display = "block", l.overflow = "hidden", l.backfaceVisibility = "hidden", "0px" !== s.padding && (l.padding = "0"), "img" === this.elementTagName ? l.objectFit = "cover" : "video" !== this.elementTagName && (l.backgroundPosition = "center")), "0px" !== s.borderRadius && (n.borderRadius = s.borderRadius, n.isolation || (n.isolation = "isolate"), "0px" !== s.marginLeft && (n.marginLeft = s.marginLeft, l.marginLeft = "0"), "0px" !== s.marginRight && (n.marginRight = s.marginRight, l.marginRight = "0"), n.width = i + "px"), r && (n.width = i + "px", l.width = "100%"), "none" !== s.maxHeight && (n.maxHeight = s.maxHeight, l.maxHeight = "none"), "0px" !== s.minHeight && (n.minHeight = s.minHeight, l.minHeight = "none"), l.width = i + "px", n.setProperty("height", t + "px", "important"), l.setProperty("height", t * o + "px", "important"), this.wrapperHeight = t, this.overflow = Math.floor(10 * (t - t * o)) / 10
            }, l.prototype.wrapElement = function() {
                var e = this.element.getAttribute("data-u-wrapper-class") || this.options.wrapperClass;
                e && this.wrapper.classList.add(e);
                var t = this.element.closest("picture"),
                    i = null !== t ? t : this.element,
                    s = i.parentNode;
                null !== s && s.insertBefore(this.wrapper, i), this.wrapper.appendChild(i)
            }, l.prototype.checkVisible = function() {
                var e = this.wrapper.getBoundingClientRect();
                e.bottom > 0 && e.top < window.innerHeight ? this.onEnter() : this.onLeave()
            }, l.prototype.createObserver = function() {
                var e = this;
                this.observer = new IntersectionObserver(function(t) {
                    t[0].isIntersecting ? e.onEnter() : e.onLeave()
                }, {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                }), this.observer.observe(this.wrapper)
            }, l.prototype.onEnter = function() {
                var e = this.element.style,
                    t = "transform";
                this.options.willChange && e.willChange !== t && (e.willChange = t), this.isVisible = !0
            }, l.prototype.onLeave = function() {
                var e = this.element;
                this.options.willChange && "transform" === e.style.willChange && (e.style.willChange = ""), this.isVisible = !1
            }, l.prototype.calcTranslateValue = function() {
                var e = window.pageYOffset;
                e < 0 && (e = 0);
                var t = this.wrapper.getBoundingClientRect().top + e,
                    i = (e + this.vh - t) / ((this.vh + this.wrapperHeight) / 100),
                    s = this.overflow,
                    r = this.options.speed;
                return Number((s * (1 - Math.min(100, Math.max(0, i)) / 100) * r * this.damp - (s * r - s) / 2).toFixed(4))
            }, l.prototype.calcDamp = function(e) {
                var t = this.options.scale,
                    i = this.options.speed;
                return (i >= 1.4 || t >= 1.4) && e <= 1e3 ? (t < 1 && (t = 1), i < 1 && (i = 1), Math.floor(100 * Math.max(.5, Math.min(1, 1.2 - (1 - (e / 1e3 + (3 - (t + i))))))) / 100) : 1
            }, l.prototype.applyParallax = function() {
                this.element.style.transform = "translate3d(0 , " + this.calcTranslateValue() + "px , 0)"
            }, l.prototype.animate = function() {
                r() && this.checkVisible(), window.pageYOffset < 0 || this.isVisible && this.applyParallax()
            }, l.prototype.reset = function() {
                this.damp = this.calcDamp(window.innerWidth);
                var e = this.wrapper.style,
                    t = this.element.style;
                this.vh = document.documentElement.clientHeight, e.width = "", e.position = "", e.height = "100%", t.width = "", "img" === this.elementTagName && "absolute" === e.position && (e.height = "100%"), "" === e.gridArea ? t.height = "" : t.height = "100%", "0px" !== e.margin && (e.margin = "", t.margin = ""), "auto" !== e.inset && (e.top = "", e.right = "", e.bottom = "", e.left = "", t.top = "", t.right = "", t.bottom = "", t.left = ""), "none" !== e.transform && (e.transform = "", t.transform = ""), "auto" !== e.zIndex && (e.zIndex = ""), "0px" !== e.borderRadius && (e.borderRadius = "", e.isolation = ""), this.setStyle(), this.applyParallax()
            }, l.prototype.destroy = function() {
                var e;
                this.observer && this.observer.disconnect(), this.wrapper.removeAttribute("style"), this.element.removeAttribute("style"), (e = this.wrapper).replaceWith.apply(e, this.wrapper.childNodes)
            };
            var o = function(e, t) {
                var i, r;
                if (!e) throw Error("Argument 'elements' cannot be null.");
                this.instances = [], this.externalRAF = t && t.externalRAF || !1, this.onResizeEvent = this.resize.bind(this), i = "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]"), r = "undefined" != typeof Element && Element.prototype.closest, i && r && "IntersectionObserver" in window && this.init(Array.isArray(e) ? e : "string" == typeof e ? s(document.querySelectorAll(e)) : e instanceof HTMLElement ? [e] : e instanceof NodeList || e instanceof HTMLCollection ? s(e) : [e], t)
            };
            o.prototype.init = function(e, t) {
                this.instances = e.map(function(e) {
                    return new l(e, t)
                }), this.externalRAF || this.animate(), navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) ? window.addEventListener("orientationchange", this.onResizeEvent) : window.addEventListener("resize", this.onResizeEvent)
            }, o.prototype.animate = function() {
                this.instances.forEach(function(e) {
                    e.animate()
                }), this.externalRAF || (this.requestId = window.requestAnimationFrame(this.animate.bind(this)))
            }, o.prototype.reset = function() {
                this.instances.forEach(function(e) {
                    e.reset()
                })
            }, o.prototype.resize = function() {
                clearTimeout(this.timer), this.timer = window.setTimeout(this.reset.bind(this), 500), this.reset.bind(this)
            }, o.prototype.destroy = function() {
                this.requestId && window.cancelAnimationFrame(this.requestId), window.removeEventListener("resize", this.onResizeEvent), window.removeEventListener("orientationchange", this.onResizeEvent), this.instances.forEach(function(e) {
                    e.destroy()
                })
            }
        }
    }
]);