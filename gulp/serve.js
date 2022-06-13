import gulp from "gulp";
import browserSync from "browser-sync";
import compileHTML from "./compileHTML.js";
import optimizeImages from "./optimizeImages.js";
import makeSprite from "./spriteSVG.js";
import copyAssets, { copyFonts } from "./copyAssets.js";
import compileSass from "./complileSass.js";

export const build = gulp.parallel(compileHTML, optimizeImages, makeSprite, copyAssets, compileSass, copyFonts);

const server = browserSync.create();

function streamStyle () {
	return compileSass().pipe(server.stream())
}

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
	gulp.watch("source/images/**/*", gulp.series(optimizeImages, server.reload));
	gulp.watch("source/icons/**/*.svg", gulp.series(makeSprite,server.reload));
	gulp.watch("source/sass/**/*.scss", streamStyle);
}
