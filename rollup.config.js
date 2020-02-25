import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"

export default {
	input: "src/createRequester.js",
	output: {
		file: "dist/index.js",
		format: "es",
	},
	external: ["rxjs/ajax", "querystring"],
	plugins: [
		babel(),
		commonjs(),
	],
}
