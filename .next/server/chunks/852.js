"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Filters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: ./hooks/useScreenSize.ts + 1 modules
var useScreenSize = __webpack_require__(533);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Filters/filtersStyles.ts

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
const ListItemIcon = (external_styled_components_default()).div`
  margin-right: 5px;
`;
const ListItemsContainer = (external_styled_components_default()).div`
  margin-left: 1em;
  margin-top: -10px;
`;
const ListContainer = (external_styled_components_default()).div`
  margin-left: 20px;
`;

// EXTERNAL MODULE: ./data/marilItems.ts
var marilItems = __webpack_require__(907);
// EXTERNAL MODULE: external "@mui/icons-material/AppsRounded"
var AppsRounded_ = __webpack_require__(742);
var AppsRounded_default = /*#__PURE__*/__webpack_require__.n(AppsRounded_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(11);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandLess"
var ExpandLess_ = __webpack_require__(174);
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/Filters/Items.tsx










function Items(props) {
    const router = (0,router_.useRouter)();
    const { 0: openMenu , 1: setOpenMenu  } = (0,external_react_.useState)(true);
    const { categorie  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
        sx: {
            width: "100%",
            bgcolor: "background.paper"
        },
        component: "nav",
        disablePadding: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                sx: {
                    marginLeft: 0,
                    marginTop: 2
                },
                onClick: ()=>setOpenMenu(!openMenu)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CategoryText, {
                        children: [
                            " \xb7 ",
                            categorie.name
                        ]
                    }),
                    categorie.subCategories.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: openMenu ? /*#__PURE__*/ jsx_runtime_.jsx((ExpandLess_default()), {
                            sx: {
                                color: "#95785c"
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                            sx: {
                                color: "#95785c"
                            }
                        })
                    })
                ]
            }),
            categorie.subCategories.length > 0 && categorie.subCategories.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    marginLeft: 2,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                        in: openMenu,
                        timeout: "auto",
                        unmountOnExit: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SubCategoryItemButton, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SubCategoryText, {
                                onClick: ()=>router.push(`/productos/${item.category}/${item.url}`)
                                ,
                                children: item.name
                            })
                        })
                    })
                }, index)
            )
        ]
    });
};
const CategoryText = (external_styled_components_default()).h1`
  font-size: 20px;
  margin-top: 4px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #95785c;
`;
const SubCategoryText = (external_styled_components_default()).h1`
  font-size: 17px;
  margin-left: 20px;
  line-height: 15px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-top: 2px;
  color: #95785c;
`;
const SubCategoryItemButton = (external_styled_components_default()).div`
  margin-left: 2px;
  cursor: pointer;
  padding: 2px;
  &:hover {
    background-color: #f1edea;
    padding: 2px;
  }
`;

;// CONCATENATED MODULE: ./components/Filters/Filters.tsx










function Filters() {
    const { 0: key , 1: setKey  } = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setKey(1);
    }, []);
    const { isDesktop  } = (0,useScreenSize/* useScreenSize */.e)();
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
        sx: {
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "8px",
            height: "fit-content",
            border: isDesktop ? `2px solid ${theme.palette.secondary.main}` : ""
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: ()=>router.push("/productos")
                ,
                children: [
                    isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(ListItemIcon, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((AppsRounded_default()), {
                            color: "primary"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ListItemText, {
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "24px",
                        color: theme.palette.primary.main,
                        children: "OS NOSOS PRODUTOS"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ListContainer, {
                children: marilItems/* CATEGORIES.map */.a.map((categorie, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Items, {
                        categorie: categorie
                    });
                })
            })
        ]
    }, key);
};


