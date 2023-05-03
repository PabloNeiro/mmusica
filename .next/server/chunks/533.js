"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ useScreenSize)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./data/breakpoints.ts
const MOBILE_WIDTH_BREAKPOINT = 768;
const TABLET_WIDTH_BREAKPOINT = 992;
const DESKTOP_WIDTH_BREAKPOINT = 1200;

// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
;// CONCATENATED MODULE: ./hooks/useScreenSize.ts



const useScreenSize = ()=>{
    const { width  } = (0,hooks_.useViewportSize)();
    const { 0: isMobile , 1: setIsMobile  } = (0,external_react_.useState)(false);
    const { 0: isTablet , 1: setIsTablet  } = (0,external_react_.useState)(false);
    const { 0: isDesktop , 1: setIsDesktop  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (window.screen.width <= MOBILE_WIDTH_BREAKPOINT) {
            setIsMobile(true);
            setIsTablet(false);
            setIsDesktop(false);
            return;
        }
        if (window.screen.width >= MOBILE_WIDTH_BREAKPOINT && window.screen.width < DESKTOP_WIDTH_BREAKPOINT) {
            setIsMobile(false);
            setIsTablet(true);
            setIsDesktop(false);
            return;
        }
        if (window.screen.width >= DESKTOP_WIDTH_BREAKPOINT) {
            setIsMobile(false);
            setIsTablet(false);
            setIsDesktop(true);
            return;
        }
    }, [
        width
    ]);
    return {
        isMobile,
        isTablet,
        isDesktop
    };
};


/***/ })

};
;