(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_712bc7._.js", {

"[project]/src/components/camera_frame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const CameraStream = ({ sseUrl, className })=>{
    _s();
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraStream.useEffect": ()=>{
            const eventSource = new EventSource(sseUrl);
            eventSource.onopen = ({
                "CameraStream.useEffect": ()=>{
                    console.log('SSE connection established');
                    setIsConnected(true);
                }
            })["CameraStream.useEffect"];
            eventSource.addEventListener('close', {
                "CameraStream.useEffect": ()=>{
                    console.log('SSE connection closed');
                    setIsConnected(false);
                }
            }["CameraStream.useEffect"]);
            eventSource.onerror = ({
                "CameraStream.useEffect": (err)=>{
                    console.error('SSE Error:', err);
                    setError('Lỗi kết nối SSE.');
                }
            })["CameraStream.useEffect"];
            eventSource.onmessage = ({
                "CameraStream.useEffect": (event)=>{
                    const frameData = event.data;
                    if (frameData === 'No frame available') {
                        console.log('No frame available');
                    } else {
                        try {
                            const bytes = new Uint8Array(frameData.match(/.{1,2}/g)?.map({
                                "CameraStream.useEffect": (byte)=>parseInt(byte, 16)
                            }["CameraStream.useEffect"]) || []);
                            const blob = new Blob([
                                bytes
                            ], {
                                type: 'image/jpeg'
                            });
                            const url = URL.createObjectURL(blob);
                            if (imgRef.current) {
                                imgRef.current.src = url;
                            }
                        } catch (err) {
                            console.error('Error processing frame data:', err);
                        }
                    }
                }
            })["CameraStream.useEffect"];
            return ({
                "CameraStream.useEffect": ()=>{
                    eventSource.close();
                }
            })["CameraStream.useEffect"];
        }
    }["CameraStream.useEffect"], [
        sseUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-[70vh] rounded-lg overflow-hidden ${className || ''}`,
        children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-red-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/camera_frame.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 60,
            columnNumber: 9
        }, this) : isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imgRef,
                alt: "Video stream",
                className: "max-w-full max-h-full object-contain rounded-lg shadow-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/camera_frame.tsx",
                lineNumber: 65,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 64,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-yellow-500",
            children: "Đang kết nối..."
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/camera_frame.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(CameraStream, "4ikExvxBgZwPoRG2QTHEsEYKn2w=");
_c = CameraStream;
const __TURBOPACK__default__export__ = CameraStream;
var _c;
__turbopack_refresh__.register(_c, "CameraStream");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera_frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/camera_frame.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/FPSDisplay'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
const CameraPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 bg-[#1A202C] text-white min-h-[90vh] rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera_frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sseUrl: "http://160.22.122.122:8001/sse",
                className: "mx-auto sm:w-4/5"
            }, void 0, false, {
                fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FPSDisplay, {}, void 0, false, {
                fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/camera/[cameraName]/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
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
}]);

//# sourceMappingURL=src_712bc7._.js.map