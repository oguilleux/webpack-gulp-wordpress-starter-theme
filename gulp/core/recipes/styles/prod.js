import gulp from 'gulp';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import notify from 'gulp-notify';

// utils
import pumped from '../../utils/pumped.js';

// config
import config from '../../config/styles.js';

const plugins = [
	autoprefixer(config.options.autoprefixer),
	cssnano(config.options.minify)
];

const sass = gulpSass(dartSass);

/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
export default function stylesProd() {
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
