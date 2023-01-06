"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/contexts/ContextProvider.tsx


const HomeContext = /*#__PURE__*/ external_react_.createContext({});
const ContextProvider = ({ children , value  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(HomeContext.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const contexts_ContextProvider = (ContextProvider);

;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "@mui/material/Grid"
const Grid_namespaceObject = require("@mui/material/Grid");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_namespaceObject);
;// CONCATENATED MODULE: ./src/components/PageContainer/index.tsx



const Container = (0,material_namespaceObject.styled)((Grid_default()))(()=>{
    return {
        width: 1300,
        maxWidth: 1300,
        margin: "auto",
        height: "100% !important",
        background: "transpartent",
        padding: 30,
        "@media (max-width: 1299px)": {
            maxWidth: "100%",
            width: "100%",
            padding: 15
        }
    };
});
const PageContainer = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        xl: 12,
        sm: 12,
        lg: 12,
        xs: 12,
        md: 12,
        children: children
    });
};
/* harmony default export */ const components_PageContainer = (PageContainer);

;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Title/index.tsx



const Title_Container = styled_default()("div")(()=>{
    return {
        padding: "90px 0px 130px 0px",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media(max-width: 960px)": {
            padding: "60px 0px"
        }
    };
});
const Label = styled_default()("h2")(({ color  })=>{
    return {
        fontSize: "30pt",
        fontWeight: "lighter",
        color: color || "#1c0113"
    };
});
const Bottom = styled_default()((Divider_default()))(({ color  })=>{
    return {
        background: color || "#1c0113",
        height: 2,
        width: 70
    };
});
const Title = ({ label , color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                color: color,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bottom, {
                color: color
            })
        ]
    });
};
/* harmony default export */ const components_Title = (Title);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/sections/About/styles.ts



const Section = styled_default()("section")(()=>{
    return {
        background: "#fff"
    };
});
const styles_Container = styled_default()(material_namespaceObject.Grid)(()=>{
    return {
        position: "relative"
    };
});
const ImageCol = styled_default()(material_namespaceObject.Grid)(()=>{
    return {
        zIndex: 99
    };
});
const Subtitle = styled_default()("strong")(()=>{
    return {
        fontSize: "18pt",
        fontWeight: "lighter"
    };
});
const Text = styled_default()("p")(()=>{
    return {
        margin: "20px 0px",
        fontSize: "13pt",
        fontWeight: "lighter",
        textAlign: "justify"
    };
});
const ImageContainer = styled_default()(material_namespaceObject.Grid)(()=>{
    return {
        "@media (max-width: 1196px)": {
            display: "none"
        }
    };
});
const BannerImage = styled_default()((image_default()))(()=>{
    return {
        width: "calc(100% + 10%)",
        bottom: 0
    };
});
const Graphic = styled_default()("div")(()=>{
    return {
        width: "100%",
        height: 28,
        position: "relative",
        background: "#e3c262",
        marginBottom: 15,
        display: "flex"
    };
});
const TextContainer = styled_default()("div")(()=>{
    return {
        width: 200,
        background: "#2b1724",
        opacity: 6,
        paddingLeft: 10,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 99
    };
});
const styles_Label = styled_default()("span")(()=>{
    return {
        textTransform: "capitalize",
        color: "#fff",
        fontSize: "13pt"
    };
});
const Bar = styled_default()("div")(({ percent  })=>{
    return {
        width: `calc(${percent}%)`,
        background: "#1c0113",
        textAlign: "center",
        position: "absolute",
        top: 0,
        bottom: 0
    };
});
const PercentContainer = styled_default()("div")(()=>{
    return {
        width: "10%",
        fontWeight: "500",
        textAlign: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0
    };
});


;// CONCATENATED MODULE: ./src/assets/img/about.svg
/* harmony default export */ const about = ({"src":"/_next/static/media/about.531bfbd7.svg","height":675,"width":764});
;// CONCATENATED MODULE: ./src/sections/About/index.tsx







