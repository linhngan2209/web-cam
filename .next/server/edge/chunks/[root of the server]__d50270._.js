(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__d50270._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// // middleware.ts
// import axios from 'axios';
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import axiosInstance from './services/apiClient';
// export default async function middleware(request: NextRequest) {
//   const protectedRoutes = ['/authenticated']
//   console.log('Request:', request)
//   const isProtectedRoute = protectedRoutes.some(route => 
//     request.nextUrl.pathname.startsWith(route)
//   )
//   // Nếu là route được bảo vệ
//   if (isProtectedRoute) {
//     try {
//       // Gọi API check token của bạn bằng axios
//       const response = await axiosInstance.get('/api/auth/check-token')
//         console.log('Response:', response)
//       if (response.status !== 200) {
//         return NextResponse.redirect(new URL('/login', request.url))
//       }
//     } catch (error) {
//       // Nếu có lỗi kết nối
//       return NextResponse.redirect(new URL('/login', request.url))
//     }
//   }
//   return NextResponse.next()
// }
// export const config = {
//   matcher: ['/authenticated/:path*']
// }
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d50270._.js.map