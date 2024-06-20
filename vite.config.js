import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from 'vite';
// import path from 'path-browserify';
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
// import { viteExternalsPlugin } from 'vite-plugin-externals';

// export default defineConfig({
//   resolve: {
//     alias: {
//       'path': 'path-browserify',
//       'url': 'url',
//       'fs': 'browserify-fs'
//     }
//   },
//   plugins: [
//     viteExternalsPlugin({
//       'source-map-js': 'SourceMap',
//       'path': 'path',
//       'fs': 'fs',
//       'url': 'url'
//     })
//   ],
//   optimizeDeps: {
//     esbuildOptions: {
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           process: true,
//           buffer: true
//         }),
//         NodeModulesPolyfillPlugin()
//       ]
//     }
//   }
// });

