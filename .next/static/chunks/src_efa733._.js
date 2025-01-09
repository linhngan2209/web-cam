(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_efa733._.js", {

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
            let eventSource = null;
            let reconnectTimeout = null;
            const connect = {
                "CameraStream.useEffect.connect": ()=>{
                    eventSource = new EventSource(sseUrl);
                    eventSource.onopen = ({
                        "CameraStream.useEffect.connect": ()=>{
                            console.log('Kết nối SSE đã được thiết lập');
                            setIsConnected(true);
                            setError(null);
                        }
                    })["CameraStream.useEffect.connect"];
                    eventSource.addEventListener('close', {
                        "CameraStream.useEffect.connect": ()=>{
                            console.log('Kết nối SSE đã bị đóng');
                            setIsConnected(false);
                            setError('Kết nối đã đóng.');
                            reconnect();
                        }
                    }["CameraStream.useEffect.connect"]);
                    eventSource.onerror = ({
                        "CameraStream.useEffect.connect": (err)=>{
                            console.error('Lỗi SSE:', err);
                            setError('Lỗi kết nối SSE.');
                            reconnect();
                        }
                    })["CameraStream.useEffect.connect"];
                    eventSource.onmessage = ({
                        "CameraStream.useEffect.connect": (event)=>{
                            const frameData = event.data;
                            if (frameData === 'No frame available') {
                                console.log('Không có khung hình nào');
                            } else {
                                try {
                                    const bytes = new Uint8Array(frameData.match(/.{1,2}/g)?.map({
                                        "CameraStream.useEffect.connect": (byte)=>parseInt(byte, 16)
                                    }["CameraStream.useEffect.connect"]) || []);
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
                                    console.error('Lỗi khi xử lý dữ liệu khung hình:', err);
                                }
                            }
                        }
                    })["CameraStream.useEffect.connect"];
                }
            }["CameraStream.useEffect.connect"];
            const reconnect = {
                "CameraStream.useEffect.reconnect": ()=>{
                    if (reconnectTimeout) {
                        clearTimeout(reconnectTimeout);
                    }
                    reconnectTimeout = setTimeout({
                        "CameraStream.useEffect.reconnect": ()=>{
                            connect();
                        }
                    }["CameraStream.useEffect.reconnect"], 3000);
                }
            }["CameraStream.useEffect.reconnect"];
            connect();
            return ({
                "CameraStream.useEffect": ()=>{
                    if (eventSource) {
                        eventSource.close();
                    }
                    if (reconnectTimeout) {
                        clearTimeout(reconnectTimeout);
                    }
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
                lineNumber: 86,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 85,
            columnNumber: 9
        }, this) : isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imgRef,
                alt: "Video stream",
                className: "max-w-full max-h-full object-contain rounded-lg shadow-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/camera_frame.tsx",
                lineNumber: 90,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 89,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-yellow-500",
            children: "Đang kết nối..."
        }, void 0, false, {
            fileName: "[project]/src/components/camera_frame.tsx",
            lineNumber: 97,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/camera_frame.tsx",
        lineNumber: 83,
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
"[project]/src/components/Fps_display.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const FPSDisplay = ()=>{
    _s();
    const [fps, setFPS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Loading...');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FPSDisplay.useEffect": ()=>{
            const fetchFPS = {
                "FPSDisplay.useEffect.fetchFPS": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('http://160.22.122.122:8001/fps');
                        setFPS(response.data.fps);
                    } catch (error) {
                        console.error('Error fetching FPS:', error);
                        setFPS('Error fetching FPS');
                    }
                }
            }["FPSDisplay.useEffect.fetchFPS"];
            const intervalId = setInterval(fetchFPS, 1000);
            return ({
                "FPSDisplay.useEffect": ()=>clearInterval(intervalId)
            })["FPSDisplay.useEffect"];
        }
    }["FPSDisplay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: [
            "FPS: ",
            fps
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Fps_display.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
};
_s(FPSDisplay, "Ctdk4WUBJdchbtk7R5r5+AYtEOg=");
_c = FPSDisplay;
const __TURBOPACK__default__export__ = FPSDisplay;
var _c;
__turbopack_refresh__.register(_c, "FPSDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/camera/cam4/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera_frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/camera_frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fps_display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Fps_display.tsx [app-client] (ecmascript)"); // Import thành phần FPSDisplay
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
                fileName: "[project]/src/app/camera/cam4/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fps_display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/camera/cam4/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/camera/cam4/page.tsx",
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
"[project]/src/app/camera/cam4/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_efa733._.js.map