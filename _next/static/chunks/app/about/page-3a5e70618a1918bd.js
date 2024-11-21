(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [301], {
        8915: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 8811))
        },
        2235: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = s(6006),
                r = s(226);

            function i(e) {
                let {
                    children: t
                } = e, s = (0, a.useRef)(null);
                return (0, a.useLayoutEffect)(() => {
                    let e = r.ZP.quickTo(s.current, "x", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        }),
                        t = r.ZP.quickTo(s.current, "y", {
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    s.current.addEventListener("mousemove", a => {
                        let {
                            clientX: r,
                            clientY: i
                        } = a, {
                            height: l,
                            width: o,
                            left: n,
                            top: c
                        } = s.current.getBoundingClientRect();
                        e(r - (n + o / 2)), t(i - (c + l / 2))
                    }), s.current.addEventListener("mouseleave", s => {
                        e(0), t(0)
                    })
                }, []), a.cloneElement(t, {
                    ref: s
                })
            }
        },
        8811: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return ee
                }
            });
            var a = s(9268),
                r = s(1852),
                i = s(6006),
                l = s(6394),
                o = s.n(l),
                n = s(172),
                c = s.n(n),
                A = s(2235),
                u = s(226),
                p = s(5214),
                x = s(6167),
                d = s(2982);
            u.ZP.registerPlugin(x.i);
            var g = () => {
                    let e = (0, i.useRef)([]),
                        t = (0, i.useRef)(null);
                    u.ZP.timeline(), (0, i.useLayoutEffect)(() => {
                        new d.Z(".ukiyo")
                    }, []);
                    let s = e => {
                            let t = [];
                            return e.split(" ").forEach((e, s) => {
                                let i = r(e);
                                t.push((0, a.jsx)("p", {
                                    children: i
                                }, e + "_" + s))
                            }), t
                        },
                        r = t => {
                            let s = [];
                            return t.split("").forEach((t, r) => {
                                s.push((0, a.jsx)("span", {
                                    ref: t => {
                                        e.current.push(t)
                                    },
                                    children: t
                                }, t + "_" + r))
                            }), s
                        },
                        l = () => {
                            u.ZP.to(e.current, {
                                scrollTrigger: {
                                    trigger: t.current,
                                    scrub: !0,
                                    start: "top top+=70%",
                                    end: "+=".concat(window.innerHeight / 1.4)
                                },
                                opacity: 1,
                                ease: "none",
                                stagger: .1
                            })
                        };
                    return (0, i.useLayoutEffect)(() => {
                        l()
                    }, []), (0, a.jsx)("div", {
                        className: "md:mt-[100px] mt-[30px]",
                        children: (0, a.jsxs)("div", {
                            ref: t,
                            className: "lg:gap-[200px] gap-[30px] xl:gap-[235px] flex lg:flex-row items-start flex-col text-neutral",
                            children: [(0, a.jsx)(A.Z, {
                                children: (0, a.jsx)("span", {
                                    className: "one text-neutral font-NeueMontreal-Italic text-xl",
                                    children: "I"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, a.jsx)("h1", {
                                    className: "aboutheroTitle font-NeueMontreal-Medium text-neutral xl:text-[144px] lg:text-[94px] md:text-[60px] text-[56px] xl:leading-[130px] lg:leading-[90px] md:leading-[60px] leading-[48px] uppercase ".concat(c().herobody),
                                    children: s("Talented")
                                }), (0, a.jsx)("h1", {
                                    className: "aboutheroTitle font-NeueMontreal-Medium text-neutral xl:text-[144px] lg:text-[94px] md:text-[60px] text-[56px] xl:leading-[130px] lg:leading-[90px] md:leading-[60px] leading-[48px] uppercase ".concat(c().herobody),
                                    children: s("Creative")
                                }), (0, a.jsx)("h1", {
                                    className: "aboutheroTitle font-NeueMontreal-Medium text-neutral xl:text-[144px] lg:text-[94px] md:text-[60px] text-[56px] xl:leading-[130px] lg:leading-[90px] md:leading-[60px] leading-[48px] uppercase  ".concat(c().herobody, " mb-9"),
                                    children: s("Developer")
                                }), (0, a.jsx)(o(), {
                                    src: p._2,
                                    alt: "",
                                    className: "xl:w-[707px] lg:w-[555px] xl:max-h-[421px] lg:max-h-[415px] max-h-[400px] max-w-full about-cover ukiyo ",
                                    "data-u-scale": "1.2",
                                    "data-u-speed": "1.7"
                                })]
                            })]
                        })
                    })
                },
                m = s(4136),
                h = s(5984),
                f = s(40),
                w = s(469),
                b = s.n(w),
                j = s(982);
            u.ZP.registerPlugin(x.i);
            var v = () => ((0, i.useLayoutEffect)(() => {
                    let e = new h.Z(".aboutaboutshortheading", {
                            types: "lines, words"
                        }),
                        t = new h.Z(".animateabouttext2", {
                            types: "lines, words"
                        }),
                        s = new h.Z(".aboutabout2Description1", {
                            types: "lines, words"
                        }),
                        a = new h.Z(".aboutabout2Description2", {
                            types: "lines, words"
                        });
                    u.ZP.to(t.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        stagger: .02,
                        scrollTrigger: {
                            trigger: ".animateabouttext2",
                            start: "top top+=90%"
                        }
                    }), u.ZP.to(e.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        stagger: .02,
                        scrollTrigger: {
                            trigger: ".aboutaboutshortheading",
                            start: "top top+=90%"
                        }
                    }), u.ZP.to(s.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        stagger: .02,
                        scrollTrigger: {
                            trigger: ".aboutabout2Description1",
                            start: "top top+=90%"
                        }
                    }), u.ZP.to(a.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        stagger: .02,
                        scrollTrigger: {
                            trigger: ".aboutabout2Description2",
                            start: "top top+=90%"
                        }
                    }), u.ZP.to(".shurikenabout", {
                        rotation: 324,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: ".shurikenabout",
                            start: "top top+=80%",
                            scrub: 1
                        }
                    })
                }, []), (0, i.useLayoutEffect)(() => {
                    u.ZP.timeline(), document.querySelectorAll(".image_reveal").forEach(e => {
                        let t = e.querySelector(".revealImage"),
                            s = u.ZP.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    toggleActions: "restart none none reverse",
                                    start: "top top+=20%"
                                }
                            });
                        s.set(e, {
                            autoAlpha: 1
                        }), s.from(e, 1.5, {
                            yPercent: -100,
                            ease: m.Lp.easeInOut
                        }), s.from(t, 1.5, {
                            yPercent: 100,
                            scale: 1.3,
                            delay: -1.5,
                            ease: m.Lp.easeInOut
                        })
                    })
                }, []), (0, a.jsxs)("div", {
                    className: "lg:mt-[180px] mt-[125px] md:w-fit w-full relative xl:left-[263px] lg:left-[230px] flex flex-col gap-[40px]",
                    children: [(0, a.jsxs)("div", {
                        className: "flex xl:flex-row flex-col xl:gap-[200px]  gap-[30px] items-start",
                        children: [(0, a.jsx)("p", {
                            className: "lg:w-[256px] w-full text-neutral font-NeueMontreal-Regular sm:text-[22px] text-xl aboutaboutshortheading",
                            children: f.sy
                        }), (0, a.jsx)("div", {
                            className: "".concat(b().reveal_container, " container_reveal"),
                            children: (0, a.jsx)("div", {
                                className: "".concat(b().reveal_image, " image_reveal"),
                                children: (0, a.jsx)(o(), {
                                    src: p.io,
                                    alt: "about self image",
                                    className: "".concat(b().imgReveal, " revealImage")
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex xl:flex-row xl:gap-0 gap-[20px] flex-col text-[18px] justify-between w-full",
                        children: [(0, a.jsx)("p", {
                            className: "animateabouttext2",
                            children: "EXPEREINCED DEVELOPER"
                        }), (0, a.jsxs)("div", {
                            className: "flex md:flex-row flex-col md:gap-[99px] gap-[10px] ",
                            children: [(0, a.jsxs)("div", {
                                className: "flex md:gap-[58px] md:justify-normal md:self-start justify-between",
                                children: [(0, a.jsxs)("p", {
                                    className: " flex flex-row items-center justify-center gap-[3px] w-fit",
                                    children: [(0, a.jsx)(A.Z, {
                                        children: (0, a.jsx)(o(), {
                                            width: 20,
                                            className: "m-0 shurikenabout md:hidden block",
                                            src: j.Z,
                                            alt: "shurikenicon"
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "animateabouttext2",
                                        children: "FINTECH"
                                    })]
                                }), (0, a.jsxs)("p", {
                                    className: "flex flex-row items-center justify-center gap-[3px] w-fit",
                                    children: [(0, a.jsx)("span", {
                                        className: "animateabouttext2",
                                        children: "E-COMMERCE"
                                    }), (0, a.jsx)(A.Z, {
                                        children: (0, a.jsx)(o(), {
                                            width: 20,
                                            className: "m-0 shurikenabout md:hidden block",
                                            src: j.Z,
                                            alt: "shurikenicon"
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex md:gap-[58px] md:justify-normal md:self-start justify-between",
                                children: [(0, a.jsxs)("p", {
                                    className: "flex flex-row items-center justify-center gap-[3px] w-fit",
                                    children: [(0, a.jsx)(A.Z, {
                                        children: (0, a.jsx)(o(), {
                                            width: 20,
                                            className: "m-0 shurikenabout md:hidden block",
                                            src: j.Z,
                                            alt: "shurikenicon"
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "animateabouttext2",
                                        children: "EDU-TECH"
                                    })]
                                }), (0, a.jsxs)("p", {
                                    className: "flex flex-row items-center justify-center gap-[3px] w-fit",
                                    children: [(0, a.jsx)("span", {
                                        className: "animateabouttext2",
                                        children: "AGENCY"
                                    }), (0, a.jsx)(A.Z, {
                                        children: (0, a.jsx)(o(), {
                                            width: 20,
                                            className: "m-0 shurikenabout md:hidden block",
                                            src: j.Z,
                                            alt: "shurikenicon"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                })),
                E = s(3020),
                y = s.n(E),
                N = s(912),
                P = s.n(N);
            let z = [{
                title: "Creative Development",
                description: "Crafting engaging web experiences through innovative design and code, enhancing user interaction, conversion and satisfaction.",
                src: {
                    src: "/_next/static/media/creativeAbout.73dc72d7.png",
                    height: 4268,
                    width: 3200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAMFBMVEX+10MEBQrGw8JORSLpx0Dr0HDIxcrUzcarjif30UiKeTfSsjxKQib411jaxoBERVOSnwx7AAAACXBIWXMAACxLAAAsSwGlPZapAAAAMklEQVR4nCXHSRLAMAgEsR7AgLP5/791JTmpRJnZgCzLmqxnvNMVNyB5fOj41wHyPpkbF3AAxshhltMAAAAASUVORK5CYII=",
                    blurWidth: 6,
                    blurHeight: 8
                }
            }, {
                title: "Front end Engineering",
                description: "Optimizing web performance and usability with expert front-end engineering, elevating user experiences and client satisfaction.",
                src: {
                    src: "/_next/static/media/frontendAbout.6bff412c.jpg",
                    height: 2e3,
                    width: 2e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAwARBHECBRUh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAISIf/aAAwDAQACEQMRAD8AvXYfdewkYzWrx0tBJPKwwEm/mjVHYiIisnWmV7P/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                title: "Mobile Development",
                description: "Creating mobile apps that blend functionality and aesthetics, enhancing user engagement and achieving client/company's goals.",
                src: {
                    src: "/_next/static/media/mobileAbout.53ebba88.jpg",
                    height: 4200,
                    width: 2800,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBAURITH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACESH/2gAMAwEAAhEDEQA/AJAYuOzXrxYXDz2jHC10/PC7oOz7vRREQtuxwwyf/9k=",
                    blurWidth: 5,
                    blurHeight: 8
                }
            }, {
                title: "Backend Development",
                description: "Eager to learn, I offer junior-level backend development skills with a passion for problem-solving and growth.",
                src: {
                    src: "/_next/static/media/backendAbout.79ae7d5c.jpg",
                    height: 3880,
                    width: 2587,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAABAwAEAhESMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAICAwAAAAAAAAAAAAAAAAABAhEDEyH/2gAMAwEAAhEDEQA/AIiyrndsHBqACzI6U3Q79MREOyS5ZVYotW0f/9k=",
                    blurWidth: 5,
                    blurHeight: 8
                }
            }];
            var Z = () => {
                    let [e, t] = (0, i.useState)(0), s = (0, i.useRef)([]), r = (0, i.useRef)(null), l = (0, i.useRef)(null);
                    (0, i.useLayoutEffect)(() => {
                        u.ZP.registerPlugin(x.i), x.i.create({
                            trigger: l.current,
                            pin: !0,
                            start: "top+=20%",
                            end: "top-=40%"
                        })
                    }, []);
                    let n = e => {
                            let t = s.current[e],
                                a = t.querySelector(".spanEl");
                            u.ZP.to(a, {
                                height: "auto",
                                duration: .3,
                                ease: "power1.easeInOut"
                            })
                        },
                        c = e => {
                            let t = s.current[e],
                                a = t.querySelector(".spanEl");
                            u.ZP.to(a, {
                                height: 0,
                                duration: .3,
                                ease: "power1.easeInOut"
                            })
                        };
                    return (0, i.useLayoutEffect)(() => {
                        new d.Z(".ukiyo")
                    }, []), (0, a.jsxs)("div", {
                        ref: r,
                        className: P().projects,
                        children: [(0, a.jsx)("span", {
                            className: "text-primary absolute xl:top-[610px] lg:top-[500px] md:top-[200px] sm:top-[200px] top-[100px] text-[15px]",
                            children: "(Scroll)"
                        }), (0, a.jsx)("div", {
                            className: P().projectDescription,
                            children: (0, a.jsx)("div", {
                                ref: l,
                                className: P().imageContainer,
                                children: (0, a.jsx)(o(), {
                                    src: z[e].src,
                                    fill: !0,
                                    alt: "project image",
                                    priority: !0,
                                    className: "ukiyo",
                                    "data-u-scale": "1.2"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: P().projectList,
                            children: z.map((e, r) => (0, a.jsxs)("div", {
                                ref: e => s.current[r] = e,
                                onMouseOver: () => {
                                    t(r)
                                },
                                className: P().projectEl,
                                onMouseEnter: () => n(r),
                                onMouseLeave: () => c(r),
                                children: [(0, a.jsx)("h2", {
                                    children: e.title
                                }), (0, a.jsx)("p", {
                                    className: "text-sm spanEl overflow-hidden h-0",
                                    children: e.description
                                })]
                            }, r))
                        })]
                    })
                },
                O = s(6008),
                D = s(3565);
            u.ZP.registerPlugin(x.i);
            var B = () => {
                let {
                    dispatch: e,
                    pathToNavigate: t,
                    isLoading: s
                } = (0, D.Z)(), r = (0, i.useRef)(null), l = (0, i.useRef)(null);
                (0, O.usePathname)();
                let o = 0;
                (0, i.useEffect)(() => {
                    requestAnimationFrame(n)
                }, []);
                let n = () => {
                        let e = 30 * c();
                        l.current && (l.current.style.webkitMaskSize = (.8 + e) * 100 + "%", requestAnimationFrame(n))
                    },
                    c = () => {
                        if (!l.current) return;
                        let e = l.current.offsetTop / (r.current.getBoundingClientRect().height - window.innerHeight),
                            t = e - o;
                        return o += .15 * t
                    };
                return (0, i.useEffect)(() => {
                    let e = u.ZP.timeline({
                        scrollTrigger: {
                            trigger: ".aboutHeroDescRef",
                            start: "top+=35%",
                            scrub: !0
                        }
                    });
                    e.from(".serviceAboutcnt", {
                        opacity: 0,
                        y: 50,
                        duration: 1
                    })
                }, []), (0, a.jsx)("main", {
                    className: y().main,
                    children: (0, a.jsx)("div", {
                        ref: r,
                        className: y().container,
                        children: (0, a.jsx)("div", {
                            ref: l,
                            className: y().stickyMask,
                            children: (0, a.jsxs)("div", {
                                className: "bg-[#000] h-fit w-screen aboutHeroDescRef",
                                children: [(0, a.jsx)("div", {
                                    className: "serviceAboutcnt",
                                    children: (0, a.jsx)(Z, {})
                                }), (0, a.jsx)("h1", {
                                    className: "text-[#fff] text-[300px] invisible",
                                    children: "scroll"
                                })]
                            })
                        })
                    })
                })
            };
            u.ZP.registerPlugin(x.i);
            var I = () => {
                    let [e, t] = (0, i.useState)(!1);
                    return (0, a.jsx)("div", {
                        className: "",
                        children: (0, a.jsx)("div", {
                            className: "flex flex-col items-center justify-center ",
                            children: (0, a.jsx)(B, {})
                        })
                    })
                },
                M = s(5334),
                _ = s(4454),
                k = s(7011),
                C = s(1558),
                L = s(3701),
                S = s(5893),
                R = () => {
                    let {
                        progress: e
                    } = (0, L.S)();
                    return (0, a.jsx)(S.V, {
                        children: (0, a.jsx)("span", {
                            className: "canvas-load",
                            children: (0, a.jsxs)("p", {
                                style: {
                                    fontSize: 14,
                                    color: "#f1f1f1",
                                    fontWeight: 800,
                                    marginTop: 40
                                },
                                children: [e.toFixed(2), "%"]
                            })
                        })
                    })
                },
                Q = s(2685);
            let H = () => {
                let e = (0, _.L)("./science_model/scene.gltf"),
                    {
                        isMobile: t
                    } = (0, Q.Z)("1385"),
                    {
                        isMobile: s
                    } = (0, Q.Z)("1024"),
                    {
                        isMobile: r
                    } = (0, Q.Z)("450"),
                    [l, o] = (0, i.useState)(11.2),
                    [n, c] = (0, i.useState)([0, -24.65, -1.5]),
                    [A, u] = (0, i.useState)([-.01, -3.2, 0]);
                return (0, i.useEffect)(() => {
                    "true" === r && o(16.2)
                }, [t, s]), (0, a.jsxs)("mesh", {
                    children: [(0, a.jsx)("hemisphereLight", {
                        intensity: 12.15,
                        groundColor: "white"
                    }), (0, a.jsx)("pointLight", {
                        intensity: 15
                    }), (0, a.jsx)("directionalLight", {
                        intensity: 10
                    }), (0, a.jsx)("spotLight", {
                        position: [-20, 50, 10],
                        angle: 5.12,
                        penumbra: 1,
                        intensity: 2,
                        castShadow: !0,
                        "shadow-mapSize": 1024
                    }), (0, a.jsx)("primitive", {
                        object: e.scene,
                        scale: l,
                        position: n,
                        rotation: A,
                        className: "modelcontainer"
                    })]
                })
            };
            var T = () => (0, a.jsxs)(M.Xz, {
                frameloop: "demand",
                shadows: !0,
                camera: {
                    position: [70, 83, 52],
                    fov: 95
                },
                gl: {
                    preserveDrawingBuffer: !0
                },
                children: [(0, a.jsxs)(i.Suspense, {
                    fallback: (0, a.jsx)(R, {}),
                    children: [(0, a.jsx)(k.z, {
                        autoRotate: !0,
                        enableZoom: !1,
                        maxPolarAngle: Math.PI / 2,
                        minPolarAngle: Math.PI / 2
                    }), (0, a.jsx)(H, {})]
                }), (0, a.jsx)(C.q, {
                    all: !0
                })]
            });
            let W = () => {
                let e = (0, _.L)("./gamepad_model2/scene.gltf"),
                    {
                        isMobile: t
                    } = (0, Q.Z)("1385"),
                    {
                        isMobile: s
                    } = (0, Q.Z)("1024"),
                    [r, l] = (0, i.useState)(.7),
                    [o, n] = (0, i.useState)([0, -24.65, -1.5]),
                    [c, A] = (0, i.useState)([-.01, -3.2, 0]);
                return (0, i.useEffect)(() => {
                    "true" === t && "true" !== s ? l(.5) : "true" === s && l(.5)
                }, [t, s]), (0, a.jsxs)("mesh", {
                    children: [(0, a.jsx)("hemisphereLight", {
                        intensity: 12.15,
                        groundColor: "white"
                    }), (0, a.jsx)("pointLight", {
                        intensity: 15
                    }), (0, a.jsx)("directionalLight", {
                        intensity: 10
                    }), (0, a.jsx)("spotLight", {
                        position: [-20, 50, 10],
                        angle: 5.12,
                        penumbra: 1,
                        intensity: 2,
                        castShadow: !0,
                        "shadow-mapSize": 1024
                    }), (0, a.jsx)("primitive", {
                        object: e.scene,
                        scale: r,
                        position: o,
                        rotation: c,
                        className: "modelcontainer"
                    })]
                })
            };
            var Y = () => (0, a.jsxs)(M.Xz, {
                frameloop: "demand",
                shadows: !0,
                camera: {
                    position: [70, 83, 52],
                    fov: 95
                },
                gl: {
                    preserveDrawingBuffer: !0
                },
                children: [(0, a.jsxs)(i.Suspense, {
                    fallback: (0, a.jsx)(R, {}),
                    children: [(0, a.jsx)(k.z, {
                        autoRotate: !0,
                        enableZoom: !1,
                        maxPolarAngle: Math.PI / 2,
                        minPolarAngle: Math.PI / 2
                    }), (0, a.jsx)(W, {})]
                }), (0, a.jsx)(C.q, {
                    all: !0
                })]
            });
            let F = () => {
                let {
                    isMobile: e
                } = (0, Q.Z)("1385"), {
                    isMobile: t
                } = (0, Q.Z)("1024"), s = (0, _.L)("./guitar_model2/scene.gltf"), [r, l] = (0, i.useState)(.81), [o, n] = (0, i.useState)([0, 1.65, -1.5]), [c, A] = (0, i.useState)([-.01, -3.2, -.1]);
                return (0, i.useEffect)(() => {
                    "true" === e && "true" !== t ? l(.81) : "true" === t && l(.76)
                }, [e, t]), (0, a.jsxs)("mesh", {
                    children: [(0, a.jsx)("hemisphereLight", {
                        intensity: 3.15,
                        groundColor: "black"
                    }), (0, a.jsx)("pointLight", {
                        intensity: 5
                    }), (0, a.jsx)("spotLight", {
                        position: [-20, 50, 10],
                        angle: 2.12,
                        penumbra: 1,
                        intensity: 2,
                        castShadow: !0,
                        "shadow-mapSize": 1024
                    }), (0, a.jsx)("primitive", {
                        object: s.scene,
                        scale: r,
                        position: o,
                        rotation: c,
                        className: "modelcontainer"
                    })]
                })
            };
            var K = () => (0, a.jsxs)(M.Xz, {
                    frameloop: "demand",
                    shadows: !0,
                    camera: {
                        position: [30, 53, 52],
                        fov: 105
                    },
                    gl: {
                        preserveDrawingBuffer: !0
                    },
                    children: [(0, a.jsxs)(i.Suspense, {
                        fallback: (0, a.jsx)(R, {}),
                        children: [(0, a.jsx)(k.z, {
                            autoRotate: !0,
                            enableZoom: !1,
                            maxPolarAngle: Math.PI / 2,
                            minPolarAngle: Math.PI / 2
                        }), (0, a.jsx)(F, {})]
                    }), (0, a.jsx)(C.q, {
                        all: !0
                    })]
                }),
                U = s(9770),
                q = s(34),
                J = s.n(q);
            u.ZP.registerPlugin(x.i);
            let V = ["Music", "Gaming", "Science", " "];
            var G = () => {
                    let {
                        dispatch: e,
                        hobbySelected: t
                    } = (0, D.Z)(), [s, r] = (0, i.useState)(V), [l, o] = (0, i.useState)("Music"), n = (0, i.useRef)(null);
                    return (0, i.useRef)(null), (0, i.useRef)(null), (0, i.useRef)(null), (0, i.useLayoutEffect)(() => {
                        let e = new h.Z(".aboutinterest", {
                                types: "lines, words"
                            }),
                            t = new h.Z(".aboutinteraction", {
                                types: "lines, words"
                            }),
                            s = new h.Z(".box", {
                                types: "lines, words"
                            }),
                            a = new h.Z(".subHeadinghobbies", {
                                types: "lines, words"
                            }),
                            r = new h.Z(".descriptionHobbies", {
                                types: "lines, words"
                            });
                        u.ZP.to(a.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".subHeadinghobbies",
                                start: "top top+=90%"
                            }
                        }), u.ZP.to(r.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            stagger: .01,
                            scrollTrigger: {
                                trigger: ".descriptionHobbies",
                                start: "top top+=90%"
                            }
                        }), u.ZP.to(s.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            scrollTrigger: {
                                trigger: ".box",
                                start: "top top+=90%"
                            }
                        }), u.ZP.fromTo(".twoabout", {
                            x: -100,
                            opacity: 0
                        }, {
                            x: 0,
                            opacity: 1,
                            ease: "circ.out",
                            scrollTrigger: {
                                trigger: ".twoabout",
                                start: "top top+=90%",
                                end: "top top+=3%",
                                toggleActions: "play reverse play reset"
                            }
                        }), u.ZP.to(e.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            stagger: .02,
                            scrollTrigger: {
                                trigger: ".aboutinterest",
                                start: "top top+=90%"
                            }
                        }), u.ZP.to(t.words, {
                            opacity: 1,
                            translateY: "0%",
                            ease: "power3.out",
                            delay: .2,
                            duration: 1.4,
                            stagger: .02,
                            scrollTrigger: {
                                trigger: ".aboutinteraction",
                                start: "top top+=90%"
                            }
                        })
                    }, []), (0, i.useLayoutEffect)(() => {
                        document.querySelector(".wrapper");
                        let e = u.ZP.utils.toArray(".box"),
                            t = function(e, t) {
                                var s, a, r, i, l;
                                e = u.ZP.utils.toArray(e), t = t || {};
                                let o = u.ZP.timeline({
                                        repeat: t.repeat,
                                        paused: t.paused,
                                        defaults: {
                                            ease: "none"
                                        },
                                        onReverseComplete: () => o.totalTime(o.rawTime() + 100 * o.duration())
                                    }),
                                    n = e.length,
                                    c = null === (s = e[0]) || void 0 === s ? void 0 : s.offsetLeft,
                                    A = [],
                                    p = [],
                                    x = [],
                                    d = 0,
                                    g = 100 * (t.speed || 1),
                                    m = !1 === t.snap ? e => e : u.ZP.utils.snap(t.snap || 1),
                                    h, f, w, b, j, v;
                                for (u.ZP.set(e, {
                                        xPercent: (e, t) => {
                                            let s = p[e] = parseFloat(u.ZP.getProperty(t, "width", "px"));
                                            return x[e] = m(parseFloat(u.ZP.getProperty(t, "x", "px")) / parseInt(100 * s) + parseInt(u.ZP.getProperty(t, "xPercent"))), x[e]
                                        }
                                    }), u.ZP.set(e, {
                                        x: 0
                                    }), h = (null === (a = e[n - 1]) || void 0 === a ? void 0 : a.offsetLeft) + x[n - 1] / 100 * p[n - 1] - c + (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.offsetWidth) * parseInt(u.ZP.getProperty(e[n - 1], "scaleX")) + (parseFloat(null === (i = t) || void 0 === i ? void 0 : i.paddingRight) || 0), v = 0; v < n; v++) j = e[v], f = x[v] / 100 * p[v], b = (w = j.offsetLeft + f - c) + p[v] * parseInt(u.ZP.getProperty(j, "scaleX")), o.to(j, {
                                    xPercent: m((f - b) / p[v] * 100),
                                    duration: b / g
                                }, 0).fromTo(j, {
                                    xPercent: m((f - b + h) / p[v] * 100)
                                }, {
                                    xPercent: x[v],
                                    duration: (f - b + h - f) / g,
                                    immediateRender: !1
                                }, b / g).add("label" + v, w / g), A[v] = w / g;

                                function E(e, t) {
                                    t = t || {}, Math.abs(e - d) > n / 2 && (e += e > d ? -n : n);
                                    let s = u.ZP.utils.wrap(0, n, e),
                                        a = A[s];
                                    return a > o.time() != e > d && (t.modifiers = {
                                        time: u.ZP.utils.wrap(0, o.duration())
                                    }, a += o.duration() * (e > d ? 1 : -1)), d = s, t.overwrite = !0, o.tweenTo(a, t)
                                }
                                return o.next = e => E(d + 5, e), o.previous = e => E(d - 5, e), o.current = () => d, o.toIndex = (e, t) => E(e, t), o.times = A, o.progress(1, !0).progress(0, !0), t.reversed && (null === (l = o.vars) || void 0 === l || l.onReverseComplete(), o.reverse()), o
                            }(e, {
                                paused: !0
                            });
                        e.forEach((e, s) => e.addEventListener("click", () => {
                            switch (t.toIndex(s, {
                                duration: .8,
                                ease: "power1.inOut"
                            }), s) {
                                case 0:
                                    o("Music");
                                    return;
                                case 1:
                                    o("Gaming");
                                    return;
                                case 2:
                                    o("Science");
                                    return
                            }
                        }))
                    }, []), (0, i.useLayoutEffect)(() => {
                        switch (t) {
                            case "science":
                                u.ZP.to(".scienceWrap", {
                                    opacity: 1,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".musicWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".gamingWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                });
                                return;
                            case "music":
                                u.ZP.to(".scienceWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".musicWrap", {
                                    opacity: 1,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".gamingWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                });
                                return;
                            case "gaming":
                                u.ZP.to(".scienceWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".musicWrap", {
                                    opacity: 0,
                                    ease: "power3.out",
                                    duration: .4
                                }), u.ZP.to(".gamingWrap", {
                                    opacity: 1,
                                    ease: "power3.out",
                                    duration: .4
                                });
                                return
                        }
                    }, [t]), (0, a.jsxs)("div", {
                        className: "lg:-top-[130px] relative h-[75vh]",
                        children: [(0, a.jsxs)("div", {
                            className: "grid grid-cols-3 text-neutral lg:mt-[303px] mt-[100px]",
                            children: [(0, a.jsx)(A.Z, {
                                children: (0, a.jsx)("span", {
                                    className: "twoabout text-neutral font-NeueMontreal-Italic w-fit text-xl",
                                    children: "II"
                                })
                            }), (0, a.jsx)("p", {
                                className: "font-NeueMontreal-Regular big:text-[22px] text-[20px] w-fit aboutinterest",
                                children: "HOBBIES"
                            }), (0, a.jsx)("p", {
                                className: "font-NeueMontreal-Regular big:text-[22px] text-[20px] w-fit hidden md:flex aboutinteraction",
                                children: "INTERACT"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "".concat(J().wrapper, " z-[14]"),
                            children: s.map((t, s) => (0, a.jsx)("h1", {
                                onClick: () => (0, U.QL)(e, t.toLowerCase()),
                                className: " ".concat(J().box, " box font-NeueMontreal-Medium text-neutral ").concat(l !== t && "opacity-[0.2] hover:opacity-[0.3] ease-in-out duration-300", " xl:text-[144px] lg:text-[94px] md:text-[60px] duration-300 text-[56px] xl:leading-[130px] lg:leading-[90px] md:leading-[60px] leading-[48px] uppercase "),
                                ref: n,
                                children: t
                            }, s))
                        }), (0, a.jsxs)("div", {
                            className: "h-full flex relative w-full",
                            children: [(0, a.jsxs)("div", {
                                className: "musicWrap absolute lg:-top-[160px] sm:-top-[100px] xxs:-top-[20px] top-0 xl:gap-[70px] lg:gap-[70px] w-full h-[100vh] items-start justify-between flex lg:flex-row flex-col-reverse",
                                children: [(0, a.jsxs)("div", {
                                    className: "z-[14] lg:w-[39%] xl:top-[47%] lg:top-[34%] -top-[13%] relative w-full",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-xl text-neutral uppercase font-NeueMontreal-Medium",
                                        children: f.im[1].subHeading
                                    }), (0, a.jsx)("p", {
                                        className: "mt-[25px] text-neutral text-xl",
                                        children: f.im[1].description
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: " z-[9] lg:w-[41%] relative xs:top-0 -top-[30px]  lg:-left-[10%] w-full h-full modelcontainer",
                                    children: (0, a.jsx)(K, {})
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "gamingWrap absolute lg:-top-[160px] sm:-top-[200px] xxs:-top-[90px] top-0 xl:gap-[70px] lg:gap-[70px] w-full h-[100vh] items-start justify-between flex lg:flex-row flex-col-reverse",
                                children: [(0, a.jsxs)("div", {
                                    className: "z-[14] lg:w-[39%] xl:top-[47%] lg:top-[34%] -top-[13%] relative w-full",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-xl text-neutral uppercase font-NeueMontreal-Medium",
                                        children: f.im[0].subHeading
                                    }), (0, a.jsx)("p", {
                                        className: "mt-[25px] text-neutral text-xl",
                                        children: f.im[0].description
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "z-[9] lg:w-[41%] relative xs:top-0 xl:top-0 lg:-top-[80px] -top-[30px]  lg:-left-[10%] w-full h-full modelcontainer",
                                    children: (0, a.jsx)(Y, {})
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "scienceWrap absolute lg:-top-[160px] sm:-top-[50px] xxs:top-[25px] top-0 xl:gap-[70px] lg:gap-[70px] w-full h-[100vh] items-start justify-between flex lg:flex-row flex-col-reverse",
                                children: [(0, a.jsxs)("div", {
                                    className: "z-[14] lg:w-[39%] xl:top-[47%] lg:top-[34%] -top-[13%] relative w-full",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-xl text-neutral uppercase font-NeueMontreal-Medium subHeadinghobbies",
                                        children: f.im[2].subHeading
                                    }), (0, a.jsx)("p", {
                                        className: "mt-[25px] text-neutral text-xl descriptionHobbies",
                                        children: f.im[2].description
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "z-[9] lg:w-[41%] relative xs:-top-[40px] xl:top-0 lg:-top-[80px] -top-[90px]  lg:-left-[10%] w-full h-full modelcontainer",
                                    children: (0, a.jsx)(T, {})
                                })]
                            })]
                        })]
                    })
                },
                X = s(3607),
                $ = s(4924),
                ee = () => (0, a.jsx)("main", {
                    children: (0, a.jsxs)(r.Z, {
                        children: [(0, a.jsx)(I, {}), (0, a.jsxs)("div", {
                            className: "top-20 bottom-0 w-full h-full px-5 lg:px-[70px] sm:px-[45px] relative overflow-x-hidden",
                            children: [(0, a.jsx)(g, {}), (0, a.jsx)(v, {}), (0, a.jsx)(G, {}), (0, a.jsxs)("div", {
                                className: "lg:mt-0 sm:mt-[290px] mt-[340px]",
                                children: [(0, a.jsx)($.Z, {}), (0, a.jsx)(X.Z, {})]
                            })]
                        })]
                    })
                })
        },
        3607: function(e, t, s) {
            "use strict";
            var a = s(9268),
                r = s(8074),
                i = s(2685),
                l = s(3565),
                o = s(5846),
                n = s.n(o),
                c = s(6008);
            t.Z = () => {
                let e = (0, c.usePathname)(),
                    {
                        dispatch: t
                    } = (0, l.Z)(),
                    {
                        isMobileBool: s
                    } = (0, i.Z)("768");
                return (0, a.jsxs)("footer", {
                    className: "relative ".concat("/about" === e ? "top-[50px]" : "top-[30px]", " ").concat("/about" !== e ? "mb-[40px]" : "mb-[100px]", " lg:mt-[200px] mt-[150px] bottom-4 flex big:flex-row flex-col lg:block"),
                    children: [(0, a.jsxs)("div", {
                        className: " flex lg:flex-row flex-col-reverse gap-[22px]",
                        children: [(0, a.jsx)(n(), {
                            className: "text-[18px] text-[#000] flex whitespace-nowrap",
                            href: "",
                            target: "_blank",
                            children: "ReMade By Lasan kanda and the papu"
                        }), (0, a.jsx)("div", {
                            className: "lg:flex hidden  w-full h-[14px] relative border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-[#000]"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "w-full flex md:flex-row flex-col lg:absolute big:justify-end justify-between right-0 md:gap-[60px] gap-[13px]",
                        children: [" ", (0, a.jsxs)("div", {
                            className: "flex flex-row md:justify-end justify-normal lg:relative md:-top-10 lg:gap-[69px] md:gap-[40px] gap-[13px]",
                            children: [(0, a.jsx)(r.Ak, {
                                title: s ? "TW" : "Twitter",
                                id: 3,
                                link: "https://twitter.com/AkogunOyindamo3/",
                                customClass: "w-fit text-[18px]"
                            }), (0, a.jsx)(r.Ak, {
                                title: s ? "LN" : "LinkedIn",
                                id: 4,
                                link: "https://www.linkedin.com/in/oyindacodes/",
                                customClass: "w-fit text-[18px]"
                            }), (0, a.jsx)(r.Ak, {
                                title: s ? "GH" : "Github",
                                id: 5,
                                link: "https://github.com/damoski2/",
                                customClass: "w-fit text-[18px]"
                            })]
                        }), (0, a.jsxs)("p", {
                            className: "text-[18px] lg:relative md:-top-10 md:mt-0 mt-0",
                            children: ["Aquadev Portfolio \xa9", new Date().getFullYear()]
                        })]
                    })]
                })
            }
        },
        4924: function(e, t, s) {
            "use strict";
            var a = s(9268),
                r = s(6006),
                i = s(226),
                l = s(4136),
                o = s(5984),
                n = s(8074),
                c = s(9770),
                A = s(3565),
                u = s(6008);
            t.Z = () => {
                let e = (0, u.usePathname)(),
                    t = (0, r.useRef)(null),
                    s = (0, r.useRef)(null),
                    p = (0, r.useRef)(null),
                    {
                        dispatch: x
                    } = (0, A.Z)();
                return (0, r.useLayoutEffect)(() => {
                    let e = null == t ? void 0 : t.current,
                        a = null == s ? void 0 : s.current;
                    i.ZP.to(e, {
                        left: "0%",
                        duration: .9,
                        ease: "circ3.out",
                        delay: .4,
                        scrollTrigger: {
                            trigger: e,
                            start: "top top+=80%"
                        }
                    }), i.ZP.to(a, {
                        left: "-180%",
                        duration: .9,
                        ease: "circ3.out",
                        delay: .4,
                        scrollTrigger: {
                            trigger: a,
                            start: "top top+=80%"
                        }
                    })
                }, []), (0, r.useLayoutEffect)(() => {
                    let e = null == p ? void 0 : p.current,
                        a = null == t ? void 0 : t.current,
                        r = null == s ? void 0 : s.current,
                        l = () => {
                            i.ZP.to(a, {
                                left: "100%",
                                duration: .9,
                                ease: "circ3.out"
                            }), i.ZP.to(r, {
                                left: "0%",
                                width: "100%",
                                duration: .9,
                                ease: "circ3.out"
                            })
                        },
                        o = () => {
                            i.ZP.to(r, {
                                width: "0%",
                                left: "-180%",
                                duration: .9,
                                ease: "circ3.out",
                                immediateRender: !1
                            }), i.ZP.to(a, {
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
                    i.ZP.timeline();
                    let e = new o.Z(".sayhi", {
                            types: "lines, words, chars"
                        }),
                        t = new o.Z(".contact", {
                            types: "lines, words"
                        }),
                        s = new o.Z(".wannaworksubheading", {
                            types: "lines, words"
                        });
                    i.ZP.to(s.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        scrollTrigger: {
                            trigger: ".wannaworksubheading",
                            start: "top top+=90%"
                        }
                    }), i.ZP.to(t.words, {
                        opacity: 1,
                        translateY: "0%",
                        ease: "power3.out",
                        delay: .2,
                        duration: 1.4,
                        scrollTrigger: {
                            trigger: ".contact",
                            start: "top top+=90%"
                        }
                    }), i.ZP.to(e.chars, {
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
                    }), i.ZP.to(".projectLinewannawork", {
                        width: "100%",
                        duration: 1.7,
                        ease: l.Lp.easeInOut,
                        scrollTrigger: {
                            trigger: ".projectLinewannawork",
                            start: "top top+=90%",
                            end: "top top"
                        }
                    })
                }, []), (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("div", {
                        className: "lg:mb-[130px] sm:mb-[60px] mb-[40px] md:mt-[200px] ".concat("/" === e ? "mt-[100px]" : "mt-[200px]"),
                        children: [(0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, a.jsx)("h2", {
                                className: "text-[18px] uppercase font-NeueMontreal-Regular contact",
                                children: "Contact"
                            }), (0, a.jsx)(n._p, {
                                title: "",
                                id: 2,
                                onPress: () => (0, c.xe)(x, !0, "/about"),
                                customClass: "h-[33px] leading-[30px]",
                                showIcon: !1
                            })]
                        }), (0, a.jsx)("div", {
                            className: "projectLinewannawork h-[2px] w-0 bg-[#000] mt-[22px]"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "lg:mt-[236px] mt-[30px]",
                        children: [(0, a.jsx)("p", {
                            className: "text-center wannaworksubheading",
                            children: "WANT TO WORK TOGETHER?"
                        }), (0, a.jsx)("h1", {
                            className: "text-[11vw] font-Clash-Grotesk-Bold text-center leading-[11vw] my-9 sayhi",
                            children: "SAY HI!"
                        }), (0, a.jsxs)("h1", {
                            onClick: e => {
                                window.location.href = "mailto:hello@aquadev.site", e.preventDefault()
                            },
                            ref: p,
                            className: "w-fit overflow-y-hidden overflow-x-hidden text-[7.9vw] leading-normal  mx-auto text-center relative font-Clash-Grotesk-Medium uppercase",
                            children: [(0, a.jsx)("span", {
                                className: "mailSpan text-center",
                                children: "hello@aquadev.site"
                            }), (0, a.jsx)("div", {
                                ref: t,
                                className: "-left-[180%] xl:top-[170px] lg:top-[120px] md:top-[80px] mt-3 absolute bottom-0 w-full md:h-[8px] h-1 bg-neutral"
                            }), (0, a.jsx)("div", {
                                ref: s,
                                className: "-left-[360%] xl:top-[170px] lg:top-[120px] md:top-[80px] absolute bottom-0 w-full mt-3 md:h-[8px] h-1 bg-neutral"
                            })]
                        })]
                    })]
                })
            }
        },
        5214: function(e, t, s) {
            "use strict";
            s.d(t, {
                _2: function() {
                    return i
                },
                io: function() {
                    return l
                },
                MA: function() {
                    return a
                },
                a8: function() {
                    return r
                }
            });
            var a = {
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
                i = {
                    src: "/_next/static/media/about-cover.331a0471.jpg",
                    height: 2811,
                    width: 4211,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAgIDAQAAAAAAAAAAAAABAwAEAhEGMXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAwDAQACEQMRAD8AnFVqLnHnIdSQc6+BKngEMBOQ7O9Eej7ERDVzhN//2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                l = {
                    src: "/_next/static/media/about_self.1191b713.jpg",
                    height: 1920,
                    width: 1440,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAAABgEFAAAAAAAAAAAAAAAAAQIDBBEFEiEiYZH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKODmpsnKvMTm0oSTepBERWfKrvvbwAATGf/2Q==",
                    blurWidth: 6,
                    blurHeight: 8
                }
        },
        1852: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = s(6006),
                r = s(3731),
                i = s(226),
                l = s(6167),
                o = s(2685);

            function n(e) {
                let {
                    children: t
                } = e, {
                    isMobileBool: s
                } = (0, o.Z)("768");
                return (0, a.useEffect)(() => {
                    if (s) return;
                    let e = new r.Z({
                        easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                        lerp: .031,
                        duration: 1.2,
                        syncTouch: !1,
                        smoothTouch: !1
                    });
                    e.on("scroll", l.i.update), i.ZP.ticker.add(t => {
                        e.raf(1e3 * t)
                    }), i.ZP.ticker.lagSmoothing(0)
                }, []), t
            }
        },
        8074: function(e, t, s) {
            "use strict";
            s.d(t, {
                _p: function() {
                    return a.default
                },
                Ak: function() {
                    return r.default
                },
                u0: function() {
                    return i.default
                }
            }), s(9268), s(6006), s(9725), s(2019), s(7757);
            var a = s(7702),
                r = s(1773),
                i = s(9992)
        },
        172: function(e) {
            e.exports = {
                herobody: "aboutHero_herobody__sB5Ey"
            }
        },
        469: function(e) {
            e.exports = {
                reveal_container: "aboutabout2_reveal_container__sqGUR",
                imgReveal: "aboutabout2_imgReveal__6TyIM",
                reveal_image: "aboutabout2_reveal_image__daoWH"
            }
        },
        34: function(e) {
            e.exports = {
                sliderContainer: "abouthobbies_sliderContainer__2W0Mb",
                slider: "abouthobbies_slider__mqlvm",
                wrapper: "abouthobbies_wrapper__WFNsR",
                box: "abouthobbies_box__7gaJg"
            }
        },
        912: function(e) {
            e.exports = {
                projects: "servicesAbout_projects__SzQJb",
                projectDescription: "servicesAbout_projectDescription__iMQxP",
                imageContainer: "servicesAbout_imageContainer__GmZlL",
                column: "servicesAbout_column__BB0qu",
                projectList: "servicesAbout_projectList__9qrvS",
                projectEl: "servicesAbout_projectEl__NZqfv"
            }
        },
        3020: function(e) {
            e.exports = {
                container: "styles_container__2VIn_",
                stickyMask: "styles_stickyMask__Q7S__"
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
        e.O(0, [224, 230, 845, 346, 541, 253, 698, 744], function() {
            return e(e.s = 8915)
        }), _N_E = e.O()
    }
]);