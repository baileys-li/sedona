import gulp from "gulp";
import svgstore from "gulp-svgstore";
import { readdirSync } from "fs";
import svgMin from "gulp-svgmin";

export default async function spriteSVG(done) {
	const folders = readdirSync("source/icons");

	await folders.forEach((folder) =>
		gulp
			.src(`source/icons/${folder}/*.svg`)
			.pipe(
				svgstore({
					inlineSvg: true,
				})
			)
			.pipe(
				svgMin({
					plugins: [{ cleanupIDs: false }],
				})
			)
			.pipe(gulp.dest("build/img"))
	);

	return done();
}
