"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./styles/button.ts
const Button = {
    variants: [
        {
            props: {
                variant: "outlined"
            },
            style: {
                fontSize: "1rem",
                fontWeight: 600,
                fontFamily: "Montserrat,sans-serif",
                borderWidth: "2px",
                textTransform: "none"
            }
        }, 
    ]
};

;// CONCATENATED MODULE: ./styles/typography.ts
const Typography = {
    variants: [
        {
            props: {
                variant: "h1"
            },
            style: {
                fontSize: "4.5rem",
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif"
            }
        },
        {
            props: {
                variant: "body1"
            },
            style: {
                fontSize: "1.125rem",
                fontWeight: 400,
                fontFamily: "Montserrat, sans-serif",
                fontStyle: "italic"
            }
        },
        {
            props: {
                variant: "coverTitle"
            },
            style: {
                fontFamily: "Montserrat, sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "120px",
                lineHeight: "156px",
                color: "primary"
            }
        },
        {
            props: {
                variant: "coverDescription"
            },
            style: {
                fontFamily: "Montserrat, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "22px",
                color: ""
            }
        }, 
    ]
};

;// CONCATENATED MODULE: ./styles/theme.ts



const mainTheme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: {
            main: "#5C4835"
        },
        secondary: {
            main: "#D5D5D5"
        },
        neutral: {
            main: "#FDFAF8",
            contrastText: "#95785C"
        }
    },
    typography: {
        fontFamily: [
            "Montserrat"
        ].join(",")
    },
    components: {
        MuiButton: Button,
        MuiTypography: Typography
    }
});

;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
        theme: mainTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ComponentContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);
const ComponentContainer = (styled_default()).div`
  // position: relative;
  min-height: 94vh;
`;


/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_exports__ = (__webpack_exec__(680));
module.exports = __webpack_exports__;

})();