/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CATEGORIES),
/* harmony export */   "r": () => (/* binding */ MARILITEMS)
/* harmony export */ });
const MARILITEMS = [
    {
        id: "1",
        name: "AS ANDANZAS DE PAIO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_16-300x400.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "2",
        name: "A M\xdaSICA DAS BUGINAS, LIBRO + USB",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/30g-600x600.jpg",
        prize: "26",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "3",
        name: "AS MAIMI\xd1AS, UNHA VIAXE POLO MUNDO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_13-300x400.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "4",
        name: "AS MAIMI\xd1AS, VOLTA REVOLTA E REVIRAVOLTA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_12-300x400.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "5",
        name: "CHOLO E NELA, 20 ANOS DANDO A NOTA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_15-600x902.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "6",
        name: "NA PUNTA DO P\xc9, PESDEL\xc1N",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_10-600x902.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "7",
        name: "NON HAI BERCE COMA O COLO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_11-600x902.jpg",
        prize: "20",
        category: "libros",
        subCategory: "infantil"
    },
    {
        id: "8",
        name: "GAITA AFONSO CASTRO BUBINGA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0184-600x903.jpg",
        prize: "975",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "9",
        name: "GAITA ANT\xd3N CORRAL BUBINGA INICIACI\xd3N",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0191-600x903.jpg",
        prize: "850",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "10",
        name: "GAITA SEIVANE GRANADILLO SEINOX",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0205-600x903.jpg",
        prize: "2000",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "11",
        name: "GAITA SEIVANE MOPANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0197-600x903.jpg",
        prize: "1840",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "12",
        name: "GAITA SEIVANE BUXO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0194-600x903.jpg",
        prize: "1850",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "13",
        name: "GAITA ANT\xd3N CORRAL GRANADILLO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0188-600x903.jpg",
        prize: "1900",
        category: "vento",
        subCategory: "gaita"
    },
    {
        id: "14",
        name: "PUNTEIRO LA ANT\xd3N CORRAL GRANADILLO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0217-600x903.jpg",
        prize: "800",
        category: "vento",
        subCategory: "punteiro"
    },
    {
        id: "15",
        name: "PUNTEIRO SIB ANT\xd3N CORRAL GRANADILLO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0220-c-600x902.jpg",
        prize: "620",
        category: "vento",
        subCategory: "punteiro"
    },
    {
        id: "16",
        name: "PUNTEIRO SOL ANT\xd3N CORRAL BUXO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0214-600x903.jpg",
        prize: "700",
        category: "vento",
        subCategory: "punteiro"
    },
    {
        id: "17",
        name: "PALLETA IGLESIAS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0254-600x902.jpg",
        prize: "17",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "18",
        name: "PALLETA LI\xd1ARES",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0248-600x902.jpg",
        prize: "15",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "19",
        name: "PALLETA RUB\xc9N",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0247-600x902.jpg",
        prize: "14",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "20",
        name: "PALLETA SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/palletas.jpg",
        prize: "20",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "21",
        name: "PALL\xd3N SINT\xc9TICO SEIPAL SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/seipal.jpg",
        prize: "25",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "22",
        name: "PALL\xd3N RONCO L\xc1MINA DE CARBONO AFONSO CASTRO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0156-600x903.jpg",
        prize: "18",
        category: "vento",
        subCategory: "palletas"
    },
    {
        id: "23",
        name: "FRAUTA DE ARCE SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/flauta-arce.jpg",
        prize: "45",
        category: "vento",
        subCategory: "frautas"
    },
    {
        id: "24",
        name: "FRAUTA DE PL\xc1STICO HOHNER RECTIFICADA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0275-600x902.jpg",
        prize: "11.90",
        category: "vento",
        subCategory: "frautas"
    },
    {
        id: "25",
        name: "FRAUTA DULCE DE PL\xc1STICO HOHNER",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0276-600x902.jpg",
        prize: "9.90",
        category: "vento",
        subCategory: "frautas"
    },
    {
        id: "26",
        name: "PITO PASTORIL ANT\xd3N CORRAL \xc9BANO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/ljdsjdfsljldsj-600x902.jpg",
        prize: "595",
        category: "vento",
        subCategory: "frautas"
    },
    {
        id: "27",
        name: "BOMBO MANELS - M2",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0100-600x903.jpg",
        prize: "695",
        category: "percusion",
        subCategory: "tambores"
    },
    {
        id: "28",
        name: "TAMBOR TUNHAS- T10",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0034-600x903.jpg",
        prize: "495",
        category: "percusion",
        subCategory: "tambores"
    },
    {
        id: "29",
        name: "BOMBO TUNHAS - T21",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0051-600x903.jpg",
        prize: "480",
        category: "percusion",
        subCategory: "tambores"
    },
    {
        id: "30",
        name: "TAMBOR SEOANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0054-600x903.jpg",
        prize: "375",
        category: "percusion",
        subCategory: "tambores"
    },
    {
        id: "31",
        name: "PANDEIRA SEOANE 5P",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0057-600x903.jpg",
        prize: "156",
        category: "percusion",
        subCategory: "pandeiretas"
    },
    {
        id: "32",
        name: "PANDEIRETA MANELS - 9P AZUL",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0084-600x903.jpg",
        prize: "99",
        category: "percusion",
        subCategory: "pandeiretas"
    },
    {
        id: "33",
        name: "PANDEIRETA SEOANE 5P",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0070-600x903.jpg",
        prize: "38",
        category: "percusion",
        subCategory: "pandeiretas"
    },
    {
        id: "34",
        name: "PANDEIRO SEOANE CON CINTA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0059-600x903.jpg",
        prize: "138",
        category: "percusion",
        subCategory: "pandeiretas"
    },
    {
        id: "35",
        name: "PANDEIRETA TUNHAS 9P",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0045-600x903.jpg",
        prize: "50",
        category: "percusion",
        subCategory: "pandeiretas"
    },
    {
        id: "36",
        name: "BAQUETAS MANELS - L2",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0106-600x903.jpg",
        prize: "70",
        category: "percusion",
        subCategory: "baquetas"
    },
    {
        id: "37",
        name: "BAQUETAS MANELS - L3",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0231-600x902.jpg",
        prize: "90",
        category: "percusion",
        subCategory: "baquetas"
    },
    {
        id: "38",
        name: "MAZA BOMBO PILAR COUSO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0223-600x902.jpg",
        prize: "75",
        category: "percusion",
        subCategory: "baquetas"
    },
    {
        id: "39",
        name: "BAQUETAS TAMBOR MARIL M\xdaSICA",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0258-600x902.jpg",
        prize: "25",
        category: "percusion",
        subCategory: "baquetas"
    },
    {
        id: "40",
        name: "UKELELE CONCERT BONES SP220C SAPELLY",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/5308322-600x600.jpg",
        prize: "60",
        category: "corda",
        subCategory: "ukelele"
    },
    {
        id: "41",
        name: "ADELINO PICHEL E OS GAITEIROS DE FORCAREI",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_8-600x902.jpg",
        prize: "20",
        category: "libros",
        subCategory: "gaita-percusion"
    },
    {
        id: "42",
        name: "BELL\xd3NMACEIRAS MELOD\xcdAS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/26g-600x600.jpg",
        prize: "16",
        category: "libros",
        subCategory: "gaita-percusion"
    },
    {
        id: "43",
        name: "CRISTIAN SILVA - MANUAL \xc9GOLATRA B\xc1SICO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_2-600x902.jpg",
        prize: "17",
        category: "libros",
        subCategory: "gaita-percusion"
    },
    {
        id: "44",
        name: "O TOQUE PECHADO, PABLO SEOANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/libro_6-600x902.jpg",
        prize: "25",
        category: "libros",
        subCategory: "gaita-percusion"
    },
    {
        id: "45",
        name: "VESTIDO GAITA SEOANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0268-600x902.jpg",
        prize: "110",
        category: "complementos",
        subCategory: "vestidos"
    },
    {
        id: "46",
        name: "ESTOXO ACOLCHADO SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/estuche_acolchado.jpg",
        prize: "65",
        category: "complementos",
        subCategory: "fundas-gaita"
    },
    {
        id: "47",
        name: "ESTOXO FOLIADA SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/estuche_foliada.jpg",
        prize: "40",
        category: "complementos",
        subCategory: "fundas-gaita"
    },
    {
        id: "48",
        name: "ESTOXO R\xcdXIDO SEIVANE",
        image: "https://marilmusica.com/wp-content/uploads/2023/03/estuche_rigido_1.jpg",
        prize: "90",
        category: "complementos",
        subCategory: "fundas-gaita"
    },
    {
        id: "49",
        name: "FUNDA BOMBO SAIANS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0142-600x903.jpg",
        prize: "195",
        category: "complementos",
        subCategory: "fundas-tambor"
    },
    {
        id: "50",
        name: "FUNDA TAMBOR SAIANS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0136-600x820.jpg",
        prize: "190",
        category: "complementos",
        subCategory: "fundas-tambor"
    },
    {
        id: "51",
        name: "FUNDA PANDEIRETA BAGLUTHIERS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0123-600x903.jpg",
        prize: "62",
        category: "complementos",
        subCategory: "fundas-pandeireta"
    },
    {
        id: "52",
        name: "FUNDA PANDEIRETA PILAR COUSO",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0264-600x902.jpg",
        prize: "60",
        category: "complementos",
        subCategory: "fundas-pandeireta"
    },
    {
        id: "53",
        name: "FUNDA PANDEIRETA SAIANS",
        image: "https://marilmusica.com/wp-content/uploads/2023/04/DSC0267-600x902.jpg",
        prize: "97",
        category: "complementos",
        subCategory: "fundas-pandeireta"
    },
    {
        id: "54",
        name: "ATRIL PORTASTAND PAS-MST MAESTRO NEGRO",
        image: "https://marilmusica.com/wp-content/uploads/2023/05/4502041-600x600.jpg",
        prize: "60",
        category: "accesorios",
        subCategory: "atris"
    }, 
];
const CATEGORIES = [
    {
        name: "Vento",
        subCategories: [
            {
                name: "Gaitas",
                category: "vento",
                url: "gaita"
            },
            {
                name: "Punteiros",
                category: "vento",
                url: "punteiro"
            },
            {
                name: "Palletas e pall\xf3ns",
                category: "vento",
                url: "palletas"
            },
            {
                name: "Pito pastoril, Frautas",
                category: "vento",
                url: "frautas"
            }, 
        ]
    },
    {
        name: "Percusi\xf3n",
        subCategories: [
            {
                name: "Tambores e bombos",
                category: "percusion",
                url: "tambores"
            },
            {
                name: "Pandeiretas, pandeiras e pandeiros",
                category: "percusion",
                url: "pandeiretas"
            },
            {
                name: "Baquetas e mazas",
                category: "percusion",
                url: "baquetas"
            }, 
        ]
    },
    {
        name: "Corda",
        subCategories: [
            {
                name: "Ukeleles",
                category: "corda",
                url: "ukelele"
            }
        ]
    },
    {
        name: "Libros",
        subCategories: [
            {
                name: "Gaita e percusi\xf3n",
                category: "libros",
                url: "gaita-percusion"
            },
            {
                name: "Infant\xeds",
                category: "libros",
                url: "infantil"
            }, 
        ]
    },
    {
        name: "Complementos",
        subCategories: [
            {
                name: "Vestidos e farrapos gaita",
                category: "complementos",
                url: "vestidos"
            },
            {
                name: "Fundas e estoxos gaita",
                category: "complementos",
                url: "fundas-gaita"
            },
            {
                name: "Fundas tambor e bombo",
                category: "complementos",
                url: "fundas-tambor"
            },
            {
                name: "Fundas pandeireta",
                category: "complementos",
                url: "fundas-pandeireta"
            }, 
        ]
    },
    {
        name: "Accesorios",
        subCategories: [
            {
                name: "Atr\xeds",
                category: "accesorios",
                url: "atris"
            }
        ]
    }, 
];


/***/ })

};
;