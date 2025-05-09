module.exports = {

"[project]/src/components/Loader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-2 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 rounded-full bg-white animate-bounce"
            }, void 0, false, {
                fileName: "[project]/src/components/Loader.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"
            }, void 0, false, {
                fileName: "[project]/src/components/Loader.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"
            }, void 0, false, {
                fileName: "[project]/src/components/Loader.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Loader.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Loader;
}}),
"[project]/src/app/utils/helpers.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "findMatchingCurlyBrace": (()=>findMatchingCurlyBrace),
    "findMatchingParenthesis": (()=>findMatchingParenthesis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const findMatchingCurlyBrace = (inputString, index)=>{
    let braceCount = 1;
    index--;
    while(braceCount > 0){
        if (inputString.charAt(index) === "{") {
            braceCount--;
            index--;
        } else if (inputString.charAt(index) === "}") {
            braceCount++;
            index--;
        } else {
            index--;
        }
    }
    return index;
};
const findMatchingParenthesis = (inputString, index)=>{
    let braceCount = 1;
    index--;
    while(braceCount > 0 && index >= 0 && index < inputString.length){
        if (inputString.charAt(index) === "(") {
            braceCount--;
            index--;
        } else if (inputString.charAt(index) === ")") {
            braceCount++;
            index--;
        } else {
            index--;
        }
    }
    return index;
};
}}),
"[project]/src/app/(main)/integral/_components/BoundSelector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/boundSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/helpers.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const BoundSelector = ({ bound })=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { answerToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnswerToggleContext"])();
    const boundValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.bound.value);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelectionChange = (event)=>{
        if (event.target.value === "num") {
            setShow(true);
        } else {
            setShow(false);
            if (bound === "upper") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUpperBound"])(event.target.value));
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLowerBound"])(event.target.value));
            }
        }
    };
    const handleInputChange = (event)=>{
        if (bound === "upper") {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUpperBound"])(event.target.value));
        } else {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLowerBound"])(event.target.value));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-w-min text-sm z-0 bg-transparent", !answerToggle ? "shadow-[1px_2px_3px_-1px_rgba(255,255,255,0.75)]" : "", bound === "lower" ? "transform -translate-x-5" : "-translate-y-1.5"),
        children: [
            !show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: bound,
                value: bound === "upper" ? boundValue.upperBound : boundValue.lowerBound,
                onChange: handleSelectionChange,
                className: "h-7 w-7 p-1.5 ml-0.5 font-mono text-sm appearance-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        "aria-disabled": true,
                        defaultChecked: true,
                        children: "⌄"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "0",
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "\\infty",
                        children: "∞"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "-\\infty",
                        children: "-∞"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "e",
                        children: "e"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "\\pi",
                        children: "π"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "num",
                        children: "✎"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                lineNumber: 45,
                columnNumber: 21
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShow(false);
                            dispatch(bound === "upper" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUpperBound"])("") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$boundSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLowerBound"])(""));
                        },
                        className: "max-h-min max-w-min",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "0",
                        onChange: handleInputChange,
                        className: "m-1.5 w-10 text-center rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
                lineNumber: 61,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/integral/_components/BoundSelector.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = BoundSelector;
}}),
"[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/elements.mjs [app-ssr] (ecmascript) <export MotionDiv as div>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-latex/build/latex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$BoundSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/integral/_components/BoundSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const displayHeader = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    overflow: 'hidden',
    position: 'absolute',
    translate: '0rem -2.5rem'
};
const IntegralDisplay = ()=>{
    const { answerToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnswerToggleContext"])();
    const displayTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.inputTex.value);
    const resultTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.resultTex.value);
    const wrt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.wrt.value);
    const bound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.bound.value);
    const previewPrefix = `\\int`;
    const answerSuffix = bound.upperBound !== "" && bound.lowerBound !== "" ? "" : ` + c`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-8 bg-[#00c4eb] text-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: true,
                    children: !answerToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -5
                        },
                        style: displayHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: " Preview "
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    children: answerToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                        initial: {
                            opacity: 0,
                            y: 0
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        exit: {
                            opacity: 0,
                            y: -5
                        },
                        style: displayHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Answer"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden py-3 px-2 bg-[#3288d9] dark:bg-gray-900 rounded-md text-2xl min-w-[100%] sm:min-w-md tracking-wide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl flex flex-row items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-5xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                children: `$${previewPrefix}$`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                                lineNumber: 60,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$BoundSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    bound: "upper"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$BoundSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    bound: "lower"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                            lineNumber: 62,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl pb-1",
                                    children: "("
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    displayMode: true,
                                    children: `$${displayTex}$`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                    lineNumber: 73,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl pb-1",
                                    children: ")"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl mr-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: `$d${wrt}$`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        answerToggle && resultTex === "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                            lineNumber: 79,
                            columnNumber: 50
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: resultTex !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0
                                },
                                className: "w-full mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: `$=${resultTex}$`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: `$${answerSuffix}$`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = IntegralDisplay;
}}),
"[project]/src/app/(main)/integral/_components/IntegralOptions.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$wrtSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/wrtSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
;
;
const IntegralOptions = ()=>{
    const wrt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.wrt.value);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-min m-1 justify-center mt-5 mx-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "wrt",
                    className: "block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal",
                    children: "WRT"
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "wrt",
                    value: wrt,
                    onChange: (event)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$wrtSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setWrt"])(event.target.value)),
                    className: "h-min w-min p-1.5 ml-0.5 font-mono text-md italic",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "x",
                            defaultChecked: true,
                            children: "x"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "y",
                            children: "y"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "z",
                            children: "z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "\\theta",
                            children: "θ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/integral/_components/IntegralOptions.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = IntegralOptions;
}}),
"[project]/src/app/utils/handler.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleBackSpace": (()=>handleBackSpace),
    "handleClear": (()=>handleClear),
    "handleNext": (()=>handleNext),
    "handleOnKeyClick": (()=>handleOnKeyClick),
    "handlePrev": (()=>handlePrev)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/indexSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/cursorSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/inputTexSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/helpers.ts [app-ssr] (ecmascript)");
