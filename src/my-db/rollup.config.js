import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = {
  input: "./index.js",
  output: {
  	file: "./dist/index.js",
    format: "umd",
    name: "myDB",
    exports: "named",
  },
  plugins: [nodeResolve()]
}

export default config
