import gulp from "gulp";
import browserSync from "browser-sync";
import compileHTML from "./compileHTML.js";
import optimizeImages from "./optimizeImages.js";
import makeSprite from "./spriteSVG.js";
import copyAssets from "./copyAssets.js";

export const build = gulp.series(compileHTML, optimizeImages, makeSprite, copyAssets);

const server = browserSync.create();

export default function serve() {
	build();

	server.init({
		server: "./build",
		notify: true,
		cors: true,
		open: true,
		watch: true,
	});

	gulp.watch("source/pages/**/*.pug", compileHTML);
	gulp.watch("source/assets/**/*", gulp.series(copyAssets, server.reload));
	gulp.watch("source/images/**/*.{jpg,png}", gulp.series(optimizeImages, server.reload));
	gulp.watch("source/icons/**/*.svg", makeSprite);
}