;
;
;
;
const handleNext = (inputTex, index, dispatch)=>{
    if (inputTex.substring(index, index + 3) === "|\\%") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(2));
        return;
    }
    if (inputTex.substring(index, index + 7) === "|^\\circ") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(6));
        return;
    }
    if (inputTex.substring(index, index + 21) === "|\\operatorname{atan}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
        return;
    }
    if (inputTex.substring(index, index + 21) === "|\\operatorname{acos}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
        return;
    }
    if (inputTex.substring(index, index + 21) === "|\\operatorname{asin}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
        return;
    }
    if (inputTex.substring(index, index + 11) === "|\\log_{10}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(10));
        return;
    }
    if (inputTex.substring(index, index + 9) === "|~\\times~") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(7));
    }
    if (inputTex.substring(index, index + 6) === "|\\log(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
    }
    if (inputTex.substring(index, index + 6) === "|\\sin(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
    }
    if (inputTex.substring(index, index + 6) === "|\\cos(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
    }
    if (inputTex.substring(index, index + 6) === "|\\tan(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
    }
    if (inputTex.substring(index, index + 5) === "|\\ln(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(4));
    }
    if (inputTex.substring(index, index + 3) === "|^{") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(1));
    }
    if (inputTex.substring(index, index + 3) === "|~}") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(2));
    }
    if (inputTex.substring(index, index + 3) === "|}{") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(2));
        return;
    }
    if (inputTex.substring(index, index + 2) === "|}") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(1));
        return;
    }
    if (inputTex.substring(index, index + 2) === "|\\") {
        const nextBraceIndex = inputTex.indexOf("{", index);
        if (nextBraceIndex !== -1) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(nextBraceIndex - index));
        }
        return;
    }
    if (index < inputTex.length - 1) {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(1));
    }
};
const handlePrev = (inputTex, index, dispatch)=>{
    if (inputTex.substring(index - 2, index) === "\\%") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(2));
        return;
    }
    if (inputTex.substring(index - 6, index) === "^\\circ") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(6));
        return;
    }
    if (inputTex.substring(index - 20, index) === "\\operatorname{asin}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(20));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(20));
        return;
    }
    if (inputTex.substring(index - 21, index) === "\\operatorname{acos}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(20));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(20));
        return;
    }
    if (inputTex.substring(index - 21, index) === "\\operatorname{atan}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(20));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(20));
        return;
    }
    if (inputTex.substring(index - 10, index) === "\\log_{10}(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(9));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(4));
    }
    if (inputTex.substring(index - 8, index) === "~\\times~") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(7));
    }
    if (inputTex.substring(index - 6, index) === "\\frac{") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(2));
    }
    if (inputTex.substring(index - 6, index) === "\\sqrt{") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
    }
    if (inputTex.substring(index - 5, index) === "\\log(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
    }
    if (inputTex.substring(index - 5, index) === "\\sin(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
    }
    if (inputTex.substring(index - 5, index) === "\\cos(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
    }
    if (inputTex.substring(index - 5, index) === "\\tan(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(4));
    }
    if (inputTex.substring(index - 4, index) === "\\ln(") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(3));
    }
    if (inputTex.substring(index - 1, index) === "{") {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(1));
    }
    if (index > 0) {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(1));
    }
};
const handleClear = (dispatch)=>{
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInputTex"])());
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(0));
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCursorIndex"])(0));
};
const handleBackSpace = (inputTex, index, dispatch)=>{
    if (inputTex.substring(index - 8, index) === "~\\times~") {
        const newTex = inputTex.substring(0, index - 8) + inputTex.substring(index);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(8));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
        return;
    }
    if (inputTex.charAt(index - 1) === "}") {
        const matchedBraceIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findMatchingCurlyBrace"])(inputTex, index - 1);
        if (inputTex.substring(matchedBraceIndex - 4, matchedBraceIndex + 1) === "\\sqrt") {
            const newTex = inputTex.substring(0, matchedBraceIndex - 4) + inputTex.substring(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(matchedBraceIndex - 4));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
            return;
        }
        if (inputTex.charAt(matchedBraceIndex) === "^") {
            const newTex = inputTex.substring(0, matchedBraceIndex) + inputTex.substring(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(matchedBraceIndex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
            return;
        }
        if (inputTex.charAt(matchedBraceIndex) === "}") {
            const secondMatchedBraceIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findMatchingCurlyBrace"])(inputTex, matchedBraceIndex);
            if (inputTex.substring(secondMatchedBraceIndex - 4, secondMatchedBraceIndex + 1) === "\\frac") {
                const newTex = inputTex.substring(0, secondMatchedBraceIndex - 4) + inputTex.substring(index);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(secondMatchedBraceIndex - 4));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
                return;
            }
        }
    }
    if (inputTex.charAt(index - 1) === ")") {
        const matchedParenthesisIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findMatchingParenthesis"])(inputTex, index - 1);
        const eighteenLetterMatch = inputTex.substring(matchedParenthesisIndex - 18, matchedParenthesisIndex + 1);
        if (eighteenLetterMatch === "\\operatorname{atan}" || eighteenLetterMatch === "\\operatorname{acos}" || eighteenLetterMatch === "\\operatorname{asin}") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex - 18) + inputTex.substring(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(matchedParenthesisIndex - 18));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
            return;
        }
        const fourLetterMatch = inputTex.substring(matchedParenthesisIndex - 3, matchedParenthesisIndex + 1);
        if (fourLetterMatch === "\\log" || fourLetterMatch == "\\tan" || fourLetterMatch === "\\cos" || fourLetterMatch === "\\sin") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex - 3) + inputTex.substring(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(matchedParenthesisIndex - 3));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(4));
            return;
        }
        if (inputTex.substring(matchedParenthesisIndex - 2, matchedParenthesisIndex + 1) === "\\ln") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex - 2) + inputTex.substring(index);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(matchedParenthesisIndex - 2));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(3));
            return;
        }
    }
    if (inputTex.charAt(index - 1) === "%") {
        console.log("Inside %");
        const newTex = inputTex.substring(0, index - 2) + inputTex.substring(index);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(2));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
        return;
    }
    const regex = /[0-9exyzπθ+\-()]+/g;
    if (regex.test(inputTex.charAt(index - 1))) {
        const newTex = inputTex.substring(0, index - 1) + inputTex.substring(index);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementIndex"])(1));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementCursorIndex"])(1));
        return;
    }
};
const handleOnKeyClick = (inputTex, index, dispatch, children, fetchResult)=>{
    // console.log(inputTex);
    switch(children.toString()){
        case "=":
            if (fetchResult) fetchResult();
            break;
        case "\\frac{[~]}{[~]}":
        case "\\div":
            const regex = /[0-9xyzθ]+/g;
            const matches = inputTex.slice(0, index).match(regex);
            if (inputTex.charAt(index - 1) === ")") {
                const matchingParenthesis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findMatchingParenthesis"])(inputTex, index - 1);
                const twoLetterFunction = inputTex.substring(matchingParenthesis - 2, matchingParenthesis + 1);
                const threeLetterFunction = inputTex.substring(matchingParenthesis - 3, matchingParenthesis + 1);
                const fourLetterOperatorFunction = inputTex.substring(matchingParenthesis - 18, matchingParenthesis + 1);
                console.log(inputTex.substring(matchingParenthesis - 18, matchingParenthesis + 1));
                if (twoLetterFunction === "\\ln") {
                    const newTex = inputTex.substring(0, matchingParenthesis - 2) + inputTex.substring(index);
                    console.log("New Tex: ", newTex);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    const insideTex = inputTex.substring(matchingParenthesis - 2, index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: matchingParenthesis - 2,
                        tex: `\\frac{${insideTex}}{}`
                    }));
                    console.log(`\\frac{${insideTex}}{`.length);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(`\\frac{${insideTex}}{`.length + matchingParenthesis - 2));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                } else if (threeLetterFunction === "\\log" || threeLetterFunction === "\\sin" || threeLetterFunction === "\\cos" || threeLetterFunction === "\\tan") {
                    const newTex = inputTex.substring(0, matchingParenthesis - 3) + inputTex.substring(index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    const insideTex = inputTex.substring(matchingParenthesis - 3, index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: matchingParenthesis - 3,
                        tex: `\\frac{${insideTex}}{}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(`\\frac{${insideTex}}{`.length + matchingParenthesis - 3));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                } else if (fourLetterOperatorFunction === "\\operatorname{atan}" || fourLetterOperatorFunction === "\\operatorname{acos}" || fourLetterOperatorFunction === "\\operatorname{asin}") {
                    const newTex = inputTex.substring(0, matchingParenthesis - 18) + inputTex.substring(index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    const insideTex = inputTex.substring(matchingParenthesis - 18, index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: matchingParenthesis - 18,
                        tex: `\\frac{${insideTex}}{}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(`\\frac{${insideTex}}{`.length + matchingParenthesis - 18));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                } else {
                    const newTex = inputTex.substring(0, matchingParenthesis + 1) + inputTex.substring(index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    const insideTex = inputTex.substring(matchingParenthesis + 1, index);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: matchingParenthesis + 1,
                        tex: `\\frac{${insideTex}}{}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(`\\frac{${insideTex}}{`.length + matchingParenthesis + 1));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                }
            } else if (matches) {
                const lastMatch = matches[matches.length - 1];
                const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: lastMatchIndex,
                        tex: `\\frac{${lastMatch}}{}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(lastMatchIndex + `\\frac{${lastMatch}}{`.length));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                    break;
                }
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                    index: index,
                    tex: "\\frac{}{}"
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(6));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
            }
            break;
        case "[~]^\\circ":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "^\\circ"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(6));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3));
            break;
        case "[~]^{2}":
            const squaredRegex = /[0-9exyzθπ]+/g;
            const squaredMatches = inputTex.slice(0, index).match(squaredRegex);
            if (squaredMatches) {
                const lastMatch = squaredMatches[squaredMatches.length - 1];
                const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: lastMatchIndex,
                        tex: `${lastMatch}^{2}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(lastMatchIndex + `${lastMatch}^{2}`.length));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3));
                    break;
                }
            }
            if (inputTex.charAt(index - 1) === ")" || inputTex.charAt(index - 1) === "}") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                    index: index,
                    tex: "^{2}"
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(3));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3));
            }
            break;
        case "[~]^{[~]}":
            const boxedRegex = /[0-9exyzθπ]+/g;
            const boxedMatches = inputTex.slice(0, index).match(boxedRegex);
            if (boxedMatches) {
                const lastMatch = boxedMatches[boxedMatches.length - 1];
                const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: lastMatchIndex,
                        tex: `${lastMatch}^{}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(lastMatchIndex + `${lastMatch}^{`.length));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
                    break;
                }
            }
            if (inputTex.charAt(index - 1) === ")" || inputTex.charAt(index - 1) === "}") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                    index: index,
                    tex: "^{~}"
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(3));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3));
            }
            break;
        case "[~]^{-1}":
            const boxedInverseRegex = /[0-9exyzθπ]+/g;
            const boxedInverseMatches = inputTex.slice(0, index).match(boxedInverseRegex);
            if (boxedInverseMatches) {
                const lastMatch = boxedInverseMatches[boxedInverseMatches.length - 1];
                const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newTex));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                        index: lastMatchIndex,
                        tex: `${lastMatch}^{-1}`
                    }));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentIndex"])(lastMatchIndex + `${lastMatch}^{-1}`.length));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3));
                    break;
                }
            }
            if (inputTex.charAt(index - 1) === ")" || inputTex.charAt(index - 1) === "}") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                    index: index,
                    tex: "^{-1}"
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(5));
            }
            break;
        case "\\sqrt{~}":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\sqrt{}"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(6));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
            break;
        case "\\ln(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\ln()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(4));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(4));
            break;
        case "\\log{(~)}":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\log()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(5));
            break;
        case "\\sin(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\sin()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(5));
            break;
        case "\\cos(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\cos()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(5));
            break;
        case "\\tan(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\tan()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(5));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(5));
            break;
        case "\\operatorname{asin}(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\operatorname{asin}()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(20));
            break;
        case "\\operatorname{acos}(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\operatorname{acos}()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(20));
            break;
        case "\\operatorname{atan}(~)":
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: "\\operatorname{atan}()"
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(20));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(20));
            break;
        default:
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTex"])({
                index: index,
                tex: children.toString()
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$indexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementIndex"])(children.toString().length));
            dispatch(children.toString().length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(3) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cursorSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCursorIndex"])(1));
    }
};
}}),
"[project]/src/components/KeyboardComponents/KeyboardButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-latex/build/latex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/handler.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/helpers.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const KeyboardButton = ({ children, specieal = false, fetchResult })=>{
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.index.currentIndex);
    const inputTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.inputTex.value);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-2.5 inline-flex text-center justify-center items-center content-center text-lg min-w-16 rounded-lg active:scale-95 sm:hover:scale-105 transform ease-in-out duration-150", specieal ? "text-white font-semibold bg-white-mode-blue dark:bg-blue-700" : "font-mono border-2 border-white-mode-blue dark:border-muted-teal"),
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleOnKeyClick"])(inputTex, index, dispatch, children, fetchResult),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$latex$2f$build$2f$latex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: `$${children}$`
        }, void 0, false, {
            fileName: "[project]/src/components/KeyboardComponents/KeyboardButton.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/KeyboardComponents/KeyboardButton.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = KeyboardButton;
}}),
"[project]/src/components/KeyboardComponents/NavigationKeys.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/delete.js [app-ssr] (ecmascript) <export default as Delete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/handler.ts [app-ssr] (ecmascript)");
;
;
;
;
const NavigationKeys = ({ optionsChildren })=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.index.currentIndex);
    const inputTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.inputTex.value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-row justify-between z-auto",
        children: [
            optionsChildren,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 mt-2 max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-4 sm:px-6 rounded-lg font-bold text-2xl font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleClear"])(dispatch),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "C"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleBackSpace"])(inputTex, index, dispatch),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"], {
                            className: "h-10 w-10 sm:h-11 sm:w-11"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePrev"])(inputTex, index, dispatch),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-10 w-10 sm:h-11 sm:w-11"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleNext"])(inputTex, index, dispatch),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-10 w-10 sm:h-11 sm:w-11"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KeyboardComponents/NavigationKeys.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = NavigationKeys;
}}),
"[project]/src/app/api/calculate.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "basicEvaluate": (()=>basicEvaluate),
    "calculateDerivative": (()=>calculateDerivative),
    "calculateIntegral": (()=>calculateIntegral)
});
const BACKEND_URL = ("TURBOPACK compile-time value", "http://192.168.1.105:8080") || "http://localhost:3001";
const basicEvaluate = async (expression)=>{
    console.log("Expression: ", expression);
    const res = await fetch(BACKEND_URL + "/basic", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            expression
        })
    });
    return res.json();
};
const calculateDerivative = async (expression, variable, orderOfDerivative)=>{
    const res = await fetch(BACKEND_URL + "/derivative", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            expression,
            variable,
            orderOfDerivative
        })
    });
    return res.json();
};
const calculateIntegral = async (expression, variable, bound)=>{
    const res = await fetch(BACKEND_URL + "/integral", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            expression,
            variable,
            bound
        })
    });
    return res.json();
};
}}),
"[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralOptions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/integral/_components/IntegralOptions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KeyboardComponents/KeyboardButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$NavigationKeys$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KeyboardComponents/NavigationKeys.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$calculate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/calculate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/resultTexSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/errorMessageSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/katex/dist/katex.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const IntegralKeyboard = ({})=>{
    const { setAnswerToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnswerToggleContext"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const inputTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.inputTex.value);
    const wrt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.wrt.value);
    const bound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.bound.value);
    const fetchResult = async ()=>{
        if (!bound.upperBound !== !bound.lowerBound) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setErrorMessage"])("Make sure to include both upper and lower bound"));
            return;
        }
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].renderToString(inputTex);
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setErrorMessage"])("Invalid expression"));
            console.error(error);
            return;
        }
        setAnswerToggle(true);
        const eqn = inputTex.replace("|", "").replaceAll("π", "\\pi").replaceAll("θ", "\\theta").replaceAll("\\operatorname{asin}", "\\arcsin").replaceAll("\\operatorname{acos}", "\\arccos").replaceAll("\\operatorname{atan}", "\\arctan");
        const integral = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$calculate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateIntegral"])(eqn, wrt, bound);
        const infinityPattern = /[o]\^{[0-9]*[02468]}/g;
        if (integral.result) {
            integral.result = integral.result.replace(infinityPattern, "\\infty");
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setResultTex"])(integral.result.replaceAll("\\log", "\\ln")));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$NavigationKeys$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                optionsChildren: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralOptions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                    lineNumber: 50,
                    columnNumber: 46
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 gap-2 mt-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "~\\times~"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "\\div"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "7"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "9"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "y"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "e"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "π"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "θ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "e^{x}"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "[~]^{[~]}"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "[~]^{-1}"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\sqrt{~}"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\ln(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\log{(~)}"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\sin(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\cos(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\tan(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\operatorname{asin}(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\operatorname{acos}(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "\\operatorname{atan}(~)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: "("
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        children: ")"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KeyboardComponents$2f$KeyboardButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        specieal: true,
                        fetchResult: fetchResult,
                        children: "="
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = IntegralKeyboard;
}}),
"[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/integral/_components/IntegralDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralKeyboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/integral/_components/IntegralKeyboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/inputTexSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/resultTexSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/errorMessageSlice.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const IntegralCalculator = ()=>{
    const { setAnswerToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnswerToggleContext"])();
    const inputTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.inputTex.value);
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.index.currentIndex);
    const bound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.bound.value);
    const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.errorMessage.value);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnswerToggle(false);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearErrorMessage"])());
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$resultTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearResultTex"])());
    }, [
        inputTex,
        dispatch,
        bound,
        setAnswerToggle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cleanedInputTex = inputTex.replace("|", "");
        const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$errorMessageSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearErrorMessage"])());
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$inputTexSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInputTex"])(newInputTex));
    }, [
        index,
        dispatch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-fit sm:w-full mx-4 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                className: "py-5 font-semibold text-3xl",
                children: "Integral"
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4 w-full sm:w-fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 font-mono font-extralight text-md",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$integral$2f$_components$2f$IntegralKeyboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/integral/_components/IntegralCalculator.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = IntegralCalculator;
}}),

};

//# sourceMappingURL=src_8e606fcf._.js.map