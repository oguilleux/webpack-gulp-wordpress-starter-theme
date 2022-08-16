import gulp from 'gulp';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import notify from 'gulp-notify';

// utils
import pumped from '../../utils/pumped';

// config
import config from'../../config/styles';

var plugins = [
	autoprefixer(config.options.autoprefixer),
	cssnano(config.options.minify)
];

/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
export default function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(sass.sync(config.options.sass).on('error', sass.logError))

		.pipe(postcss(plugins))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			"message": pumped("SCSS Compiled & Minified."),
			"onLast": true
		}));
};
