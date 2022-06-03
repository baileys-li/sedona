import gulp from "gulp";
import squoosh from "gulp-squoosh";
import path from "path";
import changed from "gulp-changed";

const destinationPath = "build/img"

export default function optimizeImages() {
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
								quality: 80
							},
						}),
				},
			}))
		)

		.pipe(gulp.dest(destinationPath));
}
