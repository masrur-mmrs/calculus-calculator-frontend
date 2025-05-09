(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(main)_derivative__components_DerivativeCalculator_tsx_8d539016._.js", {

"[project]/src/app/(main)/derivative/_components/DerivativeCalculator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../Display'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../KeyboardComponents/DerivativeKeyboard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/inputTexSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/resultTexSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// import { usePathname } from 'next/navigation';
const DerivativeCalculator = ()=>{
    _s();
    const { setAnswerToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerToggleContext"])();
    const inputTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "DerivativeCalculator.useSelector[inputTex]": (state)=>state.inputTex.value
    }["DerivativeCalculator.useSelector[inputTex]"]);
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "DerivativeCalculator.useSelector[index]": (state)=>state.index.currentIndex
    }["DerivativeCalculator.useSelector[index]"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    // const operation = usePathname().split("/").pop();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DerivativeCalculator.useEffect": ()=>{
            setAnswerToggle(false);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResultTex"])());
        }
    }["DerivativeCalculator.useEffect"], [
        inputTex,
        dispatch,
        setAnswerToggle
    ]);
    // useEffect(() => {
    //   dispatch(clearResultTex())
    //   setAnswerToggle(false)
    // }, [operation, dispatch, setAnswerToggle]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DerivativeCalculator.useEffect": ()=>{
            const cleanedInputTex = inputTex.replace("|", "");
            const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInputTex"])(newInputTex));
        }
    }["DerivativeCalculator.useEffect"], [
        index,
        dispatch
    ]);
    //   event.preventDefault();
    //   setAnswerToggle(true);
    //   if (!inputTex || !operation || !wrt) {
    //     window.alert("Input missing")
    //     console.error("Invalid input");
    //     return;
    //   }
    //   const eqn = inputTex.replace("|", "").replaceAll("π", "\\pi").replaceAll("θ", "\\theta");
    //   switch (operation) {
    //     case "derivative":
    //       const derivative = await calculateDerivative(eqn, wrt);
    //       setResultTex(derivative.result);
    //       break;
    //     case "integral":
    //       console.log(eqn)
    //       const integral = await calculateIntegral(eqn, wrt);
    //       setResultTex(integral.result);
    //       break;
    //     default:
    //       console.error("Invalid operation");
    //   }
    // };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-fit sm:w-full mx-4 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-4 w-full sm:w-fit",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Display, {}, void 0, false, {
                    fileName: "[project]/src/app/(main)/derivative/_components/DerivativeCalculator.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DerivativeKeyboard, {}, void 0, false, {
                    fileName: "[project]/src/app/(main)/derivative/_components/DerivativeCalculator.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/derivative/_components/DerivativeCalculator.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/derivative/_components/DerivativeCalculator.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
_s(DerivativeCalculator, "BSzHo6qJGLTgbFsUAs915rc2v60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerToggleContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = DerivativeCalculator;
const __TURBOPACK__default__export__ = DerivativeCalculator;
var _c;
__turbopack_context__.k.register(_c, "DerivativeCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28main%29_derivative__components_DerivativeCalculator_tsx_8d539016._.js.map