const About = ({ technologies  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Section, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PageContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                        container: true,
                        justifyContent: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {
                            label: "<Sobre>"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Container, {
                        container: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                                item: true,
                                xl: 6,
                                sm: 12,
                                lg: 6,
                                xs: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BannerImage, {
                                    src: about,
                                    alt: "sobre"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                item: true,
                                xl: 6,
                                sm: 12,
                                lg: 6,
                                xs: 12,
                                md: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                                        children: "Quem sou eu?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                        children: "Desenvolvedor Front-end com experi\xeancia de 3 anos em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutiliz\xe1veis. Tamb\xe9m possuo experi\xeancia em projetos gerenciados por Metodologias \xc1geis. Formado em t\xe9cnico em inform\xe1tica para internet."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                                        container: true,
                                        children: technologies?.map((tec, key)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Graphic, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TextContainer, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(styles_Label, {
                                                            children: tec.code.replace("_", " ").toLocaleLowerCase()
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Bar, {
                                                        percent: tec.percent
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(PercentContainer, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Label, {
                                                            children: [
                                                                tec.percent,
                                                                "%"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, key);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sections_About = (About);

;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
;// CONCATENATED MODULE: ./src/components/Banner/styles.ts


const Banner_styles_Container = (0,system_namespaceObject.styled)("div")(()=>{
    return {
        maxWidth: "100%",
        width: "100%",
        height: "100vh",
        position: "relative",
        "& span": {
            fontFamily: "Raleway",
            color: "#fff",
            fontSize: "28pt",
            lineHeight: "36pt"
        },
        "& strong": {
            fontFamily: "Raleway",
            color: "#fff",
            fontSize: "28pt",
            lineHeight: "36pt"
        },
        "@media(max-width: 680px)": {
            "& strong": {
                fontSize: "24pt",
                lineHeight: "20pt"
            },
            "& span": {
                fontSize: "24pt",
                lineHeight: "16pt"
            }
        },
        "@media(max-width: 499px)": {
            "& strong": {
                fontSize: "16pt",
                lineHeight: "20pt"
            },
            "& span": {
                fontSize: "16pt",
                lineHeight: "16pt"
            }
        }
    };
});
const Hidden = (0,system_namespaceObject.styled)(material_namespaceObject.Grid)(()=>{
    return {
        position: "absolute"
    };
});
const styles_TextContainer = (0,system_namespaceObject.styled)(material_namespaceObject.Grid)(()=>{
    return {
        height: "100vh",
        background: "rgba(28,1,19,0.6)",
        padding: 15
    };
});
const DonwloadButton = (0,system_namespaceObject.styled)(material_namespaceObject.Button)(()=>{
    return {
        textTransform: "capitalize",
        marginTop: 40,
        background: "transparent",
        color: "white",
        border: "3px solid #fff",
        padding: "15px 70px",
        fontSize: "14pt",
        height: "auto",
        "@media(max-width: 680px)": {
            fontSize: "13pt",
            lineHeight: "16pt",
            width: "100%",
            padding: "15px"
        },
        "@media(max-width: 499px)": {
            fontSize: "12pt"
        }
    };
});
const Video = (0,system_namespaceObject.styled)("video")(()=>{
    return {
        width: "100%",
        height: "100%",
        minWidth: "100%",
        minHeight: "100%",
        objectFit: "fill"
    };
});


;// CONCATENATED MODULE: ./src/components/Banner/index.tsx



const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Banner_styles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                container: true,
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                    src: "banner.mp4",
                    loop: true,
                    autoPlay: true,
                    muted: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hidden, {
                container: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_TextContainer, {
                    direction: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                "Ol\xe1, me chamo ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Patrik Matos"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Sou um desenvolvedor front-end"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(DonwloadButton, {
                            onClick: ()=>window.open("curriculo.pdf"),
                            children: "Baixar curr\xedculo"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Banner = (Banner);

;// CONCATENATED MODULE: ./src/layouts/Home/styles.ts

const Home_styles_Container = styled_default()("div")(()=>{
    return {
        background: "#fff"
    };
});


;// CONCATENATED MODULE: ./src/sections/Footer/styles.ts

const styles_Section = styled_default()("section")(()=>{
    return {};
});


;// CONCATENATED MODULE: external "@mui/icons-material/LinkedIn"
const LinkedIn_namespaceObject = require("@mui/icons-material/LinkedIn");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AlternateEmail"
const AlternateEmail_namespaceObject = require("@mui/icons-material/AlternateEmail");
var AlternateEmail_default = /*#__PURE__*/__webpack_require__.n(AlternateEmail_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/WhatsApp"
const WhatsApp_namespaceObject = require("@mui/icons-material/WhatsApp");
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_namespaceObject);
;// CONCATENATED MODULE: ./src/sections/Footer/index.tsx








const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_Section, {
        style: {
            background: "rgba(28,1,19,1)"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PageContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {
                        label: "Contato",
                        color: "#fff"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                        container: true,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.IconButton, {
                                style: {
                                    margin: 15
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((LinkedIn_default()), {
                                    style: {
                                        fontSize: "38px"
                                    },
                                    htmlColor: "#fff"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.IconButton, {
                                style: {
                                    margin: 15
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((AlternateEmail_default()), {
                                    style: {
                                        fontSize: "38px"
                                    },
                                    htmlColor: "#fff"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.IconButton, {
                                style: {
                                    margin: 15
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {
                                    style: {
                                        fontSize: "38px"
                                    },
                                    htmlColor: "#fff"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sections_Footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const material_styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/components/ProjectsBar/styles.ts



const ProjectsBar_styles_Container = (0,material_styles_namespaceObject.styled)(material_namespaceObject.Box)(()=>{
    return {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center"
    };
});
const ImageButton = (0,material_styles_namespaceObject.styled)(material_namespaceObject.ButtonBase)(({ theme  })=>({
        position: "relative",
        height: 480,
        width: "33%",
        "@media(max-width: 1200px)": {
            width: "50%",
            height: 380
        },
        "@media (max-width: 960px)": {
            width: "100%"
        },
        "&:hover, &.Mui-focusVisible": {
            zIndex: 1,
            "& .MuiImageBackdrop-root": {
                opacity: 0.15
            },
            "& .MuiImageMarked-root": {
                opacity: 0
            },
            "& .MuiTypography-root": {
                border: "4px solid currentColor"
            }
        }
    }));
const ImageSrc = (0,material_styles_namespaceObject.styled)("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
});
const Image = (0,material_styles_namespaceObject.styled)("span")(({ theme  })=>({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.common.white
    }));
const ImageBackdrop = (0,material_styles_namespaceObject.styled)("span")(({ theme  })=>({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create("opacity")
    }));
const ImageMarked = (0,material_styles_namespaceObject.styled)("span")(({ theme  })=>({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }));
const styles_Text = (0,material_styles_namespaceObject.styled)((Typography_default()))(({ theme  })=>{
    return {
        position: "relative",
        p: 4,
        pt: 2,
        pb: `calc(${theme.spacing(1)} + 6px)`
    };
});


;// CONCATENATED MODULE: ./src/components/ProjectsBar/index.tsx




function ProjectsBar({ experiences , onClickItem  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ProjectsBar_styles_Container, {
        children: experiences?.map((experience)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageButton, {
                onClick: ()=>onClickItem?.(experience?.id),
                focusRipple: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageSrc, {
                        style: {
                            backgroundImage: `url(${experience.img})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageBackdrop, {
                        className: "MuiImageBackdrop-root"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        "aria-label": `image-${experience.code}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "span",
                            variant: "subtitle1",
                            color: "inherit",
                            sx: {
                                position: "relative",
                                p: 4,
                                pt: 2,
                                pb: (theme)=>`calc(${theme.spacing(1)} + 6px)`
                            },
                            children: [
                                experience.code,
                                /*#__PURE__*/ jsx_runtime_.jsx(ImageMarked, {
                                    className: "MuiImageMarked-root"
                                })
                            ]
                        })
                    })
                ]
            }, experience.code))
    });
}

;// CONCATENATED MODULE: ./src/sections/Portfolio/styles.ts

const Portfolio_styles_Section = (0,material_namespaceObject.styled)("section")(()=>{
    return {
        background: "rgba(28,1,19,1)",
        paddingBottom: 100
    };
});
const Portfolio_styles_Container = (0,material_namespaceObject.styled)(material_namespaceObject.Box)(()=>{
    return {
        width: "100%",
        marginBottom: 3,
        background: "red"
    };
});
const ProjectTab = (0,material_namespaceObject.styled)(material_namespaceObject.Tab)(()=>{
    return {
        color: "#f6f6f6",
        textTransform: "none"
    };
});


;// CONCATENATED MODULE: ./src/sections/Portfolio/index.tsx







const Portfolio = ({ projects  })=>{
    const [tabContent, setTabContent] = (0,external_react_.useState)(0);
    const personals = projects?.filter((p)=>p?.company?.toLowerCase() === "pessoal" && {
            id: p.index,
            img: p.img,
            code: p.company
        });
    const participatives = projects?.filter((p)=>p?.company?.toLowerCase() !== "pessoal" && {
            id: p.index,
            img: p.img,
            code: p.company
        });
    return /*#__PURE__*/ jsx_runtime_.jsx(Portfolio_styles_Section, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PageContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {
                        label: "< Portfolio >",
                        color: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Box, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Tabs, {
                                TabIndicatorProps: {
                                    style: {
                                        backgroundColor: "#fff"
                                    }
                                },
                                value: tabContent,
                                onChange: (_e, n)=>setTabContent(n),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectTab, {
                                        value: 1,
                                        label: "Projetos participativos"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectTab, {
                                        value: 0,
                                        label: "Projetos pessoais"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectsBar, {
                        experiences: tabContent === 0 ? personals : participatives
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sections_Portfolio = (Portfolio);

;// CONCATENATED MODULE: external "@mui/lab/Timeline"
const Timeline_namespaceObject = require("@mui/lab/Timeline");
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/TimelineItem"
const TimelineItem_namespaceObject = require("@mui/lab/TimelineItem");
var TimelineItem_default = /*#__PURE__*/__webpack_require__.n(TimelineItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/TimelineSeparator"
const TimelineSeparator_namespaceObject = require("@mui/lab/TimelineSeparator");
var TimelineSeparator_default = /*#__PURE__*/__webpack_require__.n(TimelineSeparator_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/TimelineConnector"
const TimelineConnector_namespaceObject = require("@mui/lab/TimelineConnector");
var TimelineConnector_default = /*#__PURE__*/__webpack_require__.n(TimelineConnector_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/TimelineDot"
const TimelineDot_namespaceObject = require("@mui/lab/TimelineDot");
var TimelineDot_default = /*#__PURE__*/__webpack_require__.n(TimelineDot_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab"
const lab_namespaceObject = require("@mui/lab");
;// CONCATENATED MODULE: ./src/sections/Companys/styles.ts


const Content = (0,material_namespaceObject.styled)(lab_namespaceObject.TimelineContent)(()=>{
    return {};
});


;// CONCATENATED MODULE: ./src/sections/Companys/index.tsx











function Companys({ companys  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PageContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {
                        label: "< Experi\xeancias />"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Timeline_default()), {
                        sx: {
                            [`& .${TimelineItem_namespaceObject.timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0
                            }
                        },
                        children: companys?.map((company, key)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                                style: {
                                                    background: "rgba(28,1,19,0.9)"
                                                }
                                            }),
                                            key !== companys?.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                                        display: "flex",
                                        flexDirection: "column",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                style: {
                                                    fontSize: "12pt"
                                                },
                                                children: [
                                                    company.dateStart,
                                                    " - ",
                                                    company.dateEnd
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    fontSize: "11pt",
                                                    fontWeight: "lighter"
                                                },
                                                children: company.code
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    fontSize: "11pt",
                                                    fontWeight: "lighter"
                                                },
                                                children: company.company
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                style: {
                                                    fontSize: "11pt",
                                                    fontWeight: "lighter"
                                                },
                                                children: [
                                                    company?.location?.city,
                                                    " - ",
                                                    company?.location?.state
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                                        style: {
                                            marginBottom: 100,
                                            textAlign: "justify"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    fontSize: "12pt",
                                                    fontWeight: "lighter"
                                                },
                                                children: company?.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                                container: true,
                                                wrap: "wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            fontSize: "12pt",
                                                            fontWeight: "lighter",
                                                            color: "#000"
                                                        },
                                                        children: "Tecnologias:"
                                                    }),
                                                    company?.technologies?.map((tec, idx)=>{
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    style: {
                                                                        fontSize: "12pt",
                                                                        fontWeight: "lighter"
                                                                    },
                                                                    children: tec
                                                                }),
                                                                idx !== company?.technologies?.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    style: {
                                                                        margin: "0px 2px",
                                                                        fontSize: "12pt"
                                                                    },
                                                                    children: "-"
                                                                })
                                                            ]
                                                        });
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, key);
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/layouts/Home/index.tsx









const HomePage = ()=>{
    const ctx = (0,external_react_.useContext)(HomeContext);
    const { technologies , projects , experiences  } = JSON.parse(ctx);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Home_styles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(sections_About, {
                technologies: technologies?.sort((a, b)=>{
                    if (a.percent < b.percent) {
                        return 1;
                    }
                    if (a.percent > b.percent) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sections_Portfolio, {
                projects: projects
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Companys, {
                companys: experiences
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sections_Footer, {})
        ]
    });
};
/* harmony default export */ const Home = (HomePage);

;// CONCATENATED MODULE: ./pages/index.tsx



function pages_Home({ ctx  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(contexts_ContextProvider, {
        value: ctx,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
    });
}
pages_Home.getInitialProps = async ()=>{
    const res = await fetch("http://localhost:3000/api/info");
    const obj = await res.json();
    console.log("iojb", obj);
    return {
        ctx: JSON.stringify(obj)
    };
};
/* harmony default export */ const pages = (pages_Home);


/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(908)));
module.exports = __webpack_exports__;

})();