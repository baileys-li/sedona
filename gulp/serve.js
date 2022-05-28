import gulp from "gulp";
import browserSync from "browser-sync";
import compileHTML from "./compileHTML.js";

const server = browserSync.create();

export default function serve() {
	server.init({
		server: {
			baseDir: "./build",
		},
		notify: true,
		cors: true,
	});

	gulp.watch("source/pages/**/*.pug", gulp.series(compileHTML, server.reload));
}
