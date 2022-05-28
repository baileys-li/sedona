import gulp from "gulp";
import { htmlValidator } from "gulp-w3c-html-validator";

export default function validateHtml() {
		return gulp
			.src("build/*.html")
			.pipe(htmlValidator.analyzer())
			.pipe(htmlValidator.reporter());
	}

