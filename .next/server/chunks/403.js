"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBarDesktop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(94);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Navbar/navBarStyles.ts

const NavBarTypography = (external_styled_components_default()).h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #95785c;
  margin-right: 2em;
  flex-grow: ${(props)=>props.flexGrow
};
  margin-right: ${(props)=>props.marginRight
};
`;
const ImgContainer = (external_styled_components_default()).img`
  &:hover {
    cursor: pointer;
  }
  width: 70px;
  margin-bottom: 5px;
  margin-top: 5px;
`;
const ImgContainerMobile = (external_styled_components_default()).img`
  &:hover {
    cursor: pointer;
  }
  width: 170vw;
`;
const LinkContainer = (external_styled_components_default()).div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  font-size: 17px;
`;
const ListItemText = (external_styled_components_default()).h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props)=>props.fontWeight
};
  font-size: ${(props)=>props.fontSize
};
  line-height: ${(props)=>props.lineHeight
};
  color: ${(props)=>props.color
};
`;
const ListItemsContainer = (external_styled_components_default()).div`
  margin-left: 1em;
  margin-top: -10px;
`;
const ListContainer = (external_styled_components_default()).div`
  margin-left: 20px;
`;
const LogoContainer = (external_styled_components_default()).div`
  flex-grow: 1;
`;

;// CONCATENATED MODULE: ./components/Navbar/NavBarDesktop.tsx







function NavBarDesktop({ landing  }) {
    const router = (0,router_.useRouter)();
    const handleButtonClick = (url)=>{
        router.push(url);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "fixed",
        color: "default",
        component: "div",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LogoContainer, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                        to: "home",
                        smooth: true,
                        onClick: ()=>handleButtonClick("/")
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ImgContainer, {
                            src: "https://marilmusica.com/wp-content/uploads/2023/03/logo-posit.png"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBarTypography, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContainer, {
                        onClick: ()=>handleButtonClick("/productos")
                        ,
                        children: "TENDA"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBarTypography, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContainer, {
                        onClick: ()=>handleButtonClick("/nos")
                        ,
                        children: "N\xd3S"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBarTypography, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContainer, {
                        onClick: ()=>handleButtonClick("/contacto")
                        ,
                        children: "CONTACTO"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBarTypography, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContainer, {
                        children: "GALEGO"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavBarTypography, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContainer, {
                        children: " - - iconos - - "
                    })
                })
            ]
        })
    });
};
const LogoHumanidadContainer = (external_styled_components_default()).img`
  height: 8vh;
  width: 4vw;
  margin-left: 3vw;
  margin-right: 3vw;
`;
const CulturaContainer = (external_styled_components_default()).img`
  width: 7vw;
  margin-bottom: 2vh;
  margin-left: 3vw;
`;


/***/ })

};
;