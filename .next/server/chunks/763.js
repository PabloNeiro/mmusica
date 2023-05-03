"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cabecera)
/* harmony export */ });
/* unused harmony export HeaderContainer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(179);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function Cabecera() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: secondName , 1: setSecondName  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const dinamicURL = router.asPath;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        dinamicURL.split("/")[2] === "vento" ? setFirstName("Vento") : dinamicURL.split("/")[2] === "percusion" ? setFirstName("Percusi\xf3n") : dinamicURL.split("/")[2] === "corda" ? setFirstName("Corda") : dinamicURL.split("/")[2] === "libros" ? setFirstName("Libros") : dinamicURL.split("/")[2] === "complementos" ? setFirstName("Complementos") : setFirstName("Accesorios");
    }, [
        dinamicURL
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        dinamicURL.split("/")[3] === "gaita" ? setSecondName("Gaita") : dinamicURL.split("/")[3] === "punteiro" ? setSecondName("Punteiros") : dinamicURL.split("/")[3] === "palletas" ? setSecondName("Palletas e pall\xf3ns") : dinamicURL.split("/")[3] === "frautas" ? setSecondName("Pito pastoril e frautas") : dinamicURL.split("/")[3] === "tambores" ? setSecondName("Tambores e bombos") : dinamicURL.split("/")[3] === "pandeiretas" ? setSecondName("Pandeiretas, pandeiras e pandeiros") : dinamicURL.split("/")[3] === "baquetas" ? setSecondName("Baquetas e mazas") : dinamicURL.split("/")[3] === "ukelele" ? setSecondName("Ukeleles") : dinamicURL.split("/")[3] === "gaita-percusion" ? setSecondName("Gaita e percusi\xf3n") : dinamicURL.split("/")[3] === "infantil" ? setSecondName("Infant\xeds") : dinamicURL.split("/")[3] === "vestidos" ? setSecondName("Vestidos e farrapos para gaita") : dinamicURL.split("/")[3] === "fundas-gaita" ? setSecondName("Fundas e estoxos para gaita") : dinamicURL.split("/")[3] === "fundas-tambor" ? setSecondName("Fundas e estoxos para tambor") : dinamicURL.split("/")[3] === "fundas pandeireta" ? setSecondName("Fundas para pandeireta") : setSecondName("Atr\xeds");
    }, [
        dinamicURL
    ]);
    const breadcrumbs = [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
            underline: "hover",
            color: "inherit",
            sx: {
                cursor: "pointer"
            },
            onClick: ()=>router.push("/productos")
            ,
            children: "TENDA"
        }, "1"),
        dinamicURL.split("/")[2] !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
            underline: "hover",
            color: "inherit",
            sx: {
                cursor: "pointer"
            },
            onClick: ()=>{
                router.push(`/productos/${dinamicURL.split("/")[2]}`);
            },
            children: firstName
        }, "2"),
        dinamicURL.split("/")[3] !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            color: "text.primary",
            children: secondName
        }, "3"), 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        sx: {
            display: "inline-block",
            direction: "column"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, {
            separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_3___default()), {
                fontSize: "small"
            }),
            "aria-label": "breadcrumb",
            children: breadcrumbs
        })
    });
};
const HeaderContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin-bottom: 3px;
  display: inline;
`;
const CategoryText = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  font-size: 30px;
`;
const CategoryText2 = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  font-size: 20px;
`;
const CategoryText3 = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  font-size: 10px;
`;


/***/ })

};
;