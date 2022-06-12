import gulp from "gulp";

export function copyFonts() {
	const fontFiles = [400, 700].map(
		(weight) =>
			`node_modules/@fontsource/pt-sans/files/pt-sans-cyrillic-${weight}-normal.woff2`
	);

	return gulp.src(fontFiles).pipe(gulp.dest("build/fonts"));
}

export default function copyAssets() {
	return gulp.src("source/assets/**/*").pipe(gulp.dest("build"));
}
