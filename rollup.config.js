import babel from "rollup-plugin-babel"

export default {
	input: "src/createRequester.js",
	output: {
		file: "dist/index.js",
		format: "es",
	},
	external: ["rxjs/ajax", "querystring"],
	plugins: [
		babel(),
	],
}
