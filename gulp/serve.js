import gulp from "gulp";
import browserSync from "browser-sync";
import compileHTML from "./compileHTML.js";

// const server = browserSync.create();

export default function serve() {

browserSync.init({
	server: "./build",
	notify: true,
	cors: true,
	open: true,
	watch: true
});


	gulp.watch("source/pages/**/*.pug", compileHTML);
	// gulp.watch("build/*.html", browserSync.reload);
}
