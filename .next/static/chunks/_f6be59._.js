(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f6be59._.js", {

"[project]/src/components/Loading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LoadingComponent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen bg-black bg-opacity-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/Loading.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Loading.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = LoadingComponent;
const __TURBOPACK__default__export__ = LoadingComponent;
var _c;
__turbopack_refresh__.register(_c, "LoadingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/videos.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cameraFeeds": (()=>cameraFeeds)
});
const cameraFeeds = [
    {
        id: 1,
        name: 'Cam 1',
        isActive: true,
        timestamp: '4p:11',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/furnite-2cf5f.appspot.com/o/images%2Fcam1.mp4?alt=media&token=b274993d-80b0-4c1e-b794-9f3d01f33bb9'
    },
    {
        id: 2,
        name: 'Cam 2',
        isActive: true,
        timestamp: '4p:41',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/furnite-2cf5f.appspot.com/o/images%2Fcam2.mp4?alt=media&token=663feeb5-a73c-4f48-a003-cdeba45bfa01'
    },
    {
        id: 3,
        name: 'Cam 3',
        isActive: true,
        timestamp: '4p:23',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/furnite-2cf5f.appspot.com/o/images%2Fcam3.mp4?alt=media&token=d8cc43c9-97e5-4cac-936f-0a3ada2be638'
    },
    {
        id: 4,
        name: 'Cam 4',
        isActive: true,
        timestamp: '4p:31',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/furnite-2cf5f.appspot.com/o/images%2Fcam4.mp4?alt=media&token=61e76333-2f1e-4497-a207-d01c92d4e3d8'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/camera/[cameraName]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/videos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$player$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const CameraPage = ()=>{
    _s();
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { cameraName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraPage.useEffect": ()=>{
            if (cameraName && typeof cameraName === 'string') {
                const cameraId = parseInt(cameraName);
                const camFind = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cameraFeeds"].filter({
                    "CameraPage.useEffect.camFind": (cam)=>cam.id === cameraId
                }["CameraPage.useEffect.camFind"]);
                if (camFind.length > 0) {
                    setCamera(camFind[0]);
                } else {
                    setCamera(null);
                }
            }
            setLoading(false);
        }
    }["CameraPage.useEffect"], [
        cameraName
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 bg-gray-900 text-white min-h-[90vh] rounded-xl shadow-lg",
        children: [
            camera && camera.videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[70vh] rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$player$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    url: camera.videoUrl,
                    playing: true,
                    controls: true,
                    width: "100%",
                    height: "100%",
                    className: "rounded-lg shadow-lg"
                }, void 0, false, {
                    fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4",
                children: "Không có video để hiển thị"
            }, void 0, false, {
                fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            camera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold mb-2",
                        children: "Thông tin chi tiết:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Tên: ",
                            camera.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Thời lượng: ",
                            camera.timestamp
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(CameraPage, "q22s2jfmflf9BMS5Y271TsjX0Mk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CameraPage;
const __TURBOPACK__default__export__ = CameraPage;
var _c;
__turbopack_refresh__.register(_c, "CameraPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/camera/[cameraName]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/load-script/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = function load(src, opts, cb) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    opts = opts || {};
    cb = cb || function() {};
    script.type = opts.type || 'text/javascript';
    script.charset = opts.charset || 'utf8';
    script.async = 'async' in opts ? !!opts.async : true;
    script.src = src;
    if (opts.attrs) {
        setAttributes(script, opts.attrs);
    }
    if (opts.text) {
        script.text = '' + opts.text;
    }
    var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
    onend(script, cb);
    // some good legacy browsers (firefox) fail the 'in' detection above
    // so as a fallback we always set onload
    // old IE will ignore this and new IE will set onload
    if (!script.onload) {
        stdOnEnd(script, cb);
    }
    head.appendChild(script);
};
function setAttributes(script, attrs) {
    for(var attr in attrs){
        script.setAttribute(attr, attrs[attr]);
    }
}
function stdOnEnd(script, cb) {
    script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
    };
    script.onerror = function() {
        // this.onload = null here is necessary
        // because even IE9 works not like others
        this.onerror = this.onload = null;
        cb(new Error('Failed to load ' + this.src), script);
    };
}
function ieOnEnd(script, cb) {
    script.onreadystatechange = function() {
        if (this.readyState != 'complete' && this.readyState != 'loaded') return;
        this.onreadystatechange = null;
        cb(null, script) // there is no way to catch loading errors in IE8
        ;
    };
}
}}),
"[project]/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}}),
"[project]/node_modules/react-player/lib/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var utils_exports = {};
__export(utils_exports, {
    callPlayer: ()=>callPlayer,
    getConfig: ()=>getConfig,
    getSDK: ()=>getSDK,
    isBlobUrl: ()=>isBlobUrl,
    isMediaStream: ()=>isMediaStream,
    lazy: ()=>lazy,
    omit: ()=>omit,
    parseEndTime: ()=>parseEndTime,
    parseStartTime: ()=>parseStartTime,
    queryString: ()=>queryString,
    randomString: ()=>randomString,
    supportsWebKitPresentationMode: ()=>supportsWebKitPresentationMode
});
module.exports = __toCommonJS(utils_exports);
var import_react = __toESM(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var import_load_script = __toESM(__turbopack_require__("[project]/node_modules/load-script/index.js [app-client] (ecmascript)"));
var import_deepmerge = __toESM(__turbopack_require__("[project]/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)"));
const lazy = (componentImportFn)=>import_react.default.lazy(async ()=>{
        const obj = await componentImportFn();
        return typeof obj.default === "function" ? obj : obj.default;
    });
const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
const MATCH_START_STAMP = /(\d+)(h|m|s)/g;
const MATCH_NUMERIC = /^\d+$/;
function parseTimeParam(url, pattern) {
    if (url instanceof Array) {
        return void 0;
    }
    const match = url.match(pattern);
    if (match) {
        const stamp = match[1];
        if (stamp.match(MATCH_START_STAMP)) {
            return parseTimeString(stamp);
        }
        if (MATCH_NUMERIC.test(stamp)) {
            return parseInt(stamp);
        }
    }
    return void 0;
}
function parseTimeString(stamp) {
    let seconds = 0;
    let array = MATCH_START_STAMP.exec(stamp);
    while(array !== null){
        const [, count, period] = array;
        if (period === "h") seconds += parseInt(count, 10) * 60 * 60;
        if (period === "m") seconds += parseInt(count, 10) * 60;
        if (period === "s") seconds += parseInt(count, 10);
        array = MATCH_START_STAMP.exec(stamp);
    }
    return seconds;
}
function parseStartTime(url) {
    return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
    return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
    return Math.random().toString(36).substr(2, 5);
}
function queryString(object) {
    return Object.keys(object).map((key)=>`${key}=${object[key]}`).join("&");
}
function getGlobal(key) {
    if (window[key]) {
        return window[key];
    }
    if (window.exports && window.exports[key]) {
        return window.exports[key];
    }
    if (window.module && window.module.exports && window.module.exports[key]) {
        return window.module.exports[key];
    }
    return null;
}
const requests = {};
const getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = ()=>true, fetchScript = import_load_script.default) {
    const existingGlobal = getGlobal(sdkGlobal);
    if (existingGlobal && isLoaded(existingGlobal)) {
        return Promise.resolve(existingGlobal);
    }
    return new Promise((resolve, reject)=>{
        if (requests[url]) {
            requests[url].push({
                resolve,
                reject
            });
            return;
        }
        requests[url] = [
            {
                resolve,
                reject
            }
        ];
        const onLoaded = (sdk)=>{
            requests[url].forEach((request)=>request.resolve(sdk));
        };
        if (sdkReady) {
            const previousOnReady = window[sdkReady];
            window[sdkReady] = function() {
                if (previousOnReady) previousOnReady();
                onLoaded(getGlobal(sdkGlobal));
            };
        }
        fetchScript(url, (err)=>{
            if (err) {
                requests[url].forEach((request)=>request.reject(err));
                requests[url] = null;
            } else if (!sdkReady) {
                onLoaded(getGlobal(sdkGlobal));
            }
        });
    });
});
function getConfig(props, defaultProps) {
    return (0, import_deepmerge.default)(defaultProps.config, props.config);
}
function omit(object, ...arrays) {
    const omitKeys = [].concat(...arrays);
    const output = {};
    const keys = Object.keys(object);
    for (const key of keys){
        if (omitKeys.indexOf(key) === -1) {
            output[key] = object[key];
        }
    }
    return output;
}
function callPlayer(method, ...args) {
    if (!this.player || !this.player[method]) {
        let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c \u2013 `;
        if (!this.player) {
            message += "The player was not available";
        } else if (!this.player[method]) {
            message += "The method was not available";
        }
        console.warn(message, "font-weight: bold", "");
        return null;
    }
    return this.player[method](...args);
}
function isMediaStream(url) {
    return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
function isBlobUrl(url) {
    return /^blob:/.test(url);
}
function supportsWebKitPresentationMode(video = document.createElement("video")) {
    const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
    return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
}
function enableStubOn(fn) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return fn;
}
}}),
"[project]/node_modules/react-player/lib/patterns.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var patterns_exports = {};
__export(patterns_exports, {
    AUDIO_EXTENSIONS: ()=>AUDIO_EXTENSIONS,
    DASH_EXTENSIONS: ()=>DASH_EXTENSIONS,
    FLV_EXTENSIONS: ()=>FLV_EXTENSIONS,
    HLS_EXTENSIONS: ()=>HLS_EXTENSIONS,
    MATCH_URL_DAILYMOTION: ()=>MATCH_URL_DAILYMOTION,
    MATCH_URL_FACEBOOK: ()=>MATCH_URL_FACEBOOK,
    MATCH_URL_FACEBOOK_WATCH: ()=>MATCH_URL_FACEBOOK_WATCH,
    MATCH_URL_KALTURA: ()=>MATCH_URL_KALTURA,
    MATCH_URL_MIXCLOUD: ()=>MATCH_URL_MIXCLOUD,
    MATCH_URL_MUX: ()=>MATCH_URL_MUX,
    MATCH_URL_SOUNDCLOUD: ()=>MATCH_URL_SOUNDCLOUD,
    MATCH_URL_STREAMABLE: ()=>MATCH_URL_STREAMABLE,
    MATCH_URL_TWITCH_CHANNEL: ()=>MATCH_URL_TWITCH_CHANNEL,
    MATCH_URL_TWITCH_VIDEO: ()=>MATCH_URL_TWITCH_VIDEO,
    MATCH_URL_VIDYARD: ()=>MATCH_URL_VIDYARD,
    MATCH_URL_VIMEO: ()=>MATCH_URL_VIMEO,
    MATCH_URL_WISTIA: ()=>MATCH_URL_WISTIA,
    MATCH_URL_YOUTUBE: ()=>MATCH_URL_YOUTUBE,
    VIDEO_EXTENSIONS: ()=>VIDEO_EXTENSIONS,
    canPlay: ()=>canPlay
});
module.exports = __toCommonJS(patterns_exports);
var import_utils = __turbopack_require__("[project]/node_modules/react-player/lib/utils.js [app-client] (ecmascript)");
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
const MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
const MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
const MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
const MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
const MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
const MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const FLV_EXTENSIONS = /\.(flv)($|\?)/i;
const canPlayFile = (url)=>{
    if (url instanceof Array) {
        for (const item of url){
            if (typeof item === "string" && canPlayFile(item)) {
                return true;
            }
            if (canPlayFile(item.src)) {
                return true;
            }
        }
        return false;
    }
    if ((0, import_utils.isMediaStream)(url) || (0, import_utils.isBlobUrl)(url)) {
        return true;
    }
    return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};
const canPlay = {
    youtube: (url)=>{
        if (url instanceof Array) {
            return url.every((item)=>MATCH_URL_YOUTUBE.test(item));
        }
        return MATCH_URL_YOUTUBE.test(url);
    },
    soundcloud: (url)=>MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
    vimeo: (url)=>MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
    mux: (url)=>MATCH_URL_MUX.test(url),
    facebook: (url)=>MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url),
    streamable: (url)=>MATCH_URL_STREAMABLE.test(url),
    wistia: (url)=>MATCH_URL_WISTIA.test(url),
    twitch: (url)=>MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
    dailymotion: (url)=>MATCH_URL_DAILYMOTION.test(url),
    mixcloud: (url)=>MATCH_URL_MIXCLOUD.test(url),
    vidyard: (url)=>MATCH_URL_VIDYARD.test(url),
    kaltura: (url)=>MATCH_URL_KALTURA.test(url),
    file: canPlayFile
};
}}),
"[project]/node_modules/react-player/lib/players/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var players_exports = {};
__export(players_exports, {
    default: ()=>players_default
});
module.exports = __toCommonJS(players_exports);
var import_utils = __turbopack_require__("[project]/node_modules/react-player/lib/utils.js [app-client] (ecmascript)");
var import_patterns = __turbopack_require__("[project]/node_modules/react-player/lib/patterns.js [app-client] (ecmascript)");
var players_default = [
    {
        key: "youtube",
        name: "YouTube",
        canPlay: import_patterns.canPlay.youtube,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/YouTube.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "soundcloud",
        name: "SoundCloud",
        canPlay: import_patterns.canPlay.soundcloud,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/SoundCloud.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "vimeo",
        name: "Vimeo",
        canPlay: import_patterns.canPlay.vimeo,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Vimeo.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "mux",
        name: "Mux",
        canPlay: import_patterns.canPlay.mux,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Mux.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "facebook",
        name: "Facebook",
        canPlay: import_patterns.canPlay.facebook,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Facebook.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "streamable",
        name: "Streamable",
        canPlay: import_patterns.canPlay.streamable,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Streamable.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "wistia",
        name: "Wistia",
        canPlay: import_patterns.canPlay.wistia,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Wistia.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "twitch",
        name: "Twitch",
        canPlay: import_patterns.canPlay.twitch,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Twitch.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "dailymotion",
        name: "DailyMotion",
        canPlay: import_patterns.canPlay.dailymotion,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/DailyMotion.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "mixcloud",
        name: "Mixcloud",
        canPlay: import_patterns.canPlay.mixcloud,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Mixcloud.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "vidyard",
        name: "Vidyard",
        canPlay: import_patterns.canPlay.vidyard,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Vidyard.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "kaltura",
        name: "Kaltura",
        canPlay: import_patterns.canPlay.kaltura,
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/Kaltura.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    },
    {
        key: "file",
        name: "FilePlayer",
        canPlay: import_patterns.canPlay.file,
        canEnablePIP: (url)=>{
            return import_patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, import_utils.supportsWebKitPresentationMode)()) && !import_patterns.AUDIO_EXTENSIONS.test(url);
        },
        lazyPlayer: (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/players/FilePlayer.js [app-client] (ecmascript, async loader)")(__turbopack_import__))
    }
];
}}),
"[project]/node_modules/memoize-one/dist/memoize-one.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}
const __TURBOPACK__default__export__ = memoizeOne;
}}),
"[project]/node_modules/react-fast-compare/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */ var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.3
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        // START: Modifications:
        // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
        //    to co-exist with es5.
        // 2. Replace `for of` with es5 compliant iteration using `for`.
        //    Basically, take:
        //
        //    ```js
        //    for (i of a.entries())
        //      if (!b.has(i[0])) return false;
        //    ```
        //
        //    ... and convert to:
        //
        //    ```js
        //    it = a.entries();
        //    while (!(i = it.next()).done)
        //      if (!b.has(i.value[0])) return false;
        //    ```
        //
        //    **Note**: `i` access switches to `i.value`.
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!equal(i.value[1], b.get(i.value[0]))) return false;
            return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            return true;
        }
        // END: Modifications
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        // START: Modifications:
        // Apply guards for `Object.create(null)` handling. See:
        // - https://github.com/FormidableLabs/react-fast-compare/issues/64
        // - https://github.com/epoberezkin/fast-deep-equal/issues/49
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
        // END: Modifications
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        // END: fast-deep-equal
        // START: react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element) return false;
        // custom handling for React/Preact
        for(i = length; i-- !== 0;){
            if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                continue;
            }
            // all other properties should be traversed as usual
            if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        // END: react-fast-compare
        // START: fast-deep-equal
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function isEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if ((error.message || '').match(/stack|recursion/i)) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('react-fast-compare cannot handle circular refs');
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};
}}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}}),
"[project]/node_modules/react-is/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}}),
"[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_require__("[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_require__("[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : ("TURBOPACK unreachable", undefined);
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}}),
"[project]/node_modules/prop-types/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_require__("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else {
    "TURBOPACK unreachable";
}
}}),
"[project]/node_modules/react-player/lib/props.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var props_exports = {};
__export(props_exports, {
    defaultProps: ()=>defaultProps,
    propTypes: ()=>propTypes
});
module.exports = __toCommonJS(props_exports);
var import_prop_types = __toESM(__turbopack_require__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)"));
const { string, bool, number, array, oneOfType, shape, object, func, node } = import_prop_types.default;
const propTypes = {
    url: oneOfType([
        string,
        array,
        object
    ]),
    playing: bool,
    loop: bool,
    controls: bool,
    volume: number,
    muted: bool,
    playbackRate: number,
    width: oneOfType([
        string,
        number
    ]),
    height: oneOfType([
        string,
        number
    ]),
    style: object,
    progressInterval: number,
    playsinline: bool,
    pip: bool,
    stopOnUnmount: bool,
    light: oneOfType([
        bool,
        string,
        object
    ]),
    playIcon: node,
    previewTabIndex: number,
    previewAriaLabel: string,
    fallback: node,
    oEmbedUrl: string,
    wrapper: oneOfType([
        string,
        func,
        shape({
            render: func.isRequired
        })
    ]),
    config: shape({
        soundcloud: shape({
            options: object
        }),
        youtube: shape({
            playerVars: object,
            embedOptions: object,
            onUnstarted: func
        }),
        facebook: shape({
            appId: string,
            version: string,
            playerId: string,
            attributes: object
        }),
        dailymotion: shape({
            params: object
        }),
        vimeo: shape({
            playerOptions: object,
            title: string
        }),
        mux: shape({
            attributes: object,
            version: string
        }),
        file: shape({
            attributes: object,
            tracks: array,
            forceVideo: bool,
            forceAudio: bool,
            forceHLS: bool,
            forceSafariHLS: bool,
            forceDisableHls: bool,
            forceDASH: bool,
            forceFLV: bool,
            hlsOptions: object,
            hlsVersion: string,
            dashVersion: string,
            flvVersion: string
        }),
        wistia: shape({
            options: object,
            playerId: string,
            customControls: array
        }),
        mixcloud: shape({
            options: object
        }),
        twitch: shape({
            options: object,
            playerId: string
        }),
        vidyard: shape({
            options: object
        })
    }),
    onReady: func,
    onStart: func,
    onPlay: func,
    onPause: func,
    onBuffer: func,
    onBufferEnd: func,
    onEnded: func,
    onError: func,
    onDuration: func,
    onSeek: func,
    onPlaybackRateChange: func,
    onPlaybackQualityChange: func,
    onProgress: func,
    onClickPreview: func,
    onEnablePIP: func,
    onDisablePIP: func
};
const noop = ()=>{};
const defaultProps = {
    playing: false,
    loop: false,
    controls: false,
    volume: null,
    muted: false,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: false,
    pip: false,
    stopOnUnmount: true,
    light: false,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    previewAriaLabel: "",
    oEmbedUrl: "https://noembed.com/embed?url={url}",
    config: {
        soundcloud: {
            options: {
                visual: true,
                // Undocumented, but makes player fill container and look better
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_comments: false,
                show_playcount: false
            }
        },
        youtube: {
            playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1
            },
            embedOptions: {},
            onUnstarted: noop
        },
        facebook: {
            appId: "1309697205772819",
            version: "v3.3",
            playerId: null,
            attributes: {}
        },
        dailymotion: {
            params: {
                api: 1,
                "endscreen-enable": false
            }
        },
        vimeo: {
            playerOptions: {
                autopause: false,
                byline: false,
                portrait: false,
                title: false
            },
            title: null
        },
        mux: {
            attributes: {},
            version: "2"
        },
        file: {
            attributes: {},
            tracks: [],
            forceVideo: false,
            forceAudio: false,
            forceHLS: false,
            forceDASH: false,
            forceFLV: false,
            hlsOptions: {},
            hlsVersion: "1.1.4",
            dashVersion: "3.1.3",
            flvVersion: "1.5.0",
            forceDisableHls: false
        },
        wistia: {
            options: {},
            playerId: null,
            customControls: null
        },
        mixcloud: {
            options: {
                hide_cover: 1
            }
        },
        twitch: {
            options: {},
            playerId: null
        },
        vidyard: {
            options: {}
        }
    },
    onReady: noop,
    onStart: noop,
    onPlay: noop,
    onPause: noop,
    onBuffer: noop,
    onBufferEnd: noop,
    onEnded: noop,
    onError: noop,
    onDuration: noop,
    onSeek: noop,
    onPlaybackRateChange: noop,
    onPlaybackQualityChange: noop,
    onProgress: noop,
    onClickPreview: noop,
    onEnablePIP: noop,
    onDisablePIP: noop
};
}}),
"[project]/node_modules/react-player/lib/Player.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var Player_exports = {};
__export(Player_exports, {
    default: ()=>Player
});
module.exports = __toCommonJS(Player_exports);
var import_react = __toESM(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var import_react_fast_compare = __toESM(__turbopack_require__("[project]/node_modules/react-fast-compare/index.js [app-client] (ecmascript)"));
var import_props = __turbopack_require__("[project]/node_modules/react-player/lib/props.js [app-client] (ecmascript)");
var import_utils = __turbopack_require__("[project]/node_modules/react-player/lib/utils.js [app-client] (ecmascript)");
const SEEK_ON_PLAY_EXPIRY = 5e3;
class Player extends import_react.Component {
    constructor(){
        super(...arguments);
        __publicField(this, "mounted", false);
        __publicField(this, "isReady", false);
        __publicField(this, "isPlaying", false);
        // Track playing state internally to prevent bugs
        __publicField(this, "isLoading", true);
        // Use isLoading to prevent onPause when switching URL
        __publicField(this, "loadOnReady", null);
        __publicField(this, "startOnPlay", true);
        __publicField(this, "seekOnPlay", null);
        __publicField(this, "onDurationCalled", false);
        __publicField(this, "handlePlayerMount", (player)=>{
            if (this.player) {
                this.progress();
                return;
            }
            this.player = player;
            this.player.load(this.props.url);
            this.progress();
        });
        __publicField(this, "getInternalPlayer", (key)=>{
            if (!this.player) return null;
            return this.player[key];
        });
        __publicField(this, "progress", ()=>{
            if (this.props.url && this.player && this.isReady) {
                const playedSeconds = this.getCurrentTime() || 0;
                const loadedSeconds = this.getSecondsLoaded();
                const duration = this.getDuration();
                if (duration) {
                    const progress = {
                        playedSeconds,
                        played: playedSeconds / duration
                    };
                    if (loadedSeconds !== null) {
                        progress.loadedSeconds = loadedSeconds;
                        progress.loaded = loadedSeconds / duration;
                    }
                    if (progress.playedSeconds !== this.prevPlayed || progress.loadedSeconds !== this.prevLoaded) {
                        this.props.onProgress(progress);
                    }
                    this.prevPlayed = progress.playedSeconds;
                    this.prevLoaded = progress.loadedSeconds;
                }
            }
            this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
        });
        __publicField(this, "handleReady", ()=>{
            if (!this.mounted) return;
            this.isReady = true;
            this.isLoading = false;
            const { onReady, playing, volume, muted } = this.props;
            onReady();
            if (!muted && volume !== null) {
                this.player.setVolume(volume);
            }
            if (this.loadOnReady) {
                this.player.load(this.loadOnReady, true);
                this.loadOnReady = null;
            } else if (playing) {
                this.player.play();
            }
            this.handleDurationCheck();
        });
        __publicField(this, "handlePlay", ()=>{
            this.isPlaying = true;
            this.isLoading = false;
            const { onStart, onPlay, playbackRate } = this.props;
            if (this.startOnPlay) {
                if (this.player.setPlaybackRate && playbackRate !== 1) {
                    this.player.setPlaybackRate(playbackRate);
                }
                onStart();
                this.startOnPlay = false;
            }
            onPlay();
            if (this.seekOnPlay) {
                this.seekTo(this.seekOnPlay);
                this.seekOnPlay = null;
            }
            this.handleDurationCheck();
        });
        __publicField(this, "handlePause", (e)=>{
            this.isPlaying = false;
            if (!this.isLoading) {
                this.props.onPause(e);
            }
        });
        __publicField(this, "handleEnded", ()=>{
            const { activePlayer, loop, onEnded } = this.props;
            if (activePlayer.loopOnEnded && loop) {
                this.seekTo(0);
            }
            if (!loop) {
                this.isPlaying = false;
                onEnded();
            }
        });
        __publicField(this, "handleError", (...args)=>{
            this.isLoading = false;
            this.props.onError(...args);
        });
        __publicField(this, "handleDurationCheck", ()=>{
            clearTimeout(this.durationCheckTimeout);
            const duration = this.getDuration();
            if (duration) {
                if (!this.onDurationCalled) {
                    this.props.onDuration(duration);
                    this.onDurationCalled = true;
                }
            } else {
                this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
            }
        });
        __publicField(this, "handleLoaded", ()=>{
            this.isLoading = false;
        });
    }
    componentDidMount() {
        this.mounted = true;
    }
    componentWillUnmount() {
        clearTimeout(this.progressTimeout);
        clearTimeout(this.durationCheckTimeout);
        if (this.isReady && this.props.stopOnUnmount) {
            this.player.stop();
            if (this.player.disablePIP) {
                this.player.disablePIP();
            }
        }
        this.mounted = false;
    }
    componentDidUpdate(prevProps) {
        if (!this.player) {
            return;
        }
        const { url, playing, volume, muted, playbackRate, pip, loop, activePlayer, disableDeferredLoading } = this.props;
        if (!(0, import_react_fast_compare.default)(prevProps.url, url)) {
            if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, import_utils.isMediaStream)(url)) {
                console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
                this.loadOnReady = url;
                return;
            }
            this.isLoading = true;
            this.startOnPlay = true;
            this.onDurationCalled = false;
            this.player.load(url, this.isReady);
        }
        if (!prevProps.playing && playing && !this.isPlaying) {
            this.player.play();
        }
        if (prevProps.playing && !playing && this.isPlaying) {
            this.player.pause();
        }
        if (!prevProps.pip && pip && this.player.enablePIP) {
            this.player.enablePIP();
        }
        if (prevProps.pip && !pip && this.player.disablePIP) {
            this.player.disablePIP();
        }
        if (prevProps.volume !== volume && volume !== null) {
            this.player.setVolume(volume);
        }
        if (prevProps.muted !== muted) {
            if (muted) {
                this.player.mute();
            } else {
                this.player.unmute();
                if (volume !== null) {
                    setTimeout(()=>this.player.setVolume(volume));
                }
            }
        }
        if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
            this.player.setPlaybackRate(playbackRate);
        }
        if (prevProps.loop !== loop && this.player.setLoop) {
            this.player.setLoop(loop);
        }
    }
    getDuration() {
        if (!this.isReady) return null;
        return this.player.getDuration();
    }
    getCurrentTime() {
        if (!this.isReady) return null;
        return this.player.getCurrentTime();
    }
    getSecondsLoaded() {
        if (!this.isReady) return null;
        return this.player.getSecondsLoaded();
    }
    seekTo(amount, type, keepPlaying) {
        if (!this.isReady) {
            if (amount !== 0) {
                this.seekOnPlay = amount;
                setTimeout(()=>{
                    this.seekOnPlay = null;
                }, SEEK_ON_PLAY_EXPIRY);
            }
            return;
        }
        const isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
        if (isFraction) {
            const duration = this.player.getDuration();
            if (!duration) {
                console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
                return;
            }
            this.player.seekTo(duration * amount, keepPlaying);
            return;
        }
        this.player.seekTo(amount, keepPlaying);
    }
    render() {
        const Player2 = this.props.activePlayer;
        if (!Player2) {
            return null;
        }
        return /* @__PURE__ */ import_react.default.createElement(Player2, {
            ...this.props,
            onMount: this.handlePlayerMount,
            onReady: this.handleReady,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onEnded: this.handleEnded,
            onLoaded: this.handleLoaded,
            onError: this.handleError
        });
    }
}
__publicField(Player, "displayName", "Player");
__publicField(Player, "propTypes", import_props.propTypes);
__publicField(Player, "defaultProps", import_props.defaultProps);
}}),
"[project]/node_modules/react-player/lib/ReactPlayer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var ReactPlayer_exports = {};
__export(ReactPlayer_exports, {
    createReactPlayer: ()=>createReactPlayer
});
module.exports = __toCommonJS(ReactPlayer_exports);
var import_react = __toESM(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var import_deepmerge = __toESM(__turbopack_require__("[project]/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)"));
var import_memoize_one = __toESM(__turbopack_require__("[project]/node_modules/memoize-one/dist/memoize-one.esm.js [app-client] (ecmascript)"));
var import_react_fast_compare = __toESM(__turbopack_require__("[project]/node_modules/react-fast-compare/index.js [app-client] (ecmascript)"));
var import_props = __turbopack_require__("[project]/node_modules/react-player/lib/props.js [app-client] (ecmascript)");
var import_utils = __turbopack_require__("[project]/node_modules/react-player/lib/utils.js [app-client] (ecmascript)");
var import_Player = __toESM(__turbopack_require__("[project]/node_modules/react-player/lib/Player.js [app-client] (ecmascript)"));
const Preview = (0, import_utils.lazy)(()=>__turbopack_require__("[project]/node_modules/react-player/lib/Preview.js [app-client] (ecmascript, async loader)")(__turbopack_import__));
const IS_BROWSER = typeof window !== "undefined" && window.document && typeof document !== "undefined";
const IS_GLOBAL = typeof global !== "undefined" && global.window && global.window.document;
const SUPPORTED_PROPS = Object.keys(import_props.propTypes);
const UniversalSuspense = IS_BROWSER || IS_GLOBAL ? import_react.Suspense : ()=>null;
const customPlayers = [];
const createReactPlayer = (players, fallback)=>{
    var _a;
    return _a = class extends import_react.Component {
        constructor(){
            super(...arguments);
            __publicField(this, "state", {
                showPreview: !!this.props.light
            });
            // Use references, as refs is used by React
            __publicField(this, "references", {
                wrapper: (wrapper)=>{
                    this.wrapper = wrapper;
                },
                player: (player)=>{
                    this.player = player;
                }
            });
            __publicField(this, "handleClickPreview", (e)=>{
                this.setState({
                    showPreview: false
                });
                this.props.onClickPreview(e);
            });
            __publicField(this, "showPreview", ()=>{
                this.setState({
                    showPreview: true
                });
            });
            __publicField(this, "getDuration", ()=>{
                if (!this.player) return null;
                return this.player.getDuration();
            });
            __publicField(this, "getCurrentTime", ()=>{
                if (!this.player) return null;
                return this.player.getCurrentTime();
            });
            __publicField(this, "getSecondsLoaded", ()=>{
                if (!this.player) return null;
                return this.player.getSecondsLoaded();
            });
            __publicField(this, "getInternalPlayer", (key = "player")=>{
                if (!this.player) return null;
                return this.player.getInternalPlayer(key);
            });
            __publicField(this, "seekTo", (fraction, type, keepPlaying)=>{
                if (!this.player) return null;
                this.player.seekTo(fraction, type, keepPlaying);
            });
            __publicField(this, "handleReady", ()=>{
                this.props.onReady(this);
            });
            __publicField(this, "getActivePlayer", (0, import_memoize_one.default)((url)=>{
                for (const player of [
                    ...customPlayers,
                    ...players
                ]){
                    if (player.canPlay(url)) {
                        return player;
                    }
                }
                if (fallback) {
                    return fallback;
                }
                return null;
            }));
            __publicField(this, "getConfig", (0, import_memoize_one.default)((url, key)=>{
                const { config } = this.props;
                return import_deepmerge.default.all([
                    import_props.defaultProps.config,
                    import_props.defaultProps.config[key] || {},
                    config,
                    config[key] || {}
                ]);
            }));
            __publicField(this, "getAttributes", (0, import_memoize_one.default)((url)=>{
                return (0, import_utils.omit)(this.props, SUPPORTED_PROPS);
            }));
            __publicField(this, "renderActivePlayer", (url)=>{
                if (!url) return null;
                const player = this.getActivePlayer(url);
                if (!player) return null;
                const config = this.getConfig(url, player.key);
                return /* @__PURE__ */ import_react.default.createElement(import_Player.default, {
                    ...this.props,
                    key: player.key,
                    ref: this.references.player,
                    config,
                    activePlayer: player.lazyPlayer || player,
                    onReady: this.handleReady
                });
            });
        }
        shouldComponentUpdate(nextProps, nextState) {
            return !(0, import_react_fast_compare.default)(this.props, nextProps) || !(0, import_react_fast_compare.default)(this.state, nextState);
        }
        componentDidUpdate(prevProps) {
            const { light } = this.props;
            if (!prevProps.light && light) {
                this.setState({
                    showPreview: true
                });
            }
            if (prevProps.light && !light) {
                this.setState({
                    showPreview: false
                });
            }
        }
        renderPreview(url) {
            if (!url) return null;
            const { light, playIcon, previewTabIndex, oEmbedUrl, previewAriaLabel } = this.props;
            return /* @__PURE__ */ import_react.default.createElement(Preview, {
                url,
                light,
                playIcon,
                previewTabIndex,
                previewAriaLabel,
                oEmbedUrl,
                onClick: this.handleClickPreview
            });
        }
        render() {
            const { url, style, width, height, fallback: fallback2, wrapper: Wrapper } = this.props;
            const { showPreview } = this.state;
            const attributes = this.getAttributes(url);
            const wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
            return /* @__PURE__ */ import_react.default.createElement(Wrapper, {
                ref: wrapperRef,
                style: {
                    ...style,
                    width,
                    height
                },
                ...attributes
            }, /* @__PURE__ */ import_react.default.createElement(UniversalSuspense, {
                fallback: fallback2
            }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
        }
    }, __publicField(_a, "displayName", "ReactPlayer"), __publicField(_a, "propTypes", import_props.propTypes), __publicField(_a, "defaultProps", import_props.defaultProps), __publicField(_a, "addCustomPlayer", (player)=>{
        customPlayers.push(player);
    }), __publicField(_a, "removeCustomPlayers", ()=>{
        customPlayers.length = 0;
    }), __publicField(_a, "canPlay", (url)=>{
        for (const Player2 of [
            ...customPlayers,
            ...players
        ]){
            if (Player2.canPlay(url)) {
                return true;
            }
        }
        return false;
    }), __publicField(_a, "canEnablePIP", (url)=>{
        for (const Player2 of [
            ...customPlayers,
            ...players
        ]){
            if (Player2.canEnablePIP && Player2.canEnablePIP(url)) {
                return true;
            }
        }
        return false;
    }), _a;
};
}}),
"[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var src_exports = {};
__export(src_exports, {
    default: ()=>src_default
});
module.exports = __toCommonJS(src_exports);
var import_players = __toESM(__turbopack_require__("[project]/node_modules/react-player/lib/players/index.js [app-client] (ecmascript)"));
var import_ReactPlayer = __turbopack_require__("[project]/node_modules/react-player/lib/ReactPlayer.js [app-client] (ecmascript)");
const fallback = import_players.default[import_players.default.length - 1];
var src_default = (0, import_ReactPlayer.createReactPlayer)(import_players.default, fallback);
}}),
}]);

//# sourceMappingURL=_f6be59._.js.map