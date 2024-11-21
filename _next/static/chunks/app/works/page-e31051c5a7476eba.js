(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453], {
        9049: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 5663))
        },
        5663: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            });
            var a = s(9268),
                l = s(3113),
                r = s(1852),
                o = s(9770),
                i = s(3565),
                n = s(6006),
                d = s(3607),
                p = s(40),
                c = s(226),
                x = s(4136),
                m = s(6394),
                u = s.n(m),
                w = s(5984),
                h = s(2982),
                g = {
                    src: "/_next/static/media/klas.d4a61a62.gif",
                    height: 446,
                    width: 800,
                    blurWidth: 0,
                    blurHeight: 0
                },
                f = {
                    src: "/_next/static/media/packachange.79993326.gif",
                    height: 446,
                    width: 800,
                    blurWidth: 0,
                    blurHeight: 0
                },
                v = {
                    src: "/_next/static/media/squareme2.ebf1c386.gif",
                    height: 443,
                    width: 800,
                    blurWidth: 0,
                    blurHeight: 0
                },
                j = {
                    src: "/_next/static/media/dentalopulence.8fc171b9.gif",
                    height: 219,
                    width: 400,
                    blurWidth: 0,
                    blurHeight: 0
                },
                y = () => {
                    let e = (0, n.useRef)(null),
                        t = (0, n.useRef)(null),
                        s = (0, n.useRef)(null),
                        {
                            dispatch: l
                        } = (0, i.Z)(),
                        [r, d] = (0, n.useState)(p.El);
                    (0, n.useLayoutEffect)(() => {
                        new h.Z(".ukiyo"), c.ZP.to(".projectLine", {
                            width: "100%",
                            duration: 1.7,
                            ease: x.Lp.easeInOut,
                            scrollTrigger: {
                                trigger: ".projectLine",
                                start: "top top+=90%",
                                end: "top top"
                            }
                        })
                    }, []), (0, n.useLayoutEffect)(() => {
                        let e = e => {
                                let t = parseInt(e.getAttribute("data-scroll-speed"), 10);
                                return {
                                    update: s => {
                                        e.style.transform = "translateY(".concat(-(s / t), "px)")
                                    }
                                }
                            },
                            t = [];
                        document.querySelectorAll("[data-scroll-speed]").forEach(s => {
                            t.push(e(s))
                        });
                        let s = () => {
                            let e = window.scrollY || document.documentElement.scrollTop;
                            t.forEach(t => {
                                t.update(e)
                            })
                        };
                        return window.addEventListener("scroll", s), () => {
                            window.removeEventListener("scroll", s)
                        }
                    }, []), (0, n.useLayoutEffect)(() => {
                        let e = new w.Z(".HeadSpan1", {
                                types: "lines, words"
                            }),
                            t = new w.Z(".HeadSpan2", {
                                types: "lines, words"
                            }),
                            s = new w.Z(".HeadSpan3", {
                                types: "lines, words"
                            }),
                            a = new w.Z(".HeadSpan4", {
                                types: "lines, words"
                            }),
                            l = new w.Z(".HeadSpan5", {
                                types: "lines, words"
                            }),
                            r = new w.Z(".HeadSpan6", {
                                types: "lines, words"
                            }),
                            o = new w.Z(".HeadSpan7", {
                                types: "lines, words"
                            }),
                            i = new w.Z(".HeadSpan8", {
                                types: "lines, words"
                            }),
                            n = new w.Z(".selectedwork", {
                                types: "lines, words"
                            }),
                            d = new w.Z(".portfolio", {
                                types: "lines, words"
                            });
                        c.ZP.to(d.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".portfolio",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(n.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".selectedwork",
                                start: "top top+=80%"
                            }
                        }), c.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan1",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(t.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan2",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(s.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan3",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(a.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan4",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(l.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan5",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(r.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan6",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(o.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".HeadSpan7",
                                start: "top top+=90%"
                            }
                        }), c.ZP.to(i.words, {
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
                    }, []), (0, n.useLayoutEffect)(() => {
                        let a = null == e ? void 0 : e.current,
                            l = null == t ? void 0 : t.current,
                            r = null == s ? void 0 : s.current,
                            o = () => {
                                c.ZP.timeline().to(l, {
                                    left: "100%",
                                    duration: .9,
                                    ease: "power4.out"
                                }), c.ZP.timeline().to(r, {
                                    left: "0%",
                                    width: "100%",
                                    duration: .9,
                                    ease: "power4.out"
                                }), c.ZP.timeline().add("midway")
                            },
                            i = () => {
                                c.ZP.to(r, {
                                    width: "0%",
                                    left: "-180%",
                                    duration: .9,
                                    ease: "power4.out",
                                    immediateRender: !1
                                }), c.ZP.to(l, {
                                    width: "100%",
                                    left: "0%",
                                    duration: .9,
                                    ease: "power4.out",
                                    immediateRender: !1
                                })
                            };
                        return null == a || a.addEventListener("mouseenter", o), null == a || a.addEventListener("mouseleave", i), () => {
                            null == a || a.removeEventListener("mouseenter", o), null == a || a.removeEventListener("mouseleave", i)
                        }
                    }, []);
                    let m = (e, t) => {
                        (0, o.eL)(l), (0, o.UL)(l, e), (0, o.w3)(l, t)
                    };
                    return (0, a.jsxs)("div", {
                        className: "lg:mb-[300px] mb-[100px]",
                        children: [(0, a.jsxs)("div", {
                            id: "proj1",
                            className: "relative flex lg:flex-row lg:justify-between flex-col cursor-proj-img view",
                            onClick: () => m(r[0], "proj1"),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan1 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: r[0].name.substring(0, 4)
                                }), (0, a.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan2 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: [" ", r[0].name.substring(4, p.El[0].name.length)]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "absolute w-[35vw] left-[45%] top-[100px]",
                                "data-scroll-speed": "11",
                                children: (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)(u(), {
                                        src: r[0].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, a.jsx)(u(), {
                                            className: "",
                                            src: v,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("p", {
                                className: "md:w-[70%] w-full lg:mt-0 lg:self-end text-left font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:left-9 left-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: r[0].shortDescription
                            })]
                        }), (0, a.jsxs)("div", {
                            id: "proj2",
                            className: "relative flex lg:flex-row-reverse lg:justify-between lg:mt-[300px] md:mt-[150px] mt-[80px] flex-col cursor-proj-img view mb-[100px]",
                            onClick: () => m(r[1], "proj2"),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan3 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: r[1].name.substring(0, 4)
                                }), (0, a.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan4 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0  ",
                                    children: [" ", r[1].name.substring(4, p.El[1].name.length)]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "absolute w-[35vw] right-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "11",
                                children: (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)(u(), {
                                        src: r[1].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, a.jsx)(u(), {
                                            className: "",
                                            src: f,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-right font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:right-9 right-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: r[1].shortDescription
                            })]
                        }), (0, a.jsxs)("div", {
                            id: "proj3",
                            className: "relative flex lg:flex-row lg:justify-between lg:mt-[300px] md:mt-[150px] mt-[80px] flex-col cursor-proj-img view",
                            onClick: () => m(r[2], "proj1"),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan5 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: r[2].name.substring(0, 3)
                                }), (0, a.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold HeadSpan6 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: [" ", r[2].name.substring(3, p.El[2].name.length)]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "absolute w-[35vw] left-[45%] top-[100px]",
                                "data-scroll-speed": "11",
                                children: (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)(u(), {
                                        src: r[2].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, a.jsx)(u(), {
                                            className: "",
                                            src: g,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("p", {
                                className: "md:w-[70%] w-full lg:mt-0 lg:self-end text-left font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:left-9 left-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: r[2].shortDescription
                            })]
                        }), (0, a.jsxs)("div", {
                            id: "proj4",
                            className: "relative flex lg:flex-row-reverse lg:justify-between lg:mt-[300px] md:mt-[150px] mt-[80px] flex-col cursor-proj-img view mb-[100px]",
                            onClick: () => m(r[3], "proj4"),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan7 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0 ",
                                    children: r[3].name.substring(0, 4)
                                }), (0, a.jsxs)("h1", {
                                    className: "font-Clash-Grotesk-Bold text-right HeadSpan8 overflow-y-hidden uppercase md:text-[20vw] sm:text-[25vw] text-[30vw] md:leading-[105%] sm:leading-[90%] leading-[80%] my-0  ",
                                    children: [" ", r[3].name.substring(4, p.El[3].name.length)]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "absolute w-[35vw] right-[45%] top-[100px] z-[100]",
                                "data-scroll-speed": "11",
                                children: (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)(u(), {
                                        src: r[3].coverImg,
                                        alt: "",
                                        className: "object-cover xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[320px] xs:h-[220px] h-[150px] brightness-50 rounded-[7px] ukiyo",
                                        "data-u-scale": "1.2",
                                        "data-u-speed": "1.7"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%]",
                                        children: (0, a.jsx)(u(), {
                                            className: "",
                                            src: j,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("p", {
                                className: "z-[30] md:w-[70%] w-full lg:mt-0 lg:self-end text-right font-NeueMontreal-Regular big:text-[20px] text-[16px] xl:w-[19%] relative xl:-top-12 xl:right-9 right-0 xl:mt-12 sm:mt-11 mt-6 mb-8 xl:mb-0 uppercase projectPara2",
                                children: r[3].shortDescription
                            })]
                        })]
                    })
                },
                b = s(4924),
                N = s(8228),
                Z = () => {
                    let {
                        dispatch: e,
                        workType: t
                    } = (0, i.Z)();
                    return (0, n.useLayoutEffect)(() => {
                        "project" === t ? (c.ZP.to(".projText", {
                            opacity: 1,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".labText", {
                            opacity: .2,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".labSectionText", {
                            opacity: 0,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".projectSectionText", {
                            opacity: 1,
                            ease: "power3.out",
                            duration: .4
                        })) : "lab" === t && (c.ZP.to(".labText", {
                            opacity: 1,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".projText", {
                            opacity: .2,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".projectSectionText", {
                            opacity: 0,
                            ease: "power3.out",
                            duration: .4
                        }), c.ZP.to(".labSectionText", {
                            opacity: 1,
                            ease: "power3.out",
                            duration: .4
                        }))
                    }, [t]), (0, n.useLayoutEffect)(() => {
                        c.ZP.to(".workpageLine", {
                            width: "90%",
                            duration: 1.7,
                            delay: .2,
                            ease: x.Lp.easeInOut
                        })
                    }, []), (0, n.useLayoutEffect)(() => {
                        let e = new w.Z(".projText", {
                                types: "lines, words"
                            }),
                            t = new w.Z(".labText", {
                                types: "lines, words"
                            }),
                            s = new w.Z(".sectionTextAnim", {
                                types: "lines, words"
                            });
                        c.ZP.to(s.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4
                        }), c.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .4,
                            duration: 1.4
                        }), c.ZP.to(t.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .4,
                            duration: 1.4
                        })
                    }, []), (0, a.jsxs)("div", {
                        className: "mt-[1%]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-row justify-around",
                            children: [(0, a.jsx)("h1", {
                                onClick: () => (0, o.lE)(e, "project"),
                                className: "w-fit font-NeueMontreal-Medium projText flex items-start justify-start proj-click",
                                children: (0, a.jsx)("span", {
                                    className: "text-neutral text-[9vw] ",
                                    children: "Project"
                                })
                            }), (0, a.jsx)("h1", {
                                onClick: () => (0, o.lE)(e, "lab"),
                                className: "w-fit font-NeueMontreal-Medium labText opacity-[0.2] hover:opacity-[0.3] ease-in-out duration-300 flex items-start justify-start lab-click",
                                children: (0, a.jsx)("span", {
                                    className: "text-neutral text-[9vw]  ",
                                    children: "Works"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "workpageLine h-[2px] w-0 mx-auto bg-[#000] mt-[22px]"
                        }), (0, a.jsxs)("div", {
                            className: "relative w-full mx-auto lg:mt-[119px] mt-[70px] big:top-0 top-10 md:text-[22px] text-[18px] text-center font-NeueMontreal-Regular",
                            children: [(0, a.jsx)("p", {
                                className: "sectionTextAnim projectSectionText absolute sm:w-[75%] w-full mx-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                                children: p.Lj.project.details
                            }), (0, a.jsx)("p", {
                                className: "sectionTextAnim labSectionText absolute sm:w-[75%] w-full mx-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                                children: p.Lj.labs.details
                            })]
                        })]
                    })
                },
                P = () => {
                    let {
                        workType: e,
                        dispatch: t,
                        project: s,
                        projectScreenShow: p,
                        sectionToScroll: c
                    } = (0, i.Z)();
                    return ((0, n.useLayoutEffect)(() => {
                        let e;
                        if (!p && c) {
                            let s = document.getElementById(c);
                            s && (e = setTimeout(() => {
                                s.scrollIntoView({
                                    behavior: "smooth"
                                }), (0, o.w3)(t, null)
                            }))
                        }
                        return () => {
                            clearTimeout(e)
                        }
                    }, [p]), p) ? (0, a.jsx)(l.Z, {
                        project: s,
                        closePopup: () => {
                            (0, o.Vk)(t)
                        }
                    }) : (0, a.jsx)(r.Z, {
                        children: (0, a.jsxs)("main", {
                            className: "top-20 bottom-0 w-full px-5 lg:px-[70px] sm:px-[45px] relative ",
                            children: [(0, a.jsx)(Z, {}), "project" === e ? (0, a.jsx)("section", {
                                className: "top-44 relative",
                                children: (0, a.jsx)(N.Z, {})
                            }) : (0, a.jsx)("section", {
                                className: "top-44 relative",
                                children: (0, a.jsx)(y, {})
                            }), (0, a.jsxs)("section", {
                                className: "relative md:top-32 sm:top-20 top-10",
                                children: [" ", (0, a.jsx)(b.Z, {})]
                            }), (0, a.jsx)("section", {
                                className: "relative md:top-32 top-10",
                                children: (0, a.jsx)(d.Z, {})
                            })]
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [224, 845, 541, 405, 253, 698, 744], function() {
            return e(e.s = 9049)
        }), _N_E = e.O()
    }
]);