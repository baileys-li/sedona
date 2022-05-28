import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "gulp-pugbem";

export default function compileHTML() {
	return gulp
		.src("source/pages/*.pug")
		.pipe(
			pug({
				pretty: true,
				plugins: [pugBEM],
			})
		)
		.pipe(gulp.dest("build"));
}
