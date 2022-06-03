import gulp from "gulp";
import squoosh from "gulp-squoosh";
import path from "path";
import changed from "gulp-changed";
import svgMin from "gulp-svgmin";

const destinationPath = "build/img";

function optimizeVector() {
	return gulp
		.src("source/images/**/*.svg")
		.pipe(svgMin())
		.pipe(gulp.dest(destinationPath));
}

function optimizeRaster() {
	return gulp
		.src("source/images/**/*.{jpg,png}")
		.pipe(changed(destinationPath))
		.pipe(
			squoosh(({
				filePath
			}) => ({
				encodeOptions: {
					/*
					avif: {},
					webp: {
						quality: 80,
					},
					*/
					...(path.extname(filePath) === ".png" ?
						{
							oxipng: {},
						} :
						{
							mozjpeg: {
								quality: 80,
							},
						}),
				},
			}))
		)

		.pipe(gulp.dest(destinationPath));
}

export default gulp.parallel(optimizeVector, optimizeRaster);
