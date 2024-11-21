(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [541], {
        7757: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return g
                }
            });
            var a = t(9268),
                i = t(6006),
                n = t(226);
            t(7894);
            var s = t(3565),
                r = () => {
                    let [A, e] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let A = window.matchMedia("(max-width: 1028px)");
                        e(A.matches);
                        let t = A => {
                            e(A.matches)
                        };
                        return A.addEventListener("change", t), () => {
                            A.removeEventListener("change", t)
                        }
                    }, []), {
                        isMobile: A
                    }
                },
                l = t(6008),
                g = () => {
                    let {
                        projectScreenShow: A,
                        workType: e,
                        isLoading: t,
                        setHomePageMaskHover: g
                    } = (0, s.Z)(), {
                        isMobile: o
                    } = r(), c = (0, l.usePathname)();
                    return ((0, i.useLayoutEffect)(() => {
                        let t = document.querySelector(".custom-cursor"),
                            a = document.querySelector(".cursor-text"),
                            i = document.querySelectorAll(".cursor-proj-img"),
                            s = document.querySelectorAll(".cursor-mail-hover"),
                            r = document.querySelectorAll(".ad-logo"),
                            l = document.querySelectorAll(".proj-click"),
                            g = document.querySelectorAll(".lab-click"),
                            c = document.querySelectorAll(".modelcontainer"),
                            E = document.querySelectorAll(".shuriken"),
                            h = A => {
                                let e = A.target;
                                if (e.classList.contains("view")) {
                                    if (!a) return;
                                    n.ZP.to(t, {
                                        scale: 5
                                    }), a.style.display = "block", a.innerHTML = "View more", a.style.fontSize = "3px"
                                } else n.ZP.to(t, {
                                    scale: 5
                                })
                            };
                        A && !o && (n.ZP.to(t, {
                            scale: 1
                        }), a.style.display = "none");
                        let d = A => {
                                n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none"
                            },
                            u = A => {
                                let e = A.target;
                                e.classList.contains("mail-link") ? (n.ZP.to(t, {
                                    scale: 5
                                }), t.style.mixBlendMode = "unset", a.style.display = "block", t.style.backgroundColor = "#000", a.innerHTML = "Click to Copy", a.style.color = "#fff", a.style.fontSize = "3px") : n.ZP.to(t, {
                                    scale: 5
                                })
                            },
                            B = A => {
                                n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none", t.style.mixBlendMode = "difference", a.style.color = "unset", t.style.backgroundColor = "#E1DFDD"
                            },
                            p = A => {
                                let e = A.target;
                                e.classList.contains("ad-logo") && n.ZP.to(t, {
                                    scale: 2
                                })
                            },
                            C = A => {
                                n.ZP.to(t, {
                                    scale: 1
                                })
                            },
                            m = A => {
                                let i = A.target;
                                a && (i.classList.contains("proj-click") && "lab" === e ? (n.ZP.to(t, {
                                    scale: 4
                                }), a.innerHTML = "View Projects", a.style.display = "block", a.style.fontSize = "3px") : i.classList.contains("lab-click") && "project" === e ? (n.ZP.to(t, {
                                    scale: 4
                                }), a.innerHTML = "View Works", a.style.display = "block", a.style.fontSize = "3px") : (n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none"))
                            };
                        A && !o && (n.ZP.to(t, {
                            scale: 1
                        }), a.style.display = "none");
                        let w = A => {
                                a && (n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none")
                            },
                            b = A => {
                                let e = A.target;
                                a && (e.classList.contains("modelcontainer") ? (n.ZP.to(t, {
                                    scale: 4
                                }), a.innerHTML = "Drag around", t.style.backgroundColor = "#000", t.style.mixBlendMode = "unset", a.style.display = "block", a.style.color = "#fff", a.style.fontSize = "3px") : (n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none"))
                            },
                            U = A => {
                                a && (n.ZP.to(t, {
                                    scale: 1
                                }), a.style.display = "none", t.style.mixBlendMode = "difference", t.style.backgroundColor = "#fff", a.style.color = "#000")
                            },
                            M = A => {
                                let e = A.target;
                                e.classList.contains("shuriken") && (n.ZP.to(t, {
                                    scale: 2
                                }), t.style.mixBlendMode = "difference", t.style.backgroundColor = "#fff")
                            },
                            O = () => {
                                n.ZP.to(t, {
                                    scale: 1
                                })
                            };
                        document.addEventListener("mousemove", A => {
                            let {
                                clientX: e,
                                clientY: a
                            } = A;
                            n.ZP.to(t, {
                                x: e,
                                y: a
                            })
                        }), i.forEach(A => {
                            A.addEventListener("mouseenter", h), A.addEventListener("mouseleave", d)
                        }), s.forEach(A => {
                            A.addEventListener("mouseenter", u), A.addEventListener("mouseleave", B)
                        }), r.forEach(A => {
                            A.addEventListener("mouseenter", p), A.addEventListener("mouseleave", C)
                        }), l.forEach(A => {
                            A.addEventListener("mouseenter", m), A.addEventListener("mouseleave", w)
                        }), g.forEach(A => {
                            A.addEventListener("mouseenter", m), A.addEventListener("mouseleave", w)
                        }), c.forEach(A => {
                            A.addEventListener("mouseenter", b), A.addEventListener("mouseleave", U)
                        }), E.forEach(A => {
                            A.addEventListener("mouseenter", M), A.addEventListener("mouseleave", O)
                        })
                    }, [A, o, c, e, t]), o) ? null : (0, a.jsx)("div", {
                        id: "custom-cursor",
                        className: "custom-cursor ".concat(g ? "invisible" : "visible", " "),
                        children: (0, a.jsx)("span", {
                            className: "cursor-text text-center"
                        })
                    })
                }
        },
        2019: function(A, e, t) {
            "use strict";
            t.r(e);
            var a = t(9268);
            t(6006), t(106), e.default = A => {
                let {
                    isOpen: e,
                    handleClick: t
                } = A;
                return (0, a.jsxs)("div", {
                    className: "hamburger-button ".concat("open" == e ? "open" : "", " mix-blend-difference "),
                    onClick: () => t(),
                    children: [(0, a.jsx)("span", {
                        className: "".concat("open" === e ? "cross" : "hamactive", " hamspan")
                    }), (0, a.jsx)("span", {
                        className: "".concat("open" === e ? "cross" : "hamactive", " hamspan")
                    })]
                })
            }
        },
        7702: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return o
                }
            });
            var a = t(9268),
                i = t(6006),
                n = t(6394),
                s = t.n(n),
                r = {
                    src: "/_next/static/media/pointer2.b4a3be53.svg",
                    height: 19,
                    width: 28,
                    blurWidth: 0,
                    blurHeight: 0
                },
                l = t(226),
                g = t(5984),
                o = A => {
                    let {
                        title: e,
                        customClass: t,
                        showIcon: n,
                        onPress: o,
                        id: c
                    } = A;
                    return (0, i.useLayoutEffect)(() => {
                        var A, e;
                        let t;
                        let a = new g.Z("#link-upper-".concat(c), {
                                types: "words, chars"
                            }),
                            i = new g.Z("#link-lower-".concat(c), {
                                types: "words, chars"
                            });
                        l.ZP.set("#link-lower-".concat(c), {
                            translateY: "40%"
                        }), null === (A = document.getElementById("link-parent-".concat(c))) || void 0 === A || A.addEventListener("mouseenter", () => {
                            (t = l.ZP.timeline().delay(.1)).to(a.chars, {
                                translateY: "-120%",
                                stagger: .001,
                                duration: .2,
                                delay: .1,
                                yoyo: !0
                            }, 0), t.to(".arrow1", {
                                translateY: "-120%",
                                stagger: .001,
                                duration: .2,
                                delay: .1,
                                yoyo: !0
                            }, 0), t.to(i.chars, {
                                translateY: "-237%",
                                stagger: .001,
                                duration: .2,
                                yoyo: !0,
                                repeatRefresh: !0
                            }, ">-0.2"), t.to(".arrow2", {
                                translateY: "-237%",
                                stagger: .001,
                                duration: .2,
                                yoyo: !0,
                                repeatRefresh: !0
                            }, ">-0.2")
                        }), null === (e = document.getElementById("link-parent-".concat(c))) || void 0 === e || e.addEventListener("mouseleave", () => {
                            t.reverse()
                        })
                    }, []), (0, a.jsxs)("p", {
                        onClick: o,
                        className: "".concat(t, " uppercase relative overflow-y-hidden text-[18px]"),
                        id: "link-parent-".concat(c),
                        children: [(0, a.jsxs)("span", {
                            id: "link-upper-".concat(c),
                            className: "relative flex",
                            children: [" ", (0, a.jsx)("span", {
                                children: e
                            }), n && (0, a.jsx)(s(), {
                                src: r,
                                alt: "",
                                className: "ml-[8px] arrow1"
                            })]
                        }), (0, a.jsx)("br", {}), (0, a.jsxs)("span", {
                            id: "link-lower-".concat(c),
                            className: "absolute flex",
                            children: [" ", (0, a.jsx)("span", {
                                children: e
                            }), n && (0, a.jsx)(s(), {
                                src: r,
                                alt: "",
                                className: "ml-[8px] arrow2"
                            })]
                        })]
                    })
                }
        },
        1773: function(A, e, t) {
            "use strict";
            t.r(e);
            var a = t(9268),
                i = t(6006),
                n = t(5846),
                s = t.n(n),
                r = t(226),
                l = t(5984);
            e.default = A => {
                let {
                    id: e,
                    link: t,
                    title: n,
                    customClass: g
                } = A;
                return (0, i.useLayoutEffect)(() => {
                    var A, t;
                    let a;
                    let i = new l.Z("#link-upper-".concat(e), {
                            types: "words, chars"
                        }),
                        n = new l.Z("#link-lower-".concat(e), {
                            types: "words, chars"
                        });
                    r.ZP.set("#link-lower-".concat(e), {
                        translateY: "40%"
                    }), null === (A = document.getElementById("link-parent-".concat(e))) || void 0 === A || A.addEventListener("mouseenter", () => {
                        (a = r.ZP.timeline().delay(.1)).to(i.chars, {
                            translateY: "-120%",
                            stagger: .001,
                            duration: .2,
                            delay: .1,
                            yoyo: !0
                        }, 0), a.to(n.chars, {
                            translateY: "-140%",
                            stagger: .001,
                            duration: .2,
                            yoyo: !0,
                            repeatRefresh: !0
                        }, ">-0.2")
                    }), null === (t = document.getElementById("link-parent-".concat(e))) || void 0 === t || t.addEventListener("mouseleave", () => {
                        a.reverse()
                    })
                }, []), (0, a.jsxs)(s(), {
                    className: "text-black-100 relative overflow-y-hidden cursor-pointer ".concat(g),
                    id: "link-parent-".concat(e),
                    href: t,
                    target: "_blank",
                    children: [(0, a.jsxs)("span", {
                        id: "link-upper-".concat(e),
                        className: "relative ",
                        children: [" ", n]
                    }), (0, a.jsx)("br", {}), (0, a.jsxs)("span", {
                        id: "link-lower-".concat(e),
                        className: "absolute ",
                        children: [" ", n]
                    })]
                })
            }
        },
        9992: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return l
                }
            });
            var a = t(9268),
                i = t(6006),
                n = t(8453);
            let s = [{
                    x: -.8,
                    y: -.6,
                    rotationZ: -29
                }, {
                    x: -.2,
                    y: -.4,
                    rotationZ: -6
                }, {
                    x: -.05,
                    y: .1,
                    rotationZ: 12
                }, {
                    x: -.05,
                    y: -.1,
                    rotationZ: -9
                }, {
                    x: -.1,
                    y: .55,
                    rotationZ: 3
                }, {
                    x: 0,
                    y: -.1,
                    rotationZ: 9
                }, {
                    x: 0,
                    y: .15,
                    rotationZ: -12
                }, {
                    x: 0,
                    y: .15,
                    rotationZ: -17
                }, {
                    x: 0,
                    y: -.65,
                    rotationZ: 9
                }, {
                    x: .1,
                    y: .4,
                    rotationZ: 12
                }, {
                    x: 0,
                    y: -.15,
                    rotationZ: -9
                }, {
                    x: .2,
                    y: .15,
                    rotationZ: 12
                }, {
                    x: .8,
                    y: .6,
                    rotationZ: 20
                }, {
                    x: .2,
                    y: .4,
                    rotationZ: 6
                }, {
                    x: .05,
                    y: -.1,
                    rotationZ: -12
                }, {
                    x: .05,
                    y: .1,
                    rotationZ: 9
                }, {
                    x: .1,
                    y: -.55,
                    rotationZ: -3
                }, {
                    x: 0,
                    y: .1,
                    rotationZ: -9
                }, {
                    x: 0,
                    y: -.15,
                    rotationZ: 12
                }, {
                    x: 0,
                    y: -.15,
                    rotationZ: 17
                }, {
                    x: 0,
                    y: .65,
                    rotationZ: -9
                }, {
                    x: -.1,
                    y: -.4,
                    rotationZ: -12
                }, {
                    x: 0,
                    y: .15,
                    rotationZ: 9
                }, {
                    x: -.2,
                    y: -.15,
                    rotationZ: -12
                }, {
                    x: -.8,
                    y: -.6,
                    rotationZ: -20
                }, {
                    x: -.2,
                    y: -.4,
                    rotationZ: -6
                }, {
                    x: -.05,
                    y: .1,
                    rotationZ: 12
                }, {
                    x: -.05,
                    y: -.1,
                    rotationZ: -9
                }, {
                    x: -.1,
                    y: .55,
                    rotationZ: 3
                }, {
                    x: 0,
                    y: -.1,
                    rotationZ: 9
                }, {
                    x: 0,
                    y: .15,
                    rotationZ: -12
                }, {
                    x: 0,
                    y: .15,
                    rotationZ: -17
                }],
                r = {
                    open: A => ({
                        x: s[A].x + "em",
                        y: s[A].y + "em",
                        rotateZ: s[A].rotationZ,
                        transition: {
                            duration: .75,
                            ease: [.33, 1, .68, 1]
                        },
                        zIndex: 791,
                        color: "#fff"
                    }),
                    closed: {
                        x: 0,
                        y: 0,
                        rotateZ: 0,
                        transition: {
                            duration: .75,
                            ease: [.33, 1, .68, 1]
                        },
                        zIndex: 0
                    }
                };
            var l = A => {
                let {
                    children: e,
                    characterStyle: t,
                    setBackground: s
                } = A, [l, g] = (0, i.useState)(!1);
                return (0, a.jsx)("div", {
                    onMouseEnter: () => {
                        g(!0), s(!0)
                    },
                    onMouseLeave: () => {
                        g(!1), s(!1)
                    },
                    className: "relative inline-flex",
                    children: (A => {
                        let e = [],
                            i = A.props.children;
                        return null == i || i.split("").forEach((A, i) => {
                            e.push((0, a.jsx)(n.E.span, {
                                custom: i,
                                variants: r,
                                animate: l ? "open" : "closed",
                                className: t,
                                children: A
                            }, A + i))
                        }), e
                    })(e)
                })
            }
        },
        9725: function(A, e, t) {
            "use strict";
            t.r(e);
            var a = t(9268);
            t(6006);
            var i = t(226),
                n = t(5846),
                s = t.n(n);
            e.default = A => {
                let {
                    link: e,
                    index: t,
                    title: n
                } = A, r = i.p8.timeline();
                return (0, a.jsxs)(s(), {
                    href: "/".concat(e),
                    children: [(0, a.jsxs)("span", {
                        className: "font-NeueMontreal-Regular big:text-[22px] text-[20px] text-neutral w-fit",
                        onMouseOver: () => {
                            r.to(".line".concat(t), {
                                width: "100%",
                                stagger: .2,
                                duration: .5,
                                ease: "expo.out"
                            })
                        },
                        onMouseOut: () => {
                            r.from(".line".concat(t), {
                                width: "100%"
                            }).to(".line".concat(t), {
                                width: "0%",
                                duration: .5,
                                delay: 0,
                                ease: "expo.out"
                            })
                        },
                        children: [n, ","]
                    }), (0, a.jsx)("div", {
                        className: "bg-[#000] text-[#000] w-0 h-[1px] mt-[0.3px] line".concat(t)
                    })]
                })
            }
        },
        40: function(A, e, t) {
            "use strict";
            t.d(e, {
                im: function() {
                    return r
                },
                sy: function() {
                    return s
                },
                HD: function() {
                    return i
                },
                Fe: function() {
                    return n
                },
                El: function() {
                    return g
                },
                LD: function() {
                    return l
                },
                Lj: function() {
                    return o
                }
            });
            var a = {
                src: "/_next/static/media/applemusic3.8923bc05.png",
                height: 1866,
                width: 3360,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUsKi4hHiIzMjIlIyQ5J1Q5OTlOTU4yLTk3LjpjLNysAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nB3BiQ0AMAwCMQ7os//EkWKrz77HVr+1qiQBVQTIAAZ+AE2+ij73AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 4
            };
            let i = "Talented frontend web and mobile developer crafting elegant, \n modern designs. Blending creativity with tech - to deliver captivating user experiences.",
                n = "Web experiences built, guitar played, the universe researched — I constant weave my passions into life's tapestry.",
                s = "A journey in the realm of design science",
                r = [{
                    type: "Gaming",
                    subHeading: "Console / PC",
                    description: "My primary gaming focus revolves around Fighting games, with Mortal Kombat 11, Batman: Arkham Knight, Marvel's Spider-Man, and several other titles being my go-to choices. Additionally, I frequently immerse myself in the world of FPS games."
                }, {
                    type: "Music",
                    subHeading: "Music Sage / Guitarist",
                    description: "I have a deep passion for music and find great joy in exploring diverse music genres. My music preferences span a wide spectrum, including Synthwave, SpaceWave, R&B-Soul, Pop, EDM, hiphop/rap, and Afro beats among others. Additionally, I am skilled in playing the guitar. You'll frequently discover me immersed in the world of music on platforms like Spotify and Apple Music."
                }, {
                    type: "Science",
                    subHeading: "Unraveling theories into reality",
                    description: "From a young age, my fascination with the intricacies of reality and our existence within the vast, infinite space-time continuum known as the universe has fueled a deep passion for science and logic. During my leisure hours, I am a dedicated researcher, constantly seeking to unravel the mysteries of why things happen and eagerly embracing new knowledge. My ultimate aspiration is to become a theoretical physicist, driven by the desire to further illuminate the profound connections between life and humanity."
                }],
                l = [{
                    id: 1,
                    name: "Garnerly",
                    shortDescription: "The premier platform for unbiased blockchain insights and community.",
                    description: "A hub where millions of blockchain enthusiasts unite to access eligible information and unbiased opinions on all things blockchain.",
                    role: "CTO - Blockchain Engineer",
                    year: "2022",
                    img: [{
                        src: "/_next/static/media/garnerly1.d7af862c.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEUWFCEaFycqJzo6NkotKjljrpgCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nBXIsQ0AAAzCsAT4/+aqm2XcVIHGNWAlD36FAwPMACsuJ6S0AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/garnerly2.466b15cb.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUVEx8qKDMODhZgX2dLSVUiGTpCP0ppY3YcFyhEopDfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nB3GtxEAAAgDsTd5/4k5UCVAkgCm2/1CRdTHMg0WBIEAQxROYPsAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/garnerly3.2d564c3c.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUVEh8lIDUqJzUfHCs4M0kLCRdLSVV2dX/8/f1dXGqKiZO5ArtUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nAXBgQEAIAjDsG4DQf8/2IQ4fXYaV+XuaySr5gBYAT4J2wBxanK2IgAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/garnerly4.3155adf7.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEX8+/zg3+Lv7vH08vdcetT+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIElEQVR4nCXJsQ0AIADDMLf9/2cEZLIUTb2S0V5gY384AhkAGjPjCCMAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/garnerly5.2908019c.png",
                        height: 3604,
                        width: 5164,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEUfHiwmJTMvLD35NCPjAAAACXBIWXMAACxLAAAsSwGlPZapAAAAI0lEQVR4nDXIwQkAMAyAQHX/oUsT8hDk0GSiJFBl5qQPOysPBTsAMGQuf7AAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 6
                    }, {
                        src: "/_next/static/media/garnerly7.e18b4b82.png",
                        height: 3604,
                        width: 5156,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEUgHy4pKDczL0NcgYmIAAAACXBIWXMAACxLAAAsSwGlPZapAAAAI0lEQVR4nCWKgQkAAAyCtP+PHrUgUBClk6QPEOsP2mCw7OsDBAMAIW6AXRcAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 6
                    }, {
                        src: "/_next/static/media/garnerly6.6c4c4d25.png",
                        height: 3604,
                        width: 5452,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUeHSwpJjk8MF0MLjkOAAAACXBIWXMAACxLAAAsSwGlPZapAAAAGElEQVR4nGNgYmQAAUYGCA1mwnlQMZgUAAFVAAu7CpI6AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }],
                    coverImg: {
                        src: "/_next/static/media/blockchain2.437dc116.jpg",
                        height: 2681,
                        width: 1631,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADESIyYf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCWvbUQpWxMEchRr5EREP/Z",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://garnerly-main.vercel.app/"
                }, {
                    id: 2,
                    name: "Sebastian",
                    shortDescription: "Clone of the creative deisgner Sebastian website.",
                    description: "A meticulously crafted replica of the Sebastian website, mirroring its complete functionality while preserving its flawless user interface design with custom animations.",
                    role: "Creative Developer",
                    year: "2023",
                    img: [{
                        src: "/_next/static/media/sebastian1.2c7e6ad1.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEVNTU0oJyef7O1pnp5olJwtLCyEwsNahYU2NjZZhYR9gZA5B8nbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nCXBtwEAIAwDMNdQ/j+YAQn4Nki2JXFsJ14Y6UaaBwVHAGPmwINFAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/sebastian2.872276cd.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEUREREwLy9KSkodHh5VVVU8OzpqZGF7gvU7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nGNgYWFiY2NlZmBgYmJlYmRABswMzIwgAAAFPAA24XqnzwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/sebastian3.bb21aff5.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUVFRUeHh4tLS1HR0d3yM48AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nC3HwQkAAAgEIK/23zmiXiLozkLV+SURAwFnABBen15JAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/sebastian4.d9b25e10.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEUPExRja3uLvbw9S0cXMjUGLDJykpkeHyIoWGggPUE5VlhgJ0FDPl5CR2yEl50pNDGeeIBlO18jMDOJU2aUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKUlEQVR4nAXBhwEAIAgDsIJAwe3/z5oAAEgSVu4iK9DKzpih6Jl539YPC+oA2j8FJXIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/sebastian5.fad868d3.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEUTExMpJypISEhUUlUmJCIXGSBtZlcyNzpHWW4eJRNESFopOhJmTmNBSCl3aWr0V8IlAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nBXGxxEAMAwCMMAtff9xc9ZLkMkEAE6Snaq7fUbAXubxNT4G1wCRw0ghHgAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/sebastian6.8057486b.png",
                        height: 1864,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUUFBQcHBwsLCzoWpU8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGElEQVR4nGNgQABGJiZGKA1jMTIyMjAAAAFEABV06CJeAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }],
                    coverImg: {
                        src: "/_next/static/media/cover2.7b19cdc9.png",
                        height: 4796,
                        width: 3200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAIVBMVEVhdnpXbXIuTVRziIxrf4JUaGxFWFxEXmQ3Ull/lJkrQUb1r7HDAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVR4nCXGwQ0AIAgEwb0DBO2/YGOc12Afm7ZnqF6rUUlCUvFkEEns/wsOEgB/qtRULwAAAABJRU5ErkJggg==",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://github.com/damoski2/Creative-Landing-Page"
                }, {
                    id: 3,
                    name: "Shopaxa",
                    shortDescription: "A web application and extension-based product facilitating global shopping for Africans.",
                    description: "Shopaxa is a product that allows Africans shop globally. I played a pivotal role in designing the product and streamlined information architecture that esonates with users, ultimately driving conversion and revenue growth.",
                    year: "2023",
                    role: "Lead Frontend Developer",
                    img: [{
                        src: "/_next/static/media/shopaxa1.45e832a3.png",
                        height: 3604,
                        width: 5548,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEXq7e/v8PBUXWPd4uSYm5eusq6/xsVNVVpcZGeUlYxJTkVudXPT2tjK0dHo6eq9w8CpWkUOAAAACXBIWXMAACxLAAAsSwGlPZapAAAALUlEQVR4nBXExxEAIAwDMNuk0ffflkMP4YAkAbSG7v8be8wVATPPcjOkqiTlAxBeAMu2wSgGAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa2.71c610bf.png",
                        height: 3604,
                        width: 5552,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEX09PT4+Pj+///v7+/q6enj4+PU1NPTo5a3bFiBf4DhuK7ExMKcmpesNRp4dXDmoOuQAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVR4nBXBiREAIAgEseVAwbf/ch0TIEbwmXdkYJhmdscbqrMbEsq66wEJ4ACbwgCVBwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa3.3e825814.png",
                        height: 3604,
                        width: 5552,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEW2trcJCgh+f35LKBR9e3saDgiVkZA4PT1ZQj1vW0s5GAuWQhhiKRCpZ0w4Jh7Mh1pgJpYdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nDXBtwEAIAwDMDs91P+/ZUJC1u6+lSCX6nSC9KODhIhFmAm+BxVtALTtGReTAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa4.e11a59c4.png",
                        height: 3604,
                        width: 5548,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEX9/f3q6ere3t/z9PbLzc7X2tvDw8S8u7ugoKC1tLLh4eMzsBOdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nBXJsREAIAwDsbfjEGD/gTnUCqmkAtJOWAfJ7cpw5R+wegDvBwmHAHIhPla7AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa8.afa6ad42.png",
                        height: 3604,
                        width: 5544,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEX7+vmSrsCqp6WRjo3h1Mzr7O7l2dL29fX////XzMe5q6X56+PDuLHAfYKnvsnGyMmZZ2NnYGSlxNTVcXSF3vVwAAAACXBIWXMAACxLAAAsSwGlPZapAAAAL0lEQVR4nAXBAQLAEAwEwUW4RIuW///VDCXPcXZKhK3/s7fTWpT8WABIAtxVq9wvHIEBHvnU9vMAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa9.9733bcaa.png",
                        height: 3628,
                        width: 5580,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX4+Pj+/v7r6+tEkipUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAIElEQVR4nGNgZGBkYAARjIwMDAyMjFAGmGQCS0GkQWoAAhIAFoZgPD0AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/shopaxa10.053c095e.png",
                        height: 3636,
                        width: 5588,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEX////29vfLy8y2trbn5+fZ2dnV1dZPxclyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAJElEQVR4nB3IwQ0AAAjCwCLq/iMbefVSAAkB9E5/KbsC5QfPAwQLACfrW4PGAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }],
                    coverImg: {
                        src: "/_next/static/media/shopaxa.915d1e73.jpg",
                        height: 5472,
                        width: 3648,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAwAEAhESEyEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCmdfXecWuFasBjoDF3by9JJ2ANfYiIS//Z",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://shop-frontend-site.vercel.app/"
                }, {
                    id: 4,
                    name: "AppleMusic",
                    shortDescription: "A precise Apple Music replica with full functionality and seamless UI replication.",
                    description: "Created a meticulously crafted replica of Apple Music, mirroring its complete functionality while preserving its flawless user interface design.",
                    role: "Software Engineer",
                    year: "2022",
                    img: [{
                        src: "/_next/static/media/applemusic1.2ef11282.png",
                        height: 1866,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEUrLCsyMjI2Ljw4KFVCMjNPL0bhdZnrAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAG0lEQVR4nGNgZmVlYWRkZGRgZmKCMRggAMYAAASpAC9iv5i8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/applemusic2.6c2857fe.png",
                        height: 1866,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEU1JFA0P0tvMStUTWeDTl1OO2h0QFQ/SmhHQk1WXmNNUU1fT048P1RnVTpWNillUzOEZCxZQjc8NTY2MjEQLVz5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKUlEQVR4nAXBhQEAIAwDsG5Mcfn/VxLAo+ceDpRKuU4A0qa5MKDGSvd9ETcA8MSKsCMAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, a, {
                        src: "/_next/static/media/applemusic4.a392ad4a.png",
                        height: 1866,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEU+PT47Njc3KFJDREM7M0gyMTIwMDD6bIdfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nBXGyREAMAwDodWV/kv2hBfY1baHWyQJE0jAhf8DBc8AQYDZkL4AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/applemusic5.e5957773.png",
                        height: 1866,
                        width: 3360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEVLNjYdKTE3JlRCPkEmKzVOTU0RLDpsUUt/eXKFTVYvJFE+Q0U6NTg0NTV2YF6Qc2c+nohbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVR4nAXBhQEAMAjAsOLM//92CWphZ4Wh0bdeg4JsXJij0j3lAwzBAKwwwIVGAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, a],
                    coverImg: {
                        src: "/_next/static/media/applemusic.a8cddb68.jpg",
                        height: 2695,
                        width: 1924,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDEQQFEjJBQv/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhEDEQA/ALMvVyJ5GuyTJASNkDWiJkNDy4cru66RESsgGHqld//Z",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    livelink: "https://apple-music-cloned.vercel.app/"
                }, {
                    id: 5,
                    name: "Volve",
                    shortDescription: "An application to invest in early-stage companies",
                    description: "Volve is an early-stage Venture Capital Fund built by excited entrepreneurs to back the next generation of tech and impact founders.",
                    role: "Creative Developer",
                    year: "2024",
                    img: [{
                        src: "/_next/static/media/volve1.da2b7e42.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX/TQH/YRyPA9vaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAE0lEQVR4nGNgQAKMjMg8BkYoAAAAdQALxrjsnwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve2.8b63228e.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEX07Ob38ez15NryB8qAAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAF0lEQVR4nGNgYAQDJgYmJgYIgDMYoAwAAc8AEwj3qUYAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve3.880a4170.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAASFBMVEX/iVTye0e7iHOOgHripIzJWi//dDeZYlH/hEz2aC2WgYF+dXacVkCOjpLZShnexb16hJLeh2b+pX3Bl4Olk47+qYLIv7/X5/CeA9I3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nAXBBwIAEAwEsENpa2///6kEApwJCaicmQcpfEnd3Wfgt42Lmn4UwQE9grjx+gAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve4.7217af80.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEX68ev36OH17Ob42818yH7MAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nDXDwQ0AIAADoXLuv7PxIQmjxVnqHQX7LgM7ACSMYUpeAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve5.49603669.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEX51MPeyrr6x7D62cj5zLf6wqi4cEXm0sLa08m1jGC6e0S8fEu/cN8BAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVR4nGNgZWBmYGJhYWVgZWFmYALxGBk52EGIgYuNk5uNk5sbAAfiAJnhOGfWAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve6.582dfbfe.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEXS2OfY3+23u8/Fx9Xt7O/g3uLKz9+4tcSSk6yjl6KYnLe8pKbJzdybhKAbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nAXBhwEAIAzDMKe7wP/3ItER4ZmXoTDT4bmXAEaojf0J5gB+6mSFIQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/volve7.8468cfa6.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEUdFzxoYXolIEUNBzBwa4MUDjZbTGPdI1SsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nGNgYWEEATYGJiZmVlZmZmYGBgYGJiYQCQVsAAT6ADjwj1hSAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }],
                    coverImg: {
                        src: "/_next/static/media/volveCover.cfa1af52.jpg",
                        height: 3948,
                        width: 3159,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEEEQMGElH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQEBAQAAAAAAAAAAAAAAAAECABL/2gAMAwEAAhEDEQA/AIZGrxsxdhOaGI01hiEunf17REUYt5M7gad//9k=",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    livelink: "https://volve-twelvetwentystudio-demo.vercel.app/"
                }],
                g = [{
                    id: 1,
                    name: "Squareme",
                    shortDescription: "The Ultimate P2P Payment app.",
                    description: "Squareme offers the financially savvy a realm of financial freedom: instant money transfers, bill services, gift cards, savings, and others.",
                    role: "Mobile & Web Engineer",
                    year: "2023",
                    img: [{
                        src: "/_next/static/media/1.7f0117ba.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEUACUqcn7Gwsr/Fx9H38viDiJw1PGQDDEsAAUFDSm0WHlJ1epTStOSTl5xsc4feyu6kmL3////9fRDUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAL0lEQVR4nBXIyREAIAgEsAXBBW/7b9Yxz4BRzdIVjCziswJgy7EXCEa38weU6/oAFqsBAEtn4H8AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/2.d55317f4.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEVXxfb///9KnMJEVF2cvs5Tve309fVUyv9SRkNdmLNTocWPnbRLhqFRVFdqpsOaq7NqZWiIrsHJ4OqzvMupt8dlor+e0+ihdb0aAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMUlEQVR4nBXGRxLAIAwAsaXa9ARI/v9UBp0EkrWlskCqOj86EGyK8QWQ38zvJmzjnwMa5QEtHZiB8gAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/3.c4012cb6.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEW+X+u4XeK3hM+Hh6Wpf7/AY+u3cdf5/va9V+zSw9zAmtPf0uL38/iEcafo4erIuM6dabZXYoqvccygYCwvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALklEQVR4nBXIyREAIAgAsVVQwNv+m3XMM+DVhvYFni2mKJBqlqsUijeLw6+wth8VUQD0rHYWxQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/4.90f39d63.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEXYVYe2X4Lp9fXV6O3Jnaz6+fq1co/aWInbToTBuse5cIzVv8vLUYHWlqyvv8vBrLrGaY/dztStlp7p4OS4iJyDiz1/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVR4nAXBBwIAEAwAsaNo7fn/t0rAlo9pX7A0ZjgFwBWRh6LWfXWAthxD/hqXARmZ+u1pAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/5.7a0d7a1f.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWvctuDapoABBhsUIarb9eugs7x9u0uI0exdN2ubd1bPnqwj8epcNG6dukODieQcKrWy91CL1z8+f2hfLYMCiTEzeHskncZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAL0lEQVR4nAXBCQLAEBAEwWbDIK4E//+qKsgh/k6C/Mb5yYAnjL4dCVrxWkCq8nYuGVgBJkyi15kAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/6.393b8077.png",
                        height: 1080,
                        width: 1920,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEX36sy/uKv39fPY08Th2MLs7ezMyLrk4dz7/f7x48bc2tWbnKrExc2wr6m/0NLr38QbR3bWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAK0lEQVR4nB3GtxEAIAwAsXcAm7z/thyoEuCqMiZgpdclQPNa9AUs4+dE2r4NSwCkD7M13AAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }],
                    coverImg: {
                        src: "/_next/static/media/fintech.87daaf86.jpg",
                        height: 4704,
                        width: 3136,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADBBIFESHx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAMAwEAAhEDEQA/AJ2Vc3NioLkLQcesK9bbgbEDsjb34IiINJUwN//Z",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://squareme.app/"
                }, {
                    id: 2,
                    name: "Pkchange",
                    shortDescription: "Streamling global packaging procurement with verified supplier connections.",
                    description: "Packachange serves as a comprehensive global marketplace, featuring a curated selection of reputable suppliers offering high-quality packaging solutions from diverse geographical regions.",
                    role: "FullStack Engineer",
                    year: "2022",
                    img: [{
                        src: "/_next/static/media/packachange1.410e2153.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEX+/v+k2vt8hWWFj35uilHI2uC62u3P2sT19vy14v5wioXS19bF6/7V8v/j9v/T1OLM1r6Um3+53/rDztKy0OhzjpycrrB1OuwPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nBXBCRIAEAwEsKVo1X3+/6lGgh1mjLlUHL3GBO9BltQ5O7BS4s7cIIJPHiKTAU+8c2kDAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/packachange2.f205afdd.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEX7+/z////w8/X4+Pvc3O70+v9lo/d/sfXR0+Xj9ejS5P2uz/nG3PyawfiuTUxcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKUlEQVR4nAXBiQEAIAwCsQPU+u6/rgkRAYG623QXCjQksNep2sThjXE/CLcAjInQ+hsAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/packachange3.56fe434f.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEX6+vz+/v/y8/no6vPw6OHAys3T/QaYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nB3FwREAMAyDMLDT/VfuJXoAiAvIldAdyGumRXM+A2AAM3B2Ks8AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/packachange4.e5d32390.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEX9/f/z8/ft8ff19/zp6/XX2ffi4enFyfT96d/uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nAXBgQEAMAiDMGjV/f/xEkbwrhhIUiy0GQqQkX0L6gcHNABQpWqJoQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/packachange5.56ef3f23.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX9/v709Pj5+fvq6/i2uuXcttj8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nCXGsQ0AMAjAsCTw/81VxWIZCSzKUBCgvuruXGZ6A8AAMJ1zcdIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/packachange6.b57a7fad.png",
                        height: 1752,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX+/v729/np6u0dX/fcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNgZGBkAANGBiYIi5GBiQkqyAiThagBAAHEABFbba1rAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }],
                    coverImg: {
                        src: "/_next/static/media/packaging.2d038964.jpg",
                        height: 4282,
                        width: 2854,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBQADAAAAAAAAAAAAAAABAAIDBBEFEjH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAQEBAQAAAAAAAAAAAAAAAAERADH/2gAMAwEAAhEDEQA/AIznnU4Lu0q88gkJc8uHYA74NREVKncWMm//2Q==",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://packachange.com/"
                }, {
                    id: 3,
                    name: "Tryklas",
                    shortDescription: "Optimal solution for launching your online educational institution.",
                    description: "Tryklas empowers global communities, online schools, and brands with Klas, the ultimate solution for launching your online academy and delivering live learning experiences to students.",
                    role: "Frontend Developer",
                    year: "2022",
                    img: [{
                        src: "/_next/static/media/tryklas1.0802e997.png",
                        height: 1440,
                        width: 2582,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEVvcu8uMJddT21FPO08QedRQPZ1fPJtR/hVTu9mQPdgTPNwXvVbRPZgZeV0a6dfWaJJNr5eWUl2U/6Oav94Z8GemdWh5XTZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nAXBhwEAIAgDsIKA4p7/v2oCAWDWBCElpcGEXLT2xRMxup/79gcN8QESSbLzgQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/tryklas2.b3f27c1a.png",
                        height: 1542,
                        width: 2582,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEX///7x8v1ybZBJQdZsRPn39v9xSvxlUPHq6vuys7O3vfTW2/mio7EoLqiFhIc4NuocI6YqL5ohJ6NzX+OHfpkCRdkcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nBXGtxEAIAwEsMcGB3Laf1YOVcJsa1d3B18aAQC4k9qPHlULBkSJkkpODx01AR8g2XLoAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/tryklas3.45b775ea.png",
                        height: 1542,
                        width: 2582,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEX8/P9nYJlTQjmZmaCTlq5ZTEZvaJtOSFIfI2AZIGJ8dnJ3bqiJkY3v7/ZVSZFnZW6eq608NHD08O+zvrvRzOXSy+Scj8zMyNmilc9tgQgTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nAXBBwIAERAAscEqq7vq/y+VoCnpCiJE77N7gGhtdu/VGLXO+we6KcGU/R0dwQF7EU2IFQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/tryklas4.e35b3a5d.png",
                        height: 1542,
                        width: 2582,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEUMFFgLGBAHCQYwJ00hFlD5+fwRFCg0MDgnHFMQDxohKWpxYmo8GRUjEhI/PF1+epfk5u4PLA99eHdoWZ2go6Skl9BQT2eYi8mRi6IyG54mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVR4nAXBAQKAIAgEsANBIFNLrfz/S9sAHJBkL7IVizYW8lkpul4Ippu3KtxdZD7fDx1pAXggjom8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/tryklas5.31e2c078.png",
                        height: 1430,
                        width: 2582,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEUCAgMGCSwHBhQlIi52cYAODjtJSmGnpLvIyMZhYGeOi5Y1LiyAg5UWFyYrvSa3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVR4nBXGyREAMAgDsTUGcvZfbyZ6iZJUPo0I3HkJgJyD8F4/DwfxAH5J+dt8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/tryklas6.bc4aa09c.png",
                        height: 1620,
                        width: 2730,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEXOzdWwr9O1sNZVQdDX19W9utXd3dzExNLt7e8yPsd7W9Y+PcomK8eHjNCEisqZAMvYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nB3Bhw0AIAwEsfsUQt9/XCRszEzSuUx397UHlqmSkoqgQdA63wMQVACdpc8ChAAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/tryklas7.a73249e3.png",
                        height: 1620,
                        width: 2730,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEX///7t7e6MhfTy8vaJgvHp5/zW1djp6OPi4dnW2PTEwPOPifSk8YFkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVR4nC3HQQ4AIAjEwLKAoP7/v4bEnqZEhK4kqruY3MzZJ1k2lx/AAwzuAHlBKRdsAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }, {
                        src: "/_next/static/media/tryklas8.d3d3e94b.png",
                        height: 1620,
                        width: 2730,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAATlBMVEUnGk9vX3n29P93aaUeJW2Ob2tOOjZYSkwbIGGLflz//vtYUGt3X2J6cViajXGFeHVoYj3Lvak7M3dyQkx9YXannbnGc1VVSIjFvd3Jf1y5O9xDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nGNg4eBgEWJkFWZgFeAU5BcRk2Tg4eXjZBPlYmLgZmdjZ5TgYmIAA3FmZgAlwwF9kCcz6QAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }],
                    coverImg: {
                        src: "/_next/static/media/klas-banner.81052c05.jpg",
                        height: 4368,
                        width: 2912,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAgEEAwAAAAAAAAAAAAACAwABBAUSISIxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAQADAQEAAAAAAAAAAAAAAAIAAQMREv/aAAwDAQACEQMRAD8AuKPVVhvxXIJBdFjkKuyqh49XXn7ERI3syvNRzmVXbn//2Q==",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://www.tryklas.com/"
                }, {
                    id: 4,
                    name: "DENTAL-O",
                    shortDescription: "A dental clinic with a touch of luxury.",
                    description: "Dental Opulence is a new dental clinic that offers a combination of general dentistry and cosmetic dentistry services",
                    role: "Frontend Developer",
                    year: "2024",
                    img: [{
                        src: "/_next/static/media/de1.89e8128e.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEUUExYuLC4cGhs/Pj8jIyUJBwl8doBTRUFNREaooKYGOYGeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nB3GwQ0AIAzEsORoC+y/MBJ+mQoBCpfozs/MPWg3wAME3QBL5BOGzgAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de2.9080f4e6.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEUcGhsmJCYODA4zMTI/OTZPDgRjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIElEQVR4nB3IsQ0AAAjDsIT2/5sReDTyxKAypKa5L3MWAnkALRniEaIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de3.cf75b3cb.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEXl6eni2NehgoDDpaOoiofe4ePw5OO3m5jWnJrdo6H09fWceXaxfn7Uy8rMlJFTtR6jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJklEQVR4nAXBhwEAIAjAsLLB9f+5JhAAscgys3Ihe3reEUTdVff9CYIAoa6WTdIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de4.db4a6a68.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEUWFBYNCw1HQUEiICI1LzBiWVkfh+sJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nCXBtwEAAAjDMKfw/8sMkWjcs02QQJAwGh4EOAAsM169OwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de5.4a2b5d8d.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUODA4XFRcoJij3GSUxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nDXIwQkAAAyDQHX/oQuB+jokARSt4uH+OgJhAB3gDHwlAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de6.491c59ee.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUmJCYeHR5IRkZTUVEvLS04NzYPDQ8HBQdjYFxqaGmMiYY9YQi6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nAXBBwEAMAzDMCf94w94EkiAoEdlpvHFRWYSb8O1/gZSAHVF2VNjAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de7.96b852b6.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUnJiceHR0uLi/BKopsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nC3HwQkAMBAEIXf6L/ogxJ8yxFK1F8y+AwIeAB29htAcAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }, {
                        src: "/_next/static/media/de8.4585d0ef.png",
                        height: 1650,
                        width: 3024,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUZFxkSEBIhHyExMDFrHepfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nGNgYmAAISYGBgZmZkZGRkYQFwpAXEZGRgACOQAcJDZuuAAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }],
                    coverImg: {
                        src: "/_next/static/media/dentalOpulenceCover.7277ffeb.jpg",
                        height: 6e3,
                        width: 4e3,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAEFAQAAAAAAAAAAAAABAAIDBBEFBhIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECAxH/2gAMAwEAAhEDEQA/AIaTRtvxVonCxaL5C5x5AZDfmQD0fUREKta6OjGHKZ//2Q==",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    livelink: "https://dental-opulence.vercel.app/"
                }],
                o = {
                    project: {
                        title: "Projects",
                        details: "Building a refined set of experiments while navigating through ideas and technologies involves active learning, rigorous testing, and concept-driven construction.",
                        projectList: l
                    },
                    labs: {
                        title: "Works",
                        details: "Constructing a curated set of live products while navigating ideas and technologies involves iterative solutions delivery through the testing and application of concepts and techniques.",
                        projectList: l
                    }
                }
        },
        8846: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                GlobalContext: function() {
                    return B
                },
                GlobalProvider: function() {
                    return p
                }
            });
            var a = t(9268),
                i = t(6006),
                n = t(9047),
                s = (A, e) => {
                    let {
                        payload: t
                    } = e;
                    switch (e.type) {
                        case n.r.SET_CONTEXT_CURSOR:
                            return { ...A,
                                context_cursor: t
                            };
                        case n.r.PROJECT_SCREEN_ACTIVE:
                            return { ...A,
                                projectScreenShow: !0
                            };
                        case n.r.PROJECT_SCREEN_INACTIVE:
                            return { ...A,
                                projectScreenShow: !1
                            };
                        case n.r.SET_PROJECT:
                            return { ...A,
                                project: t
                            };
                        case n.r.SET_IS_LOADING:
                            return { ...A,
                                isLoading: t
                            };
                        case n.r.SET_MENU_CLOSE:
                            return { ...A,
                                menuIsOpen: "closed"
                            };
                        case n.r.SET_MENU_LINK_CLOSE:
                            return { ...A,
                                menuIsOpen: "linkClicked_close"
                            };
                        case n.r.SET_MENU_OPEN:
                            return { ...A,
                                menuIsOpen: "open"
                            };
                        case n.r.SET_MENU_UNSET:
                            return { ...A,
                                menuIsOpen: "unset"
                            };
                        case n.r.SET_SECTION_TO_SCROLL:
                            return { ...A,
                                sectionToScroll: t
                            };
                        case n.r.SET_WORK_TYPE:
                            return { ...A,
                                workType: t
                            };
                        case n.r.SET_ABOUT_HOBBY:
                            return { ...A,
                                hobbySelected: t
                            };
                        case n.r.SET_LINK_CLICKED:
                            return { ...A,
                                linkClicked: t
                            };
                        case n.r.SET_PATH_TO_NAVIGATE:
                            return { ...A,
                                pathToNavigate: t
                            };
                        case n.r.SET_HOME_MASK_HOVER:
                            return { ...A,
                                setHomePageMaskHover: t
                            };
                        default:
                            return A
                    }
                },
                r = t(40),
                l = t(6167),
                g = t(226),
                o = t(9770),
                c = t(6008),
                E = t(4136),
                h = t(3565),
                d = () => {
                    let {
                        dispatch: A,
                        pathToNavigate: e
                    } = (0, h.Z)(), t = (0, c.useRouter)();
                    return (0, i.useLayoutEffect)(() => {
                        let a = g.ZP.timeline();
                        g.ZP.from(".blinderleft", {
                            duration: 1,
                            transform: "translateX(-100%)",
                            ease: E.zO.easeInOut,
                            stagger: .01
                        }), g.ZP.from(".blinderright", {
                            duration: 1,
                            transform: "translateX(100%)",
                            ease: E.zO.easeInOut,
                            stagger: .01
                        }), g.ZP.to(".blinderleft", {
                            duration: 1,
                            transform: "translateX(-100%)",
                            ease: E.zO.easeInOut,
                            stagger: .01,
                            delay: 1.2
                        }), g.ZP.to(".blinderright", {
                            duration: 1,
                            transform: "translateX(100%)",
                            ease: E.zO.easeInOut,
                            stagger: .01,
                            delay: 1.2
                        }), a.to(".loaderrevamp", {
                            display: "none",
                            delay: 2.2
                        }).call(() => {
                            (0, o.xe)(A, !1, "")
                        });
                        let i = setTimeout(() => {
                            t.push(e, {
                                scroll: !0
                            })
                        }, 600);
                        return () => {
                            clearTimeout(i)
                        }
                    }, []), (0, a.jsxs)("div", {
                        className: "loaderrevamp fixed w-full h-full flex flex-col z-[1000]",
                        children: [(0, a.jsx)("div", {
                            className: "h-[50vh] bg-black w-full blinderleft"
                        }), (0, a.jsx)("div", {
                            className: "h-[50vh] bg-black w-full blinderright"
                        })]
                    })
                };
            g.ZP.registerPlugin(l.i);
            let u = {
                    projectScreenShow: !1,
                    project: r.LD[0],
                    menuIsOpen: "unset",
                    sectionToScroll: null,
                    workType: "project",
                    isLoading: "true",
                    hobbySelected: "music",
                    linkClicked: !1,
                    pathToNavigate: "",
                    setHomePageMaskHover: !1
                },
                B = (0, i.createContext)(u);
            B.displayName = "Aqua_dev portfolio";
            let p = A => {
                let {
                    children: e
                } = A, t = (0, c.usePathname)(), [n, r] = (0, i.useReducer)(s, { ...u
                });
                (0, i.useEffect)(() => {
                    (0, o.QL)(r, "music")
                }, [t]);
                let l = { ...n,
                    dispatch: r
                };
                return (0, a.jsxs)(B.Provider, {
                    value: l,
                    children: [n.linkClicked && (0, a.jsx)(d, {}), e]
                })
            }
        },
        9770: function(A, e, t) {
            "use strict";
            t.d(e, {
                PA: function() {
                    return i
                },
                QL: function() {
                    return E
                },
                UL: function() {
                    return r
                },
                Vk: function() {
                    return s
                },
                eL: function() {
                    return n
                },
                lE: function() {
                    return c
                },
                ui: function() {
                    return d
                },
                w3: function() {
                    return o
                },
                wz: function() {
                    return g
                },
                xe: function() {
                    return h
                },
                zi: function() {
                    return l
                }
            });
            var a = t(9047);
            let i = (A, e) => {
                    e({
                        type: a.r.SET_IS_LOADING,
                        payload: A
                    })
                },
                n = A => {
                    A({
                        type: a.r.PROJECT_SCREEN_ACTIVE
                    })
                },
                s = A => {
                    A({
                        type: a.r.PROJECT_SCREEN_INACTIVE
                    })
                },
                r = (A, e) => {
                    A({
                        type: a.r.SET_PROJECT,
                        payload: e
                    })
                },
                l = A => {
                    A({
                        type: a.r.SET_MENU_OPEN
                    })
                },
                g = A => {
                    A({
                        type: a.r.SET_MENU_CLOSE
                    })
                },
                o = (A, e) => {
                    A({
                        type: a.r.SET_SECTION_TO_SCROLL,
                        payload: e
                    })
                },
                c = (A, e) => {
                    A({
                        type: a.r.SET_WORK_TYPE,
                        payload: e
                    })
                },
                E = (A, e) => {
                    A({
                        type: a.r.SET_ABOUT_HOBBY,
                        payload: e
                    })
                },
                h = (A, e, t) => {
                    A({
                        type: a.r.SET_LINK_CLICKED,
                        payload: e
                    }), A({
                        type: a.r.SET_PATH_TO_NAVIGATE,
                        payload: t
                    })
                },
                d = (A, e) => {
                    A({
                        type: a.r.SET_HOME_MASK_HOVER,
                        payload: e
                    })
                }
        },
        2685: function(A, e, t) {
            "use strict";
            var a = t(6006);
            e.Z = A => {
                let [e, t] = (0, a.useState)("unactive"), [i, n] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let e = window.matchMedia("(max-width: ".concat(A, "px)"));
                    e.matches ? (t("true"), n(!0)) : (t("false"), n(!1));
                    let a = A => {
                        t(A.matches)
                    };
                    return e.addEventListener("change", a), () => {
                        e.removeEventListener("change", a)
                    }
                }, []), {
                    isMobile: e,
                    isMobileBool: i
                }
            }
        },
        3565: function(A, e, t) {
            "use strict";
            var a = t(6006),
                i = t(8846);
            e.Z = () => {
                let {
                    dispatch: A,
                    project: e,
                    projectScreenShow: t,
                    sectionToScroll: n,
                    workType: s,
                    isLoading: r,
                    hobbySelected: l,
                    linkClicked: g,
                    pathToNavigate: o,
                    setHomePageMaskHover: c
                } = (0, a.useContext)(i.GlobalContext);
                return {
                    dispatch: A,
                    project: e,
                    projectScreenShow: t,
                    sectionToScroll: n,
                    workType: s,
                    isLoading: r,
                    hobbySelected: l,
                    linkClicked: g,
                    pathToNavigate: o,
                    setHomePageMaskHover: c
                }
            }
        },
        9047: function(A, e, t) {
            "use strict";
            var a, i;
            t.d(e, {
                r: function() {
                    return a
                }
            }), (i = a || (a = {})).SET_CONTEXT_CURSOR = "SET_CONTEXT_CURSOR", i.PROJECT_SCREEN_ACTIVE = "PROJECT_SCREEN_ACTIVE", i.PROJECT_SCREEN_INACTIVE = "PROJECT_SCREEN_INACTIVE", i.SET_PROJECT = "SET_PROJECT", i.SET_MENU_UNSET = "SET_MENU_UNSET", i.SET_MENU_CLOSE = "SET_MENU_CLOSE", i.SET_MENU_OPEN = "SET_MENU_OPEN", i.SET_MENU_LINK_CLOSE = "SET_MENU_LINK_CLOSE", i.SET_SECTION_TO_SCROLL = "SET_SECTION_TO_SCROLL", i.SET_WORK_TYPE = "SET_WORK_TYPE", i.SET_IS_LOADING = "SET_IS_LOADING", i.SET_ABOUT_HOBBY = "SET_ABOUT_HOBBY", i.SET_LINK_CLICKED = "SET_LINK_CLICKED", i.SET_PATH_TO_NAVIGATE = "SET_PATH_TO_NAVIGATE", i.SET_HOME_MASK_HOVER = "SET_HOME_MASK_HOVER"
        },
        106: function() {},
        7894: function() {}
    }
]);