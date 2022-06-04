import gulp from "gulp";

export default function copyAssets() {
	return gulp.src("source/assets/**/*").pipe(gulp.dest("build"));
}
