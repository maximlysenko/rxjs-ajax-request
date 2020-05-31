import { uglify } from "rollup-plugin-uglify";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  external: ["rxjs/ajax", "querystring"],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
    }),
    uglify(),
  ],
};
