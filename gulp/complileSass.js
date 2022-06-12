import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import csso from "postcss-csso";

// import minmax from "postcss-media-minmax";

const sass = gulpSass(dartSass);

export default function compileSass() {
	const isDev = process.env.NODE_ENV === "development";

	const pluginsPostCSS = isDev
		? [autoprefixer()]
		: [
				// minmax(),
				autoprefixer(),
				cssnano({
					// preset: "advanced",
				}),
				csso(),
		];

	return gulp
		.src('source/sass/*.scss', {
			sourcemaps: isDev,
		})
		.pipe(
			sass({
				outputStyle: isDev ? "expanded" : "compressed",
				indentType: "tab",
				includePaths: ["node_modules"],
			}).on("error", sass.logError)
		)
		.pipe(postcss(pluginsPostCSS))

		.pipe(
			gulp.dest('build/css', {
				sourcemaps: ".",
			})
		);
}
