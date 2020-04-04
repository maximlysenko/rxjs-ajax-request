import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import {uglify} from "rollup-plugin-uglify"

export default {
	input: "src/createRequester.js",
	output: {
		file: "dist/index.js",
		format: "cjs",
	},
	external: ["rxjs/ajax", "querystring"],
	plugins: [
		babel(),
		commonjs(),
		uglify(),
	],
}
